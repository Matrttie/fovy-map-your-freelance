
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
      
      {/* Larger and lighter dynamic gradient orbs with gentle movements */}
      <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-100/60 to-purple-100/50 blur-3xl -z-5 large-gentle-breathing"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-indigo-100/50 to-blue-100/40 blur-3xl -z-5 large-gentle-breathing-slow"></div>
      
      {/* Glass morphism effects with lighter, more gentle animations */}
      <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-blue-100/30 blur-3xl -z-5 large-gentle-float"></div>
      <div className="absolute top-[60%] right-[5%] w-[500px] h-[500px] rounded-full bg-indigo-100/30 blur-3xl -z-5 large-gentle-float-reverse"></div>
      <div className="absolute bottom-[10%] left-[15%] w-96 h-96 rounded-full bg-purple-100/20 blur-3xl -z-5 large-gentle-float-slow"></div>
      
      <Header />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer />
    </div>
  );
};
