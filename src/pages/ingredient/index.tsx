import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import SearchBar from '@/components/SearchBar';
import SafetyBadge from '@/components/SafetyBadge';
import EmptyState from '@/components/EmptyState';
import { useIngredientSearch } from '@/hooks/useIngredient';
import { categoryLabelMap } from '@/types/ingredient';
import styles from './index.module.scss';

const PAGE_SIZE = 20;

/** 固定分类（不依赖当前页数据） */
const CATEGORIES = ['全部', ...Object.values(categoryLabelMap)];

/**
 * 配料库页 - 搜索查询配料
 */
function IngredientPage() {
  const { result, loading, search } = useIngredientSearch();
  const [keyword, setKeyword] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('全部');
  const [page, setPage] = useState(1);

  // 首次加载
  useEffect(() => {
    search('', 1, '');
  }, [search]);

  // 关键词变化时重置到第一页
  const handleSearch = useCallback(
    (kw: string) => {
      setKeyword(kw);
      setPage(1);
      search(kw, 1, activeCategory === '全部' ? '' : activeCategory);
    },
    [search, activeCategory]
  );

  // 切换分类时重置到第一页
  const handleCategory = (cat: string) => {
    setActiveCategory(cat);
    setPage(1);
    search(keyword, 1, cat === '全部' ? '' : cat);
  };

  // 翻页
  const handlePage = (next: number) => {
    const totalPages = Math.max(1, Math.ceil(result.total / PAGE_SIZE));
    const target = Math.min(Math.max(1, next), totalPages);
    if (target === page) return;
    setPage(target);
    search(keyword, target, activeCategory === '全部' ? '' : activeCategory);
  };

  const totalPages = Math.max(1, Math.ceil(result.total / PAGE_SIZE));

  // 点击进入详情
  const handleTap = (name: string) => {
    Taro.navigateTo({
      url: `/pages/ingredientDetail/index?name=${encodeURIComponent(name)}`
    });
  };

  return (
    <View className={styles.ingredientPage}>
      {/* 搜索栏 */}
      <View className={styles.searchWrap}>
        <SearchBar value={keyword} onChange={handleSearch} placeholder='搜索配料名称或功能' />
      </View>

      {/* 分类筛选 */}
      <ScrollView scrollX className={styles.categoryBar}>
        {CATEGORIES.map(cat => (
          <Text
            key={cat}
            className={classnames(styles.categoryItem, activeCategory === cat && styles.active)}
            onClick={() => handleCategory(cat)}
          >
            {cat}
          </Text>
        ))}
      </ScrollView>

      {/* 列表 */}
      <ScrollView scrollY className={styles.list}>
        {loading ? (
          <Text className={styles.loadingText}>加载中...</Text>
        ) : result.list.length === 0 ? (
          <EmptyState text='未找到相关配料' subText='换个关键词试试' />
        ) : (
          result.list.map(item => (
            <View
              key={item.name}
              className={styles.itemCard}
              onClick={() => handleTap(item.name)}
            >
              <View className={styles.itemLeft}>
                <Text className={styles.itemName}>{item.name}</Text>
                <Text className={styles.itemCategory}>{item.categoryLabel}</Text>
                <View>
                  <Text className={styles.itemFunction}>{item.function}</Text>
                </View>
              </View>
              <View className={styles.itemRight}>
                <SafetyBadge level={item.safetyLevel} size='sm' />
                <Text className={styles.itemArrow}>›</Text>
              </View>
            </View>
          ))
        )}

        {/* 分页 */}
        {!loading && result.total > PAGE_SIZE && (
          <View className={styles.pagination}>
            <Text
              className={classnames(styles.pageBtn, page <= 1 && styles.pageBtnDisabled)}
              onClick={() => handlePage(page - 1)}
            >
              上一页
            </Text>
            <Text className={styles.pageInfo}>
              {page} / {totalPages}
            </Text>
            <Text
              className={classnames(styles.pageBtn, page >= totalPages && styles.pageBtnDisabled)}
              onClick={() => handlePage(page + 1)}
            >
              下一页
            </Text>
          </View>
        )}

        {!loading && result.total > 0 && (
          <Text className={styles.totalText}>共 {result.total} 种配料</Text>
        )}
      </ScrollView>
    </View>
  );
}

export default IngredientPage;
