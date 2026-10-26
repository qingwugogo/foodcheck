// ============================================
// 用户相关类型定义
// ============================================

/** 用户信息 */
export interface UserInfo {
  /** openid（微信平台） */
  openid: string;
  /** 昵称 */
  nickname: string;
  /** 头像 URL */
  avatar: string;
  /** 累计扫描次数 */
  scanCount: number;
  /** 注册时间 */
  createTime: number;
}

/** 图片来源方式 */
export type ImageSourceType = 'camera' | 'album' | 'chat';
