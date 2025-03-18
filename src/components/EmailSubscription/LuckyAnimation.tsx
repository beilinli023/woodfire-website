
import React, { useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const LuckyAnimation = () => {
  useEffect(() => {
    // Component cleanup
    return () => {
      // Clean up any animations if needed
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin text-orange-400">
            <Sparkles className="h-24 w-24" />
          </div>
        </div>
        
        <div className="animate-bounce delay-300">
          <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold rounded-full p-8 shadow-lg">
            <span className="text-2xl">恭喜您!</span>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center animate-pulse">
        <p className="text-lg font-semibold">您的幸运之旅即将开始...</p>
      </div>
    </div>
  );
};

export default LuckyAnimation;
