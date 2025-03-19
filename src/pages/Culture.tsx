
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Culture = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="h-4 w-4" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/culture">文化</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">文化传承</h1>
        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          探索传统道教手串祈福仪式的神秘过程，了解传统祈福文化的历史底蕴
        </p>
        
        <div className="space-y-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">手串祈福仪式</h2>
            <p className="text-gray-300 mb-10">
              手串祈福是一种传统的道教仪式，旨在为佩戴者带来好运、健康和保护。祈福过程通常由资深道长主持，遵循古老的仪式和传统进行。
              以下是手串祈福的完整步骤和意义。
            </p>
            
            <div className="space-y-10">
              <Card className="bg-black/40 border-gray-800 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">1. 净化与准备</h3>
                    <p className="text-gray-300">
                      祈福前，道长会先进行自身的净化，包括沐浴更衣、净手焚香等。同时，手串也会被放置在特定的位置，用檀香熏蒸，以驱除杂气。
                      这一步骤象征着身心的纯净，是祈福仪式的重要开端。只有在纯净的状态下，才能与神灵进行真诚的沟通。
                    </p>
                  </div>
                  <div className="overflow-hidden h-full">
                    <img 
                      src="/blessing1.jpg" 
                      alt="祈福净化准备" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                </div>
              </Card>
              
              <Card className="bg-black/40 border-gray-800 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="overflow-hidden h-full order-last md:order-first">
                    <img 
                      src="/blessing2.jpg" 
                      alt="点燃香火" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">2. 点燃香火</h3>
                    <p className="text-gray-300">
                      祈福仪式正式开始时，道长会点燃香火，向天地神明祷告。香火在道教中被视为沟通人神的媒介，其烟气能够传递信息至神界。
                      燃香的数量和种类也有讲究，通常会使用檀香或沉香，这些香料被认为具有更强的灵性，能够更好地传递祈愿。
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-black/40 border-gray-800 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">3. 诵读经文</h3>
                    <p className="text-gray-300">
                      道长会诵读特定的经文，包括《太上洞玄灵宝天尊说清静经》、《太上老君说常清静经》等，以祈求神灵的祝福和保护。
                      经文的音韵和含义都蕴含着深厚的道家智慧，通过诵读经文，可以达到心灵的清净和超然状态，从而更好地接收宇宙能量。
                    </p>
                  </div>
                  <div className="overflow-hidden h-full">
                    <img 
                      src="/blessing3.jpg" 
                      alt="诵读经文" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                </div>
              </Card>
              
              <Card className="bg-black/40 border-gray-800 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="overflow-hidden h-full order-last md:order-first">
                    <img 
                      src="/blessing4.jpg" 
                      alt="符咒加持" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">4. 符咒加持</h3>
                    <p className="text-gray-300">
                      道长会在手串上施加符咒，通常使用朱砂和特制的符水，以赋予手串特殊的能量。这些符咒被认为能够驱邪避凶、保佑平安。
                      符咒的绘制需要高度的专注和修为，每一笔每一画都包含着特定的能量和意义，能够为佩戴者带来针对性的保护和祝福。
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-black/40 border-gray-800 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">5. 五行能量注入</h3>
                    <p className="text-gray-300">
                      根据佩戴者的生辰八字，道长会为手串注入相应的五行能量（金、木、水、火、土），以平衡佩戴者的气场和运势。
                      五行能量的注入是非常个性化的过程，道长会根据每个人的命理特点，选择适合的能量比例和强度，从而达到最佳的调和效果。
                    </p>
                  </div>
                  <div className="overflow-hidden h-full">
                    <img 
                      src="/blessing4.jpg" 
                      alt="五行能量注入" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                </div>
              </Card>
              
              <Card className="bg-black/40 border-gray-800 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="overflow-hidden h-full order-last md:order-first">
                    <img 
                      src="/blessing1.jpg" 
                      alt="完成与祝福" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">6. 完成与祝福</h3>
                    <p className="text-gray-300">
                      仪式的最后，道长会为手串和佩戴者送上最后的祝福，告诫佩戴者应心怀善念，尊重手串所蕴含的能量和神力。
                      完成祈福的手串通常需要在特定的时间内佩戴，以便能量充分融入佩戴者的气场。道长也会给予佩戴者一些注意事项，如避免接触不洁之物，保持善良的心态等。
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-300 italic">
                "祈福不仅是一种仪式，更是一种精神的寄托，通过虔诚的心念，连接自然与宇宙的能量，获得内心的平静与力量。"
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Culture;
