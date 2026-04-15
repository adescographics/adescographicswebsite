import { ReactNode } from 'react';
import { Navigation } from '@/components/landing/navigation';
import { FooterSection } from '@/components/landing/footer-section';

interface PageLayoutProps {
  children: ReactNode;
  showNavigation?: boolean;
  showFooter?: boolean;
}

export function PageLayout({
  children,
  showNavigation = true,
  showFooter = true,
}: PageLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-x-hidden flex flex-col">
      {showNavigation && <Navigation />}
      <div className="flex-1">
        {children}
      </div>
      {showFooter && <FooterSection />}
    </main>
  );
}
