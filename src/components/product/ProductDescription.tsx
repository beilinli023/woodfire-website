
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "@/types/product";

interface ProductDescriptionProps {
  product: Product;
}

const ProductDescription = ({ product }: ProductDescriptionProps) => {
  return (
    <div className="my-12 border-t border-gray-800 pt-10">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="description">商品详情</TabsTrigger>
          <TabsTrigger value="specifications">规格参数</TabsTrigger>
          <TabsTrigger value="usage">使用指南</TabsTrigger>
        </TabsList>
        
        <TabsContent value="description" className="mt-6">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-bold">商品介绍</h3>
            <div className="mt-4 space-y-4">
              {product.description?.map((paragraph, idx) => (
                <p key={idx} className="text-gray-300">{paragraph}</p>
              ))}
            </div>
            
            {/* Product images */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.descriptionImages?.map((image, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Product detail ${idx + 1}`} 
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="specifications" className="mt-6">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-bold">规格参数</h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {product.specifications?.map((spec, idx) => (
                <div key={idx} className="flex border-b border-gray-800 pb-2">
                  <div className="w-1/3 text-gray-400">{spec.name}</div>
                  <div className="w-2/3">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="usage" className="mt-6">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-bold">使用指南</h3>
            <div className="mt-4">
              <ol className="list-decimal pl-6 space-y-4">
                {product.usageGuide?.map((step, idx) => (
                  <li key={idx} className="text-gray-300">{step}</li>
                ))}
              </ol>
            </div>
            
            {/* Care instructions */}
            {product.careInstructions && (
              <div className="mt-8">
                <h4 className="text-lg font-semibold">保养说明</h4>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  {product.careInstructions.map((instruction, idx) => (
                    <li key={idx} className="text-gray-300">{instruction}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductDescription;
