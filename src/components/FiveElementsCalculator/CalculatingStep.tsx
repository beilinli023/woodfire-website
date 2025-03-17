
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface CalculatingStepProps {
  progress: number;
}

const CalculatingStep: React.FC<CalculatingStepProps> = ({ progress }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-center">测算中...</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-8 py-8">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-4 border-t-amber-500 border-r-green-500 border-b-blue-500 border-l-red-500 animate-spin"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 animate-pulse flex items-center justify-center text-2xl">
              五行
            </div>
          </div>
        </div>
        
        <div className="w-full space-y-2">
          <Progress value={progress} className="h-2" />
          <p className="text-center text-sm text-muted-foreground">
            根据古代智慧计算您的五行属性...
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalculatingStep;
