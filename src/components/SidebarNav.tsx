
import React, { useRef, useState } from 'react';
import EmailSubscriptionDialog from './EmailSubscription/EmailSubscriptionDialog';
import NavLink from './SidebarNav/NavLink';
import { navItems } from './SidebarNav/navItems';
import { useSidebarPosition } from './SidebarNav/useSidebarPosition';
import HealthAssessmentCard from './HealthAssessment';
import FiveElementsCalculator from './FiveElementsCalculator';

const SidebarNav = () => {
  const [showEmailSubscription, setShowEmailSubscription] = useState(false);
  const [showHealthAssessment, setShowHealthAssessment] = useState(false);
  const [showFiveElements, setShowFiveElements] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  
  const { getPositioningStyle } = useSidebarPosition(navRef);

  const handleKeepMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowEmailSubscription(true);
  };

  const handleKeepHealthClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowHealthAssessment(true);
  };

  const handleKeepLuckyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowFiveElements(true);
  };

  return (
    <div 
      ref={navRef}
      className="py-8 px-4 w-full"
      style={getPositioningStyle()}
    >
      <nav className="flex flex-col space-y-6">
        {/* Regular nav items */}
        {navItems.map((item, index) => {
          if (item.title === 'KEEP MORE') {
            return (
              <NavLink 
                key={index}
                item={item}
                onClick={handleKeepMoreClick}
                isSpecial={true}
              />
            );
          } else if (item.title === 'KEEP HEALTH') {
            return (
              <NavLink 
                key={index}
                item={item}
                onClick={handleKeepHealthClick}
                isSpecial={true}
              />
            );
          } else if (item.title === 'KEEP LUCKY') {
            return (
              <NavLink 
                key={index}
                item={item}
                onClick={handleKeepLuckyClick}
                isSpecial={true}
              />
            );
          } else {
            return (
              <NavLink 
                key={index} 
                item={item}
              />
            );
          }
        })}
      </nav>

      {/* Dialogs */}
      <EmailSubscriptionDialog 
        open={showEmailSubscription} 
        onOpenChange={setShowEmailSubscription} 
      />
      
      <HealthAssessmentCard 
        open={showHealthAssessment} 
        onOpenChange={setShowHealthAssessment} 
      />

      <FiveElementsCalculator />
    </div>
  );
};

export default SidebarNav;
