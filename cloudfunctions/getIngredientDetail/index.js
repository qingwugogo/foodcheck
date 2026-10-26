const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()
const axios = require('axios')

// 内置完整配料库作为兜底（部署后应将完整数据写入 ingredients 集合）
const fallbackIngredients = require('./ingredients-data.js')

const GLM_API_URL = 'https://open.bigmodel.cn/api/paas/v4/chat/completions'
const GLM_MODEL = 'glm-4v-flash'
// 默认 Key 兜底（与 scanIngredient 共用），优先级：前端传入 > 环境变量 > 此默认
const DEFAULT_GLM_API_KEY = 'b55969a9a3eb4f18b0fa08851e66e3e9.psxc2bqyrYwjLeKL'

/**
 * 调 GLM 补全配料缺失的详细字段（action/description/usageLimit/riskDesc/standards）
 * 返回 null 表示补全失败（不阻塞主流程）
 */
async function enrichByGLM(name, categoryLabel, userApiKey) {
  const apiKey = userApiKey || process.env.GLM_API_KEY || DEFAULT_GLM_API_KEY
  if (!apiKey) {
    console.warn('[getIngredientDetail] 无有效 API Key，跳过补全')
    return null
  }
  const prompt = `请提供食品配料「${name}」（分类：${categoryLabel || '未知'}）的详细信息，严格 JSON 格式返回（双引号，不要 markdown 标记）：
{
  "action": "作用机理（它在食品中如何发挥作用，一句话）",
  "description": "详细说明（2-3句话：来源、制作工艺、在食品工业中的应用）",
  "usageLimit": "使用限量（如 GB 2760 中的典型限量；不确定就留空字符串，不要编造具体数字）",
  "riskDesc": "风险提示（过量食用的潜在风险及敏感人群；公认安全则留空字符串）",
  "standards": [{"code": "标准号", "type": "GB或T", "name": "标准全称", "regulation": "相关规定一句话"}]
}
注意：standards 只列出你确定真实存在的标准（如 GB 2760 食品添加剂使用标准），不确定的一律返回空数组 []，严禁编造标准号。`

  try {
    const res = await axios.post(GLM_API_URL, {
      model: GLM_MODEL,
      messages: [{ role: 'user', content: prompt }]
    }, {
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      timeout: 25000
    })
    const content = res.data && res.data.choices && res.data.choices[0]
      ? res.data.choices[0].message.content
      : ''
    const match = content.match(/\{[\s\S]*\}/)
    if (!match) return null
    let parsed
    try {
      parsed = JSON.parse(match[0])
    } catch (e) {
      parsed = JSON.parse(match[0].replace(/'/g, '"'))
    }
    return parsed
  } catch (e) {
    console.warn('[getIngredientDetail] GLM 补全失败:', e.message || e)
    return null
  }
}

exports.main = async (event, context) => {
  try {
    const { name, apiKey } = event
    if (!name) {
      return { code: -1, message: '缺少参数 name', data: null }
    }
    console.log('[getIngredientDetail] 收到参数 name=' + name)

    let item = null
    let docId = null

    // 优先查询数据库
    try {
      const res = await db.collection('ingredients')
        .where({ name: db.RegExp({ regexp: name, options: 'i' }) })
        .limit(1)
        .get()
      console.log('[getIngredientDetail] 数据库查询返回:', res.data.length, '条')
      if (res.data.length > 0) {
        item = res.data[0]
        docId = item._id
      }
    } catch (e) {
      console.warn('[getIngredientDetail] 数据库查询失败，使用兜底数据:', e.message || e)
    }

    // 兜底：从内置数据查找（支持精确名称 + 别名匹配 + 归一化匹配）
    if (!item) {
      const norm = s => (s || '').replace(/\s+/g, '').replace(/[（(].*?[)）]/g, '')
      item = fallbackIngredients.find(
        i => i.name === name
          || (i.alias && i.alias.includes(name))
          || norm(i.name) === norm(name)
          || (i.alias && i.alias.some(a => norm(a) === norm(name)))
      ) || null
      if (item) console.log('[getIngredientDetail] fallback 命中:', item.name)
    }

    if (!item) {
      console.warn('[getIngredientDetail] 未找到配料:', name)
      return { code: 0, message: 'not found', data: null }
    }

    // 字段不全 → GLM 补全并回写数据库（配料库自动丰富化）
    if (!item.action || !item.description) {
      console.log('[getIngredientDetail] 字段不全，调 GLM 补全:', item.name)
      const enriched = await enrichByGLM(item.name, item.categoryLabel, apiKey)
      if (enriched) {
        const patch = {}
        for (const k of ['action', 'description', 'usageLimit', 'riskDesc']) {
          if (!item[k] && enriched[k]) patch[k] = enriched[k]
        }
        if ((!item.standards || !item.standards.length) && Array.isArray(enriched.standards) && enriched.standards.length) {
          patch.standards = enriched.standards.filter(s => s && s.code && s.name)
          if (!patch.standards.length) delete patch.standards
        }
        if (Object.keys(patch).length) {
          item = { ...item, ...patch }
          // 回写数据库，下次直接用
          if (docId) {
            try {
              const updateData = { ...patch }
              delete updateData._id
              await db.collection('ingredients').doc(docId).update({ data: updateData })
              console.log('[getIngredientDetail] 已回写补全字段:', item.name, Object.keys(patch))
            } catch (e) {
              console.warn('[getIngredientDetail] 回写失败:', e.message || e)
            }
          }
        }
      }
    }

    return { code: 0, message: 'success', data: item }
  } catch (err) {
    console.error('[getIngredientDetail] error:', err)
    return { code: -1, message: err.message || '服务异常', data: null }
  }
}
