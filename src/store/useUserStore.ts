import { create } from 'zustand';
import type { UserInfo } from '@/types/user';
import { callFunction } from '@/services/cloud';

// ============================================
// 用户状态管理
// ============================================

interface UserState {
  /** 用户信息 */
  userInfo: UserInfo | null;
  /** 是否已加载 */
  loaded: boolean;
  /** 登录 */
  login: () => Promise<void>;
  /** 设置用户信息 */
  setUserInfo: (info: UserInfo | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
  userInfo: null,
  loaded: false,
  login: async () => {
    try {
      const info = await callFunction<UserInfo>('login');
      set({ userInfo: info, loaded: true });
    } catch (err) {
      console.error('[UserStore] login failed:', err);
      set({ loaded: true });
    }
  },
  setUserInfo: (info) => set({ userInfo: info, loaded: true })
}));
