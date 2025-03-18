
import React, { useEffect, useState } from 'react';

const LuckyAnimation = ({ onComplete }: { onComplete?: () => void }) => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const elements = ['金', '木', '水', '火', '土'];
  const elementColors = [
    'text-yellow-500', // 金 - 金色
    'text-green-600',  // 木 - 绿色
    'text-blue-500',   // 水 - 蓝色
    'text-red-500',    // 火 - 红色
    'text-amber-800'   // 土 - 褐色
  ];

  useEffect(() => {
    // After one full rotation (3 seconds), trigger the completion callback
    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
      if (onComplete) {
        onComplete();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);
  
  return (
    <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
      <div className="relative h-64 w-64">
        {/* 旋转的五行元素 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-48 w-48 five-elements-circle">
            {elements.map((element, index) => {
              // 计算每个元素的旋转位置在圆周上均匀分布
              const angle = index * (360 / elements.length);
              const radian = (angle * Math.PI) / 180;
              
              // 使用三角函数计算在圆周上的位置
              const radius = 80; // 圆的半径
              const x = Math.cos(radian) * radius;
              const y = Math.sin(radian) * radius;
              
              return (
                <div 
                  key={element}
                  className={`absolute element-item ${elementColors[index]}`}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    left: '50%',
                    top: '50%',
                  }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-2xl font-bold shadow-lg">
                    {element}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* 中心文字 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 animate-pulse">
            五行相生
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-lg font-semibold">五行之力将为您带来平衡与和谐...</p>
      </div>
    </div>
  );
};

export default LuckyAnimation;
