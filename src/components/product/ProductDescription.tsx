
import { Product } from "@/types/product";

interface ProductDescriptionProps {
  product: Product;
}

const ProductDescription = ({ product }: ProductDescriptionProps) => {
  return (
    <div className="my-12 border-t border-gray-800 pt-10">
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
    </div>
  );
};

export default ProductDescription;
