import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrollPosition: number;
}

export const Navbar: React.FC<NavbarProps> = ({ scrollPosition }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Determine active section based on scroll position
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const checkActiveSection = () => {
      const scrollY = window.scrollY;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', checkActiveSection);
    checkActiveSection(); // Check on initial load
    
    return () => window.removeEventListener('scroll', checkActiveSection);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrollPosition > 50 ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a 
          href="#home" 
          className="text-2xl font-bold text-slate-800 dark:text-white hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          Portfolio
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative text-sm font-medium transition-colors duration-300 hover:text-slate-600 dark:hover:text-slate-300 ${
                activeSection === item.id ? 'text-slate-800 dark:text-white' : 'text-slate-600 dark:text-slate-400'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-slate-800 dark:bg-white animate-expandWidth" />
              )}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 z-50 bg-white dark:bg-slate-900 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 flex justify-between items-center">
            <span className="text-2xl font-bold text-slate-800 dark:text-white">Portfolio</span>
            <button
              className="p-2 rounded-md text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 space-y-6">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-xl font-medium transition-colors duration-300 ${
                  activeSection === item.id ? 'text-slate-800 dark:text-white' : 'text-slate-600 dark:text-slate-400'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};