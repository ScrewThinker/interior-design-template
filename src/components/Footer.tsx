/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Facebook, Instagram, Linkedin, Twitter, ArrowRight, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "../utils/constants";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && /\S+@\S+\.\S+/.test(email)) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-dark text-brand-light/95 border-t border-brand/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1 - Brand Identity info */}
          <div className="md:col-span-4 text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-brand flex items-center justify-center text-white font-serif font-bold text-lg rounded shadow-sm">
                N
              </div>
              <div className="flex flex-col">
                <span className="text-base font-serif font-bold tracking-tight text-white uppercase leading-none">
                  Nyasa
                </span>
                <span className="text-[9px] font-sans font-semibold tracking-[0.2em] text-brand-accent uppercase leading-normal">
                  Interior Designs
                </span>
              </div>
            </div>
            <p className="text-xs text-brand-light/70 font-light leading-relaxed max-w-sm mb-6">
              {COMPANY_INFO.aboutShort}
            </p>
            {/* Social Media Link icons */}
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" referrerPolicy="no-referrer" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand hover:border-brand hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" referrerPolicy="no-referrer" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand hover:border-brand hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" referrerPolicy="no-referrer" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand hover:border-brand hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" referrerPolicy="no-referrer" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand hover:border-brand hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 - Navigation Links */}
          <div className="md:col-span-3 text-left md:pl-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-accent mb-6 font-mono">
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-xs font-medium text-brand-light/70">
              <li>
                <button onClick={() => onNavigate("hero")} className="hover:text-brand-accent cursor-pointer transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("about")} className="hover:text-brand-accent cursor-pointer transition-colors">
                  About Story
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("services")} className="hover:text-brand-accent cursor-pointer transition-colors">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("portfolio")} className="hover:text-brand-accent cursor-pointer transition-colors">
                  Portfolio Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("showcase")} className="hover:text-brand-accent cursor-pointer transition-colors">
                  3D Interactive Walk
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("blog")} className="hover:text-brand-accent cursor-pointer transition-colors">
                  Design Guides
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Address details */}
          <div className="md:col-span-2 text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-accent mb-6 font-mono">
               नागपुर Studio
            </h4>
            <p className="text-xs text-brand-light/70 font-light leading-relaxed mb-4">
              {COMPANY_INFO.address}
            </p>
            <p className="text-xs font-mono font-semibold text-white">
              Ph: {COMPANY_INFO.phone}
            </p>
          </div>

          {/* Column 4 - Newsletter SignUp */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-accent mb-6 font-mono">
              Design Digest
            </h4>
            <p className="text-xs text-brand-light/70 font-light leading-relaxed mb-4">
              Subscribe to get space-saving design tips and project announcements in Nagpur.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-brand-accent text-xs font-bold">
                <CheckCircle2 className="w-4 h-4" /> Subscribed successfully!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative mt-2">
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs focus:outline-none focus:border-brand text-white"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 w-8 h-8 bg-brand hover:bg-brand-dark text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-[10px] font-mono tracking-widest text-brand-light/40">
          <span>
            NAGPUR, MH • © {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.
          </span>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-brand-light">Privacy Policy</span>
            <span>•</span>
            <span className="cursor-pointer hover:text-brand-light">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
