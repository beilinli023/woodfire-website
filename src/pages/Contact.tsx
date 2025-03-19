
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: '姓名至少需要2个字符',
  }),
  email: z.string().email({
    message: '请输入有效的电子邮箱地址',
  }),
  phone: z.string().optional(),
  subject: z.string().min(5, {
    message: '主题至少需要5个字符',
  }),
  message: z.string().min(10, {
    message: '消息至少需要10个字符',
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      // Simulate API call with setTimeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form data submitted:', data);
      toast({
        title: "提交成功",
        description: "我们已收到您的消息，将尽快回复您",
      });
      
      setSubmitted(true);
      form.reset();
    } catch (error) {
      toast({
        title: "提交失败",
        description: "请稍后再试",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">联系我们</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              如有任何问题或建议，请随时与我们联系。我们将尽快回复您。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-semibold mb-6">联系方式</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg">地址</h3>
                  <p className="text-gray-600 mt-1">中国，北京市，朝阳区</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg">电子邮箱</h3>
                  <p className="text-gray-600 mt-1">info@example.com</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg">电话</h3>
                  <p className="text-gray-600 mt-1">+86 123 4567 8901</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg">营业时间</h3>
                  <p className="text-gray-600 mt-1">周一至周五: 9:00 - 18:00</p>
                  <p className="text-gray-600">周六至周日: 10:00 - 16:00</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              {submitted ? (
                <Alert className="bg-green-50 mb-6">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <AlertDescription className="ml-2">
                    感谢您的留言！我们已收到您的消息，将尽快与您联系。
                  </AlertDescription>
                </Alert>
              ) : null}
              
              <h2 className="text-2xl font-semibold mb-6">发送消息</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>姓名 *</FormLabel>
                          <FormControl>
                            <Input placeholder="您的姓名" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>电子邮箱 *</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>电话号码 (选填)</FormLabel>
                        <FormControl>
                          <Input placeholder="您的联系电话" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>主题 *</FormLabel>
                        <FormControl>
                          <Input placeholder="消息主题" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>消息内容 *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="请在此输入您的消息..." 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full">
                    {form.formState.isSubmitting ? "提交中..." : "发送消息"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
