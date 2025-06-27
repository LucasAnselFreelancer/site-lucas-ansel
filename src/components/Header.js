import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'À propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Ressources', href: '#resources' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-lg' : 'bg-white/95'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="font-bold text-xl">
              <span className="text-gray-900">LA</span>
              <span className="text-orange-500 ml-2">Lucas Ansel</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary"
            >
              Un projet ?
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left px-6 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-50 font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-6 pt-4">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="btn-primary w-full"
                >
                  Un projet ?
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;