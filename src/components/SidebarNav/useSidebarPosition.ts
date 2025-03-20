
import { useState, useEffect, useRef, RefObject } from 'react';

export const useSidebarPosition = (
  navRef: RefObject<HTMLDivElement>,
  navbarHeight = 80
) => {
  const [isSticky, setIsSticky] = useState(true);
  const [hasReachedInstagram, setHasReachedInstagram] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const calculatePosition = () => {
      const instagramSection = document.getElementById('instagram-section');
      const testimonialSection = document.querySelector('.py-16.px-4');
      
      // If no instagramSection or navRef not available, return early
      if (!instagramSection || !navRef.current) return;

      // Update current scroll position
      setScrollY(window.scrollY);

      // Get the Instagram section position
      const instagramRect = instagramSection.getBoundingClientRect();
      
      // Calculate the trigger point - when the Instagram section is coming into view
      // We want to transition before it's fully visible
      const triggerPoint = window.innerHeight - 200; // 200px before the section is fully visible
      
      // Check if we've reached the Instagram section
      if (instagramRect.top <= triggerPoint) {
        setHasReachedInstagram(true);
        setIsSticky(false);
      } else {
        setHasReachedInstagram(false);
        setIsSticky(true);
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
  }, [navRef]);

  const getPositioningStyle = () => {
    // If we're before the Instagram section, use fixed positioning
    if (isSticky) {
      return {
        position: 'fixed',
        top: `${navbarHeight}px`,
        left: 0,
        height: 'auto',
        maxHeight: 'calc(100vh - 80px)',
        opacity: 1,
        zIndex: 30, // Ensure sidebar appears above other content
        transition: 'opacity 0.3s ease'
      } as React.CSSProperties;
    }
    
    // Once we reach the Instagram section, use absolute positioning with a transform
    // This will make the sidebar stop and stay in place while the rest of the page scrolls
    return {
      position: 'absolute',
      top: 0,
      left: 0,
      transform: `translateY(${Math.max(scrollY - 180, 0)}px)`, // Use stored scrollY instead of window.scrollY
      height: 'auto',
      maxHeight: 'calc(100vh - 80px)',
      opacity: 1,
      zIndex: 30,
      transition: 'opacity 0.3s ease'
    } as React.CSSProperties;
  };

  return {
    getPositioningStyle,
    isSticky,
    hasReachedInstagram
  };
};
