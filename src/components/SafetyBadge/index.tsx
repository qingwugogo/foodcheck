import React from 'react';
import { View, Text } from '@tarojs/components';
import classnames from 'classnames';
import type { SafetyLevel } from '@/types/ingredient';
import { safetyLabelMap } from '@/types/ingredient';
import styles from './index.module.scss';

interface SafetyBadgeProps {
  level: SafetyLevel;
  /** 是否大尺寸 */
  size?: 'sm' | 'md' | 'lg';
  /** 自定义类名 */
  className?: string;
}

/**
 * 安全等级徽章组件
 * 放心吃（绿）/少吃（橙）/不吃（红）
 */
const SafetyBadge: React.FC<SafetyBadgeProps> = ({ level, size = 'md', className }) => {
  const levelClass = {
    safe: styles.safe,
    caution: styles.caution,
    danger: styles.danger
  }[level];

  const sizeClass = {
    sm: styles.sm,
    md: styles.md,
    lg: styles.lg
  }[size];

  return (
    <View className={classnames(styles.badge, levelClass, sizeClass, className)}>
      <Text>{safetyLabelMap[level]}</Text>
    </View>
  );
};

export default SafetyBadge;
