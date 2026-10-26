import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import classnames from 'classnames';
import SafetyBadge from '@/components/SafetyBadge';
import IngredientCard from '@/components/IngredientCard';
import EmptyState from '@/components/EmptyState';
import { useScanStore } from '@/store/useScanStore';
import { callFunction } from '@/services/cloud';
import type { ScanResult } from '@/types/scan';
import styles from './index.module.scss';

/**
 * 分析结果页 - 食品配料识别结果展示
 * 两种入口：
 *  1. 扫描后从 useScanStore.result 读取
 *  2. 历史记录跳转带 recordId，调用 getScanRecordDetail
 */
function ResultPage() {
  const router = useRouter();
  const { result: storeResult } = useScanStore();
  const [result, setResult] = useState<ScanResult | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const recordId = router.params.recordId;
    if (recordId) {
      // 历史记录入口：调用云函数获取
      setLoading(true);
      callFunction<ScanResult>('getScanRecordDetail', { recordId })
        .then(res => {
          if (res) {
            setResult(res);
          } else {
            console.warn('[ResultPage] 未找到记录:', recordId);
          }
        })
        .catch(err => console.error('[ResultPage] 获取记录失败:', err))
        .finally(() => setLoading(false));
    } else if (storeResult) {
      // 扫描入口：直接读取 store
      setResult(storeResult);
    } else {
      // 无数据，回退到扫描页
      Taro.redirectTo({ url: '/pages/scan/index' });
    }
  }, [router.params.recordId, storeResult]);

  // 点击配料进入详情
  const handleIngredientClick = (name: string) => {
    Taro.navigateTo({
      url: `/pages/ingredientDetail/index?name=${encodeURIComponent(name)}`
    });
  };

  const heroClass = result
    ? classnames(
        styles.hero,
        result.safetyLevel === 'safe' && styles.heroSafe,
        result.safetyLevel === 'caution' && styles.heroCaution,
        result.safetyLevel === 'danger' && styles.heroDanger
      )
    : styles.hero;

  if (loading) {
    return (
      <View className={styles.resultPage}>
        <Text className={styles.loadingText}>加载中...</Text>
      </View>
    );
  }

  if (!result) {
    return (
      <View className={styles.resultPage}>
        <EmptyState text='未找到分析结果' subText='请重新扫描' />
      </View>
    );
  }

  return (
    <View className={styles.resultPage}>
      <ScrollView scrollY>
        {/* 顶部结果概览 */}
        <View className={heroClass}>
          {result.imagePath && (
            <Image
              className={styles.foodImg}
              src={result.imagePath}
              mode='aspectFill'
              onError={e => console.error('[ResultPage] 图片加载失败:', e.detail)}
            />
          )}
          <Text className={styles.foodName}>{result.foodName}</Text>
          <View className={styles.levelBadge}>
            <SafetyBadge level={result.safetyLevel} size='lg' />
          </View>
          <Text className={styles.summary}>{result.summary}</Text>
        </View>

        {/* 过敏源重点警告（命中用户配置的过敏源，置顶报告） */}
        {result.allergenAlerts && result.allergenAlerts.length > 0 && (
          <View className={styles.allergenBlock}>
            <View className={styles.allergenHeader}>
              <Text className={styles.allergenHeaderIcon}>⚠️</Text>
              <Text className={styles.allergenHeaderText}>
                检测到 {result.allergenAlerts.length} 种你的过敏源，请勿食用！
              </Text>
            </View>
            {result.allergenAlerts.map(alert => (
              <View key={alert.allergen} className={styles.allergenItem}>
                <Text className={styles.allergenName}>
                  {alert.icon} {alert.allergen}
                </Text>
                <Text className={styles.allergenMatched}>
                  命中配料：{alert.matchedIngredients.join('、')}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* 统计条 */}
        <View className={styles.statBar}>
          <View className={styles.statItem}>
            <Text className={styles.statNum}>{result.ingredients.length}</Text>
            <Text className={styles.statLabel}>配料总数</Text>
          </View>
          <View className={styles.statDivider} />
          <View className={styles.statItem}>
            <Text className={classnames(styles.statNum, result.riskCount > 0 && styles.statNumRisk)}>
              {result.riskCount}
            </Text>
            <Text className={styles.statLabel}>风险配料</Text>
          </View>
          <View className={styles.statDivider} />
          <View className={styles.statItem}>
            <Text className={styles.statNum}>
              {result.ingredients.filter(i => !i.isRisk).length}
            </Text>
            <Text className={styles.statLabel}>安全配料</Text>
          </View>
        </View>

        {/* 风险提示 */}
        {result.riskTips && result.riskTips.length > 0 && (
          <View>
            <Text className={styles.sectionTitle}>⚠️ 风险提示</Text>
            <View className={styles.riskCard}>
              {result.riskTips.map((tip, idx) => (
                <View key={idx} className={styles.riskItem}>
                  <View className={styles.riskBullet} />
                  <Text className={styles.riskText}>{tip}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* 配料表原文 */}
        <Text className={styles.sectionTitle}>📋 配料表原文</Text>
        <View className={styles.ingredientText}>{result.ingredientText}</View>

        {/* 配料列表 */}
        <Text className={styles.sectionTitle}>🔬 配料解读</Text>
        {result.ingredients.map(item => (
          <IngredientCard
            key={item.order}
            item={item}
            onClick={handleIngredientClick}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default ResultPage;
