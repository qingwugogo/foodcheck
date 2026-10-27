import React from 'react';
import { View, Text } from '@tarojs/components';
import styles from './index.module.scss';

function AboutPage() {
  return (
    <View className={styles.placeholder}>
      <Text className={styles.icon}>ℹ️</Text>
      <Text className={styles.title}>关于食采助手</Text>
      <Text className={styles.hint}>功能正在开发中...</Text>
    </View>
  );
}

export default AboutPage;
