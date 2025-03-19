
import { Truck, CreditCard, RotateCcw, Shield } from "lucide-react";

const ProductPolicies = () => {
  return (
    <div className="my-12 border-t border-gray-800 pt-10">
      <h2 className="text-2xl font-bold mb-8">购买保障</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Shipping policy */}
        <div className="p-6 bg-gray-900 rounded-lg">
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-gray-800 p-3 rounded-full">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold">配送政策</h3>
          </div>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>• 标准配送：3-5个工作日</li>
            <li>• 加急配送：1-2个工作日</li>
            <li>• 满 ¥299 免运费</li>
            <li>• 支持国际配送</li>
          </ul>
        </div>
        
        {/* Payment options */}
        <div className="p-6 bg-gray-900 rounded-lg">
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-gray-800 p-3 rounded-full">
              <CreditCard className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold">支付方式</h3>
          </div>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>• 支付宝、微信支付</li>
            <li>• 银联卡、信用卡</li>
            <li>• PayPal (国际用户)</li>
            <li>• 支持分期付款</li>
          </ul>
        </div>
        
        {/* Return policy */}
        <div className="p-6 bg-gray-900 rounded-lg">
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-gray-800 p-3 rounded-full">
              <RotateCcw className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold">退换政策</h3>
          </div>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>• 7天无理由退换</li>
            <li>• 30天质量问题全额退款</li>
            <li>• 非质量问题不支持退换</li>
            <li>• 定制商品不可退换</li>
          </ul>
        </div>
        
        {/* Guarantee */}
        <div className="p-6 bg-gray-900 rounded-lg">
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-gray-800 p-3 rounded-full">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold">品质保障</h3>
          </div>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>• 正品保证</li>
            <li>• 全程质检</li>
            <li>• 一年质保</li>
            <li>• 7x24小时客户服务</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPolicies;
