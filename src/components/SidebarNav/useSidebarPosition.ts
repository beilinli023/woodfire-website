
import { useState, useEffect, useRef, RefObject } from 'react';

export const useSidebarPosition = (
  navRef: RefObject<HTMLDivElement>,
  navbarHeight = 80
) => {
  const [isSticky, setIsSticky] = useState(true);
  const [hasReachedInstagram, setHasReachedInstagram] = useState(false);
  const [absoluteTopPosition, setAbsoluteTopPosition] = useState(0);

  useEffect(() => {
    const calculatePosition = () => {
      const instagramSection = document.getElementById('instagram-section');
      
      // If no instagramSection or navRef not available, return early
      if (!instagramSection || !navRef.current) return;

      // Get the Instagram section position
      const instagramRect = instagramSection.getBoundingClientRect();
      
      // Calculate the trigger point - when the Instagram section is coming into view
      const triggerPoint = window.innerHeight - 200; // 200px before the section is fully visible
      
      // Check if we've reached the Instagram section
      if (instagramRect.top <= triggerPoint) {
        // If we haven't already set the absolute position, do it now
        if (!hasReachedInstagram) {
          // Calculate where the sidebar should stop (current scroll position minus some offset)
          const stopPosition = window.scrollY - 100; // 100px offset for visual balance
          setAbsoluteTopPosition(Math.max(stopPosition, 0));
        }
        
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
  }, [navRef, hasReachedInstagram]);

  const getPositioningStyle = () => {
    // If we're before the Instagram section, use sticky positioning
    if (isSticky) {
      return {
        position: 'fixed',
        top: `${navbarHeight}px`,
        left: 0,
        height: 'auto',
        maxHeight: 'calc(100vh - 80px)',
        zIndex: 30 // Ensure sidebar appears above other content
      } as React.CSSProperties;
    }
    
    // Once we reach the Instagram section, use absolute positioning with a fixed top
    // This will make the sidebar stop and stay in place while the rest of the page scrolls
    return {
      position: 'absolute',
      top: `${absoluteTopPosition}px`,
      left: 0,
      height: 'auto',
      maxHeight: 'calc(100vh - 80px)',
      zIndex: 30
    } as React.CSSProperties;
  };

  return {
    getPositioningStyle,
    isSticky,
    hasReachedInstagram
  };
};
