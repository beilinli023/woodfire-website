
import { Badge } from "@/components/ui/badge";

interface ProductPriceProps {
  price: string;
  originalPrice?: string;
  discount?: string;
}

const ProductPrice = ({ price, originalPrice, discount }: ProductPriceProps) => {
  return (
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
  );
};

export default ProductPrice;
