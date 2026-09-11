import React from 'react';
import { ViewState } from '../types';
import { Compass, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Calendar } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (e: React.MouseEvent, view: ViewState) => {
    e.preventDefault();
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer-root" className="bg-warm-charcoal text-warm-cream/90">
      {/* Upper Brand / Consultation Bar */}
      <div className="border-b border-warm-cream/10 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display text-2xl font-bold tracking-tight text-white">
              Ready to construct your dream interior space?
            </h3>
            <p className="text-sm text-warm-cream/60">
              Get in touch with the best interior designers in Hyderabad today for a free design quote.
            </p>
          </div>
          <a
            id="footer-consultation-btn"
            href="/contact/"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="inline-flex items-center gap-2 rounded-full bg-warm-bronze px-6 py-3 font-display text-xs font-bold tracking-widest text-warm-charcoal transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-0.5"
          >
            <Calendar className="h-4 w-4" />
            BOOK FREE APPOINTMENT
          </a>
        </div>
      </div>

      {/* Main Grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Socials Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-warm-bronze text-warm-charcoal">
                <Compass className="h-5.5 w-5.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-widest text-white">
                  THE KONCEPT HOUSE
                </span>
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#C5A880] uppercase font-semibold">
                  SPACES CRAFTED TO BE LIVED IN
                </span>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed text-warm-cream/60">
              The Koncept House is premiering elite, smart, and highly functional home and commercial interiors in Hyderabad. We manufacture top-tier modular kitchens and custom furniture in our private, state-of-the-art facility.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-warm-cream/70 transition-colors hover:bg-warm-bronze hover:text-warm-charcoal"
                aria-label="Facebook Link"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-warm-cream/70 transition-colors hover:bg-warm-bronze hover:text-warm-charcoal"
                aria-label="Instagram Link"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-warm-cream/70 transition-colors hover:bg-warm-bronze hover:text-warm-charcoal"
                aria-label="Linkedin Link"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (Required Footer Links) */}
          <div className="space-y-6">
            <h4 className="font-display text-sm font-bold tracking-widest text-white uppercase">
              Our Services & Styles
            </h4>
            <ul id="footer-links-list" className="space-y-3.5 text-sm">
              <li>
                <a
                  id="footer-link-home"
                  href="/"
                  onClick={(e) => handleLinkClick(e, 'home')}
                  className="text-warm-cream/60 hover:text-warm-bronze transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  id="footer-link-interiors"
                  href="/home-interior-designers-near-me/"
                  onClick={(e) => handleLinkClick(e, 'home-interior-designers-near-me')}
                  className="text-warm-cream/60 hover:text-warm-bronze transition-colors"
                >
                  interiors
                </a>
              </li>
              <li>
                <a
                  id="footer-link-premium-interiors"
                  href="/premium-interior-designers/"
                  onClick={(e) => handleLinkClick(e, 'premium-interiors')}
                  className="text-warm-cream/60 hover:text-warm-bronze transition-colors"
                >
                  Premium Interiors
                </a>
              </li>
              <li>
                <a
                  id="footer-link-modern-interiors"
                  href="/modern-interior-designers/"
                  onClick={(e) => handleLinkClick(e, 'modern-interiors')}
                  className="text-warm-cream/60 hover:text-warm-bronze transition-colors"
                >
                  Modern interiors
                </a>
              </li>
              <li>
                <a
                  id="footer-link-luxury-interiors"
                  href="/luxury-interior-designers/"
                  onClick={(e) => handleLinkClick(e, 'luxury-interiors')}
                  className="text-warm-cream/60 hover:text-warm-bronze transition-colors"
                >
                  Luxury interiors
                </a>
              </li>
              <li>
                <a
                  id="footer-link-contact-us"
                  href="/contact/"
                  onClick={(e) => handleLinkClick(e, 'contact')}
                  className="text-warm-cream/60 hover:text-warm-bronze transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-6">
            <h4 className="font-display text-sm font-bold tracking-widest text-white uppercase">
              Studio Location
            </h4>
            <ul className="space-y-4 text-sm text-warm-cream/60">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-warm-bronze shrink-0 mt-0.5" />
                <span>
                  The Koncept House Studio,<br />
                  4th Floor, Sadanand Yadav's Buildings,<br />
                  Opp. Sumadhura Horizon, Masjidbanda, Kondapur,<br />
                  Hyderabad, Telangana - 500084
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-warm-bronze shrink-0" />
                <a href="tel:+919888192345" className="hover:text-warm-bronze transition-colors">
                  +91 98881 92345
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-warm-bronze shrink-0" />
                <a href="mailto:info@thekoncepthouse.com" className="hover:text-warm-bronze transition-colors">
                  info@thekoncepthouse.com
                </a>
              </li>
            </ul>
          </div>

          {/* Mini Interactive Map View */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold tracking-widest text-white uppercase">
              Coverage Area
            </h4>
            <p className="text-xs text-warm-cream/50 leading-relaxed">
              Serving Kondapur, Gachibowli, Madhapur, Jubilee Hills, Financial District, Manikonda, Miyapur, and across Hyderabad.
            </p>
            <div className="relative h-28 w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 p-1">
              {/* Simulated Map SVG */}
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0 20 Q 30 40 50 10 T 100 30 M30 0 L 30 100 M 0 60 Q 40 70 80 50 T 100 90 M70 0 L 70 100" stroke="#c5a880" strokeWidth="0.5" fill="none" />
                </svg>
                <div className="relative flex flex-col items-center justify-center text-center">
                  <MapPin className="h-5 w-5 text-warm-bronze animate-bounce" />
                  <span className="font-mono text-[9px] tracking-wider text-warm-bronze uppercase mt-1 font-semibold">Kondapur, HYD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-warm-cream/10 bg-black/30 py-8 text-center text-xs text-warm-cream/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 The Koncept House. All Rights Reserved. Crafted with love for Hyderabad homeowners.</p>
          <div className="flex gap-4">
            <a href="/privacy-policy/" className="hover:text-warm-bronze">Privacy Policy</a>
            <span>•</span>
            <a href="/terms/" className="hover:text-warm-bronze">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
