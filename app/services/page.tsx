'use client';

import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { PageHeader } from '@/components/sections/page-header';
import Link from 'next/link';
import {
  Code,
  Palette,
  Laptop,
  Server,
  Database,
  MonitorPlay,
  Video,
  Settings,
} from 'lucide-react';

const services = [
  {
    name: 'Web Design',
    description: 'Modern, responsive, and visually appealing website designs tailored for your brand.',
    icon: Palette,
  },
  {
    name: 'Web Development',
    description: 'Full-stack web applications built with performance, scalability, and security in mind.',
    icon: Code,
  },
  {
    name: 'Graphic Design',
    description: 'Creative visuals, branding, flyers, and digital assets that elevate your identity.',
    icon: Palette,
  },
  {
    name: 'IT Enthusiast Services',
    description: 'General IT support, troubleshooting, and tech assistance for everyday needs.',
    icon: Settings,
  },
  {
    name: 'IT Consultation Services',
    description: 'Expert guidance on IT systems, infrastructure, and digital transformation.',
    icon: Server,
  },
  {
    name: 'PC Building & Laptop Repair',
    description: 'Custom PC builds, upgrades, diagnostics, and professional repair services.',
    icon: Laptop,
  },
  {
    name: 'Data Recovery & Disk Upgrade',
    description: 'Recover lost files and upgrade storage systems safely and efficiently.',
    icon: Database,
  },
  {
    name: 'Video & Content Creation',
    description: 'High-quality video editing, motion content, and digital storytelling.',
    icon: Video,
  },
  {
    name: 'Livestream Expert Services',
    description: 'Professional livestream setup, optimization, and production support.',
    icon: MonitorPlay,
  },
];

export default function ServicesPage() {
  return (
    <PageLayout>

      {/* HEADER (CONSISTENT PAGE SPACING RULE) */}
      <Container>
        <div className="pt-6 mb-10">
          <PageHeader
            eyebrow="Our Services"
            title={
              <>
                Professional Digital
                <br />
                <span className="text-muted-foreground">
                  Solutions & Support.
                </span>
              </>
            }
            subtitle="We deliver complete IT, design, and digital production services tailored to your needs."
          />
        </div>
      </Container>

      {/* SERVICES GRID */}
      <section className="pb-12 lg:pb-20">
        <Container>

          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Complete list of available services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.name}
                  href="/contact"
                  className="group p-7 border border-foreground/10 bg-foreground/[0.02] rounded-lg hover:border-[#eca8d6]/50 hover:bg-foreground/[0.04] transition-all duration-300"
                >

                  {/* ICON */}
                  <div className="w-12 h-12 rounded-lg bg-[#eca8d6]/10 border border-[#eca8d6]/20 flex items-center justify-center mb-5 text-[#eca8d6] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-display mb-2 group-hover:text-[#eca8d6] transition-colors">
                    {service.name}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                </Link>
              );
            })}

          </div>

        </Container>
      </section>

      {/* CTA */}
      <section className="pb-12 lg:pb-20 border-t border-foreground/10">
        <Container>

          <div className="text-center pt-10">
            <h2 className="text-3xl lg:text-4xl font-display mb-4">
              Need a custom solution?
            </h2>

            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We can combine multiple services into a tailored package for your business or project.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-foreground text-background rounded-full hover:bg-foreground/90 transition"
            >
              Contact Us
            </Link>
          </div>

        </Container>
      </section>

    </PageLayout>
  );
}