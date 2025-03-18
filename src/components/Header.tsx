
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu if open
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 shadow-sm backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-tight text-blue-500">FOVY</span>
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a 
            className="nav-link" 
            href="#features"
            onClick={(e) => handleNavClick(e, 'features')}
          >
            Features
          </a>
          <a 
            className="nav-link" 
            href="#mind-map"
            onClick={(e) => handleNavClick(e, 'mind-map')}
          >
            Career Mapping
          </a>
          <a 
            className="nav-link" 
            href="#air-minder"
            onClick={(e) => handleNavClick(e, 'air-minder')}
          >
            AIR Minder
          </a>
          <a 
            className="nav-link" 
            href="#career-insights"
            onClick={(e) => handleNavClick(e, 'career-insights')}
          >
            Smart Matching
          </a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" className="h-9 rounded-xl bg-white/50 backdrop-blur-sm border border-slate-200 text-slate-700 shadow-sm">
            Sign In
          </Button>
          <Button size="sm" className="h-9 bg-blue-500 hover:bg-blue-600 rounded-xl shadow-md shadow-blue-500/20">
            Get Started
          </Button>
        </div>
        <button
          className="flex items-center justify-center rounded-md p-2 text-slate-600 hover:text-slate-900 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>
      
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto bg-white/80 backdrop-blur-lg p-6 pb-32 shadow-md animate-fade-in md:hidden">
          <div className="flex flex-col gap-6 text-lg">
            <a
              className="flex items-center py-2 text-slate-600 hover:text-slate-900"
              href="#features"
              onClick={(e) => handleNavClick(e, 'features')}
            >
              Features
            </a>
            <a
              className="flex items-center py-2 text-slate-600 hover:text-slate-900"
              href="#mind-map"
              onClick={(e) => handleNavClick(e, 'mind-map')}
            >
              Career Mapping
            </a>
            <a
              className="flex items-center py-2 text-slate-600 hover:text-slate-900"
              href="#air-minder"
              onClick={(e) => handleNavClick(e, 'air-minder')}
            >
              AIR Minder
            </a>
            <a
              className="flex items-center py-2 text-slate-600 hover:text-slate-900"
              href="#career-insights"
              onClick={(e) => handleNavClick(e, 'career-insights')}
            >
              Smart Matching
            </a>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="outline" className="w-full bg-white/50 backdrop-blur-sm border border-slate-200 text-slate-700 rounded-xl">
                Sign In
              </Button>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 rounded-xl shadow-md shadow-blue-500/20">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
