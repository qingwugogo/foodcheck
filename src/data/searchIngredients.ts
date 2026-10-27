import type { SearchResult } from '@/types/ingredient';
import { ingredientList } from './ingredients';

export const DEFAULT_PAGE_SIZE = 20;

// searchIngredients 云函数 mock（支持关键词、分类、分页）
export default async function (data?: Record<string, any>): Promise<SearchResult> {
  await new Promise(resolve => setTimeout(resolve, 250));
  const keyword = (data?.keyword as string) || '';
  const category = (data?.category as string) || '';
  const page = Math.max(1, Number(data?.page) || 1);
  const pageSize = Math.max(1, Number(data?.pageSize) || DEFAULT_PAGE_SIZE);

  const filtered = ingredientList
    .filter(i => {
      if (category && i.categoryLabel !== category) return false;
      if (!keyword) return true;
      return (
        i.name.includes(keyword) ||
        (i.alias && i.alias.some(a => a.includes(keyword))) ||
        i.categoryLabel.includes(keyword) ||
        i.function.includes(keyword)
      );
    })
    .map(i => ({
      name: i.name,
      categoryLabel: i.categoryLabel,
      safetyLevel: i.safetyLevel,
      function: i.function
    }));

  const start = (page - 1) * pageSize;
  return {
    list: filtered.slice(start, start + pageSize),
    total: filtered.length,
    page,
    pageSize
  };
}
