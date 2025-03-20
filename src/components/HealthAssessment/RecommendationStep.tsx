
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Info, ShoppingCart, PlusCircle } from 'lucide-react';
import { RecommendedProduct } from './healthData';

interface RecommendationStepProps {
  recommendationText: string;
  product: RecommendedProduct;
  onAddToCart: () => void;
}

const RecommendationStep: React.FC<RecommendationStepProps> = ({
  recommendationText,
  product,
  onAddToCart
}) => {
  // 将建议文本按段落分割，以便更好地显示
  const textParagraphs = recommendationText.split('\n\n');

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-center">您的健康建议</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          {textParagraphs.map((paragraph, index) => (
            <p key={index} className="text-sm leading-relaxed mb-2">{paragraph}</p>
          ))}
        </div>
        
        {product && (
          <div className="border rounded-lg p-4 space-y-4">
            <h3 className="font-semibold text-lg">推荐产品</h3>
            <div className="flex gap-4">
              <div className="min-w-[80px] h-[80px] rounded-md overflow-hidden">
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
                </div>
                <p className="font-bold text-purple-600 dark:text-purple-400">
                  {product.price}
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
          onClick={() => window.location.href = `/product/${product.id}`}
        >
          <Info className="mr-2 h-4 w-4" />
          查看详情
        </Button>
        <Button 
          className="bg-purple-600 hover:bg-purple-700"
          onClick={onAddToCart}
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
  );
};

export default RecommendationStep;
