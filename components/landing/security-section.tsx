"use client";

import { useEffect, useState, useRef } from "react";
import { Shield, Lock, Eye, FileCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Reliable Service",
    description: "Consistent uptime and performance you can depend on.",
    color: "bg-gradient-to-br from-blue-600 to-blue-800",
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "Your information is secure and confidential.",
    color: "bg-gradient-to-br from-purple-600 to-purple-800",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear communication and honest practices.",
    color: "bg-gradient-to-br from-pink-600 to-pink-800",
  },
  {
    icon: FileCheck,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control standards.",
    color: "bg-gradient-to-br from-emerald-600 to-emerald-800",
  },
];

const certifications = ["ISO 9001", "GDPR Ready", "Professional", "Certified"];

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % securityFeatures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="security" ref={sectionRef} className="relative py-12 md:py-24 lg:py-32 lg:py-40 overflow-hidden">
      {/* Background accent removed */}
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <span className={`inline-flex items-center gap-2 sm:gap-4 text-xs sm:text-sm font-mono text-muted-foreground mb-4 sm:mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <span className="w-6 sm:w-12 h-px bg-foreground/20" />
            Security
          </span>
          
          {/* Title — full width */}
          <h2 className={`text-4xl sm:text-5xl md:text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] mb-6 sm:mb-8 md:mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Professional,
            <br />
            <span className="text-muted-foreground">trustworthy.</span>
          </h2>
          
          {/* Description — below title */}
          <div className={`transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <p className="text-sm sm:text-base lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Quality and trust are at the heart of everything we do. Our team is committed to delivering excellence and reliability.
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-6">
          {/* Large visual card */}
          <div className={`md:col-span-1 lg:col-span-7 relative p-6 sm:p-8 lg:p-12 border border-foreground/10 min-h-[300px] sm:min-h-[400px] overflow-hidden transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            {/* Dynamic feature color with cross-fade */}
            <div className="absolute inset-0 pointer-events-none lg:flex hidden">
              {securityFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`absolute inset-0 ${feature.color} opacity-5 transition-opacity duration-500`}
                  style={{ opacity: activeFeature === index ? 0.15 : 0.02 }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <span className="font-mono text-xs sm:text-sm text-muted-foreground">Our Commitment</span>
              <div className="mt-6 sm:mt-8">
                <span className="text-5xl sm:text-7xl lg:text-8xl font-display">100%</span>
                <span className="block text-xs sm:text-sm lg:text-base text-muted-foreground mt-1 sm:mt-2">Satisfaction guarantee</span>
              </div>
            </div>
            
            {/* Certification badges */}
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 flex flex-wrap gap-2">
              {certifications.map((cert, index) => (
                <span
                  key={cert}
                  className={`px-2 sm:px-3 py-0.5 sm:py-1 border border-foreground/10 text-[10px] sm:text-xs font-mono text-muted-foreground transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Feature cards stack */}
          <div className="md:col-span-1 lg:col-span-5 flex flex-col gap-2 sm:gap-4">
            {securityFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`p-4 sm:p-6 border transition-all duration-500 cursor-default ${
                  activeFeature === index 
                    ? "border-foreground/30 bg-foreground/[0.04]" 
                    : "border-foreground/10"
                } ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                style={{ transitionDelay: `${index * 80}ms` }}
                onClick={() => setActiveFeature(index)}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className={`shrink-0 w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center border transition-colors ${
                    activeFeature === index 
                      ? "border-foreground bg-foreground text-background" 
                      : "border-foreground/20"
                  }`}>
                    <feature.icon className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-medium mb-0.5 sm:mb-1">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
