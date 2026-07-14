/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Calendar, Clock, ArrowRight, X, Heart, MessageCircle } from "lucide-react";
import { BLOG_POSTS, BlogPost } from "../utils/constants";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 bg-white border-b border-brand/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand mb-3 block">
            NYASA DESIGN INSIGHTS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-dark mb-4">
            Interior Trends & Guides
          </h2>
          <p className="text-gray-500 font-light leading-relaxed">
            Read our expert advice on space layout strategies, color selections, and ergonomic design trends curated for homes and offices in Nagpur.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="flex flex-col bg-brand-light/30 border border-brand/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              id={`blog-card-${post.id}`}
            >
              {/* Cover Image banner */}
              <div className="h-48 overflow-hidden relative group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-dark text-[10px] font-bold uppercase tracking-widest rounded shadow-sm">
                    Read Article
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Meta indices */}
                  <div className="flex items-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest font-mono mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-brand/70" /> {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand/70" /> {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-dark mb-3 leading-snug hover:text-brand transition-colors cursor-pointer" onClick={() => setSelectedPost(post)}>
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand hover:text-brand-dark transition-colors cursor-pointer"
                  id={`read-post-btn-${post.id}`}
                >
                  Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* High-Fidelity Full Article Read Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/65 backdrop-blur-sm">
            <div 
              className="relative w-full max-w-2xl bg-brand-light rounded-3xl overflow-hidden shadow-2xl border border-brand/10 max-h-[85vh] overflow-y-auto"
              id="blog-read-modal"
            >
              {/* Header Banner image */}
              <div className="relative h-56 md:h-72 bg-cover bg-center" style={{ backgroundImage: `url('${selectedPost.image}')` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-light via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md text-dark hover:text-brand transition-colors cursor-pointer"
                  aria-label="Close article reader"
                  id="close-blog-modal-btn"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-6 left-6 md:left-8 right-6 text-left">
                  <span className="px-2.5 py-1 bg-brand/95 text-white text-[9px] font-bold uppercase tracking-widest rounded mb-3 inline-block">
                    Interior Curation
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-dark leading-tight drop-shadow-sm">
                    {selectedPost.title}
                  </h3>
                </div>
              </div>

              {/* Text content details */}
              <div className="p-6 md:p-8">
                {/* Meta indexes */}
                <div className="flex gap-4 border-b border-brand/10 pb-4 mb-6 text-xs text-gray-500 font-mono uppercase tracking-wider font-semibold">
                  <span>Author: Pranay Pandit</span>
                  <span>•</span>
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>

                {/* Article body */}
                <div className="prose prose-stone text-dark max-w-none">
                  <p className="text-sm md:text-base font-light leading-relaxed mb-6 text-gray-700">
                    {selectedPost.content}
                  </p>
                  <p className="text-sm md:text-base font-light leading-relaxed mb-6 text-gray-700">
                    At Nyasa Interior Designs, we stress the value of sustainable aesthetics. When drafting space layouts, we do not simply pack rooms with furniture. We analyze natural air vents, daylight paths, and the biological balance between wood veneers and green landscapes. This holistic approach ensures your home remains a tranquil haven for years to come.
                  </p>
                </div>

                {/* Bottom engagement likes row */}
                <div className="flex justify-between items-center pt-6 border-t border-brand/10 mt-8 text-xs text-gray-400 font-mono">
                  <div className="flex gap-4">
                    <button className="flex items-center gap-1 hover:text-brand transition-colors cursor-pointer">
                      <Heart className="w-4 h-4" /> 42 Likes
                    </button>
                    <button className="flex items-center gap-1 hover:text-brand transition-colors cursor-pointer">
                      <MessageCircle className="w-4 h-4" /> 5 Comments
                    </button>
                  </div>
                  <span>Nagpur Hub</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
