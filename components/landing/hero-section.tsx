"use client";

import { useEffect, useState } from "react";

const words = [
  "build",
  "design",
  "create",
  "launch",
  "link",
  "fix",
  "repair",
  "help",
  "serve",
  "update",
  "inspire",
  "solve",
  "craft",
];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // ✨ Typing animation logic
  useEffect(() => {
    const currentWord = words[wordIndex];

    const typingSpeed = isDeleting ? 40 : 80;
    const pauseTime = 1200;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));

        if (displayedText === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        setDisplayedText(currentWord.slice(0, displayedText.length - 1));

        if (displayedText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-black">

      {/* Background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-75 scale-105 animate-slowZoom"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Clean overlays */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* Eyebrow */}
        <div
          className={`mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-xs font-mono text-white/60">
            <span className="w-8 h-px bg-white/30" />
            Digital Solutions for Modern Businesses
            <span className="w-8 h-px bg-white/30" />
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`text-[clamp(2.5rem,6vw,6.2rem)] font-display leading-[0.92] tracking-tight text-white transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          We craft digital
          <br />
          experiences we{" "}
          <span className="bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#8b5cf6] bg-clip-text text-transparent whitespace-nowrap whitespace-nowrap">
            {displayedText}
            <span className="ml-1 animate-pulse">|</span>
          </span>
        </h1>

        {/* Subtext */}
        <p
          className={`mt-6 text-lg text-white/55 max-w-xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          We design, build, and scale modern digital experiences for businesses that want to stand out.
        </p>

        {/* CTA */}
        <div
          className={`mt-10 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-all duration-300 hover:scale-[1.03]"
          >
            Start a project
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

      </div>

      {/* Stats */}
      <div
        className={`absolute bottom-10 w-full transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-3xl mx-auto flex justify-center gap-12 text-center">
          {[
            { value: "316", label: "Projects completed" },
            { value: "96%", label: "Client satisfaction" },
            { value: "6+", label: "Years of expertise" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl sm:text-3xl font-display text-white">
                {stat.value}
              </div>
              <div className="text-xs text-white/40">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-slowZoom {
          animation: slowZoom 18s ease-in-out infinite alternate;
        }

        @keyframes slowZoom {
          0% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1.12);
          }
        }
      `}</style>

    </section>
  );
}