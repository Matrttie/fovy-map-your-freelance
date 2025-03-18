
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
    document.body.classList.add('bg-white');
    
    // Reset scroll position to top on page load
    window.scrollTo(0, 0);
    
    return () => {
      document.body.classList.remove('bg-white');
    };
  }, []);
  
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-800 relative overflow-hidden">
      {/* Dynamic gradient background effect */}
      <div className="absolute inset-0 -z-10 breathing-gradient opacity-40"></div>
      
      <Header />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer />
    </div>
  );
};
