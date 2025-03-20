
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SidebarNav from '@/components/SidebarNav';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';

// Sample article data (in a real app, this would come from an API)
const articleData = {
  'bencao': [
    { id: 1, title: '人参：补气养血的上品', content: '人参被誉为"百草之王"，在《本草纲目》中有详细记载。据《本草纲目》记载，人参性微温，味甘、微苦，归心、肺、脾经，具有大补元气、复脉固脱、补脾益肺、生津养血、安神益智等功效。现代研究表明，人参含有人参皂苷、多糖、挥发油等多种有效成分，具有增强免疫力、抗疲劳、抗衰老等作用。' },
    { id: 2, title: '灵芝：延年益寿的神药', content: '灵芝在古代被视为仙草，《本草纲目》称其"久食轻身不老"。灵芝性平，味甘、淡，归心、肝、肺、肾经，具有补气安神、止咳平喘、养血补髓等功效。现代研究发现，灵芝含有三萜类化合物、多糖体、腺苷等成分，具有调节免疫、抗肿瘤、保肝等作用。' },
    { id: 3, title: '当归：女性的良药', content: '当归是中药中常用的补血药，《本草纲目》记载其"补血活血"。当归性温，味甘、辛，归肝、心、脾经，具有补血活血、调经止痛、润肠通便等功效。现代研究表明，当归含有阿魏酸、当归多糖等活性成分，具有扩张血管、抗血栓、调节免疫等作用。' },
  ],
  'tradition': [
    { id: 1, title: '中国传统节日的由来', content: '中国传统节日蕴含着深厚的文化内涵和历史故事。春节作为中国最重要的传统节日，起源于上古时期的祭祀活动，象征着辞旧迎新、祈求丰收。端午节源于对屈原的纪念，同时也是驱除瘟疫的重要节日。中秋节则与月亮崇拜有关，体现了中国人对家庭团圆的重视。' },
    { id: 2, title: '中国传统服饰的演变', content: '从汉服到旗袍，中国传统服饰的发展反映了社会变迁。汉服作为汉族的传统服饰，强调礼仪、等级和审美，具有宽衣博带、交领右衽的特点。唐朝服饰受到外来文化的影响，色彩鲜艳，款式多样。宋朝服饰趋于保守，明清时期则形成了满汉融合的风格。近代旗袍的产生，融合了中西方审美，成为展现东方女性美的代表。' },
    { id: 3, title: '中国传统礼仪与规范', content: '礼仪之邦的称号源远流长，传统礼仪体现了中国人的精神追求。中国传统礼仪强调"敬"与"和"，注重人际关系的和谐与社会秩序的稳定。从古代的"三纲五常"到现代的待人接物，礼仪规范一直是中国文化的重要组成部分。传统礼仪包括日常生活礼仪、交际礼仪、婚丧嫁娶礼仪等，体现了中国人的道德观念和价值取向。' },
  ],
  'drawings': [
    { id: 1, title: '国画的基本技法', content: '国画是中国特有的绘画形式，其技法独特而精湛。国画的基本技法包括线描、皴、擦、点、染等，每种技法都有其独特的表现效果。线描是国画的基础，强调线条的流畅和变化；皴法用于表现山石的质感；点法多用于表现叶、花、果等；染法则是色彩的晕染。掌握这些基本技法，是学习国画的第一步。' },
    { id: 2, title: '山水画的意境表达', content: '山水画不仅是自然景观的描绘，更是画家内心世界的表达。中国山水画注重"外师造化，中得心源"，强调画家对自然的感悟和对生命的思考。山水画的意境表达通过构图、用笔、用墨等方面来实现，追求"有境"、"有情"、"有理"的艺术效果。宋代的"景外之景，象外之象"和元代的"平淡天真"，都是山水画意境表达的高度概括。' },
    { id: 3, title: '花鸟画的色彩运用', content: '花鸟画中的色彩运用有着独特的美学标准和表现手法。传统花鸟画以水墨为主，辅以淡彩，强调"墨分五色"和"白石为骨，墨为肉，五彩为衣裳"的理念。色彩的运用需要考虑色相、明度、纯度的变化，以及冷暖、虚实的对比。花鸟画的色彩不求真实，而求意象，通过色彩的情感表达，传达画家对生命的热爱和对自然的赞美。' },
  ]
};

const categoryTitles = {
  'bencao': '本草纲目',
  'tradition': '中国文化传统',
  'drawings': '关于手绘图'
};

const Article = () => {
  const { category, articleId } = useParams<{ category: string; articleId: string }>();
  
  // Find the article
  const articles = category ? articleData[category as keyof typeof articleData] || [] : [];
  const article = articles.find(a => a.id.toString() === articleId);
  
  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
        <Navbar />
        <div className="max-w-5xl mx-auto px-4 pt-24 pb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">文章未找到</h1>
          <Link to="/culture" className="text-blue-400 hover:underline">返回文化页面</Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  const categoryTitle = category ? categoryTitles[category as keyof typeof categoryTitles] || '' : '';

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      
      <div className="flex flex-col md:flex-row w-full relative pt-24 md:pt-32">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-[15%]">
          <SidebarNav />
        </div>
        
        {/* Main Content */}
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
                <BreadcrumbLink href={`/culture/${category}`}>{categoryTitle}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>{article.title}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <article className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">{article.title}</h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">{article.content}</p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-800">
              <Link to={`/culture/${category}`} className="text-amber-400 hover:text-amber-300 transition-colors">
                &larr; 返回{categoryTitle}文章列表
              </Link>
            </div>
          </article>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Article;
