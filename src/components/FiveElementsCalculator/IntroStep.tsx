
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface IntroStepProps {
  onContinue: () => void;
}

const IntroStep: React.FC<IntroStepProps> = ({ onContinue }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-center">五行属性查询</CardTitle>
        <CardDescription className="text-center">
          根据中国的古老传统，您的出生年月日决定了您的五行属性
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <div className="grid grid-cols-5 gap-4 w-full mb-4">
          <div className="flex flex-col items-center p-3 bg-yellow-500/10 rounded-lg">
            <span className="text-2xl mb-1">金</span>
            <span className="text-xs">Metal</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-green-500/10 rounded-lg">
            <span className="text-2xl mb-1">木</span>
            <span className="text-xs">Wood</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-blue-500/10 rounded-lg">
            <span className="text-2xl mb-1">水</span>
            <span className="text-xs">Water</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-red-500/10 rounded-lg">
            <span className="text-2xl mb-1">火</span>
            <span className="text-xs">Fire</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-amber-500/10 rounded-lg">
            <span className="text-2xl mb-1">土</span>
            <span className="text-xs">Earth</span>
          </div>
        </div>
        <p className="text-center text-sm">
          您想了解自己的五行属性吗？这将帮助您找到更适合自己的风水物品和装饰品。
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button 
          className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white"
          onClick={onContinue}
        >
          开始测算
        </Button>
      </CardFooter>
    </Card>
  );
};

export default IntroStep;
