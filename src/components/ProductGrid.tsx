
import { useState } from 'react';
import { Heart, Share2, ShoppingCart } from 'lucide-react';

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
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <div className="mt-1">
          <span className="text-white font-bold">{price}</span>
          {originalPrice && (
            <span className="ml-2 text-gray-400 line-through text-sm">{originalPrice}</span>
          )}
        </div>
        
        {/* Rating */}
        <div className="mt-2 flex items-center">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? 'text-yellow-400' : 'text-gray-600'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 15.934l-6.18 3.245.987-6.83L.868 7.349l6.695-.976L10 .25l2.438 6.123 6.694.976-4.939 5-1.128 6.83z"
                />
              </svg>
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
