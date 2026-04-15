'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const values = [
  {
    title: 'Transparency',
    description: 'We communicate clearly and honestly with our clients every step of the way.',
    image: '/images/features/transparency.jpg',
  },
  {
    title: 'Data Protection',
    description: 'Your data security is our top priority with industry-leading encryption and compliance.',
    image: '/images/features/data-protection.jpg',
  },
  {
    title: 'Reliable Service',
    description: 'You can count on us to deliver consistent, dependable service 24/7.',
    image: '/images/features/reliable-service.jpg',
  },
  {
    title: 'Quality Assurance',
    description: 'Every project undergoes rigorous testing and quality standards.',
    image: '/images/features/quality-assurance.jpg',
  },
  {
    title: 'Organic Growth',
    description: 'We help your business grow sustainably with proven strategies.',
    image: '/images/features/organic-whale.jpg',
  },
  {
    title: 'Connected Ecosystem',
    description: 'Seamless integration across all your digital platforms and tools.',
    image: '/images/features/tree-connection.jpg',
  },
];

export function ValuesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-24 lg:py-32 border-t border-foreground/10"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono text-muted-foreground mb-4 sm:mb-6">
            <span className="w-8 sm:w-12 h-px bg-foreground/30" />
            Our Values
          </span>
          <h2 className={`text-4xl sm:text-5xl md:text-6xl md:text-7xl lg:text-[100px] font-display tracking-tight leading-[0.9] mb-4 sm:mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            What we
            <br />
            <span className="text-muted-foreground">stand for.</span>
          </h2>
          <p className={`text-sm sm:text-base lg:text-xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Our core values guide everything we do, ensuring we deliver excellence in every project.
          </p>
        </div>

        {/* Values Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 lg:gap-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {values.map((value, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.02] hover:border-foreground/20 hover:bg-foreground/[0.04] transition-all duration-300"
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
            >
              {/* Image Container */}
              <div className="relative w-full h-40 sm:h-48 overflow-hidden bg-foreground/5">
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-display mb-2 sm:mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {value.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>

              {/* Hover Border Glow */}
              <div className="absolute inset-0 rounded-lg border border-[#eca8d6] opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
