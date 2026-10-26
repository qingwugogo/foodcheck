// ============================================
// 配料相关类型定义
// ============================================

/** 配料分类 */
export type IngredientCategory =
  | 'preservative'      // 防腐剂
  | 'antioxidant'       // 抗氧化剂
  | 'sweetener'         // 甜味剂
  | 'flavor enhancer'   // 增味剂
  | 'colorant'          // 着色剂
  | 'acidRegulator'     // 酸度调节剂
  | 'thickener'         // 增稠剂
  | 'emulsifier'        // 乳化剂
  | 'stabilizer'        // 稳定剂
  | 'colorFixative'     // 护色剂
  | 'nutrient'          // 营养强化剂
  | 'baseMaterial';     // 基础原料

/** 安全等级 */
export type SafetyLevel = 'safe' | 'caution' | 'danger';

/** 标准类型 */
export interface Standard {
  /** 标准编号 */
  code: string;
  /** 标准名称 */
  name: string;
  /** 标准类型：国标/团标/行标 */
  type: 'GB' | 'T' | 'QB';
  /** 该配料在此标准下的相关规定 */
  regulation: string;
}

/** 配料详情 */
export interface Ingredient {
  /** 配料名称 */
  name: string;
  /** 别名 */
  alias?: string[];
  /** 分类 */
  category: IngredientCategory;
  /** 分类中文名 */
  categoryLabel: string;
  /** 功能描述 */
  function: string;
  /** 作用说明 */
  action: string;
  /** 相关标准（国标、团标） */
  standards: Standard[];
  /** 安全等级 */
  safetyLevel: SafetyLevel;
  /** 风险描述（少吃/不吃的原因） */
  riskDesc?: string;
  /** 详细说明 */
  description?: string;
  /** 使用范围与最大限量 */
  usageLimit?: string;
}

/** 搜索结果项 */
export interface IngredientSearchItem {
  name: string;
  categoryLabel: string;
  safetyLevel: SafetyLevel;
  function: string;
}

/** 搜索结果 */
export interface SearchResult {
  list: IngredientSearchItem[];
  total: number;
}

/** 分类中文名映射 */
export const categoryLabelMap: Record<IngredientCategory, string> = {
  preservative: '防腐剂',
  antioxidant: '抗氧化剂',
  sweetener: '甜味剂',
  'flavor enhancer': '增味剂',
  colorant: '着色剂',
  acidRegulator: '酸度调节剂',
  thickener: '增稠剂',
  emulsifier: '乳化剂',
  stabilizer: '稳定剂',
  colorFixative: '护色剂',
  nutrient: '营养强化剂',
  baseMaterial: '基础原料'
};

/** 安全等级文案映射 */
export const safetyLabelMap: Record<SafetyLevel, string> = {
  safe: '放心吃',
  caution: '少吃',
  danger: '不吃'
};
