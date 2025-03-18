
import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  // Apply styles when layout mounts
  useEffect(() => {
    // Add light background for the overall app
    document.body.classList.add('bg-[#f8fafc]');
    
    // Reset scroll position to top on page load
    window.scrollTo(0, 0);
    
    return () => {
      document.body.classList.remove('bg-[#f8fafc]');
    };
  }, []);
  
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-[#f0f4ff] to-[#e6eeff] text-slate-800 relative overflow-hidden">
      {/* Enhanced dynamic gradient background effect with more obvious color transitions */}
      <div className="absolute inset-0 -z-10 breathing-gradient-enhanced-vibrant opacity-80"></div>
      
      {/* More vibrant dynamic gradient orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 blur-3xl -z-5 breathing-animation"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-tl from-indigo-200 to-blue-200 blur-3xl -z-5 breathing-animation-slow"></div>
      
      {/* Glass morphism effects with more saturated colors */}
      <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-blue-200/50 blur-3xl -z-5 floating-element"></div>
      <div className="absolute top-[60%] right-[5%] w-96 h-96 rounded-full bg-indigo-200/40 blur-3xl -z-5 floating-element-reverse"></div>
      <div className="absolute bottom-[10%] left-[15%] w-80 h-80 rounded-full bg-purple-200/30 blur-3xl -z-5 floating-element-slow"></div>
      
      <Header />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer />
    </div>
  );
};
