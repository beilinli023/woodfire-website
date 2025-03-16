
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedSection from '../components/FeaturedSection';
import CategorySection from '../components/CategorySection';
import StorySection from '../components/StorySection';
import TestimonialSection from '../components/TestimonialSection';
import InstagramSection from '../components/InstagramSection';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import VerticalNav from '../components/VerticalNav';

const popularProducts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67',
    title: '尼泊尔天然玛瑙手链',
    price: '¥899',
    originalPrice: '¥1,299',
    rating: 5,
    category: '能量手链'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    title: '西藏老矿红玉项链',
    price: '¥1,599',
    rating: 4,
    category: '灵性项链'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    title: '青金石冥想手链',
    price: '¥599',
    originalPrice: '¥799',
    rating: 5,
    category: '冥想工具'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed',
    title: '印度七脉轮平衡手链',
    price: '¥499',
    rating: 4,
    category: '脉轮平衡'
  }
];

const newProducts = [
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed',
    title: '珊瑚红绒面手串',
    price: '¥699',
    rating: 5,
    category: '限量系列'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67',
    title: '尼泊尔手工铜铃',
    price: '¥399',
    originalPrice: '¥599',
    rating: 4,
    category: '冥想工具'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    title: '波罗的海琥珀项链',
    price: '¥1,299',
    rating: 5,
    category: '能量项链'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    title: '藏式六字真言手环',
    price: '¥799',
    originalPrice: '¥999',
    rating: 4,
    category: '能量手环'
  }
];

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      
      <div className="flex flex-row w-full">
        {/* Fixed Sidebar Navigation - 15% width */}
        <div className="w-[15%] fixed left-0 top-0 h-screen pt-[100vh] bg-black/40 backdrop-blur-sm z-20">
          <VerticalNav />
        </div>
        
        {/* Main Content Area - 85% width, shifted to the right */}
        <div className="w-[85%] ml-[15%]">
          <FeaturedSection />
          <ProductGrid title="热门产品" viewAllLink="/products/popular" products={popularProducts} />
          <CategorySection />
          <ProductGrid title="新品上市" viewAllLink="/products/new" products={newProducts} />
          <StorySection />
          <TestimonialSection />
          <InstagramSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
