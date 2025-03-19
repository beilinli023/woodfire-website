
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { products } from "@/data/productData";

interface RelatedProductsProps {
  categoryId: number;
  currentProductId: number;
}

const RelatedProducts = ({ categoryId, currentProductId }: RelatedProductsProps) => {
  // Filter products by category and exclude current product
  const relatedProducts = products
    .filter(product => product.categoryId === categoryId && product.id !== currentProductId)
    .slice(0, 6);

  return (
    <div className="my-12 border-t border-gray-800 pt-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">相关推荐</h2>
        <Link 
          to={`/categories/${categoryId}`} 
          className="text-sm flex items-center hover:text-gray-300"
        >
          更多推荐 <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent className="-ml-4">
          {relatedProducts.map(product => (
            <CarouselItem 
              key={product.id} 
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Link to={`/product/${product.id}`}>
                <div className="group relative overflow-hidden rounded-lg bg-gray-900">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="h-48 w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-md font-medium text-white truncate" title={product.title}>
                      {product.title}
                    </h3>
                    <div className="mt-1">
                      <span className="text-white font-bold">{product.price}</span>
                      {product.originalPrice && (
                        <span className="ml-2 text-gray-400 line-through text-sm">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 bg-black/50 backdrop-blur-sm text-white hover:bg-black/70" />
        <CarouselNext className="absolute right-0 bg-black/50 backdrop-blur-sm text-white hover:bg-black/70" />
      </Carousel>
    </div>
  );
};

export default RelatedProducts;
