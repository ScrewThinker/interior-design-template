/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Coffee, Layers, Palette, Hammer, Key, ArrowDownCircle } from "lucide-react";
import { PROCESS_STEPS, ProcessStep } from "../utils/constants";

const IconMap: { [key: string]: React.ComponentType<any> } = {
  Coffee,
  Layers,
  Palette,
  Hammer,
  Key
};

export default function Process() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section id="process" className="py-24 bg-white border-b border-brand/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand mb-3 block">
            OUR EXECUTION Blueprints
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-dark mb-4">
            How We Shape Your Vision
          </h2>
          <p className="text-gray-500 font-light leading-relaxed">
            Five deliberate stages engineered to maintain absolute quality control, transparent billing, and timely handovers.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative max-w-3xl mx-auto">
          {/* Central pipeline connecting bar */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-0.5 bg-brand/15 -translate-x-1/2 z-0 hidden md:block" />

          {/* Steps List */}
          <div className="space-y-12 md:space-y-16 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const StepIcon = IconMap[step.icon] || Coffee;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  id={`process-step-${idx}`}
                >
                  {/* Left/Right Text Content Card */}
                  <div className="w-full md:w-1/2 md:px-12 flex flex-col justify-center text-left">
                    <div
                      className={`p-6 md:p-8 bg-brand-light/30 border border-brand/5 rounded-2xl shadow-sm hover:shadow-md transition-smooth cursor-default ${
                        hoveredStep === idx ? "bg-white border-brand/20 shadow-md" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3.5">
                        <span className="text-sm font-bold uppercase tracking-widest text-brand font-mono">
                          Phase {step.step}
                        </span>
                        <div className="h-px bg-brand/20 flex-1"></div>
                      </div>
                      <h3 className="text-xl font-serif font-bold text-dark mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Timeline Badge Node */}
                  <div className="absolute left-6 md:static md:left-auto md:right-auto md:w-16 flex items-center justify-center z-20 my-4 md:my-0">
                    <div
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center shadow transition-smooth ${
                        hoveredStep === idx
                          ? "bg-brand border-brand text-white scale-110"
                          : "bg-white border-brand/30 text-brand"
                      }`}
                    >
                      <StepIcon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Empty balance spacer for large screens */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Call to action workflow hint */}
        <div className="mt-16 text-center flex flex-col items-center gap-2 text-gray-400">
          <ArrowDownCircle className="w-5 h-5 text-brand animate-bounce" />
          <span className="text-xs font-mono">Ready to experience the blueprint? Get started below.</span>
        </div>
      </div>
    </section>
  );
}
