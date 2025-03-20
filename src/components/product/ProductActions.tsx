
import { ShoppingCart, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface ProductActionsProps {
  onAddToCart: () => void;
  onBuyNow: () => void;
}

const ProductActions = ({ onAddToCart, onBuyNow }: ProductActionsProps) => {
  const handleWishlist = () => {
    toast({
      title: "已添加到收藏夹",
      description: "产品已成功添加到收藏夹",
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
    <div className="flex gap-4 pt-4">
      <Button size="lg" className="flex-1" onClick={onAddToCart}>
        <ShoppingCart size={20} />
        加入购物车
      </Button>
      <Button size="lg" variant="secondary" className="flex-1" onClick={onBuyNow}>
        立即购买
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
  );
};

export default ProductActions;
