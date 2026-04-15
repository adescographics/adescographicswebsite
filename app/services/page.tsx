'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { PageHeader } from '@/components/sections/page-header';
import { services, getServiceStats } from '@/lib/mock-data/services';
import { ArrowRight, Code, Palette, Film, Server } from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  Film: <Film className="w-6 h-6" />,
  Server: <Server className="w-6 h-6" />,
};

export default function ServicesPage() {
  const [selectedPricing, setSelectedPricing] = useState<'all' | 'standard' | 'premium' | 'enterprise'>('all');
  const stats = getServiceStats();

  const filteredServices = selectedPricing === 'all' 
    ? services 
    : services.filter(service => service.pricing === selectedPricing);

  return (
    <PageLayout>
      <Container>
        <PageHeader
          eyebrow="Our Services"
          title={
            <>
              Professional Digital
              <br />
              <span className="text-muted-foreground">Solutions & Support.</span>
            </>
          }
          subtitle="From web development and design to IT solutions, we offer comprehensive services tailored to your business needs."
        />
      </Container>

      {/* Service Filter */}
      <section className="py-12 lg:py-16 border-t border-foreground/10">
        <Container>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Filter by service tier:</p>
            </div>
            <div className="flex gap-3">
              {[
                { label: 'All Services', value: 'all' as const },
                { label: 'Premium', value: 'premium' as const },
                { label: 'Enterprise', value: 'enterprise' as const },
              ].map(option => (
                <button
                  key={option.value}
                  onClick={() => setSelectedPricing(option.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedPricing === option.value
                      ? 'bg-foreground text-background'
                      : 'bg-foreground/10 text-foreground hover:bg-foreground/20'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-12 lg:py-20">
        <Container>
          <div className="mb-12">
            <p className="text-muted-foreground">
              Showing {filteredServices.length} of {services.length} services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const icon = iconMap[service.icon] || <Code className="w-6 h-6" />;
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group p-8 border border-foreground/10 bg-foreground/[0.02] rounded-lg hover:border-[#eca8d6]/50 hover:bg-foreground/[0.04] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#eca8d6]/20 to-[#eca8d6]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-[#eca8d6]">
                    {icon}
                  </div>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-display group-hover:text-[#eca8d6] transition-colors">{service.name}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-[#eca8d6]/10 text-[#eca8d6] whitespace-nowrap ml-2">
                      {service.pricing}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <p className="text-xs text-muted-foreground font-medium">Key Features:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded bg-foreground/10 text-foreground/70">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-foreground/10 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{service.timeline}</span>
                    <div className="flex items-center gap-2 text-sm text-foreground group-hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-12 lg:py-20 border-t border-foreground/10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Total Services', value: stats.totalServices },
              { label: 'Premium Tiers', value: stats.premiumServices },
              { label: 'Enterprise Solutions', value: stats.enterpriseServices },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 border border-foreground/10 rounded-lg bg-foreground/[0.02]">
                <p className="text-4xl font-display text-[#eca8d6] mb-2">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 border-t border-foreground/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-8">
                Why choose Adesco Graphics?
              </h2>

              <div className="space-y-6">
                {[
                  'Expert team with 15+ years of combined experience',
                  '98% client satisfaction rate',
                  'Transparent pricing and clear communication',
                  '24/7 support available',
                  'Full service coverage from concept to completion',
                  'Custom solutions tailored to your needs',
                ].map((reason, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#eca8d6] flex items-center justify-center text-xs text-background font-bold">
                      ✓
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-8 border border-foreground/10 bg-foreground/[0.02] rounded-lg hover:border-[#eca8d6]/30 transition-colors">
                <h3 className="text-2xl font-display mb-3">Quick Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Need immediate help? Our support team is available 24/7 to assist with any urgent issues.
                </p>
              </div>

              <div className="p-8 border border-foreground/10 bg-foreground/[0.02] rounded-lg hover:border-[#eca8d6]/30 transition-colors">
                <h3 className="text-2xl font-display mb-3">Proven Results</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our portfolio showcases successful projects across diverse industries and business sizes.
                </p>
              </div>

              <div className="p-8 border border-foreground/10 bg-foreground/[0.02] rounded-lg hover:border-[#eca8d6]/30 transition-colors">
                <h3 className="text-2xl font-display mb-3">Partnership Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We view ourselves as an extension of your team, invested in your long-term success.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 border-t border-foreground/10">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Choose a service above or contact us to discuss your specific needs and find the perfect solution for your business.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
