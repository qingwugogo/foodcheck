import Taro from '@tarojs/taro';
import type { UserInfo } from '@/types/user';

// login 云函数 mock（H5 预览环境使用）
export default async function (_data?: Record<string, any>): Promise<UserInfo> {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 300));
  // 模拟 openid 持久化，保证同一浏览器内的「我的」数据按用户隔离
  let openid = '';
  try {
    const stored = Taro.getStorageSync('mockOpenid');
    if (typeof stored === 'string' && stored) openid = stored;
  } catch {
    // 忽略
  }
  if (!openid) {
    openid = 'mock_openid_' + Math.random().toString(36).slice(2, 10);
    Taro.setStorageSync('mockOpenid', openid);
  }
  return {
    openid,
    nickname: '食安探索者',
    avatar: 'https://picsum.photos/id/64/200/200',
    scanCount: 28,
    createTime: Date.now() - 30 * 24 * 60 * 60 * 1000
  };
}
