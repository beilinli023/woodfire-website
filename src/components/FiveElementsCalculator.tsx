
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, ShoppingCart, Info, PlusCircle, ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

// Define the five elements types
type Element = 'Metal' | 'Wood' | 'Water' | 'Fire' | 'Earth';

// Sample product recommendations based on elements
const elementProducts = {
  Metal: {
    id: 101,
    title: '金元素平衡吊坠',
    description: '强化金属元素，促进决断力与精确度',
    price: '¥598',
    image: 'https://images.unsplash.com/photo-1588444837495-c6b5c64ddaa7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    requiresComplementary: true,
    complementaryType: '水晶手串'
  },
  Wood: {
    id: 102,
    title: '木元素生机挂件',
    description: '增强生命力与创造力，促进个人成长',
    price: '¥529',
    image: 'https://images.unsplash.com/photo-1567361295031-7fa82930523d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    requiresComplementary: true,
    complementaryType: '翡翠手串'
  },
  Water: {
    id: 103,
    title: '水元素流动摆件',
    description: '增强智慧与适应性，促进内心平静',
    price: '¥649',
    image: 'https://images.unsplash.com/photo-1584058559566-09898da4366a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    requiresComplementary: true,
    complementaryType: '蓝宝石手串'
  },
  Fire: {
    id: 104,
    title: '火元素能量护符',
    description: '增强热情与动力，促进个人魅力',
    price: '¥579',
    image: 'https://images.unsplash.com/photo-1597780743444-39a3275135ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    requiresComplementary: true,
    complementaryType: '红玛瑙手串'
  },
  Earth: {
    id: 105,
    title: '土元素稳固香炉',
    description: '增强稳定性与耐心，促进内心平衡',
    price: '¥689',
    image: 'https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    requiresComplementary: true,
    complementaryType: '黄水晶手串'
  }
};

// Sample bracelet recommendations
const braceletRecommendations = [
  {
    id: 201,
    title: '水晶手串',
    description: '增强金属能量，促进清晰思考',
    price: '¥329',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    forElement: 'Metal'
  },
  {
    id: 202,
    title: '翡翠手串',
    description: '增强木元素能量，促进生长与创新',
    price: '¥459',
    image: 'https://images.unsplash.com/photo-1617038260897-43ea1b4a96a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    forElement: 'Wood'
  },
  {
    id: 203,
    title: '蓝宝石手串',
    description: '增强水元素能量，促进智慧与适应性',
    price: '¥399',
    image: 'https://images.unsplash.com/photo-1535632066274-7120a488be91?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    forElement: 'Water'
  },
  {
    id: 204,
    title: '红玛瑙手串',
    description: '增强火元素能量，促进热情与动力',
    price: '¥349',
    image: 'https://images.unsplash.com/photo-1621720911340-0a5371093654?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    forElement: 'Fire'
  },
  {
    id: 205,
    title: '黄水晶手串',
    description: '增强土元素能量，促进稳定与耐心',
    price: '¥379',
    image: 'https://images.unsplash.com/photo-1587467512961-120760940315?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    forElement: 'Earth'
  }
];

// Chinese zodiac hours
const chineseHours = [
  { value: '23-1', label: '子时 (23:00-1:00)' },
  { value: '1-3', label: '丑时 (1:00-3:00)' },
  { value: '3-5', label: '寅时 (3:00-5:00)' },
  { value: '5-7', label: '卯时 (5:00-7:00)' },
  { value: '7-9', label: '辰时 (7:00-9:00)' },
  { value: '9-11', label: '巳时 (9:00-11:00)' },
  { value: '11-13', label: '午时 (11:00-13:00)' },
  { value: '13-15', label: '未时 (13:00-15:00)' },
  { value: '15-17', label: '申时 (15:00-17:00)' },
  { value: '17-19', label: '酉时 (17:00-19:00)' },
  { value: '19-21', label: '戌时 (19:00-21:00)' },
  { value: '21-23', label: '亥时 (21:00-23:00)' }
];

const FiveElementsCalculator = () => {
  const [step, setStep] = useState<'intro' | 'input' | 'calculating' | 'result'>('intro');
  const [birthDate, setBirthDate] = useState<Date | undefined>(undefined);
  const [birthHour, setBirthHour] = useState<string>('');
  const [progress, setProgress] = useState(0);
  const [element, setElement] = useState<Element | null>(null);
  const [recommendedProduct, setRecommendedProduct] = useState<any>(null);
  const { toast } = useToast();

  // Function to determine element based on birth date and hour
  const calculateElement = (date: Date | undefined, hour: string): Element => {
    if (!date) return 'Metal'; // Default

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    // Simple algorithm to determine element (in a real app, this would be more complex based on actual Chinese astrology)
    const yearSum = year % 10;
    const monthDay = (month + day) % 5;
    const hourEffect = hour ? parseInt(hour.split('-')[0]) % 5 : 0;
    
    const elementIndex = (yearSum + monthDay + hourEffect) % 5;
    
    const elements: Element[] = ['Metal', 'Wood', 'Water', 'Fire', 'Earth'];
    return elements[elementIndex];
  };

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
        setRecommendedProduct(elementProducts[calculatedElement]);
        setStep('result');
      }
    }, 100);
  };

  const handleAddToCart = () => {
    toast({
      title: "已添加到购物车",
      description: `${recommendedProduct.title}已成功添加到您的购物车`,
    });
  };

  const complementaryBracelet = recommendedProduct 
    ? braceletRecommendations.find(b => b.forElement === element) 
    : null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="cursor-pointer">KEEP LUCKY ☘️</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        {step === 'intro' && (
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
                onClick={() => setStep('input')}
              >
                开始测算
              </Button>
            </CardFooter>
          </Card>
        )}
        
        {step === 'input' && (
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
                onClick={() => setStep('intro')}
              >
                返回
              </Button>
              <Button 
                className="bg-amber-600 hover:bg-amber-700"
                onClick={handleStartCalculation}
              >
                开始测算
              </Button>
            </CardFooter>
          </Card>
        )}
        
        {step === 'calculating' && (
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
        )}
        
        {step === 'result' && element && (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-center">您的五行属性</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-amber-500/20 to-yellow-600/20 p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold mb-2">
                  {element === 'Metal' && '金 (Metal)'}
                  {element === 'Wood' && '木 (Wood)'}
                  {element === 'Water' && '水 (Water)'}
                  {element === 'Fire' && '火 (Fire)'}
                  {element === 'Earth' && '土 (Earth)'}
                </h3>
                <p className="text-sm">
                  {element === 'Metal' && '您的五行属性为金。金主义气、刚毅、决断、精确。金的人通常思维敏捷、注重细节、办事干练。'}
                  {element === 'Wood' && '您的五行属性为木。木主生长、扩展、创造。木的人通常富有创造力、灵活性强、具有前瞻性。'}
                  {element === 'Water' && '您的五行属性为水。水主智慧、沟通、适应性。水的人通常聪明睿智、善于应变、富有洞察力。'}
                  {element === 'Fire' && '您的五行属性为火。火主热情、动力、活力。火的人通常充满激情、有感染力、精力充沛。'}
                  {element === 'Earth' && '您的五行属性为土。土主稳定、耐心、包容。土的人通常踏实可靠、心思细腻、为人和善。'}
                </p>
              </div>
              
              {recommendedProduct && (
                <div>
                  <h3 className="font-medium text-lg mb-3">根据您的五行属性，我们推荐：</h3>
                  <div className="border rounded-lg p-4 space-y-4">
                    <div className="flex gap-4">
                      <div className="min-w-[100px] h-[100px] rounded-md overflow-hidden">
                        <img 
                          src={recommendedProduct.image} 
                          alt={recommendedProduct.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-between">
                        <div>
                          <h4 className="font-medium">{recommendedProduct.title}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {recommendedProduct.description}
                          </p>
                          {recommendedProduct.requiresComplementary && (
                            <div className="mt-2 text-xs text-amber-600 dark:text-amber-400 font-medium">
                              注意：此商品不能单独销售，需搭配{recommendedProduct.complementaryType}一起使用
                            </div>
                          )}
                        </div>
                        <p className="font-bold text-amber-600 dark:text-amber-400">
                          {recommendedProduct.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {complementaryBracelet && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-lg">推荐搭配的手串：</h3>
                    <Button 
                      variant="link" 
                      className="text-amber-600 p-0 h-auto"
                      onClick={() => window.location.href = '/categories/bracelets'}
                    >
                      查看全部手串 <ChevronRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex gap-4">
                      <div className="min-w-[80px] h-[80px] rounded-md overflow-hidden">
                        <img 
                          src={complementaryBracelet.image} 
                          alt={complementaryBracelet.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-between">
                        <div>
                          <h4 className="font-medium">{complementaryBracelet.title}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {complementaryBracelet.description}
                          </p>
                        </div>
                        <p className="font-bold text-amber-600 dark:text-amber-400">
                          {complementaryBracelet.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-2 justify-between">
              <Button 
                variant="outline" 
                className="border-amber-500 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20"
                onClick={() => window.location.href = `/product/${recommendedProduct.id}`}
              >
                <Info className="mr-2 h-4 w-4" />
                查看详情
              </Button>
              <Button 
                className="bg-amber-600 hover:bg-amber-700"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                加入购物车
              </Button>
              <Button 
                variant="ghost" 
                className="text-amber-600 hover:text-amber-700"
                onClick={() => window.location.href = '/categories/lucky'}
              >
                <PlusCircle className="mr-2 h-4 w-4" />
                浏览更多
              </Button>
            </CardFooter>
          </Card>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FiveElementsCalculator;
