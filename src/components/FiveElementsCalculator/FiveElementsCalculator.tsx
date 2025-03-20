
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { ChevronRight } from 'lucide-react';
import { calculateElement } from './utils';
import IntroStep from './IntroStep';
import InputStep from './InputStep';
import CalculatingStep from './CalculatingStep';
import ResultStep from './ResultStep';
import { Element } from './fiveElementsData';

interface FiveElementsCalculatorProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const FiveElementsCalculator = ({ 
  open = false, 
  onOpenChange 
}: FiveElementsCalculatorProps) => {
  const [step, setStep] = useState<'intro' | 'input' | 'calculating' | 'result'>('intro');
  const [birthDate, setBirthDate] = useState<Date | undefined>(undefined);
  const [birthHour, setBirthHour] = useState<string>('');
  const [progress, setProgress] = useState(0);
  const [element, setElement] = useState<Element | null>(null);
  const { toast } = useToast();

  const handleStartCalculation = () => {
    if (!birthDate || !birthHour) {
      toast({
        title: "信息不完整",
        description: "请选择您的出生日期和时辰",
        variant: "destructive"
      });
      return;
    }

    // Start the calculation animation
    setStep('calculating');
    
    // Simulate calculation with progress bar
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 5;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        const calculatedElement = calculateElement(birthDate, birthHour);
        setElement(calculatedElement);
        setStep('result');
      }
    }, 100);
  };

  const handleAddToCart = () => {
    toast({
      title: "已添加到购物车",
      description: `${element} 元素产品已成功添加到您的购物车`,
    });
  };

  const handleOpenChange = (newOpen: boolean) => {
    // 当对话框关闭时，重置状态
    if (!newOpen) {
      setStep('intro');
      setBirthDate(undefined);
      setBirthHour('');
      setProgress(0);
      setElement(null);
    }
    
    // 调用父组件的 onOpenChange 回调
    if (onOpenChange) {
      onOpenChange(newOpen);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <span className="hidden">KEEP LUCKY <span className="ml-2">☘️</span></span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        {step === 'intro' && (
          <IntroStep 
            onContinue={() => setStep('input')} 
          />
        )}
        
        {step === 'input' && (
          <InputStep 
            birthDate={birthDate}
            setBirthDate={setBirthDate}
            birthHour={birthHour}
            setBirthHour={setBirthHour}
            onBack={() => setStep('intro')}
            onCalculate={handleStartCalculation}
          />
        )}
        
        {step === 'calculating' && (
          <CalculatingStep 
            progress={progress} 
          />
        )}
        
        {step === 'result' && element && (
          <ResultStep 
            element={element} 
            onAddToCart={handleAddToCart} 
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FiveElementsCalculator;
