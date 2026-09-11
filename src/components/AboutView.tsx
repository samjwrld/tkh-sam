import React from 'react';
import { ViewState } from '../types';
import { Compass, Sparkles, Shield, Trophy, Users, CheckCircle, ArrowRight } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (view: ViewState) => void;
}

export default function AboutView({ onNavigate }: AboutViewProps) {
  const handleLinkClick = (e: React.MouseEvent, view: ViewState) => {
    e.preventDefault();
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const values = [
    {
      title: 'Design-Led Innovation',
      desc: 'We never repeat designs. Every residence, kitchen, and console is a bespoke drawing matching your specific spatial biology.',
      icon: <Sparkles className="h-5 w-5 text-warm-bronze" />
    },
    {
      title: 'Structural Integrity',
      desc: 'All projects rely on premium high-end raw materials: calibrated marine plywood, anti-fingerprint acrylics, and genuine German fittings.',
      icon: <Shield className="h-5 w-5 text-warm-bronze" />
    },
    {
      title: 'On-Time Handover Guarantee',
      desc: 'Our advanced mechanized workshop pre-fabricates components, allowing us to deliver full projects inside 60-75 working days.',
      icon: <Trophy className="h-5 w-5 text-warm-bronze" />
    }
  ];

  return (
    <div id="about-view-container" className="py-16 sm:py-24 space-y-24 bg-warm-beige">
      
      {/* Editorial Profile Header */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-warm-accent uppercase block">
              ESTABLISHED IN HYDERABAD
            </span>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-warm-charcoal sm:text-5xl">
              About The Koncept House
            </h1>
            <p className="text-lg text-warm-charcoal/80 leading-relaxed font-light">
              We believe a home should be an authentic physical reflection of its occupants. For over 15 years, our elite team of architects and interior space designers has been creating premium, bespoke interiors across Hyderabad.
            </p>
            <p className="text-sm text-warm-charcoal/70 leading-relaxed">
              By combining high-end international design philosophies with our own advanced, state-of-the-art modular manufacturing facility, we provide a unified, seamless design-and-build experience. From initial conceptual blueprints and photorealistic 3D renders to modular kitchen fabrication and electrical tiling civil work, we handle everything under one roof.
            </p>
            
            <div className="pt-4">
              <a
                href="/contact/"
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="inline-flex items-center gap-2 rounded-full bg-warm-charcoal px-6 py-3 font-display text-xs font-bold tracking-widest text-warm-beige transition-colors hover:bg-warm-accent"
              >
                DISCOVER OUR WORKFLOW
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl border border-warm-cream/50 bg-warm-charcoal">
              <img
                src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80"
                alt="The Koncept House Lead Architect drafting interior layouts"
                className="h-full w-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-warm-bronze p-6 rounded-2xl shadow-xl text-warm-charcoal max-w-[220px]">
              <span className="block font-display text-3xl font-extrabold">15+ Years</span>
              <span className="block text-xs font-semibold mt-1 uppercase tracking-wide">Elite Industry Expertise</span>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-20 border-y border-warm-cream/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-warm-accent uppercase block">
              OUR INTERNAL STATUTES
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-warm-charcoal">
              Built on Transparency & Unmatched Craft
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <div key={idx} className="rounded-2xl border border-warm-cream bg-warm-beige p-8 space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warm-cream">
                  {v.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-warm-charcoal">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-warm-charcoal/70 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Space Curators */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-widest text-warm-accent uppercase block">
            THE CREATIVE BRAINS
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-warm-charcoal">
            Meet Our Principal Space Designers
          </h2>
          <p className="text-sm text-warm-charcoal/60">
            A cohesive team of architects, interior designers, and technical engineers dedicated to absolute perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group rounded-2xl border border-warm-cream bg-white p-4 text-center space-y-4 transition-all hover:shadow-lg">
            <div className="aspect-square rounded-xl overflow-hidden bg-warm-cream">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                alt="Sanjay Kumar - Principal Design Director"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-warm-charcoal">Sanjay Kumar</h4>
              <p className="text-xs font-mono text-warm-accent tracking-widest uppercase font-semibold mt-1">Design Principal & Co-Founder</p>
              <p className="text-xs text-warm-charcoal/60 mt-2 max-w-[280px] mx-auto">12+ years directing luxury residential projects with clean minimalist philosophies.</p>
            </div>
          </div>

          <div className="group rounded-2xl border border-warm-cream bg-white p-4 text-center space-y-4 transition-all hover:shadow-lg">
            <div className="aspect-square rounded-xl overflow-hidden bg-warm-cream">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
                alt="Neha Sharma - Head Space Stylist"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-warm-charcoal">Neha Sharma</h4>
              <p className="text-xs font-mono text-warm-accent tracking-widest uppercase font-semibold mt-1">Head of Residential Styling</p>
              <p className="text-xs text-warm-charcoal/60 mt-2 max-w-[280px] mx-auto">Specializes in transitional fusions, fabric technologies, and organic room textures.</p>
            </div>
          </div>

          <div className="group rounded-2xl border border-warm-cream bg-white p-4 text-center space-y-4 transition-all hover:shadow-lg">
            <div className="aspect-square rounded-xl overflow-hidden bg-warm-cream">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                alt="Rohan Mehta - Technical Execution Chief"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-warm-charcoal">Rohan Mehta</h4>
              <p className="text-xs font-mono text-warm-accent tracking-widest uppercase font-semibold mt-1">Chief Execution Architect</p>
              <p className="text-xs text-warm-charcoal/60 mt-2 max-w-[280px] mx-auto">Manages our modular factory facility and site technical compliance audits.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
