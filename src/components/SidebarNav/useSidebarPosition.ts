import { useState, useEffect, useRef, RefObject } from 'react';

export const useSidebarPosition = (
  navRef: RefObject<HTMLDivElement>,
  navbarHeight = 80
) => {
  const [isFixed, setIsFixed] = useState(true);
  const [navTop, setNavTop] = useState(navbarHeight);
  const [shouldFollowScroll, setShouldFollowScroll] = useState(true);
  const [fixedPosition, setFixedPosition] = useState<number | null>(null);
  const [nearFooter, setNearFooter] = useState(false);
  const [footerTop, setFooterTop] = useState(0);

  useEffect(() => {
    const calculatePosition = () => {
      const instagramSection = document.getElementById('instagram-section');
      const footer = document.querySelector('footer');
      
      // If no footer or navRef not available, return early
      if (!footer || !navRef.current) return;

      // Get the footer position regardless of page
      const footerRect = footer.getBoundingClientRect();
      const navHeight = navRef.current.offsetHeight;
      
      // Get the current footer top position relative to the viewport
      const currentFooterTop = footerRect.top;
      setFooterTop(currentFooterTop);
      
      // Check if sidebar bottom would overlap with footer
      const navBottom = navbarHeight + navHeight;
      const isNearFooter = currentFooterTop <= navBottom + 20; // 20px buffer
      setNearFooter(isNearFooter);

      // Only do Instagram alignment if the section exists (on home page)
      if (instagramSection) {
        const instagramRect = instagramSection.getBoundingClientRect();
        
        // Calculate the middle points
        const instagramMiddle = instagramRect.top + instagramRect.height / 2;
        const navMiddle = navHeight / 2;
        
        // If scrolling down and nav middle aligns with Instagram middle
        if (window.scrollY > 0 && instagramMiddle <= navMiddle + navbarHeight) {
          if (shouldFollowScroll) {
            // We've reached the alignment point, fix the nav at this position
            const currentWindowScrollY = window.scrollY;
            setFixedPosition(currentWindowScrollY);
            setShouldFollowScroll(false);
            setIsFixed(true);
          }
        } else if (window.scrollY === 0 || instagramMiddle > navMiddle + navbarHeight) {
          // We're above the Instagram section or at the top, resume normal scroll following
          setShouldFollowScroll(true);
          setFixedPosition(null);
          setIsFixed(true);
          setNavTop(navbarHeight);
        }
      } else {
        // For pages without Instagram section, just keep nav fixed
        setIsFixed(true);
        setNavTop(navbarHeight);
      }
    };

    // Calculate on initial load and on scroll/resize
    calculatePosition();
    window.addEventListener('scroll', calculatePosition);
    window.addEventListener('resize', calculatePosition);

    return () => {
      window.removeEventListener('scroll', calculatePosition);
      window.removeEventListener('resize', calculatePosition);
    };
  }, [shouldFollowScroll, navRef, navbarHeight]);

  const getPositioningStyle = () => {
    if (nearFooter) {
      // If near footer, use absolute positioning to avoid overlap
      return {
        position: 'absolute',
        top: `calc(${footerTop}px - ${navRef.current?.offsetHeight || 0}px - 20px)`, // 20px buffer
        left: 0,
        height: 'auto',
        maxHeight: 'calc(100vh - 80px)',
        zIndex: 30 // Ensure sidebar appears above other content
      } as React.CSSProperties;
    }
    
    if (isFixed) {
      return { 
        position: 'fixed',
        top: fixedPosition ? `${navTop}px` : `${navTop}px`,
        left: 0,
        height: 'auto',
        maxHeight: 'calc(100vh - 80px)',
        zIndex: 30, // Ensure sidebar appears above other content
        transform: fixedPosition ? `translateY(${fixedPosition - window.scrollY}px)` : 'none'
      } as React.CSSProperties;
    }
    
    return {
      position: 'absolute',
      top: `${navTop}px`,
      left: 0,
      height: 'auto',
      zIndex: 30 // Ensure sidebar appears above other content
    } as React.CSSProperties;
  };

  return {
    getPositioningStyle
  };
};
