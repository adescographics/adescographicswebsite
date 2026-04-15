'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface BackButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export function BackButton({ 
  href, 
  label = 'Back',
  className = '' 
}: BackButtonProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    if (!href) {
      e.preventDefault();
      router.back();
    }
  };

  const Component = href ? Link : 'button';
  const props = href ? { href } : { onClick: handleClick, type: 'button' as const };

  return (
    <Component
      {...props}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground border border-foreground/10 hover:border-foreground/20 transition-colors ${className}`}
    >
      <ArrowLeft className="w-4 h-4" />
      {label}
    </Component>
  );
}
