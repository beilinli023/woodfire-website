
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import BackButton from '@/components/BackButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Calendar, MapPin, Users } from 'lucide-react';
import SidebarNav from '../components/SidebarNav';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

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
    gallery: [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-4.0.3"
    ],
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
    gallery: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1558236714-d1a6333fce68?ixlib=rb-4.0.3"
    ],
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
  },
  {
    id: 3,
    title: "喜马拉雅地区环保行动",
    description: "开展喜马拉雅地区的环保教育和实践活动，保护当地的自然环境。",
    image: "https://images.unsplash.com/photo-1493837417577-baec364a53eb?ixlib=rb-4.0.3",
    date: "2023年10月",
    location: "尼泊尔喜马拉雅山区",
    beneficiaries: "当地3个村庄居民",
    gallery: [
      "https://images.unsplash.com/photo-1493837417577-baec364a53eb?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1514539079130-25950c84af65?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1566396084804-47baa8cbfdcb?ixlib=rb-4.0.3"
    ],
    fullContent: `
      <p>喜马拉雅山区是全球生物多样性的重要保护区，但近年来面临气候变化和人类活动的双重威胁。我们的项目旨在通过环保教育和可持续发展实践，保护这一珍贵的自然环境。</p>
      
      <p>项目主要内容包括：</p>
      <ul>
        <li>开展环保意识教育，提高当地居民的环保意识</li>
        <li>推广可持续的农业和生活方式，减少对环境的负面影响</li>
        <li>组织垃圾清理活动，减少塑料等非降解垃圾对环境的污染</li>
        <li>开展生物多样性监测，了解当地生态系统的变化</li>
      </ul>
      
      <p>通过这个项目，我们已经在三个村庄建立了环保示范点，安装了太阳能设备，减少了对煤炭等化石燃料的依赖。我们还与当地学校合作，将环保教育纳入课程，培养下一代的环保意识。</p>
      
      <p>保护环境是一项长期工作，需要持续的投入和坚持。我们计划在未来五年内，逐步扩大项目覆盖范围，影响更多的山区社区，共同守护这片美丽的自然环境。</p>
    `
  },
  {
    id: 4,
    title: "尼泊尔地震灾后重建",
    description: "为尼泊尔地震灾区提供重建支持，帮助当地居民恢复正常生活。",
    image: "https://images.unsplash.com/photo-1542898560-e9b701d2e65e?ixlib=rb-4.0.3",
    date: "2022年9月",
    location: "尼泊尔中部地区",
    beneficiaries: "200个家庭",
    gallery: [
      "https://images.unsplash.com/photo-1542898560-e9b701d2e65e?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1560819400-395d5ee91418?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1563201514-d5a14c929cce?ixlib=rb-4.0.3"
    ],
    fullContent: `
      <p>2015年，尼泊尔发生了7.8级强烈地震，造成了严重的人员伤亡和财产损失。虽然灾后已经过去了几年，但许多地区的重建工作仍在进行中。我们的项目致力于帮助这些地区的居民重建家园和生活。</p>
      
      <p>项目主要内容包括：</p>
      <ul>
        <li>提供抗震住房建设技术和材料支持</li>
        <li>为受灾家庭提供生计恢复支持，包括农业技术培训和小额贷款</li>
        <li>重建社区基础设施，如学校、卫生站和饮水系统</li>
        <li>开展心理健康服务，帮助灾民克服心理创伤</li>
      </ul>
      
      <p>通过这个项目，我们已经帮助200个家庭重建了抗震住房，恢复了基本生活条件。我们还支持了10个小型企业的创建，为社区创造了就业机会和经济收入。</p>
      
      <p>灾后重建不仅是物质上的重建，也是心灵上的重建。我们相信，通过社区的共同努力和外界的支持，受灾地区的居民能够重建更加美好的家园。</p>
    `
  }
];

const CharityProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id || "1");
  
  // Find the project by ID
  const project = charityProjectsData.find(p => p.id === projectId) || charityProjectsData[0];
  const [selectedImage, setSelectedImage] = useState(project.gallery[0]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    // Reset selected image when project changes
    if (project && project.gallery) {
      setSelectedImage(project.gallery[0]);
    }
  }, [id, project]);

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
              <BackButton className="mb-4" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h1>
            <Separator className="mb-8 bg-gray-700" />
            
            <div className="space-y-8">
              {/* Main image and gallery */}
              <div className="space-y-4">
                <div className="w-full h-[400px] overflow-hidden rounded-lg">
                  <img 
                    src={selectedImage} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Thumbnails gallery */}
                <Carousel className="w-full max-w-xl mx-auto">
                  <CarouselContent>
                    {project.gallery.map((img, index) => (
                      <CarouselItem key={index} className="basis-1/4">
                        <div 
                          className={`h-20 w-full cursor-pointer overflow-hidden rounded ${selectedImage === img ? 'ring-2 ring-amber-500' : ''}`}
                          onClick={() => setSelectedImage(img)}
                        >
                          <img 
                            src={img} 
                            alt={`${project.title} 图片 ${index + 1}`} 
                            className="h-full w-full object-cover transition-all hover:scale-110"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0" />
                  <CarouselNext className="right-0" />
                </Carousel>
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
