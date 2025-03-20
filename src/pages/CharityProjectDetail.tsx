
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Calendar, MapPin, Users } from 'lucide-react';
import SidebarNav from '../components/SidebarNav';

// Detailed charity projects data
const charityProjectsData = [
  {
    id: 1,
    title: "尼泊尔儿童教育项目",
    description: "为尼泊尔偏远地区的儿童提供教育机会，建设学校和提供教学用品。",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3",
    date: "2023年6月",
    location: "尼泊尔加德满都",
    beneficiaries: "500名儿童",
    fullContent: `
      <p>尼泊尔山区的许多儿童由于地理位置偏远，缺乏基础教育设施，无法获得良好的教育。我们的项目旨在改变这一状况，为这些孩子提供学习的机会。</p>
      
      <p>项目包括以下几个方面：</p>
      <ul>
        <li>在当地建设两所小学，提供安全舒适的学习环境</li>
        <li>为学校配备必要的教学设备和学习用品</li>
        <li>招募和培训当地教师，提高教学质量</li>
        <li>提供奖学金，确保家庭经济困难的学生能够继续学习</li>
      </ul>
      
      <p>通过这个项目，我们希望能够帮助当地儿童获得基础教育，为他们的未来打下坚实的基础。教育是改变生活的力量，我们相信，通过提供教育机会，这些孩子将来能够为自己和社区创造更好的未来。</p>
      
      <p>项目实施过程中，我们与当地政府和社区密切合作，确保项目的可持续性。我们不仅关注硬件设施的建设，更注重当地教育能力的提升，让社区能够长期维持学校的运营。</p>
      
      <p>项目启动至今，已经有500多名儿童受益。我们看到了孩子们在学习中的进步和快乐，这是对我们工作最大的鼓励。未来，我们计划扩大项目规模，覆盖更多的山区社区，帮助更多的孩子。</p>
    `
  },
  {
    id: 2,
    title: "西藏传统工艺保护计划",
    description: "支持西藏传统工艺的传承和发展，为当地工匠提供培训和就业机会。",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3",
    date: "2023年8月",
    location: "西藏拉萨",
    beneficiaries: "150名工匠",
    fullContent: `
      <p>西藏的传统工艺有着悠久的历史和深厚的文化底蕴，但随着现代化进程的加速，许多传统工艺面临失传的危险。我们的项目致力于保护和传承这些珍贵的文化遗产。</p>
      
      <p>项目主要内容包括：</p>
      <ul>
        <li>建立传统工艺培训中心，为年轻人提供学习机会</li>
        <li>记录和整理传统工艺的技术和知识</li>
        <li>为工匠提供现代设计和市场知识的培训，帮助他们适应现代市场需求</li>
        <li>建立销售网络，提高工匠作品的市场价值</li>
      </ul>
      
      <p>通过这个项目，我们已经帮助150多名工匠提高了技能，增加了收入。更重要的是，我们看到了年轻一代对传统工艺的兴趣正在增长，这为传统工艺的传承带来了希望。</p>
      
      <p>我们相信，传统工艺不仅是文化遗产，也是可持续生计的来源。通过将传统与现代相结合，我们可以为传统工艺创造新的价值和市场，使其在现代社会中继续发挥作用。</p>
      
      <p>项目的成功得益于与当地工匠协会和文化机构的紧密合作。未来，我们计划扩大培训规模，覆盖更多的工艺种类，同时探索更广阔的市场，为工匠创造更多的机会。</p>
    `
  }
];

const CharityProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id || "1");
  
  // Find the project by ID
  const project = charityProjectsData.find(p => p.id === projectId) || charityProjectsData[0];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
            <div className="mb-6">
              <Link to="/charity/projects" className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors">
                <ArrowLeft size={16} className="mr-2" /> 返回全部项目
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h1>
            <Separator className="mb-8 bg-gray-700" />
            
            <div className="space-y-8">
              {/* Hero image */}
              <div className="w-full h-[400px] overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Project info */}
              <div className="flex flex-wrap gap-6 py-4">
                <div className="flex items-center text-gray-300">
                  <Calendar size={18} className="mr-2 text-amber-400" />
                  <span>{project.date}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin size={18} className="mr-2 text-amber-400" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users size={18} className="mr-2 text-amber-400" />
                  <span>受益人数: {project.beneficiaries}</span>
                </div>
              </div>
              
              {/* Project content */}
              <div className="prose prose-lg prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: project.fullContent }} />
              </div>
              
              {/* Call to action */}
              <div className="bg-gray-900 p-8 rounded-lg mt-12">
                <h3 className="text-2xl font-semibold mb-4">如何参与</h3>
                <p className="text-gray-300 mb-6">
                  您可以通过捐款、志愿服务或分享项目信息等方式支持我们的慈善项目。每一份支持都将帮助我们扩大项目影响，帮助更多需要帮助的人。
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/contact" 
                    className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md transition-colors"
                  >
                    联系我们
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CharityProjectDetail;
