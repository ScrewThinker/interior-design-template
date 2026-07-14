/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Clock, Calendar } from "lucide-react";
import { COMPANY_INFO } from "../utils/constants";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Residential",
    message: ""
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = "Full name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please provide a valid email.";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone)) {
      errors.phone = "Provide a valid 10-digit number.";
    }
    if (!formData.message.trim()) errors.message = "Message cannot be empty.";
    return errors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API Request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "Residential",
        message: ""
      });
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 bg-brand-light/30 border-b border-brand/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block - Detailed Contact Info & Map */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="text-left">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand mb-3 block">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-dark mb-6">
                Let's Curate <br />
                <span className="italic font-normal text-brand font-serif">Your Dream Space</span>
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                Ready to transform your home or workplace in Nagpur? Send us a message to schedule a completely free 3D design consultation at our office.
              </p>

              {/* Office Metadata list */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white border border-brand/10 rounded-lg flex items-center justify-center text-brand shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Our Studio Address</h4>
                    <p className="text-sm font-semibold text-dark leading-snug">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white border border-brand/10 rounded-lg flex items-center justify-center text-brand shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Call Design Desk</h4>
                    <p className="text-sm font-semibold text-dark hover:text-brand transition-colors">
                      <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white border border-brand/10 rounded-lg flex items-center justify-center text-brand shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Email Correspondence</h4>
                    <p className="text-sm font-semibold text-dark hover:text-brand transition-colors">
                      <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white border border-brand/10 rounded-lg flex items-center justify-center text-brand shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Working Hours</h4>
                    <p className="text-sm font-semibold text-dark">Mon - Sat: 10:00 AM - 08:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nagpur Map Location Vector Visual */}
            <div className="rounded-3xl border border-brand/10 overflow-hidden shadow-sm h-48 bg-white relative flex items-center justify-center">
              {/* Fallback elegant design map visual card */}
              <div className="absolute inset-0 bg-[#E8E4DF] flex flex-col justify-center items-center p-6 text-center">
                <MapPin className="w-8 h-8 text-brand animate-bounce mb-2" />
                <h4 className="text-xs font-bold text-dark uppercase tracking-widest">NYASA STUDIO LOCATION</h4>
                <p className="text-[10px] text-gray-500 leading-tight max-w-xs mt-1">
                  Near Pratap Nagar Square, Nagpur. Walk in for actual material mockups!
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.address)}`}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="mt-3 px-3 py-1.5 bg-brand text-white text-[9px] font-bold uppercase tracking-widest rounded hover:bg-brand-dark transition-colors shadow-sm"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right Block - Consultation Form */}
          <div className="lg:col-span-7 bg-white/70 backdrop-blur-md border border-brand/10 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col justify-center">
            
            {submitSuccess ? (
              <div className="text-center py-12" id="form-success-alert">
                <div className="w-16 h-16 bg-brand/15 text-brand rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-dark mb-3">Consultation Form Received!</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed max-w-md mx-auto mb-8">
                  Thank you for reaching out to Nyasa Interior Designs. Pranay Pandit or our principal designer will review your spaces and call you back in <strong className="font-bold">2 - 4 business hours</strong>.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-2.5 bg-brand text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-brand-dark transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" id="consultation-contact-form">
                <div className="text-left mb-4">
                  <h3 className="text-xl font-serif font-bold text-dark mb-1">Book Free Consultation</h3>
                  <p className="text-xs text-gray-500">Get a complimentary itemized quote and photorealistic 3D plan.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="text-left">
                    <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Aniket Sharma"
                      className={`w-full px-4 py-3 bg-brand-light/35 border ${
                        formErrors.name ? "border-red-400" : "border-brand/10"
                      } rounded-xl text-sm focus:outline-none focus:border-brand transition-colors`}
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-[10px] mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="text-left">
                    <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 9876543210"
                      className={`w-full px-4 py-3 bg-brand-light/35 border ${
                        formErrors.phone ? "border-red-400" : "border-brand/10"
                      } rounded-xl text-sm focus:outline-none focus:border-brand transition-colors`}
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-[10px] mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {formErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email field */}
                  <div className="text-left">
                    <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. aniket@gmail.com"
                      className={`w-full px-4 py-3 bg-brand-light/35 border ${
                        formErrors.email ? "border-red-400" : "border-brand/10"
                      } rounded-xl text-sm focus:outline-none focus:border-brand transition-colors`}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-[10px] mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {formErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Project Type dropdown */}
                  <div className="text-left">
                    <label htmlFor="projectType" className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-brand-light/35 border border-brand/10 rounded-xl text-sm focus:outline-none focus:border-brand transition-colors"
                    >
                      <option value="Residential">Residential Interiors</option>
                      <option value="Commercial">Commercial Offices</option>
                      <option value="Modular Kitchen">Modular Kitchen</option>
                      <option value="Elevation">Exterior Elevation</option>
                      <option value="Landscaping">Terrace/Balcony Gardens</option>
                    </select>
                  </div>
                </div>

                {/* Message field */}
                <div className="text-left">
                  <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Scope & Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your carpet area, preferred colors, and budget scope..."
                    className={`w-full px-4 py-3 bg-brand-light/35 border ${
                      formErrors.message ? "border-red-400" : "border-brand/10"
                    } rounded-xl text-sm focus:outline-none focus:border-brand transition-colors resize-none`}
                  />
                  {formErrors.message && (
                    <p className="text-red-500 text-[10px] mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-brand hover:bg-brand-dark text-white font-bold text-xs uppercase tracking-[0.25em] rounded-xl flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
                  id="form-submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Verifying spaces...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Schedule Free Consultation
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
