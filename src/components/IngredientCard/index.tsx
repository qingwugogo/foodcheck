import React from 'react';
import { View, Text } from '@tarojs/components';
import classnames from 'classnames';
import SafetyBadge from '@/components/SafetyBadge';
import type { ScanIngredientItem } from '@/types/scan';
import styles from './index.module.scss';

interface IngredientCardProps {
  /** 配料项 */
  item: ScanIngredientItem;
  /** 点击回调 */
  onClick?: (name: string) => void;
}

/**
 * 配料卡片组件（用于扫描结果列表）
 */
const IngredientCard: React.FC<IngredientCardProps> = ({ item, onClick }) => {
  return (
    <View
      className={classnames(styles.card, item.isRisk && styles.riskCard)}
      onClick={() => onClick?.(item.name)}
    >
      <View className={styles.left}>
        <View className={styles.order}>{item.order}</View>
        <View className={styles.info}>
          <View className={styles.nameRow}>
            <Text className={styles.name}>{item.name}</Text>
            {item.isRisk && <Text className={styles.riskTag}>风险</Text>}
          </View>
          {item.purpose && <Text className={styles.purpose}>{item.purpose}</Text>}
        </View>
      </View>
      <View className={styles.right}>
        <SafetyBadge level={item.safetyLevel} size='sm' />
        <Text className={styles.arrow}>›</Text>
      </View>
    </View>
  );
};

export default IngredientCard;
