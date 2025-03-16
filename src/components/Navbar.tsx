import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-gray-300 transition-colors px-3 py-2 text-sm font-medium">
              首页
            </Link>
            <Link to="/products" className="text-white hover:text-gray-300 transition-colors px-3 py-2 text-sm font-medium">
              产品
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300 transition-colors px-3 py-2 text-sm font-medium">
              关于我们
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
            <button className="text-white p-2 hover:text-gray-300 transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-white text-black text-xs flex items-center justify-center">
                0
              </span>
            </button>
            <button className="text-white p-2 hover:text-gray-300 transition-colors">
              <User size={20} />
            </button>
            
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
            <Link to="/" className="text-white hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              首页
            </Link>
            <Link to="/products" className="text-white hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              产品
            </Link>
            <Link to="/about" className="text-white hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              关于我们
            </Link>
            <Link to="/contact" className="text-white hover:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              联系我们
            </Link>
          </div>
        </div>}
    </header>;
};
export default Navbar;