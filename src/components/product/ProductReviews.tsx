
import { useState } from "react";
import { Star, ThumbsUp, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Review } from "@/types/product";

interface ProductReviewsProps {
  reviews: Review[];
}

const ProductReviews = ({ reviews }: ProductReviewsProps) => {
  const [viewAllReviews, setViewAllReviews] = useState(false);
  
  // Calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  
  // Get rating distribution
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => {
    const count = reviews.filter(review => review.rating === rating).length;
    const percentage = (count / reviews.length) * 100;
    return { rating, count, percentage };
  });

  // Display first 3 reviews or all if viewAllReviews is true
  const displayedReviews = viewAllReviews ? reviews : reviews.slice(0, 3);

  return (
    <div className="my-12 border-t border-gray-800 pt-10">
      <h2 className="text-2xl font-bold mb-8">客户评价</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {/* Average rating */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-4xl font-bold">{averageRating.toFixed(1)}</div>
          <div className="flex mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${
                  i < Math.round(averageRating) ? "text-yellow-400 fill-yellow-400" : "text-gray-500"
                }`}
              />
            ))}
          </div>
          <div className="text-sm text-gray-400 mt-2">基于 {reviews.length} 条评价</div>
        </div>
        
        {/* Rating distribution */}
        <div className="col-span-2">
          {ratingDistribution.map(({ rating, count, percentage }) => (
            <div key={rating} className="flex items-center gap-2 mb-2">
              <div className="w-8 text-sm text-gray-400">{rating}星</div>
              <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-yellow-400"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <div className="w-8 text-sm text-gray-400">{count}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Review list */}
      <div className="space-y-8">
        {displayedReviews.map((review) => (
          <div key={review.id} className="border-b border-gray-800 pb-8">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <img
                  src={review.userAvatar}
                  alt={review.userName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium">{review.userName}</div>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${
                          i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-500"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-400">{review.date}</div>
            </div>
            
            {/* Purchase details */}
            <div className="mt-3 text-sm text-gray-400">
              购买：{review.purchaseDetails}
            </div>
            
            {/* Review content */}
            <div className="mt-3 text-gray-300">{review.content}</div>
            
            {/* Review images */}
            {review.images && review.images.length > 0 && (
              <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                {review.images.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`Review image ${idx + 1}`}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                ))}
              </div>
            )}
            
            {/* Actions */}
            <div className="mt-4 flex gap-4">
              <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-300">
                <ThumbsUp size={14} />
                <span>有用 ({review.helpfulCount})</span>
              </button>
              <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-300">
                <MessageSquare size={14} />
                <span>回复</span>
              </button>
            </div>

            {/* Seller reply */}
            {review.sellerReply && (
              <div className="mt-4 bg-gray-900 p-3 rounded-md">
                <div className="font-medium text-sm">商家回复：</div>
                <div className="mt-1 text-sm text-gray-300">{review.sellerReply}</div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* View more button */}
      {reviews.length > 3 && !viewAllReviews && (
        <div className="text-center mt-8">
          <Button
            variant="outline" 
            onClick={() => setViewAllReviews(true)}
          >
            查看全部 {reviews.length} 条评价
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductReviews;
