
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { title: 'TIBETAN', emoji: '🧘', path: '/categories/tibetan' },
  { title: 'CRYSTALS & GEMS', emoji: '🔮', path: '/categories/crystals' },
  { title: 'COLLECTIONS', emoji: '', path: '/collections' },
  { title: 'GIFT', emoji: '🎁', path: '/gift' },
  { title: 'INTENTIONS', emoji: '', path: '/intentions' },
  { title: 'ARTISTS', emoji: '', path: '/artists' },
  { title: 'STYLES', emoji: '', path: '/styles' },
  { title: 'SYMBOL', emoji: '', path: '/symbol' },
  { title: 'BLESSING', emoji: '', path: '/blessing' },
];

const VerticalNav = () => {
  return (
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-30 pl-6 sm:pl-8 lg:pl-12">
      <nav className="flex flex-col space-y-6">
        {navItems.map((item, index) => (
          <Link 
            key={index} 
            to={item.path}
            className="flex items-center text-white/90 hover:text-white font-medium text-lg sm:text-xl lg:text-2xl transition-all duration-300 group"
          >
            <span className="flex items-center">
              {item.title} {item.emoji && <span className="ml-2">{item.emoji}</span>}
            </span>
            {index < navItems.length - 1 && (
              <ChevronRight className="ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default VerticalNav;
