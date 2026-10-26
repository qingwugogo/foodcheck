import Taro from '@tarojs/taro';
import type { ScanResult } from '@/types/scan';
import { ingredientList } from './ingredients';
import dayjs from 'dayjs';

/**
 * 从本地持久化记录中按 recordId 查详情
 */
async function getLocalDetail(recordId: string): Promise<ScanResult | null> {
  try {
    const r = await Taro.getStorage({ key: 'scanRecords' });
    const arr: ScanResult[] = Array.isArray(r.data) ? r.data : [];
    return arr.find(item => item.recordId === recordId) || null;
  } catch {
    return null;
  }
}

// getScanRecordDetail 云函数 mock
const mockDetailMap: Record<string, ScanResult> = {
  rec_001: {
    recordId: 'rec_001',
    foodName: '某品牌风味饮料',
    ingredientText:
      '水、白砂糖、果葡糖浆、柠檬酸、柠檬酸钠、山梨酸钾、苯甲酸钠、阿斯巴甜（含苯丙氨酸）、β-胡萝卜素、食用香精。',
    ingredients: ['白砂糖', '果葡糖浆', '柠檬酸', '山梨酸钾', '苯甲酸钠', '阿斯巴甜', 'β-胡萝卜素'].map(
      (name, idx) => {
        const full = ingredientList.find(i => i.name === name)!;
        return {
          name,
          order: idx + 1,
          isRisk: full.safetyLevel !== 'safe',
          safetyLevel: full.safetyLevel,
          purpose: full.function.split('，')[0]
        };
      }
    ),
    safetyLevel: 'caution',
    riskCount: 3,
    summary: '该食品含有部分需注意的添加剂，建议控制食用频率，敏感人群及儿童慎选。',
    riskTips: [
      '果葡糖浆：长期过量摄入果糖会增加非酒精性脂肪肝、高尿酸血症风险',
      '苯甲酸钠：可能引发哮喘或荨麻疹，儿童及对水杨酸敏感者应避免',
      '阿斯巴甜：2023年被IARC列为可能致癌物，建议控制摄入'
    ],
    imagePath: 'https://picsum.photos/id/312/300/300',
    createTime: dayjs().subtract(2, 'hour').valueOf()
  },
  rec_002: {
    recordId: 'rec_002',
    foodName: '低脂酸奶',
    ingredientText: '生牛乳、白砂糖、乳清蛋白粉、嗜热链球菌、保加利亚乳杆菌。',
    ingredients: ['白砂糖'].map((name, idx) => {
      const full = ingredientList.find(i => i.name === name)!;
      return {
        name,
        order: idx + 1,
        isRisk: false,
        safetyLevel: full.safetyLevel,
        purpose: full.function.split('，')[0]
      };
    }),
    safetyLevel: 'safe',
    riskCount: 0,
    summary: '该食品配料安全度较高，主要使用天然原料，可放心食用。',
    imagePath: 'https://picsum.photos/id/292/300/300',
    createTime: dayjs().subtract(1, 'day').valueOf()
  },
  rec_003: {
    recordId: 'rec_003',
    foodName: '熏烤火腿肠',
    ingredientText: '猪肉、水、淀粉、亚硝酸钠、D-异抗坏血酸钠、山梨酸钾、红曲红、大豆蛋白、麦芽糖浆、食用香精。',
    ingredients: ['亚硝酸钠', '山梨酸钾'].map((name, idx) => {
      const full = ingredientList.find(i => i.name === name)!;
      return {
        name,
        order: idx + 1,
        isRisk: full.safetyLevel !== 'safe',
        safetyLevel: full.safetyLevel,
        purpose: full.function.split('，')[0]
      };
    }),
    safetyLevel: 'danger',
    riskCount: 1,
    summary: '该食品含有高风险添加剂，长期食用可能存在健康风险，建议尽量不吃或少量偶尔食用。',
    riskTips: [
      '亚硝酸钠：与肉中胺类反应生成亚硝胺（强致癌物），WHO将加工肉制品列为一类致癌物，婴儿及孕妇应严格避免'
    ],
    imagePath: 'https://picsum.photos/id/401/300/300',
    createTime: dayjs().subtract(3, 'day').valueOf()
  }
};

export default async function (data?: Record<string, any>): Promise<ScanResult | null> {
  await new Promise(resolve => setTimeout(resolve, 250));
  const recordId = data?.recordId as string;
  if (!recordId) {
    console.error('[getScanRecordDetail mock] 缺少参数 recordId');
    return null;
  }
  // 优先查本地真实扫描记录
  const local = await getLocalDetail(recordId);
  if (local) {
    return local;
  }
  const result = mockDetailMap[recordId];
  if (!result) {
    // 未预置详情则回退到 rec_001 的数据结构
    console.warn('[getScanRecordDetail mock] 未找到记录:', recordId, '，回退到默认数据');
    return { ...mockDetailMap.rec_001, recordId };
  }
  return result;
}
