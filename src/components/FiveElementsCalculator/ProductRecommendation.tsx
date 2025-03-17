
import React from 'react';
import { ShoppingCart, Info, PlusCircle, HeartPulse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Element } from './fiveElementsData';

interface ProductProps {
  product: {
    id: number;
    title: string;
    description: string;
    price: string;
    image: string;
    requiresComplementary?: boolean;
    complementaryType?: string;
  };
  complementaryBracelet: {
    id: number;
    title: string;
    description: string;
    price: string;
    image: string;
    forElement: Element;
  } | null;
  onAddToCart: () => void;
}

const ProductRecommendation: React.FC<ProductProps> = ({ 
  product, 
  complementaryBracelet,
  onAddToCart 
}) => {
  // Function to trigger the health assessment dialog
  const openHealthAssessment = () => {
    // Find the HealthAssessmentCard dialog trigger and click it
    const healthAssessmentTrigger = document.querySelector('[data-health-assessment-trigger]');
    if (healthAssessmentTrigger) {
      (healthAssessmentTrigger as HTMLElement).click();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium text-lg mb-3">根据您的五行属性，我们推荐：</h3>
        <div className="border rounded-lg p-4 space-y-4">
          <div className="flex gap-4">
            <div className="min-w-[100px] h-[100px] rounded-md overflow-hidden">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-medium">{product.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {product.description}
                </p>
                {product.requiresComplementary && (
                  <div className="mt-2 text-xs text-amber-600 dark:text-amber-400 font-medium">
                    注意：此商品不能单独销售，需搭配{product.complementaryType}一起使用
                  </div>
                )}
              </div>
              <p className="font-bold text-amber-600 dark:text-amber-400">
                {product.price}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {complementaryBracelet && (
        <>
          {/* Health Assessment Tip */}
          <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg border border-purple-200 dark:border-purple-800 flex items-center gap-2">
            <HeartPulse className="text-purple-500 h-5 w-5 flex-shrink-0" />
            <p className="text-sm flex-grow">
              挑选一款更适合您体质的手串？
              <button 
                onClick={openHealthAssessment}
                className="ml-1 text-purple-600 font-medium hover:underline"
              >
                点击"评价"
              </button>
              后会自动为您推荐适合您体质的手串。
            </p>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-lg">推荐搭配的手串：</h3>
              <Button 
                variant="link" 
                className="text-amber-600 p-0 h-auto"
                onClick={() => window.location.href = '/categories/bracelets'}
              >
                查看全部手串 <PlusCircle className="ml-1 h-3 w-3" />
              </Button>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex gap-4">
                <div className="min-w-[80px] h-[80px] rounded-md overflow-hidden">
                  <img 
                    src={complementaryBracelet.image} 
                    alt={complementaryBracelet.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="font-medium">{complementaryBracelet.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {complementaryBracelet.description}
                    </p>
                  </div>
                  <p className="font-bold text-amber-600 dark:text-amber-400">
                    {complementaryBracelet.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="flex flex-col sm:flex-row gap-2 justify-between">
        <Button 
          variant="outline" 
          className="border-amber-500 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20"
          onClick={() => window.location.href = `/product/${product.id}`}
        >
          <Info className="mr-2 h-4 w-4" />
          查看详情
        </Button>
        <Button 
          className="bg-amber-600 hover:bg-amber-700"
          onClick={onAddToCart}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          加入购物车
        </Button>
        <Button 
          variant="ghost" 
          className="text-amber-600 hover:text-amber-700"
          onClick={() => window.location.href = '/categories/lucky'}
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          浏览更多
        </Button>
      </div>
    </div>
  );
};

export default ProductRecommendation;
