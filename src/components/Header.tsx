import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ViewState } from '../types';
import Logo from './Logo';
import { 
  Menu, 
  X, 
  ChevronDown, 
  PhoneCall, 
  Compass, 
  Clock, 
  Send, 
  CheckCircle2, 
  MapPin, 
  ArrowUpRight, 
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export default function Header({ currentView, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'projects' | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Quick 60-Second Callback Modal state
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackName, setCallbackName] = useState('');
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Featured Projects for Mega-Menu Showcase
  const megaMenuProjects = [
    { 
      label: 'Pramod Residence', 
      tag: 'AMBERPET · 8,500 SQ.FT', 
      view: 'project-pramod' as ViewState, 
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      subtitle: 'Minimalist Architectural Villa'
    },
    { 
      label: "Anil's Residence", 
      tag: 'KOKAPET · 6,200 SQ.FT', 
      view: 'project-anil' as ViewState, 
      img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
      subtitle: 'Pet-Friendly Luxury Residence'
    },
    { 
      label: "Sudheer's Residence", 
      tag: 'FINANCIAL DISTRICT · 4,100 SQ.FT', 
      view: 'project-sudheer' as ViewState, 
      img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
      subtitle: 'Compact Penthouse Atelier'
    },
    { 
      label: "Spoorthi's Residence", 
      tag: 'BANJARA HILLS · 7,800 SQ.FT', 
      view: 'project-spoorthi' as ViewState, 
      img: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80',
      subtitle: 'Nizami Heritage Fusion'
    },
  ];

  const navItems = [
    { label: 'HOME', view: 'home' as ViewState, url: '/' },
    { label: 'ABOUT', view: 'about' as ViewState, url: '/about-us/' },
    {
      label: 'PROJECTS',
      view: 'projects' as ViewState,
      url: '/projects/',
      hasMegaMenu: true,
    },
    { label: 'JOURNAL', view: 'blogs' as ViewState, url: '/our-blogs/' },
    { label: 'CONTACT', view: 'contact' as ViewState, url: '/contact/' },
  ];

  const handleLinkClick = (e: React.MouseEvent, view: ViewState) => {
    e.preventDefault();
    onNavigate(view);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCallbackSubmitted(true);
    setTimeout(() => {
      setCallbackSubmitted(false);
      setIsCallbackModalOpen(false);
      setCallbackPhone('');
      setCallbackName('');
    }, 4000);
  };

  return (
    <>
      {/* Dynamic Top Luxury Header */}
      <header 
        id="header-root" 
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#FAF8F5]/95 border-b border-[#E8DFD3] shadow-xs backdrop-blur-md py-3.5' 
            : 'bg-[#F5E1DC]/90 backdrop-blur-sm border-b border-[#241F16]/10 py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          
          {/* Studio Brand Logo - Renders local logo image tag (public/logo.png) & Brand Typography */}
          <a 
            id="logo-link"
            href="/" 
            onClick={(e) => handleLinkClick(e, 'home')}
            className="group flex items-center transition-transform hover:opacity-95"
            aria-label="The Koncept House - Home"
          >
            {/* Logo component manages local image swapping via <img src="/logo.png" alt="The Koncept House Logo" /> */}
            <Logo className="h-10 sm:h-12" showSubtitle={true} logoPath="/logo.png" />
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              if (item.hasMegaMenu) {
                return (
                  <div 
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown('projects')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a
                      id={`nav-link-${item.label.toLowerCase()}`}
                      href={item.url}
                      onClick={(e) => handleLinkClick(e, item.view)}
                      className={`flex items-center gap-1.5 font-sans text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-200 py-2.5 ${
                        currentView === 'projects' || currentView.startsWith('project-')
                          ? 'text-[#A8875A] font-extrabold border-b-2 border-[#A8875A]'
                          : 'text-[#241F16]/90 hover:text-[#A8875A] border-b-2 border-transparent'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${activeDropdown === 'projects' ? 'rotate-180 text-[#A8875A]' : 'opacity-60'}`} />
                    </a>

                    {/* Rich Projects Mega-Menu Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === 'projects' && (
                        <motion.div 
                          id="projects-mega-menu"
                          initial={{ opacity: 0, y: 12, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="absolute -left-32 top-full pt-3 w-[720px] z-50 pointer-events-auto"
                        >
                          <div className="bg-[#FAF8F5] border border-[#E8DFD3] shadow-2xl p-6 grid grid-cols-12 gap-6 relative">
                            {/* Top Gold Accent Bar */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-[#A8875A]"></div>

                            {/* Left Column: Direct Links */}
                            <div className="col-span-4 border-r border-[#E8DFD3] pr-6 space-y-4">
                              <div>
                                <span className="font-mono text-[9px] tracking-[0.25em] text-[#A8875A] uppercase font-bold block mb-1">
                                  PORTFOLIO CATEGORIES
                                </span>
                                <h4 className="font-serif text-lg text-[#241F16] font-normal">
                                  Selected Residences
                                </h4>
                              </div>

                              <div className="space-y-2 pt-2">
                                <a
                                  href="/projects/"
                                  onClick={(e) => handleLinkClick(e, 'projects')}
                                  className="group flex items-center justify-between text-xs font-bold tracking-wider text-[#241F16] hover:text-[#A8875A] py-1 border-b border-[#E8DFD3]/60"
                                >
                                  <span>ALL RESIDENCES</span>
                                  <ArrowUpRight className="h-3.5 w-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </a>
                                <a
                                  href="/luxury-interior-designers/"
                                  onClick={(e) => handleLinkClick(e, 'luxury-interiors')}
                                  className="group flex items-center justify-between text-xs font-medium text-[#241F16]/80 hover:text-[#A8875A] py-1"
                                >
                                  <span>LUXURY VILLAS</span>
                                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                                <a
                                  href="/modern-interior-designers/"
                                  onClick={(e) => handleLinkClick(e, 'modern-interiors')}
                                  className="group flex items-center justify-between text-xs font-medium text-[#241F16]/80 hover:text-[#A8875A] py-1"
                                >
                                  <span>PENTHOUSES & ATELIERS</span>
                                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                                <a
                                  href="/premium-interior-designers/"
                                  onClick={(e) => handleLinkClick(e, 'premium-interiors')}
                                  className="group flex items-center justify-between text-xs font-medium text-[#241F16]/80 hover:text-[#A8875A] py-1"
                                >
                                  <span>HERITAGE FUSION</span>
                                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                              </div>

                              <div className="pt-4 border-t border-[#E8DFD3] bg-[#F5F1EA] p-3">
                                <span className="font-mono text-[9px] text-[#A8875A] font-bold block uppercase mb-0.5">MASEEDBANDA, KONDAPUR STUDIO</span>
                                <p className="text-[11px] text-[#241F16]/80 font-light leading-snug">
                                  Custom villas & interiors in Maseedbanda, Kondapur, Kokapet & Financial District.
                                </p>
                              </div>
                            </div>

                            {/* Right Column: 4 Visual Cards */}
                            <div className="col-span-8 grid grid-cols-2 gap-4">
                              {megaMenuProjects.map((proj) => (
                                <a
                                  key={proj.label}
                                  href={`/projects/${proj.view.replace('project-', '')}-residence/`}
                                  onClick={(e) => handleLinkClick(e, proj.view)}
                                  className="group block space-y-2 bg-[#F5F1EA] p-2.5 border border-[#E8DFD3] hover:border-[#A8875A] transition-all hover:bg-white"
                                >
                                  <div className="relative aspect-[16/10] overflow-hidden bg-[#241F16]">
                                    <img 
                                      src={proj.img} 
                                      alt={proj.label}
                                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                                      referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute top-2 left-2 bg-[#241F16]/90 px-2 py-0.5 text-[8px] font-mono text-[#C5A880] tracking-widest uppercase">
                                      {proj.tag.split('·')[0]}
                                    </div>
                                  </div>

                                  <div>
                                    <h5 className="font-serif text-sm font-medium text-[#241F16] group-hover:text-[#A8875A] transition-colors leading-tight">
                                      {proj.label}
                                    </h5>
                                    <span className="text-[10px] font-mono text-[#241F16]/60 block truncate">
                                      {proj.subtitle}
                                    </span>
                                  </div>
                                </a>
                              ))}
                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  id={`nav-link-${item.label.toLowerCase()}`}
                  key={item.label}
                  href={item.url}
                  onClick={(e) => handleLinkClick(e, item.view)}
                  className={`font-sans text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-200 py-2.5 border-b-2 ${
                    currentView === item.view
                      ? 'text-[#A8875A] border-[#A8875A]'
                      : 'text-[#241F16]/90 hover:text-[#A8875A] border-transparent'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Luxury CTA Controls */}
          <div className="hidden md:flex items-center gap-3.5">
            {/* Quick 60s Callback Trigger */}
            <button
              id="header-callback-trigger"
              onClick={() => setIsCallbackModalOpen(true)}
              className="flex items-center gap-2 border border-[#241F16]/20 bg-[#F5F1EA]/80 hover:bg-[#241F16] hover:text-[#C5A880] px-3.5 py-2 font-sans text-[10px] font-bold tracking-[0.15em] uppercase text-[#241F16] transition-all duration-300 shadow-2xs group"
            >
              <Clock className="h-3.5 w-3.5 text-[#A8875A] group-hover:text-[#C5A880] animate-pulse" />
              <span>60s CALLBACK</span>
            </button>

            {/* Book Consultation */}
            <a
              id="header-cta"
              href="/contact/"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="group relative flex items-center gap-2 px-5 py-2.5 bg-[#241F16] text-[#F5E1DC] font-sans text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#A8875A] hover:text-white shadow-md"
            >
              <PhoneCall className="h-3.5 w-3.5 text-[#C5A880] group-hover:text-white transition-colors" />
              <span>BOOK CONSULTATION</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center border border-[#241F16]/20 bg-[#F5F1EA] text-[#241F16] transition-colors lg:hidden hover:bg-[#241F16] hover:text-[#C5A880]"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Slide-Out Drawer with Framer Motion */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              id="mobile-nav-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-[#E8DFD3] bg-[#FAF8F5] shadow-2xl overflow-hidden lg:hidden"
            >
              <div className="px-6 py-8 space-y-8 max-h-[85vh] overflow-y-auto">
                
                {/* Mobile Links */}
                <div className="space-y-6">
                  {navItems.map((item) => (
                    <div key={item.label} className="space-y-3">
                      <a
                        id={`mobile-nav-link-${item.label.toLowerCase()}`}
                        href={item.url}
                        onClick={(e) => handleLinkClick(e, item.view)}
                        className={`block font-serif text-3xl font-light tracking-wide ${
                          currentView === item.view || (item.hasMegaMenu && currentView.startsWith('project-'))
                            ? 'text-[#A8875A] font-normal'
                            : 'text-[#241F16]'
                        }`}
                      >
                        {item.label}
                      </a>

                      {item.hasMegaMenu && (
                        <div id="mobile-dropdown-subitems" className="ml-4 pl-4 border-l-2 border-[#A8875A]/40 space-y-3">
                          <span className="font-mono text-[9px] tracking-widest text-[#A8875A] uppercase font-bold block">
                            FEATURED HYDERABAD VILLAS
                          </span>
                          {megaMenuProjects.map((subItem) => (
                            <a
                              id={`mobile-dropdown-link-${subItem.label.replace(/\s+/g, '-').toLowerCase()}`}
                              key={subItem.label}
                              href={`/projects/${subItem.view.replace('project-', '')}-residence/`}
                              onClick={(e) => handleLinkClick(e, subItem.view)}
                              className={`block text-xs py-1 ${
                                currentView === subItem.view ? 'text-[#A8875A] font-bold' : 'text-[#241F16]/80 hover:text-[#A8875A]'
                              }`}
                            >
                              {subItem.label} ({subItem.tag.split('·')[0].trim()})
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Contact Action Card */}
                <div className="pt-6 border-t border-[#E8DFD3] space-y-4">
                  <div className="bg-[#F5F1EA] p-4 border border-[#E8DFD3] space-y-2">
                    <span className="font-mono text-[9px] text-[#A8875A] uppercase tracking-widest font-bold block">
                      STUDIO LOCATION
                    </span>
                    <div className="flex items-center gap-2 text-xs font-medium text-[#241F16]">
                      <MapPin className="h-4 w-4 text-[#A8875A] shrink-0" />
                      <span>Opp. Sumadhura Horizon, Maseedbanda, Kondapur, Hyderabad</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsCallbackModalOpen(true);
                    }}
                    className="flex w-full items-center justify-center gap-2 border border-[#A8875A] bg-[#FAF8F5] py-3.5 text-center font-sans text-xs font-bold tracking-[0.2em] uppercase text-[#241F16] shadow-sm"
                  >
                    <Clock className="h-4 w-4 text-[#A8875A]" />
                    GET A CALLBACK IN 60 SECONDS
                  </button>

                  <a
                    id="mobile-header-cta"
                    href="/contact/"
                    onClick={(e) => handleLinkClick(e, 'contact')}
                    className="flex w-full items-center justify-center gap-2 bg-[#241F16] py-4 text-center font-sans text-xs font-bold tracking-[0.2em] uppercase text-[#F5E1DC] shadow-md hover:bg-[#A8875A] transition-colors"
                  >
                    <PhoneCall className="h-4 w-4 text-[#C5A880]" />
                    BOOK CONSULTATION
                  </a>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 60-Second Instant Callback Modal */}
      <AnimatePresence>
        {isCallbackModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#241F16]/80 p-4 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-md border border-[#C5A880]/40 bg-[#241F16] p-8 text-white shadow-2xl"
            >
              <button
                onClick={() => setIsCallbackModalOpen(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {callbackSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <CheckCircle2 className="h-14 w-14 text-[#C5A880] mx-auto animate-bounce" />
                  <h3 className="font-serif text-2xl font-light text-white">Callback Request Confirmed</h3>
                  <p className="text-xs text-[#E8DFD3]/80 leading-relaxed font-light">
                    Our Senior Architectural Lead is placing a direct call to <span className="font-mono text-[#C5A880] font-bold">{callbackPhone}</span> within the next 60 seconds.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} className="space-y-5">
                  <div className="space-y-1.5 border-b border-white/10 pb-4">
                    <div className="inline-flex items-center gap-2 text-[#C5A880]">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span className="font-mono text-[9px] tracking-widest uppercase font-bold">
                        DIRECT STUDIO CONNECT
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-light text-white">
                      Callback in 60 Seconds
                    </h3>
                    <p className="text-xs text-[#E8DFD3]/70 font-light leading-relaxed">
                      Enter your phone number to receive an immediate call from our Maseedbanda, Kondapur studio lead.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block font-mono text-[9px] tracking-widest text-[#C5A880] uppercase mb-1.5">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={callbackName}
                        onChange={(e) => setCallbackName(e.target.value)}
                        placeholder="e.g. Vikram Reddy"
                        className="w-full bg-white/5 border border-white/20 px-4 py-3 text-xs text-white focus:border-[#C5A880] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[9px] tracking-widest text-[#C5A880] uppercase mb-1.5">
                        PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        required
                        value={callbackPhone}
                        onChange={(e) => setCallbackPhone(e.target.value)}
                        placeholder="+91 98881 92345"
                        className="w-full bg-white/5 border border-white/20 px-4 py-3 text-xs text-white focus:border-[#C5A880] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#A8875A] py-3.5 text-center font-sans text-xs font-bold tracking-[0.2em] uppercase text-white hover:bg-white hover:text-[#241F16] transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>REQUEST IMMEDIATE CALL</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
