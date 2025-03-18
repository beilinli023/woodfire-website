
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Gift, Sparkles } from "lucide-react";
import SubscriptionSuccess from './SubscriptionSuccess';
import LuckyAnimation from './LuckyAnimation';
import { useToast } from '@/hooks/use-toast';

interface EmailSubscriptionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EmailSubscriptionDialog = ({ open, onOpenChange }: EmailSubscriptionDialogProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "请输入有效的邮箱地址",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Show lucky animation immediately after validating email
    setTimeout(() => {
      setShowAnimation(true);
      setIsSubmitting(false);
    }, 300);
  };

  const handleAnimationComplete = () => {
    setShowAnimation(false);
    setShowSuccess(true);
    
    // Auto close dialog after success
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  const handleClose = () => {
    // Reset state when closing
    setTimeout(() => {
      setEmail('');
      setIsSubmitting(false);
      setShowAnimation(false);
      setShowSuccess(false);
    }, 300);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        {!showAnimation && !showSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-center text-xl font-bold">
                订阅我们的通讯
              </DialogTitle>
            </DialogHeader>
            
            <div className="flex flex-col items-center space-y-4 py-4">
              <div className="rounded-full bg-purple-100 p-3">
                <Mail className="h-6 w-6 text-purple-600" />
              </div>
              
              <p className="text-center text-sm text-gray-600">
                输入您的邮箱，<span className="font-bold text-green-600">免费</span>获取：
              </p>
              
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-purple-500" />
                  <span>中国古老智慧的独家资讯</span>
                </li>
                <li className="flex items-center gap-2">
                  <Gift className="h-4 w-4 text-purple-500" />
                  <span>会员专属折扣活动</span>
                </li>
                <li className="flex items-center gap-2">
                  <Gift className="h-4 w-4 text-purple-500" />
                  <span>精美赠品</span>
                </li>
              </ul>
              
              <div className="w-full max-w-sm">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                  <Input
                    type="email"
                    placeholder="您的邮箱地址"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "订阅中..." : (
                      <>
                        <span className="mr-1">免费订阅</span>
                        <span className="text-yellow-200 font-bold">FREE</span>
                      </>
                    )}
                  </Button>
                </form>
              </div>
              
              <p className="text-xs text-gray-500 text-center mt-3">
                我们尊重您的隐私，不会发送垃圾邮件
              </p>
            </div>
          </>
        ) : showAnimation ? (
          <LuckyAnimation onComplete={handleAnimationComplete} />
        ) : (
          <SubscriptionSuccess email={email} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EmailSubscriptionDialog;
