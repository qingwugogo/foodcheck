import type { Ingredient } from '@/types/ingredient';
import { findIngredientByName } from './ingredients';

// getIngredientDetail 云函数 mock
export default async function (data?: Record<string, any>): Promise<Ingredient | null> {
  await new Promise(resolve => setTimeout(resolve, 200));
  const name = data?.name as string;
  if (!name) {
    console.error('[getIngredientDetail mock] 缺少参数 name');
    return null;
  }
  const result = findIngredientByName(name);
  if (!result) {
    console.warn('[getIngredientDetail mock] 未找到配料:', name);
    return null;
  }
  return result;
}
