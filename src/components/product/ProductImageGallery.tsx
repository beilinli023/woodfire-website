
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductImageGalleryProps {
  images: string[];
}

const ProductImageGallery = ({ images }: ProductImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main image display */}
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-900">
        <img
          src={images[activeIndex]}
          alt={`Product image ${activeIndex + 1}`}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Thumbnail navigation */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "flex-shrink-0 h-16 w-16 rounded-md overflow-hidden border-2",
              activeIndex === index ? "border-white" : "border-transparent"
            )}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="h-full w-full object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
