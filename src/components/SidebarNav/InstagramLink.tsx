
import React from 'react';
import { Instagram } from 'lucide-react';

interface InstagramLinkProps {
  onClick: (e: React.MouseEvent) => void;
}

const InstagramLink = ({ onClick }: InstagramLinkProps) => {
  return (
    <a 
      href="#instagram-section" 
      onClick={onClick}
      className="flex items-center justify-between text-white hover:text-white/80 font-medium text-sm lg:text-base transition-all duration-300 group"
    >
      <span className="flex items-center">
        关注我们 <span className="ml-2">📸</span>
      </span>
      <Instagram className="ml-2 w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
    </a>
  );
};

export default InstagramLink;
