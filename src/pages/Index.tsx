
import React, { useEffect, useRef } from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { Hero } from '@/components/Hero';
import { FeatureCard } from '@/components/FeatureCard';
import { MindMap } from '@/components/MindMap';
import { AIChat } from '@/components/AIChat';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Sparkles, 
  MessageSquare, 
  ChevronRight,
} from 'lucide-react';

const Index = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const mindMapRef = useRef<HTMLDivElement>(null);
  const airMinderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('stagger-in');
        }
      });
    }, observerOptions);

    [featuresRef, mindMapRef, airMinderRef].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      [featuresRef, mindMapRef, airMinderRef].forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <MainLayout>
      <Hero />
      
      {/* Features Section */}
      <section id="features" className="section bg-slate-900/60">
        <div className="container-tight" ref={featuresRef}>
          <div className="text-center mb-16">
            <h2 className="heading-lg mt-4 stagger-item animate-fade-in text-white">
              Unlock Your <span className="text-blue-400">Potential</span>
            </h2>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="AI Mind Mapping"
              description="Visualize your career path with interactive mind maps."
              icon={Brain}
              delay={100}
            />
            <FeatureCard
              title="Smart Communication"
              description="Connect with clients using AI-enhanced language."
              icon={MessageSquare}
              delay={200}
            />
            <FeatureCard
              title="Career Growth"
              description="Boost your confidence with personalized AI guidance."
              icon={Sparkles}
              delay={300}
            />
          </div>
        </div>
      </section>
      
      {/* Mind Map Section */}
      <section id="mind-map" className="section relative overflow-hidden">
        <div className="container-tight" ref={mindMapRef}>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <MindMap />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="heading-md mb-6 text-white">
                Visualize Your <span className="text-blue-400">Journey</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Transform your experience into powerful visual stories that captivate clients.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 rounded-xl shadow-lg">
                Create Your Map
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* AIR Minder Section */}
      <section id="air-minder" className="section bg-slate-900/80">
        <div className="container-tight" ref={airMinderRef}>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="heading-md mb-6 text-white">
                Your AI <span className="text-blue-400">Partner</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Get personalized guidance and support to achieve your career goals.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 rounded-xl shadow-lg">
                Start Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div>
              <AIChat />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-blue-600">
        <div className="container-tight text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Transform Your Career?</h2>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 text-lg px-8 py-6 rounded-xl shadow-lg font-semibold">
            Get Started Free
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
