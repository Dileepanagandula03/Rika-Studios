
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Mail, Phone, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Small delay to prevent accidental closing
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Services', 
      path: '/services', 
      isDropdown: true,
      items: SERVICES.map(s => ({ name: s.title, path: `/services/${s.id}` }))
    },
    { 
      name: 'Portfolio', 
      path: '/portfolio', 
      isDropdown: true,
      items: [
        { name: 'Projects', path: '/portfolio/projects' },
        { name: 'Case Studies', path: '/portfolio/case-studies' }
      ]
    },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500`}>
      {/* Top Info Bar */}
      <div className={`border-b border-gray-100 py-2 hidden md:block transition-all duration-500 ${scrolled ? 'bg-white/90 translate-y-[-100%] opacity-0' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center text-[8px] uppercase tracking-[3px] text-gray-400 font-black">
          <div className="flex items-center gap-3">
            <Mail size={12} className="text-[#E91E63]" />
            <span>hello@rikagayar.studios</span>
          </div>
          <div className="flex items-center gap-4">
            <Instagram size={14} className="hover:text-[#E91E63] cursor-pointer transition-colors" />
            <Linkedin size={14} className="hover:text-[#E91E63] cursor-pointer transition-colors" />
            <div className="h-4 w-[1px] bg-gray-200"></div>
            <div className="flex items-center gap-3">
              <Phone size={12} className="text-[#E91E63]" />
              <span>+1 (301) 852-4988</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`transition-all duration-500 ${scrolled ? 'bg-white/80 shadow-sm py-3 backdrop-blur-md' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <Logo className="w-12 h-12" layout="horizontal" />
          </Link>

          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => link.isDropdown && handleMouseEnter(link.name)}
                onMouseLeave={() => link.isDropdown && handleMouseLeave()}
              >
                {link.isDropdown ? (
                  <div className="flex items-center gap-1 cursor-pointer py-2 text-[11px] uppercase tracking-[2px] text-[#2D3134] hover:text-[#E91E63] font-black transition-colors">
                    <Link to={link.path}>{link.name}</Link>
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180 text-[#E91E63]' : ''}`} />
                    
                    {/* The bridge: we use pt-4 and no mt-2 to ensure the hover area is continuous */}
                    <div className={`absolute top-full left-0 w-64 transition-all duration-300 pointer-events-none ${activeDropdown === link.name ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-2 scale-95'}`}>
                      <div className="pt-4"> {/* Invisible bridge area */}
                        <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-100 overflow-hidden">
                          {link.items?.map((item, idx) => (
                            <Link
                              key={idx}
                              to={item.path}
                              className="block px-6 py-4 text-[10px] uppercase tracking-[1px] text-[#2D3134] hover:bg-[#FFF5F8] hover:text-[#E91E63] font-bold border-b border-gray-50 last:border-0 transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link 
                    to={link.path}
                    className={`py-2 text-[11px] uppercase tracking-[2px] text-[#2D3134] hover:text-[#E91E63] font-black transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E91E63] after:transition-all after:duration-300 hover:after:w-full ${location.pathname === link.path ? 'after:w-full text-[#E91E63]' : ''}`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 rounded-full bg-[#2D3134] text-white text-[10px] uppercase font-black tracking-[3px] shadow-lg hover:bg-[#E91E63] transition-all transform hover:scale-105"
            >
              Start Evolution
            </Link>
          </div>

          <button className="lg:hidden text-[#2D3134]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-[60] lg:hidden transition-all duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-8 relative z-10 overflow-y-auto">
          <button className="absolute top-8 right-8 text-[#2D3134]" onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>
          <div className="mb-12">
             <span className="text-[10px] uppercase tracking-[5px] text-[#E91E63] font-black">Menu</span>
          </div>
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col">
              <Link 
                to={link.path} 
                className="text-3xl font-bold text-[#2D3134] py-6 border-b border-gray-100 flex items-center justify-between group"
                onClick={() => !link.isDropdown && setIsOpen(false)}
              >
                {link.name}
                <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 transition-all text-[#E91E63]" />
              </Link>
              {link.isDropdown && (
                <div className="pl-6 bg-gray-50/50 flex flex-col">
                  {link.items?.map((item, idx) => (
                    <Link 
                      key={idx} 
                      to={item.path} 
                      className="py-4 text-[10px] uppercase tracking-[2px] font-black text-gray-500 border-b border-gray-100 last:border-0"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-12 pb-12">
             <Link to="/contact" className="w-full bg-[#E91E63] text-white text-center py-5 rounded-full text-lg font-black shadow-xl block" onClick={() => setIsOpen(false)}>Start Evolution</Link>
             <div className="mt-8 flex justify-center gap-6 text-gray-400">
                <Instagram size={24} />
                <Linkedin size={24} />
             </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
