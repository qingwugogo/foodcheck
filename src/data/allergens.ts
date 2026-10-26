// ============================================
// 过敏源配置数据
// 依据 GB 7718-2011 推荐标示的 8 类致敏物质及常见扩展过敏源
// ============================================

/** 过敏源定义 */
export interface Allergen {
  /** 唯一标识（与 name 同名） */
  id: string;
  /** 过敏源名称 */
  name: string;
  /** emoji 图标 */
  icon: string;
  /** 说明 */
  desc: string;
  /** 相关配料/成分关键词（出现在配料名中即判定含此过敏源） */
  keywords: string[];
}

export const allergenList: Allergen[] = [
  {
    id: '花生',
    name: '花生',
    icon: '🥜',
    desc: '含花生、花生蛋白及其制品',
    keywords: ['花生', '花生酱', '花生仁', '花生油']
  },
  {
    id: '坚果',
    name: '坚果',
    icon: '🌰',
    desc: '腰果、杏仁、核桃、榛子、开心果等树坚果',
    keywords: [
      '腰果', '杏仁', '巴旦木', '核桃', '榛子', '开心果', '夏威夷果',
      '碧根果', '松子', '板栗', '栗子', '白果', '夏威夷', '坚果'
    ]
  },
  {
    id: '牛奶',
    name: '牛奶',
    icon: '🥛',
    desc: '乳及乳制品，包括乳粉、乳清、酪蛋白、乳糖',
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
    desc: '蛋及蛋制品，包括蛋黄、蛋清、蛋粉',
    keywords: ['鸡蛋', '蛋黄', '蛋清', '蛋白', '蛋粉', '全蛋', '蛋液', '卵蛋白', '卵磷脂']
  },
  {
    id: '鱼类',
    name: '鱼类',
    icon: '🐟',
    desc: '鱼及鱼制品，包括鱼露、鱼粉',
    keywords: ['鱼', '鱼露', '鱼粉', '鱼油', '鳕鱼', '金枪鱼', '三文鱼', '沙丁鱼']
  },
  {
    id: '甲壳类',
    name: '甲壳类',
    icon: '🦐',
    desc: '虾、蟹、龙虾等甲壳动物',
    keywords: ['虾', '蟹', '龙虾', '小龙虾', '磷虾', '虾米', '虾皮', '对虾', '蟹肉']
  },
  {
    id: '贝类',
    name: '贝类',
    icon: '🦪',
    desc: '牡蛎、扇贝、蛤蜊、贻贝等软体贝类',
    keywords: ['牡蛎', '生蚝', '扇贝', '蛤蜊', '花蛤', '贻贝', '淡菜', '海虹', '蚬', '蛏', '墨鱼', '鱿鱼', '章鱼', '鲍鱼']
  },
  {
    id: '大豆',
    name: '大豆',
    icon: '🫘',
    desc: '大豆及豆制品，包括酱油、豆粕、大豆磷脂',
    keywords: ['大豆', '黄豆', '豆粕', '酱油', '生抽', '老抽', '豆腐', '豆浆', '豆乳', '大豆磷脂', '豆制品', '纳豆', '腐竹']
  },
  {
    id: '小麦',
    name: '小麦',
    icon: '🌾',
    desc: '小麦及含麸质谷物，包括面粉、面筋',
    keywords: ['小麦', '面粉', '小麦粉', '麸质', '面筋', '全麦', '淀粉（小麦']
  },
  {
    id: '芝麻',
    name: '芝麻',
    icon: '🌱',
    desc: '芝麻及芝麻油、芝麻酱',
    keywords: ['芝麻', '芝麻油', '香油', '芝麻酱', '芝麻仁']
  }
];

/**
 * 检测配料文本中包含的过敏源
 * @param ingredientNames 配料名称列表（含复合配料原文，括号内容也会检测）
 * @param selectedIds 用户配置的过敏源 id 列表
 * @returns 命中的过敏源警告（去重）
 */
export function detectAllergens(
  ingredientNames: string[],
  selectedIds: string[]
): { allergen: string; icon: string; matchedIngredients: string[] }[] {
  if (!selectedIds.length || !ingredientNames.length) return [];
  const alerts: { allergen: string; icon: string; matchedIngredients: string[] }[] = [];
  const haystack = ingredientNames.map(n => n.replace(/\s+/g, ''));
  for (const id of selectedIds) {
    const def = allergenList.find(a => a.id === id);
    if (!def) continue;
    const matched = new Set<string>();
    def.keywords.forEach(kw => {
      haystack.forEach((name, idx) => {
        if (name.includes(kw)) {
          matched.add(ingredientNames[idx]);
        }
      });
    });
    if (matched.size) {
      alerts.push({ allergen: def.name, icon: def.icon, matchedIngredients: Array.from(matched) });
    }
  }
  return alerts;
}
