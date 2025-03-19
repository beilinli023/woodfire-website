
import { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { ShoppingCart as ShoppingCartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthDialog from './auth/AuthDialog';
import ShoppingCart from './cart/ShoppingCart';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-white font-bold text-xl">
                Logo占位图
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/blessing" className="text-white hover:text-gray-300 transition-colors px-3 py-2 text-sm font-medium">
                About Us
              </Link>
              <Link to="/blessing" className="text-white hover:text-gray-300 transition-colors px-3 py-2 text-sm font-medium">
                blessing
              </Link>
              <Link to="/charity" className="text-white hover:text-gray-300 transition-colors px-3 py-2 text-sm font-medium">
                慈善
              </Link>
              <Link to="/contact" className="text-white hover:text-gray-300 transition-colors px-3 py-2 text-sm font-medium">
                联系我们
              </Link>
            </nav>
            
            {/* Right Side Icons */}
            <div className="flex items-center">
              <button className="text-white p-2 hover:text-gray-300 transition-colors">
                <Search size={20} />
              </button>
              <button 
                className="text-white p-2 hover:text-gray-300 transition-colors relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCartIcon size={20} />
                <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-white text-black text-xs flex items-center justify-center">
                  {getTotalItems()}
                </span>
              </button>
              <AuthDialog />
              
              {/* Mobile menu button */}
              <button className="md:hidden text-white p-2 hover:text-gray-300 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && <div className="md:hidden bg-black/95 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/blessing" className="text-white hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link to="/blessing" className="text-white hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                blessing
              </Link>
              <Link to="/charity" className="text-white hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                慈善
              </Link>
              <Link to="/contact" className="text-white hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                联系我们
              </Link>
            </div>
          </div>}
      </header>
      
      {/* Shopping Cart Component */}
      <ShoppingCart />
    </>
  );
};

export default Navbar;
