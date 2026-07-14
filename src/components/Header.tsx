/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MessageSquare, Compass, Home, BookOpen, Layers, Info } from "lucide-react";
import { COMPANY_INFO } from "../utils/constants";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  onOpenConsultation: () => void;
}

export default function Header({ activeSection, onNavigate, onOpenConsultation }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: Info },
    { id: "services", label: "Services", icon: Layers },
    { id: "portfolio", label: "Portfolio", icon: Compass },
    { id: "showcase", label: "3D Room", icon: Compass },
    { id: "process", label: "Process", icon: Compass },
    { id: "blog", label: "Blog", icon: BookOpen },
    { id: "contact", label: "Contact", icon: Phone },
  ];

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-brand/10 py-3 shadow-sm"
          : "bg-brand-light/40 backdrop-blur-sm border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => {
            onNavigate("hero");
            setIsMobileMenuOpen(false);
          }}
        >
          <div className="w-9 h-9 bg-brand flex items-center justify-center text-white font-serif font-bold text-xl rounded shadow-sm transition-transform duration-300 group-hover:scale-105">
            N
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-serif font-bold tracking-tight text-dark uppercase leading-none">
              Nyasa
            </span>
            <span className="text-[10px] font-sans font-semibold tracking-[0.25em] text-brand uppercase leading-normal">
              Interior Designs
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-8 text-xs font-semibold uppercase tracking-widest text-gray-600">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className={`relative pb-1 cursor-pointer transition-colors hover:text-brand ${
                      isActive ? "text-brand font-bold" : "text-dark/70"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand rounded-full" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
            target="_blank"
            referrerPolicy="no-referrer"
            className="p-2 text-brand hover:text-brand-dark transition-colors"
            title="Chat on WhatsApp"
            id="whatsapp-chat-header"
          >
            <MessageSquare className="w-5 h-5" />
          </a>
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 bg-dark text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded hover:bg-brand transition-all duration-300 shadow-sm"
            id="header-cta-consult"
          >
            Free Consultation
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-1.5 text-dark hover:text-brand transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
          id="mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-brand/15 shadow-xl p-6 transition-smooth">
          <ul className="flex flex-col gap-4 text-xs font-semibold uppercase tracking-widest text-dark/80 mb-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 w-full py-2.5 px-4 rounded transition-all ${
                      isActive 
                        ? "bg-brand/10 text-brand font-bold" 
                        : "hover:bg-brand-light/40"
                    }`}
                  >
                    <item.icon className="w-4 h-4 text-brand/80" />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                onOpenConsultation();
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-brand text-white text-center text-xs font-bold uppercase tracking-[0.2em] rounded shadow hover:bg-brand-dark transition-colors"
              id="mobile-cta-consult"
            >
              Get Free Consultation
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full py-3 border border-brand/30 text-brand text-center text-xs font-bold uppercase tracking-[0.2em] rounded flex items-center justify-center gap-2 hover:bg-brand-light/30 transition-colors"
              id="mobile-cta-call"
            >
              <Phone className="w-4 h-4" /> Call Design Team
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
