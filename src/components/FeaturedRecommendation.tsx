
import { ChevronRight } from 'lucide-react';

const FeaturedRecommendation = () => {
  return (
    <div className="pt-8 pb-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">精品推荐</h3>
        <a href="/recommendations" className="flex items-center text-white hover:text-gray-300 transition-colors">
          查看全部 <ChevronRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default FeaturedRecommendation;
