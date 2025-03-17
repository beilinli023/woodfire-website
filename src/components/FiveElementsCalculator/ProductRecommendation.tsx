
import React from 'react';
import { ShoppingCart, Info, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
