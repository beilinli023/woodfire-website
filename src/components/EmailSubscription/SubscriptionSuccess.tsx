
import React from 'react';
import { Check } from 'lucide-react';

interface SubscriptionSuccessProps {
  email: string;
}

const SubscriptionSuccess = ({ email }: SubscriptionSuccessProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-8 animate-fade-in">
      <div className="bg-green-100 rounded-full p-3 mb-4">
        <Check className="h-8 w-8 text-green-600" />
      </div>
      
      <h3 className="text-xl font-bold text-center mb-2">订阅成功!</h3>
      
      <p className="text-center text-gray-600 mb-4">
        感谢您的订阅! 我们已将确认邮件发送至:
      </p>
      
      <p className="font-semibold text-purple-600 mb-4">{email}</p>
      
      <div className="text-center text-sm text-gray-500 max-w-xs">
        <p>请查收您的邮箱，我们会将中国古老智慧、优惠折扣和精美赠品信息发送给您。</p>
      </div>
    </div>
  );
};

export default SubscriptionSuccess;
