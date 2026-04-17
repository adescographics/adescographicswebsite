"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const generateAsciiPattern = () =>
  Array.from({ length: 60 }, () =>
    Array.from({ length: 100 }, () => (Math.random() > 0.85 ? '"' : " ")).join("")
  ).join("\n");

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: { value: string; label: string };
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "Adesco Graphics completely transformed our online presence. Clean execution and solid delivery.",
    author: "Tunde Adebayo",
    role: "Founder",
    company: "ByteWave NG",
    metric: { value: "3x", label: "Revenue growth" },
    avatar: "/images/client/tunde.jpg",
  },
  {
    quote: "Their attention to detail and technical expertise is top-tier. We’ve had zero downtime since launch.",
    author: "Chioma Okafor",
    role: "Operations Lead",
    company: "CoreStack Africa",
    metric: { value: "99.9%", label: "Uptime achieved" },
    avatar: "/images/client/chioma.jpg",
  },
  {
    quote: "The video content they delivered exceeded expectations. Clean edits, strong storytelling.",
    author: "Daniel Okeke",
    role: "Marketing Director",
    company: "NextGen Media",
    metric: { value: "2M+", label: "Video views" },
    avatar: "/images/client/daniel.jpg",
  },
  {
    quote: "Professional from start to finish. Adesco is a team you can actually rely on.",
    author: "Zara Khan",
    role: "Brand Manager",
    company: "Elevate Group",
    metric: { value: "10x", label: "ROI achieved" },
    avatar: "/images/client/zara.jfif",
  },
  {
    quote: "Deployment was smooth, fast, and reliable. One of the best dev teams we’ve worked with.",
    author: "Michael Reeves",
    role: "CTO",
    company: "CloudBridge Tech",
    metric: { value: "99.9%", label: "System reliability" },
    avatar: "/images/client/reeves_client.jfif",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [asciiPattern, setAsciiPattern] = useState<string>("");
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setAsciiPattern(generateAsciiPattern());

    const interval = setInterval(() => {
      setAsciiPattern(generateAsciiPattern());
    }, 1200);

    return () => clearInterval(interval);
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
    if (isPaused) return;

    const interval = setInterval(() => {
      setDirection("right");
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isPaused]);

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
    <section
      ref={sectionRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      className="relative py-32 lg:py-40 bg-foreground text-background overflow-hidden"
    >
      {/* ASCII background */}
      <div className="absolute inset-0 font-mono text-[10px] text-background/[0.02] leading-tight whitespace-pre select-none">
        {asciiPattern}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-20">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-background/40 mb-4">
              <span className="w-12 h-px bg-background/20" />
              Testimonials
            </span>

            <h2
              className={`text-4xl lg:text-5xl font-display transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Loved by our <span className="text-background/40">clients.</span>
            </h2>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <button onClick={goPrev} className="p-4 border border-background/20 hover:bg-background/10">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button onClick={goNext} className="p-4 border border-background/20 hover:bg-background/10">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Quote */}
          <div className="lg:col-span-7 relative">
            <span className="absolute -left-4 -top-8 text-[200px] font-display text-background/5">
              &ldquo;
            </span>

            <blockquote className="text-3xl lg:text-5xl font-display leading-[1.2] animate-fadeSlideIn">
              {activeTestimonial.quote}
            </blockquote>

            {/* Author */}
            <div className="mt-12 flex items-center gap-6">
              {/* FIXED IMAGE (equal perfect circle) */}
              <div className="w-14 h-14 relative rounded-full overflow-hidden ring-2 ring-background/20 shrink-0">
                <Image
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.author}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-lg font-medium">{activeTestimonial.author}</p>
                <p className="text-background/60">
                  {activeTestimonial.role}, {activeTestimonial.company}
                </p>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-6">
            <div className="p-10 border border-background/20 bg-background/5 backdrop-blur-xl animate-fadeSlideIn">
              <span className="text-7xl lg:text-9xl font-display block mb-4">
                {activeTestimonial.metric.value}
              </span>
              <span className="text-lg text-background/60">
                {activeTestimonial.metric.label}
              </span>
            </div>

            {/* Progress */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className="flex-1 h-1 bg-background/20 overflow-hidden"
                >
                  <div
                    className={`h-full ${
                      idx === activeIndex ? "animate-progress bg-background" : ""
                    } ${idx < activeIndex ? "w-full bg-background/60" : "w-0"}`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
            filter: blur(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        .animate-fadeSlideIn {
          animation: fadeSlideIn 0.6s ease-out forwards;
        }

        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .animate-progress {
          animation: progress 8s linear forwards;
        }
      `}</style>
    </section>
  );
}