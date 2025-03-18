
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  delay?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  className,
  delay = 0,
}) => {
  return (
    <div 
      className={cn(
        "feature-card stagger-item animate-fade-in glass-card-hover gradient-border", 
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-200/80 to-indigo-100/70 backdrop-blur-sm border border-blue-100 shadow-md gentle-pulse">
          <Icon className="h-6 w-6 text-blue-500" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-slate-800">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
      
      {/* Random bubble decorations with varied sizes, positions and animations */}
      <div className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full bg-gradient-to-br from-blue-100/70 to-indigo-200/60 backdrop-blur-sm border border-white/40 random-float-1"></div>
      <div className="absolute top-1/4 right-6 w-4 h-4 rounded-full bg-blue-200/60 random-float-2"></div>
      <div className="absolute bottom-1/3 left-5 w-6 h-6 rounded-full bg-indigo-200/60 random-float-3"></div>
      <div className="absolute top-10 left-1/2 w-3 h-3 rounded-full bg-blue-100/60 random-float-4"></div>
      <div className="absolute top-3/4 right-1/3 w-5 h-5 rounded-full bg-indigo-100/60 random-float-5"></div>
    </div>
  );
};
