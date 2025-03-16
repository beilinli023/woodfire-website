
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  {
    title: 'TIBETAN',
    emoji: '🧘',
    path: '/categories/tibetan'
  }, 
  {
    title: 'CRYSTALS & GEMS',
    emoji: '🔮',
    path: '/categories/crystals'
  }, 
  {
    title: 'COLLECTIONS',
    emoji: '',
    path: '/collections'
  }, 
  {
    title: 'GIFT',
    emoji: '🎁',
    path: '/gift'
  }, 
  {
    title: 'INTENTIONS',
    emoji: '',
    path: '/intentions'
  }, 
  {
    title: 'ARTISTS',
    emoji: '',
    path: '/artists'
  }, 
  {
    title: 'STYLES',
    emoji: '',
    path: '/styles'
  }, 
  {
    title: 'SYMBOL',
    emoji: '',
    path: '/symbol'
  }, 
  {
    title: 'BLESSING',
    emoji: '',
    path: '/blessing'
  }
];

const VerticalNav = () => {
  return (
    <div className="py-8 px-4">
      <nav className="flex flex-col space-y-6">
        {navItems.map((item, index) => (
          <Link 
            key={index} 
            to={item.path} 
            className="flex items-center text-white/90 hover:text-white font-medium text-sm lg:text-base transition-all duration-300 group"
          >
            <span className="flex items-center">
              {item.title} {item.emoji && <span className="ml-2">{item.emoji}</span>}
            </span>
            {index < navItems.length - 1 && <ChevronRight className="ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default VerticalNav;
