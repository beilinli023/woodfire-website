
import { Product } from './types';

export const getRecommendation = (
  healthData: Record<string, string>,
  recommendedProducts: Product[]
) => {
  // Check which health issues have 'often' or 'always' responses
  const healthIssues = Object.entries(healthData)
    .filter(([_, value]) => value === '经常' || value === '总是')
    .map(([key]) => key);

  // If no significant issues found, return generic recommendation
  if (healthIssues.length === 0) {
    return {
      text: '你的整体健康状况看起来不错！不过，建议保持定期的锻炼和均衡的饮食来维持健康。',
      product: recommendedProducts[Math.floor(Math.random() * recommendedProducts.length)]
    };
  }

  // Find product that matches the most significant health issue
  const relevantProducts = recommendedProducts.filter(product => 
    healthIssues.some(issue => product.for.includes(issue))
  );

  const product = relevantProducts.length > 0 
    ? relevantProducts[Math.floor(Math.random() * relevantProducts.length)]
    : recommendedProducts[Math.floor(Math.random() * recommendedProducts.length)];

  // Generate recommendation text based on health issues
  let recommendationText = '根据你的健康评估，我们发现你可能有以下问题：';
  
  if (healthIssues.includes('insomnia')) {
    recommendationText += '失眠可能影响你的生活质量。建议你尝试在睡前减少蓝光暴露，保持规律的睡眠时间，考虑试试冥想或放松技巧。';
  }
  
  if (healthIssues.includes('fatigue')) {
    recommendationText += '疲劳可能是多种因素造成的。确保充足的休息，均衡饮食，适量运动，可能有助于提高你的能量水平。';
  }
  
  if (healthIssues.includes('stress')) {
    recommendationText += '压力过大时，可以尝试深呼吸练习、瑜伽或其他放松活动。确保每天有一些自己的时间。';
  }
  
  if (healthIssues.includes('headache')) {
    recommendationText += '经常头痛可能与压力、睡眠不足或视力问题有关。建议检查这些因素，必要时咨询医生。';
  }
  
  if (healthIssues.includes('digestion')) {
    recommendationText += '消化问题可能与饮食习惯有关。尝试规律进餐，慢食细嚼，增加膳食纤维摄入。';
  }

  return {
    text: recommendationText,
    product
  };
};
