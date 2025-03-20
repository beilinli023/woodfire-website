import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SidebarNav from '@/components/SidebarNav';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';
import { Card } from '@/components/ui/card';

const cultureCategories = [
  {
    id: 'bencao',
    title: '本草纲目',
    description: '中国传统医学的重要著作，记载了丰富的药材知识和医疗经验',
    image: '/photo-1465146344425-f00d5f5c8f07'
  },
  {
    id: 'tradition',
    title: '中国文化传统',
    description: '探索中国几千年的文化传统，了解其中的智慧与精髓',
    image: '/photo-1518495973542-4542c06a5843'
  },
  {
    id: 'drawings',
    title: '关于手绘图',
    description: '传统手绘艺术的魅力与技巧，传承千年的绘画智慧',
    image: '/photo-1470813740244-df37b8c1edcb'
  }
];

const Culture = () => {
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
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">文化</h1>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            探索中国传统文化的深厚底蕴，感受千年智慧的传承与魅力
          </p>
          
          <div className="space-y-8">
            {cultureCategories.map((category) => (
              <Link 
                key={category.id} 
                to={`/culture/${category.id}`}
                className="block transition-transform duration-300 hover:scale-[1.02]"
              >
                <Card className="bg-black/40 border-gray-800 overflow-hidden hover:border-gray-600 transition-colors">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1 overflow-hidden h-64 md:h-full">
                      <img 
                        src={category.image} 
                        alt={category.title} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.svg";
                        }}
                      />
                    </div>
                    <div className="p-6 md:col-span-2 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                      <p className="text-gray-300 mb-4">{category.description}</p>
                      <div className="mt-4">
                        <span className="text-white/70 inline-flex items-center">
                          查看文章
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

export default Culture;
