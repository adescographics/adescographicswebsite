"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const generateAsciiPattern = () =>
  Array.from({ length: 60 }, () =>
    Array.from({ length: 100 }, () => (Math.random() > 0.7 ? '"' : ' ')).join("")
  ).join("\n");

const testimonials = [
  {
    quote: "Adesco completely transformed our online presence. Their team is professional, creative, and truly listens to what we need.",
    author: "Alex Johnson",
    role: "CEO",
    company: "Digital First Corp",
    metric: { value: "3x", label: "Revenue growth" },
    initials: "AJ",
    color: "bg-blue-600",
  },
  {
    quote: "Their IT support has been a game-changer for our operations. We've had zero downtime since partnering with them.",
    author: "Maria Rodriguez",
    role: "Operations Manager",
    company: "Tech Solutions Inc",
    metric: { value: "99.9%", label: "Uptime achieved" },
    initials: "MR",
    color: "bg-purple-600",
  },
  {
    quote: "The video content they created for us went viral. Professional quality, on-time delivery, and genuinely collaborative.",
    author: "David Chen",
    role: "Marketing Director",
    company: "Creative Media Group",
    metric: { value: "2M+", label: "Video views" },
    initials: "DC",
    color: "bg-pink-600",
  },
  {
    quote: "From concept to completion, Adesco Graphics delivered beyond expectations. Highly recommended for any business.",
    author: "Sarah Williams",
    role: "Founder",
    company: "Innovation Labs",
    metric: { value: "100%", label: "Satisfaction rate" },
    initials: "SW",
    color: "bg-emerald-600",
  },
  {
    quote: "The team at Adesco went above and beyond to deliver exactly what we needed. Their attention to detail is remarkable.",
    author: "James Patterson",
    role: "Director of Marketing",
    company: "Global Ventures Ltd",
    metric: { value: "4.9", label: "Star rating" },
    initials: "JP",
    color: "bg-orange-600",
  },
  {
    quote: "We saw immediate results after launching our new website. The conversion rate increased by 250% in the first month.",
    author: "Jessica Lee",
    role: "E-Commerce Manager",
    company: "Luxury Brands Co",
    metric: { value: "250%", label: "Conversion increase" },
    initials: "JL",
    color: "bg-red-600",
  },
  {
    quote: "Adesco's video production team created content that perfectly captures our brand essence. Truly exceptional work.",
    author: "Michael Torres",
    role: "Creative Lead",
    company: "Premium Apparel Inc",
    metric: { value: "5M+", label: "Total impressions" },
    initials: "MT",
    color: "bg-indigo-600",
  },
  {
    quote: "Their web development expertise is unmatched. We've never had a smoother deployment process before.",
    author: "Emma Watson",
    role: "CTO",
    company: "TechForward Solutions",
    metric: { value: "99.99%", label: "Site reliability" },
    initials: "EW",
    color: "bg-cyan-600",
  },
  {
    quote: "From strategy to execution, Adesco Graphics is a partner you can trust completely. Highly professional team.",
    author: "Robert Chang",
    role: "VP Operations",
    company: "Metropolitan Holdings",
    metric: { value: "12+", label: "Projects delivered" },
    initials: "RC",
    color: "bg-teal-600",
  },
  {
    quote: "The level of innovation and creativity they bring to every project is outstanding. Exceeded all expectations.",
    author: "Olivia Martinez",
    role: "Brand Manager",
    company: "Fashion Forward Group",
    metric: { value: "10x", label: "ROI achieved" },
    initials: "OM",
    color: "bg-rose-600",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [asciiPattern, setAsciiPattern] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setAsciiPattern(generateAsciiPattern());
  }, []);

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
      setDirection("right");
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > activeIndex ? "right" : "left");
    setActiveIndex(index);
  };

  const goPrev = () => {
    setDirection("left");
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goNext = () => {
    setDirection("right");
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-40 bg-foreground text-background overflow-hidden">
      {/* ASCII background pattern */}
      <div
        className="absolute inset-0 font-mono text-[10px] text-background/[0.02] leading-tight overflow-hidden whitespace-pre select-none"
        suppressHydrationWarning
      >
        {asciiPattern || null}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-20">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-background/40 mb-4">
              <span className="w-12 h-px bg-background/20" />
              Testimonials
            </span>
            <h2 className={`text-4xl lg:text-5xl font-display transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              Loved by our
              <span className="text-background/40"> clients.</span>
            </h2>
          </div>
          
          {/* Navigation arrows */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={goPrev}
              className="p-4 border border-background/20 hover:bg-background/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goNext}
              className="p-4 border border-background/20 hover:bg-background/10 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main content - Split layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Quote side */}
          <div className="lg:col-span-7 relative">
            {/* Large quote mark */}
            <span className="absolute -left-4 -top-8 text-[200px] font-display text-background/5 leading-none select-none">
              &ldquo;
            </span>
            
            <div className="relative">
              <blockquote 
                key={activeIndex}
                className="text-3xl lg:text-4xl xl:text-5xl font-display leading-[1.2] tracking-tight animate-fadeSlideIn"
              >
                {activeTestimonial.quote}
              </blockquote>

              {/* Author */}
              <div className="mt-12 flex items-center gap-6">
                <div className={`w-14 h-14 rounded-full ${activeTestimonial.color} flex items-center justify-center`}>
                  <span className="font-display text-xl font-bold text-white">
                    {activeTestimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="text-lg font-medium">{activeTestimonial.author}</p>
                  <p className="text-background/60">
                    {activeTestimonial.role}, {activeTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Metric cards side */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-6">
            {/* Active metric - Large */}
            <div 
              key={`metric-${activeIndex}`}
              className="p-10 border border-background/20 bg-background/5 animate-fadeSlideIn"
            >
              <span className="text-7xl lg:text-8xl font-display block mb-4">
                {activeTestimonial.metric.value}
              </span>
              <span className="text-lg text-background/60">
                {activeTestimonial.metric.label}
              </span>
            </div>

            {/* Progress indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className="flex-1 h-1 bg-background/20 overflow-hidden"
                >
                  <div 
                    className={`h-full bg-background transition-all duration-300 ${
                      idx === activeIndex ? "w-full" : idx < activeIndex ? "w-full opacity-50" : "w-0"
                    }`}
                    style={idx === activeIndex ? { animation: "progress 8s linear forwards" } : {}}
                  />
                </button>
              ))}
            </div>

            {/* Company list */}
            <div className="mt-4 pt-6 border-t border-background/10">
              <span className="text-xs font-mono text-background/30 uppercase tracking-widest block mb-4">
                Featured companies
              </span>
              <div className="flex flex-wrap gap-3">
                {testimonials.map((t, idx) => (
                  <button
                    key={t.company}
                    onClick={() => goTo(idx)}
                    className={`px-4 py-2 text-sm border transition-all ${
                      idx === activeIndex 
                        ? "border-background/40 text-background" 
                        : "border-background/10 text-background/40 hover:border-background/30"
                    }`}
                  >
                    {t.company}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeSlideIn {
          animation: fadeSlideIn 0.5s ease-out forwards;
        }
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
