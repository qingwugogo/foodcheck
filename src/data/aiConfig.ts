import Taro from '@tarojs/taro';
import { GLM_API_KEY } from './.glm-key';

// ============================================
// AI 识别配置（可在「我的 → 设置」中由用户自行配置）
// 支持多家兼容 OpenAI Chat Completions 协议的厂商，未配置时使用内置默认值
// ============================================

export type AiProvider = 'zhipu' | 'deepseek' | 'doubao' | 'hunyuan' | 'custom';

export interface ProviderPreset {
  id: AiProvider;
  /** 厂商展示名 */
  label: string;
  /** 默认模型说明（展示用） */
  desc: string;
  /** 默认接口地址 */
  apiUrl: string;
  /** 默认图片理解模型名 */
  model: string;
  /** Key 获取方式提示 */
  keyHint: string;
}

export const PROVIDER_PRESETS: ProviderPreset[] = [
  {
    id: 'zhipu',
    label: '智谱 GLM',
    desc: 'glm-4v-flash · 免费',
    apiUrl: 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
    model: 'glm-4v-flash',
    keyHint: '登录 open.bigmodel.cn 控制台 → API Keys → 创建。默认使用免费模型，不产生费用。'
  },
  {
    id: 'deepseek',
    label: 'DeepSeek',
    desc: 'deepseek-flash · 多模态',
    apiUrl: 'https://api.deepseek.com/chat/completions',
    model: 'deepseek-flash',
    keyHint: '登录 platform.deepseek.com → API Keys → 创建。需选用支持图片输入的多模态模型。'
  },
  {
    id: 'doubao',
    label: '豆包 · 火山方舟',
    desc: 'doubao-seed-1-6-vision',
    apiUrl: 'https://ark.cn-beijing.volces.com/api/v3/chat/completions',
    model: 'doubao-seed-1-6-vision-250815',
    keyHint: '登录 console.volcengine.com/ark → API Key 管理创建，并开通对应视觉模型的模型服务。'
  },
  {
    id: 'hunyuan',
    label: '腾讯混元',
    desc: 'hunyuan-vision',
    apiUrl: 'https://api.hunyuan.cloud.tencent.com/v1/chat/completions',
    model: 'hunyuan-vision',
    keyHint: '登录 console.cloud.tencent.com/hunyuan → API Key 创建。混元提供 OpenAI 兼容接口。'
  },
  {
    id: 'custom',
    label: '自定义',
    desc: '任意 OpenAI 兼容服务',
    apiUrl: '',
    model: '',
    keyHint: '填写兼容 OpenAI Chat Completions 协议的接口地址，以及支持图片理解的模型名。'
  }
];

const PROVIDER_IDS: AiProvider[] = PROVIDER_PRESETS.map(p => p.id);

export function getProviderPreset(id: AiProvider): ProviderPreset {
  return PROVIDER_PRESETS.find(p => p.id === id) || PROVIDER_PRESETS[0];
}

export interface AiConfig {
  /** 厂商 */
  provider: AiProvider;
  /** API Key */
  apiKey: string;
  /** 接口地址（留空取厂商默认） */
  apiUrl: string;
  /** 模型名（留空取厂商默认） */
  model: string;
}

const STORAGE_KEY = 'aiConfig';

/**
 * 脚本内置默认 Key：仅在代码内部使用，**不会暴露给设置页 UI**
 * - H5 预览：从 .glm-key.ts 读取
 * - weapp 小程序：为空，由云函数环境变量 GLM_API_KEY 提供
 */
const BUILTIN_DEFAULT_KEY = process.env.TARO_ENV === 'h5' ? GLM_API_KEY : '';

/**
 * 默认配置的厂商/地址/模型（不含 Key）
 * 用户在「设置」页看到的就是这个，apiKey 始终为空
 */
export const DEFAULT_AI_CONFIG: AiConfig = {
  provider: 'zhipu',
  apiKey: '',
  apiUrl: getProviderPreset('zhipu').apiUrl,
  model: getProviderPreset('zhipu').model
};

/**
 * 归一化配置：厂商非法回退智谱；地址/模型留空取该厂商默认值
 * Key / 地址 / 模型任一缺失则返回 null（视为未配置）
 */
function normalize(raw: any): AiConfig | null {
  if (!raw || typeof raw !== 'object') return null;
  const provider: AiProvider = PROVIDER_IDS.includes(raw.provider) ? raw.provider : 'zhipu';
  const preset = getProviderPreset(provider);
  const apiKey = typeof raw.apiKey === 'string' ? raw.apiKey.trim() : '';
  const apiUrl = typeof raw.apiUrl === 'string' && raw.apiUrl.trim() ? raw.apiUrl.trim() : preset.apiUrl;
  const model = typeof raw.model === 'string' && raw.model.trim() ? raw.model.trim() : preset.model;
  if (!apiKey || !apiUrl || !model) return null;
  return { provider, apiKey, apiUrl, model };
}

/**
 * 读取 AI 配置：用户配置优先，未配置或无效时回退内置默认值
 */
export function getAiConfig(): AiConfig {
  try {
    const cfg = normalize(Taro.getStorageSync(STORAGE_KEY));
    if (cfg) return cfg;
  } catch {
    // 读取失败按未配置处理
  }
  return { ...DEFAULT_AI_CONFIG };
}

/**
 * 保存用户配置
 */
export async function saveAiConfig(config: AiConfig): Promise<void> {
  await Taro.setStorage({
    key: STORAGE_KEY,
    data: {
      provider: config.provider,
      apiKey: config.apiKey.trim(),
      apiUrl: config.apiUrl.trim(),
      model: config.model.trim()
    }
  });
}

/**
 * 恢复默认：清除用户配置
 */
export async function resetAiConfig(): Promise<void> {
  await Taro.removeStorage({ key: STORAGE_KEY });
}

/**
 * 实际发起识别调用时使用的配置（内部使用，**不要展示在 UI**）
 * 用户没填 Key 时回退到脚本内置默认 Key；H5 用 .glm-key.ts，weapp 为空（云函数会用环境变量兜底）
 */
export function resolveAiConfigForCall(): AiConfig {
  const cfg = getAiConfig();
  if (cfg.apiKey) return cfg;
  return { ...cfg, apiKey: BUILTIN_DEFAULT_KEY };
}
