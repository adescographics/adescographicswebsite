import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  description?: string;
  actions?: ReactNode;
  className?: string;
  centered?: boolean;
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  description,
  actions,
  className,
  centered = true,
}: PageHeaderProps) {
  return (
    <div className={cn('py-20 lg:py-32 text-center', className)}>
      {eyebrow && (
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="w-12 h-px bg-foreground/20" />
          <p className="text-sm font-mono text-muted-foreground whitespace-nowrap">
            {eyebrow}
          </p>
          <span className="w-12 h-px bg-foreground/20" />
        </div>
      )}
      
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-display tracking-tight leading-[0.9] mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-3xl lg:text-4xl text-muted-foreground leading-[1.2] font-display">
            {subtitle}
          </p>
        )}
      </div>

      {description && (
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
          {description}
        </p>
      )}

      {actions && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          {actions}
        </div>
      )}
    </div>
  );
}
