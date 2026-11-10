import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onNavigateToContact?: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigateToContact }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'hero' | 'services' | 'about' | 'contact'>('hero');

  // Auto-collapsing scroll dynamics: hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      // Section tracking for active state
      const servicesEl = document.getElementById('services');
      const aboutEl = document.getElementById('about');
      const contactEl = document.getElementById('contact');

      const scrollPos = currentScrollY + 250;
      if (contactEl && scrollPos >= contactEl.offsetTop) {
        setActiveSection('contact');
      } else if (aboutEl && scrollPos >= aboutEl.offsetTop) {
        setActiveSection('about');
      } else if (servicesEl && scrollPos >= servicesEl.offsetTop) {
        setActiveSection('services');
      } else {
        setActiveSection('hero');
      }

      if (mobileMenuOpen) {
        setIsVisible(true);
        return;
      }

      if (currentScrollY <= 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Services', target: 'services' },
    { label: 'About', target: 'about' },
    { label: 'Contact', target: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-black/5 shadow-sm'
          : 'bg-white/80 backdrop-blur-md border-b border-black/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo: cynabyte. (text only, "." is the accent color) */}
          <button
            type="button"
            onClick={() => scrollTo('hero')}
            className="group flex items-center select-none text-2xl font-bold tracking-tight text-black transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
            aria-label="Cynabyte Tech"
          >
            <span>cynabyte</span>
            <span className="text-[#ADF802] font-black inline-block transition-transform duration-300 group-hover:scale-125">
              .
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.target;
              return (
                <button
                  key={item.target}
                  type="button"
                  onClick={() => scrollTo(item.target)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-black bg-black/5 font-semibold'
                      : 'text-neutral-700 hover:text-black hover:bg-black/[0.03]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Header Action Button: Let's Talk */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              type="button"
              onClick={() => {
                if (onNavigateToContact) {
                  onNavigateToContact();
                } else {
                  scrollTo('contact');
                }
              }}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-bold text-black bg-[#ADF802] rounded-full transition-all duration-200 hover:bg-[#9ee000] hover:shadow-[0_0_20px_rgba(173,248,2,0.6)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="ml-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-black hover:bg-black/5 transition-colors focus:outline-none cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-black/10 px-4 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col space-y-1 mb-4" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <button
                key={item.target}
                type="button"
                onClick={() => scrollTo(item.target)}
                className="px-4 py-3 rounded-xl text-base font-medium text-left text-neutral-800 hover:bg-neutral-100 flex items-center justify-between cursor-pointer"
              >
                <span>{item.label}</span>
                {activeSection === item.target && (
                  <span className="w-2 h-2 rounded-full bg-[#ADF802]" />
                )}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
