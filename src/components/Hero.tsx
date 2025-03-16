
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      title: '探索世界的奇妙之处',
      subtitle: '精选全球顶级圣地的灵性珠宝',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
      title: '寻找内心的平静与力量',
      subtitle: '每一款珠宝都蕴含着独特的能量',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      title: '与自然共鸣的灵性体验',
      subtitle: '连接自然，找回生命的平衡',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-4xl animate-fade-in bg-gradient-to-r from-[#FEF7CD] via-[#FEC6A1] to-[#FDE1D3] text-transparent bg-clip-text">
              {slide.title}
            </h1>
            <p className="mt-4 sm:mt-6 text-xl sm:text-2xl text-white/90 max-w-2xl animate-fade-in" style={{animationDelay: '0.2s'}}>
              {slide.subtitle}
            </p>
            <button className="mt-8 sm:mt-10 btn-primary animate-fade-in" style={{animationDelay: '0.4s'}}>
              立即探索
            </button>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
