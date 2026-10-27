import Taro from '@tarojs/taro';
import { callFunction } from './cloud';

// ============================================
// 当前用户身份（用于本地数据按用户隔离）
// ============================================

let cachedOpenid = '';

/**
 * 获取当前用户 openid
 * 微信端由 login 云函数返回真实 openid；H5 预览使用本地持久化的模拟 openid
 * 取不到时返回空串
 */
export async function getCurrentOpenid(): Promise<string> {
  if (cachedOpenid) return cachedOpenid;
  try {
    const stored = Taro.getStorageSync('currentOpenid');
    if (typeof stored === 'string' && stored) {
      cachedOpenid = stored;
      return stored;
    }
  } catch {
    // 忽略读取失败
  }
  try {
    const info = await callFunction<{ openid?: string }>('login');
    const openid = (info && info.openid) || '';
    if (openid) {
      cachedOpenid = openid;
      Taro.setStorageSync('currentOpenid', openid);
    }
    return openid;
  } catch (err) {
    console.warn('[User] 获取 openid 失败:', err);
    return '';
  }
}

/** 扫描记录本地存储 key（按用户隔离，配料库共用不影响） */
export function scanRecordsKey(openid: string): string {
  return `scanRecords:${openid || 'anonymous'}`;
}
