
import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  // Apply styles when layout mounts
  useEffect(() => {
    // Add dark background for the overall app
    document.body.classList.add('bg-[#0a1c6b]');
    
    return () => {
      document.body.classList.remove('bg-[#0a1c6b]');
    };
  }, []);
  
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-[#0a1c6b] to-[#0e2380] text-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
