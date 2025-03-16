
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      title: '探索传统中医五行能量',
      subtitle: '精选全球顶级五行能量手串与灵性珠宝',
      element: 'earth',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
      title: '寻找内心的平静与力量',
      subtitle: '每一款手串都蕴含着五行能量的平衡',
      element: 'water',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      title: '与自然五行共鸣的灵性体验',
      subtitle: '连接自然元素，找回生命的平衡',
      element: 'wood',
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

  const getGradientClass = (element) => {
    switch(element) {
      case 'wood': return 'from-wood-light to-wood-dark';
      case 'fire': return 'from-fire-light to-fire-dark';
      case 'earth': return 'from-earth-light to-earth-dark';
      case 'metal': return 'from-metal-light to-metal-dark';
      case 'water': return 'from-water-light to-water-dark';
      default: return 'from-amber-300 to-amber-600';
    }
  };

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
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold max-w-4xl animate-fade-in bg-gradient-to-r ${getGradientClass(slide.element)} text-transparent bg-clip-text font-serif`}>
              {slide.title}
            </h1>
            <p className="mt-4 sm:mt-6 text-xl sm:text-2xl text-white/90 max-w-2xl animate-fade-in" style={{animationDelay: '0.2s'}}>
              {slide.subtitle}
            </p>
            <button className="mt-8 sm:mt-10 btn-primary animate-fade-in" style={{animationDelay: '0.4s'}}>
              立即探索
            </button>
            <div className="mt-6 flex space-x-3 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <span className="element-pill wood-pill">木</span>
              <span className="element-pill fire-pill">火</span>
              <span className="element-pill earth-pill">土</span>
              <span className="element-pill metal-pill">金</span>
              <span className="element-pill water-pill">水</span>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows - moved to right side */}
      <div className="absolute right-6 md:right-10 lg:right-12 top-1/2 transform -translate-y-1/2 z-30 flex flex-col space-y-3">
        <button
          className="text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-amber-500' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
