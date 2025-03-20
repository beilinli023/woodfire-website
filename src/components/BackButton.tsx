import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface BackButtonProps {
  className?: string;
}

const BackButton = ({ className = '' }: BackButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  // 根据当前路径确定上一级页面的URL
  const handleGoBack = (e: React.MouseEvent) => {
    // 阻止事件冒泡以避免触发其他点击事件
    e.stopPropagation();
    e.preventDefault();
    const path = location.pathname;
    
    // 根据特定路径来确定返回目标
    if (path.startsWith('/culture/bencao') || path.startsWith('/culture/tradition') || path.startsWith('/culture/drawings')) {
      // 从 /culture/bencao 返回 /culture
      navigate('/culture');
    } else if (path.startsWith('/culture')) {
      // 从 /culture 返回首页
      navigate('/');
    } else if (path.startsWith('/charity/projects/')) {
      // 从慈善项目详情返回慈善项目列表
      navigate('/charity/projects');
    } else if (path.startsWith('/charity/projects')) {
      // 从慈善项目列表返回慈善页面
      navigate('/charity');
    } else if (path.startsWith('/charity')) {
      // 从 /charity 返回首页
      navigate('/');
    } else if (path.startsWith('/product/')) {
      // 从单个产品返回产品列表
      navigate('/products');
    } else if (path.startsWith('/products')) {
      // 从产品列表返回首页
      navigate('/');
    } else if (path.startsWith('/article/')) {
      // 从文章详情返回文章列表
      navigate('/culture');
    } else if (path.startsWith('/blessing')) {
      // 从祈福页面返回首页
      navigate('/');
    } else {
      // 其他情况返回首页
      navigate('/');
    }
  };

  return (
    <button
      onClick={handleGoBack}
      style={{ position: 'relative', zIndex: 10 }}
      className={`flex items-center text-white hover:text-gray-300 transition-colors ${className}`}
      aria-label="返回上一页"
    >
      <ChevronLeft size={20} />
    </button>
  );
};

export default BackButton;
