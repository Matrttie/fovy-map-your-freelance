
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
      <div className="blur-circle from-fovy-blue/20 to-transparent h-[500px] w-[500px] -top-64 -left-64"></div>
      <div className="blur-circle from-fovy-accent/10 to-transparent h-[400px] w-[400px] top-20 right-0"></div>
      
      <div className="container px-4 md:px-6" ref={containerRef}>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <div className="stagger-item inline-flex animate-fade-in items-center rounded-lg bg-fovy-lightblue px-3 py-1 text-sm font-medium text-fovy-blue">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                <span>AI-Powered Career Growth</span>
              </div>
              <h1 className="stagger-item animate-fade-in mt-4 heading-xl">
                <span className="text-fovy-blue">Map</span> your freelance career with AI
              </h1>
              <p className="stagger-item animate-fade-in mt-4 max-w-[600px] text-xl text-muted-foreground">
                FOVY helps freelancers visualize skills, enhance client communication, and build career confidence through AI-driven mind mapping.
              </p>
            </div>
            <div className="stagger-item flex animate-fade-in flex-col gap-4 sm:flex-row">
              <Button className="btn-primary h-12 px-6">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="btn-secondary">
                How It Works
              </Button>
            </div>
            <div className="stagger-item animate-fade-in grid grid-cols-2 gap-8 pt-4 md:grid-cols-3">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fovy-lightblue">
                  <Brain className="h-5 w-5 text-fovy-blue" />
                </div>
                <div className="text-sm">AI Mind Mapping</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fovy-lightblue">
                  <MessageSquare className="h-5 w-5 text-fovy-blue" />
                </div>
                <div className="text-sm">Client Communication</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fovy-lightblue">
                  <Sparkles className="h-5 w-5 text-fovy-blue" />
                </div>
                <div className="text-sm">Confidence Building</div>
              </div>
            </div>
          </div>
          <div className="stagger-item animate-scale-in relative flex items-center justify-center">
            <div className="relative rounded-2xl bg-gradient-to-b from-fovy-lightblue to-white/40 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-2xl backdrop-blur-sm"></div>
              <div className="relative rounded-xl overflow-hidden bg-white/80 shadow-lg aspect-square md:aspect-[4/3] w-full max-w-[500px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" 
                    alt="FOVY App UI" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
