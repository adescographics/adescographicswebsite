'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { BackButton } from '@/components/ui/back-button';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { PageHeader } from '@/components/sections/page-header';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

const portfolioProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform Redesign',
    client: 'TechStre Inc',
    category: 'Web Design & Development',
    image: '/images/portfolio/saas-dashboard.jpg',
    description: 'Complete redesign and rebuild of a major e-commerce platform, resulting in 40% increase in conversions.',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'SaaS Dashboard Platform',
    client: 'DataViz Pro',
    category: 'Web Development',
    image: '/images/portfolio/saas-dashboard.jpg',
    description: 'Built a comprehensive analytics dashboard with real-time data visualization and reporting features.',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Mobile App for Fitness Tracking',
    client: 'FitLife',
    category: 'Mobile & Web',
    image: '/images/portfolio/ecommerce-platform.jpg',
    description: 'Designed and developed a cross-platform fitness tracking application with AI-powered recommendations.',
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Content Management System',
    client: 'PublishHub',
    category: 'Web Development',
    image: '/images/portfolio/corporate-website.jpg',
    description: 'Developed a headless CMS allowing teams to manage content across multiple platforms efficiently.',
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Marketing Website for Tech Startup',
    client: 'InnovateTech',
    category: 'Web Design',
    image: '/images/portfolio/corporate-website.jpg',
    description: 'Created a modern marketing website that increased lead generation by 60% in the first quarter.',
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Video Production & Editing Suite',
    client: 'CreativeStudio',
    category: 'Video & Content',
    image: '/images/portfolio/saas-dashboard.jpg',
    description: 'Designed a suite of video production tools with real-time collaboration features for creative teams.',
    link: '#',
    github: '#',
  },
];

export default function PortfolioPage() {
  return (
    <PageLayout>
      <Container>
        <div className="mb-8">
          <BackButton href="/" label="Back to Home" />
        </div>
        <PageHeader
          eyebrow="Our Work"
          title={
            <>
              Showcasing our
              <br />
              <span className="text-muted-foreground">best projects.</span>
            </>
          }
          subtitle="Browse through our portfolio of successful projects and case studies."
        />
      </Container>

      {/* Featured Project */}
      <section className="py-12 lg:py-16 border-t border-foreground/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-gradient-to-br from-[#eca8d6]/20 to-[#eca8d6]/5 rounded-lg flex items-center justify-center">
              <span className="text-lg text-muted-foreground">Featured Project Image</span>
            </div>
            <div className="space-y-6">
              <span className="text-sm font-mono bg-foreground/5 px-3 py-1 rounded w-fit">Featured</span>
              <h2 className="text-4xl font-display">E-Commerce Platform Redesign</h2>
              <p className="text-lg text-muted-foreground">
                We completely redesigned and rebuilt a major e-commerce platform for TechStore Inc, resulting in a 40% increase in conversions and significantly improved user experience across all devices.
              </p>
              <div className="space-y-3 pt-4 border-t border-foreground/10">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Client</p>
                  <p className="font-medium">TechStore Inc</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Services</p>
                  <p className="font-medium">Web Design & Development, UX Research, SEO Optimization</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Results</p>
                  <p className="font-medium">40% increase in conversions, 2.5s faster load time</p>
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <Link href="#">
                  <Button className="bg-foreground hover:bg-foreground/90 text-background px-6 h-12 rounded-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </Link>
                <Link href="#">
                  <Button variant="outline" className="px-6 h-12 rounded-full">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 lg:py-16 border-t border-foreground/10">
        <Container>
          <h2 className="text-3xl font-display mb-12">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.slice(1).map(project => (
              <Link key={project.id} href="#">
                <div className="group h-full border border-foreground/10 bg-foreground/[0.02] rounded-lg overflow-hidden hover:border-foreground/20 hover:bg-foreground/[0.04] transition-all cursor-pointer">
                  {/* Image */}
                  <div className="w-full h-48 relative overflow-hidden bg-foreground/5">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col h-full">
                    <span className="text-xs font-mono bg-foreground/5 px-2 py-1 rounded w-fit mb-3">
                      {project.category}
                    </span>

                    <h3 className="font-display text-lg mb-2 group-hover:text-[#eca8d6] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-2">
                      {project.client}
                    </p>

                    <p className="text-sm text-muted-foreground mb-6 flex-grow line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex gap-3 pt-4 border-t border-foreground/10">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 rounded-full h-9 text-sm"
                      >
                        View
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 rounded-full h-9 text-sm"
                      >
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 border-t border-foreground/10 bg-foreground/[0.02]">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-display mb-4">Ready to start your project?</h2>
            <p className="text-muted-foreground mb-8">
              Let&apos;s work together to bring your vision to life.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 rounded-full">
                Get in Touch
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
