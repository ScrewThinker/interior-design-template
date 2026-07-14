/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { MessageSquare, ArrowUp, PhoneCall, Check } from "lucide-react";

// Components imports
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ThreeShowcase from "./components/ThreeShowcase";
import BeforeAfter from "./components/BeforeAfter";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import { COMPANY_INFO } from "./utils/constants";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll position and intersection observer for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Show/Hide "Scroll to Top" button
      setShowScrollTop(window.scrollY > 400);

      // Simple section detection
      const sections = ["hero", "about", "services", "portfolio", "showcase", "process", "blog", "contact"];
      const scrollPos = window.scrollY + 120; // offset for sticky header

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset for sticky navigation header
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  const handleOpenConsultation = () => {
    handleNavigate("contact");
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative min-h-screen bg-brand-light font-sans text-dark selection:bg-brand/20 selection:text-brand-dark antialiased">
      {/* Navbar Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Sections flow */}
      <main className="pt-20">
        {/* 1. Hero Cover Landing Section */}
        <Hero onExplore={handleNavigate} />

        {/* 2. Numeric Milestones Stat section */}
        <Stats />

        {/* 3. Narrative Story & Founding spotlight section */}
        <About />

        {/* 4. Complete Service Catalogue Cards Grid */}
        <Services />

        {/* 5. 12+ Masonry Gallery Project Showcase with filters */}
        <Portfolio />

        {/* 6. Interactive Three.js synthetic 3D presets viewport */}
        <ThreeShowcase />

        {/* 7. Double-image slide drag before-after comparison container */}
        <BeforeAfter />

        {/* 8. Vertical connecting timeline delivery process */}
        <Process />

        {/* 9. Star-rated client Google reviews carousel */}
        <Testimonials />

        {/* 10. Design Insights & Space saving guides */}
        <Blog />

        {/* 11. Multi-input Consultation Form & Address location map panel */}
        <CTA />
      </main>

      {/* 12. Full Quick Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* FLOATING ACTION UTILITIES */}
      
      {/* Left/Right floating persistent WhatsApp direct click chat widget */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Nyasa%20Designs,%20I'd%20like%20to%20inquire%20about%20a%20free%20consultation.`}
        target="_blank"
        referrerPolicy="no-referrer"
        className="fixed bottom-6 left-6 z-40 bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 hover:bg-[#20ba59] transition-all flex items-center justify-center group"
        title="Direct WhatsApp chat"
        id="whatsapp-floating-widget"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out text-xs font-bold uppercase tracking-widest pl-0 group-hover:pl-2 whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>

      {/* Scroll to top bubble indicator button */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-40 bg-brand text-white p-3.5 rounded-full shadow-2xl hover:scale-110 hover:bg-brand-dark transition-all flex items-center justify-center cursor-pointer"
          aria-label="Scroll to top"
          id="scroll-to-top-floating-btn"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Quick click Call support */}
      <a
        href={`tel:${COMPANY_INFO.phone}`}
        className="fixed bottom-24 left-6 z-40 bg-dark text-white p-3.5 rounded-full shadow-2xl hover:scale-110 hover:bg-brand transition-all flex items-center justify-center md:hidden"
        title="Click to Call design office"
        id="phone-quick-call-floating"
      >
        <PhoneCall className="w-5 h-5" />
      </a>
    </div>
  );
}
