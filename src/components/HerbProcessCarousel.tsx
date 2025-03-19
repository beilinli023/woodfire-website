
import React, { useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useInterval } from "@/hooks/use-interval";

interface HerbProcessCarouselProps {
  images: Array<{
    src: string;
    alt: string;
    description?: string;
  }>;
  autoplayInterval?: number;
}

const HerbProcessCarousel = ({ 
  images,
  autoplayInterval = 2000 
}: HerbProcessCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [api, setApi] = useState<CarouselApi | null>(null);
  
  // Update current slide when carousel changes
  React.useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);
  
  // Handle autoplay with custom hook
  useInterval(
    () => {
      if (isPlaying && api) {
        api.scrollNext();
      }
    },
    isPlaying ? autoplayInterval : null
  );

  return (
    <div className="relative h-full">
      <Carousel 
        setApi={setApi}
        className="w-full h-full" 
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative h-full rounded-lg overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
                {image.description && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-sm">
                    {image.description}
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom navigation controls that match the design in the image */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 z-10">
          <CarouselPrevious className="relative inset-0 translate-y-0 h-12 w-12 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 border-0">
            <ChevronLeft size={24} />
          </CarouselPrevious>
          
          <div className="flex items-center bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-white font-medium">
              {currentSlide + 1} / {images.length}
            </span>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="ml-4 text-white hover:text-white/80 flex items-center"
              aria-label={isPlaying ? "暂停" : "播放"}
            >
              {isPlaying ? (
                <>
                  <Pause size={16} className="mr-1" /> 暂停
                </>
              ) : (
                <>
                  <Play size={16} className="mr-1" /> 播放
                </>
              )}
            </button>
          </div>
          
          <CarouselNext className="relative inset-0 translate-y-0 h-12 w-12 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 border-0">
            <ChevronRight size={24} />
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  );
};

export default HerbProcessCarousel;
