
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
        "feature-card stagger-item animate-fade-in glass-card-hover gradient-border p-6 rounded-xl bg-white/90 backdrop-blur-sm border border-slate-100 shadow-md", 
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-200/80 to-indigo-100/70 backdrop-blur-sm border border-blue-100 shadow-md">
          <Icon className="h-6 w-6 text-blue-500" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-slate-800">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
};
