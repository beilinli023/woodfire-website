
import { useState } from "react";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";
import ProductBadge from "./ProductBadge";
import ProductRating from "./ProductRating";
import ProductPrice from "./ProductPrice";
import ProductVariants from "./ProductVariants";
import ProductActions from "./ProductActions";
import ProductHighlights from "./ProductHighlights";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");
  const { addToCart, setIsCartOpen } = useCart();

  const handleAddToCart = () => {
    addToCart({
      product,
      quantity,
      selectedColor,
      selectedSize
    });
    
    toast({
      title: "已添加到购物车",
      description: `${quantity} × ${product.title} 已成功添加到购物车`,
    });
  };

  const handleBuyNow = () => {
    addToCart({
      product,
      quantity,
      selectedColor,
      selectedSize
    });
    
    // Open cart drawer
    setIsCartOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Product Category */}
      <ProductBadge category={product.category} />

      {/* Product Title */}
      <h1 className="text-3xl font-bold">{product.title}</h1>

      {/* Rating */}
      <ProductRating 
        rating={product.rating} 
        reviewCount={product.reviewCount} 
        soldCount={product.soldCount} 
      />

      {/* Price */}
      <ProductPrice 
        price={product.price} 
        originalPrice={product.originalPrice} 
        discount={product.discount}
        fragrance={product.fragrance}
        craftsmanship={product.craftsmanship}
      />

      {/* Variants Selection */}
      <ProductVariants 
        colors={product.colors}
        sizes={product.sizes}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
        quantity={quantity}
        setSelectedColor={setSelectedColor}
        setSelectedSize={setSelectedSize}
        setQuantity={setQuantity}
      />

      {/* Action Buttons */}
      <ProductActions 
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      {/* Highlight Features */}
      <ProductHighlights highlights={product.highlights} />
    </div>
  );
};

export default ProductInfo;
