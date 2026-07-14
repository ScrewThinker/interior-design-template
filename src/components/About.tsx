/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { CheckCircle2, Award, Heart, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "../utils/constants";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Exemplary Quality",
      description: "We utilize boiling water resistant (BWR) marine plywood, German soft-close hardware, and high-grade laminates."
    },
    {
      icon: ShieldCheck,
      title: "Absolute Transparency",
      description: "No surprise invoices. Every screw, sheet, and paint bucket is detailed on a itemized quotation before work begins."
    },
    {
      icon: Heart,
      title: "Local Craftsmanship",
      description: "We work with Nagpur's finest master carpenters and polishers, maintaining exquisite finishing standards."
    }
  ];

  return (
    <section id="about" className="py-24 bg-brand-light/30 border-b border-brand/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Core Description Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand mb-3 block">
              OUR PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-tight text-dark mb-6">
              Premium quality work in{" "}
              <span className="italic text-brand font-normal">pocket-friendly budget</span>.
            </h2>
            <p className="text-gray-600 font-light leading-relaxed text-base sm:text-lg mb-8">
              {COMPANY_INFO.aboutLong}
            </p>
            
            {/* Quick stats grid inside About */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-brand/10">
              <div>
                <span className="block text-4xl font-serif text-brand font-medium">500+</span>
                <span className="text-[10px] uppercase text-gray-500 tracking-widest font-semibold block mt-1">
                  Homes & Offices Completed
                </span>
              </div>
              <div>
                <span className="block text-4xl font-serif text-brand font-medium">10+</span>
                <span className="text-[10px] uppercase text-gray-500 tracking-widest font-semibold block mt-1">
                  Years Design Legacy
                </span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-brand/10">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop"
                alt="Styled apartment interior by Nyasa"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              {/* Overlap Info Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/90 backdrop-blur-md rounded-xl border border-white/20 shadow-lg text-dark">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-1">
                  Nagpur's Choice Firm
                </p>
                <p className="text-sm font-serif italic text-gray-700">
                  "Known for professional service and extreme attention to details."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand mb-2 block">
              OUR CORE VALUES
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-light text-dark">
              How We Deliver Value to Our Clients
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="p-8 bg-white/40 backdrop-blur-sm border border-brand/10 rounded-2xl hover:bg-white transition-all duration-300 shadow-sm"
              >
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center text-brand mb-6">
                  <value.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-serif font-semibold text-dark mb-3">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Profile Block */}
        <div className="p-8 md:p-12 bg-white/65 backdrop-blur-sm border border-brand/10 rounded-3xl shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex justify-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-brand/20 shadow-md">
              <img
                src={COMPANY_INFO.founderImage}
                alt={COMPANY_INFO.founderName}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="md:col-span-8 text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand block mb-2">
              FOUNDER SPOTLIGHT
            </span>
            <h4 className="text-2xl font-serif font-medium text-dark">
              {COMPANY_INFO.founderName}
            </h4>
            <p className="text-xs uppercase tracking-widest text-brand-accent font-semibold mb-6">
              {COMPANY_INFO.founderTitle}
            </p>
            <p className="text-gray-700 italic font-serif text-lg leading-relaxed mb-6 font-light">
              "{COMPANY_INFO.founderQuote}"
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand" />
                <span className="text-xs font-semibold text-dark font-mono">B.Arch VNIT Nagpur</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand" />
                <span className="text-xs font-semibold text-dark font-mono">COA Registered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
