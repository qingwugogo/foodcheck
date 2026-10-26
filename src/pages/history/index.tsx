import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, Image, ScrollView } from '@tarojs/components';
import Taro, { useDidShow, usePullDownRefresh } from '@tarojs/taro';
import dayjs from 'dayjs';
import { callFunction } from '@/services/cloud';
import SafetyBadge from '@/components/SafetyBadge';
import EmptyState from '@/components/EmptyState';
import type { ScanRecordList, ScanRecordItem } from '@/types/scan';
import styles from './index.module.scss';

/**
 * 记录页 - 历史扫描记录列表
 */
function HistoryPage() {
  const [list, setList] = useState<ScanRecordItem[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchRecords = useCallback(async () => {
    setLoading(true);
    try {
      const res = await callFunction<ScanRecordList>('getScanRecords', {
        page: 1,
        pageSize: 20
      });
      setList(res.list);
      setTotal(res.total);
    } catch (err) {
      console.error('[HistoryPage] 获取记录失败:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // 首次加载
  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);

  // 每次显示页面时刷新（扫描后回来能看到新记录）
  useDidShow(() => {
    fetchRecords();
  });

  // 下拉刷新
  usePullDownRefresh(() => {
    fetchRecords().finally(() => {
      Taro.stopPullDownRefresh();
    });
  });

  // 点击记录跳转结果页
  const handleTap = (recordId: string, foodName: string) => {
    Taro.navigateTo({
      url: `/pages/result/index?recordId=${recordId}&foodName=${encodeURIComponent(foodName)}`
    });
  };

  return (
    <View className={styles.historyPage}>
      {/* 顶部统计 */}
      <View className={styles.stats}>
        <View className={styles.statItem}>
          <Text className={styles.statNum}>{total}</Text>
          <Text className={styles.statLabel}>累计扫描</Text>
        </View>
        <View className={styles.statDivider} />
        <View className={styles.statItem}>
          <Text className={styles.statNum}>{list.filter(i => i.safetyLevel === 'safe').length}</Text>
          <Text className={styles.statLabel}>放心吃</Text>
        </View>
        <View className={styles.statDivider} />
        <View className={styles.statItem}>
          <Text className={styles.statNum}>{list.filter(i => i.safetyLevel === 'danger').length}</Text>
          <Text className={styles.statLabel}>不吃</Text>
        </View>
      </View>

      {/* 列表 */}
      <Text className={styles.listTitle}>最近扫描</Text>
      <ScrollView className={styles.list} scrollY>
        {list.length === 0 && !loading ? (
          <EmptyState text='暂无扫描记录' subText='快去扫描第一张配料表吧' />
        ) : (
          list.map(item => (
            <View
              key={item.recordId}
              className={styles.recordCard}
              onClick={() => handleTap(item.recordId, item.foodName)}
            >
              <Image
                className={styles.thumb}
                src={item.thumbnail}
                mode='aspectFill'
                onError={e => console.error('[HistoryPage] 缩略图加载失败:', e.detail)}
              />
              <View className={styles.recordInfo}>
                <Text className={styles.recordName}>{item.foodName}</Text>
                <View className={styles.recordMeta}>
                  <Text className={styles.metaText}>{item.ingredientCount} 种配料</Text>
                  {item.riskCount > 0 && (
                    <Text className={styles.metaText}>{item.riskCount} 个风险</Text>
                  )}
                </View>
                <Text className={styles.recordTime}>
                  {dayjs(item.createTime).format('YYYY-MM-DD HH:mm')}
                </Text>
              </View>
              <View className={styles.recordRight}>
                <SafetyBadge level={item.safetyLevel} size='sm' />
                <Text className={styles.arrow}>›</Text>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

export default HistoryPage;
