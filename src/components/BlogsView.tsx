import React, { useState } from 'react';
import { ViewState, BlogPost } from '../types';
import { BLOGS_DATA } from '../data';
import { ChevronLeft, Calendar, User, Clock, Bookmark, ArrowRight, Compass } from 'lucide-react';

interface BlogsViewProps {
  onNavigate: (view: ViewState) => void;
}

export default function BlogsView({ onNavigate }: BlogsViewProps) {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const selectedPost = BLOGS_DATA.find((p) => p.id === selectedPostId);

  if (selectedPost) {
    return (
      <div id="single-blog-reader" className="py-16 sm:py-24 bg-warm-beige">
        <div className="mx-auto max-w-3xl px-6 space-y-8">
          
          {/* Back Button */}
          <button
            id="back-to-blogs-btn"
            onClick={() => setSelectedPostId(null)}
            className="group inline-flex items-center gap-2 text-xs font-bold tracking-widest text-warm-charcoal uppercase hover:text-warm-accent transition-colors"
          >
            <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            BACK TO ALL INSIGHTS
          </button>

          {/* Article Header */}
          <div className="space-y-4">
            <span className="rounded-full bg-warm-cream border border-warm-bronze/20 px-3.5 py-1 text-xs font-mono font-bold text-warm-accent uppercase tracking-wider">
              {selectedPost.category}
            </span>
            
            <h1 className="font-display text-3xl font-extrabold sm:text-4xl text-warm-charcoal leading-snug">
              {selectedPost.title}
            </h1>

            {/* Author / Date Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-warm-charcoal/60 pt-2 border-b border-warm-cream/50 pb-4">
              <span className="flex items-center gap-1.5 font-semibold text-warm-charcoal">
                <User className="h-3.5 w-3.5 text-warm-bronze" />
                {selectedPost.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {selectedPost.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {selectedPost.readTime}
              </span>
            </div>
          </div>

          {/* Article Featured Image - Fixed Bug 5 */}
          <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-warm-cream shadow-md">
            <img
              src={selectedPost.imageUrl}
              alt={`${selectedPost.title} featured display`}
              className="h-full w-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Article Body Content */}
          <div className="space-y-6 text-base text-warm-charcoal/80 leading-relaxed font-light">
            <p className="font-semibold text-warm-charcoal text-lg">
              {selectedPost.excerpt}
            </p>
            
            {/* Split full content by double linebreaks for proper paragraph reading */}
            {selectedPost.fullContent.split('\n\n').map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Design Sign-off Banner */}
          <div className="rounded-2xl bg-warm-charcoal text-white p-8 space-y-6 mt-12 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-10">
              <Compass className="h-48 w-48 text-warm-bronze" />
            </div>
            
            <div className="relative z-10 space-y-3 max-w-xl">
              <span className="block text-[10px] font-mono tracking-widest text-warm-bronze uppercase font-bold">INSPIRED BY THIS DESIGN?</span>
              <h3 className="font-display text-xl font-bold">Let's craft a similar elite aesthetic in your home</h3>
              <p className="text-xs text-warm-cream/60 leading-relaxed">
                Our space designers in Gachibowli, Jubilee Hills, and Kondapur are ready to help customize these trends according to your floor plan specifications.
              </p>
            </div>

            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="relative z-10 inline-flex items-center gap-2 rounded-full bg-warm-bronze px-5 py-2.5 font-display text-xs font-bold tracking-widest text-warm-charcoal transition-colors hover:bg-white"
            >
              TALK TO SANJAY KUMAR
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div id="blogs-gallery-container" className="py-16 sm:py-24 bg-warm-beige space-y-16">
      
      {/* Editorial Header */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 space-y-4 text-center">
        <span className="text-xs font-bold tracking-widest text-warm-accent uppercase block">
          CREATIVE INSIGHTS & KNOWLEDGE
        </span>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-warm-charcoal sm:text-5xl">
          The Koncept House Blog
        </h1>
        <p className="text-base text-warm-charcoal/60 max-w-2xl mx-auto leading-relaxed">
          Technical design guidelines, luxury material evaluations, and spatial optimization strategies direct from our team of principal architects.
        </p>
      </section>

      {/* Main Blog Cards Grid */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS_DATA.map((blog) => (
            <article
              id={`blogs-page-card-${blog.id}`}
              key={blog.id}
              onClick={() => {
                setSelectedPostId(blog.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-warm-cream bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-warm-bronze/30 cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden bg-warm-charcoal">
                <img
                  src={blog.imageUrl}
                  alt={`${blog.title} representation`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs font-mono text-warm-accent font-semibold">
                    <span>{blog.category}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-warm-charcoal group-hover:text-warm-accent transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-warm-charcoal/60 leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-warm-cream/50 flex items-center justify-between">
                  <span className="text-[10px] text-warm-charcoal/50 font-mono">
                    {blog.date}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-warm-charcoal group-hover:text-warm-accent transition-colors">
                    READ ARTICLE
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
