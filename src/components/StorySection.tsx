
import { useState } from 'react';

const StorySection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const stories = [
    {
      id: 1,
      title: '西藏朝圣之旅',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      content: '我们的团队跋山涉水，走访了西藏最神圣的寺庙和圣地，寻找最纯净的能量宝石和传统手工艺品。在这片神秘的土地上，我们亲手挑选每一颗珠子，确保它们都带着最纯净的祝福和能量。',
    },
    {
      id: 2,
      title: '尼泊尔工艺探索',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
      content: '在尼泊尔的山村中，我们与当地工匠们一起学习传统的珠宝制作技艺。每一款产品都融合了千年的智慧和精湛的工艺，由经验丰富的大师亲手打造，承载着深厚的文化底蕴和灵性能量。',
    },
    {
      id: 3,
      title: '印度灵性探索',
      image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67',
      content: '在印度的圣河岸边，我们寻访了古老的灵性中心和修行场所。这里的每一件饰品都经过特殊的仪式净化和加持，能够帮助佩戴者连接内在的平静与力量，开启灵性的旅程。',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">我们的故事</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            {/* Tabs */}
            <div className="flex space-x-4 mb-6 border-b border-gray-800">
              {stories.map((story, index) => (
                <button
                  key={story.id}
                  className={`pb-2 text-lg font-medium ${
                    activeTab === index
                      ? 'text-white border-b-2 border-white'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {story.title}
                </button>
              ))}
            </div>
            
            {/* Content */}
            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 leading-relaxed">
                {stories[activeTab].content}
              </p>
              <button className="mt-6 btn-outline inline-flex items-center">
                了解更多
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-black/30" />
              <img
                src={stories[activeTab].image}
                alt={stories[activeTab].title}
                className="w-full h-full object-cover transition-transform duration-700 animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
