
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 w-full">
      <div className="w-full mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">旅行寻珠</h3>
            <p className="mb-4">
              我们专注于提供来自全球圣地的高品质灵性珠宝和能量饰品，每一件作品都凝聚着千年的智慧和祝福。
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  首页
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  产品
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  博客
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">产品分类</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/bracelets" className="hover:text-white transition-colors">
                  佛珠手链
                </Link>
              </li>
              <li>
                <Link to="/category/necklaces" className="hover:text-white transition-colors">
                  能量石项链
                </Link>
              </li>
              <li>
                <Link to="/category/rings" className="hover:text-white transition-colors">
                  灵性戒指
                </Link>
              </li>
              <li>
                <Link to="/category/earrings" className="hover:text-white transition-colors">
                  吉祥耳环
                </Link>
              </li>
              <li>
                <Link to="/category/accessories" className="hover:text-white transition-colors">
                  灵性配饰
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>北京市朝阳区三里屯太古里北区 N8-30</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>+86 10 8888 7777</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>info@travelbeads.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 旅行寻珠. 保留所有权利.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to="/terms" className="hover:text-white transition-colors">
              使用条款
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              隐私政策
            </Link>
            <Link to="/shipping" className="hover:text-white transition-colors">
              配送信息
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
