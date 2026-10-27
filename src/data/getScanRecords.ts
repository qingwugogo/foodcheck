import Taro from '@tarojs/taro';
import type { ScanRecordList, ScanRecordItem, ScanResult } from '@/types/scan';
import { getCurrentOpenid, scanRecordsKey } from '@/services/user';

/**
 * 读取当前用户本地持久化的真实扫描记录（按 openid 隔离）
 */
async function getLocalRecords(): Promise<ScanRecordItem[]> {
  try {
    const openid = await getCurrentOpenid();
    const r = await Taro.getStorage({ key: scanRecordsKey(openid) });
    const arr: ScanResult[] = Array.isArray(r.data) ? r.data : [];
    return arr.map(item => ({
      recordId: item.recordId || `rec_${item.createTime}`,
      foodName: item.foodName,
      thumbnail: item.imagePath || '',
      safetyLevel: item.safetyLevel,
      ingredientCount: item.ingredients.length,
      riskCount: item.riskCount,
      createTime: item.createTime || Date.now()
    }));
  } catch {
    return [];
  }
}

// getScanRecords 云函数 mock：仅返回当前用户的本地扫描记录
export default async function (data?: Record<string, any>): Promise<ScanRecordList> {
  await new Promise(resolve => setTimeout(resolve, 250));
  const page = (data?.page as number) || 1;
  const pageSize = (data?.pageSize as number) || 10;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const local = await getLocalRecords();
  return {
    list: local.slice(start, end),
    total: local.length
  };
}
