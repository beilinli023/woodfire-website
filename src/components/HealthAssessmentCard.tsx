
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Moon, Battery, ShoppingCart, PlusCircle, Info } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const healthQuestions = [
  {
    id: 'insomnia',
    question: '你有失眠吗？',
    icon: <Moon className="h-5 w-5 text-purple-500" />,
    options: ['从不', '偶尔', '经常', '总是']
  },
  {
    id: 'fatigue',
    question: '你会容易疲劳吗？',
    icon: <Battery className="h-5 w-5 text-orange-500" />,
    options: ['从不', '偶尔', '经常', '总是']
  },
  {
    id: 'stress',
    question: '你感到压力大吗？',
    icon: <Moon className="h-5 w-5 text-blue-500" />,
    options: ['从不', '偶尔', '经常', '总是']
  },
  {
    id: 'headache',
    question: '你经常头痛吗？',
    icon: <Moon className="h-5 w-5 text-red-500" />,
    options: ['从不', '偶尔', '经常', '总是']
  },
  {
    id: 'digestion',
    question: '你有消化问题吗？',
    icon: <Moon className="h-5 w-5 text-green-500" />,
    options: ['从不', '偶尔', '经常', '总是']
  }
];

// Product recommendation based on health assessment
const recommendedProducts = [
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

type HealthData = {
  [key: string]: string;
};

const HealthAssessmentCard = () => {
  const [healthData, setHealthData] = useState<HealthData>({});
  const [step, setStep] = useState<'questions' | 'recommendation'>('questions');
  const [recommendedProduct, setRecommendedProduct] = useState<any>(null);
  const { toast } = useToast();

  const handleOptionSelect = (questionId: string, value: string) => {
    setHealthData({ ...healthData, [questionId]: value });
  };

  const getRecommendation = () => {
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

  const handleGetSuggestion = () => {
    const recommendation = getRecommendation();
    setRecommendedProduct(recommendation.product);
    setStep('recommendation');
  };

  const handleAddToCart = () => {
    toast({
      title: "已添加到购物车",
      description: `${recommendedProduct.title}已成功添加到您的购物车`,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="cursor-pointer">KEEP HEALTH 🧘‍♂️</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        {step === 'questions' ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-center">健康评估</CardTitle>
              <CardDescription className="text-center">
                请回答以下问题，我们将为您提供个性化的健康建议
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {healthQuestions.map((q) => (
                  <div key={q.id} className="space-y-2">
                    <div className="flex items-center gap-2">
                      {q.icon}
                      <h3 className="text-md font-medium">{q.question}</h3>
                    </div>
                    <RadioGroup 
                      value={healthData[q.id]} 
                      onValueChange={(value) => handleOptionSelect(q.id, value)}
                      className="flex items-center justify-between"
                    >
                      {q.options.map((option) => (
                        <div key={option} className="flex items-center space-x-1">
                          <RadioGroupItem value={option} id={`${q.id}-${option}`} />
                          <Label htmlFor={`${q.id}-${option}`} className="text-sm">{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button 
                className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
                onClick={handleGetSuggestion}
              >
                获取建议
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-center">您的健康建议</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <p className="text-sm leading-relaxed">{getRecommendation().text}</p>
              </div>
              
              {recommendedProduct && (
                <div className="border rounded-lg p-4 space-y-4">
                  <h3 className="font-semibold text-lg">推荐产品</h3>
                  <div className="flex gap-4">
                    <div className="min-w-[80px] h-[80px] rounded-md overflow-hidden">
                      <img 
                        src={recommendedProduct.image} 
                        alt={recommendedProduct.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <h4 className="font-medium">{recommendedProduct.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {recommendedProduct.description}
                        </p>
                      </div>
                      <p className="font-bold text-purple-600 dark:text-purple-400">
                        {recommendedProduct.price}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-2 justify-between">
              <Button 
                variant="outline" 
                className="border-purple-500 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                onClick={() => window.location.href = `/product/${recommendedProduct.id}`}
              >
                <Info className="mr-2 h-4 w-4" />
                查看详情
              </Button>
              <Button 
                className="bg-purple-600 hover:bg-purple-700"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                加入购物车
              </Button>
              <Button 
                variant="ghost" 
                className="text-purple-600 hover:text-purple-700"
                onClick={() => window.location.href = '/categories/health'}
              >
                <PlusCircle className="mr-2 h-4 w-4" />
                浏览更多
              </Button>
            </CardFooter>
          </Card>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default HealthAssessmentCard;
