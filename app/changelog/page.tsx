'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { PageHeader } from '@/components/sections/page-header';
import { ChevronDown, ChevronUp, AlertCircle, CheckCircle, Zap, Wrench } from 'lucide-react';

interface ChangelogEntry {
  version: string;
  date: string;
  added: string[];
  fixed: string[];
  changed: string[];
  breaking?: string[];
}

const changelog: ChangelogEntry[] = [
  {
    version: '1.7.0',
    date: '2024-04-11',
    added: [
      'Professional Login page at /login with password visibility toggle',
      'Professional Signup page at /signup with password confirmation',
      'Client Dashboard at /client/dashboard with animated charts and gauges',
      'Dashboard Coming Soon overlay with glassmorphism effect',
      'Multiple chart types: Line, Bar, Area, and Pie charts with Recharts',
      'Speed gauge components showing system performance metrics',
      'Responsive KPI cards with animated entrance transitions',
      'Account section in footer with Dashboard, Login, and Signup links',
    ],
    fixed: ['Improved authentication page accessibility', 'Fixed dashboard animation timing', 'Footer now displays all sections in a single row'],
    changed: ['Enhanced form validation UX', 'Updated dashboard styling with glass morphism', 'Social icons collapsed to widget dropdown with wavy animation'],
    breaking: ['All paths updated: use /login instead of /signin for new integrations'],
  },
  {
    version: '1.6.0',
    date: '2024-04-10',
    added: [
      'New Reviews page with filtering by rating and service',
      'Submit review form with star rating system',
      'Developer toolbar with code utilities',
      'Changelog page with version history',
      'Footer links for new pages',
    ],
    fixed: ['Fixed page layout inconsistencies', 'Improved mobile responsiveness'],
    changed: ['Enhanced header centering for all pages', 'Updated navigation structure'],
  },
  {
    version: '1.5.0',
    date: '2024-03-28',
    added: [
      'Blog filtering and search functionality',
      'Related articles on blog detail pages',
      'Enhanced contact form validation',
      'Services filtering by tier',
    ],
    fixed: ['Fixed image loading issues', 'Resolved CSS conflicts'],
    changed: ['Updated color palette', 'Improved typography hierarchy'],
  },
  {
    version: '1.4.0',
    date: '2024-03-15',
    added: ['Mock data for blog posts', 'Mock data for services', 'Enhanced footer sections'],
    fixed: ['Fixed responsive grid layouts'],
    changed: ['Refactored page components', 'Improved performance'],
  },
  {
    version: '1.3.0',
    date: '2024-03-01',
    added: ['New values section with feature images', 'Hero text dynamic word rotation'],
    fixed: ['Fixed page title centering'],
    changed: ['Updated PageHeader component'],
  },
  {
    version: '1.2.0',
    date: '2024-02-15',
    added: [
      'Contact form with validation',
      'Services overview page',
      'Blog listing page',
      'Individual blog post pages',
    ],
    fixed: ['Fixed navigation styling'],
    changed: ['Improved form styling'],
  },
  {
    version: '1.1.0',
    date: '2024-02-01',
    added: ['About page', 'Privacy policy', 'Terms of service', 'Security & compliance page'],
    fixed: ['Fixed layout issues'],
    changed: ['Updated footer styling'],
  },
  {
    version: '1.0.0',
    date: '2024-01-15',
    added: [
      'Initial website launch',
      'Homepage with hero section',
      'Services listing',
      'Navigation and footer',
    ],
    fixed: [],
    changed: [],
    breaking: ['Initial release'],
  },
];

interface ExpandedState {
  [key: string]: boolean;
}

export default function ChangelogPage() {
  const [expanded, setExpanded] = useState<ExpandedState>({
    '1.7.0': true,
  });

  const toggleExpand = (version: string) => {
    setExpanded(prev => ({
      ...prev,
      [version]: !prev[version],
    }));
  };

  return (
    <PageLayout>
      <Container>
        <PageHeader
          eyebrow="Version History"
          title={
            <>
              Development
              <br />
              <span className="text-muted-foreground">Changelog.</span>
            </>
          }
          subtitle="Track all updates, improvements, and new features across versions."
        />
      </Container>

      <section className="py-16 lg:py-24 border-t border-foreground/10">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-3">
              {changelog.map((entry, index) => (
                <div
                  key={entry.version}
                  className="group relative border border-foreground/10 bg-foreground/[0.02] rounded-xl overflow-hidden hover:border-[#eca8d6]/40 hover:bg-foreground/[0.05] transition-all duration-300"
                >
                  <button
                    onClick={() => toggleExpand(entry.version)}
                    className="w-full p-6 lg:p-7 flex items-center justify-between"
                  >
                    <div className="text-left flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-display text-xl font-bold">v{entry.version}</h3>
                          {index === 0 && (
                            <span className="text-xs px-2.5 py-1 bg-[#eca8d6]/20 text-[#eca8d6] rounded-full font-medium">Latest</span>
                          )}
                        </div>
                        <span className="text-xs px-3 py-1.5 bg-foreground/5 text-muted-foreground rounded-lg">
                          {entry.date}
                        </span>
                      </div>
                      {!expanded[entry.version] && (
                        <p className="text-sm text-muted-foreground">
                          {entry.added.length > 0 && `${entry.added.length} additions`}
                          {entry.added.length > 0 && entry.fixed.length > 0 && ' • '}
                          {entry.fixed.length > 0 && `${entry.fixed.length} fixes`}
                          {(entry.added.length > 0 || entry.fixed.length > 0) && entry.changed.length > 0 && ' • '}
                          {entry.changed.length > 0 && `${entry.changed.length} changes`}
                        </p>
                      )}
                    </div>
                    {expanded[entry.version] ? (
                      <ChevronUp className="w-5 h-5 text-[#eca8d6] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-[#eca8d6] transition-colors flex-shrink-0" />
                    )}
                  </button>

                  {expanded[entry.version] && (
                    <div className="border-t border-foreground/10 px-6 lg:px-7 py-6 space-y-6 bg-gradient-to-b from-foreground/[0.03] to-transparent">
                      {entry.breaking && entry.breaking.length > 0 && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <AlertCircle className="w-5 h-5 text-red-400" />
                            <h4 className="font-semibold text-red-400">Breaking Changes</h4>
                          </div>
                          <ul className="space-y-2 ml-7">
                            {entry.breaking.map((item, i) => (
                              <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                                <span className="text-red-400/60">⚠</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {entry.added.length > 0 && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Zap className="w-5 h-5 text-green-400" />
                            <h4 className="font-semibold text-green-400">Added</h4>
                          </div>
                          <ul className="space-y-2 ml-7">
                            {entry.added.map((item, i) => (
                              <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                                <span className="text-green-400/60">+</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {entry.fixed.length > 0 && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-blue-400" />
                            <h4 className="font-semibold text-blue-400">Fixed</h4>
                          </div>
                          <ul className="space-y-2 ml-7">
                            {entry.fixed.map((item, i) => (
                              <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                                <span className="text-blue-400/60">✓</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {entry.changed.length > 0 && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Wrench className="w-5 h-5 text-yellow-400" />
                            <h4 className="font-semibold text-yellow-400">Changed</h4>
                          </div>
                          <ul className="space-y-2 ml-7">
                            {entry.changed.map((item, i) => (
                              <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                                <span className="text-yellow-400/60">~</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
