
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import SidebarNav from "@/components/SidebarNav";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/data/productData";
import { Heart, Share2, ShoppingCart, Star, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import ProductBadge from "@/components/product/ProductBadge";
import ProductPrice from "@/components/product/ProductPrice";

// 定义排序选项
const sortOptions = [
  { value: "featured", label: "推荐商品" },
  { value: "newest", label: "最新上架" },
  { value: "priceAsc", label: "价格: 低到高" },
  { value: "priceDesc", label: "价格: 高到低" },
  { value: "bestSelling", label: "销量最佳" },
];

// 产品卡片组件
const ProductCard = ({ 
  id, 
  image, 
  title, 
  price, 
  originalPrice, 
  rating, 
  category,
  reviewCount,
  discount,
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const formattedPrice = `¥${price}`;
  const formattedOriginalPrice = originalPrice ? `¥${originalPrice}` : undefined;

  return (
    <Link to={`/product/${id}`} className={`block ${className}`}>
      <div 
        className="group relative overflow-hidden rounded-lg bg-gray-900"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          
          {/* Sale badge */}
          {discount && (
            <Badge 
              variant="default" 
              className="absolute top-3 left-3 bg-red-600 text-white font-semibold"
            >
              省 {discount}
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
          <div className="mt-2">
            <ProductPrice 
              price={formattedPrice}
              originalPrice={formattedOriginalPrice}
              discount={discount}
            />
          </div>
          
          {/* Rating */}
          <div className="mt-3 flex items-center">
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
            <span className="ml-2 text-sm text-gray-400">
              ({reviewCount || Math.floor(Math.random() * 50) + 5})
            </span>
          </div>
          
          <div className="mt-2">
            <ProductBadge category={category} />
          </div>
        </div>
      </div>
    </Link>
  );
};

const Products = () => {
  const [sortOption, setSortOption] = useState("featured");
  const [productsCount, setProductsCount] = useState(0);
  const [sortedProducts, setSortedProducts] = useState([...products]);
  
  // 根据分类过滤商品
  const herbProducts = products.filter(p => 
    p.category === "护身珠" || p.category === "手链" || p.category === "手串");
  
  const blessingProducts = products.filter(p => 
    p.category === "水晶" || !herbProducts.some(hp => hp.id === p.id));

  // 排序商品
  useEffect(() => {
    let result = [...products];
    
    switch (sortOption) {
      case "newest":
        // 假设每个产品都有一个 createdAt 字段
        result = result.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        break;
      case "priceAsc":
        result = result.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case "priceDesc":
        result = result.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case "bestSelling":
        // 假设每个产品都有一个 soldCount 字段
        result = result.sort((a, b) => (b.soldCount || 0) - (a.soldCount || 0));
        break;
      default:
        // featured - 默认排序
        break;
    }
    
    setSortedProducts(result);
  }, [sortOption]);

  // 更新当前显示的产品数量
  useEffect(() => {
    setProductsCount(products.length);
  }, [products]);

  const handleSortChange = (value) => {
    setSortOption(value);
  };

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
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">{productsCount} 件产品</h1>
                
                {/* Sort Dropdown */}
                <div className="w-60">
                  <Select value={sortOption} onValueChange={handleSortChange}>
                    <SelectTrigger className="w-full border-gray-700 bg-transparent">
                      <SelectValue placeholder="排序方式" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-700">
                      {sortOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-8 bg-gray-900">
                  <TabsTrigger value="all">全部商品</TabsTrigger>
                  <TabsTrigger value="herbs">合香珠</TabsTrigger>
                  <TabsTrigger value="blessing">祈福配饰</TabsTrigger>
                </TabsList>
                
                {/* 全部商品 */}
                <TabsContent value="all" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {sortedProducts.map(product => (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        image={product.images[0]}
                        title={product.title}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        rating={product.rating}
                        reviewCount={product.reviewCount}
                        category={product.category}
                        discount={product.discount}
                      />
                    ))}
                  </div>
                  
                  {/* Pagination */}
                  <div className="mt-12">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#" isActive>1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationNext href="#" />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                </TabsContent>
                
                {/* 合香珠 */}
                <TabsContent value="herbs" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {herbProducts
                      .sort((a, b) => {
                        if (sortOption === "priceAsc") return parseFloat(a.price) - parseFloat(b.price);
                        if (sortOption === "priceDesc") return parseFloat(b.price) - parseFloat(a.price);
                        return 0;
                      })
                      .map(product => (
                        <ProductCard
                          key={product.id}
                          id={product.id}
                          image={product.images[0]}
                          title={product.title}
                          price={product.price}
                          originalPrice={product.originalPrice}
                          rating={product.rating}
                          reviewCount={product.reviewCount}
                          category={product.category}
                          discount={product.discount}
                        />
                    ))}
                  </div>
                  
                  {/* Pagination for herbs */}
                  <div className="mt-12">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#" isActive>1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationNext href="#" />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                </TabsContent>
                
                {/* 祈福配饰 */}
                <TabsContent value="blessing" className="mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {blessingProducts
                      .sort((a, b) => {
                        if (sortOption === "priceAsc") return parseFloat(a.price) - parseFloat(b.price);
                        if (sortOption === "priceDesc") return parseFloat(b.price) - parseFloat(a.price);
                        return 0;
                      })
                      .map(product => (
                        <ProductCard
                          key={product.id}
                          id={product.id}
                          image={product.images[0]}
                          title={product.title}
                          price={product.price}
                          originalPrice={product.originalPrice}
                          rating={product.rating}
                          reviewCount={product.reviewCount}
                          category={product.category}
                          discount={product.discount}
                        />
                    ))}
                  </div>
                  
                  {/* Pagination for blessing */}
                  <div className="mt-12">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#" isActive>1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationNext href="#" />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
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
