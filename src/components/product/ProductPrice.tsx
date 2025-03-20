
import { Badge } from "@/components/ui/badge";

interface ProductPriceProps {
  price: string;
  originalPrice?: string;
  discount?: string;
  fragrance?: string; // 香方信息，如：沉香、白檀、乌木
  craftsmanship?: string; // 工艺信息，如：烧
}

const ProductPrice = ({ price, originalPrice, discount, fragrance, craftsmanship }: ProductPriceProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold">{price}</span>
        {originalPrice && (
          <span className="text-lg text-gray-400 line-through">
            {originalPrice}
          </span>
        )}
        {discount && (
          <Badge className="ml-2 bg-red-600">省 {discount}</Badge>
        )}
      </div>
      
      {/* 香方和工艺信息 */}
      {fragrance && (
        <div className="text-sm text-gray-300 mt-2">
          <span className="font-medium">香方：</span>{fragrance}
        </div>
      )}
      {craftsmanship && (
        <div className="text-sm text-gray-300">
          <span className="font-medium">工艺：</span>{craftsmanship}
        </div>
      )}
    </div>
  );
};

export default ProductPrice;
