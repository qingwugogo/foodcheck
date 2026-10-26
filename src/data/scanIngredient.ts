import Taro from '@tarojs/taro';
import type { ScanResult } from '@/types/scan';
import { ingredientList } from './ingredients';
import { detectAllergens } from './allergens';
import { getAiConfig } from './aiConfig';

// scanIngredient 云函数 mock（H5 预览环境使用）
// 真实微信小程序环境会调用云函数，走用户配置的 AI 视觉模型识别

/**
 * 将本地图片路径（blob URL / data URL / http URL）转为 base64 字符串
 * 失败返回 null
 */
async function fileToBase64(fileId: string): Promise<string | null> {
  try {
    // 微信小程序：用 FileSystemManager 同步读取文件转 base64
    if (process.env.TARO_ENV === 'weapp') {
      const fs = Taro.getFileSystemManager();
      const base64 = fs.readFileSync(fileId, 'base64');
      return String(base64);
    }
    // H5：已是 data URL，直接取 base64 部分
    if (fileId.startsWith('data:')) {
      return fileId.split(',')[1] || null;
    }
    // H5：blob URL 或 http URL，用 fetch + FileReader 转 base64
    const res = await fetch(fileId);
    const blob = await res.blob();
    const dataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
    return dataUrl.split(',')[1] || null;
  } catch (err) {
    console.error('[scanIngredient mock] 图片转 base64 失败:', err);
    return null;
  }
}

/**
 * 按用户配置的厂商调用视觉模型识别配料表图片
 * @returns 识别失败或未配置 Key 返回 null
 */
async function recognizeByAI(
  base64Image: string
): Promise<{ isFood: boolean; foodName: string; ingredientText: string; ingredients: { name: string; safetyLevel: string; categoryLabel: string; function: string; riskDesc: string }[] } | null> {
  const { apiKey, apiUrl, model } = getAiConfig();
  if (!apiKey || !apiUrl || !model) {
    console.warn('[scanIngredient mock] 未配置 API Key / 接口地址 / 模型名，跳过 AI 识别');
    return null;
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
食品：{"isFood": true, "foodName": "...", "ingredientText": "...", "ingredients": [{"name":"...","safetyLevel":"safe","categoryLabel":"基础原料","function":"...","riskDesc":""}]}`;

  try {
    const res = await Taro.request({
      url: apiUrl,
      method: 'POST',
      header: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      data: {
        model,
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: prompt },
              { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${base64Image}` } }
            ]
          }
        ]
      }
    });
    if (res.statusCode !== 200) {
      console.error('[scanIngredient mock] AI HTTP 错误:', res.statusCode, res.data?.error?.message || '');
      return null;
    }
    const content = res.data?.choices?.[0]?.message?.content || '';
    return parseAiResponse(content);
  } catch (err) {
    console.error('[scanIngredient mock] AI 调用失败:', err);
    return null;
  }
}

/**
 * 解析模型返回内容，提取 JSON
 */
function parseAiResponse(
  content: string
): { isFood: boolean; foodName: string; ingredientText: string; ingredients: { name: string; safetyLevel: string; categoryLabel: string; function: string; riskDesc: string }[] } | null {
  if (!content) return null;
  // 容错：模型可能用 ```json ... ``` 包裹，正则提取首个 {...}
  const match = content.match(/\{[\s\S]*\}/);
  if (!match) {
    console.warn('[scanIngredient mock] AI 返回非 JSON:', content.slice(0, 200));
    return null;
  }
  // 容错：模型可能返回单引号 JSON（如 ['糯米']），先标准 parse，失败则替换单引号重试
  let parsed: any;
  try {
    parsed = JSON.parse(match[0]);
  } catch (e) {
    try {
      parsed = JSON.parse(match[0].replace(/'/g, '"'));
    } catch (e2) {
      console.error('[scanIngredient mock] JSON 解析失败:', e2);
      return null;
    }
  }
  // 非食品图片
  if (parsed.isFood === false) {
    return { isFood: false, foodName: '', ingredientText: '', ingredients: [] };
  }
  // 食品配料表
  if (!parsed.ingredients || !Array.isArray(parsed.ingredients)) {
    console.warn('[scanIngredient mock] ingredients 非数组:', parsed);
    return null;
  }
  return {
    isFood: true,
    foodName: parsed.foodName || '某品牌食品',
    ingredientText: parsed.ingredientText || '',
    ingredients: parsed.ingredients
  };
}

/**
 * 读取本地待收录配料（Taro storage）
 */
async function getStoredIngredients(): Promise<any[]> {
  try {
    const r = await Taro.getStorage({ key: 'pendingIngredients' });
    return r.data || [];
  } catch {
    return [];
  }
}

/**
 * 读取用户配置的过敏源 id 列表
 */
async function getMyAllergens(): Promise<string[]> {
  try {
    const r = await Taro.getStorage({ key: 'myAllergens' });
    return Array.isArray(r.data) ? r.data : [];
  } catch {
    return [];
  }
}

/**
 * 名称归一化（去空格、去括号内容），用于跨来源名称匹配
 */
function normName(s: string): string {
  return (s || '').replace(/\s+/g, '').replace(/[（(].*?[)）]/g, '');
}

/**
 * 从配料表原文中解析出所有配料名称
 * 只在括号外按顿号/逗号/分号分割（保留复合配料括号内的完整内容），去重保序
 */
function parseIngredientText(text: string): string[] {
  if (!text) return [];
  const s = text
    .replace(/^\s*(配料表?|成分表?|原料)\s*[:：]?\s*/, '') // 去"配料："前缀
    .replace(/[。.；;]?\s*$/, '');                          // 去结尾标点
  // 跟踪括号深度，仅在括号外切分
  const parts: string[] = [];
  let buf = '';
  let depth = 0;
  for (const ch of s) {
    if (ch === '（' || ch === '(') {
      depth++;
    } else if (ch === '）' || ch === ')') {
      depth = Math.max(0, depth - 1);
    }
    if (depth === 0 && /[、，,；;]/.test(ch)) {
      parts.push(buf);
      buf = '';
    } else {
      buf += ch;
    }
  }
  parts.push(buf);
  const names: string[] = [];
  for (const part of parts) {
    const name = part.replace(/\s+/g, '').trim();
    if (!name) continue;
    if (/^[（(].*[)）]$/.test(name)) continue; // 跳过纯括号说明
    if (!names.includes(name)) names.push(name);
  }
  return names;
}

/**
 * 合并「原文解析名」与「AI 返回名」，归一化去重保序
 * 保证原文里的所有配料都会列出，同时保留 AI 额外识别出的配料
 */
function mergeNames(textNames: string[], glmNames: string[]): string[] {
  const out: string[] = [];
  const seen = new Set<string>();
  for (const n of [...textNames, ...glmNames]) {
    const key = normName(n);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(n);
  }
  return out;
}

/**
 * 根据配料表原文 + AI 配料对象，匹配配料库生成识别结果
 * 以原文解析出的完整配料列表为基准，AI 漏提的配料也会列出
 * 支持 name 和 alias 匹配，风险提示用 riskDesc 详细描述
 * AI 提供了信息但配料库未收录的配料自动收录到本地存储
 */
async function buildResult(
  foodName: string,
  ingredientText: string,
  ingredientObjects: { name: string; safetyLevel?: string; categoryLabel?: string; function?: string; riskDesc?: string }[]
): Promise<ScanResult> {
  const stored = await getStoredIngredients();
  const allIngredients: any[] = [...ingredientList, ...stored];

  // 原文解析 + AI 返回合并，保证所有配料都列出
  const textNames = parseIngredientText(ingredientText);
  const baseNames = mergeNames(textNames, ingredientObjects.map(o => o.name));
  console.log('[scanIngredient mock] 原文解析', textNames.length, '种，AI 返回', ingredientObjects.length, '种，合并展示', baseNames.length, '种');

  // 检测用户配置的过敏源（基于含括号内容的完整配料名）
  const myAllergenIds = await getMyAllergens();
  const allergenAlerts = detectAllergens(baseNames, myAllergenIds);
  if (allergenAlerts.length) {
    console.warn('[scanIngredient mock] ⚠️ 检测到过敏源:', allergenAlerts.map(a => `${a.allergen}(${a.matchedIngredients.join(',')})`));
  }

  const unmatched: any[] = [];
  const riskTipList: string[] = [];
  const matched = baseNames.map((name, idx) => {
    const key = normName(name);
    // AI 对象（归一化匹配）
    const obj = ingredientObjects.find(o => normName(o.name) === key);
    // 配料库 / 已收录配料（name 或 alias 归一化匹配）
    const found = allIngredients.find(
      i => normName(i.name) === key || (i.alias && i.alias.some((a: string) => normName(a) === key))
    );
    const safetyLevel = (found ? found.safetyLevel : (obj?.safetyLevel || 'safe')) as ScanResult['safetyLevel'];
    const purpose = found ? found.function.split('，')[0] : (obj?.function || '').split('，')[0];
    const displayName = obj?.name || found?.name || name;
    const isRisk = safetyLevel !== 'safe';
    // AI 有信息但配料库没有：自动收录
    if (!found && obj) {
      unmatched.push({
        name: displayName,
        alias: [],
        category: 'baseMaterial',
        categoryLabel: obj.categoryLabel || '其他',
        function: obj.function || '',
        safetyLevel,
        riskDesc: obj.riskDesc || ''
      });
    }
    // 同步生成风险提示
    if (isRisk) {
      const desc = found?.riskDesc || obj?.riskDesc;
      riskTipList.push(`${displayName}：${desc || '需注意'}`);
    }
    return {
      name: displayName,
      order: idx + 1,
      isRisk,
      safetyLevel,
      purpose: purpose || undefined
    };
  });
  // 批量收录未匹配配料（避免并发读写 storage 导致数据丢失）
  if (unmatched.length) {
    console.log('[scanIngredient mock] 收录未匹配配料:', unmatched.map(i => i.name));
    const list = await getStoredIngredients();
    for (const item of unmatched) {
      if (!list.find((x: any) => x.name === item.name)) {
        list.push(item);
      }
    }
    await Taro.setStorage({ key: 'pendingIngredients', data: list });
  }

  const riskCount = matched.filter(i => i.isRisk).length;
  // 综合安全等级：含 danger 即不吃；含 caution 即少吃；否则放心吃
  let safetyLevel: ScanResult['safetyLevel'] = 'safe';
  if (matched.some(i => i.safetyLevel === 'danger')) {
    safetyLevel = 'danger';
  } else if (matched.some(i => i.safetyLevel === 'caution')) {
    safetyLevel = 'caution';
  }

  const summaryMap = {
    safe: '该食品配料安全度较高，主要使用天然或公认安全的添加剂，可放心食用。',
    caution: '该食品含有部分需注意的添加剂，建议控制食用频率，敏感人群及儿童慎选。',
    danger: '该食品含有高风险添加剂，长期食用可能存在健康风险，建议尽量不吃或少量偶尔食用。'
  };

  return {
    foodName,
    ingredientText,
    ingredients: matched,
    safetyLevel,
    riskCount,
    summary: summaryMap[safetyLevel],
    riskTips: riskTipList.length ? riskTipList : undefined,
    allergenAlerts: allergenAlerts.length ? allergenAlerts : undefined
  };
}

/**
 * mock 兜底（AI 不可用时使用）
 */
function mockResult(fileId: string): ScanResult {
  const picked = [
    ingredientList.find(i => i.name === '白砂糖')!,
    ingredientList.find(i => i.name === '果葡糖浆')!,
    ingredientList.find(i => i.name === '柠檬酸')!,
    ingredientList.find(i => i.name === '山梨酸钾')!,
    ingredientList.find(i => i.name === '苯甲酸钠')!,
    ingredientList.find(i => i.name === '阿斯巴甜')!,
    ingredientList.find(i => i.name === 'β-胡萝卜素')!
  ];
  const ingredients = picked.map((item, idx) => ({
    name: item.name,
    order: idx + 1,
    isRisk: item.safetyLevel !== 'safe',
    safetyLevel: item.safetyLevel,
    purpose: item.function.split('，')[0]
  }));
  const riskCount = ingredients.filter(i => i.isRisk).length;
  let safetyLevel: ScanResult['safetyLevel'] = 'safe';
  if (ingredients.some(i => i.safetyLevel === 'danger')) {
    safetyLevel = 'danger';
  } else if (ingredients.some(i => i.safetyLevel === 'caution')) {
    safetyLevel = 'caution';
  }
  const summaryMap = {
    safe: '该食品配料安全度较高，主要使用天然或公认安全的添加剂，可放心食用。',
    caution: '该食品含有部分需注意的添加剂，建议控制食用频率，敏感人群及儿童慎选。',
    danger: '该食品含有高风险添加剂，长期食用可能存在健康风险，建议尽量不吃或少量偶尔食用。'
  };
  const riskTips = ingredients
    .filter(i => i.isRisk)
    .map(i => {
      const full = ingredientList.find(item => item.name === i.name);
      return `${i.name}：${full?.riskDesc || '需注意'}`;
    });
  return {
    foodName: '某品牌风味饮料',
    ingredientText:
      '水、白砂糖、果葡糖浆、柠檬酸、柠檬酸钠、山梨酸钾、苯甲酸钠、阿斯巴甜（含苯丙氨酸）、β-胡萝卜素、食用香精。',
    ingredients,
    safetyLevel,
    riskCount,
    summary: summaryMap[safetyLevel],
    riskTips: riskTips.length ? riskTips : undefined,
    imagePath: fileId || 'https://picsum.photos/id/312/300/300',
    createTime: Date.now()
  };
}

export default async function (data?: Record<string, any>): Promise<ScanResult> {
  console.log('[scanIngredient mock] 收到参数:', data);
  const fileId = (data?.fileId as string) || '';

  // 前端直连第三方模型接口需要配置 request 合法域名，且会把 Key 暴露在小程序包内；
  // 因此 weapp 端识别统一走云函数（服务端请求），此处仅在 H5 预览环境直连
  const base64 = process.env.TARO_ENV === 'h5' ? await fileToBase64(fileId) : null;
  if (base64) {
    const recognized = await recognizeByAI(base64);
    if (recognized) {
      // 非食品图片：返回标记结果，由前端 toast 提示
      if (recognized.isFood === false) {
        console.log('[scanIngredient mock] 非食品图片');
        return {
          isFood: false,
          foodName: '',
          ingredientText: '',
          ingredients: [],
          safetyLevel: 'safe',
          riskCount: 0,
          summary: '该图片不是食品配料表',
          imagePath: fileId,
          createTime: Date.now()
        };
      }
      console.log('[scanIngredient mock] AI 识别成功:', recognized.foodName, recognized.ingredients.length, '种配料');
      const result = await buildResult(recognized.foodName, recognized.ingredientText, recognized.ingredients);
      result.isFood = true;
      result.imagePath = fileId;
      result.createTime = Date.now();
      return result;
    }
  }

  // 兜底 mock
  console.log('[scanIngredient mock] 回退 mock 结果');
  await new Promise(resolve => setTimeout(resolve, 800));
  return mockResult(fileId);
}
