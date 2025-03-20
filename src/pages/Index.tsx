
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FiveElementsSection from '../components/FiveElementsSection';
import FeaturedSection from '../components/FeaturedSection';
import TestimonialSection from '../components/TestimonialSection';
import FollowInstagramSection from '../components/FollowInstagramSection';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import SidebarNav from '../components/SidebarNav';
import StorySection from '../components/StorySection';
import { products } from '../data/productData';

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
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1602362513863-111e4599537e',
    title: '藏式六字真言护身珠',
    price: '¥799',
    originalPrice: '¥999',
    rating: 5,
    category: '护身珠'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1611241893603-3c359704e0ee',
    title: '喜马拉雅红玛瑙项链',
    price: '¥1,299',
    originalPrice: '¥1,599',
    rating: 4,
    category: '能量项链'
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
      
      <div className="flex flex-row w-full relative">
        {/* Sidebar Navigation Space */}
        <div className="w-[15%]">
          <SidebarNav />
        </div>
        
        {/* Main Content Area */}
        <div className="w-[85%]">
          <FiveElementsSection />
          <FeaturedSection />
          <ProductGrid title="热门产品" viewAllLink="/products/popular" products={popularProducts} />
          <StorySection />
          <TestimonialSection />
          <FollowInstagramSection />
        </div>
      </div>
      
      {/* Full width footer - separated from the main content */}
      <Footer />
    </div>
  );
};

export default Index;
