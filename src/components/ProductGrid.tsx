
import { useState } from 'react';
import { Heart, Share2, ShoppingCart, Star } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  rating: number;
  category: string;
}

const ProductCard = ({ image, title, price, originalPrice, rating, category }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isSale = originalPrice !== undefined;

  return (
    <div 
      className="group relative overflow-hidden rounded-lg bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        {/* Sale badge */}
        {isSale && (
          <Badge 
            variant="default" 
            className="absolute top-3 left-3 bg-yellow-500 text-black font-semibold"
          >
            Sale
          </Badge>
        )}
      </div>
      
      {/* Quick actions */}
      <div 
        className={`absolute top-4 right-4 flex flex-col space-y-2 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors">
          <Heart size={18} />
        </button>
        <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors">
          <Share2 size={18} />
        </button>
        <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors">
          <ShoppingCart size={18} />
        </button>
      </div>

      {/* Product info */}
      <div className="p-4">
        <h3 className="text-lg font-medium text-white truncate" title={title}>{title}</h3>
        <div className="mt-1">
          <span className="text-white font-bold">{price}</span>
          {originalPrice && (
            <span className="ml-2 text-gray-400 line-through text-sm">{originalPrice}</span>
          )}
        </div>
        
        {/* Rating - now always visible for the first product */}
        <div className="mt-2 flex items-center">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-400">({Math.floor(Math.random() * 100) + 10})</span>
        </div>
        
        <div className="mt-2 text-sm text-gray-400">{category}</div>
      </div>
    </div>
  );
};

const ProductGrid = ({ title, viewAllLink, products }: { title: string, viewAllLink: string, products: ProductCardProps[] }) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
        <a href={viewAllLink} className="text-white hover:text-gray-300 transition-colors">
          查看全部 <span className="ml-1">→</span>
        </a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
