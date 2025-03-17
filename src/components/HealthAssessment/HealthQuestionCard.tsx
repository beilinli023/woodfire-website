
import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Moon, Battery } from 'lucide-react';
import { HealthQuestion } from './types';

interface HealthQuestionCardProps {
  healthQuestions: HealthQuestion[];
  onSubmit: (healthData: Record<string, string>) => void;
}

const HealthQuestionCard = ({ healthQuestions, onSubmit }: HealthQuestionCardProps) => {
  const [healthData, setHealthData] = useState<Record<string, string>>({});

  const handleOptionSelect = (questionId: string, value: string) => {
    setHealthData({ ...healthData, [questionId]: value });
  };

  const handleGetSuggestion = () => {
    onSubmit(healthData);
  };

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
          {healthQuestions.map((q) => (
            <div key={q.id} className="space-y-2">
              <div className="flex items-center gap-2">
                {q.icon}
                <h3 className="text-md font-medium">{q.question}</h3>
              </div>
              <RadioGroup 
                value={healthData[q.id]} 
                onValueChange={(value) => handleOptionSelect(q.id, value)}
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
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button 
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
          onClick={handleGetSuggestion}
        >
          获取建议
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HealthQuestionCard;
