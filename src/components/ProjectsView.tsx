import React from 'react';
import { ViewState, Project } from '../types';
import { PROJECTS_DATA } from '../data';
import { MapPin, Layout, Calendar, Layers, CheckCircle2, ChevronLeft, ArrowRight, Compass } from 'lucide-react';
import BespokeOpArtPattern from './BespokeOpArtPattern';

interface ProjectsViewProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const FALLBACK_PROJECT_IMAGES: Record<string, string> = {
  'project-pramod': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
  'project-spoorthi': 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80',
  'project-sudheer': 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
  'project-anil': 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
  'project-piyush': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
};

export default function ProjectsView({ currentView, onNavigate }: ProjectsViewProps) {
  const handleLinkClick = (e: React.MouseEvent, view: ViewState) => {
    e.preventDefault();
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check if we need to show a single project detailed page
  const isSingleProject = currentView.startsWith('project-');
  const activeProjectId = isSingleProject ? currentView : null;
  const activeProject = PROJECTS_DATA.find((p) => p.id === activeProjectId);

  if (isSingleProject && activeProject) {
    // Check for user-uploaded custom image in localStorage
    let customHeroSrc = '';
    try {
      const saved = localStorage.getItem('kh_custom_residence_images');
      if (saved) {
        const parsed = JSON.parse(saved);
        customHeroSrc = parsed[`${activeProject.id}-0`] || '';
      }
    } catch (err) {
      // Ignore storage error
    }

    const displayHeroUrl = customHeroSrc || activeProject.imageUrl;

    return (
      <div id="single-project-view" className="py-16 sm:py-24 bg-warm-beige">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-12">
          {/* Back button */}
          <button
            id="back-to-projects-btn"
            onClick={() => {
              onNavigate('projects');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-2 text-xs font-bold tracking-widest text-warm-charcoal uppercase hover:text-warm-accent transition-colors"
          >
            <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            BACK TO ALL RESIDENCES
          </button>

          {/* Project Title Block */}
          <div className="space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-warm-bronze/30 bg-warm-bronze/10 px-3.5 py-1 text-xs font-semibold tracking-widest text-warm-bronze uppercase">
              {activeProject.style}
            </div>
            
            {/* Keeping exact requested title */}
            <h1 id="project-detail-title" className="font-display text-3xl font-extrabold sm:text-5xl text-warm-charcoal leading-tight">
              {activeProject.title}
            </h1>
            
            <p className="text-lg text-warm-charcoal/80 font-light max-w-3xl leading-relaxed">
              {activeProject.subtitle}
            </p>
          </div>

          {/* Project Meta Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-warm-cream/50">
            <div className="space-y-1">
              <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-warm-accent uppercase font-bold">
                <MapPin className="h-3.5 w-3.5" />
                LOCATION
              </span>
              <span className="block text-sm font-semibold text-warm-charcoal">
                {activeProject.location}
              </span>
            </div>
            <div className="space-y-1">
              <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-warm-accent uppercase font-bold">
                <Layout className="h-3.5 w-3.5" />
                UNIT SIZE
              </span>
              <span className="block text-sm font-semibold text-warm-charcoal">
                {activeProject.size}
              </span>
            </div>
            <div className="space-y-1">
              <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-warm-accent uppercase font-bold">
                <Calendar className="h-3.5 w-3.5" />
                YEAR DELIVERED
              </span>
              <span className="block text-sm font-semibold text-warm-charcoal">
                {activeProject.year}
              </span>
            </div>
            <div className="space-y-1">
              <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-warm-accent uppercase font-bold">
                <Layers className="h-3.5 w-3.5" />
                DESIGN LEVEL
              </span>
              <span className="block text-sm font-semibold text-warm-charcoal">
                Premium Turnkey
              </span>
            </div>
          </div>

          {/* Customization-First Bento Storytelling Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-6">
            
            {/* Visual Display (Left 7 Columns) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-xl border border-warm-cream bg-warm-charcoal">
                <img
                  src={displayHeroUrl}
                  onError={(e) => {
                    const target = e.currentTarget;
                    const fallback = FALLBACK_PROJECT_IMAGES[activeProject.id];
                    const extList = ['.png', '.jpeg', '.webp', '.JPG', '.PNG', '.JPEG'];
                    const currentAttempt = parseInt(target.getAttribute('data-ext-attempt') || '-1', 10);

                    if (!customHeroSrc && displayHeroUrl.startsWith('/images/') && currentAttempt < extList.length - 1) {
                      const nextAttempt = currentAttempt + 1;
                      target.setAttribute('data-ext-attempt', String(nextAttempt));
                      const basePath = displayHeroUrl.substring(0, displayHeroUrl.lastIndexOf('.'));
                      target.src = basePath + extList[nextAttempt];
                    } else if (fallback && target.src !== fallback) {
                      target.src = fallback;
                    }
                  }}
                  alt={`${activeProject.title} interior photography showcase`}
                  className="h-full w-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Bespoke Details List */}
              <div className="rounded-2xl bg-white p-8 border border-warm-cream shadow-sm space-y-4">
                <h4 className="font-display text-xs font-bold tracking-widest text-warm-accent uppercase border-b border-warm-cream/50 pb-3">
                  BESPOKE HANDCRAFTED SPECIFICATIONS
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeProject.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-warm-charcoal/80 leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-warm-bronze shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Customization Narrative Column (Right 5 Columns) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* THE BRIEF CARD */}
              <div className="rounded-2xl bg-white p-6 border border-warm-cream shadow-sm space-y-3 relative overflow-hidden transition-all hover:shadow-md">
                <div className="absolute right-0 top-0 h-20 w-20 bg-warm-cream/30 rounded-bl-full -mr-4 -mt-4 flex items-start justify-end p-4">
                  <span className="font-mono text-xs font-bold text-warm-accent/40">01</span>
                </div>
                <span className="inline-block rounded-full bg-warm-cream border border-warm-bronze/20 px-3 py-0.5 text-[10px] font-mono font-bold text-warm-accent uppercase tracking-wider">
                  THE BRIEF
                </span>
                <h3 className="font-display text-lg font-bold text-warm-charcoal">
                  The Client's Lifestyle & Dilemma
                </h3>
                <p className="text-xs sm:text-sm text-warm-charcoal/70 leading-relaxed font-light">
                  {activeProject.brief || activeProject.desc}
                </p>
              </div>

              {/* THE DESIGN / SOLUTION CARD */}
              <div className="rounded-2xl bg-warm-cream/40 p-6 border border-warm-bronze/20 shadow-sm space-y-3 relative overflow-hidden transition-all hover:shadow-md">
                <div className="absolute right-0 top-0 h-20 w-20 bg-warm-bronze/10 rounded-bl-full -mr-4 -mt-4 flex items-start justify-end p-4">
                  <span className="font-mono text-xs font-bold text-warm-accent/40">02</span>
                </div>
                <span className="inline-block rounded-full bg-warm-bronze/10 border border-warm-bronze/30 px-3 py-0.5 text-[10px] font-mono font-bold text-warm-accent uppercase tracking-wider">
                  THE DESIGN
                </span>
                <h3 className="font-display text-lg font-bold text-warm-charcoal">
                  Our Bespoke Interior Solution
                </h3>
                <p className="text-xs sm:text-sm text-warm-charcoal/70 leading-relaxed font-light">
                  {activeProject.solution || activeProject.desc}
                </p>
              </div>

              {/* THE RESULT CARD */}
              <div className="rounded-2xl bg-warm-charcoal p-6 text-white shadow-sm space-y-3 relative overflow-hidden transition-all hover:shadow-md">
                <div className="absolute right-0 top-0 h-20 w-20 bg-white/5 rounded-bl-full -mr-4 -mt-4 flex items-start justify-end p-4">
                  <span className="font-mono text-xs font-bold text-warm-bronze/40">03</span>
                </div>
                <span className="inline-block rounded-full bg-white/10 border border-white/20 px-3 py-0.5 text-[10px] font-mono font-bold text-warm-bronze uppercase tracking-wider">
                  THE RESULT
                </span>
                <h3 className="font-display text-lg font-bold text-white">
                  Living with Perfection
                </h3>
                <p className="text-xs sm:text-sm text-warm-cream/80 leading-relaxed font-light">
                  {activeProject.result || 'A flawless luxury outcome matching the exact lifestyle footprint of the family.'}
                </p>
              </div>

              {/* Contact Trigger */}
              <div className="pt-4">
                <a
                  id="project-detail-cta"
                  href="/contact/"
                  onClick={(e) => handleLinkClick(e, 'contact')}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-warm-accent py-4 text-center font-display text-xs font-bold tracking-widest text-white transition-all duration-300 hover:bg-warm-charcoal hover:shadow-lg"
                >
                  START YOUR CUSTOM DESIGN
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <p className="text-[10px] text-warm-charcoal/40 text-center mt-2.5">
                  Consultation includes a free space/lifestyle layout mapping.
                </p>
              </div>

            </div>
          </div>

          {/* Next Project Suggestion Banner */}
          <div className="pt-16 border-t border-warm-cream/50">
            <div className="rounded-2xl bg-warm-cream/40 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-warm-cream text-warm-accent">
                  <Compass className="h-6 w-6" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono tracking-widest text-warm-accent font-bold uppercase">NEXT RESIDENCE</span>
                  <span className="block text-sm font-semibold text-warm-charcoal">Explore other bespoke homes we have delivered in Hyderabad.</span>
                </div>
              </div>
              <button
                id="next-project-btn"
                onClick={() => {
                  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === activeProject.id);
                  const nextIndex = (currentIndex + 1) % PROJECTS_DATA.length;
                  onNavigate(PROJECTS_DATA[nextIndex].id as ViewState);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 rounded-full bg-warm-charcoal px-5 py-2.5 font-display text-xs font-bold tracking-widest text-warm-beige transition-colors hover:bg-warm-accent"
              >
                NEXT PROJECT
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // Fallback to primary Gallery page
  return (
    <div id="projects-gallery-container" className="py-16 sm:py-24 bg-warm-beige space-y-16">
      
      {/* Editorial Header */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 space-y-4 text-center">
        <span className="text-xs font-bold tracking-widest text-warm-accent uppercase block">
          CURATED RESIDENTIAL DESIGN
        </span>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-warm-charcoal sm:text-5xl">
          Projects by The Koncept House
        </h1>
        <p className="text-base text-warm-charcoal/60 max-w-2xl mx-auto leading-relaxed">
          Walk through our portfolio of custom-designed homes across Hyderabad, where interior aesthetics, natural light, and material craftsmanship meet.
        </p>
      </section>

      {/* Main Hover-Reveal Project Grid */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              id={`projects-page-card-${project.id}`}
              key={project.id}
              onClick={(e) => handleLinkClick(e, project.id as ViewState)}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-warm-charcoal cursor-pointer shadow-md transition-all duration-300 hover:shadow-2xl"
            >
              <img
                src={project.imageUrl}
                onError={(e) => {
                  const fallback = FALLBACK_PROJECT_IMAGES[project.id];
                  if (fallback && e.currentTarget.src !== fallback) {
                    e.currentTarget.src = fallback;
                  }
                }}
                alt={`${project.title} detailed thumbnail`}
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-65"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/95"></div>

              {/* Golden Op-Art geometric pattern that reveals on hover */}
              <BespokeOpArtPattern className="opacity-0 group-hover:opacity-[0.15] transition-opacity duration-700 scale-95 group-hover:scale-100" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white space-y-2">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-warm-bronze/90 px-3 py-1 font-mono text-[9px] tracking-widest uppercase text-warm-charcoal font-bold">
                    {project.style}
                  </span>
                  <span className="text-[10px] text-warm-cream/60 font-mono tracking-widest">
                    {project.size.split(' ')[0]}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold leading-snug tracking-tight group-hover:text-warm-bronze transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-xs text-warm-cream/70 line-clamp-2 opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {project.subtitle}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-bold text-warm-bronze pt-2 opacity-0 -translate-y-2 transition-all duration-300 delay-75 group-hover:opacity-100 group-hover:translate-y-0">
                  VIEW CASE DETAILS
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
