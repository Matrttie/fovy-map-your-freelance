
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
  TrendingUp, 
  ChevronRight,
  Globe,
  BadgeCheck,
  Lightbulb
} from 'lucide-react';

const Index = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const mindMapRef = useRef<HTMLDivElement>(null);
  const airMinderRef = useRef<HTMLDivElement>(null);
  const insightsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent default hash link behavior if present
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
      window.scrollTo(0, 0);
    }

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

    [featuresRef, mindMapRef, airMinderRef, insightsRef].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      [featuresRef, mindMapRef, airMinderRef, insightsRef].forEach((ref) => {
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
      <section id="features" className="section bg-fovy-gray">
        <div className="container-tight" ref={featuresRef}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-lg bg-fovy-lightblue px-3 py-1 text-sm font-medium text-fovy-blue stagger-item animate-fade-in">
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              <span>Core Features</span>
            </div>
            <h2 className="heading-lg mt-4 stagger-item animate-fade-in">
              All the tools you need to <span className="text-fovy-blue">succeed</span>
            </h2>
            <p className="mt-4 text-muted-foreground mx-auto max-w-[700px] stagger-item animate-fade-in">
              FOVY provides freelancers with a complete suite of AI-powered tools designed to enhance career visibility, improve client communications, and boost confidence.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="AI Mind Mapping"
              description="Visualize your skills, experience, and achievements in interactive mind maps that evolve with your career."
              icon={Brain}
              delay={100}
            />
            <FeatureCard
              title="Client Communication"
              description="Translate your technical skills and experience into client-friendly language that highlights your value."
              icon={MessageSquare}
              delay={200}
            />
            <FeatureCard
              title="Self-Efficacy Booster"
              description="Get personalized AI reminders and motivational insights to build confidence and reduce stress."
              icon={Sparkles}
              delay={300}
            />
            <FeatureCard
              title="Career Insights"
              description="Receive AI-powered recommendations for learning paths and opportunities based on your skills and market trends."
              icon={Lightbulb}
              delay={400}
            />
            <FeatureCard
              title="Market Analysis"
              description="Stay updated on high-demand skills and industry trends with real-time market analysis."
              icon={TrendingUp}
              delay={500}
            />
            <FeatureCard
              title="Global Opportunities"
              description="Discover freelance opportunities that match your skills and career goals from around the world."
              icon={Globe}
              delay={600}
            />
          </div>
        </div>
      </section>
      
      {/* Mind Map Section */}
      <section id="mind-map" className="section relative overflow-hidden">
        <div className="blur-circle from-fovy-accent/10 to-transparent h-[400px] w-[400px] bottom-20 left-0"></div>
        
        <div className="container-tight" ref={mindMapRef}>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <MindMap />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center rounded-lg bg-fovy-lightblue px-3 py-1 text-sm font-medium text-fovy-blue stagger-item animate-fade-in">
                <Brain className="mr-1 h-3.5 w-3.5" />
                <span>AI Mind Mapping</span>
              </div>
              <h2 className="heading-md mt-4 stagger-item animate-fade-in">
                Visualize your career like <span className="text-fovy-blue">never before</span>
              </h2>
              <p className="mt-4 text-muted-foreground stagger-item animate-fade-in">
                Our AI-powered mind mapping technology creates visual representations of your skills, experience, and achievements. Watch as your career landscape unfolds before you.
              </p>
              
              <ul className="mt-6 space-y-3 stagger-item animate-fade-in">
                <li className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-fovy-blue flex-shrink-0" />
                  <span>Automatically organize skills by category and proficiency</span>
                </li>
                <li className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-fovy-blue flex-shrink-0" />
                  <span>Highlight connections between different skill areas</span>
                </li>
                <li className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-fovy-blue flex-shrink-0" />
                  <span>Update and expand your skill map as you grow</span>
                </li>
              </ul>
              
              <div className="mt-8 stagger-item animate-fade-in">
                <Button className="bg-fovy-blue hover:bg-fovy-blue/90">
                  Create Your Mind Map
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* AIR Minder Section */}
      <section id="air-minder" className="section bg-fovy-gray">
        <div className="container-tight" ref={airMinderRef}>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center rounded-lg bg-fovy-lightblue px-3 py-1 text-sm font-medium text-fovy-blue stagger-item animate-fade-in">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                <span>AIR Minder</span>
              </div>
              <h2 className="heading-md mt-4 stagger-item animate-fade-in">
                Your personal confidence <span className="text-fovy-blue">companion</span>
              </h2>
              <p className="mt-4 text-muted-foreground stagger-item animate-fade-in">
                AIR Minder provides gentle, personalized reminders and motivational insights to help you build confidence, reduce stress, and stay focused on your goals.
              </p>
              
              <ul className="mt-6 space-y-3 stagger-item animate-fade-in">
                <li className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-fovy-blue flex-shrink-0" />
                  <span>Receive timely reminders of your past successes</span>
                </li>
                <li className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-fovy-blue flex-shrink-0" />
                  <span>Get personalized motivation when facing challenges</span>
                </li>
                <li className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-fovy-blue flex-shrink-0" />
                  <span>Develop resilience and positive self-talk habits</span>
                </li>
              </ul>
              
              <div className="mt-8 stagger-item animate-fade-in">
                <Button className="bg-fovy-blue hover:bg-fovy-blue/90">
                  Try AIR Minder
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div>
              <AIChat />
            </div>
          </div>
        </div>
      </section>
      
      {/* Career Insights Section */}
      <section id="career-insights" className="section relative overflow-hidden">
        <div className="blur-circle from-fovy-blue/20 to-transparent h-[500px] w-[500px] -bottom-64 -right-64"></div>
        
        <div className="container-tight" ref={insightsRef}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-lg bg-fovy-lightblue px-3 py-1 text-sm font-medium text-fovy-blue stagger-item animate-fade-in">
              <TrendingUp className="mr-1 h-3.5 w-3.5" />
              <span>Career Insights</span>
            </div>
            <h2 className="heading-lg mt-4 stagger-item animate-fade-in">
              Make data-driven <span className="text-fovy-blue">career decisions</span>
            </h2>
            <p className="mt-4 text-muted-foreground mx-auto max-w-[700px] stagger-item animate-fade-in">
              FOVY analyzes your skills and market trends to provide personalized recommendations for your career growth, learning paths, and new opportunities.
            </p>
          </div>
          
          <div className="relative mx-auto max-w-4xl rounded-2xl glass-card p-8 stagger-item animate-scale-in">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-fovy-lightblue">
                  <Lightbulb className="h-8 w-8 text-fovy-blue" />
                </div>
                <h3 className="text-lg font-medium">Learning Paths</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Personalized recommendations for courses and certifications based on your career goals.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-fovy-lightblue">
                  <TrendingUp className="h-8 w-8 text-fovy-blue" />
                </div>
                <h3 className="text-lg font-medium">Market Trends</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Real-time insights on high-demand skills and industry movements to keep you ahead.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-fovy-lightblue">
                  <Globe className="h-8 w-8 text-fovy-blue" />
                </div>
                <h3 className="text-lg font-medium">Opportunities</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Discover projects and clients that align with your skills, experience, and career goals.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button className="bg-fovy-blue hover:bg-fovy-blue/90">
                Explore Career Insights
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-fovy-blue text-white">
        <div className="container-tight text-center">
          <h2 className="heading-lg animate-fade-in">Ready to transform your freelance career?</h2>
          <p className="mt-4 text-white/80 mx-auto max-w-[700px] animate-fade-in">
            Join thousands of freelancers who are mapping their careers, improving client communications, and building confidence with FOVY.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button className="bg-white text-fovy-blue hover:bg-white/90">
              Get Started for Free
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
