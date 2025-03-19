
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';
import HerbProcessCarousel from '@/components/HerbProcessCarousel';

// Sample article content data (in a real app, this would come from an API)
const articleContentData = {
  'bencao': {
    '1': {
      title: '人参：补气养血的上品',
      content: [
        { type: 'paragraph', text: '人参，被誉为"百草之王"，是一种珍贵的草本植物，在《本草纲目》中有详细记载。它的主要功效是大补元气，补脾益肺，生津止渴，安神益智。人参的药用历史可以追溯到数千年前，古代中医典籍中都有关于人参的记载。' },
        { type: 'image', src: '/photo-1465146344425-f00d5f5c8f07', alt: '人参图片' },
        { type: 'paragraph', text: '《本草纲目》中记载："人参，味甘微苦，性微温，无毒。主补五脏，安精神，定魂魄，止惊悸，除邪气，明目开心益智，久服轻身延年。" 这段描述全面概括了人参的药性和功效。' },
        { type: 'paragraph', text: '人参的药用部位主要是根，根据生长年限和加工方法的不同，又分为生晒参、红参、白参等多种。不同的加工方法使人参具有不同的药性特点，适用于不同的体质和病症。' },
        { type: 'paragraph', text: '在现代研究中，人参被发现含有人参皂苷、多糖、挥发油、氨基酸等多种有效成分，这些成分对提高免疫力、抗疲劳、抗衰老等方面都有显著效果。' },
      ]
    },
    '2': {
      title: '灵芝：延年益寿的神药',
      content: [
        { type: 'paragraph', text: '灵芝在古代被视为仙草，《本草纲目》称其"久食轻身不老"。灵芝是一种名贵的中药材，在中医药历史文献中，灵芝被列为上品，有"仙草"之称。' },
        { type: 'image', src: '/photo-1518495973542-4542c06a5843', alt: '灵芝图片' },
        { type: 'paragraph', text: '《本草纲目》中记载："灵芝，甘平无毒，主治胸中结，益心气，补中，增智慧，不忘。久食，轻身不老，延年神仙。"这段描述表明灵芝具有益心安神、补中益气、增强记忆力以及延年益寿的功效。' },
        { type: 'paragraph', text: '灵芝的种类很多，常用的有赤芝、紫芝、青芝、黄芝、白芝、黑芝等，其中以赤芝的药用价值最高，也是最常见的一种。' },
        { type: 'paragraph', text: '现代研究表明，灵芝含有多糖、三萜、腺苷、蛋白质等多种活性成分，具有增强免疫力、抗肿瘤、保护肝脏、降血糖、降血脂等多种药理作用。' },
      ]
    },
    // Add more articles as needed
  },
  'tradition': {
    // Similar structure for tradition articles
    '1': {
      title: '中国传统节日的由来',
      content: [
        { type: 'paragraph', text: '中国传统节日蕴含着深厚的文化内涵和历史故事，是中华民族几千年文明的重要组成部分。这些节日不仅是人们休息娱乐的时间，更是传承文化、凝聚民族情感的重要载体。' },
        { type: 'carousel', images: [
          { src: '/photo-1470071459604-3b5ec3a7fe05', alt: '春节花灯', description: '春节花灯：象征着新的希望和美好的祝愿' },
          { src: '/photo-1482938289607-e9573fc25ebb', alt: '清明祭祀', description: '清明祭祀：缅怀先人，传承孝道文化' },
          { src: '/photo-1465146344425-f00d5f5c8f07', alt: '端午龙舟', description: '端午龙舟：纪念爱国诗人屈原' },
          { src: '/photo-1518495973542-4542c06a5843', alt: '中秋赏月', description: '中秋赏月：团圆的象征，表达对亲人的思念' },
          { src: '/photo-1470813740244-df37b8c1edcb', alt: '元宵观灯', description: '元宵观灯：意味着团圆和喜庆' },
          { src: '/photo-1465146344425-f00d5f5c8f07', alt: '重阳登高', description: '重阳登高：祈求长寿安康' },
          { src: '/photo-1518495973542-4542c06a5843', alt: '腊八粥', description: '腊八粥：富含多种食材，象征着丰收和期盼' }
        ]},
        { type: 'paragraph', text: '春节是中国最重要的传统节日，起源于上古时期的祭祀活动。人们在这一天祭祀祖先和神灵，祈求来年风调雨顺、五谷丰登。随着时间的推移，春节逐渐演变为以家庭团聚为主题的节日，形成了贴春联、放鞭炮、吃年夜饭等丰富多彩的习俗。' },
        { type: 'paragraph', text: '端午节源于对屈原的纪念，这位伟大的爱国诗人投江自尽后，人们为了不让鱼虾伤害他的遗体，划船追赶、投粽入江，这一习俗逐渐演变成了端午节的龙舟竞渡和吃粽子的传统。' },
        { type: 'paragraph', text: '中秋节则与月亮崇拜有关，古人认为秋分时节的月亮最圆最亮，象征着团圆和丰收。人们在这一天赏月、吃月饼，表达对美好生活的向往和对亲人的思念。' },
      ]
    },
    // Add more articles
  },
  'drawings': {
    // Similar structure for drawings articles
    '1': {
      title: '香方手串的制作过程',
      content: [
        { type: 'paragraph', text: '香方手串是一种将中药材精心配制，通过特殊工艺制成的佩戴饰品，不仅具有美观的外表，还融合了传统中医的养生理念。下面将为您展示香方手串从原材料到成品的完整制作过程。' },
        { type: 'carousel', images: [
          { src: '/photo-1465146344425-f00d5f5c8f07', alt: '中药种植', description: '中药材精心种植，选择优质土壤和环境' },
          { src: '/photo-1518495973542-4542c06a5843', alt: '采摘过程', description: '按照传统时令采摘，保证药材功效最佳' },
          { src: '/photo-1470813740244-df37b8c1edcb', alt: '清洗筛选', description: '精细清洗和筛选，去除杂质' },
          { src: '/photo-1470071459604-3b5ec3a7fe05', alt: '切片晾晒', description: '按照传统工艺切片和自然晾晒' },
          { src: '/photo-1482938289607-e9573fc25ebb', alt: '蒸煮提炼', description: '低温蒸煮，提取精华成分' },
          { src: '/photo-1465146344425-f00d5f5c8f07', alt: '配方调制', description: '根据古方秘制调配，平衡阴阳五行' },
          { src: '/photo-1518495973542-4542c06a5843', alt: '精制成型', description: '经过数十道工序精制成型' },
          { src: '/photo-1470813740244-df37b8c1edcb', alt: '打磨抛光', description: '精细打磨和抛光，提升质感' },
          { src: '/photo-1470071459604-3b5ec3a7fe05', alt: '祈福加持', description: '传统仪式祈福加持，赋予灵性' },
          { src: '/photo-1482938289607-e9573fc25ebb', alt: '质检包装', description: '严格质检和精美包装，确保品质' },
          { src: '/photo-1465146344425-f00d5f5c8f07', alt: '成品展示', description: '成品展示，每一件都独一无二' },
          { src: '/photo-1518495973542-4542c06a5843', alt: '佩戴效果', description: '佩戴效果，展现东方韵味与精神内涵' }
        ]},
        { type: 'paragraph', text: '香方手串的制作过程融合了传统中医理念和现代工艺，每一步都严格遵循古法，保证了成品的品质和功效。从种植到成品，经过精心的筛选和加工，每一件香方手串都凝聚了匠人的心血和智慧。' },
        { type: 'paragraph', text: '不同的中药材组合有着不同的功效，有的侧重养心安神，有的注重滋补养生，还有的着重于提升气场。选择适合自己的香方手串，能够在装饰美观的同时，起到相应的养生保健作用。' },
      ]
    },
    // Add more articles
  }
};

const categoryTitles = {
  'bencao': '本草纲目',
  'tradition': '中国文化传统',
  'drawings': '关于手绘图'
};

const Article = () => {
  const { category, articleId } = useParams<{ category: string, articleId: string }>();
  
  // Get article data based on category and articleId
  const article = category && articleId && articleContentData[category as keyof typeof articleContentData]?.[articleId];
  const categoryTitle = category ? categoryTitles[category as keyof typeof categoryTitles] || '文章' : '文章';
  
  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
        <Navbar />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">文章未找到</h1>
          <p className="mb-8">抱歉，您请求的文章不存在或已被移除。</p>
          <Link to="/culture" className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md transition-colors">
            返回文化页面
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
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
        
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{article.title}</h1>
        
        <div className="prose prose-lg max-w-none prose-invert">
          {article.content.map((item, index) => {
            if (item.type === 'paragraph') {
              return (
                <p key={index} className="text-gray-300 mb-6 leading-relaxed">
                  {item.text}
                </p>
              );
            } else if (item.type === 'image') {
              return (
                <div key={index} className="my-8">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                  {item.alt && <p className="text-center text-gray-400 mt-2">{item.alt}</p>}
                </div>
              );
            } else if (item.type === 'carousel' && item.images) {
              return (
                <HerbProcessCarousel 
                  key={index}
                  images={item.images}
                  autoplayInterval={2000}
                />
              );
            }
            return null;
          })}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <Link 
            to={`/culture/${category}`}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            返回{categoryTitle}文章列表
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Article;
