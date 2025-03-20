
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SidebarNav from '@/components/SidebarNav';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';
import { Card } from '@/components/ui/card';

// Sample article data (in a real app, this would come from an API)
const articleData = {
  'bencao': [
    { id: 1, title: '人参：补气养血的上品', description: '人参被誉为"百草之王"，在《本草纲目》中有详细记载...', image: '/photo-1465146344425-f00d5f5c8f07' },
    { id: 2, title: '灵芝：延年益寿的神药', description: '灵芝在古代被视为仙草，《本草纲目》称其"久食轻身不老"...', image: '/photo-1518495973542-4542c06a5843' },
    { id: 3, title: '当归：女性的良药', description: '当归是中药中常用的补血药，《本草纲目》记载其"补血活血"...', image: '/photo-1470813740244-df37b8c1edcb' },
  ],
  'tradition': [
    { id: 1, title: '中国传统节日的由来', description: '中国传统节日蕴含着深厚的文化内涵和历史故事...', image: '/photo-1470071459604-3b5ec3a7fe05' },
    { id: 2, title: '中国传统服饰的演变', description: '从汉服到旗袍，中国传统服饰的发展反映了社会变迁...', image: '/photo-1518495973542-4542c06a5843' },
    { id: 3, title: '中国传统礼仪与规范', description: '礼仪之邦的称号源远流长，传统礼仪体现了中国人的精神追求...', image: '/photo-1465146344425-f00d5f5c8f07' },
  ],
  'drawings': [
    { id: 1, title: '国画的基本技法', description: '国画是中国特有的绘画形式，其技法独特而精湛...', image: '/photo-1470813740244-df37b8c1edcb' },
    { id: 2, title: '山水画的意境表达', description: '山水画不仅是自然景观的描绘，更是画家内心世界的表达...', image: '/photo-1470071459604-3b5ec3a7fe05' },
    { id: 3, title: '花鸟画的色彩运用', description: '花鸟画中的色彩运用有着独特的美学标准和表现手法...', image: '/photo-1518495973542-4542c06a5843' },
  ]
};

const categoryTitles = {
  'bencao': '本草纲目',
  'tradition': '中国文化传统',
  'drawings': '关于手绘图'
};

const ArticleList = () => {
  const { category } = useParams<{ category: string }>();
  const articles = category ? articleData[category as keyof typeof articleData] || [] : [];
  const categoryTitle = category ? categoryTitles[category as keyof typeof categoryTitles] || '文章列表' : '文章列表';

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      
      <div className="flex flex-col md:flex-row w-full relative pt-24 md:pt-32">
        <div className="w-full md:w-[15%]">
          <SidebarNav />
        </div>
        
        <div className="w-full md:w-[85%] px-4 sm:px-6 lg:px-8 pb-16">
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
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>{categoryTitle}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">{categoryTitle}</h1>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            浏览{categoryTitle}相关的精选文章，探索传统文化的魅力
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link 
                key={article.id} 
                to={`/culture/${category}/${article.id}`}
                className="block transition-transform duration-300 hover:scale-[1.02]"
              >
                <Card className="bg-black/40 border-gray-800 overflow-hidden hover:border-gray-600 transition-colors h-full">
                  <div className="flex flex-col h-full">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.svg";
                        }}
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                      <p className="text-gray-300 mb-4">{article.description}</p>
                      <div className="mt-auto pt-4">
                        <span className="text-white/70 inline-flex items-center">
                          阅读全文
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ArticleList;
