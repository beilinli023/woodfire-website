
import React, { useState, useEffect, useRef } from 'react';
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

const VerticalNav = () => {
  const [showEmailSubscription, setShowEmailSubscription] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(true);
  const [navTop, setNavTop] = useState(80); // Default top position (navbar height)

  useEffect(() => {
    const calculatePosition = () => {
      const instagramSection = document.getElementById('instagram-section');
      if (!instagramSection || !navRef.current) return;

      const instagramTop = instagramSection.getBoundingClientRect().top;
      const instagramMiddle = instagramTop + instagramSection.getBoundingClientRect().height / 2;
      const navHeight = navRef.current.offsetHeight;
      
      // Calculate when the middle of nav would align with the middle of Instagram section
      const navMiddle = 80 + navHeight / 2; // 80px is the navbar height + half of nav height
      
      if (instagramMiddle <= navMiddle) {
        // We've reached the alignment point, fix the nav at this position
        setIsFixed(false);
        setNavTop(instagramMiddle - navHeight / 2);
      } else {
        // We're still above the Instagram section, keep nav fixed at top
        setIsFixed(true);
        setNavTop(80);
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
  }, []);

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

  return (
    <div 
      ref={navRef}
      className="py-8 px-4 w-full"
      style={{ 
        position: isFixed ? 'fixed' : 'absolute',
        top: `${navTop}px`,
        left: 0,
        height: 'auto',
        maxHeight: 'calc(100vh - 80px)'
      }}
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

        {/* Instagram anchor link */}
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
      </nav>

      {/* Email Subscription Dialog */}
      <EmailSubscriptionDialog 
        open={showEmailSubscription} 
        onOpenChange={setShowEmailSubscription} 
      />
    </div>
  );
};

export default VerticalNav;
