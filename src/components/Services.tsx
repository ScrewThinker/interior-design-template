/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Home, Briefcase, Hammer, Compass, Leaf, Tv, X, CheckSquare, Calendar, Sparkles } from "lucide-react";
import { SERVICES, Service } from "../utils/constants";

// Icon mapper helper
const IconMap: { [key: string]: React.ComponentType<any> } = {
  Home,
  Briefcase,
  Hammer,
  Compass,
  Leaf,
  Tv
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleOpenDetail = (service: Service) => {
    setSelectedService(service);
  };

  const handleCloseDetail = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-24 bg-white border-b border-brand/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand mb-3 block">
            OUR COMPREHENSIVE SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-dark mb-4">
            Specialized Solutions for Every Space
          </h2>
          <p className="text-gray-500 font-light leading-relaxed">
            From design inception to structural execution, we offer professional turnkey interior design and construction services tailored to Nagpur's urban landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = IconMap[service.icon] || Home;
            return (
              <div
                key={service.id}
                className="group relative flex flex-col bg-brand-light/30 border border-brand/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                id={`service-card-${service.id}`}
              >
                {/* Service Image banner */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/65 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-brand shadow-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-dark mb-3 group-hover:text-brand transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-light leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  <button
                    onClick={() => handleOpenDetail(service)}
                    className="w-full py-2.5 border border-brand/20 text-brand text-[10px] font-bold uppercase tracking-widest rounded hover:bg-brand hover:text-white transition-all cursor-pointer text-center"
                    id={`service-readmore-${service.id}`}
                  >
                    Read More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* High-Fidelity Service Detail Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/60 backdrop-blur-sm">
            <div 
              className="relative w-full max-w-3xl bg-brand-light rounded-3xl overflow-hidden shadow-2xl border border-brand/10 max-h-[90vh] overflow-y-auto"
              id="service-detail-modal"
            >
              {/* Image Header banner inside modal */}
              <div className="relative h-64 md:h-80 bg-cover bg-center" style={{ backgroundImage: `url('${selectedService.image}')` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-light via-transparent to-transparent" />
                <button
                  onClick={handleCloseDetail}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md text-dark hover:text-brand transition-colors cursor-pointer"
                  aria-label="Close modal"
                  id="close-service-modal-btn"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-6 left-6 md:left-10 text-left">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-dark drop-shadow-sm">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
                  {/* Long Description and highlights */}
                  <div className="md:col-span-7">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand mb-3">Service Overview</h4>
                    <p className="text-gray-700 font-light leading-relaxed mb-6">
                      {selectedService.longDescription}
                    </p>
                    <div className="space-y-3 bg-white/40 p-5 rounded-2xl border border-brand/5">
                      <div className="flex gap-3">
                        <CheckSquare className="w-5 h-5 text-brand shrink-0" />
                        <span className="text-sm text-gray-700">100% BWR Marine Plywood (ISI 303/710 grades)</span>
                      </div>
                      <div className="flex gap-3">
                        <CheckSquare className="w-5 h-5 text-brand shrink-0" />
                        <span className="text-sm text-gray-700">5-Year Structural Execution Warranty</span>
                      </div>
                      <div className="flex gap-3">
                        <CheckSquare className="w-5 h-5 text-brand shrink-0" />
                        <span className="text-sm text-gray-700">Itemized, zero-deviation project quotation</span>
                      </div>
                    </div>
                  </div>

                  {/* Technical details and timeline cards */}
                  <div className="md:col-span-5 space-y-6">
                    <div className="p-5 bg-white/60 rounded-2xl border border-brand/5 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4 text-brand" />
                        <h4 className="text-xs font-bold uppercase tracking-wider text-brand">Delivery Timeline</h4>
                      </div>
                      <p className="text-xs text-gray-600 font-light leading-relaxed">
                        Expected execution: <strong className="font-bold">35 - 45 Working Days</strong> from design sign-off. Includes fully tracked carpentry milestones.
                      </p>
                    </div>

                    <div className="p-5 bg-white/60 rounded-2xl border border-brand/5 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-4 h-4 text-brand" />
                        <h4 className="text-xs font-bold uppercase tracking-wider text-brand">Materials Curation</h4>
                      </div>
                      <p className="text-xs text-gray-600 font-light leading-relaxed">
                        Curated selections of Merino laminates, Ebco/Hafele hardware, customized profile glass doors, and Asian Paints Royale finishes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-brand/10">
                  <a
                    href={`https://wa.me/919876543210?text=I'm%20interested%20in%20your%20${encodeURIComponent(selectedService.title)}`}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex-1 py-3.5 bg-brand text-white text-center text-xs font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-brand-dark transition-all flex items-center justify-center gap-2 shadow-lg"
                    id="modal-wa-consult"
                  >
                    Discuss on WhatsApp
                  </a>
                  <button
                    onClick={() => {
                      handleCloseDetail();
                      const element = document.getElementById("contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="flex-1 py-3.5 bg-dark text-white text-xs font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-brand transition-all cursor-pointer"
                    id="modal-form-consult"
                  >
                    Request Callback
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
