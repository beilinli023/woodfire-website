
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ProductRecommendation from './ProductRecommendation';
import { Element, elementProducts, braceletRecommendations } from './fiveElementsData';
import { HeartPulse } from 'lucide-react';

interface ResultStepProps {
  element: Element;
  onAddToCart: () => void;
}

const ResultStep: React.FC<ResultStepProps> = ({ element, onAddToCart }) => {
  const recommendedProduct = elementProducts[element];
  const complementaryBracelet = braceletRecommendations.find(b => b.forElement === element);

  // Function to trigger the health assessment dialog
  const openHealthAssessment = () => {
    // Find the HealthAssessmentCard dialog trigger and click it
    const healthAssessmentTrigger = document.querySelector('[data-health-assessment-trigger]');
    if (healthAssessmentTrigger) {
      (healthAssessmentTrigger as HTMLElement).click();
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-center">您的五行属性</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-gradient-to-r from-amber-500/20 to-yellow-600/20 p-6 rounded-lg text-center">
          <h3 className="text-3xl font-bold mb-2">
            {element === 'Metal' && '金 (Metal)'}
            {element === 'Wood' && '木 (Wood)'}
            {element === 'Water' && '水 (Water)'}
            {element === 'Fire' && '火 (Fire)'}
            {element === 'Earth' && '土 (Earth)'}
          </h3>
          <p className="text-sm">
            {element === 'Metal' && '您的五行属性为金。金主义气、刚毅、决断、精确。金的人通常思维敏捷、注重细节、办事干练。'}
            {element === 'Wood' && '您的五行属性为木。木主生长、扩展、创造。木的人通常富有创造力、灵活性强、具有前瞻性。'}
            {element === 'Water' && '您的五行属性为水。水主智慧、沟通、适应性。水的人通常聪明睿智、善于应变、富有洞察力。'}
            {element === 'Fire' && '您的五行属性为火。火主热情、动力、活力。火的人通常充满激情、有感染力、精力充沛。'}
            {element === 'Earth' && '您的五行属性为土。土主稳定、耐心、包容。土的人通常踏实可靠、心思细腻、为人和善。'}
          </p>
        </div>
        
        {recommendedProduct && (
          <ProductRecommendation 
            product={recommendedProduct} 
            complementaryBracelet={complementaryBracelet || null}
            onAddToCart={onAddToCart}
          />
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        {/* Footer content if needed */}
      </CardFooter>
    </Card>
  );
};

export default ResultStep;
