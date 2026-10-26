import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useUserStore } from '@/store/useUserStore';
import styles from './index.module.scss';

/**
 * 我的页 - 用户中心
 */
function MinePage() {
  const { userInfo, login, loaded } = useUserStore();

  useEffect(() => {
    if (!loaded) {
      login();
    }
  }, [loaded, login]);

  // 菜单点击
  const handleMenu = (path: string) => {
    Taro.navigateTo({ url: path });
  };

  // 清缓存
  const handleClear = () => {
    Taro.showModal({
      title: '清空缓存',
      content: '确定要清空本地缓存吗？',
      success: res => {
        if (res.confirm) {
          Taro.clearStorageSync();
          Taro.showToast({ title: '已清空', icon: 'success' });
        }
      }
    });
  };

  return (
    <View className={styles.minePage}>
      <ScrollView scrollY>
        {/* 用户卡片 */}
        <View className={styles.userCard}>
          <Image
            className={styles.avatar}
            src={userInfo?.avatar || 'https://picsum.photos/id/64/200/200'}
            mode='aspectFill'
            onError={e => console.error('[MinePage] 头像加载失败:', e.detail)}
          />
          <View className={styles.userInfo}>
            <Text className={styles.nickname}>{userInfo?.nickname || '未登录'}</Text>
            <Text className={styles.scanCount}>累计扫描 {userInfo?.scanCount ?? 0} 次</Text>
          </View>
        </View>

        {/* 功能菜单 */}
        <View className={styles.menuGroup}>
          <View className={styles.menuItem} onClick={() => handleMenu('/pages/allergenSettings/index')}>
            <Text className={styles.menuIcon}>🚨</Text>
            <Text className={styles.menuLabel}>我的过敏源</Text>
            <Text className={styles.menuArrow}>›</Text>
          </View>
          <View className={styles.menuItem} onClick={() => handleMenu('/pages/settings/index')}>
            <Text className={styles.menuIcon}>⚙️</Text>
            <Text className={styles.menuLabel}>设置</Text>
            <Text className={styles.menuArrow}>›</Text>
          </View>
          <View className={styles.menuItem} onClick={() => handleMenu('/pages/about/index')}>
            <Text className={styles.menuIcon}>ℹ️</Text>
            <Text className={styles.menuLabel}>关于食安助手</Text>
            <Text className={styles.menuArrow}>›</Text>
          </View>
          <View className={styles.menuItem} onClick={handleClear}>
            <Text className={styles.menuIcon}>🧹</Text>
            <Text className={styles.menuLabel}>清空缓存</Text>
            <Text className={styles.menuArrow}>›</Text>
          </View>
        </View>

        <Text className={styles.version}>食安助手 v1.0.0</Text>
      </ScrollView>
    </View>
  );
}

export default MinePage;
