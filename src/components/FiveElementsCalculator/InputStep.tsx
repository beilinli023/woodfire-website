
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState<string>(birthDate ? birthDate.getFullYear().toString() : '');
  const [month, setMonth] = useState<string>(birthDate ? (birthDate.getMonth() + 1).toString() : '');
  const [day, setDay] = useState<string>(birthDate ? birthDate.getDate().toString() : '');
  
  // Changed from number[] to string[] to match the string type in the rest of the component
  const [daysInMonth, setDaysInMonth] = useState<string[]>([]);
  
  // Generate arrays for years, months
  const years = Array.from({ length: 120 }, (_, i) => (currentYear - i).toString());
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  
  // Update days in month when year or month changes
  useEffect(() => {
    if (year && month) {
      const daysCount = new Date(parseInt(year), parseInt(month), 0).getDate();
      // Create string array instead of number array
      setDaysInMonth(Array.from({ length: daysCount }, (_, i) => (i + 1).toString()));
    }
  }, [year, month]);
  
  // Update birthDate when year, month, or day changes
  useEffect(() => {
    if (year && month && day) {
      const newDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      setBirthDate(newDate);
    } else {
      setBirthDate(undefined);
    }
  }, [year, month, day, setBirthDate]);
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-center">输入您的出生信息</CardTitle>
        <CardDescription className="text-center">
          请选择您的出生日期和时辰，我们将为您测算五行属性
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="birth-year">出生年份</Label>
            <Select value={year} onValueChange={setYear}>
              <SelectTrigger id="birth-year">
                <SelectValue placeholder="选择年份" />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {years.map((y) => (
                  <SelectItem key={y} value={y}>{y}年</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="birth-month">出生月份</Label>
            <Select value={month} onValueChange={setMonth}>
              <SelectTrigger id="birth-month">
                <SelectValue placeholder="选择月份" />
              </SelectTrigger>
              <SelectContent>
                {months.map((m) => (
                  <SelectItem key={m} value={m}>{m}月</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="birth-day">出生日期</Label>
            <Select 
              value={day} 
              onValueChange={setDay}
              disabled={!year || !month}
            >
              <SelectTrigger id="birth-day">
                <SelectValue placeholder="选择日期" />
              </SelectTrigger>
              <SelectContent>
                {daysInMonth.map((d) => (
                  <SelectItem key={d} value={d}>{d}日</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="birthHour">出生时辰</Label>
          <Select value={birthHour} onValueChange={setBirthHour}>
            <SelectTrigger className="w-full" id="birthHour">
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
          disabled={!year || !month || !day || !birthHour}
        >
          开始测算
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InputStep;
