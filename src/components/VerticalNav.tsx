
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HealthAssessmentCard from './HealthAssessmentCard';
import FiveElementsCalculator from './FiveElementsCalculator';

const navItems = [
  {
    title: 'KEEP MORE',
    emoji: '🌟',
    path: '/gift'
  },
  {
    title: 'CHARITY',
    emoji: '💎',
    path: '/charity'
  }
];

const VerticalNav = () => {
  return (
    <div className="h-full py-8 px-4">
      <nav className="flex flex-col space-y-6">
        {/* Health item with dialog trigger */}
        <div className="flex items-center justify-between text-white hover:text-white/80 font-medium text-sm lg:text-base transition-all duration-300 group">
          <HealthAssessmentCard />
          <ChevronRight className="ml-2 w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
        </div>
        
        {/* Lucky item with dialog trigger */}
        <div className="flex items-center justify-between text-white hover:text-white/80 font-medium text-sm lg:text-base transition-all duration-300 group">
          <FiveElementsCalculator />
          <ChevronRight className="ml-2 w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
        </div>
        
        {/* Regular nav items */}
        {navItems.map((item, index) => (
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
        ))}
      </nav>
    </div>
  );
};

export default VerticalNav;
