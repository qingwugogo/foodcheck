import React from 'react';
import { View, Text, Image, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import { useImagePicker } from '@/hooks/useImagePicker';
import { useScan } from '@/hooks/useScan';
import { useScanStore } from '@/store/useScanStore';
import styles from './index.module.scss';

/**
 * 扫描页 - 小程序首页
 * 支持拍照、相册、微信聊天记录三种图片来源
 */
function ScanPage() {
  const { chooseImage } = useImagePicker();
  const { scanImage } = useScan();
  const { imagePath, loading, setImagePath } = useScanStore();

  // 选择图片
  const handlePickImage = async (source: 'camera' | 'album' | 'chat') => {
    const result = await chooseImage({ source });
    if (result) {
      setImagePath(result.path);
    }
  };

  // 识别配料
  const handleScan = async () => {
    if (!imagePath) {
      Taro.showToast({ title: '请先选择配料表图片', icon: 'none' });
      return;
    }
    const result = await scanImage(imagePath);
    if (result) {
      // 识别成功，跳转结果页
      Taro.navigateTo({ url: '/pages/result/index' });
    }
  };

  return (
    <View className={styles.scanPage}>
      {/* 顶部品牌区 */}
      <View className={styles.header}>
        <Text className={styles.title}>食采助手</Text>
        <Text className={styles.subtitle}>拍下配料表，秒懂每种成分 · 健康吃得更安心</Text>
      </View>

      {/* 图片预览区 */}
      <View className={styles.previewWrap}>
        {imagePath ? (
          <Image className={styles.preview} src={imagePath} mode='aspectFill' />
        ) : (
          <View className={styles.placeholder}>
            <View className={styles.placeholderIcon}>
              <Text className={styles.placeholderIconText}>📷</Text>
            </View>
            <Text className={styles.placeholderText}>上传食品配料表图片</Text>
            <Text className={styles.placeholderHint}>请确保配料表文字清晰可见</Text>
          </View>
        )}
      </View>

      {/* 图片来源 */}
      <View className={styles.sourceGroup}>
        <View className={styles.sourceBtn} onClick={() => handlePickImage('camera')}>
          <View className={styles.sourceIcon}>
            <Text className={styles.sourceIconText}>📸</Text>
          </View>
          <Text className={styles.sourceLabel}>拍照</Text>
        </View>
        <View className={styles.sourceBtn} onClick={() => handlePickImage('album')}>
          <View className={styles.sourceIcon}>
            <Text className={styles.sourceIconText}>🖼️</Text>
          </View>
          <Text className={styles.sourceLabel}>相册</Text>
        </View>
        <View className={styles.sourceBtn} onClick={() => handlePickImage('chat')}>
          <View className={styles.sourceIcon}>
            <Text className={styles.sourceIconText}>💬</Text>
          </View>
          <Text className={styles.sourceLabel}>聊天记录</Text>
        </View>
      </View>

      {/* 识别按钮 */}
      <Button
        className={classnames(styles.scanBtn, !imagePath && styles.disabled)}
        onClick={handleScan}
        disabled={loading}
      >
        <Text className={styles.scanBtnText}>
          {loading ? '识别中...' : imagePath ? '🔍 识别配料表' : '请先选择图片'}
        </Text>
      </Button>

      {/* 知识小贴士 */}
      <View className={styles.tip}>
        <Text className={styles.tipTitle}>💡 食品安全小知识</Text>
        <Text>配料表按加入量递减排列，前 3 位成分决定食品本质。注意识别防腐剂、甜味剂、护色剂等添加剂，关注「亚硝酸钠」「阿斯巴甜」等敏感成分。</Text>
      </View>

      {/* loading 遮罩 */}
      {loading && (
        <View className={styles.loadingMask}>
          <View className={styles.loadingIcon} />
          <Text className={styles.loadingText}>正在识别配料表...</Text>
        </View>
      )}
    </View>
  );
}

export default ScanPage;
