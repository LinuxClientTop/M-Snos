
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedTransition from './AnimatedTransition';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  delay = 0,
  className,
}) => {
  return (
    <AnimatedTransition
      delay={delay}
      className={cn('group', className)}
    >
      <div className="h-full p-8 rounded-2xl bg-white border border-border hover:border-primary/20 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="heading-md mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </AnimatedTransition>
  );
};

export default FeatureCard;
