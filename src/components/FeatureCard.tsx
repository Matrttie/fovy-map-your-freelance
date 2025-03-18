
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
      
      {/* Reduced number of bubble decorations with varied sizes, positions and animations */}
      <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-blue-100/60 to-indigo-200/50 backdrop-blur-sm border border-white/40 random-float-1"></div>
      <div className="absolute bottom-1/3 left-6 w-8 h-8 rounded-full bg-indigo-200/50 random-float-3"></div>
    </div>
  );
};
