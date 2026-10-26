import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import { allergenList } from '@/data/allergens';
import styles from './index.module.scss';

/**
 * 我的过敏源配置页
 * 勾选自身过敏源，扫描配料表时命中会重点警告
 */
function AllergenSettingsPage() {
  const [selected, setSelected] = useState<string[]>([]);

  // 读取已保存配置
  useEffect(() => {
    try {
      const r = Taro.getStorageSync('myAllergens');
      if (Array.isArray(r)) {
        setSelected(r);
      }
    } catch {
      // 忽略
    }
  }, []);

  // 切换勾选
  const toggle = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // 保存
  const handleSave = async () => {
    try {
      await Taro.setStorage({ key: 'myAllergens', data: selected });
      Taro.showToast({ title: '已保存', icon: 'success' });
      setTimeout(() => Taro.navigateBack(), 600);
    } catch {
      Taro.showToast({ title: '保存失败', icon: 'none' });
    }
  };

  return (
    <View className={styles.page}>
      <ScrollView scrollY className={styles.scroll}>
        <View className={styles.tipCard}>
          <Text className={styles.tipTitle}>为什么要配置过敏源？</Text>
          <Text className={styles.tipText}>
            勾选你的过敏源后，每次扫描配料表时会自动检测，一旦发现含有相关成分，将在结果页顶部以醒目方式重点警告，降低误食风险。
          </Text>
        </View>

        <Text className={styles.sectionTitle}>选择我的过敏源（可多选）</Text>
        <View className={styles.grid}>
          {allergenList.map(item => {
            const active = selected.includes(item.id);
            return (
              <View
                key={item.id}
                className={classnames(styles.card, active && styles.cardActive)}
                onClick={() => toggle(item.id)}
              >
                <Text className={styles.icon}>{item.icon}</Text>
                <Text className={styles.name}>{item.name}</Text>
                <Text className={styles.desc}>{item.desc}</Text>
                <View className={classnames(styles.check, active && styles.checkActive)}>
                  {active && <Text className={styles.checkText}>✓</Text>}
                </View>
              </View>
            );
          })}
        </View>

        <Text className={styles.notice}>
          依据 GB 7718-2011 推荐标示的 8 类致敏物质整理。本功能为辅助提示，配料表可能存在标示遗漏，请结合实际情况谨慎判断。
        </Text>
      </ScrollView>

      <View className={styles.footer}>
        <View
          className={classnames(styles.saveBtn, selected.length === 0 && styles.saveBtnPlain)}
          onClick={handleSave}
        >
          <Text className={styles.saveText}>
            {selected.length > 0 ? `保存（已选 ${selected.length} 项）` : '保存'}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default AllergenSettingsPage;
