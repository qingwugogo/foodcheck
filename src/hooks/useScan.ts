import Taro from '@tarojs/taro';
import { callFunction } from '@/services/cloud';
import { getAiConfig } from '@/data/aiConfig';
import { useScanStore } from '@/store/useScanStore';
import type { ScanResult } from '@/types/scan';

// ============================================
// 扫描识别 Hook
// ============================================

/**
 * 生成可持久化的缩略图（H5 用 canvas 压缩为 dataURL，避免 blob URL 刷新后失效）
 * 失败返回 null
 */
async function makeThumb(path: string): Promise<string | null> {
  if (process.env.TARO_ENV !== 'h5') return null;
  try {
    const res = await fetch(path);
    const blob = await res.blob();
    const dataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const im = new Image();
      im.onload = () => resolve(im);
      im.onerror = reject;
      im.src = dataUrl;
    });
    const maxSide = 500;
    const scale = Math.min(1, maxSide / Math.max(img.naturalWidth, img.naturalHeight));
    const c = document.createElement('canvas');
    c.width = Math.round(img.naturalWidth * scale);
    c.height = Math.round(img.naturalHeight * scale);
    c.getContext('2d')!.drawImage(img, 0, 0, c.width, c.height);
    return c.toDataURL('image/jpeg', 0.8);
  } catch (err) {
    console.warn('[Scan] 缩略图生成失败:', err);
    return null;
  }
}

/**
 * 保存扫描记录到本地存储（H5 / 云函数不可用时的持久化方案）
 * 最新记录在前，最多保留 50 条
 */
async function saveRecord(result: ScanResult, localPath: string): Promise<void> {
  try {
    const recordId = result.recordId || `rec_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    result.recordId = recordId;
    const thumb = await makeThumb(localPath);
    let stored: ScanResult[] = [];
    try {
      const r = await Taro.getStorage({ key: 'scanRecords' });
      if (Array.isArray(r.data)) stored = r.data;
    } catch {
      // 尚无记录
    }
    stored.unshift({ ...result, imagePath: thumb || result.imagePath });
    await Taro.setStorage({ key: 'scanRecords', data: stored.slice(0, 50) });
    console.log('[Scan] 扫描记录已保存:', recordId);
  } catch (err) {
    console.warn('[Scan] 保存扫描记录失败:', err);
  }
}

/**
 * 扫描配料表图片并识别
 */
export function useScan() {
  const { setImagePath, setLoading, setResult, reset } = useScanStore();

  /**
   * 上传图片并识别配料
   * 微信平台：上传至云存储后调用云函数
   * 非微信平台：直接调用 mock
   */
  const scanImage = async (localPath: string): Promise<ScanResult | null> => {
    setLoading(true);
    setImagePath(localPath);
    try {
      let fileId = localPath;
      // 微信小程序：上传图片至云存储
      if (process.env.TARO_ENV === 'weapp' && Taro.cloud) {
        try {
          const uploadRes = await Taro.cloud.uploadFile({
            cloudPath: `scan/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.jpg`,
            filePath: localPath
          });
          fileId = uploadRes.fileID;
          console.log('[Scan] 图片上传成功:', fileId);
        } catch (err) {
          console.error('[Scan] 图片上传失败，使用本地路径:', err);
        }
      }

      // 携带用户过敏源配置与 AI 配置（厂商/Key/地址/模型，云函数据此识别；前端 mock 自行读取 storage）
      let allergens: string[] = [];
      try {
        const r = Taro.getStorageSync('myAllergens');
        if (Array.isArray(r)) allergens = r;
      } catch {
        // 忽略
      }
      const { apiKey, apiUrl, model } = getAiConfig();
      const result = await callFunction<ScanResult>('scanIngredient', {
        fileId,
        allergens,
        apiKey,
        apiUrl,
        model
      });
      // AI 调用失败：弹窗引导用户去设置自己的模型
      if (result.aiError) {
        Taro.showModal({
          title: '识别失败',
          content: result.aiErrorMessage || 'AI 模型调用失败',
          confirmText: '去设置',
          cancelText: '知道了',
          success: r => {
            if (r.confirm) {
              Taro.navigateTo({ url: '/pages/settings/index' });
            }
          }
        });
        return null;
      }
      // 非食品图片：toast 提示，不跳转结果页
      if (result.isFood === false) {
        Taro.showToast({ title: '未识别到食品配料表，请重新拍摄', icon: 'none' });
        return null;
      }
      setResult(result);
      // 持久化到本地记录（H5 必走；weapp 云函数失败回退时也能看到）
      void saveRecord(result, localPath);
      return result;
    } catch (err) {
      console.error('[Scan] 识别失败:', err);
      Taro.showToast({ title: '识别失败，请重试', icon: 'none' });
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { scanImage, reset };
}
