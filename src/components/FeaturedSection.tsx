
import { ChevronRight } from 'lucide-react';

interface FeaturedItemProps {
  image: string;
  title: string;
  subtitle?: string;
  price?: string;
  discount?: string;
  fullWidth?: boolean;
}

const FeaturedItem = ({ image, title, subtitle, price, discount, fullWidth = false }: FeaturedItemProps) => (
  <div className={`relative group overflow-hidden rounded-lg ${fullWidth ? 'col-span-2' : ''}`}>
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 z-10" />
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      style={{ height: fullWidth ? '500px' : '320px' }}
    />
    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
      <h3 className="text-xl sm:text-2xl font-semibold text-white">{title}</h3>
      {subtitle && <p className="text-white/80 mt-2">{subtitle}</p>}
      {price && (
        <div className="mt-2 flex items-center">
          <span className="text-white font-bold text-lg">{price}</span>
          {discount && (
            <span className="ml-2 text-white/70 line-through text-sm">
              {discount}
            </span>
          )}
        </div>
      )}
      <button className="mt-4 btn-outline">
        查看详情
      </button>
    </div>
  </div>
);

const FeaturedSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">精选系列</h2>
        <a href="/collections" className="flex items-center text-white hover:text-gray-300 transition-colors">
          查看全部 <ChevronRight size={16} className="ml-1" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeaturedItem
          image="https://images.unsplash.com/photo-1458668383970-8ddd3927deed"
          title="西藏珍珠系列"
          subtitle="发现珍藏多年的西藏圣地珠宝"
          fullWidth
        />
        <div className="grid grid-cols-1 gap-6">
          <FeaturedItem
            image="https://images.unsplash.com/photo-1504893524553-b855bce32c67"
            title="尼泊尔手链"
            price="¥1,299"
            discount="¥1,599"
          />
          <FeaturedItem
            image="https://images.unsplash.com/photo-1458668383970-8ddd3927deed"
            title="印度加持佛珠"
            price="¥899"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
