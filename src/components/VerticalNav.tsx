
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
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
  const [maxHeight, setMaxHeight] = useState('calc(100vh - 80px)');

  useEffect(() => {
    const adjustNavHeight = () => {
      // Get the Instagram section and footer positions
      const instagramSection = document.getElementById('instagram-section');
      if (instagramSection) {
        const instagramBottom = instagramSection.getBoundingClientRect().bottom;
        // Set the max height to ensure it doesn't go beyond the Instagram section
        const newMaxHeight = `${instagramBottom - 80}px`;
        setMaxHeight(newMaxHeight);
      }
    };

    // Adjust on initial load and window resize
    adjustNavHeight();
    window.addEventListener('resize', adjustNavHeight);
    window.addEventListener('scroll', adjustNavHeight);

    return () => {
      window.removeEventListener('resize', adjustNavHeight);
      window.removeEventListener('scroll', adjustNavHeight);
    };
  }, []);

  const handleKeepMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowEmailSubscription(true);
  };

  return (
    <div className="h-full py-8 px-4" style={{ maxHeight }}>
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
