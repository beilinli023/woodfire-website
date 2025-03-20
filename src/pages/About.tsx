
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Separator } from '@/components/ui/separator';
import SidebarNav from '../components/SidebarNav';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-24 md:pt-32">
        <div className="flex flex-col md:flex-row w-full relative">
          {/* Sidebar Navigation */}
          <div className="w-full md:w-[15%]">
            <SidebarNav />
          </div>
          
          {/* Main Content */}
          <div className="w-full md:w-[85%] px-4 md:px-8 py-8 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">关于我们</h1>
            <Separator className="mb-8 bg-gray-700" />
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">我们的故事</h2>
                <p className="text-gray-300 leading-relaxed">
                  我们的品牌起源于对传统亚洲文化的热爱与敬仰。创始人在尼泊尔和西藏的旅行中，被当地的传统工艺和精神文化所打动，决心将这些珍贵的工艺和文化带给更多的人。
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  数年来，我们与当地的工匠建立了深厚的合作关系，共同努力保护和传承这些珍贵的工艺技术，同时也为当地社区带来可持续的经济机会。
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">我们的使命</h2>
                <p className="text-gray-300 leading-relaxed">
                  我们致力于将亚洲传统文化中的智慧和美学带入现代生活，创造既有文化内涵又适合现代生活方式的产品。我们相信，这些蕴含千年智慧的传统可以为现代人的身心健康和精神世界带来积极影响。
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">可持续发展</h2>
                <p className="text-gray-300 leading-relaxed">
                  我们坚持可持续发展的理念，尊重自然环境和工匠传统。我们的产品采用天然材料，生产过程中尽量减少环境影响。同时，我们确保工匠获得公平的报酬和良好的工作条件。
                </p>
              </section>
              
              <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-3">传统工艺</h3>
                  <p className="text-gray-400">我们与经验丰富的工匠合作，确保每件产品都体现精湛的传统工艺。</p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-3">文化传承</h3>
                  <p className="text-gray-400">每件产品背后都有独特的文化故事，我们致力于传递这些珍贵的文化遗产。</p>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-3">社区支持</h3>
                  <p className="text-gray-400">通过公平贸易和社区项目，我们支持当地社区的可持续发展。</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
