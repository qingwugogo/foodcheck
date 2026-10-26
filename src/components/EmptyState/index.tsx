import React from 'react';
import { View, Text } from '@tarojs/components';
import styles from './index.module.scss';

interface EmptyStateProps {
  /** 提示文案 */
  text?: string;
  /** 副文案 */
  subText?: string;
}

/**
 * 空状态组件
 */
const EmptyState: React.FC<EmptyStateProps> = ({
  text = '暂无数据',
  subText = '下拉刷新或稍后再试'
}) => {
  return (
    <View className={styles.empty}>
      <View className={styles.icon}>
        <Text className={styles.iconText}>📭</Text>
      </View>
      <Text className={styles.text}>{text}</Text>
      {subText && <Text className={styles.subText}>{subText}</Text>}
    </View>
  );
};

export default EmptyState;
