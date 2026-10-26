import { create } from 'zustand';
import type { ScanResult } from '@/types/scan';

// ============================================
// 扫描状态管理
// ============================================

interface ScanState {
  /** 当前选择的图片临时路径 */
  imagePath: string;
  /** 是否正在识别中 */
  loading: boolean;
  /** 识别结果 */
  result: ScanResult | null;
  /** 设置图片路径 */
  setImagePath: (path: string) => void;
  /** 设置加载状态 */
  setLoading: (loading: boolean) => void;
  /** 设置识别结果 */
  setResult: (result: ScanResult | null) => void;
  /** 重置状态 */
  reset: () => void;
}

export const useScanStore = create<ScanState>((set) => ({
  imagePath: '',
  loading: false,
  result: null,
  setImagePath: (path) => set({ imagePath: path }),
  setLoading: (loading) => set({ loading }),
  setResult: (result) => set({ result }),
  reset: () => set({ imagePath: '', loading: false, result: null })
}));
