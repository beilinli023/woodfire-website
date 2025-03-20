
import { useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "@/components/BackButton";
import Navbar from "@/components/Navbar";
import SidebarNav from "@/components/SidebarNav";
import ProductImageGallery from "@/components/product/ProductImageGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductDescription from "@/components/product/ProductDescription";
import ProductReviews from "@/components/product/ProductReviews";
import ProductPolicies from "@/components/product/ProductPolicies";
import RelatedProducts from "@/components/product/RelatedProducts";
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

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-24 md:pt-32">
        <div className="flex flex-col md:flex-row w-full relative">
          {/* Sidebar Navigation */}
          <div className="w-full md:w-[15%]">
            <SidebarNav />
          </div>
          
          {/* Main content */}
          <div className="w-full md:w-[85%] pb-16 px-4">
            <div className="py-8">
              <BackButton className="mb-6" />
              <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Product Image Gallery */}
                <ProductImageGallery images={product.images} />
                
                {/* Product Info (title, price, variants, add to cart) */}
                <ProductInfo product={product} />
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
      </div>
      
      <Footer />
    </div>
  );
};

export default Product;
