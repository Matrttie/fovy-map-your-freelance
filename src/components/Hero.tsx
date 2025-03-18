
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
      {/* Abstract Breathing Animation Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="abstract-blob w-[80%] h-[80%] md:w-[60%] md:h-[60%] opacity-80"></div>
      </div>
      
      {/* Background gradient elements */}
      <div className="absolute top-[25%] left-[15%] w-96 h-96 rounded-full bg-gradient-to-br from-blue-100/40 to-blue-200/30 blur-3xl random-breathing-1"></div>
      <div className="absolute bottom-[15%] right-[25%] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-indigo-100/30 to-purple-100/20 blur-3xl random-breathing-2"></div>
      
      <div className="container px-4 md:px-6 relative z-10" ref={containerRef}>
        <div className="grid gap-12 lg:grid-cols-[1fr,1fr] lg:gap-8">
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <div className="stagger-item inline-flex animate-fade-in items-center rounded-full bg-gradient-to-r from-white/90 to-blue-50/80 backdrop-blur-sm px-3 py-1 text-sm font-medium text-blue-500 shadow-md gentle-pulse">
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
              <Button variant="outline" className="bg-white/80 backdrop-blur-sm border border-slate-200 h-12 px-6 rounded-xl text-slate-800 shadow-md gentle-pulse">
                How It Works
              </Button>
            </div>
            <div className="stagger-item animate-fade-in grid grid-cols-3 gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-white/80 to-blue-50/70 backdrop-blur-sm shadow-md gentle-float">
                  <Brain className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-sm text-slate-700">AI Mind Mapping</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-white/80 to-blue-50/70 backdrop-blur-sm shadow-md gentle-float-slow">
                  <MessageSquare className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-sm text-slate-700">Client Communication</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-white/80 to-blue-50/70 backdrop-blur-sm shadow-md gentle-float">
                  <Sparkles className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-sm text-slate-700">Confidence Building</div>
              </div>
            </div>
          </div>
          <div className="stagger-item animate-scale-in relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-[500px] glass-card p-6 rounded-3xl shadow-xl bg-gradient-to-br from-white/30 to-blue-50/20 backdrop-blur-md border border-white/50 random-breathing-1">
              {/* Abstract animation as the primary visual */}
              <div className="w-full h-full min-h-[300px] flex items-center justify-center rounded-2xl overflow-hidden">
                <div className="abstract-blob-inner w-[90%] h-[90%] opacity-90"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo in bottom-left corner */}
      <div className="absolute bottom-8 left-8 z-20 w-24 h-24 flex items-center justify-center">
        <img 
          src="/lovable-uploads/1227a1eb-6075-4c9d-9144-d4b0a14b66a2.png" 
          alt="FOVY Logo" 
          className="w-full h-auto object-contain drop-shadow-lg gentle-float"
        />
      </div>
    </section>
  );
};
