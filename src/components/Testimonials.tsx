/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS, Testimonial } from "../utils/constants";

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const autoPlay = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(autoPlay);
  }, [currentIdx]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const activeTestimonial = TESTIMONIALS[currentIdx];

  return (
    <section id="testimonials" className="py-24 bg-brand-light/30 border-b border-brand/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand mb-3 block">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-dark mb-4">
            Words From Our Happy Clients
          </h2>
          <p className="text-gray-500 font-light leading-relaxed">
            Discover what homeowners and business operators across Nagpur say about our design layouts, materials, and turnkey project executions.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="max-w-4xl mx-auto relative">
          <div 
            className={`bg-white/80 backdrop-blur-md border border-brand/10 p-8 md:p-14 rounded-3xl shadow-sm relative overflow-hidden transition-opacity duration-500 ${
              isAnimating ? "opacity-55" : "opacity-100"
            }`}
            id="testimonial-carousel-card"
          >
            {/* Background absolute Quote mark icon */}
            <Quote className="absolute -top-6 -left-6 w-32 h-32 text-brand/5 rotate-12 select-none pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              
              {/* Left Avatar & Rating column */}
              <div className="flex flex-col items-center shrink-0 w-44">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-brand/20 shadow-sm mb-4">
                  <img
                    src={activeTestimonial.avatar}
                    alt={activeTestimonial.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-base font-serif font-bold text-dark text-center leading-tight mb-1">
                  {activeTestimonial.name}
                </h3>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider text-center mb-3">
                  {activeTestimonial.role}
                </p>
                {/* Star display */}
                <div className="flex gap-1 text-amber-500">
                  {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                  ))}
                </div>
              </div>

              {/* Right text content column */}
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block px-3 py-1 bg-brand/10 text-brand text-[9px] font-bold uppercase tracking-widest rounded mb-4">
                  Project: {activeTestimonial.projectType}
                </span>
                <p className="text-base md:text-lg text-gray-700 italic font-serif leading-relaxed font-light">
                  "{activeTestimonial.text}"
                </p>
              </div>
            </div>
          </div>

          {/* Nav Controls */}
          <div className="flex justify-between items-center max-w-xs mx-auto mt-10">
            <button
              onClick={handlePrev}
              className="w-11 h-11 border border-brand/20 hover:border-brand rounded-full flex items-center justify-center text-dark hover:bg-brand hover:text-white transition-all cursor-pointer"
              aria-label="Previous testimonial"
              id="testimonial-prev-btn"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2.5">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentIdx(idx);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === currentIdx ? "bg-brand w-6" : "bg-brand/20 hover:bg-brand/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-11 h-11 border border-brand/20 hover:border-brand rounded-full flex items-center justify-center text-dark hover:bg-brand hover:text-white transition-all cursor-pointer"
              aria-label="Next testimonial"
              id="testimonial-next-btn"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
