
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

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-tight text-fovy-blue">FOVY</span>
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a className="nav-link" href="#features">
            Features
          </a>
          <a className="nav-link" href="#mind-map">
            Mind Mapping
          </a>
          <a className="nav-link" href="#air-minder">
            AIR Minder
          </a>
          <a className="nav-link" href="#career-insights">
            Career Insights
          </a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" className="h-9">
            Sign In
          </Button>
          <Button size="sm" className="h-9 bg-fovy-blue hover:bg-fovy-blue/90">
            Get Started
          </Button>
        </div>
        <button
          className="flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>
      
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto bg-white p-6 pb-32 shadow-md animate-fade-in md:hidden">
          <div className="flex flex-col gap-6 text-lg">
            <a
              className="flex items-center py-2 text-muted-foreground hover:text-foreground"
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              className="flex items-center py-2 text-muted-foreground hover:text-foreground"
              href="#mind-map"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Mind Mapping
            </a>
            <a
              className="flex items-center py-2 text-muted-foreground hover:text-foreground"
              href="#air-minder"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              AIR Minder
            </a>
            <a
              className="flex items-center py-2 text-muted-foreground hover:text-foreground"
              href="#career-insights"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Career Insights
            </a>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
              <Button className="w-full bg-fovy-blue hover:bg-fovy-blue/90">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
