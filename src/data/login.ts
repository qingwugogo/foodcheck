import type { UserInfo } from '@/types/user';

// login 云函数 mock
export default async function (_data?: Record<string, any>): Promise<UserInfo> {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 300));
  return {
    openid: 'mock_openid_' + Math.random().toString(36).slice(2, 10),
    nickname: '食安探索者',
    avatar: 'https://picsum.photos/id/64/200/200',
    scanCount: 28,
    createTime: Date.now() - 30 * 24 * 60 * 60 * 1000
  };
}
