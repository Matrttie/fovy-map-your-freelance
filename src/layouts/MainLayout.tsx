
import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { applyFlowStyles } from '@/lib/animations';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  // Apply flow styles when layout mounts
  useEffect(() => {
    applyFlowStyles();
    
    // Add dark background for the overall app
    document.body.classList.add('bg-[#081b29]');
    
    return () => {
      document.body.classList.remove('bg-[#081b29]');
    };
  }, []);
  
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-[#081b29] to-[#0b2233] text-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
