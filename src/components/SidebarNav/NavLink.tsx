
import React from 'react';
import { Link } from 'react-router-dom';
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
        className="flex items-center text-white hover:text-white/80 font-medium text-sm lg:text-base transition-all duration-300 group"
      >
        <span className="flex items-center">
          {item.title} {item.emoji && <span className="ml-2">{item.emoji}</span>}
        </span>
      </a>
    );
  }

  return (
    <Link 
      to={item.path} 
      className="flex items-center text-white hover:text-white/80 font-medium text-sm lg:text-base transition-all duration-300 group"
    >
      <span className="flex items-center">
        {item.title} {item.emoji && <span className="ml-2">{item.emoji}</span>}
      </span>
    </Link>
  );
};

export default NavLink;
