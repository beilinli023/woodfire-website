
import React from 'react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { chineseHours } from './fiveElementsData';

interface InputStepProps {
  birthDate: Date | undefined;
  setBirthDate: (date: Date | undefined) => void;
  birthHour: string;
  setBirthHour: (hour: string) => void;
  onBack: () => void;
  onCalculate: () => void;
}

const InputStep: React.FC<InputStepProps> = ({ 
  birthDate, 
  setBirthDate, 
  birthHour, 
  setBirthHour, 
  onBack, 
  onCalculate 
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-center">输入您的出生信息</CardTitle>
        <CardDescription className="text-center">
          请选择您的出生日期和时辰，我们将为您测算五行属性
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="birthdate">出生日期</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !birthDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {birthDate ? format(birthDate, "PPP") : <span>选择日期</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={birthDate}
                onSelect={setBirthDate}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="birthHour">出生时辰</Label>
          <Select value={birthHour} onValueChange={setBirthHour}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="选择时辰" />
            </SelectTrigger>
            <SelectContent>
              {chineseHours.map((hour) => (
                <SelectItem key={hour.value} value={hour.value}>
                  {hour.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={onBack}
        >
          返回
        </Button>
        <Button 
          className="bg-amber-600 hover:bg-amber-700"
          onClick={onCalculate}
        >
          开始测算
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InputStep;
