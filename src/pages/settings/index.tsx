import React, { useState, useEffect } from 'react';
import { View, Text, Input, ScrollView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import {
  DEFAULT_AI_CONFIG,
  PROVIDER_PRESETS,
  getAiConfig,
  getProviderPreset,
  saveAiConfig,
  resetAiConfig,
  type AiConfig,
  type AiProvider
} from '@/data/aiConfig';
import styles from './index.module.scss';

/**
 * 设置页 - AI 识别配置
 * 用户可选择模型厂商（智谱/DeepSeek/豆包/腾讯混元/自定义）并填写自己的 API Key
 * 不填写则使用内置默认配置（智谱 GLM 免费模型）
 */
function SettingsPage() {
  const [config, setConfig] = useState<AiConfig>(DEFAULT_AI_CONFIG);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [saving, setSaving] = useState(false);

  // 读取当前配置
  useEffect(() => {
    const cfg = getAiConfig();
    setConfig(cfg);
    // 自定义厂商，或地址/模型与预设不一致时，默认展开高级设置
    const preset = getProviderPreset(cfg.provider);
    setShowAdvanced(cfg.provider === 'custom' || cfg.apiUrl !== preset.apiUrl || cfg.model !== preset.model);
  }, []);

  const preset = getProviderPreset(config.provider);
  const usingDefault = config.provider === 'zhipu' && config.apiKey === DEFAULT_AI_CONFIG.apiKey;

  // 切换厂商：地址与模型回填该厂商默认值
  const pickProvider = (id: AiProvider) => {
    const p = getProviderPreset(id);
    setConfig(prev => ({ ...prev, provider: id, apiUrl: p.apiUrl, model: p.model }));
    if (id === 'custom') setShowAdvanced(true);
  };

  // 保存
  const handleSave = async () => {
    const next: AiConfig = {
      provider: config.provider,
      apiKey: config.apiKey.trim(),
      apiUrl: config.apiUrl.trim(),
      model: config.model.trim()
    };
    if (!next.apiKey) {
      Taro.showToast({ title: '请先填写 API Key', icon: 'none' });
      return;
    }
    if (!next.apiUrl) {
      Taro.showToast({ title: '请填写接口地址', icon: 'none' });
      setShowAdvanced(true);
      return;
    }
    if (!next.model) {
      Taro.showToast({ title: '请填写模型名', icon: 'none' });
      setShowAdvanced(true);
      return;
    }
    setSaving(true);
    try {
      await saveAiConfig(next);
      setConfig(next);
      Taro.showToast({ title: '已保存', icon: 'success' });
    } catch {
      Taro.showToast({ title: '保存失败', icon: 'none' });
    } finally {
      setSaving(false);
    }
  };

  // 恢复默认
  const handleReset = () => {
    Taro.showModal({
      title: '恢复默认配置',
      content: '将清除你填写的厂商与 Key，改用内置默认配置（智谱 GLM 免费模型）。',
      success: async res => {
        if (!res.confirm) return;
        try {
          await resetAiConfig();
          setConfig(DEFAULT_AI_CONFIG);
          setShowAdvanced(false);
          Taro.showToast({ title: '已恢复默认', icon: 'success' });
        } catch {
          Taro.showToast({ title: '操作失败', icon: 'none' });
        }
      }
    });
  };

  return (
    <View className={styles.page}>
      <ScrollView scrollY className={styles.scroll}>
        <View className={styles.tipCard}>
          <Text className={styles.tipTitle}>AI 识别配置</Text>
          <Text className={styles.tipText}>
            配料表识别支持多家模型厂商（需兼容 OpenAI 图片输入格式）。选择厂商并填写自己的 API Key
            即可；不填写则使用内置默认配置，开箱可用。
          </Text>
        </View>

        <Text className={styles.sectionTitle}>识别厂商</Text>
        <View className={styles.providerGrid}>
          {PROVIDER_PRESETS.map(p => (
            <View
              key={p.id}
              className={classnames(styles.providerCard, config.provider === p.id && styles.providerCardActive)}
              onClick={() => pickProvider(p.id)}
            >
              <Text
                className={classnames(
                  styles.providerLabel,
                  config.provider === p.id && styles.providerLabelActive
                )}
              >
                {p.label}
              </Text>
              <Text className={styles.providerDesc}>{p.desc}</Text>
            </View>
          ))}
        </View>

        <Text className={styles.sectionTitle}>API Key</Text>
        <View className={styles.field}>
          <Input
            className={styles.input}
            value={config.apiKey}
            placeholder={`请输入${preset.label}的 API Key`}
            onInput={e => setConfig(prev => ({ ...prev, apiKey: e.detail.value }))}
          />
        </View>
        <View className={styles.statusRow}>
          <View className={classnames(styles.badge, usingDefault ? styles.badgeDefault : styles.badgeCustom)}>
            <Text className={styles.badgeText}>
              {usingDefault
                ? DEFAULT_AI_CONFIG.apiKey
                  ? '当前使用内置默认 Key（智谱 GLM）'
                  : '当前使用服务端内置配置（智谱 GLM）'
                : `当前使用自定义 ${preset.label} 配置`}
            </Text>
          </View>
        </View>

        <View className={styles.advancedToggle} onClick={() => setShowAdvanced(v => !v)}>
          <Text className={styles.advancedToggleText}>高级设置（接口地址 / 模型名）</Text>
          <Text className={styles.advancedArrow}>{showAdvanced ? '收起' : '展开'}</Text>
        </View>

        {showAdvanced && (
          <View>
            <View className={styles.field}>
              <Input
                className={styles.input}
                value={config.apiUrl}
                placeholder='接口地址，如 https://api.deepseek.com/chat/completions'
                onInput={e => setConfig(prev => ({ ...prev, apiUrl: e.detail.value }))}
              />
            </View>
            <View className={styles.field}>
              <Input
                className={styles.input}
                value={config.model}
                placeholder='模型名，如 deepseek-flash'
                onInput={e => setConfig(prev => ({ ...prev, model: e.detail.value }))}
              />
            </View>
          </View>
        )}

        <Text className={styles.notice}>
          {preset.keyHint}
          {'\n'}
          识别失败（Key 失效、额度用尽或模型不支持图片）时会自动回退为示例结果。
        </Text>

        <View className={styles.subBtn} onClick={handleReset}>
          <Text className={styles.subBtnText}>恢复默认配置</Text>
        </View>
      </ScrollView>

      <View className={styles.footer}>
        <View className={styles.saveBtn} onClick={handleSave}>
          <Text className={styles.saveText}>{saving ? '保存中...' : '保存'}</Text>
        </View>
      </View>
    </View>
  );
}

export default SettingsPage;
