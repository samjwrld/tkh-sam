import React, { useState, useEffect } from 'react';
import { ViewState } from '../types';
import { Menu, X, ChevronDown, PhoneCall, Compass, Clock, Send, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export default function Header({ currentView, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Quick 60-Second Callback Modal state
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackName, setCallbackName] = useState('');
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', view: 'home' as ViewState, url: '/' },
    { label: 'ABOUT', view: 'about' as ViewState, url: '/about-us/' },
    {
      label: 'PROJECTS',
      view: 'projects' as ViewState,
      url: '/projects/',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Pramod Residence (Minimalist Haven)', view: 'project-pramod' as ViewState, url: '/projects/pramod-residence/' },
        { label: "Anil's Residence (Pet-Friendly Villa)", view: 'project-anil' as ViewState, url: '/projects/anils-residence/' },
        { label: "Sudheer's Residence (Compact Living)", view: 'project-sudheer' as ViewState, url: '/projects/sudheers-residence/' },
        { label: "Spoorthi's Residence (Fusion Style)", view: 'project-spoorthi' as ViewState, url: '/projects/spoorthis-residence/' },
        { label: "Tanushree's Residence (Earthy Luxury)", view: 'project-tanushree' as ViewState, url: '/projects/tanushrees-residence/' },
      ]
    },
    { label: 'JOURNAL', view: 'blogs' as ViewState, url: '/our-blogs/' },
    { label: 'CONTACT', view: 'contact' as ViewState, url: '/contact/' },
  ];

  const handleLinkClick = (e: React.MouseEvent, view: ViewState) => {
    e.preventDefault();
    onNavigate(view);
    setIsMobileMenuOpen(false);
    setIsProjectsDropdownOpen(false);
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
      <header 
        id="header-root" 
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#FAF8F5]/90 border-b border-[#E8DFD3]/80 shadow-xs backdrop-blur-md py-3' 
            : 'bg-gradient-to-b from-[#1C1B19]/60 via-[#1C1B19]/20 to-transparent border-b border-white/10 py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo block */}
          <a 
            id="logo-link"
            href="/" 
            onClick={(e) => handleLinkClick(e, 'home')}
            className="group flex items-center gap-3"
          >
            <div className={`flex h-11 w-11 items-center justify-center rounded-sm transition-transform duration-300 group-hover:scale-105 ${
              isScrolled ? 'bg-[#1C1B19] text-[#FAF8F5]' : 'bg-[#1C1B19]/80 text-[#FAF8F5] border border-[#A8875A]/40'
            }`}>
              <Compass className="h-6 w-6 text-[#A8875A]" />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-2xl font-semibold tracking-wider transition-colors ${
                isScrolled ? 'text-[#1C1B19] group-hover:text-[#A8875A]' : 'text-white group-hover:text-[#C5A880]'
              }`}>
                THE KONCEPT HOUSE
              </span>
              <span className={`font-mono text-[9px] tracking-[0.2em] font-semibold uppercase ${
                isScrolled ? 'text-[#A8875A]' : 'text-[#C5A880]'
              }`}>
                SPACES CRAFTED TO BE LIVED IN • HYDERABAD
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div 
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setIsProjectsDropdownOpen(true)}
                    onMouseLeave={() => setIsProjectsDropdownOpen(false)}
                  >
                    <a
                      id={`nav-link-${item.label.toLowerCase()}`}
                      href={item.url}
                      onClick={(e) => handleLinkClick(e, item.view)}
                      className={`flex items-center gap-1.5 font-sans text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-200 py-2 ${
                        currentView === 'projects' || currentView.startsWith('project-')
                          ? isScrolled ? 'text-[#A8875A] border-b-2 border-[#A8875A]' : 'text-[#C5A880] border-b-2 border-[#C5A880]'
                          : isScrolled ? 'text-[#1C1B19] hover:text-[#A8875A]' : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} />
                    </a>

                    {/* Dropdown Menu */}
                    <div 
                      id="projects-dropdown-menu"
                      className={`absolute left-0 mt-2 w-72 rounded-none border border-[#E8DFD3] bg-[#FAF8F5] shadow-2xl transition-all duration-300 ${
                        isProjectsDropdownOpen 
                          ? 'visible opacity-100 translate-y-0' 
                          : 'invisible opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="p-3 space-y-1">
                        <div className="px-3 py-1.5 text-[10px] font-mono tracking-widest text-[#A8875A] font-semibold uppercase border-b border-[#E8DFD3]/60 mb-1">
                          FEATURED RESIDENCES
                        </div>
                        {item.dropdownItems?.map((subItem) => (
                          <a
                            id={`dropdown-link-${subItem.label.replace(/\s+/g, '-').toLowerCase()}`}
                            key={subItem.label}
                            href={subItem.url}
                            onClick={(e) => handleLinkClick(e, subItem.view)}
                            className={`block px-3 py-2 text-xs font-medium transition-colors duration-150 ${
                              currentView === subItem.view
                                ? 'bg-[#E8DFD3]/50 text-[#A8875A] font-semibold'
                                : 'text-[#1C1B19] hover:bg-[#F5F1EA] hover:text-[#A8875A]'
                            }`}
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  id={`nav-link-${item.label.toLowerCase()}`}
                  key={item.label}
                  href={item.url}
                  onClick={(e) => handleLinkClick(e, item.view)}
                  className={`font-sans text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-200 py-2 border-b-2 ${
                    currentView === item.view
                      ? isScrolled ? 'text-[#A8875A] border-[#A8875A]' : 'text-[#C5A880] border-[#C5A880]'
                      : isScrolled ? 'text-[#1C1B19] hover:text-[#A8875A] border-transparent' : 'text-white/90 hover:text-white border-transparent'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Quick 60s Callback Trigger */}
            <button
              id="header-callback-trigger"
              onClick={() => setIsCallbackModalOpen(true)}
              className={`flex items-center gap-2 border px-4 py-2 font-sans text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-300 ${
                isScrolled
                  ? 'border-[#A8875A]/60 text-[#1C1B19] hover:bg-[#A8875A]/10'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              <Clock className="h-3.5 w-3.5 text-[#A8875A] animate-pulse" />
              <span>CALLBACK IN 60s</span>
            </button>

            {/* Book Consultation */}
            <a
              id="header-cta"
              href="/contact/"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className={`group relative flex items-center gap-2 px-5 py-2.5 font-sans text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                isScrolled
                  ? 'bg-[#1C1B19] text-[#FAF8F5] hover:bg-[#A8875A] shadow-md'
                  : 'bg-[#A8875A] text-white hover:bg-white hover:text-[#1C1B19] shadow-lg'
              }`}
            >
              <PhoneCall className="h-3.5 w-3.5 text-[#C5A880] group-hover:text-current transition-colors" />
              <span>BOOK CONSULTATION</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`flex h-10 w-10 items-center justify-center border transition-colors lg:hidden ${
              isScrolled 
                ? 'border-[#E8DFD3] text-[#1C1B19] hover:bg-[#F5F1EA]' 
                : 'border-white/30 text-white hover:bg-white/10'
            }`}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <div 
          id="mobile-nav-drawer"
          className={`fixed inset-x-0 top-[72px] z-40 border-b border-[#E8DFD3] bg-[#FAF8F5] shadow-2xl transition-all duration-300 lg:hidden ${
            isMobileMenuOpen ? 'max-h-[85vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden pointer-events-none'
          }`}
        >
          <div className="px-6 py-8 space-y-6">
            {navItems.map((item) => (
              <div key={item.label} className="space-y-3">
                <a
                  id={`mobile-nav-link-${item.label.toLowerCase()}`}
                  href={item.url}
                  onClick={(e) => handleLinkClick(e, item.view)}
                  className={`block font-serif text-2xl font-normal tracking-wide ${
                    currentView === item.view || (item.hasDropdown && currentView.startsWith('project-'))
                      ? 'text-[#A8875A]'
                      : 'text-[#1C1B19]'
                  }`}
                >
                  {item.label}
                </a>

                {item.hasDropdown && (
                  <div id="mobile-dropdown-subitems" className="ml-4 pl-4 border-l border-[#A8875A]/40 space-y-2.5">
                    {item.dropdownItems?.map((subItem) => (
                      <a
                        id={`mobile-dropdown-link-${subItem.label.replace(/\s+/g, '-').toLowerCase()}`}
                        key={subItem.label}
                        href={subItem.url}
                        onClick={(e) => handleLinkClick(e, subItem.view)}
                        className={`block text-xs py-1 ${
                          currentView === subItem.view ? 'text-[#A8875A] font-semibold' : 'text-[#1C1B19]/70 hover:text-[#A8875A]'
                        }`}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 border-t border-[#E8DFD3] space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsCallbackModalOpen(true);
                }}
                className="flex w-full items-center justify-center gap-2 border border-[#A8875A] py-3 text-center font-sans text-xs font-bold tracking-[0.2em] uppercase text-[#1C1B19]"
              >
                <Clock className="h-4 w-4 text-[#A8875A]" />
                GET A CALLBACK IN 60 SECONDS
              </button>

              <a
                id="mobile-header-cta"
                href="/contact/"
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="flex w-full items-center justify-center gap-2 bg-[#1C1B19] py-3.5 text-center font-sans text-xs font-bold tracking-[0.2em] uppercase text-[#FAF8F5] transition-all duration-200 hover:bg-[#A8875A]"
              >
                <PhoneCall className="h-4 w-4 text-[#A8875A]" />
                BOOK CONSULTATION
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 60-Second Instant Callback Modal */}
      {isCallbackModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md border border-[#A8875A] bg-[#1C1B19] p-8 text-white shadow-2xl">
            <button
              onClick={() => setIsCallbackModalOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            {callbackSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="h-12 w-12 text-[#C5A880] mx-auto animate-bounce" />
                <h3 className="font-serif text-2xl font-light text-white">Callback Initiated!</h3>
                <p className="text-xs text-[#E8DFD3]/80 leading-relaxed">
                  Our Senior Design Lead is dialing <span className="font-mono text-[#C5A880] font-bold">{callbackPhone}</span> now.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCallbackSubmit} className="space-y-5">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] tracking-widest text-[#C5A880] uppercase font-bold">
                    INSTANT ASSISTANCE
                  </span>
                  <h3 className="font-serif text-2xl font-light text-white">
                    Get a Callback in 60 Seconds
                  </h3>
                  <p className="text-xs text-[#E8DFD3]/70 font-light leading-relaxed">
                    Enter your details below and our studio director will call your phone right away.
                  </p>
                </div>

                <div>
                  <label className="block font-mono text-[9px] tracking-widest text-[#C5A880] uppercase mb-1">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={callbackName}
                    onChange={(e) => setCallbackName(e.target.value)}
                    placeholder="e.g. Ananya Reddy"
                    className="w-full bg-[#2A231D] border border-white/20 px-4 py-2.5 text-xs text-white focus:border-[#C5A880] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[9px] tracking-widest text-[#C5A880] uppercase mb-1">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    value={callbackPhone}
                    onChange={(e) => setCallbackPhone(e.target.value)}
                    placeholder="+91 98881 92345"
                    className="w-full bg-[#2A231D] border border-white/20 px-4 py-2.5 text-xs text-white focus:border-[#C5A880] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#A8875A] py-3 text-center font-sans text-xs font-bold tracking-[0.2em] uppercase text-white hover:bg-white hover:text-[#1C1B19] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>REQUEST IMMEDIATE CALL</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}


