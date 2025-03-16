
import { useState } from 'react';

interface CategoryItemProps {
  image: string;
  title: string;
  count: number;
  backgroundPosition?: string;
}

const CategoryItem = ({ image, title, count, backgroundPosition = 'center' }: CategoryItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative overflow-hidden rounded-lg h-80 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 z-10" />
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        style={{ objectPosition: backgroundPosition }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/80">{count}+ 产品</p>
        <button className={`mt-4 btn-outline opacity-0 transform translate-y-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : ''
        }`}>
          探索系列
        </button>
      </div>
    </div>
  );
};

const CategorySection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">探索类别</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CategoryItem 
          image="https://images.unsplash.com/photo-1504893524553-b855bce32c67"
          title="佛珠手链"
          count={128}
        />
        <CategoryItem 
          image="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
          title="能量石"
          count={95}
          backgroundPosition="top"
        />
        <CategoryItem 
          image="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
          title="灵性饰品"
          count={152}
        />
      </div>
    </section>
  );
};

export default CategorySection;
