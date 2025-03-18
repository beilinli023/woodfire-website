
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Image, Video, Temple } from 'lucide-react';

const BlessingProcess = () => {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">手串开光仪式</h2>
        <p className="text-gray-300 mb-8">
          手串开光是一种传统的道教仪式，旨在为佩戴者带来好运、健康和保护。开光过程通常由资深道长主持，遵循古老的仪式和传统进行。
          以下是手串开光的主要步骤和意义。
        </p>
        
        <Tabs defaultValue="steps">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="steps" className="flex items-center gap-2">
              <Temple className="h-4 w-4" /> 开光步骤
            </TabsTrigger>
            <TabsTrigger value="photos" className="flex items-center gap-2">
              <Image className="h-4 w-4" /> 图片展示
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="h-4 w-4" /> 视频讲解
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="steps">
            <div className="grid gap-6">
              <Card className="bg-black/40 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl">1. 净化与准备</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    开光前，道长会先进行自身的净化，包括沐浴更衣、净手焚香等。同时，手串也会被放置在特定的位置，用檀香熏蒸，以驱除杂气。
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/40 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl">2. 点燃香火</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    开光仪式正式开始时，道长会点燃香火，向天地神明祷告。香火在道教中被视为沟通人神的媒介，其烟气能够传递信息至神界。
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/40 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl">3. 诵读经文</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    道长会诵读特定的经文，包括《太上洞玄灵宝天尊说清静经》、《太上老君说常清静经》等，以祈求神灵的祝福和保护。
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/40 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl">4. 符咒加持</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    道长会在手串上施加符咒，通常使用朱砂和特制的符水，以赋予手串特殊的能量。这些符咒被认为能够驱邪避凶、保佑平安。
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/40 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl">5. 五行能量注入</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    根据佩戴者的生辰八字，道长会为手串注入相应的五行能量（金、木、水、火、土），以平衡佩戴者的气场和运势。
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/40 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl">6. 完成与祝福</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    仪式的最后，道长会为手串和佩戴者送上最后的祝福，告诫佩戴者应心怀善念，尊重手串所蕴含的能量和神力。
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="photos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-lg">
                <img src="/blessing1.jpg" alt="开光仪式" className="w-full h-64 object-cover" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
                <p className="mt-2 text-gray-400 text-sm">道长在庙宇前进行开光仪式</p>
              </div>
              
              <div className="overflow-hidden rounded-lg">
                <img src="/blessing2.jpg" alt="符咒加持" className="w-full h-64 object-cover" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
                <p className="mt-2 text-gray-400 text-sm">手串符咒加持过程</p>
              </div>
              
              <div className="overflow-hidden rounded-lg">
                <img src="/blessing3.jpg" alt="经文诵读" className="w-full h-64 object-cover" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
                <p className="mt-2 text-gray-400 text-sm">道长诵读经文场景</p>
              </div>
              
              <div className="overflow-hidden rounded-lg">
                <img src="/blessing4.jpg" alt="能量注入" className="w-full h-64 object-cover" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
                <p className="mt-2 text-gray-400 text-sm">五行能量注入环节</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="videos">
            <div className="space-y-8">
              <Card className="bg-black/40 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl">开光仪式全程记录</CardTitle>
                  <CardDescription className="text-gray-400">青城山道观开光仪式实况</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-800 rounded-md flex items-center justify-center">
                    <p className="text-gray-400">视频内容：完整的手串开光仪式过程</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-black/40 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl">道长讲解开光的意义</CardTitle>
                  <CardDescription className="text-gray-400">资深道长专访</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-800 rounded-md flex items-center justify-center">
                    <p className="text-gray-400">视频内容：道长详解手串开光的文化意义和精神内涵</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-black/40 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl">五行能量与手串材质</CardTitle>
                  <CardDescription className="text-gray-400">道教文化专题讲座</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-800 rounded-md flex items-center justify-center">
                    <p className="text-gray-400">视频内容：深入解析不同材质手串与五行能量的关系</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BlessingProcess;
