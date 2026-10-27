const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()
const axios = require('axios')

// 内置配料库（首次部署后可通过数据库管理，此处作为兜底）
const fallbackIngredients = require('./ingredients-data.js')
// 过敏源检测（过敏源 id 列表由前端随事件传入）
const { detectAllergens } = require('./allergens-data.js')

// 默认识别配置（兼容 OpenAI Chat Completions 协议，用户可在「设置」中改用其它厂商）
const DEFAULT_API_URL = 'https://open.bigmodel.cn/api/paas/v4/chat/completions'
const DEFAULT_MODEL = 'glm-4v-flash'

/**
 * 调用视觉模型识别配料表图片
 * @param {string} base64Image 图片 base64（不含 data: 前缀）
 * @param {string} [userApiKey] 用户在「设置」中配置的 API Key，优先于云函数环境变量
 * @param {string} [userApiUrl] 用户在「设置」中配置的接口地址，留空用默认值
 * @param {string} [userModel] 用户在「设置」中配置的模型名，留空用默认值
 * @returns {Promise<object>} 识别结果，或 { __aiError: true, message } 表示调用失败
 */
async function recognizeByAI(base64Image, userApiKey, userApiUrl, userModel) {
  const apiKey = userApiKey || process.env.GLM_API_KEY
  const apiUrl = userApiUrl || DEFAULT_API_URL
  const model = userModel || DEFAULT_MODEL
  const usingUserKey = !!userApiKey
  if (!apiKey) {
    console.warn('[scanIngredient] 未配置 API Key（设置中未填写且无环境变量）')
    return {
      __aiError: true,
      message: '未配置 API Key，请在「我的 → 设置」中填写自己的 API Key 后重试'
    }
  }
  const prompt = `请识别这张图片，首先判断图片是否为「食品配料表」（食品包装上的配料列表文字，通常以"配料"开头）：
1. 如果不是食品配料表（如风景、人物、动物、其他物体），返回 {"isFood": false}
2. 如果是食品配料表，提取每个配料并返回完整信息：
   - isFood: true
   - foodName: 食品名称（从包装识别，识别不到写"某品牌食品"）
   - ingredientText: 配料表原文完整文字（含标点）
   - ingredients: 配料对象数组，每个对象含：name(配料名称)、safetyLevel(safe/caution/danger)、categoryLabel(分类中文名，如基础原料/甜味剂/防腐剂/抗氧化剂/酸度调节剂/增稠剂/乳化剂/着色剂/护色剂/营养强化剂/稳定剂/增味剂)、function(功能描述一句话)、riskDesc(风险描述，无风险留空字符串)

严格 JSON 格式（双引号），不要 markdown 标记或其他文字：
非食品：{"isFood": false}
食品：{"isFood": true, "foodName": "...", "ingredientText": "...", "ingredients": [{"name":"...","safetyLevel":"safe","categoryLabel":"基础原料","function":"...","riskDesc":""}]}`

  try {
    const res = await axios.post(apiUrl, {
      model,
      messages: [{
        role: 'user',
        content: [
          { type: 'text', text: prompt },
          { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${base64Image}` } }
        ]
      }]
    }, {
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      timeout: 30000
    })
    const content = res.data && res.data.choices && res.data.choices[0]
      ? res.data.choices[0].message.content
      : ''
    const parsed = parseAiResponse(content)
    if (!parsed) {
      return {
        __aiError: true,
        message: usingUserKey
          ? '自定义模型返回格式异常，请检查模型是否支持图片输入'
          : '内置模型返回格式异常，建议在「我的 → 设置」中配置自己的 API Key'
      }
    }
    return parsed
  } catch (err) {
    console.error('[scanIngredient] AI 调用失败:', err.message || err)
    return {
      __aiError: true,
      message: usingUserKey
        ? `自定义模型调用失败：${err.message || '网络错误'}，请检查 Key 是否有效`
        : '内置模型调用失败，建议在「我的 → 设置」中配置自己的 API Key 后重试'
    }
  }
}

/**
 * 解析模型返回内容，提取 JSON
 */
function parseAiResponse(content) {
  if (!content) return null
  // 容错：模型可能用 ```json ... ``` 包裹，直接正则提取首个 {...}
  const match = content.match(/\{[\s\S]*\}/)
  if (!match) {
    console.warn('[scanIngredient] GLM 返回非 JSON:', content.slice(0, 200))
    return null
  }
  let parsed
  try {
    parsed = JSON.parse(match[0])
  } catch (e) {
    // 容错：GLM 偶尔返回单引号 JSON（如 ['糯米','植物油']），替换为双引号重试
    try {
      parsed = JSON.parse(match[0].replace(/'/g, '"'))
    } catch (e2) {
      console.error('[scanIngredient] JSON 解析失败:', e2.message)
      return null
    }
  }
  // 非食品图片
  if (parsed.isFood === false) {
    return { isFood: false, foodName: '', ingredientText: '', ingredients: [] }
  }
  // 食品配料表
  if (!parsed.ingredients || !Array.isArray(parsed.ingredients)) {
    console.warn('[scanIngredient] ingredients 非数组:', parsed)
    return null
  }
  return {
    isFood: true,
    foodName: parsed.foodName || '某品牌食品',
    ingredientText: parsed.ingredientText || '',
    ingredients: parsed.ingredients
  }
}

/**
 * 读取云数据库已收录配料
 */
async function getStoredIngredients() {
  try {
    const r = await db.collection('ingredients').get()
    return r.data || []
  } catch (e) {
    console.warn('[scanIngredient] 读取收录配料失败:', e.message)
    return []
  }
}

/**
 * 收录未匹配配料到云数据库（去重）
 */
async function storeIngredient(item) {
  try {
    const exist = await db.collection('ingredients').where({ name: item.name }).get()
    if (!exist.data.length) {
      await db.collection('ingredients').add({ data: item })
    }
  } catch (e) {
    console.warn('[scanIngredient] 收录失败:', e.message)
  }
}

/**
 * 名称归一化（去空格、去括号内容），用于跨来源名称匹配
 */
function normName(s) {
  return (s || '').replace(/\s+/g, '').replace(/[（(].*?[)）]/g, '')
}

/**
 * 从配料表原文中解析出所有配料名称
 * 只在括号外按顿号/逗号/分号分割（保留复合配料括号内完整内容），去重保序
 */
function parseIngredientText(text) {
  if (!text) return []
  const s = text
    .replace(/^\s*(配料表?|成分表?|原料)\s*[:：]?\s*/, '')
    .replace(/[。.；;]?\s*$/, '')
  // 跟踪括号深度，仅在括号外切分
  const parts = []
  let buf = ''
  let depth = 0
  for (const ch of s) {
    if (ch === '（' || ch === '(') {
      depth++
    } else if (ch === '）' || ch === ')') {
      depth = Math.max(0, depth - 1)
    }
    if (depth === 0 && /[、，,；;]/.test(ch)) {
      parts.push(buf)
      buf = ''
    } else {
      buf += ch
    }
  }
  parts.push(buf)
  const names = []
  for (const part of parts) {
    const name = part.replace(/\s+/g, '').trim()
    if (!name) continue
    if (/^[（(].*[)）]$/.test(name)) continue
    if (!names.includes(name)) names.push(name)
  }
  return names
}

/**
 * 合并「原文解析名」与「GLM 返回名」，归一化去重保序
 */
function mergeNames(textNames, glmNames) {
  const out = []
  const seen = new Set()
  for (const n of [...textNames, ...glmNames]) {
    const key = normName(n)
    if (!key || seen.has(key)) continue
    seen.add(key)
    out.push(n)
  }
  return out
}

/**
 * 根据配料表原文 + GLM 配料对象匹配兜底库，生成识别结果
 * 以原文解析出的完整配料列表为基准，GLM 漏提的配料也会列出
 * 支持 name 和 alias 匹配，风险提示用 riskDesc 详细描述
 * GLM 提供了信息但未收录的配料自动存入云数据库
 */
async function buildResult(foodName, ingredientText, ingredientObjects, allergenIds) {
  const stored = await getStoredIngredients()
  const allIngredients = [...fallbackIngredients, ...stored]

  // 原文解析 + GLM 返回合并，保证所有配料都列出
  const textNames = parseIngredientText(ingredientText)
  const baseNames = mergeNames(textNames, ingredientObjects.map(o => o.name))
  console.log('[scanIngredient] 原文解析', textNames.length, '种，GLM 返回', ingredientObjects.length, '种，合并展示', baseNames.length, '种')

  // 检测用户配置的过敏源
  const allergenAlerts = detectAllergens(baseNames, allergenIds || [])
  if (allergenAlerts.length) {
    console.warn('[scanIngredient] ⚠️ 检测到过敏源:', allergenAlerts.map(a => `${a.allergen}(${a.matchedIngredients.join(',')})`))
  }

  const unmatched = []
  const riskTipList = []
  const matched = baseNames.map((name, idx) => {
    const key = normName(name)
    const obj = ingredientObjects.find(o => normName(o.name) === key)
    const found = allIngredients.find(i =>
      normName(i.name) === key || (i.alias && i.alias.some(a => normName(a) === key))
    )
    const safetyLevel = found ? found.safetyLevel : (obj && obj.safetyLevel) || 'safe'
    const purpose = found ? found.function.split('，')[0] : ((obj && obj.function) || '').split('，')[0]
    const displayName = (obj && obj.name) || (found && found.name) || name
    const isRisk = safetyLevel !== 'safe'
    if (!found && obj) {
      unmatched.push({
        name: displayName,
        alias: [],
        category: 'baseMaterial',
        categoryLabel: obj.categoryLabel || '其他',
        function: obj.function || '',
        safetyLevel,
        riskDesc: obj.riskDesc || ''
      })
    }
    if (isRisk) {
      const desc = (found && found.riskDesc) || (obj && obj.riskDesc)
      riskTipList.push(`${displayName}：${desc || '需注意'}`)
    }
    return {
      name: displayName,
      order: idx + 1,
      isRisk,
      safetyLevel,
      purpose: purpose || undefined
    }
  })

  // 批量收录未匹配配料
  if (unmatched.length) {
    console.log('[scanIngredient] 收录未匹配配料:', unmatched.map(i => i.name))
    for (const item of unmatched) {
      await storeIngredient(item)
    }
  }

  const riskCount = matched.filter(i => i.isRisk).length
  let safetyLevel = 'safe'
  if (matched.some(i => i.safetyLevel === 'danger')) {
    safetyLevel = 'danger'
  } else if (matched.some(i => i.safetyLevel === 'caution')) {
    safetyLevel = 'caution'
  }

  const summaryMap = {
    safe: '该食品配料安全度较高，主要使用天然或公认安全的添加剂，可放心食用。',
    caution: '该食品含有部分需注意的添加剂，建议控制食用频率，敏感人群及儿童慎选。',
    danger: '该食品含有高风险添加剂，长期食用可能存在健康风险，建议尽量不吃或少量偶尔食用。'
  }

  return {
    foodName,
    ingredientText,
    ingredients: matched,
    safetyLevel,
    riskCount,
    summary: summaryMap[safetyLevel],
    riskTips: riskTipList.length ? riskTipList : undefined,
    allergenAlerts: allergenAlerts.length ? allergenAlerts : undefined
  }
}

/**
 * mock 兜底已移除：AI 调用失败时直接返回错误，提示用户在「我的 → 设置」配置自己的模型
 */

exports.main = async (event, context) => {
  try {
    const wxContext = cloud.getWXContext()
    const openid = wxContext.OPENID
    const { fileId, allergens, apiKey, apiUrl, model } = event

    console.log('[scanIngredient] 开始识别, fileId:', fileId)

    let result = null
    let aiErrorMessage = ''

    // 尝试下载云存储图片并调 AI 识别
    if (fileId && fileId.startsWith('cloud://')) {
      try {
        const dlRes = await cloud.downloadFile({ fileID: fileId })
        const base64Image = dlRes.fileContent.toString('base64')
        const recognized = await recognizeByAI(base64Image, apiKey, apiUrl, model)
        if (recognized && recognized.__aiError) {
          aiErrorMessage = recognized.message
          console.warn('[scanIngredient] AI 识别失败:', aiErrorMessage)
        } else if (recognized) {
          // 非食品图片：返回标记结果，由前端 toast 提示
          if (recognized.isFood === false) {
            result = {
              isFood: false,
              foodName: '',
              ingredientText: '',
              ingredients: [],
              safetyLevel: 'safe',
              riskCount: 0,
              summary: '该图片不是食品配料表'
            }
            result.imagePath = fileId
          } else {
            result = await buildResult(recognized.foodName, recognized.ingredientText, recognized.ingredients, allergens)
            result.isFood = true
            result.imagePath = fileId
          }
        }
      } catch (err) {
        console.error('[scanIngredient] 图片下载失败:', err.message || err)
        aiErrorMessage = '图片处理失败，请重试'
      }
    } else {
      aiErrorMessage = '图片上传失败，请重试'
    }

    // AI 调用失败：不回退 mock，直接返回错误让前端提示用户配置自己的模型
    if (!result) {
      return {
        code: 0,
        message: 'success',
        data: {
          aiError: true,
          aiErrorMessage: aiErrorMessage || 'AI 模型调用失败，请在「我的 → 设置」中配置自己的 API Key 后重试',
          isFood: true,
          foodName: '',
          ingredientText: '',
          ingredients: [],
          safetyLevel: 'safe',
          riskCount: 0,
          summary: '',
          imagePath: fileId || '',
          createTime: Date.now()
        }
      }
    }
    result.createTime = Date.now()

    // 保存扫描记录到数据库（记录按用户隔离，缺少 openid 时不保存）
    if (!openid) {
      console.warn('[scanIngredient] 未获取到 openid，跳过扫描记录保存')
    } else {
      try {
        await db.collection('scan_records').add({
          data: {
            _openid: openid,
            imageFileId: fileId || '',
            foodName: result.foodName,
            safetyLevel: result.safetyLevel,
            riskCount: result.riskCount,
            ingredientCount: result.ingredients.length,
            ingredients: result.ingredients,
            ingredientText: result.ingredientText,
            summary: result.summary,
            createTime: db.serverDate()
          }
        })
        // 累计用户扫描次数
        await db.collection('users').where({ _openid: openid }).update({
          data: { scanCount: db.command.inc(1) }
        })
      } catch (e) {
        console.error('[scanIngredient] 保存记录失败:', e)
      }
    }

    return { code: 0, message: 'success', data: result }
  } catch (err) {
    console.error('[scanIngredient] error:', err)
    return { code: -1, message: err.message || '服务异常', data: null }
  }
}
