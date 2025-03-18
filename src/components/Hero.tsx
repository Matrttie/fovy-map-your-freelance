
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Sparkles, MessageSquare } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('stagger-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Logo in top-left corner */}
      <div className="absolute top-8 left-8 z-20 w-32 h-24 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-fovy-blue">FOVY</h1>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10" ref={containerRef}>
        <div className="grid gap-12 lg:grid-cols-[1fr,1fr] lg:gap-8">
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <div className="stagger-item inline-flex animate-fade-in items-center rounded-full bg-gradient-to-r from-white/90 to-blue-50/80 backdrop-blur-sm px-3 py-1 text-sm font-medium text-blue-500 shadow-md">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                <span>AI-Powered Career Growth</span>
              </div>
              <h1 className="stagger-item animate-fade-in mt-4 text-5xl font-bold leading-tight md:text-6xl text-slate-800">
                <span className="text-fovy-blue">Map</span> your career<br />with <span className="text-fovy-blue">AI</span>
              </h1>
              <p className="stagger-item animate-fade-in mt-4 max-w-[600px] text-lg text-slate-600">
                FOVY helps freelancers visualize skills, enhance client communication, and build career confidence through AI-driven career mapping.
              </p>
            </div>
            <div className="stagger-item flex animate-fade-in flex-col gap-4 sm:flex-row">
              <Button className="btn-gradient h-12 px-6 rounded-xl flex items-center shadow-lg shadow-blue-400/20">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="bg-white/80 backdrop-blur-sm border border-slate-200 h-12 px-6 rounded-xl text-slate-800 shadow-md">
                How It Works
              </Button>
            </div>
            <div className="stagger-item animate-fade-in grid grid-cols-3 gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-white/80 to-blue-50/70 backdrop-blur-sm shadow-md">
                  <Brain className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-sm text-slate-700">AI Mind Mapping</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-white/80 to-blue-50/70 backdrop-blur-sm shadow-md">
                  <MessageSquare className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-sm text-slate-700">Client Communication</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-white/80 to-blue-50/70 backdrop-blur-sm shadow-md">
                  <Sparkles className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-sm text-slate-700">Confidence Building</div>
              </div>
            </div>
          </div>
          <div className="stagger-item animate-scale-in relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-[500px] glass-card p-6 rounded-3xl shadow-xl bg-gradient-to-br from-white/30 to-blue-50/20 backdrop-blur-md border border-white/50">
              {/* Career Mapping Preview */}
              <div className="w-full h-full min-h-[300px] flex items-center justify-center rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/b1ef291c-a7f7-4449-9e07-f72f6112eb6c.png" 
                  alt="Career Mapping Preview" 
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
