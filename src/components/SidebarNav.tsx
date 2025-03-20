
import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import EmailSubscriptionDialog from './EmailSubscription/EmailSubscriptionDialog';
import NavLink from './SidebarNav/NavLink';
import { navItems } from './SidebarNav/navItems';
import { useSidebarPosition } from './SidebarNav/useSidebarPosition';

const SidebarNav = () => {
  const location = useLocation();
  const [showEmailSubscription, setShowEmailSubscription] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  
  const { getPositioningStyle, isSticky, hasReachedInstagram } = useSidebarPosition(navRef);

  const handleKeepMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowEmailSubscription(true);
  };

  return (
    <div 
      ref={navRef}
      className="py-8 px-4 w-full"
      style={getPositioningStyle()}
    >
      <nav className="flex flex-col space-y-8">
        {/* Regular nav items */}
        {navItems.map((item, index) => (
          item.title === 'KEEP MORE' ? (
            <NavLink 
              key={index}
              item={item}
              onClick={handleKeepMoreClick}
              isSpecial={true}
            />
          ) : (
            <NavLink 
              key={index} 
              item={item}
            />
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

export default SidebarNav;
