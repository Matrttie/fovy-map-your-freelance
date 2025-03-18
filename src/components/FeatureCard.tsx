
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
        "feature-card stagger-item animate-fade-in glass-card-hover", 
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100/60 backdrop-blur-sm border border-blue-100/80 shadow-sm">
          <Icon className="h-6 w-6 text-blue-500" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-slate-800">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-blue-50/60 backdrop-blur-sm border border-white/40"></div>
      <div className="absolute top-1/2 right-4 w-2 h-2 rounded-full bg-blue-200/60"></div>
      <div className="absolute bottom-1/4 left-4 w-3 h-3 rounded-full bg-indigo-200/60"></div>
    </div>
  );
};
