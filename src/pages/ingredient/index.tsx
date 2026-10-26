import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import SearchBar from '@/components/SearchBar';
import SafetyBadge from '@/components/SafetyBadge';
import EmptyState from '@/components/EmptyState';
import { useIngredientSearch } from '@/hooks/useIngredient';
import styles from './index.module.scss';

/**
 * 配料库页 - 搜索查询配料
 */
function IngredientPage() {
  const { result, loading, search } = useIngredientSearch();
  const [keyword, setKeyword] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('全部');

  // 首次加载全量
  useEffect(() => {
    search('');
  }, [search]);

  // 关键词变化时搜索
  const handleSearch = useCallback(
    (kw: string) => {
      setKeyword(kw);
      search(kw);
    },
    [search]
  );

  // 从结果中提取分类
  const categories = ['全部'];
  result.list.forEach(item => {
    if (!categories.includes(item.categoryLabel)) {
      categories.push(item.categoryLabel);
    }
  });

  // 按分类筛选
  const filteredList =
    activeCategory === '全部'
      ? result.list
      : result.list.filter(i => i.categoryLabel === activeCategory);

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
        {categories.map(cat => (
          <Text
            key={cat}
            className={classnames(styles.categoryItem, activeCategory === cat && styles.active)}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </Text>
        ))}
      </ScrollView>

      {/* 列表 */}
      <ScrollView scrollY className={styles.list}>
        {loading ? (
          <Text className={styles.loadingText}>加载中...</Text>
        ) : filteredList.length === 0 ? (
          <EmptyState text='未找到相关配料' subText='换个关键词试试' />
        ) : (
          filteredList.map(item => (
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
      </ScrollView>
    </View>
  );
}

export default IngredientPage;
