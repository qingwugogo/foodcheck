import { useState, useCallback } from 'react';
import { callFunction } from '@/services/cloud';
import { getAiConfig } from '@/data/aiConfig';
import type { Ingredient, SearchResult, SafetyLevel } from '@/types/ingredient';

// ============================================
// 配料查询 Hook
// ============================================

/**
 * 查询配料详情
 */
export function useIngredientDetail() {
  const [detail, setDetail] = useState<Ingredient | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchDetail = useCallback(async (name: string) => {
    setLoading(true);
    try {
      // 带上用户 AI 配置（Key 用于后端补全字段时调 GLM）
      const { apiKey } = getAiConfig();
      const result = await callFunction<Ingredient | null>('getIngredientDetail', { name, apiKey });
      setDetail(result);
      return result;
    } catch (err) {
      console.error('[IngredientDetail] 查询失败:', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { detail, loading, fetchDetail };
}

/**
 * 搜索配料库（支持关键词、分类与分页）
 */
export function useIngredientSearch() {
  const [result, setResult] = useState<SearchResult>({ list: [], total: 0 });
  const [loading, setLoading] = useState(false);

  const search = useCallback(async (keyword: string, page = 1, category = '') => {
    setLoading(true);
    try {
      const res = await callFunction<SearchResult>('searchIngredients', {
        keyword,
        page,
        pageSize: 20,
        category
      });
      setResult(res);
      return res;
    } catch (err) {
      console.error('[IngredientSearch] 搜索失败:', err);
      return { list: [], total: 0, page, pageSize: 20 };
    } finally {
      setLoading(false);
    }
  }, []);

  return { result, loading, search };
}

/**
 * 根据 SafetyLevel 获取对应颜色（用于内联样式等场景）
 */
export function getSafetyColor(level: SafetyLevel): string {
  const colorMap: Record<SafetyLevel, string> = {
    safe: '#00b42a',
    caution: '#ff7d00',
    danger: '#f53f3f'
  };
  return colorMap[level];
}
