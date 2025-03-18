
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
      
      {/* Enhanced decorative elements with larger, gentler movements and lighter gradients */}
      <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-100/80 to-indigo-200/60 backdrop-blur-sm border border-white/40 gentle-float"></div>
      <div className="absolute top-1/2 right-4 w-3 h-3 rounded-full bg-blue-200/70 large-gentle-float"></div>
      <div className="absolute bottom-1/4 left-4 w-5 h-5 rounded-full bg-indigo-200/70 large-gentle-float-reverse"></div>
    </div>
  );
};
