import React, { useEffect } from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import { useRouter } from '@tarojs/taro';
import classnames from 'classnames';
import SafetyBadge from '@/components/SafetyBadge';
import EmptyState from '@/components/EmptyState';
import { useIngredientDetail } from '@/hooks/useIngredient';
import styles from './index.module.scss';

/**
 * 配料详情页 - 展示配料的功能、作用、国标团标、风险描述
 */
function IngredientDetailPage() {
  const router = useRouter();
  const { detail, loading, fetchDetail } = useIngredientDetail();

  useEffect(() => {
    const name = router.params.name ? decodeURIComponent(router.params.name) : '';
    if (name) {
      fetchDetail(name);
    }
  }, [router.params.name, fetchDetail]);

  if (loading) {
    return (
      <View className={styles.detailPage}>
        <Text className={styles.loadingText}>加载中...</Text>
      </View>
    );
  }

  if (!detail) {
    return (
      <View className={styles.detailPage}>
        <EmptyState text='未找到该配料信息' subText='该配料可能尚未收录' />
      </View>
    );
  }

  return (
    <View className={styles.detailPage}>
      <ScrollView scrollY>
        {/* 顶部概览 */}
        <View className={styles.hero}>
          <View className={styles.nameRow}>
            <Text className={styles.name}>{detail.name}</Text>
            <SafetyBadge level={detail.safetyLevel} size='md' />
          </View>
          {detail.alias && detail.alias.length > 0 && (
            <View className={styles.aliasRow}>
              <Text className={styles.aliasLabel}>别名：</Text>
              {detail.alias.map(a => (
                <Text key={a} className={styles.aliasItem}>
                  {a}
                </Text>
              ))}
            </View>
          )}
          <Text className={styles.categoryTag}>{detail.categoryLabel}</Text>
        </View>

        {/* 功能 */}
        <View className={styles.card}>
          <Text className={styles.sectionTitle}>
            <Text className={styles.sectionIcon}>🎯</Text>功能
          </Text>
          <Text className={styles.sectionText}>{detail.function}</Text>
        </View>

        {/* 作用（收录配料可能缺字段，有才展示） */}
        {detail.action && (
          <View className={styles.card}>
            <Text className={styles.sectionTitle}>
              <Text className={styles.sectionIcon}>⚙️</Text>作用机理
            </Text>
            <Text className={styles.sectionText}>{detail.action}</Text>
          </View>
        )}

        {/* 相关标准 */}
        {detail.standards && detail.standards.length > 0 && (
          <View className={styles.card}>
            <Text className={styles.sectionTitle}>
              <Text className={styles.sectionIcon}>📚</Text>相关标准（国标/团标）
            </Text>
            {detail.standards.map((std, idx) => (
              <View key={idx} className={styles.standardItem}>
                <View>
                  <Text className={styles.standardCode}>{std.code}</Text>
                  <Text
                    className={classnames(
                      styles.standardType,
                      std.type === 'T' && styles.standardTypeT
                    )}
                  >
                    {std.type === 'GB' ? '国标' : std.type === 'T' ? '团标' : '行标'}
                  </Text>
                </View>
                <Text className={styles.standardName}>{std.name}</Text>
                <Text className={styles.standardRegulation}>{std.regulation}</Text>
              </View>
            ))}
          </View>
        )}

        {/* 风险描述 */}
        {detail.riskDesc && (
          <View className={classnames(styles.card, styles.riskCard)}>
            <Text className={styles.sectionTitle}>
              <Text className={styles.sectionIcon}>⚠️</Text>风险提示
            </Text>
            <Text className={styles.sectionText}>{detail.riskDesc}</Text>
          </View>
        )}

        {/* 使用限量 */}
        {detail.usageLimit && (
          <View className={classnames(styles.card, styles.usageCard)}>
            <Text className={styles.sectionTitle}>
              <Text className={styles.sectionIcon}>📏</Text>使用限量
            </Text>
            <Text className={styles.usageText}>{detail.usageLimit}</Text>
          </View>
        )}

        {/* 详细说明 */}
        {detail.description && (
          <View className={styles.card}>
            <Text className={styles.sectionTitle}>
              <Text className={styles.sectionIcon}>📖</Text>详细说明
            </Text>
            <Text className={styles.sectionText}>{detail.description}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

export default IngredientDetailPage;
