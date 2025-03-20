
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Separator } from '@/components/ui/separator';
import { ArrowRight } from 'lucide-react';
import SidebarNav from '../components/SidebarNav';

// Extended charity projects data
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

const CharityProjects = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-6">慈善项目</h1>
            <Separator className="mb-8 bg-gray-700" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {charityProjects.map(project => (
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
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CharityProjects;
