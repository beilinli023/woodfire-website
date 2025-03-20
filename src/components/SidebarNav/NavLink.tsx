
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { NavItem } from './navItems';

interface NavLinkProps {
  item: NavItem;
  onClick?: (e: React.MouseEvent) => void;
  isSpecial?: boolean;
}

const NavLink = ({ item, onClick, isSpecial = false }: NavLinkProps) => {
  if (isSpecial) {
    return (
      <a 
        href="#" 
        onClick={onClick}
        className="flex items-center justify-between text-white hover:text-white/80 font-medium text-sm lg:text-base transition-all duration-300 group"
      >
        <span className="flex items-center">
          {item.title} {item.emoji && <span className="ml-2">{item.emoji}</span>}
        </span>
        <ChevronRight className="ml-2 w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
      </a>
    );
  }

  return (
    <Link 
      to={item.path} 
      className="flex items-center justify-between text-white hover:text-white/80 font-medium text-sm lg:text-base transition-all duration-300 group"
    >
      <span className="flex items-center">
        {item.title} {item.emoji && <span className="ml-2">{item.emoji}</span>}
      </span>
      <ChevronRight className="ml-2 w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
    </Link>
  );
};

export default NavLink;
