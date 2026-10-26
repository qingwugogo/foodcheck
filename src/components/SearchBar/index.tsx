import React from 'react';
import { View, Input, Text } from '@tarojs/components';
import classnames from 'classnames';
import styles from './index.module.scss';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  onSearch?: () => void;
  placeholder?: string;
  className?: string;
}

/**
 * 搜索栏组件
 */
const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onSearch,
  placeholder = '搜索配料名称',
  className
}) => {
  return (
    <View className={classnames(styles.searchBar, className)}>
      <View className={styles.searchIcon}>
        <Text className={styles.icon}>🔍</Text>
      </View>
      <Input
        className={styles.input}
        value={value}
        placeholder={placeholder}
        confirmType='search'
        onInput={e => onChange(e.detail.value)}
        onConfirm={() => onSearch?.()}
      />
      {value ? (
        <Text className={styles.clear} onClick={() => onChange('')}>
          ✕
        </Text>
      ) : null}
    </View>
  );
};

export default SearchBar;
