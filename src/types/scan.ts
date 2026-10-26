import type { SafetyLevel } from './ingredient';

// ============================================
// 扫描记录相关类型定义
// ============================================

/** 扫描结果中的单项配料 */
export interface ScanIngredientItem {
  /** 配料名称 */
  name: string;
  /** 在配料表中的位置序号 */
  order: number;
  /** 是否为风险配料 */
  isRisk: boolean;
  /** 安全等级 */
  safetyLevel: SafetyLevel;
  /** 该配料在当前食品中的用途说明 */
  purpose?: string;
}

/** 扫描结果（食品分析结果） */
export interface ScanResult {
  /** 扫描记录 ID（仅详情接口返回） */
  recordId?: string;
  /** 是否为食品配料表（false 表示识别为非食品图片） */
  isFood?: boolean;
  /** 食品名称（识别） */
  foodName: string;
  /** 配料表原文 */
  ingredientText: string;
  /** 识别出的配料列表 */
  ingredients: ScanIngredientItem[];
  /** 食品整体安全等级 */
  safetyLevel: SafetyLevel;
  /** 风险配料数量 */
  riskCount: number;
  /** 综合评价 */
  summary: string;
  /** 风险提示 */
  riskTips?: string[];
  /** 过敏源警告（命中用户配置的过敏源，需在结果页重点报告） */
  allergenAlerts?: {
    /** 过敏源名称 */
    allergen: string;
    /** emoji 图标 */
    icon: string;
    /** 命中的配料名称 */
    matchedIngredients: string[];
  }[];
  /** 扫描图片临时路径或 fileId */
  imagePath?: string;
  /** 扫描时间戳 */
  createTime?: number;
}

/** 扫描记录列表项 */
export interface ScanRecordItem {
  /** 记录 ID */
  recordId: string;
  /** 食品名称 */
  foodName: string;
  /** 缩略图路径 */
  thumbnail: string;
  /** 安全等级 */
  safetyLevel: SafetyLevel;
  /** 配料数量 */
  ingredientCount: number;
  /** 风险配料数量 */
  riskCount: number;
  /** 扫描时间（毫秒时间戳） */
  createTime: number;
}

/** 扫描记录列表 */
export interface ScanRecordList {
  list: ScanRecordItem[];
  total: number;
}
