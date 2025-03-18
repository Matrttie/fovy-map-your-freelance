
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
      
      {/* Random bubble decorations with varied sizes, positions, and animations */}
      <div className="absolute top-[15%] left-[25%] w-[450px] h-[450px] rounded-full bg-gradient-to-br from-blue-100/60 to-purple-100/50 blur-3xl -z-5 random-breathing-1"></div>
      <div className="absolute bottom-[20%] right-[15%] w-[550px] h-[550px] rounded-full bg-gradient-to-tl from-indigo-100/50 to-blue-100/40 blur-3xl -z-5 random-breathing-2"></div>
      
      {/* More random bubbles with different animations */}
      <div className="absolute top-[40%] left-[10%] w-80 h-80 rounded-full bg-blue-100/30 blur-3xl -z-5 random-float-1"></div>
      <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] rounded-full bg-indigo-100/30 blur-3xl -z-5 random-float-3"></div>
      <div className="absolute bottom-[30%] left-[30%] w-96 h-96 rounded-full bg-purple-100/20 blur-3xl -z-5 random-float-2"></div>
      
      {/* Additional smaller random bubbles */}
      <div className="absolute top-[60%] right-[35%] w-64 h-64 rounded-full bg-blue-50/40 blur-2xl -z-5 random-float-5"></div>
      <div className="absolute bottom-[15%] right-[40%] w-72 h-72 rounded-full bg-indigo-50/30 blur-2xl -z-5 random-float-4"></div>
      <div className="absolute top-[10%] right-[10%] w-48 h-48 rounded-full bg-purple-50/30 blur-2xl -z-5 random-float-2"></div>
      
      <Header />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer />
    </div>
  );
};
