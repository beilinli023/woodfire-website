
import { useState } from "react";
import { ShoppingCart, Heart, Share2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Product } from "@/types/product";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");

  const handleAddToCart = () => {
    toast({
      title: "已添加到购物车",
      description: `${quantity} × ${product.title} 已成功添加到购物车`,
    });
  };

  const handleWishlist = () => {
    toast({
      title: "已添加到收藏夹",
      description: `${product.title} 已成功添加到收藏夹`,
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "链接已复制",
      description: "产品链接已复制到剪贴板",
    });
  };

  return (
    <div className="space-y-6">
      {/* Product Category */}
      <div>
        <Badge variant="outline" className="text-xs uppercase tracking-wider">
          {product.category}
        </Badge>
      </div>

      {/* Product Title */}
      <h1 className="text-3xl font-bold">{product.title}</h1>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${
                i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-500"
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-400">({product.reviewCount} 评价)</span>
        <span className="text-sm text-gray-400 ml-2">已售 {product.soldCount}</span>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold">{product.price}</span>
        {product.originalPrice && (
          <span className="text-lg text-gray-400 line-through">
            {product.originalPrice}
          </span>
        )}
        {product.discount && (
          <Badge className="ml-2 bg-red-600">省 {product.discount}</Badge>
        )}
      </div>

      {/* Color Selection */}
      {product.colors && product.colors.length > 0 && (
        <div className="space-y-2">
          <h3 className="font-medium">颜色</h3>
          <RadioGroup
            value={selectedColor}
            onValueChange={setSelectedColor}
            className="flex gap-3"
          >
            {product.colors.map((color) => (
              <div key={color} className="flex items-center gap-2">
                <RadioGroupItem value={color} id={`color-${color}`} />
                <Label htmlFor={`color-${color}`}>{color}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      )}

      {/* Size Selection */}
      {product.sizes && product.sizes.length > 0 && (
        <div className="space-y-2">
          <h3 className="font-medium">规格</h3>
          <RadioGroup
            value={selectedSize}
            onValueChange={setSelectedSize}
            className="flex gap-3"
          >
            {product.sizes.map((size) => (
              <div key={size} className="flex items-center gap-2">
                <RadioGroupItem value={size} id={`size-${size}`} />
                <Label htmlFor={`size-${size}`}>{size}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      )}

      {/* Quantity Selector */}
      <div className="space-y-2">
        <h3 className="font-medium">数量</h3>
        <div className="flex items-center w-32">
          <Select
            value={quantity.toString()}
            onValueChange={(val) => setQuantity(parseInt(val))}
          >
            <SelectTrigger>
              <SelectValue placeholder="选择数量" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-4">
        <Button size="lg" className="flex-1" onClick={handleAddToCart}>
          <ShoppingCart size={20} />
          加入购物车
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={handleWishlist}
          className="h-11 w-11"
        >
          <Heart size={20} />
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={handleShare}
          className="h-11 w-11"
        >
          <Share2 size={20} />
        </Button>
      </div>

      {/* Highlight Features */}
      <div className="mt-6 border-t border-gray-800 pt-6">
        <ul className="space-y-2 text-sm">
          {product.highlights?.map((highlight, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
