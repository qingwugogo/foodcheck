import Taro from '@tarojs/taro';
import type { ImageSourceType } from '@/types/user';

// ============================================
// 图片选择 Hook
// 支持三种来源：拍照、相册、微信聊天记录
// ============================================

interface ChooseImageOptions {
  source: ImageSourceType;
}

interface ChooseImageResult {
  /** 临时文件路径 */
  path: string;
  /** 文件名（仅聊天记录来源） */
  name?: string;
}

/**
 * 从微信聊天记录中选择图片文件
 * 仅微信小程序支持，非微信平台提示不可用
 */
async function chooseFromChat(): Promise<ChooseImageResult> {
  if (process.env.TARO_ENV !== 'weapp') {
    Taro.showToast({ title: '从聊天记录选择仅支持微信', icon: 'none' });
    throw new Error('chooseMessageFile only available in weapp');
  }
  const res = await Taro.chooseMessageFile({
    count: 1,
    type: 'image',
    extension: ['jpg', 'jpeg', 'png', 'gif']
  });
  const file = res.tempFiles[0];
  if (!file) {
    throw new Error('未选择文件');
  }
  return { path: file.path, name: file.name };
}

/**
 * 通过 chooseMedia / chooseImage 选择图片（拍照或相册）
 * - 微信小程序：优先 chooseMedia（新版 API），回退 chooseImage
 * - H5 及其他平台：直接用 chooseImage（Taro H5 实现稳定，chooseMedia 在 H5 端可能结构不一致）
 */
async function chooseBySource(source: Exclude<ImageSourceType, 'chat'>): Promise<ChooseImageResult> {
  // H5 预览环境下浏览器无法区分相机/相册，统一放宽为两者皆可，确保能弹出文件选择器
  const sourceType = process.env.TARO_ENV === 'h5' ? ['album', 'camera'] : [source];

  // 微信小程序：优先使用 chooseMedia
  if (process.env.TARO_ENV === 'weapp' && typeof Taro.chooseMedia === 'function') {
    try {
      const res = await Taro.chooseMedia({
        count: 1,
        mediaType: ['image'],
        sourceType,
        sizeType: ['compressed'],
        camera: 'back'
      });
      const file = res.tempFiles && res.tempFiles[0];
      const path = file?.tempFilePath;
      if (path) {
        return { path };
      }
      throw new Error('未选择图片');
    } catch (err: any) {
      throw err;
    }
  }

  // H5 及其他平台：用 chooseImage（Taro H5 实现稳定）
  const res = await Taro.chooseImage({
    count: 1,
    sourceType,
    sizeType: ['compressed']
  });
  const path = res.tempFilePaths && res.tempFilePaths[0];
  if (!path) {
    throw new Error('未选择图片');
  }
  return { path };
}

/**
 * 选择图片（统一入口）
 */
export function useImagePicker() {
  const chooseImage = async (options: ChooseImageOptions): Promise<ChooseImageResult | null> => {
    try {
      if (options.source === 'chat') {
        return await chooseFromChat();
      }
      return await chooseBySource(options.source);
    } catch (err: any) {
      // 用户取消不视为错误
      if (err?.errMsg && err.errMsg.includes('cancel')) {
        console.log('[ImagePicker] 用户取消选择');
        return null;
      }
      console.error('[ImagePicker] 选择图片失败:', err);
      Taro.showToast({ title: '选择图片失败', icon: 'none' });
      return null;
    }
  };

  return { chooseImage };
}
