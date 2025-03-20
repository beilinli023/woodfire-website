
import { HealthData, recommendedProducts } from './healthData';

// 健康问题严重程度权重
const severityWeights = {
  '从不': 0,
  '偶尔': 1,
  '经常': 2,
  '总是': 3
};

// 健康问题对应的具体建议
const healthIssueAdvice = {
  insomnia: {
    mild: '你偶尔有失眠的情况。建议在睡前减少使用电子设备，尝试喝杯温热的花草茶来帮助放松。',
    moderate: '你经常失眠。建议建立规律的睡眠时间表，睡前尝试冥想或深呼吸，避免咖啡因和酒精。',
    severe: '你的失眠问题较为严重。建议咨询医生，同时可以尝试改善睡眠环境，减少睡前摄入的食物，增加白天的体力活动。'
  },
  fatigue: {
    mild: '你偶尔感到疲劳。尝试增加日常活动量，保持充足的水分摄入，确保睡眠充足。',
    moderate: '你经常感到疲劳。检查你的饮食是否均衡，增加富含铁和维生素B的食物，考虑增加适量运动。',
    severe: '你长期感到严重疲劳。建议咨询医生排除潜在健康问题，同时调整生活方式，保证充足休息，避免过度劳累。'
  },
  stress: {
    mild: '你偶尔感到压力。学习一些简单的放松技巧，如深呼吸或短暂休息，有助于缓解日常压力。',
    moderate: '你经常感到压力大。尝试冥想、瑜伽或其他放松方法，学会管理时间和设定合理目标。',
    severe: '你长期处于高压状态。建议重新评估你的生活和工作平衡，寻求专业支持，学习压力管理技巧。'
  },
  headache: {
    mild: '你偶尔头痛。注意休息，保持充足的水分摄入，避免可能触发头痛的因素如噪音和强光。',
    moderate: '你经常头痛。保持规律的作息时间，注意姿势，减少屏幕时间，考虑进行眼部检查。',
    severe: '你的头痛问题较为严重。建议咨询医生进行专业评估，记录头痛发作的情况和可能的诱因。'
  },
  digestion: {
    mild: '你偶尔有消化问题。注意饮食规律，慢食细嚼，避免过度加工食品。',
    moderate: '你经常有消化不适。增加膳食纤维摄入，减少辛辣和油腻食物，注意进餐时的环境。',
    severe: '你的消化问题较为严重。建议咨询消化科医生，可能需要进一步检查肠胃功能。'
  }
};

export const getRecommendation = (healthData: HealthData) => {
  // 计算每个健康问题的严重程度
  const healthIssuesSeverity = Object.entries(healthData).map(([issueId, response]) => ({
    issueId,
    severity: severityWeights[response] || 0
  }));

  // 按严重程度排序
  const sortedIssues = healthIssuesSeverity
    .filter(issue => issue.severity > 0) // 排除"从不"的回答
    .sort((a, b) => b.severity - a.severity);
  
  // 如果没有明显问题，返回通用建议
  if (sortedIssues.length === 0) {
    return {
      text: '你的整体健康状况看起来不错！不过，建议保持定期的锻炼和均衡的饮食来维持健康。',
      product: recommendedProducts[Math.floor(Math.random() * recommendedProducts.length)]
    };
  }

  // 获取最严重的健康问题
  const primaryIssue = sortedIssues[0];
  
  // 生成个性化建议文本
  let recommendationText = '根据你的健康评估结果，我们为你提供以下建议：\n\n';
  
  // 添加针对每个健康问题的具体建议，按严重程度排序
  sortedIssues.forEach(issue => {
    const { issueId, severity } = issue;
    const advice = healthIssueAdvice[issueId];
    
    if (advice) {
      let severityLevel = 'mild';
      if (severity === 2) severityLevel = 'moderate';
      if (severity === 3) severityLevel = 'severe';
      
      recommendationText += `${advice[severityLevel]}\n\n`;
    }
  });

  // 根据最严重的健康问题推荐产品
  const relevantProducts = recommendedProducts.filter(product => 
    product.for.includes(primaryIssue.issueId)
  );

  // 如果有相关产品，从中随机选择一个；如果没有，随机选择任一产品
  const product = relevantProducts.length > 0 
    ? relevantProducts[Math.floor(Math.random() * relevantProducts.length)]
    : recommendedProducts[Math.floor(Math.random() * recommendedProducts.length)];

  return {
    text: recommendationText.trim(),
    product
  };
};
