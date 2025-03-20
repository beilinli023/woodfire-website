
import { Product } from "@/types/product";
import Image from "@/components/ui/image";

interface ProductDescriptionProps {
  product: Product;
}

const ProductDescription = ({ product }: ProductDescriptionProps) => {
  return (
    <div className="my-12 border-t border-gray-800 pt-10">
      <div className="prose prose-invert max-w-none">
        <h3 className="text-xl font-bold">使用指南</h3>
        
        {/* 介绍文字 */}
        <p className="mt-4 text-gray-300">
          为了让您获得最佳的使用体验，我们精心准备了详细的使用指南。请按照以下步骤正确使用和保养您的产品，以确保其能够发挥最大的功效并延长使用寿命。
        </p>
        
        {/* 步骤指南 */}
        <div className="mt-6">
          <ol className="list-decimal pl-6 space-y-6">
            {product.usageGuide?.map((step, idx) => (
              <li key={idx} className="text-gray-300">
                <div className="font-medium text-white">{step}</div>
                {product.usageGuideImages && product.usageGuideImages[idx] && (
                  <div className="mt-3 max-w-lg">
                    <img 
                      src={product.usageGuideImages[idx]} 
                      alt={`使用步骤 ${idx + 1}`} 
                      className="rounded-lg w-full object-cover"
                    />
                    <p className="text-sm text-gray-400 mt-2 italic">
                      {product.usageGuideImageDescriptions?.[idx] || `步骤 ${idx + 1} 示意图`}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
        
        {/* 使用提示 */}
        <div className="mt-8 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
          <h4 className="text-lg font-semibold flex items-center">
            <span className="mr-2">💡</span> 使用小贴士
          </h4>
          <p className="mt-2 text-gray-300">
            定期清洁您的佛珠可以维持其光泽和能量。建议在满月时将佛珠置于月光下充能，这将有助于恢复和增强其护身效果。
          </p>
        </div>
        
        {/* 适用场景图片展示 */}
        {product.usageScenesImages && product.usageScenesImages.length > 0 && (
          <div className="mt-10">
            <h4 className="text-lg font-semibold mb-4">适用场景</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.usageScenesImages.map((image, idx) => (
                <div key={idx} className="relative">
                  <img 
                    src={image} 
                    alt={`适用场景 ${idx + 1}`} 
                    className="rounded-lg w-full h-40 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 rounded-b-lg">
                    <p className="text-sm text-white">
                      {product.usageScenesDescriptions?.[idx] || `适用场景 ${idx + 1}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
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
    </div>
  );
};

export default ProductDescription;
