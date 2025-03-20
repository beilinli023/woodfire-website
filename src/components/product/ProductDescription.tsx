import { Product } from "@/types/product";

interface ProductDescriptionProps {
  product: Product;
}

const ProductDescription = ({ product }: ProductDescriptionProps) => {
  return (
    <div className="my-12 border-t border-gray-800 pt-10">
      <h2 className="text-2xl font-bold mb-8">产品详情</h2>
      <div className="prose prose-invert max-w-none">
        <h3 className="text-xl font-bold mb-4">使用指南</h3>
        
        <div className="mt-4 text-gray-300 space-y-4">
          <p>
            为了让您获得最佳的使用体验，我们精心准备了详细的使用指南。请按照以下步骤正确使用和保养您的产品，以确保其能够发挥最大的功效并延长使用寿命。
          </p>
          
          {product.usageGuide?.map((step, idx) => (
            <p key={idx}>
              <span className="font-medium">{idx + 1}. </span>
              {step}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
