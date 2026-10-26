import type { SearchResult } from '@/types/ingredient';
import { searchIngredientList, ingredientList } from './ingredients';

// searchIngredients 云函数 mock
export default async function (data?: Record<string, any>): Promise<SearchResult> {
  await new Promise(resolve => setTimeout(resolve, 250));
  const keyword = (data?.keyword as string) || '';
  const list = searchIngredientList(keyword);
  return {
    list,
    total: keyword ? list.length : ingredientList.length
  };
}
