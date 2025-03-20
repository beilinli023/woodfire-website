
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
        className="flex items-center justify-center text-white hover:text-white/80 font-medium text-sm lg:text-base transition-all duration-300 group"
      >
        {item.emoji && <span className="text-2xl">{item.emoji}</span>}
      </a>
    );
  }

  return (
    <Link 
      to={item.path} 
      className="flex items-center justify-center text-white hover:text-white/80 font-medium text-sm lg:text-base transition-all duration-300 group"
    >
      {item.emoji && <span className="text-2xl">{item.emoji}</span>}
    </Link>
  );
};

export default NavLink;
