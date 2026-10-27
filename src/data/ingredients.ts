import type { Ingredient } from '@/types/ingredient';

// ============================================
// 配料知识库 Mock 数据
// 数据来源：GB 2760-2014《食品安全国家标准 食品添加剂使用标准》
//          GB 14880-2012《食品营养强化剂使用标准》
//          GB 2762-2022《食品中污染物限量》
// ============================================

export const ingredientList: Ingredient[] = [
  {
    name: '白砂糖',
    alias: ['蔗糖', '砂糖'],
    category: 'baseMaterial',
    categoryLabel: '基础原料',
    function: '提供甜味，赋予食品愉悦口感，是食品加工中最常用的甜味基础原料。',
    action: '白砂糖即蔗糖，由甘蔗或甜菜制取，进入人体后转化为葡萄糖和果糖供能。在食品中兼具甜味剂、保藏剂和质构改善作用，能调节食品的体积、水分活度和结晶特性。',
    standards: [
      {
        code: 'GB/T 317-2018',
        name: '白砂糖',
        type: 'GB',
        regulation: '规定了白砂糖的技术要求、试验方法、检验规则和标志、包装、运输、贮存。'
      },
      {
        code: 'GB 13104-2014',
        name: '食品安全国家标准 食糖',
        type: 'GB',
        regulation: '规定食糖中二氧化硫、铅、砷等限量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然安全的甜味原料，但过量摄入会增加肥胖、龋齿风险，糖尿病患者需控制摄入。',
    description: '白砂糖是日常生活中最常见的甜味剂，属于碳水化合物。适量摄入可快速供能，但长期过量摄入会增加代谢负担。',
    usageLimit: '按生产需要适量使用（GB 2760 表 A.1 中可在各类食品中按生产需要适量使用）'
  },
  {
    name: '果葡糖浆',
    alias: ['高果糖玉米糖浆', 'HFCS'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '提供甜味，冷却感强，常用于饮料、冷饮和烘焙食品。',
    action: '由淀粉水解葡萄糖异构化制得，果糖含量较高。甜度高于蔗糖，吸湿性强，能改善食品口感并延长保质期。果糖代谢不依赖胰岛素，主要在肝脏代谢。',
    standards: [
      {
        code: 'GB/T 20882-2021',
        name: '果葡糖浆',
        type: 'GB',
        regulation: '规定了果葡糖浆的术语定义、技术要求、试验方法等。'
      },
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '果葡糖浆作为甜味剂可按生产需要适量使用于各类食品。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '长期过量摄入果糖会增加非酒精性脂肪肝、高尿酸血症、代谢综合征风险，儿童及代谢异常人群应控制含糖饮料摄入。',
    description: '果葡糖浆因成本低、甜度高被广泛应用于饮料加工。研究显示过量摄入果糖更易转化为肝脏脂肪，对代谢影响大于葡萄糖。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '柠檬酸',
    alias: ['枸橼酸'],
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '调节食品酸度，增强风味，兼具一定防腐和螯合作用。',
    action: '一种天然有机酸，存在于柑橘类水果中。能降低食品 pH 值抑制微生物生长，增强抗氧化剂效果，并作为风味调节剂提升果香和清爽感。',
    standards: [
      {
        code: 'GB 1886.235-2016',
        name: '食品安全国家标准 食品添加剂 柠檬酸',
        type: 'GB',
        regulation: '规定了柠檬酸的感官、理化和微生物指标要求。'
      },
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '柠檬酸可在各类食品中按生产需要适量使用。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '安全度高，是人体三羧酸循环的中间产物。但高浓度可能刺激口腔和胃黏膜，胃酸过多者注意。',
    description: '柠檬酸是食品工业最常用的酸度调节剂，天然存在于水果中，体内参与能量代谢，安全性高。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '谷氨酸钠',
    alias: ['味精', 'MSG'],
    category: 'flavor enhancer',
    categoryLabel: '增味剂',
    function: '增强食品鲜味，提升风味层次。',
    action: '谷氨酸的钠盐，天然存在于海带、番茄、奶酪中。鲜味阈值为0.03%，与食盐协同可减少钠盐用量。在体内参与氨基酸代谢，是蛋白质组成成分之一。',
    standards: [
      {
        code: 'GB/T 8967-2007',
        name: '谷氨酸钠（味精）',
        type: 'GB',
        regulation: '规定谷氨酸钠含量≥99%，并明确感官、理化指标。'
      },
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '谷氨酸钠可在各类食品中按生产需要适量使用。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: 'FAO/WHO 认定为安全。所谓"中餐馆综合征"缺乏科学依据。但高钠摄入需关注血压，建议与低钠盐搭配。',
    description: '味精是历史悠久的安全增味剂，其鲜味成分天然存在于多种食物中，适量使用无健康风险。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '山梨酸钾',
    alias: ['2,4-己二烯酸钾'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '抑制霉菌、酵母菌等微生物生长，延长食品保质期。',
    action: '山梨酸的钾盐，通过抑制微生物脱氢酶活性阻断其代谢。在酸性环境（pH<5.5）下效果最佳，对霉菌、酵母菌和部分细菌均有抑制作用。',
    standards: [
      {
        code: 'GB 1886.39-2015',
        name: '食品安全国家标准 食品添加剂 山梨酸钾',
        type: 'GB',
        regulation: '规定山梨酸钾含量≥98%及杂质限量。'
      },
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '不同食品类别限量不同，如酱油≤1.0g/kg，果酱≤1.0g/kg，糕点≤1.0g/kg，肉制品≤0.075g/kg。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '公认安全度最高的防腐剂之一，可在体内代谢为二氧化碳和水。但少数人可能出现过敏反应。',
    description: '山梨酸钾是国际公认的安全防腐剂，毒性远低于苯甲酸钠，参与人体脂肪酸代谢，是食品工业主流防腐剂。',
    usageLimit: '依食品类别不同，一般0.075~1.0g/kg（详见 GB 2760）'
  },
  {
    name: '苯甲酸钠',
    alias: ['安息香酸钠'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '抑制细菌、霉菌生长，常用于酸性食品和饮料。',
    action: '苯甲酸的钠盐，在酸性条件下转化为苯甲酸发挥防腐作用。对细菌抑制力强于山梨酸钾，但仅在中至弱酸环境有效。',
    standards: [
      {
        code: 'GB 1886.45-2016',
        name: '食品安全国家标准 食品添加剂 苯甲酸钠',
        type: 'GB',
        regulation: '规定苯甲酸钠含量≥99%及杂质限量。'
      },
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '碳酸饮料≤0.2g/kg，酱油≤1.0g/kg，果酱≤1.0g/kg，醋≤1.0g/kg。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '部分人群敏感，可能引发哮喘或荨麻疹。儿童及对水杨酸敏感者应避免。长期过量摄入可能加重肝肾负担。英国食品标准局建议儿童慎用。',
    description: '苯甲酸钠是常用防腐剂，安全性低于山梨酸钾，在酸性饮料中应用广泛。少数人群存在不耐受现象。',
    usageLimit: '一般0.2~1.0g/kg（详见 GB 2760）'
  },
  {
    name: '特丁基对苯二酚',
    alias: ['TBHQ'],
    category: 'antioxidant',
    categoryLabel: '抗氧化剂',
    function: '防止油脂及含油脂食品氧化酸败，延长保质期。',
    action: '通过提供氢原子阻断油脂自动氧化链反应，对植物性油脂抗氧化效果优于BHA/BHT。热稳定性好，适用于煎炸油。',
    standards: [
      {
        code: 'GB 26403-2011',
        name: '食品安全国家标准 食品添加剂 特丁基对苯二酚',
        type: 'GB',
        regulation: '规定 TBHQ 含量≥99.0%，杂质限量。'
      },
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '食用油脂、油炸食品、方便米面等≤0.2g/kg（以油脂计）。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: 'JECFA 认为 ADI 为 0~0.7mg/kg。动物实验高剂量可能产生遗传毒性争议，欧盟曾限制使用。建议儿童和孕妇控制含此添加剂的油炸食品。',
    description: 'TBHQ 是高效油脂抗氧化剂，对延缓油脂酸败效果显著。国际争议较大，部分国家限制使用，建议适量摄入。',
    usageLimit: '≤0.2g/kg（以油脂计）'
  },
  {
    name: '羧甲基纤维素钠',
    alias: ['CMC-Na', '纤维素胶'],
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '增稠、稳定、保水，改善食品质构。',
    action: '纤维素经化学改性得到的阴离子聚合物，亲水性强。在水中形成胶体溶液，提高食品黏度，防止成分分层，常用于冰淇淋、酸奶、果冻等。',
    standards: [
      {
        code: 'GB 1886.232-2024',
        name: '食品安全国家标准 食品添加剂 羧甲基纤维素钠',
        type: 'GB',
        regulation: '规定 CMC-Na 的纯度、黏度、杂质限量。'
      },
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '可按生产需要适量使用于各类食品（特殊类别除外）。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '不被人体消化吸收，可随粪便排出。FDA GRAS 认定。但超大量摄入可能影响钙等矿物质吸收。',
    description: 'CMC-Na 是食品工业常用增稠稳定剂，人体不吸收，安全性高，广泛应用于乳制品和冷冻饮品。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '大豆卵磷脂',
    alias: ['卵磷脂', '磷脂'],
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '降低油水界面张力，使油水均匀混合，改善食品质构。',
    action: '从大豆油精炼副产物中提取的磷脂混合物，兼具亲水和亲油基团。能使脂肪均匀分散，防止巧克力起霜、改善面包体积，同时是胆碱来源。',
    standards: [
      {
        code: 'GB 1886.228-2023',
        name: '食品安全国家标准 食品添加剂 大豆磷脂',
        type: 'GB',
        regulation: '规定磷脂酰胆碱含量及丙酮不溶物等指标。'
      },
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '可按生产需要适量使用于各类食品。'
      },
      {
        code: 'GB 14880-2012',
        name: '食品安全国家标准 食品营养强化剂使用标准',
        type: 'GB',
        regulation: '磷脂作为营养强化剂可用于调制乳粉等。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然食品成分，安全性高。极少数大豆过敏者需注意。具有营养保健价值。',
    description: '大豆卵磷脂是天然乳化剂和营养强化剂，兼具乳化、抗氧化和营养保健功能，是少数具保健价值的添加剂。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: 'β-胡萝卜素',
    alias: ['β-叶红素'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '赋予食品橙黄色泽，兼具维生素A前体营养强化功能。',
    action: '天然类胡萝卜素，广泛存在于胡萝卜、南瓜等植物中。作为着色剂时色泽稳定，作为营养强化剂在体内转化为维生素A，维持视觉和免疫功能。',
    standards: [
      {
        code: 'GB 1886.245-2016',
        name: '食品安全国家标准 食品添加剂 β-胡萝卜素',
        type: 'GB',
        regulation: '规定 β-胡萝卜素含量及杂质限量。'
      },
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '可用于各类食品按生产需要适量使用。'
      },
      {
        code: 'GB 14880-2012',
        name: '食品安全国家标准 食品营养强化剂使用标准',
        type: 'GB',
        regulation: '作为维生素A源用于调制乳粉、饮料等，限量依食品类别。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然色素，安全度高。长期超量摄入可能引起皮肤黄染（胡萝卜素血症），停用后自行消退。',
    description: 'β-胡萝卜素是天然着色剂兼营养强化剂，安全性高，兼具抗氧化作用，是少数具有营养价值的食品添加剂。',
    usageLimit: '着色：按生产需要适量；强化：依类别（详见 GB 14880）'
  },
  {
    name: '亚硝酸钠',
    alias: ['亚硝酸盐'],
    category: 'colorFixative',
    categoryLabel: '护色剂',
    function: '保持肉制品粉红色泽，抑制肉毒梭状芽孢杆菌生长。',
    action: '与肌红蛋白反应生成亚硝基肌红蛋白，使肉制品呈现稳定粉红色。同时抑制肉毒梭状芽孢杆菌等致病菌繁殖，是加工肉制品的关键添加剂。',
    standards: [
      {
        code: 'GB 1886.11-2015',
        name: '食品安全国家标准 食品添加剂 亚硝酸钠',
        type: 'GB',
        regulation: '规定亚硝酸钠含量及杂质限量。'
      },
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '腌腊肉制品类（如咸肉、腊肉、板鸭）≤0.15g/kg；酱卤肉制品、熏烧烤肉类≤0.15g/kg；残留量≤30mg/kg。'
      },
      {
        code: 'GB 2762-2022',
        name: '食品安全国家标准 食品中污染物限量',
        type: 'GB',
        regulation: '规定食品中亚硝酸盐残留限量。'
      }
    ],
    safetyLevel: 'danger',
    riskDesc: '与肉中胺类反应生成亚硝胺（强致癌物，WHO 将加工肉制品列为一类致癌物）。婴儿及孕妇应严格避免。过量摄入可致急性中毒（高铁血红蛋白血症）。',
    description: '亚硝酸钠是高风险添加剂，虽有护色和防腐必需性，但生成的亚硝胺与胃癌、肠癌相关。加工肉制品长期摄入应尽量减少。',
    usageLimit: '使用量≤0.15g/kg，残留量≤30mg/kg'
  },
  {
    name: '阿斯巴甜',
    alias: ['甜味素', 'Aspartame'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '提供高倍甜味（蔗糖200倍），几乎不产生热量。',
    action: '由天冬氨酸和苯丙氨酸形成的二肽甲酯，甜度高热量低，在体内代谢为上述氨基酸和甲醇。常用于无糖饮料、口香糖等低热量食品。',
    standards: [
      {
        code: 'GB 1886.47-2016',
        name: '食品安全国家标准 食品添加剂 阿斯巴甜',
        type: 'GB',
        regulation: '规定阿斯巴甜含量及杂质限量。'
      },
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '可用于饮料、口香糖、固体饮料等，限量依食品类别，如碳酸饮料0.6g/kg。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: 'WHO/IARC 于 2023 年将阿斯巴甜列为"可能致癌物（2B 类）"，JECFA 维持 ADI 0~40mg/kg。苯丙酮尿症患者严禁。建议控制无糖饮料摄入量，孕妇儿童慎用。',
    description: '阿斯巴甜是常见人工甜味剂，2023 年被 IARC 列为可能致癌物引发争议。目前仍允许限量使用，建议适度摄入。',
    usageLimit: '依食品类别（如碳酸饮料0.6g/kg，详见 GB 2760）'
  },
  // ============ 基础原料（新增） ============
  {
    name: '葡萄糖',
    alias: ['一水葡萄糖', '右旋糖'],
    category: 'baseMaterial',
    categoryLabel: '基础原料',
    function: '提供甜味与速效供能，常用于运动饮料、烘焙发酵基质。',
    action: '淀粉水解制得的单糖，是血糖主要成分。进入血液后直接供能，甜度约为蔗糖的70%。在烘焙中作为酵母可快速利用的碳源，也用于输液和保健食品。',
    standards: [
      { code: 'GB/T 20880-2022', name: '食用葡萄糖', type: 'GB', regulation: '规定葡萄糖的感官、理化、微生物指标。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可在各类食品中按生产需要适量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '快速升高血糖，糖尿病患者需严格控制。过量摄入与肥胖、龋齿相关。',
    description: '葡萄糖是最简单的单糖之一，快速供能，广泛存在于水果和蜂蜜中，工业上由淀粉水解制取。',
    usageLimit: '按生产需要适量使用'
  },
  {
    name: '麦芽糖',
    alias: ['饴糖', '麦芽糖浆'],
    category: 'baseMaterial',
    categoryLabel: '基础原料',
    function: '提供温和甜味，改善食品保湿性，常用于糕点和糖果。',
    action: '由淀粉经麦芽或酶水解制得的双糖，由两分子葡萄糖组成。甜度约为蔗糖的30%~50%，吸湿性强，能保持食品柔软，延缓结晶。',
    standards: [
      { code: 'GB/T 20883-2017', name: '麦芽糖', type: 'GB', regulation: '规定麦芽糖含量及理化指标。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可在各类食品中按生产需要适量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '安全，但同样为糖类，过量摄入影响代谢，糖尿病患者需注意。',
    description: '麦芽糖是传统甜味原料，甜味温和，保湿性好，常用于中式糕点和传统糖果。',
    usageLimit: '按生产需要适量使用'
  },
  {
    name: '乳糖',
    alias: ['乳糖醇前体'],
    category: 'baseMaterial',
    categoryLabel: '基础原料',
    function: '提供轻微甜味，作为赋形剂和发酵基质，常用于乳制品和婴幼儿食品。',
    action: '哺乳动物乳汁中的双糖，由葡萄糖和半乳糖组成。甜度低（蔗糖的30%），在肠道部分不被吸收，可促进钙吸收和双歧杆菌增殖。',
    standards: [
      { code: 'GB 25595-2018', name: '食品安全国家标准 乳糖', type: 'GB', regulation: '规定乳糖含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可在各类食品中按生产需要适量使用。' }
    ],
    safetyLevel: 'caution',
    riskDesc: '乳糖不耐受人群（亚洲人群高发）摄入后可出现腹胀腹泻，需注意。',
    description: '乳糖是乳汁中主要糖类，甜度低，广泛用作赋形剂，乳糖不耐受者需留意。',
    usageLimit: '按生产需要适量使用'
  },
  {
    name: '麦芽糊精',
    alias: ['水溶性糊精'],
    category: 'baseMaterial',
    categoryLabel: '基础原料',
    function: '增体、赋形、改善口感，低甜度载体，常用于固体饮料和奶粉。',
    action: '淀粉经酶水解得到的低聚糖混合物，DE值<20。几乎无甜味，易消化吸收，溶解性好，常作为香精、营养强化剂的载体。',
    standards: [
      { code: 'GB/T 29204-2012', name: '麦芽糊精', type: 'GB', regulation: '规定DE值、水分、灰分等指标。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可在各类食品中按生产需要适量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '易消化吸收使血糖快速升高，糖尿病患者需注意。基本无健康风险。',
    description: '麦芽糊精是常用赋形载体，甜度低、溶解好，广泛用于固体饮料和营养食品。',
    usageLimit: '按生产需要适量使用'
  },
  {
    name: '食用淀粉',
    alias: ['玉米淀粉', '木薯淀粉'],
    category: 'baseMaterial',
    categoryLabel: '基础原料',
    function: '增稠、赋形、改善质构，是食品加工的基础原料。',
    action: '由谷物或薯类提取的多糖，由直链和支链淀粉组成。在加热糊化后形成凝胶，提供食品所需的黏弹性和保水性。',
    standards: [
      { code: 'GB/T 8885-2017', name: '食用变性淀粉', type: 'GB', regulation: '规定食用淀粉的技术要求。' },
      { code: 'GB 31637-2016', name: '食品安全国家标准 食用淀粉', type: 'GB', regulation: '规定食用淀粉的污染物、真菌毒素限量。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然安全，但精制淀粉升糖指数高，糖尿病患者需控制。',
    description: '淀粉是食品工业最基础原料，来源广泛，安全无毒，主要提供碳水化合物。',
    usageLimit: '按生产需要适量使用'
  },
  {
    name: '食用盐',
    alias: ['食盐', '氯化钠'],
    category: 'baseMaterial',
    categoryLabel: '基础原料',
    function: '提供咸味，调节风味，兼具防腐作用。',
    action: '主要成分为氯化钠，是人体必需电解质。维持渗透压和神经肌肉功能，在食品中兼具调味、防腐和质构改善作用。',
    standards: [
      { code: 'GB 2721-2015', name: '食品安全国家标准 食用盐', type: 'GB', regulation: '规定食用盐的理化指标、限量要求。' },
      { code: 'GB 28050-2011', name: '食品安全国家标准 预包装食品营养标签通则', type: 'GB', regulation: '规定钠含量标示要求。' }
    ],
    safetyLevel: 'caution',
    riskDesc: '过量摄入与高血压、心血管疾病、胃癌风险相关。中国居民钠摄入普遍超标，建议成人每日<5g。',
    description: '食盐是日常必需调味品，过量摄入是慢性病重要风险因素，需控制摄入。',
    usageLimit: '按生产需要适量使用（建议成人每日<5g）'
  },
  {
    name: '食用植物油',
    alias: ['植物油', '大豆油'],
    category: 'baseMaterial',
    categoryLabel: '基础原料',
    function: '提供脂肪和热量，改善食品口感和香气，传热介质。',
    action: '由油料作物种子压榨或浸出制取，主要为甘油三酯。提供必需脂肪酸和脂溶性维生素载体，赋予食品润滑口感和风味。',
    standards: [
      { code: 'GB 2716-2018', name: '食品安全国家标准 植物油', type: 'GB', regulation: '规定植物油的酸价、过氧化值、溶剂残留等指标。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '相关抗氧化剂等按本标准使用。' }
    ],
    safetyLevel: 'caution',
    riskDesc: '脂肪热量高，过量摄入增加肥胖风险。反复煎炸产生反式脂肪酸和氧化物有害健康。',
    description: '植物油是主要食用油，提供必需脂肪酸，但需控量并避免高温反复煎炸。',
    usageLimit: '按生产需要适量使用'
  },
  {
    name: '蜂蜜',
    alias: ['百花蜜', '单花蜜'],
    category: 'baseMaterial',
    categoryLabel: '基础原料',
    function: '天然甜味原料，提供风味和保湿性，兼具抑菌作用。',
    action: '蜜蜂采集花蜜经酿造的天然甜物质，主要含果糖和葡萄糖。甜度高、吸湿性强，高渗透压和低pH赋予一定抑菌性。',
    standards: [
      { code: 'GB 14963-2011', name: '食品安全国家标准 蜂蜜', type: 'GB', regulation: '规定蜂蜜的理化指标、污染物限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '蜂蜜作为原料可按生产需要适量使用。' }
    ],
    safetyLevel: 'caution',
    riskDesc: '天然安全，但1岁以下婴儿严禁食用（有肉毒梭菌芽孢风险）。糖分高需控量。',
    description: '蜂蜜是天然甜味剂，兼具风味和保湿性，1岁以下婴儿禁用，其他人群适量。',
    usageLimit: '按生产需要适量使用（婴儿禁用）'
  },
  // ============ 甜味剂（新增） ============
  {
    name: '三氯蔗糖',
    alias: ['蔗糖素', 'Sucralose'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '高倍甜味剂，甜度约为蔗糖的600倍，无热量。',
    action: '蔗糖分子中三个羟基被氯取代的衍生物。甜味纯正、无后苦味，热稳定性好，不被人体代谢，几乎不产生热量。',
    standards: [
      { code: 'GB 25531-2010', name: '食品安全国家标准 食品添加剂 三氯蔗糖', type: 'GB', regulation: '规定三氯蔗糖含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可用于饮料、糕点等，如碳酸饮料0.4g/kg，调制乳0.3g/kg。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 认定 ADI 0~15mg/kg，安全性较高。有研究提示可能影响肠道菌群，但证据有限。',
    description: '三氯蔗糖是常用高倍甜味剂，甜味纯正热稳定，安全性高，广泛用于低热量食品。',
    usageLimit: '依食品类别（如碳酸饮料0.4g/kg，详见 GB 2760）'
  },
  {
    name: '安赛蜜',
    alias: ['乙酰磺胺酸钾', 'Acesulfame K'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '高倍甜味剂，甜度约为蔗糖的200倍，无热量。',
    action: '氧硫杂环化合物钾盐，甜味迅速释放但有余味。不被人体代谢，与阿斯巴甜等复配可改善口感。',
    standards: [
      { code: 'GB 25540-2010', name: '食品安全国家标准 食品添加剂 乙酰磺胺酸钾', type: 'GB', regulation: '规定安赛蜜含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可用于饮料、糖果等，如碳酸饮料0.3g/kg。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 认定 ADI 0~15mg/kg，安全性较高。常与其他甜味剂复配使用。',
    description: '安赛蜜是常用人工甜味剂，甜味快、稳定性好，常与阿斯巴甜复配用于无糖食品。',
    usageLimit: '依食品类别（如碳酸饮料0.3g/kg，详见 GB 2760）'
  },
  {
    name: '糖精钠',
    alias: ['糖精', '邻苯甲酰磺酰亚胺钠'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '高倍甜味剂，甜度约为蔗糖的300~500倍，无热量。',
    action: '人工合成的磺酰胺类甜味剂，甜味浓度高但有金属苦后味。不被代谢，随尿排出。',
    standards: [
      { code: 'GB 1886.45-2016', name: '食品安全国家标准 食品添加剂 糖精钠（邻苯甲酰磺酰亚胺钠）', type: 'GB', regulation: '规定糖精钠含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '饮料、糕点、瓜子等限量使用，如碳酸饮料0.15g/kg。' }
    ],
    safetyLevel: 'caution',
    riskDesc: '早期动物实验高剂量致癌争议已基本澄清，但建议儿童、孕妇减少摄入。口感有苦后味。',
    description: '糖精钠是最古老的人工甜味剂，甜度高但余味差，安全性有争议历史，建议适量。',
    usageLimit: '依食品类别（如碳酸饮料0.15g/kg，详见 GB 2760）'
  },
  {
    name: '甜蜜素',
    alias: ['环己基氨基磺酸钠'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '甜味剂，甜度约为蔗糖的30~50倍，口感较好。',
    action: '环己基氨基磺酸盐，甜味纯正，不被人体代谢。常与糖精复配改善口感。',
    standards: [
      { code: 'GB 1886.47-2016', name: '食品安全国家标准 食品添加剂 环己基氨基磺酸钠', type: 'GB', regulation: '规定甜蜜素含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '饮料、糕点、蜜饯等限量，如碳酸饮料0.65g/kg。' }
    ],
    safetyLevel: 'caution',
    riskDesc: 'JECFA ADI 0~7mg/kg。美国日本曾禁用（致癌争议），后研究澄清但仍有争议，建议适量。',
    description: '甜蜜素是常用人工甜味剂，口感好，曾在部分国家受限，建议适量摄入。',
    usageLimit: '依食品类别（如碳酸饮料0.65g/kg，详见 GB 2760）'
  },
  {
    name: '木糖醇',
    alias: ['戊五醇'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '糖醇类甜味剂，甜度与蔗糖相当，防龋齿，不升血糖。',
    action: '由玉米芯等提取的木糖加氢制得的五碳糖醇。甜度与蔗糖相近，代谢不依赖胰岛素，口腔不产酸故不致龋。',
    standards: [
      { code: 'GB 1886.234-2016', name: '食品安全国家标准 食品添加剂 木糖醇', type: 'GB', regulation: '规定木糖醇含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可按生产需要适量使用于各类食品（特殊类别除外）。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '安全，过量可能致渗透性腹泻（单次>30g）。糖尿病友好。',
    description: '木糖醇是常用糖醇甜味剂，防龋齿、不升血糖，是糖尿病和口香糖常用甜味剂。',
    usageLimit: '按生产需要适量使用（过量可能致腹泻）'
  },
  {
    name: '赤藓糖醇',
    alias: ['1,2,3,4-丁四醇'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '糖醇类甜味剂，甜度约为蔗糖的70%，几乎零热量。',
    action: '由葡萄糖发酵制得的四碳糖醇。分子小，大部分经尿液排出，热量极低（约0.2kcal/g），耐受性好于其他糖醇。',
    standards: [
      { code: 'GB 26404-2011', name: '食品安全国家标准 食品添加剂 赤藓糖醇', type: 'GB', regulation: '规定赤藓糖醇含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可按生产需要适量使用于各类食品（特殊类别除外）。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '耐受性最好，不易致腹泻。热量低适合控糖人群。',
    description: '赤藓糖醇是耐受性最好的糖醇甜味剂，几乎零热量，是近年热门的代糖选择。',
    usageLimit: '按生产需要适量使用'
  },
  {
    name: '麦芽糖醇',
    alias: ['氢化麦芽糖'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '糖醇类甜味剂，甜度约为蔗糖的80%~90%，保湿性好。',
    action: '麦芽糖加氢制得的糖醇。甜味温和，吸湿性强，可改善食品保湿性，代谢缓慢部分参与胰岛素。',
    standards: [
      { code: 'GB 1886.278-2014', name: '食品安全国家标准 食品添加剂 麦芽糖醇', type: 'GB', regulation: '规定麦芽糖醇含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可按生产需要适量使用于各类食品（特殊类别除外）。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '安全，过量可能致腹胀腹泻。可升高血糖但幅度低于蔗糖。',
    description: '麦芽糖醇兼具甜味与保湿性，常用于无糖糕点和冰淇淋，口感接近蔗糖。',
    usageLimit: '按生产需要适量使用'
  },
  {
    name: '山梨糖醇',
    alias: ['山梨醇', 'D-山梨糖醇'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '糖醇类甜味剂，甜度约为蔗糖的60%，保湿性强。',
    action: '葡萄糖加氢制得的六碳糖醇。甜度低、吸湿性强，兼具甜味、保湿、螯合作用。在体内缓慢代谢，部分经尿液排出。',
    standards: [
      { code: 'GB 1886.187-2016', name: '食品安全国家标准 食品添加剂 山梨糖醇液', type: 'GB', regulation: '规定山梨糖醇液含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可按生产需要适量使用于各类食品（特殊类别除外）。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '安全，过量可能致腹泻。兼具保湿作用广泛使用。',
    description: '山梨糖醇是常用糖醇甜味剂兼保湿剂，甜度低，广泛用于烘焙和牙膏。',
    usageLimit: '按生产需要适量使用'
  },
  {
    name: '甜菊糖苷',
    alias: ['甜菊糖', '甜叶菊苷'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '天然高倍甜味剂，甜度约为蔗糖的200~300倍，零热量。',
    action: '从甜叶菊叶子提取的萜类糖苷。甜味释放慢、有甘草样余味，不被代谢，无热量。',
    standards: [
      { code: 'GB 8270-2014', name: '食品安全国家标准 食品添加剂 甜菊糖苷', type: 'GB', regulation: '规定甜菊糖苷含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可用于饮料、糕点等，如碳酸饮料0.2g/kg。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA ADI 0~4mg/kg，天然来源安全性高。余味略苦。',
    description: '甜菊糖苷是热门天然甜味剂，零热量，适合控糖人群，余味略带苦甘草味。',
    usageLimit: '依食品类别（如碳酸饮料0.2g/kg，详见 GB 2760）'
  },
  {
    name: '纽甜',
    alias: ['N-取代阿斯巴甜衍生物', 'Neotame'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '高倍甜味剂，甜度约为蔗糖的7000~13000倍。',
    action: '阿斯巴甜的衍生物，因结构改造甜度大幅提高且代谢不产生苯丙氨酸，苯丙酮尿症患者可用。',
    standards: [
      { code: 'GB 29944-2013', name: '食品安全国家标准 食品添加剂 纽甜', type: 'GB', regulation: '规定纽甜含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可用于饮料等，因甜度极高用量很小。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA ADI 0~2mg/kg，安全性较高。用量极小。',
    description: '纽甜是阿斯巴甜衍生物，甜度极高且适合苯丙酮尿症患者，用量微小。',
    usageLimit: '依食品类别（详见 GB 2760）'
  },
  // ============ 防腐剂（新增） ============
  {
    name: '丙酸钙',
    alias: ['丙酸盐'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '抑制霉菌和面包丝状菌，常用于面包和糕点防腐。',
    action: '丙酸的钙盐，在酸性环境抑制霉菌和 rope 菌。丙酸也是人体正常代谢产物，安全性高。',
    standards: [
      { code: 'GB 25548-2010', name: '食品安全国家标准 食品添加剂 丙酸钙', type: 'GB', regulation: '规定丙酸钙含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '面包、糕点≤2.5g/kg（以丙酸计）。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '安全性高，丙酸为体内正常代谢中间产物。基本无健康风险。',
    description: '丙酸钙是面包糕点常用防腐剂，安全性高，体内正常代谢，是烘焙制品首选防腐剂。',
    usageLimit: '面包、糕点≤2.5g/kg（以丙酸计）'
  },
  {
    name: '丙酸钠',
    alias: ['丙酸盐钠'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '抑制霉菌，常用于糕点、果酱和奶酪防腐。',
    action: '丙酸的钠盐，作用与丙酸钙类似，因钠盐溶解度更高适用范围广。同样代谢为丙酸。',
    standards: [
      { code: 'GB 25549-2010', name: '食品安全国家标准 食品添加剂 丙酸钠', type: 'GB', regulation: '规定丙酸钠含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '糕点、果酱、奶酪等≤2.5g/kg。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '安全性高，体内正常代谢。需注意钠摄入。',
    description: '丙酸钠是糕点果酱常用防腐剂，安全性高，与丙酸钙类似但含钠。',
    usageLimit: '糕点等≤2.5g/kg（以丙酸计）'
  },
  {
    name: '脱氢乙酸钠',
    alias: ['脱氢醋酸钠'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '广谱抑菌，对细菌、霉菌均有效，常用于烘焙食品。',
    action: '脱氢乙酸的钠盐，在弱酸至中性环境均有效，抗菌谱广。曾广泛用于面包、糕点。',
    standards: [
      { code: 'GB 1886.75-2022', name: '食品安全国家标准 食品添加剂 脱氢乙酸钠', type: 'GB', regulation: '规定脱氢乙酸钠含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '黄油、酱菜等限量；2025年新规大幅收紧，面包糕点不再允许使用。' }
    ],
    safetyLevel: 'caution',
    riskDesc: '长期高剂量摄入动物实验可见体重下降、出血倾向，2024年 GB 2760 修订收窄使用范围，建议减少摄入。',
    description: '脱氢乙酸钠曾广泛用于烘焙，因安全争议2025年新规大幅收窄，建议关注。',
    usageLimit: '依新规（面包糕点已禁用，详见 GB 2760-2024）'
  },
  {
    name: '对羟基苯甲酸乙酯',
    alias: ['尼泊金乙酯'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '抑制霉菌、酵母菌，常用于酱料、饮料、果酱。',
    action: '对羟基苯甲酸酯类，抗菌效果不受pH影响，对霉菌酵母效果好。曾被广泛使用。',
    standards: [
      { code: 'GB 1886.31-2015', name: '食品安全国家标准 食品添加剂 对羟基苯甲酸乙酯', type: 'GB', regulation: '规定含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '酱料、醋、饮料等限量，如醋0.25g/kg。' }
    ],
    safetyLevel: 'caution',
    riskDesc: '有弱雌激素活性争议，可能致敏，欧盟对尼泊金酯类限制收紧，建议儿童、孕妇减少接触。',
    description: '尼泊金乙酯是常用防腐剂，因弱雌激素活性争议在欧盟受限，建议适量。',
    usageLimit: '依食品类别（如醋0.25g/kg，详见 GB 2760）'
  },
  {
    name: '对羟基苯甲酸甲酯',
    alias: ['尼泊金甲酯'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '抑制霉菌、酵母菌，常与乙酯、丙酯复配使用。',
    action: '对羟基苯甲酸酯类，抗菌谱类似乙酯，与丙酯、乙酯复配效果更佳。',
    standards: [
      { code: 'GB 1886.31-2015', name: '食品安全国家标准 食品添加剂 对羟基苯甲酸酯类', type: 'GB', regulation: '规定含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '酱料、醋、饮料等限量，以对羟基苯甲酸计。' }
    ],
    safetyLevel: 'caution',
    riskDesc: '有弱雌激素活性争议，可能致敏，欧盟限制使用，敏感人群及儿童减少接触。',
    description: '尼泊金甲酯是酯类防腐剂，因弱雌激素活性争议建议适量。',
    usageLimit: '依食品类别（以对羟基苯甲酸计，详见 GB 2760）'
  },
  {
    name: '纳他霉素',
    alias: ['游霉素', '匹马菌素'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '抑制真菌，常用于奶酪表面和肉制品表面防腐。',
    action: '由纳塔尔链霉菌发酵产生的多烯大环内酯类抗真菌剂，对霉菌、酵母高效，对细菌无效。用于表面喷洒或浸渍。',
    standards: [
      { code: 'GB 1886.94-2015', name: '食品安全国家标准 食品添加剂 纳他霉素', type: 'GB', regulation: '规定纳他霉素含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '奶酪、肉制品表面≤0.3g/kg，残留≤10mg/kg。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA ADI 0~0.3mg/kg，几乎不被肠道吸收，安全性较高。属天然生物防腐剂。',
    description: '纳他霉素是天然生物防腐剂，专抑真菌，广泛用于奶酪和肉制品表面防腐。',
    usageLimit: '表面使用≤0.3g/kg，残留≤10mg/kg'
  },
  {
    name: '二氧化硫',
    alias: ['亚硫酸酐', '焦亚硫酸钠前体'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '漂白、防腐、抗氧化，常用于葡萄酒、干果、蜜饯。',
    action: '硫的氧化物，兼具漂白、防腐、抗氧化作用。抑制褐变酶和微生物，是葡萄酒、干制水果常用添加剂。',
    standards: [
      { code: 'GB 1886.243-2017', name: '食品安全国家标准 食品添加剂 二氧化硫', type: 'GB', regulation: '规定二氧化硫含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '葡萄酒≤0.25g/L，蜜饯≤0.35g/kg，干果等限量不同。' }
    ],
    safetyLevel: 'caution',
    riskDesc: '可诱发哮喘（亚硫酸敏感人群），部分人出现荨麻疹、胃肠不适，哮喘患者应避免。GB 2762 规定残留限量。',
    description: '二氧化硫兼漂白防腐，广泛用于葡萄酒和干果，哮喘及敏感人群需注意。',
    usageLimit: '依食品类别（如葡萄酒0.25g/L，蜜饯0.35g/kg）'
  },
  {
    name: '乳酸链球菌素',
    alias: ['尼生素', 'Nisin'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '抑制革兰阳性菌和芽孢菌，常用于乳制品和肉制品。',
    action: '乳酸乳球菌产生的多肽类抗菌物质，仅抑革兰阳性菌和芽孢。在肠道被蛋白酶降解为氨基酸，安全性极高。',
    standards: [
      { code: 'GB 1886.87-2015', name: '食品安全国家标准 食品添加剂 乳酸链球菌素', type: 'GB', regulation: '规定乳酸链球菌素效价及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '乳制品、肉制品、罐头等可按生产需要适量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA ADI 不限定，在消化道被降解为氨基酸，无毒性。天然生物防腐剂。',
    description: '乳酸链球菌素是安全天然生物防腐剂，肠道即被降解，广泛用于乳肉制品。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '双乙酸钠',
    alias: ['二醋酸一钠', 'SDA'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '抑制霉菌，兼具调节酸度作用，常用于谷物制品和肉制品。',
    action: '醋酸与醋酸钠的复合物，在酸性环境释放醋酸抑菌。对霉菌有效，安全性较好。',
    standards: [
      { code: 'GB 1886.7-2015', name: '食品安全国家标准 食品添加剂 双乙酸钠', type: 'GB', regulation: '规定双乙酸钠含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '谷物制品、肉制品、豆制品等≤1%~3%不等。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA ADI 0~15mg/kg，代谢为醋酸，安全性高。',
    description: '双乙酸钠是安全防腐兼酸度调节剂，代谢为醋酸，广泛用于谷物和肉制品。',
    usageLimit: '依食品类别（详见 GB 2760）'
  },
  {
    name: '单辛酸甘油酯',
    alias: ['单癸酸甘油酯前体', 'MCT前体'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '抑制霉菌和部分细菌，常用于豆制品和肉制品。',
    action: '辛酸与甘油的单酯，天然存在于椰子油中。兼具乳化与抗菌作用，安全性高。',
    standards: [
      { code: 'GB 1886.116-2015', name: '食品安全国家标准 食品添加剂 单辛酸甘油酯', type: 'GB', regulation: '规定单辛酸甘油酯含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '豆制品、肉制品、生鲜肉等限量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然存在于椰子油，体内正常代谢，安全性高。',
    description: '单辛酸甘油酯是天然来源防腐兼乳化剂，安全性高，常用于豆肉制品。',
    usageLimit: '依食品类别（详见 GB 2760）'
  },
  // ============ 抗氧化剂（新增） ============
  {
    name: '丁基羟基茴香醚',
    alias: ['BHA', '叔丁基羟基茴香醚'],
    category: 'antioxidant',
    categoryLabel: '抗氧化剂',
    function: '防止油脂氧化，常用于油炸食品、油脂、谷物制品。',
    action: '人工合成的酚类抗氧化剂，通过提供氢原子阻断油脂氧化链反应。热稳定性好，与 BHT、PG 复配增效。',
    standards: [
      { code: 'GB 1886.12-2015', name: '食品安全国家标准 食品添加剂 丁基羟基茴香醚', type: 'GB', regulation: '规定 BHA 含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '食用油脂、油炸食品、方便米面等≤0.2g/kg（以油脂计）。' }
    ],
    safetyLevel: 'caution',
    riskDesc: 'JECFA ADI 0~0.5mg/kg。动物实验高剂量有前胃增生及可疑致癌争议，IARC 列为 2B 类，欧盟限制使用，建议减少摄入。',
    description: 'BHA 是合成油脂抗氧化剂，有致癌争议，欧盟限制使用，建议适量摄入。',
    usageLimit: '≤0.2g/kg（以油脂计）'
  },
  {
    name: '二丁基羟基甲苯',
    alias: ['BHT', '2,6-二叔丁基对甲酚'],
    category: 'antioxidant',
    categoryLabel: '抗氧化剂',
    function: '防止油脂氧化，常与 BHA 复配使用。',
    action: '人工合成的酚类抗氧化剂，作用机制与 BHA 类似，与 BHA、PG 复配可增效。',
    standards: [
      { code: 'GB 1886.6-2015', name: '食品安全国家标准 食品添加剂 二丁基羟基甲苯', type: 'GB', regulation: '规定 BHT 含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '食用油脂、油炸食品等≤0.2g/kg（以油脂计）。' }
    ],
    safetyLevel: 'caution',
    riskDesc: 'JECFA ADI 0~0.3mg/kg。高剂量动物实验有肝肾毒性争议，部分国家限制使用，建议减少摄入。',
    description: 'BHT 是合成油脂抗氧化剂，有毒性争议，建议适量摄入。',
    usageLimit: '≤0.2g/kg（以油脂计）'
  },
  {
    name: '没食子酸丙酯',
    alias: ['PG', '棓酸丙酯'],
    category: 'antioxidant',
    categoryLabel: '抗氧化剂',
    function: '防止油脂氧化，对动物油脂效果较好。',
    action: '没食子酸的丙酯，酚类抗氧化剂。与 BHA、BHT 复配增效，但对热稍敏感。',
    standards: [
      { code: 'GB 1886.14-2015', name: '食品安全国家标准 食品添加剂 没食子酸丙酯', type: 'GB', regulation: '规定 PG 含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '食用油脂、油炸食品等≤0.1g/kg（以油脂计）。' }
    ],
    safetyLevel: 'caution',
    riskDesc: 'JECFA ADI 0~1.4mg/kg。相对 BHA/BHT 争议较小，但建议适量。',
    description: 'PG 是合成油脂抗氧化剂，常与 BHA/BHT 复配，建议适量摄入。',
    usageLimit: '≤0.1g/kg（以油脂计）'
  },
  {
    name: 'D-异抗坏血酸钠',
    alias: ['异维C钠', '赤藓糖酸钠'],
    category: 'antioxidant',
    categoryLabel: '抗氧化剂',
    function: '抗氧化护色，常用于肉制品、果蔬罐头、啤酒。',
    action: '抗坏血酸的异构体钠盐，抗氧化机制类似维C，但生物活性仅为维C的5%。可护色、防氧化。',
    standards: [
      { code: 'GB 1886.82-2015', name: '食品安全国家标准 食品添加剂 D-异抗坏血酸钠', type: 'GB', regulation: '规定 D-异抗坏血酸钠含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '肉制品、果蔬罐头、葡萄酒等限量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA ADI 0~5mg/kg，体内代谢为草酸，安全性较高。',
    description: 'D-异抗坏血酸钠是维C异构体抗氧化剂，安全性高，常用于肉制品护色。',
    usageLimit: '依食品类别（详见 GB 2760）'
  },
  {
    name: '茶多酚',
    alias: ['茶提取物', '维多酚'],
    category: 'antioxidant',
    categoryLabel: '抗氧化剂',
    function: '天然抗氧化，防止油脂氧化，兼具保健作用。',
    action: '从茶叶提取的多酚类物质（以儿茶素为主），抗氧化能力强，兼具清除自由基、降血脂等保健作用。',
    standards: [
      { code: 'GB 1886.211-2016', name: '食品安全国家标准 食品添加剂 茶多酚', type: 'GB', regulation: '规定茶多酚含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '食用油脂、肉制品等按生产需要适量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，安全性高，兼有保健价值。高浓度可能影响睡眠（含咖啡因）。',
    description: '茶多酚是天然抗氧化剂兼保健成分，安全性高，是健康油脂抗氧化选择。',
    usageLimit: '按生产需要适量使用'
  },
  {
    name: '维生素E',
    alias: ['dl-α-生育酚', '生育酚'],
    category: 'antioxidant',
    categoryLabel: '抗氧化剂',
    function: '天然抗氧化，防止油脂氧化，兼具营养强化。',
    action: '生育酚类化合物，天然植物油中富含。通过捕捉自由基阻断油脂氧化，是天然抗氧化剂和必需营养素。',
    standards: [
      { code: 'GB 1886.233-2016', name: '食品安全国家标准 食品添加剂 dl-α-生育酚', type: 'GB', regulation: '规定生育酚含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '食用油脂等按生产需要适量使用。' },
      { code: 'GB 14880-2012', name: '食品安全国家标准 食品营养强化剂使用标准', type: 'GB', regulation: '作为营养强化剂可用于调制乳粉、植物油等。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然必需营养素，安全性高。超大剂量长期补充可能增加出血风险。',
    description: '维生素E是天然抗氧化剂兼必需营养素，安全性高，是健康油脂抗氧化选择。',
    usageLimit: '按生产需要适量使用'
  },
  {
    name: '迷迭香提取物',
    alias: ['鼠尾草提取物'],
    category: 'antioxidant',
    categoryLabel: '抗氧化剂',
    function: '天然抗氧化，防止油脂氧化，兼具风味。',
    action: '从迷迭香叶提取的鼠尾草酸和鼠尾草酚等，抗氧化能力强，热稳定性好，是天然高效抗氧化剂。',
    standards: [
      { code: 'GB 1886.56-2015', name: '食品安全国家标准 食品添加剂 迷迭香提取物', type: 'GB', regulation: '规定提取物含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '食用油脂、肉制品等按生产需要适量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，安全性高，是替代合成抗氧化剂的优选。',
    description: '迷迭香提取物是天然高效抗氧化剂，热稳定好，是健康油脂抗氧化选择。',
    usageLimit: '按生产需要适量使用'
  },
  {
    name: '甘草抗氧化物',
    alias: ['甘草提取物'],
    category: 'antioxidant',
    categoryLabel: '抗氧化剂',
    function: '天然抗氧化，防止油脂氧化，兼具风味。',
    action: '从甘草根提取的黄酮类抗氧化物，抗氧化能力强，兼有甜味和保健作用。',
    standards: [
      { code: 'GB 1886.241-2016', name: '食品安全国家标准 食品添加剂 甘草抗氧化物', type: 'GB', regulation: '规定提取物含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '食用油脂、肉制品等按生产需要适量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，安全性高。长期大剂量可能影响电解质（甘草酸潴钠排钾）。',
    description: '甘草抗氧化物是天然黄酮类抗氧化剂，安全性高，兼有甜味和保健作用。',
    usageLimit: '按生产需要适量使用'
  },
  // ============ 增味剂（新增） ============
  {
    name: '5′-呈味核苷酸二钠',
    alias: ['I+G', '呈味核苷酸'],
    category: 'flavor enhancer',
    categoryLabel: '增味剂',
    function: '增强鲜味，与味精协同大幅提升鲜味。',
    action: '由肌苷酸二钠（IMP）和鸟苷酸二钠（GMP）组成的混合物。与谷氨酸钠有显著协同效应，鲜味可提升数倍至数十倍。',
    standards: [
      { code: 'GB 1886.171-2016', name: '食品安全国家标准 食品添加剂 5′-呈味核苷酸二钠', type: 'GB', regulation: '规定呈味核苷酸二钠含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可在各类食品中按生产需要适量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 不限定 ADI，核苷酸是体内正常成分，安全性高。',
    description: 'I+G 是与味精协同的高效增味剂，核苷酸是体内正常成分，安全性高。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '5′-鸟苷酸二钠',
    alias: ['GMP', '鸟苷酸钠'],
    category: 'flavor enhancer',
    categoryLabel: '增味剂',
    function: '增强鲜味，鲜味阈值为谷氨酸钠的10倍以上。',
    action: '鸟苷酸的二钠盐，天然存在于香菇中。与味精协同鲜味倍增，是香菇鲜味主要来源。',
    standards: [
      { code: 'GB 1886.170-2016', name: '食品安全国家标准 食品添加剂 5′-鸟苷酸二钠', type: 'GB', regulation: '规定鸟苷酸二钠含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可在各类食品中按生产需要适量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 不限定 ADI，安全性高。',
    description: 'GMP 是香菇鲜味来源的高效增味剂，与味精协同，安全性高。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '5′-肌苷酸二钠',
    alias: ['IMP', '肌苷酸钠'],
    category: 'flavor enhancer',
    categoryLabel: '增味剂',
    function: '增强鲜味，鲜味阈值为谷氨酸钠的10倍以上。',
    action: '肌苷酸的二钠盐，天然存在于肉类和鱼类中。与味精协同鲜味倍增，是肉类鲜味主要来源。',
    standards: [
      { code: 'GB 1886.172-2016', name: '食品安全国家标准 食品添加剂 5′-肌苷酸二钠', type: 'GB', regulation: '规定肌苷酸二钠含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可在各类食品中按生产需要适量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 不限定 ADI，安全性高。',
    description: 'IMP 是肉类鲜味来源的高效增味剂，与味精协同，安全性高。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '琥珀酸二钠',
    alias: ['丁二酸二钠', 'WSA'],
    category: 'flavor enhancer',
    categoryLabel: '增味剂',
    function: '增强鲜味，赋予贝类风味。',
    action: '琥珀酸的二钠盐，天然存在于贝类中。兼具鲜味和贝类风味，与味精、核苷酸协同。',
    standards: [
      { code: 'GB 1886.223-2016', name: '食品安全国家标准 食品添加剂 琥珀酸二钠', type: 'GB', regulation: '规定琥珀酸二钠含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '调味料等限量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '琥珀酸是体内三羧酸循环中间产物，安全性高。',
    description: '琥珀酸二钠是贝类风味增味剂，体内正常代谢，安全性高。',
    usageLimit: '依食品类别（详见 GB 2760）'
  },
  // ============ 着色剂（新增） ============
  {
    name: '日落黄',
    alias: ['晚霞黄', 'Ponceau 4X', 'Sunset Yellow FCF'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '赋予食品橙黄色泽，常用于饮料、糖果、糕点。',
    action: '偶氮类合成色素，色泽鲜艳稳定。水溶性好，常与其他色素复配产生橙、绿等色。',
    standards: [
      { code: 'GB 1886.51-2015', name: '食品安全国家标准 食品添加剂 日落黄', type: 'GB', regulation: '规定日落黄含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '饮料、糖果、糕点等限量，如碳酸饮料0.1g/kg。' }
    ],
    safetyLevel: 'caution',
    riskDesc: '南安普顿研究提示与儿童多动症相关（欧盟需标注"可能影响儿童行为"）。少数人过敏。建议儿童减少。',
    description: '日落黄是常用合成色素，有儿童多动争议，欧盟需警示标注，建议儿童适量。',
    usageLimit: '依食品类别（如碳酸饮料0.1g/kg，详见 GB 2760）'
  },
  {
    name: '诱惑红',
    alias: ['Allura Red AC', '40号红'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '赋予食品红色泽，常用于饮料、糖果、肉制品。',
    action: '偶氮类合成色素，红色鲜艳稳定。水溶性好，常用于红色调食品。',
    standards: [
      { code: 'GB 1886.52-2015', name: '食品安全国家标准 食品添加剂 诱惑红', type: 'GB', regulation: '规定诱惑红含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '饮料、糖果、糕点等限量，如碳酸饮料0.1g/kg。' }
    ],
    safetyLevel: 'caution',
    riskDesc: '南安普顿研究提示与儿童多动症相关，欧盟需警示标注。建议儿童减少。',
    description: '诱惑红是常用合成红色素，有儿童多动争议，建议儿童适量。',
    usageLimit: '依食品类别（如碳酸饮料0.1g/kg，详见 GB 2760）'
  },
  {
    name: '苋菜红',
    alias: ['Amaranth', '食用红色2号'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '赋予食品紫红色泽，常用于饮料、糖果。',
    action: '偶氮类合成色素，紫红色。曾被广泛使用，因安全争议多国限制。',
    standards: [
      { code: 'GB 1886.218-2016', name: '食品安全国家标准 食品添加剂 苋菜红', type: 'GB', regulation: '规定苋菜红含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '饮料、糖果、糕点等限量，如碳酸饮料0.05g/kg。' }
    ],
    safetyLevel: 'caution',
    riskDesc: '动物实验高剂量有致癌争议，美国曾禁用后有限解禁。建议儿童、孕妇减少。',
    description: '苋菜红是合成紫红色素，有致癌争议历史，多国限制，建议适量。',
    usageLimit: '依食品类别（如碳酸饮料0.05g/kg，详见 GB 2760）'
  },
  {
    name: '柠檬黄',
    alias: ['酒石黄', 'Tartrazine'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '赋予食品明亮黄色泽，常用于饮料、糖果、糕点。',
    action: '吡唑酮类合成色素，黄色鲜艳稳定。是使用量最大的合成黄色素。',
    standards: [
      { code: 'GB 1886.50-2015', name: '食品安全国家标准 食品添加剂 柠檬黄', type: 'GB', regulation: '规定柠檬黄含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '饮料、糖果、糕点等限量，如碳酸饮料0.1g/kg。' }
    ],
    safetyLevel: 'caution',
    riskDesc: '南安普顿研究提示与儿童多动症相关（欧盟需警示）。少数水杨酸敏感者、阿司匹林过敏者反应。建议儿童减少。',
    description: '柠檬黄是常用合成黄色素，有儿童多动和水杨酸过敏争议，建议儿童适量。',
    usageLimit: '依食品类别（如碳酸饮料0.1g/kg，详见 GB 2760）'
  },
  {
    name: '亮蓝',
    alias: ['Brilliant Blue FCF'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '赋予食品蓝色泽，常用于饮料、糖果、冰淇淋。',
    action: '三苯甲烷类合成色素，蓝色鲜艳。常与柠檬黄复配产生绿色。',
    standards: [
      { code: 'GB 1886.89-2015', name: '食品安全国家标准 食品添加剂 亮蓝', type: 'GB', regulation: '规定亮蓝含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '饮料、糖果等限量，如碳酸饮料0.025g/kg。' }
    ],
    safetyLevel: 'caution',
    riskDesc: '安全性相对较高，但仍有儿童多动争议，建议儿童适量。',
    description: '亮蓝是合成蓝色素，儿童多动争议，建议适量。',
    usageLimit: '依食品类别（如碳酸饮料0.025g/kg，详见 GB 2760）'
  },
  {
    name: '赤藓红',
    alias: ['樱桃红', 'Erythrosine'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '赋予食品红色泽，常用于樱桃罐头、糖果。',
    action: '氧杂蒽类合成色素，红色。对热和酸稳定性好，常用于樱桃染色。',
    standards: [
      { code: 'GB 1886.49-2015', name: '食品安全国家标准 食品添加剂 赤藓红', type: 'GB', regulation: '规定赤藓红含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '饮料、糖果等限量。' }
    ],
    safetyLevel: 'caution',
    riskDesc: '含碘结构，高剂量动物实验有甲状腺影响争议。建议适量。',
    description: '赤藓红是合成红色素，有甲状腺争议，建议适量。',
    usageLimit: '依食品类别（详见 GB 2760）'
  },
  {
    name: '靛蓝',
    alias: ['Indigotine', '酸性靛蓝'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '赋予食品蓝色泽，常与其他色素复配。',
    action: '靛类合成色素，蓝色。稳定性一般，常与柠檬黄复配。',
    standards: [
      { code: 'GB 1886.53-2015', name: '食品安全国家标准 食品添加剂 靛蓝', type: 'GB', regulation: '规定靛蓝含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '饮料、糖果等限量。' }
    ],
    safetyLevel: 'caution',
    riskDesc: '安全性相对较高，建议适量。',
    description: '靛蓝是合成蓝色素，建议适量。',
    usageLimit: '依食品类别（详见 GB 2760）'
  },
  {
    name: '叶绿素铜钠盐',
    alias: ['铜叶绿酸钠'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '赋予食品绿色泽，常用于饮料、糖果、糕点。',
    action: '从蚕粪或植物提取叶绿素后用铜取代镁制成钠盐，绿色稳定。色泽鲜绿耐光耐热。',
    standards: [
      { code: 'GB 26406-2011', name: '食品安全国家标准 食品添加剂 叶绿素铜钠盐', type: 'GB', regulation: '规定叶绿素铜钠盐含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '饮料、糖果、糕点等限量。' }
    ],
    safetyLevel: 'caution',
    riskDesc: 'JECFA ADI 0~15mg/kg。游离铜需关注，长期过量可能影响肝脏，建议适量。',
    description: '叶绿素铜钠盐是半合成绿色素，色泽稳定，含铜需适量。',
    usageLimit: '依食品类别（详见 GB 2760）'
  },
  {
    name: '焦糖色',
    alias: ['焦糖', 'Caramel'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '赋予食品棕褐色泽和焦香风味，常用于饮料、酱油、糖果。',
    action: '糖类加热脱水聚合产生，按工艺分为四类（普通法、亚硫酸铵法、氨法、加氨亚硫酸法）。色泽和风味兼具。',
    standards: [
      { code: 'GB 1886.64-2015', name: '食品安全国家标准 食品添加剂 焦糖色', type: 'GB', regulation: '规定焦糖色分类及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '饮料、酱油、食醋等按生产需要适量使用。' }
    ],
    safetyLevel: 'caution',
    riskDesc: '氨法/亚硫酸铵法工艺可能产生4-甲基咪唑（4-MEI），IARC 列为2B类可能致癌物。加州需警示标注。建议选择普通法产品。',
    description: '焦糖色是常用棕色素，氨法工艺可能产生4-MEI争议成分，建议适量。',
    usageLimit: '按生产需要适量使用（关注工艺类别）'
  },
  {
    name: '胭脂红',
    alias: ['Ponceau 4R', '食用红色1号'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '赋予食品红色泽，常用于饮料、糖果、肉制品。',
    action: '偶氮类合成色素，红色鲜艳。是常用合成红色素之一。',
    standards: [
      { code: 'GB 1886.85-2015', name: '食品安全国家标准 食品添加剂 胭脂红', type: 'GB', regulation: '规定胭脂红含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '饮料、糖果、糕点等限量，如碳酸饮料0.05g/kg。' }
    ],
    safetyLevel: 'caution',
    riskDesc: '南安普顿研究提示与儿童多动症相关（欧盟需警示）。建议儿童减少。',
    description: '胭脂红是合成红色素，有儿童多动争议，建议儿童适量。',
    usageLimit: '依食品类别（如碳酸饮料0.05g/kg，详见 GB 2760）'
  },
  {
    name: '栀子黄',
    alias: ['藏花素'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '赋予食品黄色泽，常用于饮料、糖果、糕点。',
    action: '从栀子果实提取的类胡萝卜素（藏花素），天然黄色。色泽稳定，兼有利胆作用。',
    standards: [
      { code: 'GB 1886.66-2015', name: '食品安全国家标准 食品添加剂 栀子黄', type: 'GB', regulation: '规定栀子黄含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '饮料、糖果、糕点等按生产需要适量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，安全性高。',
    description: '栀子黄是天然黄色素，安全性高，色泽稳定。',
    usageLimit: '按生产需要适量使用'
  },
  {
    name: '栀子蓝',
    alias: ['栀子蓝色素'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '赋予食品蓝色泽，常用于饮料、糖果。',
    action: '栀子提取物经酶促反应制得的天然蓝色素，色泽稳定，与栀子黄、红复配可调多种色调。',
    standards: [
      { code: 'GB 1886.86-2015', name: '食品安全国家标准 食品添加剂 栀子蓝', type: 'GB', regulation: '规定栀子蓝含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '饮料、糖果等按生产需要适量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，安全性较高。',
    description: '栀子蓝是天然蓝色素，安全性高，可调多种色调。',
    usageLimit: '按生产需要适量使用'
  },
  {
    name: '红曲红',
    alias: ['红曲色素', 'Monascus'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '赋予食品红色泽，常用于肉制品、腐乳、调味料。',
    action: '由红曲霉发酵产生的色素，天然红色。兼有降胆固醇等保健作用，是传统食品着色剂。',
    standards: [
      { code: 'GB 1886.181-2016', name: '食品安全国家标准 食品添加剂 红曲红', type: 'GB', regulation: '规定红曲红含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '肉制品、调味料等按生产需要适量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然发酵产物，安全性高，兼有保健价值。需注意桔青霉素污染控制。',
    description: '红曲红是传统天然红色素，安全性高兼保健，是肉制品常用着色剂。',
    usageLimit: '按生产需要适量使用'
  },
  {
    name: '紫胶红',
    alias: ['虫胶红', 'Lac Dye'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '赋予食品红色泽，常用于饮料、糖果。',
    action: '从紫胶虫分泌物提取的蒽醌类天然色素，红色。对酸和热稳定性好。',
    standards: [
      { code: 'GB 1886.18-2015', name: '食品安全国家标准 食品添加剂 紫胶红', type: 'GB', regulation: '规定紫胶红含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '饮料、糖果等按生产需要适量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，JECFA ADI 0~5mg/kg，安全性较高。',
    description: '紫胶红是天然红色素，安全性高，色泽稳定。',
    usageLimit: '按生产需要适量使用'
  },
  {
    name: '甜菜红',
    alias: ['甜菜根红', 'Betanin'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '赋予食品红色泽，常用于酸奶、冰淇淋、糖果。',
    action: '从红甜根提取的甜菜花青素类天然色素，红色。对热和光稳定性一般，常用于低温食品。',
    standards: [
      { code: 'GB 1886.100-2015', name: '食品安全国家标准 食品添加剂 甜菜红', type: 'GB', regulation: '规定甜菜红含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '按生产需要适量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，JECFA 不限定 ADI，安全性高。',
    description: '甜菜红是天然红色素，安全性高，常用于低温食品。',
    usageLimit: '按生产需要适量使用'
  },
  {
    name: '姜黄',
    alias: ['姜黄素', 'Curcumin'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '赋予食品黄色泽，兼具风味和保健作用。',
    action: '从姜黄根茎提取的姜黄素类天然色素，黄色。兼有抗炎、抗氧化等保健作用，是传统药食两用着色剂。',
    standards: [
      { code: 'GB 1886.60-2015', name: '食品安全国家标准 食品添加剂 姜黄', type: 'GB', regulation: '规定姜黄含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '按生产需要适量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，JECFA ADI 0~3mg/kg，安全性高，兼有保健价值。',
    description: '姜黄是天然黄色素兼保健成分，安全性高，是药食两用着色剂。',
    usageLimit: '按生产需要适量使用'
  },
  // ============ 酸度调节剂（新增） ============
  {
    name: '苹果酸',
    alias: ['L-苹果酸', '羟基丁二酸'],
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '调节食品酸度，酸味持久柔和，常用于饮料、果冻。',
    action: '天然有机酸，存在于苹果、葡萄中。酸味比柠檬酸更柔和持久，在口中停留时间长，能增强水果风味。',
    standards: [
      { code: 'GB 1886.174-2016', name: '食品安全国家标准 食品添加剂 L-苹果酸', type: 'GB', regulation: '规定 L-苹果酸含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可在各类食品中按生产需要适量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 不限定 ADI，是三羧酸循环中间产物，安全性高。高浓度可能刺激黏膜。',
    description: '苹果酸是天然有机酸，酸味柔和持久，安全性高，常用于饮料。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '酒石酸',
    alias: ['L(+)-酒石酸', '2,3-二羟基丁二酸'],
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '调节食品酸度，酸味锐利，常用于葡萄风味饮料和葡萄酒。',
    action: '天然有机酸，存在于葡萄和罗望子中。酸味比柠檬酸更强锐利，是葡萄风味主要酸味来源。',
    standards: [
      { code: 'GB 1886.157-2016', name: '食品安全国家标准 食品添加剂 L(+)-酒石酸', type: 'GB', regulation: '规定 L(+)-酒石酸含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可在各类食品中按生产需要适量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 不限定 ADI，安全性较高。大剂量可能致腹泻。',
    description: '酒石酸是葡萄风味酸味剂，酸味锐利，安全性高。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '乳酸',
    alias: ['2-羟基丙酸'],
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '调节酸度，兼具防腐和风味，常用于乳制品、饮料、糖果。',
    action: '发酵产生的天然有机酸，存在于酸奶、泡菜中。酸味温和，兼具防腐作用，是天然发酵食品主要酸味来源。',
    standards: [
      { code: 'GB 2023-2018', name: '食品安全国家标准 食品添加剂 乳酸', type: 'GB', regulation: '规定乳酸含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可在各类食品中按生产需要适量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 不限定 ADI，是体内糖酵解产物，安全性高。',
    description: '乳酸是天然发酵酸味剂，酸味温和兼防腐，安全性高。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '磷酸',
    alias: ['正磷酸'],
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '调节酸度，赋予可乐风味，常用于碳酸饮料、奶酪。',
    action: '无机酸，是可乐型饮料特征酸味来源。兼具螯合、缓冲和乳化盐作用，是奶酪融化剂主要成分。',
    standards: [
      { code: 'GB 1886.15-2015', name: '食品安全国家标准 食品添加剂 磷酸', type: 'GB', regulation: '规定磷酸含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可乐型饮料、奶酪等限量使用。' }
    ],
    safetyLevel: 'caution',
    riskDesc: 'JECFA ADI 0~70mg/kg（以磷计）。过量磷摄入影响钙磷平衡和骨骼健康，肾功能不全者需控制。',
    description: '磷酸是可乐特征酸味剂，过量摄入影响钙磷代谢，建议适量。',
    usageLimit: '依食品类别（详见 GB 2760）'
  },
  {
    name: '冰醋酸',
    alias: ['醋酸', '冰乙酸'],
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '调节酸度，赋予醋味，常用于醋、调味料、酱料。',
    action: '乙酸，是食醋主要成分。酸味刺激锐利，兼具防腐作用，是传统调味和防腐酸味剂。',
    standards: [
      { code: 'GB 1886.85-2016', name: '食品安全国家标准 食品添加剂 冰乙酸（低压羰基化法）', type: 'GB', regulation: '规定冰醋酸含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可在各类食品中按生产需要适量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '食醋主成分，安全性高。高浓度有腐蚀性，食品级稀释使用无风险。',
    description: '冰醋酸是食醋主要成分，酸味兼防腐，安全性高。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '富马酸',
    alias: ['反丁烯二酸', '延胡索酸'],
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '调节酸度，酸味持久，兼具防腐，常用于饮料、糕点。',
    action: '天然有机酸，是三羧酸循环中间产物。酸味持久，水溶性低，常用于固体饮料和果冻。',
    standards: [
      { code: 'GB 1886.215-2016', name: '食品安全国家标准 食品添加剂 富马酸', type: 'GB', regulation: '规定富马酸含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '饮料、糕点等限量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 不限定 ADI，是三羧酸循环中间产物，安全性高。',
    description: '富马酸是天然有机酸，酸味持久兼防腐，安全性高。',
    usageLimit: '依食品类别（详见 GB 2760）'
  },
  {
    name: '己二酸',
    alias: ['肥酸', '1,4-丁二酸'],
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '调节酸度，改善凝胶质构，常用于果冻、饮料。',
    action: '有机二元酸，酸味柔和，能改善果胶凝胶性能，是果冻常用酸度调节剂。',
    standards: [
      { code: 'GB 1886.55-2015', name: '食品安全国家标准 食品添加剂 己二酸', type: 'GB', regulation: '规定己二酸含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '果冻、饮料等限量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA ADI 0~5mg/kg，安全性较高。',
    description: '己二酸是果冻常用酸度调节剂，兼改善凝胶，安全性高。',
    usageLimit: '依食品类别（详见 GB 2760）'
  },
  {
    name: '碳酸钠',
    alias: ['纯碱', '苏打'],
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '调节酸度、中和、改善质构，常用于面制品。',
    action: '无机弱碱盐，在面制品中中和酸度、增强面筋、改善色泽（碱水面）。兼具缓冲和膨松作用。',
    standards: [
      { code: 'GB 1886.1-2015', name: '食品安全国家标准 食品添加剂 碳酸钠', type: 'GB', regulation: '规定碳酸钠含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可在各类食品中按生产需要适量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '安全性高，过量影响风味和消化。',
    description: '碳酸钠是面制品常用碱性调节剂，改善色泽和质构，安全性高。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '碳酸氢钠',
    alias: ['小苏打', '苏打粉'],
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '调节酸度、膨松产气，常用于烘焙、饮料。',
    action: '无机弱碱盐，加热或遇酸释放二氧化碳产生膨松作用，兼具酸度缓冲。是烘焙和饮料常用膨松缓冲剂。',
    standards: [
      { code: 'GB 1886.2-2015', name: '食品安全国家标准 食品添加剂 碳酸氢钠', type: 'GB', regulation: '规定碳酸氢钠含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可在各类食品中按生产需要适量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '安全性高，是胃药成分。钠摄入需注意。',
    description: '碳酸氢钠是烘焙常用膨松缓冲剂，安全性高，兼为胃药成分。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '氢氧化钠',
    alias: ['烧碱', '火碱'],
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '调节酸度、中和，常用于加工助剂。',
    action: '强碱，主要用于食品加工酸度中和和设备清洗，最终成品中残留极低。也用于碱处理皮蛋、橄榄等。',
    standards: [
      { code: 'GB 1886.20-2016', name: '食品安全国家标准 食品添加剂 氢氧化钠', type: 'GB', regulation: '规定氢氧化钠含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '作为加工助剂使用，成品残留应符合要求。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '加工助剂，成品残留极低，安全性高。强碱本身具腐蚀性。',
    description: '氢氧化钠是食品加工助剂，成品残留极低，安全性高。',
    usageLimit: '作为加工助剂使用'
  },
  // ============ 增稠剂（新增） ============
  {
    name: '黄原胶',
    alias: ['黄胶', '汉生胶', 'Xanthan Gum'],
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '增稠、悬浮、稳定，改善质构，常用于饮料、酱料。',
    action: '由黄单胞菌发酵产生的高分子多糖，耐酸耐盐耐高温，悬浮性好。低浓度即可显著增稠，是性能最全面的增稠剂之一。',
    standards: [
      { code: 'GB 1886.41-2015', name: '食品安全国家标准 食品添加剂 黄原胶', type: 'GB', regulation: '规定黄原胶含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可按生产需要适量使用于各类食品（特殊类别除外）。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 不限定 ADI，不被消化吸收，安全性高。',
    description: '黄原胶是性能全面的生物增稠剂，耐酸耐盐，安全性高，广泛使用。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '瓜尔胶',
    alias: ['瓜尔豆胶', 'Guar Gum'],
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '增稠、保水，常用于冰淇淋、酱料、烘焙。',
    action: '从瓜尔豆胚乳提取的半乳甘露聚糖，亲水性极强，低浓度即可高增稠，性价比高。',
    standards: [
      { code: 'GB 1886.260-2016', name: '食品安全国家标准 食品添加剂 瓜尔胶', type: 'GB', regulation: '规定瓜尔胶含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可按生产需要适量使用于各类食品（特殊类别除外）。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 不限定 ADI，不被消化吸收，安全性高。兼具膳食纤维作用。',
    description: '瓜尔胶是高性价比植物增稠剂，亲水性强，安全性高兼膳食纤维。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '果胶',
    alias: ['Pectin'],
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '增稠、凝胶，常用于果酱、糖果、酸奶。',
    action: '从柑橘皮或苹果渣提取的天然多糖，在糖和酸条件下形成凝胶。是果酱和果冻的核心凝胶剂。',
    standards: [
      { code: 'GB 1886.114-2017', name: '食品安全国家标准 食品添加剂 果胶', type: 'GB', regulation: '规定果胶含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可按生产需要适量使用于各类食品（特殊类别除外）。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 不限定 ADI，天然膳食纤维，安全性高，兼降胆固醇。',
    description: '果胶是天然凝胶剂，安全性高兼膳食纤维保健，是果酱核心原料。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '卡拉胶',
    alias: ['角叉菜胶', 'Carrageenan'],
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '增稠、凝胶、稳定，常用于肉制品、甜品、乳制品。',
    action: '从红藻提取的硫酸半乳聚糖，形成不同凝胶类型。具有触变性，是肉制品保水和甜品凝胶常用剂。',
    standards: [
      { code: 'GB 1886.230-2016', name: '食品安全国家标准 食品添加剂 卡拉胶', type: 'GB', regulation: '规定卡拉胶含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可按生产需要适量使用于各类食品（特殊类别除外）。' }
    ],
    safetyLevel: 'caution',
    riskDesc: 'JECFA ADI 0~75mg/kg。降解型卡拉胶有肠道炎症争议，食品级聚合物相对安全，但敏感人群建议适量。',
    description: '卡拉胶是红藻提取凝胶剂，有降解产物肠道炎症争议，建议适量。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '明胶',
    alias: ['Gelatin', '食用明胶'],
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '增稠、凝胶，常用于软糖、果冻、肉冻、胶囊。',
    action: '由动物皮骨胶原水解制得的蛋白质，热可逆凝胶。形成弹性凝胶，是软糖和胶囊主要原料。',
    standards: [
      { code: 'GB 6783-2013', name: '食品安全国家标准 食品添加剂 明胶', type: 'GB', regulation: '规定明胶含量、理化指标及来源要求。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可按生产需要适量使用于各类食品（特殊类别除外）。' }
    ],
    safetyLevel: 'caution',
    riskDesc: '安全性高，但动物来源需关注宗教（清真/犹太）和疯牛病理论风险（已严格管控）。',
    description: '明胶是动物蛋白凝胶剂，安全性高，需注意动物来源和宗教需求。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '琼脂',
    alias: ['Agar', '洋菜'],
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '增稠、凝胶，常用于果冻、布丁、肉制品。',
    action: '从红藻提取的多糖，形成坚固热可逆凝胶，凝固点高。是传统植物凝胶剂，适合素食者。',
    standards: [
      { code: 'GB 1886.249-2016', name: '食品安全国家标准 食品添加剂 琼脂', type: 'GB', regulation: '规定琼脂含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可按生产需要适量使用于各类食品（特殊类别除外）。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 不限定 ADI，不被消化吸收，安全性高。植物来源适合素食。',
    description: '琼脂是植物凝胶剂，凝胶坚固，安全性高，适合素食者。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '海藻酸钠',
    alias: ['藻酸钠', 'Alginate'],
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '增稠、凝胶、稳定，常用于冰淇淋、面条、模拟食品。',
    action: '从褐藻提取的多糖，遇钙离子形成热不可逆凝胶。兼具增稠、保水和成膜作用。',
    standards: [
      { code: 'GB 1886.243-2016', name: '食品安全国家标准 食品添加剂 海藻酸钠', type: 'GB', regulation: '规定海藻酸钠含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可按生产需要适量使用于各类食品（特殊类别除外）。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 不限定 ADI，不被消化吸收，安全性高。兼排重金属作用。',
    description: '海藻酸钠是褐藻提取增稠凝胶剂，安全性高，遇钙成热不可逆凝胶。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '阿拉伯胶',
    alias: ['金合欢胶', 'Arabic Gum'],
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '增稠、乳化、稳定，常用于饮料、糖果、香精。',
    action: '从金合欢树分泌物提取的天然多糖，水溶性极高，是乳化香精和喷雾干燥香精的载体。',
    standards: [
      { code: 'GB 1886.55-2015', name: '食品安全国家标准 食品添加剂 阿拉伯胶', type: 'GB', regulation: '规定阿拉伯胶含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可按生产需要适量使用于各类食品（特殊类别除外）。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 不限定 ADI，天然来源，安全性高。兼具膳食纤维作用。',
    description: '阿拉伯胶是天然水溶性增稠乳化剂，安全性高，常作香精载体。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '结冷胶',
    alias: ['Gellan Gum'],
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '增稠、凝胶，常用于果冻、甜品、培养基。',
    action: '由少动鞘氨醇单胞菌发酵产生的高分子多糖，少量即可形成透明坚固凝胶，耐酸耐热。',
    standards: [
      { code: 'GB 25532-2010', name: '食品安全国家标准 食品添加剂 结冷胶', type: 'GB', regulation: '规定结冷胶含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可按生产需要适量使用于各类食品（特殊类别除外）。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 不限定 ADI，不被消化吸收，安全性高。',
    description: '结冷胶是高效生物凝胶剂，凝胶透明坚固，安全性高。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '变性淀粉',
    alias: ['改性淀粉', 'Modified Starch'],
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '增稠、稳定、改善质构，常用于酱料、速冻食品。',
    action: '淀粉经物理、酶或化学改性得到的衍生产品，耐酸耐热耐剪切，保水性好于原淀粉。',
    standards: [
      { code: 'GB 29933-2013', name: '食品安全国家标准 食品添加剂 变性淀粉', type: 'GB', regulation: '规定变性淀粉分类及指标。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可按生产需要适量使用于各类食品（特殊类别除外）。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 对多数变性淀粉不限定 ADI，安全性高，代谢类似淀粉。',
    description: '变性淀粉是改性增稠剂，性能优于原淀粉，安全性高。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '聚丙烯酸钠',
    alias: ['PAAS'],
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '增稠、悬浮、絮凝，常用于面制品、酱料。',
    action: '合成的高分子阴离子聚合物，增稠能力强，兼具保水和絮凝作用，常用于面制品增强筋道。',
    standards: [
      { code: 'GB 29951-2013', name: '食品安全国家标准 食品添加剂 聚丙烯酸钠', type: 'GB', regulation: '规定聚丙烯酸钠含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '面制品等限量使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 不限定 ADI，不被吸收，安全性高。',
    description: '聚丙烯酸钠是合成高分子增稠剂，增稠保水，安全性高。',
    usageLimit: '依食品类别（详见 GB 2760）'
  },
  // ============ 乳化剂（新增） ============
  {
    name: '单双甘油脂肪酸酯',
    alias: ['单甘酯', '蒸馏单甘酯', 'DMG'],
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '乳化、防老化、改善质构，常用于烘焙、冰淇淋、人造奶油。',
    action: '甘油与脂肪酸形成的酯类混合物，兼具亲水亲油基团。降低界面张力，使面包延缓老化、冰淇淋抗冻融，是食品工业最常用乳化剂。',
    standards: [
      { code: 'GB 1886.95-2015', name: '食品安全国家标准 食品添加剂 单，双甘油脂肪酸酯', type: 'GB', regulation: '规定单双甘油酯含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可按生产需要适量使用于各类食品（特殊类别除外）。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 不限定 ADI，体内代谢为甘油和脂肪酸，安全性高。',
    description: '单双甘油酯是食品工业最常用乳化剂，延缓面包老化，安全性高。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '蔗糖脂肪酸酯',
    alias: ['蔗糖酯', 'SE'],
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '乳化、分散、稳定，常用于饮料、糖果、肉制品。',
    action: '蔗糖与脂肪酸形成的酯，HLB值范围宽（1~16），适用油包水到水包油多种体系，安全性高。',
    standards: [
      { code: 'GB 8272-2009', name: '食品添加剂 蔗糖脂肪酸酯', type: 'GB', regulation: '规定蔗糖酯含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '可按生产需要适量使用于各类食品（特殊类别除外）。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 不限定 ADI，体内代谢为蔗糖和脂肪酸，安全性高。',
    description: '蔗糖脂肪酸酯是适用范围宽的乳化剂，安全性高，体内代谢为蔗糖和脂肪酸。',
    usageLimit: '可按生产需要适量使用'
  },
  {
    name: '山梨醇酐单硬脂酸酯',
    alias: ['Span60', '司盘60'],
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '乳化、稳定，常用于人造奶油、糕点、植脂末。',
    action: '山梨醇与硬脂酸酯化产物，亲油性强（HLB~4.7），常作油包水乳化剂，与Tween复配增效。',
    standards: [
      { code: 'GB 19301-2010', name: '食品安全国家标准 食品添加剂 山梨醇酐单硬脂酸酯', type: 'GB', regulation: '规定Span60含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '人造奶油、糕点、植脂末等限量。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 不限定 ADI，体内代谢为山梨醇和脂肪酸，安全性高。',
    description: 'Span60是亲油性乳化剂，常与Tween复配，安全性高。',
    usageLimit: '依食品类别（详见 GB 2760）'
  },
  {
    name: '聚氧乙烯山梨醇酐单油酸酯',
    alias: ['Tween80', '吐温80'],
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '乳化、增溶、稳定，常用于饮料、冰淇淋、糕点。',
    action: 'Span80与环氧乙烷加成产物，亲水性强（HLB~15），常作水包油乳化剂和增溶剂，与Span复配。',
    standards: [
      { code: 'GB 25553-2010', name: '食品安全国家标准 食品添加剂 聚氧乙烯山梨醇酐单油酸酯', type: 'GB', regulation: '规定Tween80含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '饮料、冰淇淋、糕点等限量。' }
    ],
    safetyLevel: 'caution',
    riskDesc: 'JECFA ADI 0~10mg/kg。注射剂曾有过敏争议，食品级适量安全。敏感人群留意。',
    description: 'Tween80是亲水性乳化增溶剂，注射级有过敏争议，食品级适量安全。',
    usageLimit: '依食品类别（详见 GB 2760）'
  },
  {
    name: '聚甘油脂肪酸酯',
    alias: ['PGE', '聚甘油酯'],
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '乳化、稳定、抗结晶，常用于冰淇淋、巧克力、糕点。',
    action: '聚甘油与脂肪酸酯化产物，HLB可调范围宽，耐酸耐盐，是性能优于单甘酯的乳化剂。',
    standards: [
      { code: 'GB 26402-2011', name: '食品安全国家标准 食品添加剂 聚甘油脂肪酸酯', type: 'GB', regulation: '规定聚甘油酯含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '冰淇淋、巧克力、糕点等限量。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 不限定 ADI，体内代谢为聚甘油和脂肪酸，安全性高。',
    description: '聚甘油酯是性能优良的乳化剂，耐酸耐盐，安全性高。',
    usageLimit: '依食品类别（详见 GB 2760）'
  },
  {
    name: '硬脂酰乳酸钠',
    alias: ['SSL', '硬脂酰乳酸钠盐'],
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '乳化、络合淀粉、增强面筋，常用于面包、面条。',
    action: '硬脂酸与乳酸中和产物，能与淀粉和面筋络合，延缓面包老化、增强面筋网络，是面包改良剂。',
    standards: [
      { code: 'GB 1886.92-2016', name: '食品安全国家标准 食品添加剂 硬脂酰乳酸钠', type: 'GB', regulation: '规定SSL含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '面包、糕点、面条等限量。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 不限定 ADI，体内代谢为硬脂酸和乳酸，安全性高。',
    description: 'SSL是面包改良乳化剂，延缓老化增强面筋，安全性高。',
    usageLimit: '依食品类别（详见 GB 2760）'
  },
  {
    name: '硬脂酰乳酸钙',
    alias: ['CSL'],
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '乳化、络合淀粉，常用于面包、馒头、面条。',
    action: '硬脂酸与乳酸中和产物（钙盐），作用类似SSL，延缓淀粉老化，改善面制品质构。',
    standards: [
      { code: 'GB 1886.93-2016', name: '食品安全国家标准 食品添加剂 硬脂酰乳酸钙', type: 'GB', regulation: '规定CSL含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '面包、糕点、面条等限量。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 不限定 ADI，安全性高。',
    description: 'CSL是面制品改良乳化剂，延缓老化，安全性高。',
    usageLimit: '依食品类别（详见 GB 2760）'
  },
  {
    name: '三聚甘油单硬脂酸酯',
    alias: ['P3G', '三聚甘油酯'],
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '乳化、消泡，常用于冰淇淋、糕点、豆制品。',
    action: '三聚甘油与硬脂酸酯化产物，兼具乳化和消泡作用，常用于豆腐消泡和冰淇淋乳化。',
    standards: [
      { code: 'GB 13510-2009', name: '食品添加剂 三聚甘油单硬脂酸酯', type: 'GB', regulation: '规定三聚甘油酯含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '冰淇淋、糕点等限量。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 不限定 ADI，安全性高。',
    description: '三聚甘油酯兼具乳化消泡，常用于豆腐和冰淇淋，安全性高。',
    usageLimit: '依食品类别（详见 GB 2760）'
  },
  // ============ 护色剂（新增） ============
  {
    name: '硝酸钠',
    alias: ['硝酸根钠'],
    category: 'colorFixative',
    categoryLabel: '护色剂',
    function: '护色、防腐，常用于腌腊肉制品。',
    action: '在肉中被还原为亚硝酸盐发挥护色和抑菌作用，作用类似亚硝酸钠但起效慢。',
    standards: [
      { code: 'GB 1886.5-2015', name: '食品安全国家标准 食品添加剂 硝酸钠', type: 'GB', regulation: '规定硝酸钠含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '腌腊肉制品≤0.5g/kg，残留以亚硝酸钠计≤30mg/kg。' }
    ],
    safetyLevel: 'danger',
    riskDesc: '在体内可转化为亚硝酸盐，进而与胺类生成亚硝胺（强致癌物）。婴幼儿、孕妇严格避免。',
    description: '硝酸钠经还原成亚硝酸盐发挥护色作用，有亚硝胺致癌风险，严格限量使用。',
    usageLimit: '使用量≤0.5g/kg，残留≤30mg/kg（以亚硝酸钠计）'
  },
  {
    name: '硝酸钾',
    alias: ['硝石', '钾硝'],
    category: 'colorFixative',
    categoryLabel: '护色剂',
    function: '护色、防腐，常用于腌腊肉制品和奶酪。',
    action: '作用类似硝酸钠，在肉中被还原为亚硝酸盐发挥护色抑菌作用，也用于奶酪表面防霉。',
    standards: [
      { code: 'GB 1886.4-2020', name: '食品安全国家标准 食品添加剂 硝酸钾', type: 'GB', regulation: '规定硝酸钾含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '腌腊肉制品≤0.5g/kg，残留以亚硝酸钠计≤30mg/kg。' }
    ],
    safetyLevel: 'danger',
    riskDesc: '可转化为亚硝酸盐并生成亚硝胺（强致癌物）。婴幼儿、孕妇严格避免。',
    description: '硝酸钾经还原成亚硝酸盐护色，有亚硝胺致癌风险，严格限量使用。',
    usageLimit: '使用量≤0.5g/kg，残留≤30mg/kg（以亚硝酸钠计）'
  },
  // ============ 营养强化剂（新增） ============
  {
    name: '维生素A',
    alias: ['视黄醇', '醋酸维生素A'],
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '强化维生素A，维持视觉和免疫功能。',
    action: '脂溶性维生素，是视紫红质合成必需物质，维持暗视觉、上皮完整和免疫功能。多以醋酸酯或棕榈酸酯形式强化。',
    standards: [
      { code: 'GB 1903.26-2016', name: '食品安全国家标准 食品营养强化剂 维生素A', type: 'GB', regulation: '规定维生素A含量及杂质限量。' },
      { code: 'GB 14880-2012', name: '食品安全国家标准 食品营养强化剂使用标准', type: 'GB', regulation: '调制乳粉、植物油、饮料等限量强化。' }
    ],
    safetyLevel: 'caution',
    riskDesc: '脂溶性维生素可在体内蓄积，长期过量（>UL）可致急慢性中毒，出现头痛、肝损伤、骨痛。',
    description: '维生素A是必需营养素，强化需适量，过量可中毒，按GB 14880限量使用。',
    usageLimit: '依食品类别（详见 GB 14880）'
  },
  {
    name: '维生素B1',
    alias: ['硫胺素', '盐酸硫胺素'],
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '强化维生素B1，维持神经和能量代谢。',
    action: '水溶性维生素，是糖代谢辅酶，维持神经传导和心肌功能，缺乏可致脚气病。',
    standards: [
      { code: 'GB 1903.13-2016', name: '食品安全国家标准 食品营养强化剂 维生素B1', type: 'GB', regulation: '规定维生素B1含量及杂质限量。' },
      { code: 'GB 14880-2012', name: '食品安全国家标准 食品营养强化剂使用标准', type: 'GB', regulation: '谷物制品、调制乳粉、饮料等限量强化。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '水溶性维生素，多余随尿排出，安全性高，罕见过量风险。',
    description: '维生素B1是水溶性必需营养素，安全性高，缺乏可致脚气病。',
    usageLimit: '依食品类别（详见 GB 14880）'
  },
  {
    name: '维生素B2',
    alias: ['核黄素'],
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '强化维生素B2，兼作黄色着色剂，维持能量代谢。',
    action: '水溶性维生素，是黄素蛋白辅基，参与氧化还原反应。缺乏可致口角炎、舌炎。兼有黄色着色作用。',
    standards: [
      { code: 'GB 1903.12-2016', name: '食品安全国家标准 食品营养强化剂 维生素B2', type: 'GB', regulation: '规定维生素B2含量及杂质限量。' },
      { code: 'GB 14880-2012', name: '食品安全国家标准 食品营养强化剂使用标准', type: 'GB', regulation: '谷物制品、调制乳粉等限量强化。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '水溶性维生素，安全性高，高剂量可使尿液变黄但无毒性。',
    description: '维生素B2是水溶性必需营养素，安全性高，缺乏可致口角炎。',
    usageLimit: '依食品类别（详见 GB 14880）'
  },
  {
    name: '维生素C',
    alias: ['抗坏血酸', 'L-抗坏血酸'],
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '强化维生素C，兼抗氧化，维持免疫和胶原合成。',
    action: '水溶性维生素，是胶原和神经递质合成辅因子，强抗氧化剂。缺乏可致坏血病，增强免疫。',
    standards: [
      { code: 'GB 1903.4-2015', name: '食品安全国家标准 食品营养强化剂 维生素C', type: 'GB', regulation: '规定维生素C含量及杂质限量。' },
      { code: 'GB 14880-2012', name: '食品安全国家标准 食品营养强化剂使用标准', type: 'GB', regulation: '饮料、调制乳粉、果汁等限量强化。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 不限定 ADI，水溶性安全性高，超大剂量长期可能增加肾结石风险。',
    description: '维生素C是必需营养素兼抗氧化，安全性高，缺乏可致坏血病。',
    usageLimit: '依食品类别（详见 GB 14880）'
  },
  {
    name: '维生素D',
    alias: ['胆钙化醇', '维生素D3'],
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '强化维生素D，促进钙磷吸收，维持骨骼健康。',
    action: '脂溶性维生素，促进肠道钙磷吸收和骨矿化。缺乏可致佝偻病、骨软化。多以D2或D3形式强化。',
    standards: [
      { code: 'GB 1903.8-2015', name: '食品安全国家标准 食品营养强化剂 维生素D', type: 'GB', regulation: '规定维生素D含量及杂质限量。' },
      { code: 'GB 14880-2012', name: '食品安全国家标准 食品营养强化剂使用标准', type: 'GB', regulation: '调制乳粉、植物油、饮料等限量强化。' }
    ],
    safetyLevel: 'caution',
    riskDesc: '脂溶性维生素可蓄积，长期过量可致高钙血症、肾结石、软组织钙化。',
    description: '维生素D是必需营养素，促进钙吸收，强化需适量，过量可致高钙血症。',
    usageLimit: '依食品类别（详见 GB 14880）'
  },
  {
    name: '硫酸亚铁',
    alias: ['铁强化剂', '七水硫酸亚铁'],
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '强化铁元素，预防缺铁性贫血。',
    action: '二价铁盐，是血红蛋白合成必需原料。生物利用率较高，是常用铁强化剂，但色味影响较大。',
    standards: [
      { code: 'GB 29212-2012', name: '食品安全国家标准 食品营养强化剂 硫酸亚铁', type: 'GB', regulation: '规定硫酸亚铁含量及杂质限量。' },
      { code: 'GB 14880-2012', name: '食品安全国家标准 食品营养强化剂使用标准', type: 'GB', regulation: '谷物制品、调制乳粉、酱油等限量强化。' }
    ],
    safetyLevel: 'caution',
    riskDesc: '安全范围宽，但过量铁可致氧化损伤和胃肠道刺激。儿童误服铁剂可致急性中毒。',
    description: '硫酸亚铁是常用铁强化剂，预防贫血，需控量，儿童需防误服中毒。',
    usageLimit: '依食品类别（详见 GB 14880）'
  },
  {
    name: '葡萄糖酸锌',
    alias: ['锌强化剂'],
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '强化锌元素，促进生长发育和免疫。',
    action: '锌的有机酸盐，生物利用率高、胃肠刺激小。锌是多种酶辅基，参与生长、免疫和味觉。',
    standards: [
      { code: 'GB 1903.2-2015', name: '食品安全国家标准 食品营养强化剂 葡萄糖酸锌', type: 'GB', regulation: '规定葡萄糖酸锌含量及杂质限量。' },
      { code: 'GB 14880-2012', name: '食品安全国家标准 食品营养强化剂使用标准', type: 'GB', regulation: '调制乳粉、饮料、谷物制品等限量强化。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '安全性较好，长期过量可影响铜铁吸收。',
    description: '葡萄糖酸锌是温和的锌强化剂，促进生长免疫，安全性较好。',
    usageLimit: '依食品类别（详见 GB 14880）'
  },
  {
    name: '碳酸钙',
    alias: ['钙强化剂', '轻质碳酸钙'],
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '强化钙元素，预防骨质疏松。',
    action: '无机钙盐，含钙量高（40%）、成本低，但需胃酸解离吸收。是常用钙强化剂和面团调节剂。',
    standards: [
      { code: 'GB 1898-2017', name: '食品安全国家标准 食品营养强化剂 碳酸钙', type: 'GB', regulation: '规定碳酸钙含量及杂质限量。' },
      { code: 'GB 14880-2012', name: '食品安全国家标准 食品营养强化剂使用标准', type: 'GB', regulation: '调制乳粉、饮料、谷物制品等限量强化。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 不限定 ADI，安全性高。胃酸缺乏者吸收稍差。过量可致便秘。',
    description: '碳酸钙是高含钙量强化剂，预防骨质疏松，安全性高。',
    usageLimit: '依食品类别（详见 GB 14880）'
  },
  {
    name: '乳酸钙',
    alias: ['钙强化剂（有机）'],
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '强化钙元素，吸收率高，适用广。',
    action: '钙的乳酸盐，水溶性好、胃肠刺激小，吸收优于碳酸钙，适合老人儿童。',
    standards: [
      { code: 'GB 1886.21-2016', name: '食品安全国家标准 食品添加剂 乳酸钙', type: 'GB', regulation: '规定乳酸钙含量及杂质限量。' },
      { code: 'GB 14880-2012', name: '食品安全国家标准 食品营养强化剂使用标准', type: 'GB', regulation: '调制乳粉、饮料等限量强化。' }
    ],
    safetyLevel: 'safe',
    riskDesc: '安全性高，吸收好，适合各年龄人群。',
    description: '乳酸钙是水溶性好的有机钙强化剂，吸收优，安全性高。',
    usageLimit: '依食品类别（详见 GB 14880）'
  },
  {
    name: '牛磺酸',
    alias: ['2-氨基乙磺酸', 'Taurine'],
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '强化牛磺酸，促进婴幼儿脑发育和视网膜功能。',
    action: '含硫氨基酸衍生物，虽不参与蛋白质合成，但参与胆汁酸结合、神经发育和抗氧化。婴幼儿必需。',
    standards: [
      { code: 'GB 14758-2010', name: '食品安全国家标准 食品添加剂 牛磺酸', type: 'GB', regulation: '规定牛磺酸含量及杂质限量。' },
      { code: 'GB 14880-2012', name: '食品安全国家标准 食品营养强化剂使用标准', type: 'GB', regulation: '婴幼儿配方食品、调制乳粉、饮料等限量强化。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 不限定 ADI，体内可合成，安全性高，对婴幼儿发育重要。',
    description: '牛磺酸是婴幼儿必需营养素，促进脑视网膜发育，安全性高。',
    usageLimit: '依食品类别（详见 GB 14880）'
  },
  // ============ 稳定剂（新增） ============
  {
    name: '磷酸三钙',
    alias: ['TCP', '磷酸钙'],
    category: 'stabilizer',
    categoryLabel: '稳定剂',
    function: '稳定、抗结、强化钙，常用于奶粉、固体饮料。',
    action: '磷酸钙盐，兼具抗结、缓冲和钙强化作用，是奶粉和固体饮料常用抗结剂兼钙源。',
    standards: [
      { code: 'GB 25558-2010', name: '食品安全国家标准 食品添加剂 磷酸三钙', type: 'GB', regulation: '规定磷酸三钙含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '奶粉、固体饮料等抗结使用。' }
    ],
    safetyLevel: 'safe',
    riskDesc: 'JECFA 对磷酸盐类 ADI 0~70mg/kg（以磷计），安全性高。',
    description: '磷酸三钙兼具抗结稳定和钙强化，安全性高，常用于奶粉。',
    usageLimit: '依食品类别（详见 GB 2760）'
  },
  {
    name: '六偏磷酸钠',
    alias: ['六聚偏磷酸钠', 'SHMP'],
    category: 'stabilizer',
    categoryLabel: '稳定剂',
    function: '稳定、螯合、持水，常用于肉制品、乳制品、饮料。',
    action: '多聚磷酸盐，强螯合作用，能螯合钙镁离子，改善肉制品持水性、乳制品稳定性。',
    standards: [
      { code: 'GB 1886.90-2016', name: '食品安全国家标准 食品添加剂 六偏磷酸钠', type: 'GB', regulation: '规定六偏磷酸钠含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '肉制品、乳制品、饮料等限量。' }
    ],
    safetyLevel: 'caution',
    riskDesc: 'JECFA ADI 0~70mg/kg（以磷计）。过量磷影响钙磷平衡，肾功能不全者需控制。',
    description: '六偏磷酸钠是强螯合稳定剂，改善持水，过量磷影响钙代谢，建议适量。',
    usageLimit: '依食品类别（详见 GB 2760）'
  },
  {
    name: '三聚磷酸钠',
    alias: ['STPP', '多聚磷酸钠'],
    category: 'stabilizer',
    categoryLabel: '稳定剂',
    function: '稳定、持水、螯合，常用于肉制品、水产品。',
    action: '链状多聚磷酸盐，能提高肉制品持水性、改善质构，是火腿香肠常用持水剂。',
    standards: [
      { code: 'GB 1886.90-2016', name: '食品安全国家标准 食品添加剂 三聚磷酸钠', type: 'GB', regulation: '规定三聚磷酸钠含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '肉制品、水产品等限量，一般≤5g/kg。' }
    ],
    safetyLevel: 'caution',
    riskDesc: 'JECFA ADI 0~70mg/kg（以磷计）。过量磷影响钙磷平衡，建议适量。',
    description: '三聚磷酸钠是肉制品持水稳定剂，过量磷影响钙代谢，建议适量。',
    usageLimit: '依食品类别（详见 GB 2760）'
  },
  {
    name: '焦磷酸钠',
    alias: ['TSPP', '四聚磷酸钠'],
    category: 'stabilizer',
    categoryLabel: '稳定剂',
    function: '稳定、螯合、缓冲，常用于肉制品、土豆制品。',
    action: '焦磷酸盐，螯合和缓冲作用，与其他多聚磷酸盐复配改善肉制品持水和土豆制品色泽。',
    standards: [
      { code: 'GB 25557-2010', name: '食品安全国家标准 食品添加剂 焦磷酸钠', type: 'GB', regulation: '规定焦磷酸钠含量及杂质限量。' },
      { code: 'GB 2760-2014', name: '食品安全国家标准 食品添加剂使用标准', type: 'GB', regulation: '肉制品、土豆制品等限量。' }
    ],
    safetyLevel: 'caution',
    riskDesc: 'JECFA ADI 0~70mg/kg（以磷计）。过量磷影响钙磷平衡，建议适量。',
    description: '焦磷酸钠是螯合缓冲稳定剂，过量磷影响钙代谢，建议适量。',
    usageLimit: '依食品类别（详见 GB 2760）'
  },
  // ===== 扩充配料库（第二批） =====
  {
    name: '山梨酸',
    alias: ['2,4-己二烯酸', '花楸酸'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '抑制霉菌、酵母菌和多种腐败菌生长，是山梨酸钾的酸型母体。',
    action: '一种不饱和脂肪酸，人体可正常代谢为二氧化碳和水，毒性低于苯甲酸类。在酸性环境（pH<5.5）中防腐效力最强，多用于果汁、果酱、饮料、酱油等。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全，但过量可能刺激消化道，敏感人群少量摄入为宜。',
    description: '本品是常见的防腐剂，在配料表中通常以「山梨酸」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '苯甲酸',
    alias: ['安息香酸'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '抑制细菌和霉菌生长，是苯甲酸钠的酸型母体。',
    action: '在酸性条件下防腐效果最佳，常用于碳酸饮料、果汁、酱油和果酱。在肝脏中与甘氨酸结合形成马尿酸排出体外。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '过量摄入可能加重肝脏负担，婴幼儿及肝功能不佳者应少吃含苯甲酸防腐剂的食品。',
    description: '本品是常见的防腐剂，在配料表中通常以「苯甲酸」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '脱氢乙酸',
    alias: ['脱氢醋酸'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '广谱防腐剂，抑制霉菌、酵母菌和细菌，是脱氢乙酸钠的酸型母体。',
    action: '脂溶性较强，能穿透微生物细胞膜抑制其生长，对霉菌效果突出，常用于糕点、酱菜、腐乳。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '长期大量摄入可能影响食欲和消化，建议控制含该防腐剂的加工食品摄入。',
    description: '本品是常见的防腐剂，在配料表中通常以「脱氢乙酸」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '对羟基苯甲酸丙酯',
    alias: ['尼泊金丙酯', '丙酯'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '酯类防腐剂，抑制霉菌和酵母菌生长。',
    action: '脂溶性好，对霉菌和酵母菌抑菌力强，常用于酱油、醋、饮料、果酱。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '有轻微内分泌干扰争议，敏感人群和儿童建议少吃。',
    description: '本品是常见的防腐剂，在配料表中通常以「对羟基苯甲酸丙酯」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '对羟基苯甲酸丁酯',
    alias: ['尼泊金丁酯', '丁酯'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '酯类防腐剂，抑制霉菌和酵母菌。',
    action: '脂溶性较丙酯更强，抑菌谱相似，多用于醋、酱油和清凉饮料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '有轻微内分泌干扰争议，建议控制摄入。',
    description: '本品是常见的防腐剂，在配料表中通常以「对羟基苯甲酸丁酯」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '丙酸',
    alias: ['初油酸'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '抑制霉菌和部分细菌生长，是丙酸钙、丙酸钠的酸型母体。',
    action: '短链脂肪酸，人体可正常代谢供能。对霉菌抑菌效果强，常用于面包、糕点防霉。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全，过量可能刺激胃肠道。',
    description: '本品是常见的防腐剂，在配料表中通常以「丙酸」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '乳酸钠',
    alias: ['2-羟基丙酸钠'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '抑菌保鲜并调节酸度，常用于肉制品和饮料。',
    action: '可降低水分活度、抑制细菌生长，同时改善肉制品持水性和口感。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全，钠摄入需计入每日总量。',
    description: '本品是常见的防腐剂，在配料表中通常以「乳酸钠」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: 'ε-聚赖氨酸盐酸盐',
    alias: ['聚赖氨酸'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '天然生物防腐剂，抑制革兰氏阳性菌和部分霉菌。',
    action: '由微生物发酵产生的多肽，安全性高，常用于米饭、糕点、肉制品保鲜。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的防腐剂，在配料表中通常以「ε-聚赖氨酸盐酸盐」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '双乙酸钾',
    alias: ['二乙酸钾'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '抑制霉菌和细菌生长，兼有调味作用。',
    action: '在含水量高的食品中释放乙酸，抑制腐败菌，常用于面制品、酱菜。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全，过量摄入可能影响钙吸收。',
    description: '本品是常见的防腐剂，在配料表中通常以「双乙酸钾」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '肉桂醛',
    alias: ['桂醛'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '天然植物来源防腐剂，抑制霉菌和细菌。',
    action: '从肉桂中提取的醛类化合物，具有广谱抑菌性，同时提供特殊香气，常用于果蔬保鲜和调味。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全，少数人群可能对其香气敏感。',
    description: '本品是常见的防腐剂，在配料表中通常以「肉桂醛」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '乙氧基喹',
    alias: ['乙氧喹'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '抗氧化兼防腐，主要用于水果保鲜。',
    action: '能抑制果蔬表面的氧化和微生物生长，常用于苹果、梨的采后保鲜。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '主要残留在果皮，食用前充分清洗可降低摄入。',
    description: '本品是常见的防腐剂，在配料表中通常以「乙氧基喹」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '联苯醚',
    alias: ['二苯醚'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '防霉保鲜剂，用于柑橘类水果表面处理。',
    action: '抑制柑橘类水果表面霉菌生长，延长贮运期。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '主要残留在果皮，果肉中含量极低，食用前清洗。',
    description: '本品是常见的防腐剂，在配料表中通常以「联苯醚」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '仲丁胺',
    alias: ['2-氨基丁烷'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '熏蒸型防腐剂，用于水果蔬菜贮运保鲜。',
    action: '以气体形式抑制霉菌和细菌，常用于柑橘、苹果的贮藏。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '挥发性强，处理后果品需充分通风，残留量受严格限制。',
    description: '本品是常见的防腐剂，在配料表中通常以「仲丁胺」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '二氧化氯',
    alias: ['稳定态二氧化氯'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '强氧化性消毒防腐剂，用于水处理和食品加工消毒。',
    action: '通过氧化微生物细胞蛋白实现杀菌，常用于饮用水、果蔬清洗和食品设备消毒。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '使用浓度需严格控制，过量残留可能刺激消化道。',
    description: '本品是常见的防腐剂，在配料表中通常以「二氧化氯」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '过氧化氢',
    alias: ['双氧水'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '消毒漂白剂，用于食品加工设备和包装材料消毒。',
    action: '分解后生成水和氧，无有害残留，常用于无菌包装和食品接触面消毒。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '工业级不得直接用于食品，食品级使用需控制残留。',
    description: '本品是常见的防腐剂，在配料表中通常以「过氧化氢」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '溶菌酶',
    alias: ['胞壁质酶'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '天然酶类防腐剂，水解细菌细胞壁。',
    action: '从蛋清中提取，能特异性水解革兰氏阳性菌细胞壁肽聚糖，常用于乳制品、肉制品保鲜。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然蛋白质，常规使用安全，蛋类过敏者需留意来源。',
    description: '本品是常见的防腐剂，在配料表中通常以「溶菌酶」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '壳聚糖',
    alias: ['甲壳素'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '天然多糖防腐保鲜剂，抑制微生物并形成保鲜膜。',
    action: '从虾蟹外壳提取，具有抑菌性和成膜性，常用于果蔬涂膜保鲜。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全，甲壳类过敏者需留意。',
    description: '本品是常见的防腐剂，在配料表中通常以「壳聚糖」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '噻苯咪唑',
    alias: ['噻菌灵'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '内吸性杀菌剂，用于水果采后防腐。',
    action: '可被植物组织吸收，抑制霉菌生长，常用于柑橘、香蕉采后处理。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '需控制残留量，食用前清洗果皮可降低摄入。',
    description: '本品是常见的防腐剂，在配料表中通常以「噻苯咪唑」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '山梨酸钙',
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '山梨酸的钙盐，抑制霉菌和酵母菌。',
    action: '在酸性食品中释放山梨酸起防腐作用，兼补充钙质，常用于面包、乳制品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的防腐剂，在配料表中通常以「山梨酸钙」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '焦亚硫酸钠',
    alias: ['偏重亚硫酸钠'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '释放二氧化硫，起防腐和漂白作用。',
    action: '在水中生成二氧化硫，抑制微生物并漂白护色，常用于蜜饯、干果、葡萄酒。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '二氧化硫可诱发哮喘患者不适，残留量受严格限制。',
    description: '本品是常见的防腐剂，在配料表中通常以「焦亚硫酸钠」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '焦亚硫酸钾',
    alias: ['偏重亚硫酸钾'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '释放二氧化硫，防腐漂白。',
    action: '作用与焦亚硫酸钠相同，多用于葡萄酒和果酒。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '二氧化硫可诱发哮喘，敏感人群少吃。',
    description: '本品是常见的防腐剂，在配料表中通常以「焦亚硫酸钾」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '亚硫酸钠',
    alias: ['无水亚硫酸钠'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '释放二氧化硫，防腐漂白。',
    action: '抑制微生物和酶促褐变，常用于果蔬加工和糖类漂白。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '二氧化硫残留可能引起呼吸道不适。',
    description: '本品是常见的防腐剂，在配料表中通常以「亚硫酸钠」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '亚硫酸氢钠',
    alias: ['重亚硫酸钠'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '释放二氧化硫，防腐抗氧化。',
    action: '兼有漂白和抗氧化作用，常用于蜜饯、果蔬罐头。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '二氧化硫敏感人群需注意。',
    description: '本品是常见的防腐剂，在配料表中通常以「亚硫酸氢钠」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '低亚硫酸钠',
    alias: ['保险粉'],
    category: 'preservative',
    categoryLabel: '防腐剂',
    function: '强还原性漂白防腐剂。',
    action: '还原能力强，用于蜜饯、干果的漂白和护色，但稳定性差、残留需严控。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '使用不当易造成二氧化硫超标，建议少吃相关加工食品。',
    description: '本品是常见的防腐剂，在配料表中通常以「低亚硫酸钠」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '抗坏血酸钠',
    alias: ['维生素C钠'],
    category: 'antioxidant',
    categoryLabel: '抗氧化剂',
    function: '抗氧化剂，防止食品氧化变色。',
    action: '抗坏血酸的钠盐，水溶性好，能清除自由基、抑制褐变，常用于饮料、肉制品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全，钠摄入需计入总量。',
    description: '本品是常见的抗氧化剂，在配料表中通常以「抗坏血酸钠」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '抗坏血酸钙',
    alias: ['维生素C钙'],
    category: 'antioxidant',
    categoryLabel: '抗氧化剂',
    function: '抗氧化剂兼钙强化。',
    action: '水溶性抗氧化剂，抑制食品氧化和褐变，同时提供钙源。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的抗氧化剂，在配料表中通常以「抗坏血酸钙」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '抗坏血酸棕榈酸酯',
    alias: ['维生素C棕榈酸酯'],
    category: 'antioxidant',
    categoryLabel: '抗氧化剂',
    function: '脂溶性抗氧化剂，保护油脂不氧化。',
    action: '抗坏血酸的脂溶性衍生物，能溶于油脂中抑制氧化酸败，常用于食用油和含油食品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的抗氧化剂，在配料表中通常以「抗坏血酸棕榈酸酯」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '异抗坏血酸',
    alias: ['赤藻糖酸'],
    category: 'antioxidant',
    categoryLabel: '抗氧化剂',
    function: '抗氧化剂，防止食品氧化变色。',
    action: '抗坏血酸的立体异构体，抗氧化性能相近但无维生素活性，常用于肉制品护色。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的抗氧化剂，在配料表中通常以「异抗坏血酸」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '没食子酸辛酯',
    alias: ['辛基没食子酸酯'],
    category: 'antioxidant',
    categoryLabel: '抗氧化剂',
    function: '脂溶性抗氧化剂，防止油脂酸败。',
    action: '没食子酸的辛酯，脂溶性好，常用于油脂和含油食品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '大剂量动物实验有不良影响，建议控制摄入。',
    description: '本品是常见的抗氧化剂，在配料表中通常以「没食子酸辛酯」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '没食子酸十二酯',
    alias: ['十二烷基没食子酸酯', '月桂酸没食子酸酯'],
    category: 'antioxidant',
    categoryLabel: '抗氧化剂',
    function: '脂溶性抗氧化剂，防止油脂酸败。',
    action: '长链酯，脂溶性更强，用于油脂和油炸食品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '大剂量有安全性争议，建议少吃油炸食品。',
    description: '本品是常见的抗氧化剂，在配料表中通常以「没食子酸十二酯」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '硫代二丙酸二月桂酯',
    alias: ['DLTP'],
    category: 'antioxidant',
    categoryLabel: '抗氧化剂',
    function: '辅助抗氧化剂，分解油脂氧化产物。',
    action: '能分解油脂氧化过程中产生的过氧化物，与BHA、BHT等主抗氧化剂协同使用。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的抗氧化剂，在配料表中通常以「硫代二丙酸二月桂酯」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '乙二胺四乙酸二钠',
    alias: ['EDTA二钠'],
    category: 'antioxidant',
    categoryLabel: '抗氧化剂',
    function: '螯合金属离子，防止氧化变色。',
    action: '螯合铁、铜等金属离子，抑制其催化的氧化反应，常用于饮料、罐头、蛋黄酱。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '过量摄入可能影响矿物质吸收，建议控制。',
    description: '本品是常见的抗氧化剂，在配料表中通常以「乙二胺四乙酸二钠」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '植酸',
    alias: ['肌醇六磷酸'],
    category: 'antioxidant',
    categoryLabel: '抗氧化剂',
    function: '天然抗氧化剂，螯合金属离子。',
    action: '从植物种子中提取，能螯合金属离子、抑制氧化，常用于饮料和油脂。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，但会结合矿物质影响吸收，不宜过量。',
    description: '本品是常见的抗氧化剂，在配料表中通常以「植酸」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '葡萄糖氧化酶',
    alias: ['GOx'],
    category: 'antioxidant',
    categoryLabel: '抗氧化剂',
    function: '酶类抗氧化剂，消耗氧气防止氧化。',
    action: '催化葡萄糖与氧反应生成葡萄糖酸和过氧化氢，从而去除包装内氧气，常用于瓶装食品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然酶制剂，常规使用安全。',
    description: '本品是常见的抗氧化剂，在配料表中通常以「葡萄糖氧化酶」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '愈创树脂',
    alias: ['愈创木树脂'],
    category: 'antioxidant',
    categoryLabel: '抗氧化剂',
    function: '天然抗氧化剂，防止油脂氧化。',
    action: '天然树脂提取物，具有抗氧化活性，常用于油脂和含油食品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的抗氧化剂，在配料表中通常以「愈创树脂」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '爱德万甜',
    alias: ['Advantame'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '高倍甜味剂，甜度约为蔗糖的2万倍。',
    action: '阿斯巴甜的衍生物，甜度极高、用量极小，常用于饮料和低糖食品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '含苯丙氨酸，苯丙酮尿症患者禁用。',
    description: '本品是常见的甜味剂，在配料表中通常以「爱德万甜」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '罗汉果甜苷',
    alias: ['罗汉果提取物', 'Mogroside'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '天然高倍甜味剂，甜度约为蔗糖的300倍。',
    action: '从罗汉果中提取的三萜糖苷，甜味纯正、几乎无热量，常用于饮料和保健食品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的甜味剂，在配料表中通常以「罗汉果甜苷」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '索马甜',
    alias: ['Thaumatin', '非洲甜蛋白'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '天然蛋白质甜味剂，甜度约为蔗糖的2000倍。',
    action: '从非洲竹芋果实中提取的甜蛋白，甜味持久，常用于口香糖和饮料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然蛋白质，常规使用安全，极少数人可能过敏。',
    description: '本品是常见的甜味剂，在配料表中通常以「索马甜」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '甘草酸铵',
    alias: ['甘草甜素铵'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '天然甜味剂，甜度约为蔗糖的50倍。',
    action: '从甘草中提取，甜味持久并带有特殊风味，常用于蜜饯、饮料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '长期大量摄入可能引起水钠潴留，高血压患者慎用。',
    description: '本品是常见的甜味剂，在配料表中通常以「甘草酸铵」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '甘草酸一钾',
    alias: ['甘草酸钾'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '天然甜味剂，兼具增味作用。',
    action: '甘草酸的钾盐，甜味缓和，常用于酱油、蜜饯调味。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '长期大量摄入可能影响血压，适量即可。',
    description: '本品是常见的甜味剂，在配料表中通常以「甘草酸一钾」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '乳糖醇',
    alias: ['Lactitol'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '糖醇类甜味剂，甜度约为蔗糖的40%。',
    action: '由乳糖氢化制得，热量低、不致龋齿，常用于无糖糖果和烘焙食品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '过量摄入可能引起腹胀腹泻，乳糖不耐受者注意。',
    description: '本品是常见的甜味剂，在配料表中通常以「乳糖醇」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '异麦芽酮糖醇',
    alias: ['益寿糖', 'Isomalt'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '糖醇类甜味剂，甜度约为蔗糖的50%。',
    action: '由蔗糖转化制得，低吸湿性、不致龋齿，常用于无糖糖果和巧克力。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '过量摄入可能引起腹泻。',
    description: '本品是常见的甜味剂，在配料表中通常以「异麦芽酮糖醇」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: 'D-甘露糖醇',
    alias: ['甘露醇'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '糖醇类甜味剂，甜度约为蔗糖的70%。',
    action: '低热量、不致龋齿，常用于无糖口香糖和食品加工。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '过量摄入可能引起腹泻，建议适量。',
    description: '本品是常见的甜味剂，在配料表中通常以「D-甘露糖醇」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '低聚木糖',
    alias: ['木寡糖'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '功能性低聚糖，甜度低、促进肠道有益菌。',
    action: '从玉米芯等提取，选择性促进双歧杆菌增殖，常用于饮料和保健食品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全，过量可能胀气。',
    description: '本品是常见的甜味剂，在配料表中通常以「低聚木糖」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '低聚果糖',
    alias: ['果寡糖', 'FOS'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '功能性低聚糖，甜度约为蔗糖的30%。',
    action: '促进肠道有益菌增殖、改善肠道菌群，常用于乳制品和饮料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全，过量可能引起胀气。',
    description: '本品是常见的甜味剂，在配料表中通常以「低聚果糖」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '低聚异麦芽糖',
    alias: ['异麦芽低聚糖', 'IMO'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '功能性低聚糖，甜度低、保湿性好。',
    action: '促进双歧杆菌增殖，改善肠道健康，常用于饮料和烘焙食品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全，过量可能胀气。',
    description: '本品是常见的甜味剂，在配料表中通常以「低聚异麦芽糖」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '聚葡萄糖',
    alias: ['Polydextrose'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '水溶性膳食纤维，低热量填充型甜味剂。',
    action: '由葡萄糖聚合而成，提供体积和口感但热量低，常用于无糖食品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全，过量可能引起腹胀。',
    description: '本品是常见的甜味剂，在配料表中通常以「聚葡萄糖」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '阿力甜',
    alias: ['Alitame'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '高倍甜味剂，甜度约为蔗糖的2000倍。',
    action: '由氨基酸衍生物构成，甜味接近蔗糖，常用于饮料和糖果。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '含苯丙氨酸，苯丙酮尿症患者禁用。',
    description: '本品是常见的甜味剂，在配料表中通常以「阿力甜」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '新橙皮苷二氢查尔酮',
    alias: ['NHDC'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '天然高倍甜味剂，兼具增香作用。',
    action: '从柑橘类提取，甜度高、热量低，能掩盖苦味，常用于饮料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的甜味剂，在配料表中通常以「新橙皮苷二氢查尔酮」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '低聚半乳糖',
    alias: ['GOS'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '功能性低聚糖，促进肠道有益菌。',
    action: '从乳糖转化制得，能促进双歧杆菌增殖，常用于婴幼儿食品和乳制品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全，乳糖不耐受者需留意。',
    description: '本品是常见的甜味剂，在配料表中通常以「低聚半乳糖」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '水苏糖',
    alias: ['Stachyose'],
    category: 'sweetener',
    categoryLabel: '甜味剂',
    function: '功能性四糖，促进肠道有益菌增殖。',
    action: '天然存在于豆类中，可选择性地促进双歧杆菌生长，常用于保健食品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全，过量可能胀气。',
    description: '本品是常见的甜味剂，在配料表中通常以「水苏糖」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '乙基麦芽酚',
    alias: ['麦芽酚乙酯'],
    category: 'flavor enhancer',
    categoryLabel: '增味剂',
    function: '增香增味剂，能增强甜香和果香。',
    action: '微量添加即可显著提升食品香气和甜感，常用于饮料、糖果、烘焙食品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全，过量使用会掩盖原料本味。',
    description: '本品是常见的增味剂，在配料表中通常以「乙基麦芽酚」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: 'L-丙氨酸',
    category: 'flavor enhancer',
    categoryLabel: '增味剂',
    function: '氨基酸类增味剂，缓和酸味和苦味。',
    action: '天然氨基酸，能提升食品鲜甜感、缓和异味，常用于饮料和调味品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的增味剂，在配料表中通常以「L-丙氨酸」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '甘氨酸',
    alias: ['氨基乙酸'],
    category: 'flavor enhancer',
    categoryLabel: '增味剂',
    function: '氨基酸类增味剂，调节甜味和酸味。',
    action: '最简单的氨基酸，能缓冲酸味、增强甜味，常用于饮料和调味料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的增味剂，在配料表中通常以「甘氨酸」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: 'DL-丙氨酸',
    category: 'flavor enhancer',
    categoryLabel: '增味剂',
    function: '氨基酸类增味剂，改善风味平衡。',
    action: '丙氨酸的外消旋体，增味效果与L-丙氨酸相近，成本较低。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的增味剂，在配料表中通常以「DL-丙氨酸」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '琥珀酸',
    alias: ['丁二酸'],
    category: 'flavor enhancer',
    categoryLabel: '增味剂',
    function: '鲜味增味剂，提供贝类鲜味。',
    action: '天然存在于贝类中，具独特鲜味，常用于酱油、调味料和酒类。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的增味剂，在配料表中通常以「琥珀酸」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '谷氨酸钾',
    category: 'flavor enhancer',
    categoryLabel: '增味剂',
    function: '鲜味增味剂，谷氨酸的钾盐。',
    action: '提供与味精相似的鲜味，适用于低钠调味品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全，肾功能不全者需控制钾摄入。',
    description: '本品是常见的增味剂，在配料表中通常以「谷氨酸钾」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '谷氨酸钙',
    category: 'flavor enhancer',
    categoryLabel: '增味剂',
    function: '鲜味增味剂，谷氨酸的钙盐。',
    action: '提供鲜味并补充钙质，常用于调味料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的增味剂，在配料表中通常以「谷氨酸钙」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '5\'-胞苷酸二钠',
    alias: ['胞苷酸二钠'],
    category: 'flavor enhancer',
    categoryLabel: '增味剂',
    function: '核苷酸类增味剂，与味精协同增鲜。',
    action: '与谷氨酸钠协同作用可显著增强鲜味，常用于调味料和汤料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全，痛风患者适量。',
    description: '本品是常见的增味剂，在配料表中通常以「5\'-胞苷酸二钠」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: 'L-天门冬氨酸钠',
    alias: ['天冬氨酸钠'],
    category: 'flavor enhancer',
    categoryLabel: '增味剂',
    function: '氨基酸类增味剂，改善风味。',
    action: '天然氨基酸的钠盐，能增强鲜味并缓和酸味，常用于调味料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的增味剂，在配料表中通常以「L-天门冬氨酸钠」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '酵母提取物',
    alias: ['酵母抽提物'],
    category: 'flavor enhancer',
    categoryLabel: '增味剂',
    function: '天然鲜味剂，富含氨基酸和核苷酸。',
    action: '由酵母自溶提取，含谷氨酸和核苷酸，提供天然鲜味，常用于调味料和汤料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全，嘌呤含量需留意。',
    description: '本品是常见的增味剂，在配料表中通常以「酵母提取物」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '水解植物蛋白',
    alias: ['HVP', '植物水解蛋白'],
    category: 'flavor enhancer',
    categoryLabel: '增味剂',
    function: '天然鲜味剂，富含氨基酸。',
    action: '植物蛋白经酸或酶水解制得，提供鲜味和肉香，常用于酱油和调味料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的增味剂，在配料表中通常以「水解植物蛋白」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '胭脂虫红',
    alias: ['胭脂红酸', 'Carmine'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '天然动物来源红色着色剂。',
    action: '从胭脂虫中提取，色泽鲜艳稳定，常用于饮料、糖果、肉制品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '天然来源，但极少数人可能过敏。',
    description: '本品是常见的着色剂，在配料表中通常以「胭脂虫红」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '胭脂红铝色淀',
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '合成红色着色剂的铝色淀形式。',
    action: '将胭脂红吸附于氧化铝载体，提高分散性和稳定性，常用于糖果包衣、糕点。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '含铝，儿童应控制含铝添加剂摄入。',
    description: '本品是常见的着色剂，在配料表中通常以「胭脂红铝色淀」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '柠檬黄铝色淀',
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '合成黄色着色剂的铝色淀形式。',
    action: '吸附于氧化铝载体，色泽稳定，常用于糖果和糕点装饰。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '含铝并可能引起少数人过敏。',
    description: '本品是常见的着色剂，在配料表中通常以「柠檬黄铝色淀」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '日落黄铝色淀',
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '合成橙黄色着色剂的铝色淀形式。',
    action: '用于糖果包衣和糕点装饰，色泽稳定。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '含铝，敏感人群注意。',
    description: '本品是常见的着色剂，在配料表中通常以「日落黄铝色淀」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '亮蓝铝色淀',
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '合成蓝色着色剂的铝色淀形式。',
    action: '用于糖果和糕点装饰。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '含铝，建议控制摄入。',
    description: '本品是常见的着色剂，在配料表中通常以「亮蓝铝色淀」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '诱惑红铝色淀',
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '合成红色着色剂的铝色淀形式。',
    action: '用于糖果、糕点包衣。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '含铝，敏感人群注意。',
    description: '本品是常见的着色剂，在配料表中通常以「诱惑红铝色淀」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '苋菜红铝色淀',
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '合成红色着色剂的铝色淀形式。',
    action: '用于糖果和饮料粉。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '含铝，建议控制。',
    description: '本品是常见的着色剂，在配料表中通常以「苋菜红铝色淀」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '赤藓红铝色淀',
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '合成红色着色剂的铝色淀形式。',
    action: '用于糖果和蜜饯。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '含铝，建议控制。',
    description: '本品是常见的着色剂，在配料表中通常以「赤藓红铝色淀」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '靛蓝铝色淀',
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '合成蓝色着色剂的铝色淀形式。',
    action: '用于糖果和糕点。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '含铝，建议控制。',
    description: '本品是常见的着色剂，在配料表中通常以「靛蓝铝色淀」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '二氧化钛',
    alias: ['钛白粉'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '白色着色剂，提供不透明感和白度。',
    action: '物理性白色颜料，不易被吸收，常用于糖果、口香糖、乳制品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '纳米级颗粒的吸收风险仍有争议，建议适量。',
    description: '本品是常见的着色剂，在配料表中通常以「二氧化钛」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '氧化铁黑',
    alias: ['四氧化三铁'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '黑色着色剂。',
    action: '无机颜料，色泽稳定，常用于糖果和胶囊包衣。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '仅限特定食品使用，建议少量。',
    description: '本品是常见的着色剂，在配料表中通常以「氧化铁黑」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '氧化铁红',
    alias: ['三氧化二铁'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '红色着色剂。',
    action: '无机颜料，耐光耐热，常用于糖果包衣。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '仅限特定食品使用。',
    description: '本品是常见的着色剂，在配料表中通常以「氧化铁红」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '红曲米',
    alias: ['红曲'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '天然微生物发酵红色着色剂。',
    action: '由红曲霉发酵大米制得，含红曲色素，常用于肉制品、腐乳、酒类。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全，发酵产物需控制桔霉素。',
    description: '本品是常见的着色剂，在配料表中通常以「红曲米」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '番茄红素',
    alias: ['Lycopene'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '天然类胡萝卜素红色着色剂。',
    action: '从番茄等提取，兼具抗氧化作用，常用于饮料和保健食品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的着色剂，在配料表中通常以「番茄红素」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '辣椒红',
    alias: ['辣椒红色素'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '天然类胡萝卜素红色着色剂。',
    action: '从辣椒中提取，色泽鲜艳、耐热性好，常用于肉制品和调味料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的着色剂，在配料表中通常以「辣椒红」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '辣椒橙',
    alias: ['辣椒橙色素'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '天然橙红色着色剂。',
    action: '从辣椒中提取的色素组分，用于调味料和肉制品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的着色剂，在配料表中通常以「辣椒橙」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '沙棘黄',
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '天然黄色着色剂。',
    action: '从沙棘果实中提取，富含类胡萝卜素，常用于饮料和糕点。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的着色剂，在配料表中通常以「沙棘黄」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '菊花黄',
    alias: ['菊花黄色素'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '天然黄色着色剂。',
    action: '从菊花中提取，色泽自然，常用于饮料和糖果。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的着色剂，在配料表中通常以「菊花黄」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '黑豆红',
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '天然红色着色剂。',
    action: '从黑豆皮中提取的花青素类色素，常用于饮料和果冻。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的着色剂，在配料表中通常以「黑豆红」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '玫瑰茄红',
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '天然红色着色剂。',
    action: '从玫瑰茄花萼中提取，色泽随pH变化，常用于饮料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的着色剂，在配料表中通常以「玫瑰茄红」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '葡萄皮红',
    alias: ['葡萄皮红色素'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '天然红色着色剂。',
    action: '从葡萄皮中提取的花青素，常用于饮料和酒类。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的着色剂，在配料表中通常以「葡萄皮红」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '高粱红',
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '天然红色着色剂。',
    action: '从高粱壳中提取，耐热性好，常用于肉制品和糕点。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的着色剂，在配料表中通常以「高粱红」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '红米红',
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '天然红色着色剂。',
    action: '从红米中提取，常用于酒类和饮料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的着色剂，在配料表中通常以「红米红」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '藻蓝',
    alias: ['藻蓝色素', '螺旋藻蓝'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '天然蓝色着色剂。',
    action: '从螺旋藻中提取的藻蓝蛋白，是少见的天然蓝色色素，常用于糖果和饮料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全，藻类过敏者留意。',
    description: '本品是常见的着色剂，在配料表中通常以「藻蓝」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '叶绿素铜钾盐',
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '叶绿素的铜钾盐，绿色着色剂。',
    action: '天然叶绿素经铜代后色泽更稳定，常用于糖果和饮料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '含铜，需控制摄入量。',
    description: '本品是常见的着色剂，在配料表中通常以「叶绿素铜钾盐」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '叶黄素',
    alias: ['Lutein'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '天然类胡萝卜素黄色着色剂。',
    action: '从万寿菊中提取，兼具护眼作用，常用于饮料和保健食品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的着色剂，在配料表中通常以「叶黄素」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: 'β-阿朴-8\'-胡萝卜素醛',
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '天然类胡萝卜素橙黄色着色剂。',
    action: '类胡萝卜素衍生物，色泽鲜艳，常用于饮料和乳制品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的着色剂，在配料表中通常以「β-阿朴-8\'-胡萝卜素醛」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '姜黄素',
    alias: ['Curcumin'],
    category: 'colorant',
    categoryLabel: '着色剂',
    function: '天然黄色着色剂兼抗氧化。',
    action: '从姜黄中提取，色泽鲜艳、具抗氧化性，常用于调味料和饮料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全，大剂量可能影响凝血。',
    description: '本品是常见的着色剂，在配料表中通常以「姜黄素」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '柠檬酸钠',
    alias: ['枸橼酸钠'],
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '调节酸度并螯合金属离子。',
    action: '柠檬酸的钠盐，缓冲pH、螯合金属，常用于饮料和乳制品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全，钠摄入需计入总量。',
    description: '本品是常见的酸度调节剂，在配料表中通常以「柠檬酸钠」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '柠檬酸钾',
    alias: ['枸橼酸钾'],
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '调节酸度并补充钾。',
    action: '柠檬酸的钾盐，常用于低钠盐和饮料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全，肾功能不全者控制钾摄入。',
    description: '本品是常见的酸度调节剂，在配料表中通常以「柠檬酸钾」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '柠檬酸钙',
    alias: ['枸橼酸钙'],
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '调节酸度并补充钙。',
    action: '柠檬酸的钙盐，兼作钙强化剂，常用于饮料和乳制品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的酸度调节剂，在配料表中通常以「柠檬酸钙」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '乳酸钾',
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '调节酸度并抑菌。',
    action: '乳酸的钾盐，常用于肉制品和饮料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全，肾功能不佳者注意钾摄入。',
    description: '本品是常见的酸度调节剂，在配料表中通常以「乳酸钾」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '磷酸氢二钠',
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '调节酸度并作为缓冲剂。',
    action: '磷酸盐缓冲体系的重要组分，常用于饮料和乳制品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全，磷摄入需计入总量。',
    description: '本品是常见的酸度调节剂，在配料表中通常以「磷酸氢二钠」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '磷酸二氢钠',
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '调节酸度并缓冲。',
    action: '酸性磷酸盐，常用于饮料和烘焙食品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全，磷摄入需计入总量。',
    description: '本品是常见的酸度调节剂，在配料表中通常以「磷酸二氢钠」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '磷酸氢二钾',
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '调节酸度并补充钾。',
    action: '磷酸盐缓冲剂，常用于乳制品和饮料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '肾功能不全者需控制钾摄入。',
    description: '本品是常见的酸度调节剂，在配料表中通常以「磷酸氢二钾」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '磷酸二氢钾',
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '调节酸度并缓冲。',
    action: '酸性磷酸盐，常用于饮料和发酵食品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全，注意磷摄入。',
    description: '本品是常见的酸度调节剂，在配料表中通常以「磷酸二氢钾」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '醋酸钠',
    alias: ['乙酸钠'],
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '调节酸度并缓冲。',
    action: '乙酸的钠盐，常用于调味料和烘焙食品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的酸度调节剂，在配料表中通常以「醋酸钠」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '碳酸钾',
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '碱性调节剂，兼作膨松剂。',
    action: '常用于可可制品、面制品和调味料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全，肾功能不全者注意钾。',
    description: '本品是常见的酸度调节剂，在配料表中通常以「碳酸钾」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '碳酸氢钾',
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '碱性膨松剂和酸度调节剂。',
    action: '受热分解产生二氧化碳，常用于烘焙食品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全，注意钾摄入。',
    description: '本品是常见的酸度调节剂，在配料表中通常以「碳酸氢钾」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '氢氧化钾',
    alias: ['苛性钾'],
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '强碱性pH调节剂。',
    action: '强碱，需中和后使用，常用于可可加工和淀粉改性。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '强腐蚀性，成品中不得残留游离碱。',
    description: '本品是常见的酸度调节剂，在配料表中通常以「氢氧化钾」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '氢氧化钙',
    alias: ['熟石灰'],
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '碱性调节剂。',
    action: '常用于糖类精炼和果蔬加工。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全，须为食品级。',
    description: '本品是常见的酸度调节剂，在配料表中通常以「氢氧化钙」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '富马酸一钠',
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '酸度调节剂，提供酸味。',
    action: '富马酸的钠盐，酸味柔和，常用于饮料和调味料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的酸度调节剂，在配料表中通常以「富马酸一钠」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '苹果酸钠',
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '酸度调节剂，提供酸味。',
    action: '苹果酸的钠盐，酸味温和，常用于饮料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的酸度调节剂，在配料表中通常以「苹果酸钠」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '酒石酸氢钾',
    alias: ['塔塔粉'],
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '酸性膨松助剂。',
    action: '常用于烘焙中与碳酸氢钠配合产生二氧化碳，也用于葡萄酒。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的酸度调节剂，在配料表中通常以「酒石酸氢钾」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '柠檬酸一钠',
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '调节酸度并缓冲。',
    action: '部分中和的柠檬酸盐，缓冲能力好，常用于饮料和果酱。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的酸度调节剂，在配料表中通常以「柠檬酸一钠」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '葡萄糖酸-δ-内酯',
    alias: ['GDL', '葡萄糖酸内酯'],
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '缓释酸化剂，用于豆腐凝固。',
    action: '在水中缓慢水解为葡萄糖酸，使蛋白质缓慢凝固，是内酯豆腐的关键凝固剂。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的酸度调节剂，在配料表中通常以「葡萄糖酸-δ-内酯」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '氯化钾',
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '代盐剂和酸度调节剂。',
    action: '提供咸味，常用于低钠盐，但过量有苦味。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '肾功能不全者需严格限制钾摄入。',
    description: '本品是常见的酸度调节剂，在配料表中通常以「氯化钾」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '氯化钙',
    category: 'acidRegulator',
    categoryLabel: '酸度调节剂',
    function: '调节酸度并改善质构。',
    action: '常用于罐头、果蔬保持脆度和乳制品凝固。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的酸度调节剂，在配料表中通常以「氯化钙」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '微晶纤维素',
    alias: ['MCC'],
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '增稠、稳定和抗结。',
    action: '纤维素部分水解产物，不溶性微晶结构，常用于乳制品、烘焙和膳食纤维补充。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的增稠剂，在配料表中通常以「微晶纤维素」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '甲基纤维素',
    alias: ['MC'],
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '增稠和成膜。',
    action: '纤维素醚类，加热凝胶化，常用于油炸食品和冰淇淋。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的增稠剂，在配料表中通常以「甲基纤维素」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '羟丙基甲基纤维素',
    alias: ['HPMC'],
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '增稠、保水和成膜。',
    action: '纤维素醚，常用于面制品、冰淇淋和植物蛋白饮料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的增稠剂，在配料表中通常以「羟丙基甲基纤维素」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '羟丙基纤维素',
    alias: ['HPC'],
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '增稠和成膜。',
    action: '纤维素醚，常用于食品包衣和稳定体系。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的增稠剂，在配料表中通常以「羟丙基纤维素」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '海藻酸丙二醇酯',
    alias: ['PGA'],
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '增稠和乳化稳定。',
    action: '海藻酸衍生物，耐酸性好，常用于酸奶和调味料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的增稠剂，在配料表中通常以「海藻酸丙二醇酯」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '槐豆胶',
    alias: ['刺槐豆胶', '角豆胶'],
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '增稠和稳定。',
    action: '从角豆种子提取的半乳甘露聚糖，与黄原胶协同增稠，常用于冰淇淋。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的增稠剂，在配料表中通常以「槐豆胶」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '塔拉胶',
    alias: ['刺云实胶'],
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '增稠和稳定。',
    action: '从塔拉种子提取，性能接近槐豆胶，常用于冰淇淋和酱料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的增稠剂，在配料表中通常以「塔拉胶」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '亚麻籽胶',
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '天然增稠剂。',
    action: '从亚麻籽中提取，具有良好的保水和增稠性。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的增稠剂，在配料表中通常以「亚麻籽胶」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '沙蒿胶',
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '天然增稠剂。',
    action: '从沙蒿种子提取，常用于面制品改善口感。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的增稠剂，在配料表中通常以「沙蒿胶」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '皂荚糖胶',
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '天然增稠剂。',
    action: '从皂荚种子提取的半乳甘露聚糖，常用于面制品和饮料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的增稠剂，在配料表中通常以「皂荚糖胶」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '田菁胶',
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '天然增稠剂。',
    action: '从田菁种子提取，常用于冰淇淋和饮料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的增稠剂，在配料表中通常以「田菁胶」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '罗望子多糖胶',
    alias: ['TSP'],
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '天然增稠和稳定剂。',
    action: '从罗望子种子提取，耐热耐酸，常用于饮料和酱料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的增稠剂，在配料表中通常以「罗望子多糖胶」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '可得然胶',
    alias: ['Curdlan'],
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '微生物发酵来源的热凝胶增稠剂。',
    action: '由细菌发酵产生，加热后形成不可逆凝胶，常用于肉制品和素食制品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然发酵来源，常规使用安全。',
    description: '本品是常见的增稠剂，在配料表中通常以「可得然胶」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '普鲁兰多糖',
    alias: ['Pullulan'],
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '微生物发酵来源的成膜增稠剂。',
    action: '由出芽短梗霉发酵产生，成膜性好，常用于糖果包衣和可食用膜。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然发酵来源，常规使用安全。',
    description: '本品是常见的增稠剂，在配料表中通常以「普鲁兰多糖」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: 'β-环状糊精',
    alias: ['β-CD'],
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '包合稳定剂，掩盖异味。',
    action: '环状寡糖，能包合风味物质和异味分子，常用于食品和香精。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全，大剂量可能影响脂溶性营养素吸收。',
    description: '本品是常见的增稠剂，在配料表中通常以「β-环状糊精」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '辛烯基琥珀酸淀粉钠',
    alias: ['SSOS'],
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '乳化增稠变性淀粉。',
    action: '兼具亲水和亲油基团，常用于香精、油脂微胶囊化和饮料乳化。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的增稠剂，在配料表中通常以「辛烯基琥珀酸淀粉钠」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '淀粉磷酸酯钠',
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '变性淀粉增稠剂。',
    action: '磷酸酯化淀粉，糊液稳定性好，常用于冷冻食品和酱料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的增稠剂，在配料表中通常以「淀粉磷酸酯钠」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '羟丙基淀粉',
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '变性淀粉增稠剂。',
    action: '羟丙基化改善冻融稳定性，常用于冷冻食品和调味酱。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的增稠剂，在配料表中通常以「羟丙基淀粉」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '氧化淀粉',
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '变性淀粉增稠剂。',
    action: '氧化降低淀粉黏度、提高稳定性，常用于糖果和食品加工。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的增稠剂，在配料表中通常以「氧化淀粉」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '酸处理淀粉',
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '变性淀粉增稠剂。',
    action: '酸水解降低淀粉分子量，常用于软糖和胶体食品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的增稠剂，在配料表中通常以「酸处理淀粉」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '羧甲基淀粉钠',
    alias: ['CMS'],
    category: 'thickener',
    categoryLabel: '增稠剂',
    function: '增稠和保水。',
    action: '羧甲基化淀粉，冷水可溶，常用于饮料和调味料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的增稠剂，在配料表中通常以「羧甲基淀粉钠」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '卵磷脂',
    alias: ['磷脂'],
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '天然乳化剂。',
    action: '从大豆或蛋黄提取，兼有乳化和抗氧化作用，常用于巧克力、烘焙和饮料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全，大豆过敏者留意来源。',
    description: '本品是常见的乳化剂，在配料表中通常以「卵磷脂」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '改性大豆磷脂',
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '改性天然乳化剂。',
    action: '大豆磷脂经酶解或乙酰化改性，乳化性更强，常用于烘焙和乳制品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，常规使用安全。',
    description: '本品是常见的乳化剂，在配料表中通常以「改性大豆磷脂」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '酶解大豆磷脂',
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '酶解天然乳化剂。',
    action: '酶解提高亲水性，常用于水包油体系。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '天然来源，大豆过敏者留意。',
    description: '本品是常见的乳化剂，在配料表中通常以「酶解大豆磷脂」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '聚氧乙烯(20)山梨醇酐单月桂酸酯',
    alias: ['吐温20', 'Polysorbate 20'],
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '合成非离子乳化剂。',
    action: '亲水性强，常用于饮料、香精和冰淇淋乳化。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '合成乳化剂，建议控制摄入量。',
    description: '本品是常见的乳化剂，在配料表中通常以「聚氧乙烯(20)山梨醇酐单月桂酸酯」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '聚氧乙烯(20)山梨醇酐单棕榈酸酯',
    alias: ['吐温40'],
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '合成非离子乳化剂。',
    action: '常用于食品乳化和香精增溶。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '合成乳化剂，建议适量。',
    description: '本品是常见的乳化剂，在配料表中通常以「聚氧乙烯(20)山梨醇酐单棕榈酸酯」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '聚氧乙烯(20)山梨醇酐单硬脂酸酯',
    alias: ['吐温60'],
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '合成非离子乳化剂。',
    action: '常用于糕点、冰淇淋和饮料。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '合成乳化剂，建议适量。',
    description: '本品是常见的乳化剂，在配料表中通常以「聚氧乙烯(20)山梨醇酐单硬脂酸酯」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '山梨醇酐单油酸酯',
    alias: ['司盘80', 'Span 80'],
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '非离子乳化剂。',
    action: '亲油性强，常用于油包水体系、巧克力和冰淇淋。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的乳化剂，在配料表中通常以「山梨醇酐单油酸酯」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '山梨醇酐单月桂酸酯',
    alias: ['司盘20'],
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '非离子乳化剂。',
    action: '亲水性较强，常用于饮料和糕点。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的乳化剂，在配料表中通常以「山梨醇酐单月桂酸酯」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '山梨醇酐单棕榈酸酯',
    alias: ['司盘40'],
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '非离子乳化剂。',
    action: '常用于乳制品和烘焙食品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的乳化剂，在配料表中通常以「山梨醇酐单棕榈酸酯」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '山梨醇酐三硬脂酸酯',
    alias: ['司盘65'],
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '非离子乳化剂。',
    action: '亲油性强，常用于油脂和巧克力。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的乳化剂，在配料表中通常以「山梨醇酐三硬脂酸酯」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '丙二醇脂肪酸酯',
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '非离子乳化剂。',
    action: '常用于糕点、冰淇淋和油脂。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的乳化剂，在配料表中通常以「丙二醇脂肪酸酯」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '聚甘油蓖麻醇酸酯',
    alias: ['PGPR'],
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '巧克力专用乳化剂。',
    action: '降低巧克力黏度、改善流动性和脱模性。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的乳化剂，在配料表中通常以「聚甘油蓖麻醇酸酯」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '柠檬酸脂肪酸甘油酯',
    alias: ['CITREM'],
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '阴离子乳化剂。',
    action: '常用于烘焙和乳制品，兼具抗氧化协同作用。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的乳化剂，在配料表中通常以「柠檬酸脂肪酸甘油酯」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '乳酸脂肪酸甘油酯',
    alias: ['LACTEM'],
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '阴离子乳化剂。',
    action: '常用于蛋糕、面包和咖啡伴侣。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的乳化剂，在配料表中通常以「乳酸脂肪酸甘油酯」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '双乙酰酒石酸单双甘油酯',
    alias: ['DATEM'],
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '阴离子乳化剂。',
    action: '与面筋蛋白结合增强面团网络，是面包改良剂的重要成分。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的乳化剂，在配料表中通常以「双乙酰酒石酸单双甘油酯」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '琥珀酸单甘油酯',
    alias: ['SMG'],
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '阴离子乳化剂。',
    action: '常用于烘焙和乳制品乳化稳定。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的乳化剂，在配料表中通常以「琥珀酸单甘油酯」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '硬脂酸钙',
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '乳化剂和抗结剂。',
    action: '常用于食品粉末抗结和糖果。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的乳化剂，在配料表中通常以「硬脂酸钙」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 规定，在相应食品类别中按生产需要适量使用'
  },
  {
    name: '聚氧乙烯聚氧丙烯季戊四醇醚',
    alias: ['PPE'],
    category: 'emulsifier',
    categoryLabel: '乳化剂',
    function: '合成消泡乳化剂。',
    action: '常用于发酵和饮料加工中消泡。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '合成助剂，建议控制残留。',
    description: '本品是常见的乳化剂，在配料表中通常以「聚氧乙烯聚氧丙烯季戊四醇醚」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '焦磷酸二氢二钠',
    alias: ['酸式焦磷酸钠'],
    category: 'stabilizer',
    categoryLabel: '稳定剂',
    function: '稳定、膨松和缓冲。',
    action: '常用于烘焙膨松剂和肉制品保水。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全，磷摄入计入总量。',
    description: '本品是常见的稳定剂，在配料表中通常以「焦磷酸二氢二钠」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '聚偏磷酸钾',
    category: 'stabilizer',
    categoryLabel: '稳定剂',
    function: '稳定和保水。',
    action: '长链磷酸盐，保水性强，常用于肉制品和水产品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '磷摄入需计入总量。',
    description: '本品是常见的稳定剂，在配料表中通常以「聚偏磷酸钾」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '磷酸三钾',
    category: 'stabilizer',
    categoryLabel: '稳定剂',
    function: '稳定和缓冲。',
    action: '常用于乳制品和饮料稳定。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的稳定剂，在配料表中通常以「磷酸三钾」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '三聚磷酸钾',
    category: 'stabilizer',
    categoryLabel: '稳定剂',
    function: '稳定和保水。',
    action: '常用于肉制品和水产品保水。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '磷摄入需控制。',
    description: '本品是常见的稳定剂，在配料表中通常以「三聚磷酸钾」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '焦磷酸四钾',
    alias: ['TKPP'],
    category: 'stabilizer',
    categoryLabel: '稳定剂',
    function: '稳定和螯合。',
    action: '常用于肉制品和淀粉制品。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '磷摄入需控制。',
    description: '本品是常见的稳定剂，在配料表中通常以「焦磷酸四钾」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '磷酸氢钙',
    alias: ['磷酸二钙'],
    category: 'stabilizer',
    categoryLabel: '稳定剂',
    function: '稳定、抗结并补钙。',
    action: '常用于乳制品、烘焙和钙强化。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的稳定剂，在配料表中通常以「磷酸氢钙」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '磷酸二氢钙',
    alias: ['磷酸一钙'],
    category: 'stabilizer',
    categoryLabel: '稳定剂',
    function: '稳定和膨松。',
    action: '常用于烘焙膨松剂和钙强化。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的稳定剂，在配料表中通常以「磷酸二氢钙」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '焦磷酸钙',
    category: 'stabilizer',
    categoryLabel: '稳定剂',
    function: '稳定和抗结。',
    action: '常用于食品粉末抗结。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规使用安全。',
    description: '本品是常见的稳定剂，在配料表中通常以「焦磷酸钙」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '亚硝酸钾',
    category: 'colorFixative',
    categoryLabel: '护色剂',
    function: '护色剂，保持肉制品粉红色并抑制肉毒杆菌。',
    action: '与肌红蛋白结合形成亚硝基肌红蛋白，使肉制品呈稳定的粉红色，同时抑制肉毒梭菌。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'danger',
    riskDesc: '可形成亚硝胺类致癌物，残留量受严格限制，婴幼儿食品禁用。',
    description: '本品是常见的护色剂，在配料表中通常以「亚硝酸钾」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  },
  {
    name: '维生素K',
    alias: ['维生素K1'],
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '促进凝血和骨骼健康。',
    action: '参与凝血因子合成和骨钙代谢，常用于婴幼儿食品和营养强化。',
    standards: [
      {
        code: 'GB 14880-2012',
        name: '食品安全国家标准 食品营养强化剂使用标准',
        type: 'GB',
        regulation: '规定了该营养强化剂允许使用的食品类别及强化量范围。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规强化量安全，服用抗凝药者需遵医嘱。',
    description: '本品是常见的营养强化剂，在配料表中通常以「维生素K」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 14880-2012 规定的食品类别及强化量使用'
  },
  {
    name: '维生素B6',
    alias: ['吡哆醇'],
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '参与氨基酸代谢和神经功能。',
    action: '作为辅酶参与蛋白质代谢和神经递质合成，常用于营养强化食品。',
    standards: [
      {
        code: 'GB 14880-2012',
        name: '食品安全国家标准 食品营养强化剂使用标准',
        type: 'GB',
        regulation: '规定了该营养强化剂允许使用的食品类别及强化量范围。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规强化量安全，大剂量长期服用可能致神经损伤。',
    description: '本品是常见的营养强化剂，在配料表中通常以「维生素B6」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 14880-2012 规定的食品类别及强化量使用'
  },
  {
    name: '维生素B12',
    alias: ['钴胺素'],
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '参与造血和神经功能。',
    action: '参与红细胞生成和神经髓鞘合成，常用于营养强化食品。',
    standards: [
      {
        code: 'GB 14880-2012',
        name: '食品安全国家标准 食品营养强化剂使用标准',
        type: 'GB',
        regulation: '规定了该营养强化剂允许使用的食品类别及强化量范围。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规强化量安全。',
    description: '本品是常见的营养强化剂，在配料表中通常以「维生素B12」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 14880-2012 规定的食品类别及强化量使用'
  },
  {
    name: '烟酸',
    alias: ['维生素B3', '尼克酸'],
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '参与能量代谢。',
    action: '辅酶NAD/NADP的组成成分，参与糖脂代谢，常用于营养强化。',
    standards: [
      {
        code: 'GB 14880-2012',
        name: '食品安全国家标准 食品营养强化剂使用标准',
        type: 'GB',
        regulation: '规定了该营养强化剂允许使用的食品类别及强化量范围。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '大剂量可能引起皮肤潮红，常规强化量安全。',
    description: '本品是常见的营养强化剂，在配料表中通常以「烟酸」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 14880-2012 规定的食品类别及强化量使用'
  },
  {
    name: '烟酰胺',
    alias: ['尼克酰胺'],
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '参与能量代谢。',
    action: '与烟酸功能相近但无潮红反应，常用于营养强化。',
    standards: [
      {
        code: 'GB 14880-2012',
        name: '食品安全国家标准 食品营养强化剂使用标准',
        type: 'GB',
        regulation: '规定了该营养强化剂允许使用的食品类别及强化量范围。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规强化量安全。',
    description: '本品是常见的营养强化剂，在配料表中通常以「烟酰胺」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 14880-2012 规定的食品类别及强化量使用'
  },
  {
    name: '泛酸',
    alias: ['维生素B5'],
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '参与能量代谢。',
    action: '辅酶A的组成成分，参与脂肪酸代谢，常用于营养强化。',
    standards: [
      {
        code: 'GB 14880-2012',
        name: '食品安全国家标准 食品营养强化剂使用标准',
        type: 'GB',
        regulation: '规定了该营养强化剂允许使用的食品类别及强化量范围。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规强化量安全。',
    description: '本品是常见的营养强化剂，在配料表中通常以「泛酸」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 14880-2012 规定的食品类别及强化量使用'
  },
  {
    name: '叶酸',
    alias: ['维生素B9'],
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '参与细胞分裂和造血。',
    action: '参与一碳单位代谢和DNA合成，孕期补充可预防神经管畸形。',
    standards: [
      {
        code: 'GB 14880-2012',
        name: '食品安全国家标准 食品营养强化剂使用标准',
        type: 'GB',
        regulation: '规定了该营养强化剂允许使用的食品类别及强化量范围。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规强化量安全，大剂量可能掩盖B12缺乏。',
    description: '本品是常见的营养强化剂，在配料表中通常以「叶酸」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 14880-2012 规定的食品类别及强化量使用'
  },
  {
    name: '生物素',
    alias: ['维生素B7'],
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '参与羧化反应和代谢。',
    action: '多种羧化酶的辅酶，参与糖脂蛋白代谢，常用于营养强化。',
    standards: [
      {
        code: 'GB 14880-2012',
        name: '食品安全国家标准 食品营养强化剂使用标准',
        type: 'GB',
        regulation: '规定了该营养强化剂允许使用的食品类别及强化量范围。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规强化量安全。',
    description: '本品是常见的营养强化剂，在配料表中通常以「生物素」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 14880-2012 规定的食品类别及强化量使用'
  },
  {
    name: '维生素D3',
    alias: ['胆钙化醇'],
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '促进钙磷吸收。',
    action: '调节钙磷代谢和骨骼发育，常用于乳制品和婴幼儿食品强化。',
    standards: [
      {
        code: 'GB 14880-2012',
        name: '食品安全国家标准 食品营养强化剂使用标准',
        type: 'GB',
        regulation: '规定了该营养强化剂允许使用的食品类别及强化量范围。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '长期过量摄入可能引起高钙血症。',
    description: '本品是常见的营养强化剂，在配料表中通常以「维生素D3」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 14880-2012 规定的食品类别及强化量使用'
  },
  {
    name: '葡萄糖酸钙',
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '补钙强化剂。',
    action: '水溶性好、吸收温和，常用于饮料和乳制品钙强化。',
    standards: [
      {
        code: 'GB 14880-2012',
        name: '食品安全国家标准 食品营养强化剂使用标准',
        type: 'GB',
        regulation: '规定了该营养强化剂允许使用的食品类别及强化量范围。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规强化量安全。',
    description: '本品是常见的营养强化剂，在配料表中通常以「葡萄糖酸钙」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 14880-2012 规定的食品类别及强化量使用'
  },
  {
    name: '乳酸亚铁',
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '补铁强化剂。',
    action: '吸收率较高、胃肠刺激较小，常用于营养强化食品。',
    standards: [
      {
        code: 'GB 14880-2012',
        name: '食品安全国家标准 食品营养强化剂使用标准',
        type: 'GB',
        regulation: '规定了该营养强化剂允许使用的食品类别及强化量范围。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规强化量安全，过量补铁有蓄积风险。',
    description: '本品是常见的营养强化剂，在配料表中通常以「乳酸亚铁」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 14880-2012 规定的食品类别及强化量使用'
  },
  {
    name: '葡萄糖酸亚铁',
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '补铁强化剂。',
    action: '水溶性铁源，常用于饮料和营养强化。',
    standards: [
      {
        code: 'GB 14880-2012',
        name: '食品安全国家标准 食品营养强化剂使用标准',
        type: 'GB',
        regulation: '规定了该营养强化剂允许使用的食品类别及强化量范围。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规强化量安全。',
    description: '本品是常见的营养强化剂，在配料表中通常以「葡萄糖酸亚铁」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 14880-2012 规定的食品类别及强化量使用'
  },
  {
    name: '富马酸亚铁',
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '补铁强化剂。',
    action: '含铁量高、稳定性好，常用于谷物和营养强化。',
    standards: [
      {
        code: 'GB 14880-2012',
        name: '食品安全国家标准 食品营养强化剂使用标准',
        type: 'GB',
        regulation: '规定了该营养强化剂允许使用的食品类别及强化量范围。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规强化量安全。',
    description: '本品是常见的营养强化剂，在配料表中通常以「富马酸亚铁」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 14880-2012 规定的食品类别及强化量使用'
  },
  {
    name: '硫酸锌',
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '补锌强化剂。',
    action: '吸收率较高，常用于营养强化食品。',
    standards: [
      {
        code: 'GB 14880-2012',
        name: '食品安全国家标准 食品营养强化剂使用标准',
        type: 'GB',
        regulation: '规定了该营养强化剂允许使用的食品类别及强化量范围。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '过量可能引起胃肠不适，常规强化量安全。',
    description: '本品是常见的营养强化剂，在配料表中通常以「硫酸锌」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 14880-2012 规定的食品类别及强化量使用'
  },
  {
    name: '乳酸锌',
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '补锌强化剂。',
    action: '吸收温和，常用于乳制品和饮料强化。',
    standards: [
      {
        code: 'GB 14880-2012',
        name: '食品安全国家标准 食品营养强化剂使用标准',
        type: 'GB',
        regulation: '规定了该营养强化剂允许使用的食品类别及强化量范围。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规强化量安全。',
    description: '本品是常见的营养强化剂，在配料表中通常以「乳酸锌」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 14880-2012 规定的食品类别及强化量使用'
  },
  {
    name: '氧化锌',
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '补锌强化剂。',
    action: '含锌量高，常用于营养强化。',
    standards: [
      {
        code: 'GB 14880-2012',
        name: '食品安全国家标准 食品营养强化剂使用标准',
        type: 'GB',
        regulation: '规定了该营养强化剂允许使用的食品类别及强化量范围。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规强化量安全。',
    description: '本品是常见的营养强化剂，在配料表中通常以「氧化锌」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 14880-2012 规定的食品类别及强化量使用'
  },
  {
    name: '硫酸铜',
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '补铜强化剂。',
    action: '铜是多种酶的辅因子，常用于营养强化。',
    standards: [
      {
        code: 'GB 14880-2012',
        name: '食品安全国家标准 食品营养强化剂使用标准',
        type: 'GB',
        regulation: '规定了该营养强化剂允许使用的食品类别及强化量范围。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '过量有毒性，常规强化量安全。',
    description: '本品是常见的营养强化剂，在配料表中通常以「硫酸铜」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 14880-2012 规定的食品类别及强化量使用'
  },
  {
    name: '亚硒酸钠',
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '补硒强化剂。',
    action: '硒是谷胱甘肽过氧化物酶的组成成分，常用于营养强化。',
    standards: [
      {
        code: 'GB 14880-2012',
        name: '食品安全国家标准 食品营养强化剂使用标准',
        type: 'GB',
        regulation: '规定了该营养强化剂允许使用的食品类别及强化量范围。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '硒的安全范围窄，过量可能中毒，需严格控制。',
    description: '本品是常见的营养强化剂，在配料表中通常以「亚硒酸钠」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 14880-2012 规定的食品类别及强化量使用'
  },
  {
    name: '碘化钾',
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '补碘强化剂。',
    action: '常用于食盐加碘和营养强化。',
    standards: [
      {
        code: 'GB 14880-2012',
        name: '食品安全国家标准 食品营养强化剂使用标准',
        type: 'GB',
        regulation: '规定了该营养强化剂允许使用的食品类别及强化量范围。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规强化量安全，甲状腺疾病患者遵医嘱。',
    description: '本品是常见的营养强化剂，在配料表中通常以「碘化钾」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 14880-2012 规定的食品类别及强化量使用'
  },
  {
    name: '碘酸钾',
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '补碘强化剂。',
    action: '稳定性优于碘化钾，常用于食盐加碘。',
    standards: [
      {
        code: 'GB 14880-2012',
        name: '食品安全国家标准 食品营养强化剂使用标准',
        type: 'GB',
        regulation: '规定了该营养强化剂允许使用的食品类别及强化量范围。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规强化量安全。',
    description: '本品是常见的营养强化剂，在配料表中通常以「碘酸钾」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 14880-2012 规定的食品类别及强化量使用'
  },
  {
    name: '酪蛋白磷酸肽',
    alias: ['CPP'],
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '促进钙吸收。',
    action: '与钙形成可溶性复合物，提高钙在肠道中的吸收率。',
    standards: [
      {
        code: 'GB 14880-2012',
        name: '食品安全国家标准 食品营养强化剂使用标准',
        type: 'GB',
        regulation: '规定了该营养强化剂允许使用的食品类别及强化量范围。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规强化量安全，乳过敏者留意来源。',
    description: '本品是常见的营养强化剂，在配料表中通常以「酪蛋白磷酸肽」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 14880-2012 规定的食品类别及强化量使用'
  },
  {
    name: '左旋肉碱',
    alias: ['L-肉碱'],
    category: 'nutrient',
    categoryLabel: '营养强化剂',
    function: '促进脂肪酸代谢。',
    action: '协助长链脂肪酸进入线粒体氧化供能，常用于运动营养食品。',
    standards: [
      {
        code: 'GB 14880-2012',
        name: '食品安全国家标准 食品营养强化剂使用标准',
        type: 'GB',
        regulation: '规定了该营养强化剂允许使用的食品类别及强化量范围。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '常规强化量安全。',
    description: '本品是常见的营养强化剂，在配料表中通常以「左旋肉碱」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 14880-2012 规定的食品类别及强化量使用'
  },
  {
    name: '小麦粉',
    alias: ['面粉'],
    category: 'baseMaterial',
    categoryLabel: '基础原料',
    function: '主要淀粉和蛋白来源。',
    action: '提供淀粉、蛋白质和面筋，是烘焙和面制品的基础原料。',
    standards: [
      {
        code: 'GB 2762-2022',
        name: '食品安全国家标准 食品中污染物限量',
        type: 'GB',
        regulation: '规定了该类食品原料中铅、砷、镉等污染物的限量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '安全，麸质过敏或乳糜泻人群需避免。',
    description: '本品是常见的基础原料，在配料表中通常以「小麦粉」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '作为食品原料按生产需要适量使用，无特殊限量要求'
  },
  {
    name: '玉米淀粉',
    alias: ['粟米淀粉'],
    category: 'baseMaterial',
    categoryLabel: '基础原料',
    function: '提供淀粉和增稠。',
    action: '常用于勾芡、烘焙和粉状食品。',
    standards: [
      {
        code: 'GB 2762-2022',
        name: '食品安全国家标准 食品中污染物限量',
        type: 'GB',
        regulation: '规定了该类食品原料中铅、砷、镉等污染物的限量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '安全。',
    description: '本品是常见的基础原料，在配料表中通常以「玉米淀粉」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '作为食品原料按生产需要适量使用，无特殊限量要求'
  },
  {
    name: '马铃薯淀粉',
    alias: ['土豆淀粉'],
    category: 'baseMaterial',
    categoryLabel: '基础原料',
    function: '提供淀粉和增稠。',
    action: '糊化温度低、黏度高，常用于酱料和冷冻食品。',
    standards: [
      {
        code: 'GB 2762-2022',
        name: '食品安全国家标准 食品中污染物限量',
        type: 'GB',
        regulation: '规定了该类食品原料中铅、砷、镉等污染物的限量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '安全。',
    description: '本品是常见的基础原料，在配料表中通常以「马铃薯淀粉」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '作为食品原料按生产需要适量使用，无特殊限量要求'
  },
  {
    name: '木薯淀粉',
    alias: ['树薯淀粉'],
    category: 'baseMaterial',
    categoryLabel: '基础原料',
    function: '提供淀粉和增稠。',
    action: '常用于珍珠奶茶的珍珠、粉条和酱料。',
    standards: [
      {
        code: 'GB 2762-2022',
        name: '食品安全国家标准 食品中污染物限量',
        type: 'GB',
        regulation: '规定了该类食品原料中铅、砷、镉等污染物的限量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '安全。',
    description: '本品是常见的基础原料，在配料表中通常以「木薯淀粉」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '作为食品原料按生产需要适量使用，无特殊限量要求'
  },
  {
    name: '可可粉',
    category: 'baseMaterial',
    categoryLabel: '基础原料',
    function: '提供可可风味和色泽。',
    action: '由可可豆加工而成，含可可碱和少量咖啡因。',
    standards: [
      {
        code: 'GB 2762-2022',
        name: '食品安全国家标准 食品中污染物限量',
        type: 'GB',
        regulation: '规定了该类食品原料中铅、砷、镉等污染物的限量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '含少量咖啡因，儿童适量。',
    description: '本品是常见的基础原料，在配料表中通常以「可可粉」标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '作为食品原料按生产需要适量使用，无特殊限量要求'
  },
  {
    name: '乳粉',
    alias: ['奶粉'],
    category: 'baseMaterial',
    categoryLabel: '基础原料',
    function: '提供乳蛋白和乳脂。',
    action: '常用于乳饮料、烘焙和糖果。',
    standards: [
      {
        code: 'GB 2762-2022',
        name: '食品安全国家标准 食品中污染物限量',
        type: 'GB',
        regulation: '规定了该类食品原料中铅、砷、镉等污染物的限量要求。'
      }
    ],
    safetyLevel: 'safe',
    riskDesc: '乳糖不耐受和乳蛋白过敏者需避免。',
    description: '本品是常见的基础原料，在配料表中通常以「乳粉」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '作为食品原料按生产需要适量使用，无特殊限量要求'
  },
  {
    name: '食用香精',
    alias: ['食品用香精'],
    category: 'baseMaterial',
    categoryLabel: '基础原料',
    function: '赋予或增强食品香气。',
    action: '由天然或合成香料调配而成，用量极微。',
    standards: [
      {
        code: 'GB 2760-2014',
        name: '食品安全国家标准 食品添加剂使用标准',
        type: 'GB',
        regulation: '规定了该物质允许使用的食品类别、最大使用量或残留量要求。'
      }
    ],
    safetyLevel: 'caution',
    riskDesc: '合规使用安全，但可掩盖原料品质，建议少吃重香精食品。',
    description: '本品是常见的基础原料，在配料表中通常以「食用香精」或其别名标示，具体使用要求见相关食品安全国家标准。',
    usageLimit: '按 GB 2760-2014 表 A.1 规定的食品类别及最大使用量使用'
  }
];

/**
 * 按名称查询配料
 */
export function findIngredientByName(name: string): Ingredient | undefined {
  return ingredientList.find(
    item => item.name === name || (item.alias && item.alias.includes(name))
  );
}

/**
 * 按关键词搜索配料
 */
export function searchIngredientList(keyword: string) {
  if (!keyword) {
    return ingredientList.map(item => ({
      name: item.name,
      categoryLabel: item.categoryLabel,
      safetyLevel: item.safetyLevel,
      function: item.function
    }));
  }
  const kw = keyword.toLowerCase();
  return ingredientList
    .filter(
      item =>
        item.name.toLowerCase().includes(kw) ||
        (item.alias && item.alias.some(a => a.toLowerCase().includes(kw))) ||
        item.categoryLabel.includes(keyword) ||
        item.function.includes(keyword)
    )
    .map(item => ({
      name: item.name,
      categoryLabel: item.categoryLabel,
      safetyLevel: item.safetyLevel,
      function: item.function
    }));
}
