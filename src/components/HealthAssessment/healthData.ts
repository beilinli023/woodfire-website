
import { Moon, Battery, ShoppingCart, PlusCircle, Info } from 'lucide-react';
import React from 'react';

export type HealthQuestion = {
  id: string;
  question: string;
  icon: React.ComponentType<any>;
  options: string[];
};

export const healthQuestions: HealthQuestion[] = [
  {
    id: 'insomnia',
    question: '你有失眠吗？',
    icon: Moon,
    options: ['从不', '偶尔', '经常', '总是']
  },
  {
    id: 'fatigue',
    question: '你会容易疲劳吗？',
    icon: Battery,
    options: ['从不', '偶尔', '经常', '总是']
  },
  {
    id: 'stress',
    question: '你感到压力大吗？',
    icon: Moon,
    options: ['从不', '偶尔', '经常', '总是']
  },
  {
    id: 'headache',
    question: '你经常头痛吗？',
    icon: Moon,
    options: ['从不', '偶尔', '经常', '总是']
  },
  {
    id: 'digestion',
    question: '你有消化问题吗？',
    icon: Moon,
    options: ['从不', '偶尔', '经常', '总是']
  }
];

export type HealthData = {
  [key: string]: string;
};

export type RecommendedProduct = {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  for: string[];
};

// Product recommendation based on health assessment
export const recommendedProducts: RecommendedProduct[] = [
  {
    id: 1,
    title: '灵芝舒眠胶囊',
    description: '提升睡眠质量，缓解失眠问题',
    price: '¥389',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2',
    for: ['insomnia', 'stress']
  },
  {
    id: 2,
    title: '人参活力补充剂',
    description: '增强体力，缓解疲劳症状',
    price: '¥459',
    image: 'https://images.unsplash.com/photo-1607690424560-35d7c8b46d0a',
    for: ['fatigue']
  },
  {
    id: 3,
    title: '天然草本舒缓茶',
    description: '缓解压力，促进放松',
    price: '¥299',
    image: 'https://images.unsplash.com/photo-1584283367830-7e35ff621a9c',
    for: ['stress', 'headache']
  },
  {
    id: 4,
    title: '头部按摩精油',
    description: '缓解头痛，促进血液循环',
    price: '¥349',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    for: ['headache']
  },
  {
    id: 5,
    title: '消化酵素复合物',
    description: '改善消化功能，减轻胃部不适',
    price: '¥429',
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8',
    for: ['digestion']
  }
];
