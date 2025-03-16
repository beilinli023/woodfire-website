
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  {
    title: 'KEEP HEALTH',
    emoji: '🧘‍♂️',
    path: '/categories/health'
  }, 
  {
    title: 'KEEP LUCKY',
    emoji: '☘️',
    path: '/categories/lucky'
  }, 
  {
    title: 'KEEP MORE',
    emoji: '🌟',
    path: '/gift'
  }
];

const VerticalNav = () => {
  return (
    <div className="h-full py-8 px-4">
      <nav className="flex flex-col space-y-6">
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
