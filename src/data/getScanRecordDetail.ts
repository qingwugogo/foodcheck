import Taro from '@tarojs/taro';
import type { ScanResult } from '@/types/scan';
import { getCurrentOpenid, scanRecordsKey } from '@/services/user';

/**
 * 从当前用户的本地持久化记录中按 recordId 查详情（按 openid 隔离）
 */
async function getLocalDetail(recordId: string): Promise<ScanResult | null> {
  try {
    const openid = await getCurrentOpenid();
    const r = await Taro.getStorage({ key: scanRecordsKey(openid) });
    const arr: ScanResult[] = Array.isArray(r.data) ? r.data : [];
    return arr.find(item => item.recordId === recordId) || null;
  } catch {
    return null;
  }
}

// getScanRecordDetail 云函数 mock：仅允许读取当前用户自己的记录
export default async function (data?: Record<string, any>): Promise<ScanResult | null> {
  await new Promise(resolve => setTimeout(resolve, 250));
  const recordId = data?.recordId as string;
  if (!recordId) {
    console.error('[getScanRecordDetail mock] 缺少参数 recordId');
    return null;
  }
  const local = await getLocalDetail(recordId);
  if (!local) {
    console.warn('[getScanRecordDetail mock] 未找到当前用户的记录:', recordId);
  }
  return local;
}
