
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 py-24">
        <div className="text-center max-w-lg">
          <h1 className="text-7xl font-bold text-white mb-6">404</h1>
          <p className="text-2xl text-gray-300 mb-8">
            很抱歉，您访问的页面不存在。
          </p>
          <p className="text-gray-400 mb-10">
            您可能输入了错误的地址，或者该页面已被移动或删除。
          </p>
          <Link
            to="/"
            className="inline-flex items-center btn-primary py-3 px-8"
          >
            <Home size={18} className="mr-2" />
            返回首页
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
