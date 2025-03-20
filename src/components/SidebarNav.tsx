import React, { useState, useEffect, useRef, useLocation } from 'react';
import { ChevronRight, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmailSubscriptionDialog from './EmailSubscription/EmailSubscriptionDialog';

const navItems = [
  {
    title: '所有商品',
    emoji: '🛍️',
    path: '/products'
  },
  {
    title: 'KEEP HEALTH',
    emoji: '🧘',
    path: '/categories/health'
  },
  {
    title: 'KEEP LUCKY',
    emoji: '🍀',
    path: '/categories/lucky'
  },
  {
    title: 'KEEP MORE',
    emoji: '🌟',
    path: '#'
  },
  {
    title: 'BLESSING',
    emoji: '💎',
    path: '/blessing'
  }
];

const SidebarNav = () => {
  const location = useLocation();
  const [showEmailSubscription, setShowEmailSubscription] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(true);
  const [navTop, setNavTop] = useState(80); // Default top position (navbar height)
  const [shouldFollowScroll, setShouldFollowScroll] = useState(true);
  const [fixedPosition, setFixedPosition] = useState<number | null>(null);
  const [nearFooter, setNearFooter] = useState(false);
  const [footerTop, setFooterTop] = useState(0);

  useEffect(() => {
    const calculatePosition = () => {
      const instagramSection = document.getElementById('instagram-section');
      const footer = document.querySelector('footer');
      
      // If on blessing page or other pages without Instagram section, we still need footer detection
      if (!footer || !navRef.current) return;

      // Get the footer position regardless of page
      const footerRect = footer.getBoundingClientRect();
      const navHeight = navRef.current.offsetHeight;
      
      // Get the current footer top position relative to the viewport
      const currentFooterTop = footerRect.top;
      setFooterTop(currentFooterTop);
      
      // Navbar height is 80px
      const navbarHeight = 80;
      
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
  }, [shouldFollowScroll, location.pathname]);

  const handleKeepMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowEmailSubscription(true);
  };

  const scrollToInstagram = (e: React.MouseEvent) => {
    e.preventDefault();
    const instagramSection = document.getElementById('instagram-section');
    if (instagramSection) {
      instagramSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Determine the appropriate positioning style based on scroll state and footer proximity
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

  // Check if we should show the Instagram link based on the current page
  const showInstagramLink = location.pathname === '/' || location.pathname === '/home';

  return (
    <div 
      ref={navRef}
      className="py-8 px-4 w-full"
      style={getPositioningStyle()}
    >
      <nav className="flex flex-col space-y-6">
        {/* Regular nav items */}
        {navItems.map((item, index) => (
          item.title === 'KEEP MORE' ? (
            <a 
              key={index}
              href="#" 
              onClick={handleKeepMoreClick}
              className="flex items-center justify-between text-white hover:text-white/80 font-medium text-sm lg:text-base transition-all duration-300 group"
            >
              <span className="flex items-center">
                {item.title} {item.emoji && <span className="ml-2">{item.emoji}</span>}
              </span>
              <ChevronRight className="ml-2 w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
          ) : (
            <Link 
              key={index} 
              to={item.path} 
              className="flex items-center justify-between text-white hover:text-white/80 font-medium text-sm lg:text-base transition-all duration-300 group"
            >
              <span className="flex items-center">
                {item.title} {item.emoji && <span className="ml-2">{item.emoji}</span>}
              </span>
              <ChevronRight className="ml-2 w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            </Link>
          )
        ))}

        {/* Instagram anchor link - only show on home page */}
        {showInstagramLink && (
          <a 
            href="#instagram-section" 
            onClick={scrollToInstagram}
            className="flex items-center justify-between text-white hover:text-white/80 font-medium text-sm lg:text-base transition-all duration-300 group"
          >
            <span className="flex items-center">
              关注我们 <span className="ml-2">📸</span>
            </span>
            <Instagram className="ml-2 w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
        )}
      </nav>

      {/* Email Subscription Dialog */}
      <EmailSubscriptionDialog 
        open={showEmailSubscription} 
        onOpenChange={setShowEmailSubscription} 
      />
    </div>
  );
};

export default SidebarNav;
