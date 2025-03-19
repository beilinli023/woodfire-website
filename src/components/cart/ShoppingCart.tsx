
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { toast } from "@/hooks/use-toast";
import { formatCurrency } from "@/lib/utils";

const ShoppingCart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getTotalItems, 
    getTotalPrice,
    isCartOpen,
    setIsCartOpen
  } = useCart();

  const handleCheckout = () => {
    toast({
      title: "结算功能即将推出",
      description: "我们正在努力完善结算功能，敬请期待！",
    });
  };

  return (
    <Drawer open={isCartOpen} onOpenChange={setIsCartOpen}>
      <DrawerContent className="max-h-[85vh]">
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-xl font-bold flex items-center">
            <ShoppingBag className="mr-2" />
            购物车
            <span className="ml-2 text-sm font-normal text-gray-500">
              ({getTotalItems()} 件商品)
            </span>
          </DrawerTitle>
          <DrawerDescription>
            查看已添加商品并前往结算
          </DrawerDescription>
        </DrawerHeader>
        
        <div className="px-4 overflow-y-auto" style={{ maxHeight: "calc(85vh - 200px)" }}>
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <ShoppingBag className="h-16 w-16 text-gray-400 mb-4" />
              <h3 className="font-medium text-lg">购物车是空的</h3>
              <p className="text-gray-500 mt-2">
                浏览我们的商品并添加到购物车
              </p>
              <Button 
                className="mt-6" 
                variant="outline" 
                onClick={() => setIsCartOpen(false)}
              >
                继续购物
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`} className="flex gap-4 py-4">
                  <div className="h-24 w-24 rounded-md overflow-hidden bg-gray-900 flex-shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium truncate pr-2">
                        {item.product.title}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-500 hover:text-gray-700"
                        aria-label="Remove item"
                      >
                        <X size={18} />
                      </button>
                    </div>
                    
                    {(item.selectedColor || item.selectedSize) && (
                      <div className="text-sm text-gray-500 mt-1">
                        {item.selectedColor && <span>颜色: {item.selectedColor}</span>}
                        {item.selectedColor && item.selectedSize && <span> · </span>}
                        {item.selectedSize && <span>规格: {item.selectedSize}</span>}
                      </div>
                    )}
                    
                    <div className="mt-2 flex justify-between items-center">
                      <span className="font-medium">
                        {item.product.price}
                      </span>
                      
                      <div className="flex items-center border rounded-md">
                        <button
                          onClick={() => {
                            if (item.quantity > 1) {
                              updateQuantity(item.product.id, item.quantity - 1);
                            }
                          }}
                          className="p-1 hover:bg-gray-100"
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-2 min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {cartItems.length > 0 && (
          <DrawerFooter className="px-4">
            <Separator className="my-2" />
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>小计</span>
                <span>¥{formatCurrency(getTotalPrice())}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>运费</span>
                <span>免费</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-medium">
                <span>总计</span>
                <span>¥{formatCurrency(getTotalPrice())}</span>
              </div>
            </div>
            
            <div className="mt-6 space-y-2">
              <Button className="w-full" onClick={handleCheckout}>
                前往结算
              </Button>
              <DrawerClose asChild>
                <Button variant="outline" className="w-full">
                  继续购物
                </Button>
              </DrawerClose>
            </div>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default ShoppingCart;
