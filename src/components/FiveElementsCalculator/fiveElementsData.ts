
// Define the five elements types
export type Element = 'Metal' | 'Wood' | 'Water' | 'Fire' | 'Earth';

// Sample product recommendations based on elements
export const elementProducts = {
  Metal: {
    id: 101,
    title: '金元素平衡吊坠',
    description: '强化金属元素，促进决断力与精确度',
    price: '¥598',
    image: 'https://images.unsplash.com/photo-1588444837495-c6b5c64ddaa7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    requiresComplementary: true,
    complementaryType: '水晶手串'
  },
  Wood: {
    id: 102,
    title: '木元素生机挂件',
    description: '增强生命力与创造力，促进个人成长',
    price: '¥529',
    image: 'https://images.unsplash.com/photo-1567361295031-7fa82930523d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    requiresComplementary: true,
    complementaryType: '翡翠手串'
  },
  Water: {
    id: 103,
    title: '水元素流动摆件',
    description: '增强智慧与适应性，促进内心平静',
    price: '¥649',
    image: 'https://images.unsplash.com/photo-1584058559566-09898da4366a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    requiresComplementary: true,
    complementaryType: '蓝宝石手串'
  },
  Fire: {
    id: 104,
    title: '火元素能量护符',
    description: '增强热情与动力，促进个人魅力',
    price: '¥579',
    image: 'https://images.unsplash.com/photo-1597780743444-39a3275135ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    requiresComplementary: true,
    complementaryType: '红玛瑙手串'
  },
  Earth: {
    id: 105,
    title: '土元素稳固香炉',
    description: '增强稳定性与耐心，促进内心平衡',
    price: '¥689',
    image: 'https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    requiresComplementary: true,
    complementaryType: '黄水晶手串'
  }
};

// Sample bracelet recommendations
export const braceletRecommendations = [
  {
    id: 201,
    title: '水晶手串',
    description: '增强金属能量，促进清晰思考',
    price: '¥329',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    forElement: 'Metal'
  },
  {
    id: 202,
    title: '翡翠手串',
    description: '增强木元素能量，促进生长与创新',
    price: '¥459',
    image: 'https://images.unsplash.com/photo-1617038260897-43ea1b4a96a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    forElement: 'Wood'
  },
  {
    id: 203,
    title: '蓝宝石手串',
    description: '增强水元素能量，促进智慧与适应性',
    price: '¥399',
    image: 'https://images.unsplash.com/photo-1535632066274-7120a488be91?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    forElement: 'Water'
  },
  {
    id: 204,
    title: '红玛瑙手串',
    description: '增强火元素能量，促进热情与动力',
    price: '¥349',
    image: 'https://images.unsplash.com/photo-1621720911340-0a5371093654?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    forElement: 'Fire'
  },
  {
    id: 205,
    title: '黄水晶手串',
    description: '增强土元素能量，促进稳定与耐心',
    price: '¥379',
    image: 'https://images.unsplash.com/photo-1587467512961-120760940315?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    forElement: 'Earth'
  }
];

// Chinese zodiac hours
export const chineseHours = [
  { value: '23-1', label: '子时 (23:00-1:00)' },
  { value: '1-3', label: '丑时 (1:00-3:00)' },
  { value: '3-5', label: '寅时 (3:00-5:00)' },
  { value: '5-7', label: '卯时 (5:00-7:00)' },
  { value: '7-9', label: '辰时 (7:00-9:00)' },
  { value: '9-11', label: '巳时 (9:00-11:00)' },
  { value: '11-13', label: '午时 (11:00-13:00)' },
  { value: '13-15', label: '未时 (13:00-15:00)' },
  { value: '15-17', label: '申时 (15:00-17:00)' },
  { value: '17-19', label: '酉时 (17:00-19:00)' },
  { value: '19-21', label: '戌时 (19:00-21:00)' },
  { value: '21-23', label: '亥时 (21:00-23:00)' }
];
