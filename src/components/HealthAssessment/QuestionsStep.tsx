
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { healthQuestions, HealthData } from './healthData';

interface QuestionsStepProps {
  healthData: HealthData;
  onOptionSelect: (questionId: string, value: string) => void;
  onSubmit: () => void;
}

const QuestionsStep: React.FC<QuestionsStepProps> = ({ 
  healthData, 
  onOptionSelect, 
  onSubmit 
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-center">健康评估</CardTitle>
        <CardDescription className="text-center">
          请回答以下问题，我们将为您提供个性化的健康建议
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {healthQuestions.map((q) => {
            const Icon = q.icon;
            return (
              <div key={q.id} className="space-y-2">
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-purple-500" />
                  <h3 className="text-md font-medium">{q.question}</h3>
                </div>
                <RadioGroup 
                  value={healthData[q.id]} 
                  onValueChange={(value) => onOptionSelect(q.id, value)}
                  className="flex items-center justify-between"
                >
                  {q.options.map((option) => (
                    <div key={option} className="flex items-center space-x-1">
                      <RadioGroupItem value={option} id={`${q.id}-${option}`} />
                      <Label htmlFor={`${q.id}-${option}`} className="text-sm">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            );
          })}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button 
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
          onClick={onSubmit}
        >
          获取建议
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuestionsStep;
