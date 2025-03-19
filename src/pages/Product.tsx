
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import VerticalNav from "@/components/VerticalNav";
import ProductImageGallery from "@/components/product/ProductImageGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductDescription from "@/components/product/ProductDescription";
import ProductReviews from "@/components/product/ProductReviews";
import ProductPolicies from "@/components/product/ProductPolicies";
import RelatedProducts from "@/components/product/RelatedProducts";
import HerbProcessCarousel from "@/components/HerbProcessCarousel";
import Footer from "@/components/Footer";
import { products } from "@/data/productData";

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState(() => {
    // If id is not provided, return the first product
    if (!id) return products[0];
    
    // Find product by id or return first product
    const foundProduct = products.find(p => p.id.toString() === id);
    return foundProduct || products[0];
  });

  // Sample herb process images for the carousel
  const herbProcessImages = [
    {
      src: product.images[0],
      alt: "种植过程",
      description: "种植过程：精选优质土壤，种植香草植物"
    },
    {
      src: product.images.length > 1 ? product.images[1] : product.images[0],
      alt: "采摘过程",
      description: "采摘过程：选择最佳时机，手工采摘新鲜药材"
    },
    {
      src: product.images.length > 2 ? product.images[2] : product.images[0],
      alt: "清洗过程",
      description: "清洗过程：纯净水源，细致清洁每一味药材"
    },
    {
      src: product.images.length > 3 ? product.images[3] : product.images[0],
      alt: "蒸煮过程",
      description: "蒸煮过程：传统工艺，精心掌控火候和时间"
    },
    {
      src: product.images.length > 4 ? product.images[4] : product.images[0],
      alt: "晾晒过程",
      description: "晾晒过程：自然风干，保留药材有效成分"
    },
    {
      src: product.images.length > 5 ? product.images[5] : product.images[0],
      alt: "切片过程",
      description: "切片过程：精确切割，确保最佳药效释放"
    },
    {
      src: product.images.length > 6 ? product.images[6] : product.images[0],
      alt: "制作过程",
      description: "制作过程：手工编织，每一颗珠子都经过严格筛选"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="max-w-screen-xl mx-auto px-4 flex">
        {/* Left sidebar */}
        <div className="hidden md:block md:w-1/5 h-full bg-black/50 backdrop-blur-md sticky top-16">
          <VerticalNav />
        </div>
        
        {/* Main content */}
        <div className="w-full md:w-4/5 pb-16">
          <div className="py-8">
            <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Product Image Gallery */}
              <ProductImageGallery images={product.images} />
              
              {/* Product Info (title, price, variants, add to cart) */}
              <ProductInfo product={product} />
            </div>
            
            {/* Herb Process Carousel */}
            <div className="my-10 border-t border-gray-800 pt-10">
              <h2 className="text-2xl font-bold mb-6">香方手串制作过程</h2>
              <HerbProcessCarousel images={herbProcessImages} autoplayInterval={2000} />
            </div>
            
            {/* Product Description & Details */}
            <ProductDescription product={product} />
            
            {/* Product Reviews */}
            <ProductReviews reviews={product.reviews} />
            
            {/* Shipping, payment and return policies */}
            <ProductPolicies />
            
            {/* Related Products */}
            <RelatedProducts categoryId={product.categoryId} currentProductId={product.id} />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Product;
