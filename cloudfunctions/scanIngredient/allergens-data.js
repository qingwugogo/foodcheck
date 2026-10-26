// ============================================
// 过敏源配置数据（云函数版，派生自 src/data/allergens.ts）
// 依据 GB 7718-2011 推荐标示的 8 类致敏物质及常见扩展过敏源
// ============================================

const allergenList = [
  {
    id: '花生',
    name: '花生',
    icon: '🥜',
    keywords: ['花生', '花生酱', '花生仁', '花生油', '花生蛋白']
  },
  {
    id: '坚果',
    name: '坚果',
    icon: '🌰',
    keywords: [
      '腰果', '杏仁', '巴旦木', '核桃', '榛子', '开心果', '夏威夷果',
      '碧根果', '松子', '板栗', '栗子', '白果', '夏威夷', '坚果'
    ]
  },
  {
    id: '牛奶',
    name: '牛奶',
    icon: '🥛',
    keywords: [
      '牛奶', '生牛乳', '牛乳', '全脂乳', '脱脂乳', '乳粉', '奶粉',
      '乳清', '乳清蛋白', '奶酪', '芝士', '黄油', '奶油', '炼乳',
      '乳糖', '酪蛋白', '干酪', '酸奶', '酸乳'
    ]
  },
  {
    id: '鸡蛋',
    name: '鸡蛋',
    icon: '🥚',
    keywords: ['鸡蛋', '蛋黄', '蛋清', '蛋粉', '全蛋', '蛋液', '卵清蛋白', '卵白蛋白', '鸡蛋白', '鸡蛋蛋白粉']
  },
  {
    id: '鱼类',
    name: '鱼类',
    icon: '🐟',
    keywords: ['鱼露', '鱼粉', '鱼油', '鱼糜', '鱼籽', '鳕鱼', '金枪鱼', '三文鱼', '沙丁鱼', '带鱼', '草鱼', '鲢鱼', '鲈鱼', '鳗鱼', '鲣鱼']
  },
  {
    id: '甲壳类',
    name: '甲壳类',
    icon: '🦐',
    keywords: ['虾', '蟹', '龙虾', '小龙虾', '磷虾', '虾米', '虾皮', '对虾', '蟹肉']
  },
  {
    id: '贝类',
    name: '贝类',
    icon: '🦪',
    keywords: ['牡蛎', '生蚝', '扇贝', '蛤蜊', '花蛤', '贻贝', '淡菜', '海虹', '蚬', '蛏', '墨鱼', '鱿鱼', '章鱼', '鲍鱼']
  },
  {
    id: '大豆',
    name: '大豆',
    icon: '🫘',
    keywords: ['大豆', '黄豆', '豆粕', '酱油', '生抽', '老抽', '豆腐', '豆浆', '豆乳', '大豆磷脂', '豆制品', '纳豆', '腐竹']
  },
  {
    id: '小麦',
    name: '小麦',
    icon: '🌾',
    keywords: ['小麦', '面粉', '小麦粉', '麸质', '面筋', '全麦', '淀粉（小麦']
  },
  {
    id: '芝麻',
    name: '芝麻',
    icon: '🌱',
    keywords: ['芝麻', '芝麻油', '香油', '芝麻酱', '芝麻仁']
  }
]

/**
 * 检测配料文本中包含的过敏源
 * @param {string[]} ingredientNames 配料名称列表（含复合配料原文）
 * @param {string[]} selectedIds 用户配置的过敏源 id 列表（由前端随事件传入）
 * @returns {{allergen:string, icon:string, matchedIngredients:string[]}[]}
 */
function detectAllergens(ingredientNames, selectedIds) {
  if (!selectedIds || !selectedIds.length || !ingredientNames || !ingredientNames.length) return []
  const alerts = []
  const haystack = ingredientNames.map(n => (n || '').replace(/\s+/g, ''))
  for (const id of selectedIds) {
    const def = allergenList.find(a => a.id === id)
    if (!def) continue
    const matched = new Set()
    def.keywords.forEach(kw => {
      haystack.forEach((name, idx) => {
        if (name.includes(kw)) matched.add(ingredientNames[idx])
      })
    })
    if (matched.size) {
      alerts.push({ allergen: def.name, icon: def.icon, matchedIngredients: Array.from(matched) })
    }
  }
  return alerts
}

module.exports = { allergenList, detectAllergens }
