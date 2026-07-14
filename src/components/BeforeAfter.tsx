/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { MoveHorizontal, ChevronRight, ChevronLeft } from "lucide-react";
import { BEFORE_AFTER_PROJECTS, BeforeAfterProject } from "../utils/constants";

export default function BeforeAfter() {
  const [currentProjectIdx, setCurrentProjectIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeProject = BEFORE_AFTER_PROJECTS[currentProjectIdx];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isResizing || e.touches.length === 0) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isResizing]);

  return (
    <section id="before-after" className="py-24 bg-white border-b border-brand/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
          <div className="max-w-xl text-left">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand mb-3 block">
              REAL TRANSFORMATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-dark mb-4">
              Before & After Deliveries
            </h2>
            <p className="text-gray-500 font-light leading-relaxed">
              Drag the floating handle to sweep through raw layouts and view the completed premium structural executions styled by Nyasa.
            </p>
          </div>

          {/* Project Toggle Controls */}
          <div className="flex items-center gap-4 bg-brand-light p-1 rounded-xl border border-brand/10 shadow-sm shrink-0">
            <button
              onClick={() => {
                setCurrentProjectIdx((prev) => (prev - 1 + BEFORE_AFTER_PROJECTS.length) % BEFORE_AFTER_PROJECTS.length);
                setSliderPosition(50);
              }}
              className="p-2 hover:bg-white rounded-lg text-dark hover:text-brand transition-colors cursor-pointer"
              aria-label="Previous case study"
              id="before-after-prev"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-semibold uppercase tracking-widest text-dark font-mono">
              Project {currentProjectIdx + 1} / {BEFORE_AFTER_PROJECTS.length}
            </span>
            <button
              onClick={() => {
                setCurrentProjectIdx((prev) => (prev + 1) % BEFORE_AFTER_PROJECTS.length);
                setSliderPosition(50);
              }}
              className="p-2 hover:bg-white rounded-lg text-dark hover:text-brand transition-colors cursor-pointer"
              aria-label="Next case study"
              id="before-after-next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Project Details Header */}
        <div className="mb-10 text-left bg-brand-light/30 border-l-4 border-brand p-6 rounded-r-2xl max-w-3xl">
          <h3 className="text-xl font-serif font-semibold text-dark mb-1.5">
            {activeProject.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
            {activeProject.description}
          </p>
        </div>

        {/* Core Double Image Slider canvas container */}
        <div
          ref={containerRef}
          className="relative w-full aspect-video md:aspect-[16/9] rounded-3xl overflow-hidden shadow-lg border border-brand/10 select-none slider-container bg-gray-200"
          id="before-after-slider-viewport"
        >
          {/* Before Image (placed behind) */}
          <img
            src={activeProject.before}
            alt="Original layout space"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            referrerPolicy="no-referrer"
          />
          {/* "BEFORE" floating badge label */}
          <div className="absolute top-4 left-4 z-20 bg-dark/85 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md shadow-sm">
            Before
          </div>

          {/* After Image (clipped using width overlay percentage) */}
          <div
            className="absolute inset-y-0 left-0 right-0 z-10 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={activeProject.after}
              alt="Completed Nyasa premium interior"
              className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
              style={{ width: containerRef.current?.clientWidth || "100%" }}
              referrerPolicy="no-referrer"
            />
          </div>
          {/* "AFTER" floating badge label */}
          <div className="absolute top-4 right-4 z-20 bg-brand/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md shadow-sm">
            Completed (After)
          </div>

          {/* Draggable vertical partition bar handle line */}
          <div
            className="absolute inset-y-0 z-30 w-1 bg-white cursor-ew-resize flex items-center justify-center select-none"
            style={{ left: `${sliderPosition}%` }}
            onMouseDown={() => setIsResizing(true)}
            onTouchStart={() => setIsResizing(true)}
            id="slider-drag-handle"
          >
            {/* Round handle knob button */}
            <div className="w-10 h-10 bg-brand text-white border-2 border-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
              <MoveHorizontal className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Helper bottom hint */}
        <div className="text-center mt-6 text-xs text-gray-400 font-mono flex items-center justify-center gap-2">
          <span>← Drag the knob left or right to swipe →</span>
        </div>
      </div>
    </section>
  );
}
