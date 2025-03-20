
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { HealthData } from './healthData';
import { getRecommendation } from './healthUtils';
import QuestionsStep from './QuestionsStep';
import RecommendationStep from './RecommendationStep';

interface HealthAssessmentCardProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const HealthAssessmentCard = ({ open, onOpenChange }: HealthAssessmentCardProps = {}) => {
  const [healthData, setHealthData] = useState<HealthData>({});
  const [step, setStep] = useState<'questions' | 'recommendation'>('questions');
  const [recommendedProduct, setRecommendedProduct] = useState<any>(null);
  const { toast } = useToast();

  const handleOptionSelect = (questionId: string, value: string) => {
    setHealthData({ ...healthData, [questionId]: value });
  };

  const handleGetSuggestion = () => {
    const recommendation = getRecommendation(healthData);
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <span className="cursor-pointer">KEEP HEALTH 🧘‍♂️</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        {step === 'questions' ? (
          <QuestionsStep 
            healthData={healthData}
            onOptionSelect={handleOptionSelect}
            onSubmit={handleGetSuggestion}
          />
        ) : (
          <RecommendationStep 
            recommendationText={getRecommendation(healthData).text}
            product={recommendedProduct}
            onAddToCart={handleAddToCart}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default HealthAssessmentCard;
