
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
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-[#f5f8ff] to-[#edf2ff] text-slate-800 relative overflow-hidden">
      {/* Enhanced light gradient background effect with more gentle movements */}
      <div className="absolute inset-0 -z-10 breathing-gradient-softer opacity-90"></div>
      
      <Header />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer />
    </div>
  );
};
