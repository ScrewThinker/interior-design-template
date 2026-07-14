/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface HeroProps {
  onExplore: (sectionId: string) => void;
}

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1600&auto=format&fit=crop",
    tagline: "ELEGANT LIVING SPACES",
    headline: "The New Generation of Interior Design",
    description: "Premium interior executions designed to match your unique architectural voice. Impeccable finishes delivered within pocket-friendly budgets in Nagpur."
  },
  {
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1600&auto=format&fit=crop",
    tagline: "SMART MODULAR SPACES",
    headline: "Engineered Kitchens & Modular Wardrobes",
    description: "Combine flawless ergonomics with high-grade boiling water resistant materials. Perfect charcoal finishes, quartz counters, and soft-close cabinets."
  },
  {
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1600&auto=format&fit=crop",
    tagline: "LUXURY MASTER SUITES",
    headline: "Bespoke Bedrooms Designed For Serenity",
    description: "Linen acoustic walls, custom brass accents, and custom double-glazed windows that create a quiet oasis from Nagpur's busy avenues."
  }
];

export default function Hero({ onExplore }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-dark">
      {/* Background Images */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Parallax Image container */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[6000ms] scale-105"
            style={{
              backgroundImage: `url('${slide.image}')`,
              transform: idx === currentSlide ? "scale(1.01)" : "scale(1.08)"
            }}
          />
          {/* Subtle natural-tones overlay dark screen */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/65 to-transparent" />
        </div>
      ))}

      {/* Hero Content Overlay */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
        <div className="max-w-2xl text-white">
          <div className="overflow-hidden mb-4">
            <span
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-light bg-brand/30 border border-brand/20 px-3.5 py-1 rounded-full animate-pulse-slow"
              id="hero-tag"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
              {HERO_SLIDES[currentSlide].tagline}
            </span>
          </div>
          
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-light leading-[1.1] mb-6 tracking-tight text-white"
            id="hero-title"
          >
            {HERO_SLIDES[currentSlide].headline.split(" ").map((word, i) => (
              <span key={i} className="inline-block mr-3 transition-all duration-700">
                {word === "Interior" || word === "Bespoke" || word === "Kitchens" ? (
                  <span className="italic font-normal text-brand-accent font-serif">{word}</span>
                ) : (
                  word
                )}
              </span>
            ))}
          </h1>

          <p 
            className="text-base sm:text-lg text-brand-light/80 font-light leading-relaxed mb-8 max-w-lg transition-all duration-1000"
            id="hero-desc"
          >
            {HERO_SLIDES[currentSlide].description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onExplore("portfolio")}
              className="px-6 py-3 bg-brand text-white text-xs font-bold uppercase tracking-[0.2em] rounded hover:bg-brand-dark transition-all duration-300 flex items-center gap-2 group shadow-lg cursor-pointer"
              id="hero-cta-portfolio"
            >
              View Our Portfolio
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => onExplore("showcase")}
              className="px-6 py-3 border border-white/35 text-white text-xs font-bold uppercase tracking-[0.2em] rounded hover:bg-white/10 transition-all duration-300 backdrop-blur-sm cursor-pointer"
              id="hero-cta-3d"
            >
              Interactive 3D Room
            </button>
          </div>
        </div>
      </div>

      {/* Slider Nav Controls */}
      <div className="absolute bottom-10 right-6 md:right-12 z-30 flex items-center gap-4">
        <button
          onClick={handlePrev}
          className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 hover:border-white transition-all cursor-pointer"
          aria-label="Previous slide"
          id="hero-prev-btn"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="text-white text-xs font-mono">
          <span className="text-brand-accent font-bold">0{currentSlide + 1}</span> / 0{HERO_SLIDES.length}
        </div>
        <button
          onClick={handleNext}
          className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 hover:border-white transition-all cursor-pointer"
          aria-label="Next slide"
          id="hero-next-btn"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Page Indicator Line bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 z-30 flex bg-white/10">
        {HERO_SLIDES.map((_, idx) => (
          <div
            key={idx}
            className="flex-1 h-full relative"
          >
            <div
              className={`absolute top-0 left-0 bottom-0 bg-brand transition-all duration-[6000ms] ease-linear ${
                idx === currentSlide ? "w-full" : "w-0"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Scroll Down Hint */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer"
        onClick={() => onExplore("about")}
        id="scroll-hint"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll to Discover</span>
        <div className="w-[1.5px] h-8 bg-white/20 relative overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 right-0 h-3 bg-brand-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
