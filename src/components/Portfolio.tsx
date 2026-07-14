/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Filter, Eye, X, MapPin, Calendar, Compass, ArrowRight } from "lucide-react";
import { PROJECTS, Project } from "../utils/constants";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter labels
  const filterCategories = ["All", "Residential", "Commercial", "Modular Kitchen", "Landscaping", "Elevation"];

  const filteredProjects = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-brand-light/30 border-b border-brand/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header and Filter Control panel */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="text-left max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand mb-3 block">
              OUR PROJECT ARCHIVE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-dark mb-4">
              A Gallery of Inspired Spaces
            </h2>
            <p className="text-gray-500 font-light leading-relaxed">
              Explore our diverse design executions in Nagpur, showcasing clean wood alignments, bespoke lighting features, and custom space layouts.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2.5 max-w-2xl">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest rounded transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-brand text-white shadow-md font-bold"
                    : "bg-white/60 text-dark/70 hover:bg-white border border-brand/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid (using Tailwind columns or dense grid) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="break-inside-avoid relative overflow-hidden rounded-2xl border border-brand/10 group cursor-pointer shadow-sm hover:shadow-lg transition-smooth"
              onClick={() => setSelectedProject(project)}
              id={`portfolio-item-${project.id}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover rounded-2xl transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
              {/* Overlay display details on hover */}
              <div className="absolute inset-0 bg-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white rounded-2xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-accent mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-serif font-semibold text-white mb-1">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-brand-light/80 font-light mb-4">
                  <MapPin className="w-3.5 h-3.5 text-brand" /> {project.location}
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-light border-t border-white/20 pt-3">
                  View Case Study <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rich Modal Lightbox Portfolio Detail */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/75 backdrop-blur-sm">
            <div 
              className="relative w-full max-w-4xl bg-brand-light rounded-3xl overflow-hidden shadow-2xl border border-brand/10 max-h-[90vh] overflow-y-auto"
              id="portfolio-lightbox"
            >
              {/* Top Image container */}
              <div className="relative h-72 md:h-96 bg-cover bg-center" style={{ backgroundImage: `url('${selectedProject.image}')` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-light via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md text-dark hover:text-brand transition-colors cursor-pointer"
                  aria-label="Close case study"
                  id="close-portfolio-modal-btn"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-10">
                <div className="flex flex-col md:flex-row gap-8 justify-between">
                  <div className="flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand block mb-2">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-dark mb-4">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-700 font-light leading-relaxed mb-6">
                      {selectedProject.details}
                    </p>
                    <div className="p-5 bg-white/40 border border-brand/5 rounded-2xl">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand mb-2">Technical Highlight</h4>
                      <p className="text-xs text-gray-600 font-light leading-relaxed">
                        Features fully tailored cabinetry alignments, high-durability core hardware, premium satin veneer coatings, and precision profile-light recessing layouts designed by Nyasa.
                      </p>
                    </div>
                  </div>

                  {/* Project metadata */}
                  <div className="w-full md:w-64 shrink-0 space-y-4">
                    <div className="p-4 bg-white/60 border border-brand/5 rounded-xl flex items-center gap-4">
                      <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center text-brand">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-wider text-gray-400 font-semibold">Location</p>
                        <p className="text-xs font-bold text-dark">{selectedProject.location}</p>
                      </div>
                    </div>

                    <div className="p-4 bg-white/60 border border-brand/5 rounded-xl flex items-center gap-4">
                      <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center text-brand">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-wider text-gray-400 font-semibold">Completion Year</p>
                        <p className="text-xs font-bold text-dark">{selectedProject.year}</p>
                      </div>
                    </div>

                    <div className="p-4 bg-white/60 border border-brand/5 rounded-xl flex items-center gap-4">
                      <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center text-brand">
                        <Compass className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-wider text-gray-400 font-semibold">Design Code</p>
                        <p className="text-xs font-bold text-dark font-mono uppercase">NY-{selectedProject.id.toUpperCase()}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        const element = document.getElementById("contact");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="w-full py-3 bg-brand hover:bg-brand-dark text-white text-xs font-bold uppercase tracking-[0.2em] rounded-xl transition-colors shadow"
                    >
                      Inquire About This Look
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
