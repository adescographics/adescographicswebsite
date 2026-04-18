"use client";

import { useEffect, useState, useRef } from "react";

const logos: Record<string, string> = {
  vscode: "/icons/visualstudiocode.svg",
  figma: "/icons/figma.svg",
  photoshop: "/icons/adobephotoshop.svg",
  office: "/icons/microsoftoffice.svg",
  nextjs: "/icons/nextdotjs.svg",
  vite: "/icons/vite.svg",
  github: "/icons/github.svg",
  slack: "/icons/slack.svg",
  tailwind: "/icons/tailwindcss.svg",
  stripe: "/icons/stripe.svg",
  aws: "/icons/amazonaws.svg",
  docker: "/icons/docker.svg",
};

const integrations = [
  { id: "vscode", name: "Visual Studio Code", category: "Development" },
  { id: "figma", name: "Figma", category: "Design" },
  { id: "photoshop", name: "Adobe Photoshop", category: "Design" },
  { id: "office", name: "Microsoft Office", category: "Productivity" },
  { id: "nextjs", name: "Next.js", category: "Framework" },
  { id: "vite", name: "Vite", category: "Build" },
  { id: "github", name: "GitHub", category: "Collaboration" },
  { id: "slack", name: "Slack", category: "Communication" },
  { id: "tailwind", name: "Tailwind CSS", category: "Design" },
  { id: "stripe", name: "Stripe", category: "Payments" },
  { id: "aws", name: "AWS", category: "Cloud" },
  { id: "docker", name: "Docker", category: "Infrastructure" },
];

export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
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

  return (
    <section id="integrations" ref={sectionRef} className="relative overflow-hidden py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className={`text-center mb-16 lg:mb-24 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <span className="inline-flex items-center gap-3 text-xs font-mono text-muted-foreground mb-8">
            <span className="w-8 h-px bg-foreground/20" />
            Our Services
            <span className="w-8 h-px bg-foreground/20" />
          </span>

          <h2 className="text-6xl md:text-7xl lg:text-[100px] font-display tracking-tight leading-[0.9] mb-6 text-white">
            Trusted by
            <br />
            <span className="text-muted-foreground">industry leaders.</span>
          </h2>

          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Comprehensive digital solutions that transform your business
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {integrations.map((integration, index) => {
            const icon = logos[integration.id] || "/icons/fallback.svg";

            return (
              <div
                key={integration.id}
                className={`group relative p-6 lg:p-8 border border-foreground/10 rounded-[20px] bg-[#09090b]/80 hover:border-[#eca8d6]/30 hover:bg-foreground/[0.05] hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(236,168,214,0.12)] transition-all duration-300 cursor-default ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 30}ms` }}
                onMouseEnter={(e) => {
                  setHoveredIndex(index);
                  const rect = e.currentTarget.getBoundingClientRect();
                  setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setMousePos(null);
                }}
              >
                {/* Category */}
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-[#eca8d6]/10 text-[#eca8d6] uppercase tracking-wide">
                    {integration.category}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                  <img
                    src={icon}
                    alt={`${integration.name} logo`}
                    className="w-10 h-10 object-contain"
                    loading="lazy"
                    draggable={false}
                  />
                </div>

                {/* Name */}
                <h3 className="font-semibold text-white text-lg group-hover:text-[#eca8d6] transition-colors duration-300">
                  {integration.name}
                </h3>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`text-center pt-12 border-t border-foreground/10 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <p className="text-muted-foreground mb-6">
            Need a custom integration? We support 100+ more services.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#eca8d6]/10 hover:bg-[#eca8d6]/20 text-[#eca8d6] font-medium transition-colors duration-300"
          >
            Get in touch
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}