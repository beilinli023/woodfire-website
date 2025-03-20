
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SidebarNav from "@/components/SidebarNav";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/data/productData";
import { Heart, Share2, ShoppingCart, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProductCard = ({ 
  id, 
  image, 
  title, 
  price, 
  originalPrice, 
  rating, 
  category,
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isSale = originalPrice !== undefined;

  return (
    <Link to={`/product/${id}`} className={`block ${className}`}>
      <div 
        className="group relative overflow-hidden rounded-lg bg-gray-900"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-64 w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          
          {/* Sale badge */}
          {isSale && (
            <Badge 
              variant="default" 
              className="absolute top-3 left-3 bg-yellow-500 text-black font-semibold"
            >
              优惠
            </Badge>
          )}
        </div>
        
        {/* Quick actions */}
        <div 
          className={`absolute top-4 right-4 flex flex-col space-y-2 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors">
            <Heart size={18} />
          </button>
          <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors">
            <Share2 size={18} />
          </button>
          <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors">
            <ShoppingCart size={18} />
          </button>
        </div>

        {/* Product info */}
        <div className="p-4">
          <h3 className="text-lg font-medium text-white truncate" title={title}>{title}</h3>
          <div className="mt-1">
            <span className="text-white font-bold">{price}</span>
            {originalPrice && (
              <span className="ml-2 text-gray-400 line-through text-sm">{originalPrice}</span>
            )}
          </div>
          
          {/* Rating */}
          <div className="mt-2 flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-400">({Math.floor(Math.random() * 100) + 10})</span>
          </div>
          
          <div className="mt-2 text-sm text-gray-400">{category}</div>
        </div>
      </div>
    </Link>
  );
};

const Products = () => {
  // 分类商品
  const herbProducts = products.filter(p => 
    p.category === "护身珠" || p.category === "手链" || p.category === "手串");
  
  const blessingProducts = products.filter(p => 
    p.category === "水晶" || !herbProducts.some(hp => hp.id === p.id));

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
            <div className="max-w-screen-xl mx-auto">
              <h1 className="text-3xl sm:text-4xl font-bold mb-8">所有商品</h1>
              
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-8">
                  <TabsTrigger value="all">全部商品</TabsTrigger>
                  <TabsTrigger value="herbs">合香珠</TabsTrigger>
                  <TabsTrigger value="blessing">祈福配饰</TabsTrigger>
                </TabsList>
                
                {/* 全部商品 */}
                <TabsContent value="all" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map(product => (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        image={product.images[0]}
                        title={product.title}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        rating={product.rating}
                        category={product.category}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                {/* 合香珠 */}
                <TabsContent value="herbs" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {herbProducts.map(product => (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        image={product.images[0]}
                        title={product.title}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        rating={product.rating}
                        category={product.category}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                {/* 祈福配饰 */}
                <TabsContent value="blessing" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blessingProducts.map(product => (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        image={product.images[0]}
                        title={product.title}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        rating={product.rating}
                        category={product.category}
                      />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Products;
