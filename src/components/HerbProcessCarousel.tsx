
import React, { useEffect, useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
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
  
  // Handle autoplay with custom hook
  useInterval(
    () => {
      if (isPlaying) {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    },
    isPlaying ? autoplayInterval : null
  );

  return (
    <div className="my-8 relative">
      <Carousel 
        className="w-full" 
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 z-10"></div>
                {image.description && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-sm">
                    {image.description}
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-between mt-4">
          <CarouselPrevious className="relative inset-0 translate-y-0 bg-black/50 backdrop-blur-sm text-white hover:bg-black/70" />
          <div className="text-center text-sm">
            <span className="text-white/80">
              {currentSlide + 1} / {images.length}
            </span>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="ml-4 text-white/80 hover:text-white"
            >
              {isPlaying ? "暂停" : "播放"}
            </button>
          </div>
          <CarouselNext className="relative inset-0 translate-y-0 bg-black/50 backdrop-blur-sm text-white hover:bg-black/70" />
        </div>
      </Carousel>
    </div>
  );
};

export default HerbProcessCarousel;
