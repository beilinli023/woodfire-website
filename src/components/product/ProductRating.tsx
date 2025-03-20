
import { Star } from "lucide-react";

interface ProductRatingProps {
  rating: number;
  reviewCount: number;
  soldCount: number;
}

const ProductRating = ({ rating, reviewCount, soldCount }: ProductRatingProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-500"
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-gray-400">({reviewCount} 评价)</span>
      <span className="text-sm text-gray-400 ml-2">已售 {soldCount}</span>
    </div>
  );
};

export default ProductRating;
