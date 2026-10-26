import Taro from '@tarojs/taro';
import type { ScanRecordList, ScanRecordItem, ScanResult } from '@/types/scan';
import dayjs from 'dayjs';

/**
 * 读取本地持久化的真实扫描记录
 */
async function getLocalRecords(): Promise<ScanRecordItem[]> {
  try {
    const r = await Taro.getStorage({ key: 'scanRecords' });
    const arr: ScanResult[] = Array.isArray(r.data) ? r.data : [];
    return arr.map(item => ({
      recordId: item.recordId || `rec_${item.createTime}`,
      foodName: item.foodName,
      thumbnail: item.imagePath || '',
      safetyLevel: item.safetyLevel,
      ingredientCount: item.ingredients.length,
      riskCount: item.riskCount,
      createTime: item.createTime || Date.now()
    }));
  } catch {
    return [];
  }
}

// getScanRecords 云函数 mock
const mockRecords: ScanRecordItem[] = [
  {
    recordId: 'rec_001',
    foodName: '某品牌风味饮料',
    thumbnail: 'https://picsum.photos/id/312/200/200',
    safetyLevel: 'caution',
    ingredientCount: 7,
    riskCount: 3,
    createTime: dayjs().subtract(2, 'hour').valueOf()
  },
  {
    recordId: 'rec_002',
    foodName: '低脂酸奶',
    thumbnail: 'https://picsum.photos/id/292/200/200',
    safetyLevel: 'safe',
    ingredientCount: 5,
    riskCount: 0,
    createTime: dayjs().subtract(1, 'day').valueOf()
  },
  {
    recordId: 'rec_003',
    foodName: '熏烤火腿肠',
    thumbnail: 'https://picsum.photos/id/401/200/200',
    safetyLevel: 'danger',
    ingredientCount: 9,
    riskCount: 2,
    createTime: dayjs().subtract(3, 'day').valueOf()
  },
  {
    recordId: 'rec_004',
    foodName: '橙味汽水',
    thumbnail: 'https://picsum.photos/id/580/200/200',
    safetyLevel: 'caution',
    ingredientCount: 6,
    riskCount: 2,
    createTime: dayjs().subtract(5, 'day').valueOf()
  },
  {
    recordId: 'rec_005',
    foodName: '原味薯片',
    thumbnail: 'https://picsum.photos/id/835/200/200',
    safetyLevel: 'caution',
    ingredientCount: 8,
    riskCount: 1,
    createTime: dayjs().subtract(7, 'day').valueOf()
  },
  {
    recordId: 'rec_006',
    foodName: '草莓味酸奶',
    thumbnail: 'https://picsum.photos/id/326/200/200',
    safetyLevel: 'safe',
    ingredientCount: 4,
    riskCount: 0,
    createTime: dayjs().subtract(10, 'day').valueOf()
  },
  {
    recordId: 'rec_007',
    foodName: '儿童饼干',
    thumbnail: 'https://picsum.photos/id/570/200/200',
    safetyLevel: 'caution',
    ingredientCount: 11,
    riskCount: 3,
    createTime: dayjs().subtract(15, 'day').valueOf()
  },
  {
    recordId: 'rec_008',
    foodName: '速溶咖啡',
    thumbnail: 'https://picsum.photos/id/1062/200/200',
    safetyLevel: 'safe',
    ingredientCount: 5,
    riskCount: 0,
    createTime: dayjs().subtract(20, 'day').valueOf()
  },
  {
    recordId: 'rec_009',
    foodName: '风味肉松',
    thumbnail: 'https://picsum.photos/id/431/200/200',
    safetyLevel: 'danger',
    ingredientCount: 10,
    riskCount: 1,
    createTime: dayjs().subtract(25, 'day').valueOf()
  },
  {
    recordId: 'rec_010',
    foodName: '果冻',
    thumbnail: 'https://picsum.photos/id/625/200/200',
    safetyLevel: 'caution',
    ingredientCount: 7,
    riskCount: 1,
    createTime: dayjs().subtract(30, 'day').valueOf()
  }
];

export default async function (data?: Record<string, any>): Promise<ScanRecordList> {
  await new Promise(resolve => setTimeout(resolve, 250));
  const page = (data?.page as number) || 1;
  const pageSize = (data?.pageSize as number) || 10;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  // 真实扫描记录排在最前，与 mock 按 recordId 去重合并
  const local = await getLocalRecords();
  const localIds = new Set(local.map(i => i.recordId));
  const merged = [...local, ...mockRecords.filter(i => !localIds.has(i.recordId))];
  return {
    list: merged.slice(start, end),
    total: merged.length
  };
}
