
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import HealthQuestionCard from './HealthAssessment/HealthQuestionCard';
import RecommendationCard from './HealthAssessment/RecommendationCard';
import { healthQuestions, recommendedProducts } from './HealthAssessment/healthQuestionsData';
import { getRecommendation } from './HealthAssessment/recommendationUtils';
import { Product } from './HealthAssessment/types';

const HealthAssessmentCard = () => {
  const [healthData, setHealthData] = useState<Record<string, string>>({});
  const [step, setStep] = useState<'questions' | 'recommendation'>('questions');
  const [recommendedProduct, setRecommendedProduct] = useState<Product | null>(null);
  const { toast } = useToast();

  const handleSubmitQuestions = (data: Record<string, string>) => {
    setHealthData(data);
    const recommendation = getRecommendation(data, recommendedProducts);
    setRecommendedProduct(recommendation.product);
    setStep('recommendation');
  };

  const handleAddToCart = () => {
    if (recommendedProduct) {
      toast({
        title: "已添加到购物车",
        description: `${recommendedProduct.title}已成功添加到您的购物车`,
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="cursor-pointer" data-health-assessment-trigger>KEEP HEALTH 🧘‍♂️</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        {step === 'questions' ? (
          <HealthQuestionCard 
            healthQuestions={healthQuestions} 
            onSubmit={handleSubmitQuestions} 
          />
        ) : (
          <RecommendationCard 
            recommendationText={getRecommendation(healthData, recommendedProducts).text}
            recommendedProduct={recommendedProduct!}
            onAddToCart={handleAddToCart}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default HealthAssessmentCard;
