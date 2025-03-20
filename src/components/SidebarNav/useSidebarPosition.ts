import { useState, useEffect, useRef, RefObject } from 'react';
import { throttle } from '@/lib/utils';

export const useSidebarPosition = (
  navRef: RefObject<HTMLDivElement>,
  navbarHeight = 80
) => {
  // 状态：侧边栏是否到达Instagram区域
  const [reachedInstagram, setReachedInstagram] = useState(false);
  // 侧边栏需要的顶部偏移量（当Instagram部分出现时）
  const [sidebarOffset, setSidebarOffset] = useState(0);
  // 记录侧边栏的高度
  const sidebarHeightRef = useRef(0);

  useEffect(() => {
    // 初始化侧边栏高度
    if (navRef.current) {
      sidebarHeightRef.current = navRef.current.offsetHeight;
    }
    
    // 使用节流函数减少计算频率，提高性能 - 这里简化为仅检测是否到达Instagram区域
    const calculatePosition = throttle(() => {
      if (!navRef.current) return;
      
      // 更新侧边栏高度（可能会随内容变化）
      sidebarHeightRef.current = navRef.current.offsetHeight;
      
      // 获取Instagram部分
      const instagramSection = document.getElementById('instagram-section');
      
      if (!instagramSection) return;
      
      // 获取Instagram部分顶部距离
      const instagramTop = instagramSection.getBoundingClientRect().top;
      
      // 仅用于状态标记，不再进行位置调整
      if (instagramTop < window.innerHeight) {
        setReachedInstagram(true);
      } else {
        setReachedInstagram(false);
      }
      
      // 不再设置sidebarOffset，保持固定位置
      setSidebarOffset(0);
    }, 100); // 降低计算频率到100ms，减少性能消耗
    
    // 计算初始位置并添加事件监听
    calculatePosition();
    window.addEventListener('scroll', calculatePosition);
    window.addEventListener('resize', calculatePosition);
    
    // 清理函数
    return () => {
      window.removeEventListener('scroll', calculatePosition);
      window.removeEventListener('resize', calculatePosition);
    };
  }, [navRef, navbarHeight]);
  
  const getPositioningStyle = () => {
    // 使用固定定位，保证侧边栏始终可见
    return {
      position: 'fixed',
      top: `${navbarHeight}px`, // 固定顶部位置，不再应用动态偏移
      left: 0,
      height: 'auto',
      maxHeight: `calc(100vh - ${navbarHeight}px)`,
      zIndex: 30,
      overflowY: 'auto', // 添加滚动条确保内容过长时也能完全查看
      paddingBottom: '20px' // 添加底部内边距避免内容紧贴底部
    } as React.CSSProperties;
  };
  
  return {
    getPositioningStyle,
    reachedInstagram
  };
};