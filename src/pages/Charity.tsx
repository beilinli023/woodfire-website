
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BackButton from '@/components/BackButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Separator } from '@/components/ui/separator';
import { ArrowRight } from 'lucide-react';
import SidebarNav from '../components/SidebarNav';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

// Sample charity projects data
const charityProjects = [
  {
    id: 1,
    title: "尼泊尔儿童教育项目",
    description: "为尼泊尔偏远地区的儿童提供教育机会，建设学校和提供教学用品。",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3",
    date: "2023年6月"
  },
  {
    id: 2,
    title: "西藏传统工艺保护计划",
    description: "支持西藏传统工艺的传承和发展，为当地工匠提供培训和就业机会。",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3",
    date: "2023年8月"
  },
  {
    id: 3,
    title: "喜马拉雅地区环保行动",
    description: "开展喜马拉雅地区的环保教育和实践活动，保护当地的自然环境。",
    image: "https://images.unsplash.com/photo-1493837417577-baec364a53eb?ixlib=rb-4.0.3",
    date: "2023年10月"
  },
  {
    id: 4,
    title: "尼泊尔地震灾后重建",
    description: "为尼泊尔地震灾区提供重建支持，帮助当地居民恢复正常生活。",
    image: "https://images.unsplash.com/photo-1542898560-e9b701d2e65e?ixlib=rb-4.0.3",
    date: "2022年9月"
  },
  {
    id: 5,
    title: "传统医药知识保护项目",
    description: "记录和保护亚洲传统医药知识，支持相关研究和实践。",
    image: "https://images.unsplash.com/photo-1567922048821-55a82b61750d?ixlib=rb-4.0.3",
    date: "2022年5月"
  },
  {
    id: 6,
    title: "女性工匠赋能计划",
    description: "为亚洲地区的女性工匠提供培训和创业支持，促进性别平等。",
    image: "https://images.unsplash.com/photo-1596813215728-cd37f54837b7?ixlib=rb-4.0.3",
    date: "2022年3月"
  }
];

const ITEMS_PER_PAGE = 6;

const Charity = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(charityProjects.length / ITEMS_PER_PAGE);
  
  // Calculate projects to display on current page
  const indexOfLastProject = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - ITEMS_PER_PAGE;
  const currentProjects = charityProjects.slice(indexOfFirstProject, indexOfLastProject);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

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
            <BackButton className="mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold mb-6">慈善事业</h1>
            <Separator className="mb-8 bg-gray-700" />
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">我们的慈善理念</h2>
                <p className="text-gray-300 leading-relaxed">
                  我们相信企业应该承担社会责任，回馈社会。我们的慈善活动主要集中在教育、传统文化保护和环境保护三个领域，特别关注亚洲地区的弱势群体和文化遗产。
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  通过与当地社区和国际组织的合作，我们希望能够为社会带来积极的变化，帮助需要帮助的人，同时保护珍贵的文化和自然遗产。
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">我们的慈善承诺</h2>
                <p className="text-gray-300 leading-relaxed">
                  我们承诺将公司利润的10%用于慈善事业，每年发布慈善报告，保证资金使用的透明度和有效性。我们也鼓励员工参与志愿服务，每年提供带薪志愿服务假期。
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mt-12 mb-6">慈善项目</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentProjects.map(project => (
                    <Link 
                      key={project.id} 
                      to={`/charity/projects/${project.id}`} 
                      className="group"
                    >
                      <div className="bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 group-hover:-translate-y-2">
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-5">
                          <span className="text-gray-400 text-sm">{project.date}</span>
                          <h3 className="text-xl font-medium mt-2 mb-3 group-hover:text-amber-400 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                          <div className="flex items-center text-amber-400 text-sm font-medium">
                            阅读更多 <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-2" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                {totalPages > 1 && (
                  <Pagination className="mt-10">
                    <PaginationContent>
                      {currentPage > 1 && (
                        <PaginationItem>
                          <PaginationPrevious 
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                            className="cursor-pointer"
                          />
                        </PaginationItem>
                      )}
                      
                      {Array.from({ length: totalPages }).map((_, i) => (
                        <PaginationItem key={i}>
                          <PaginationLink
                            isActive={currentPage === i + 1}
                            onClick={() => setCurrentPage(i + 1)}
                            className="cursor-pointer"
                          >
                            {i + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      
                      {currentPage < totalPages && (
                        <PaginationItem>
                          <PaginationNext 
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                            className="cursor-pointer"
                          />
                        </PaginationItem>
                      )}
                    </PaginationContent>
                  </Pagination>
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Charity;
