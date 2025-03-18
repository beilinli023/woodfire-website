
import React from 'react';

const LuckyAnimation = () => {
  const elements = ['金', '木', '水', '火', '土'];
  const elementColors = [
    'text-yellow-500', // 金 - 金色
    'text-green-600',  // 木 - 绿色
    'text-blue-500',   // 水 - 蓝色
    'text-red-500',    // 火 - 红色
    'text-amber-800'   // 土 - 褐色
  ];
  
  return (
    <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
      <div className="relative h-64 w-64">
        {/* 旋转的五行元素 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-48 w-48">
            {elements.map((element, index) => {
              // 计算每个元素的旋转位置
              const angle = (index * 72) + 'deg'; // 360度/5个元素 = 72度
              const animationDelay = (index * 0.2) + 's';
              
              return (
                <div 
                  key={element}
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${elementColors[index]}`}
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}) translateY(-100px) rotate(-${angle})`,
                    animation: 'elementRotate 8s infinite linear',
                    animationDelay: animationDelay
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
      
      {/* We're removing the style jsx tag and using the global CSS animation from index.css */}
    </div>
  );
};

export default LuckyAnimation;
