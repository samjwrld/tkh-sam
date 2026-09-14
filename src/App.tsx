import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ViewState } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ProjectsView from './components/ProjectsView';
import BlogsView from './components/BlogsView';
import ContactView from './components/ContactView';
import StickyWhatsApp from './components/StickyWhatsApp';
import { ArrowRight, Sparkles, MapPin, Compass, ShieldCheck } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  // Handle URL synchronisation for better UX and SEO compliance
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path === '/about-us/') {
        setCurrentView('about');
      } else if (path === '/projects/') {
        setCurrentView('projects');
      } else if (path === '/projects/pramod-residence/') {
        setCurrentView('project-pramod');
      } else if (path === '/projects/anils-residence/') {
        setCurrentView('project-anil');
      } else if (path === '/projects/sudheers-residence/') {
        setCurrentView('project-sudheer');
      } else if (path === '/projects/spoorthis-residence/') {
        setCurrentView('project-spoorthi');
      } else if (path === '/projects/tanushrees-residence/') {
        setCurrentView('project-tanushree');
      } else if (path === '/our-blogs/') {
        setCurrentView('blogs');
      } else if (path === '/contact/') {
        setCurrentView('contact');
      } else if (path === '/home-interior-designers-near-me/') {
        setCurrentView('home-interior-designers-near-me');
      } else if (path === '/premium-interior-designers/') {
        setCurrentView('premium-interiors');
      } else if (path === '/modern-interior-designers/') {
        setCurrentView('modern-interiors');
      } else if (path === '/luxury-interior-designers/') {
        setCurrentView('luxury-interiors');
      } else {
        setCurrentView('home');
      }
    };

    // Listen to popstate (browser back/forward buttons)
    window.addEventListener('popstate', handleLocationChange);
    // Initial parse on load
    handleLocationChange();

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const handleNavigation = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Push visual state to window.history to change URL bar dynamically
    let path = '/';
    switch (view) {
      case 'about':
        path = '/about-us/';
        break;
      case 'projects':
        path = '/projects/';
        break;
      case 'project-pramod':
        path = '/projects/pramod-residence/';
        break;
      case 'project-anil':
        path = '/projects/anils-residence/';
        break;
      case 'project-sudheer':
        path = '/projects/sudheers-residence/';
        break;
      case 'project-spoorthi':
        path = '/projects/spoorthis-residence/';
        break;
      case 'project-tanushree':
        path = '/projects/tanushrees-residence/';
        break;
      case 'blogs':
        path = '/our-blogs/';
        break;
      case 'contact':
        path = '/contact/';
        break;
      case 'home-interior-designers-near-me':
        path = '/home-interior-designers-near-me/';
        break;
      case 'premium-interiors':
        path = '/premium-interior-designers/';
        break;
      case 'modern-interiors':
        path = '/modern-interior-designers/';
        break;
      case 'luxury-interiors':
        path = '/luxury-interior-designers/';
        break;
      default:
        path = '/';
    }

    // Update browser history state to avoid full page hard refreshes in iframe
    window.history.pushState({ view }, '', path);
  };

  // Render correct page view
  const renderViewContent = () => {
    switch (currentView) {
      case 'about':
        return <AboutView onNavigate={handleNavigation} />;
        
      case 'projects':
      case 'project-pramod':
      case 'project-anil':
      case 'project-sudheer':
      case 'project-spoorthi':
      case 'project-tanushree':
        return <ProjectsView currentView={currentView} onNavigate={handleNavigation} />;
        
      case 'blogs':
        return <BlogsView onNavigate={handleNavigation} />;
        
      case 'contact':
        return <ContactView />;

      // Highly targeted SEO landing views mapping footer anchors to visual pages
      case 'home-interior-designers-near-me':
        return (
          <div id="near-me-landing">
            <div className="bg-warm-charcoal text-white py-12 px-6 border-b border-warm-bronze/20">
              <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2">
                  <span className="flex items-center gap-1.5 text-xs font-mono text-warm-bronze font-bold uppercase tracking-widest">
                    <MapPin className="h-4 w-4 animate-bounce text-warm-bronze" />
                    LOCAL DESIGN DIRECTORY
                  </span>
                  <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
                    Best Home Interior Designers Near Me in Hyderabad
                  </h1>
                  <p className="text-xs sm:text-sm text-warm-cream/60">
                    Your search for top-rated local interior experts in Maseedbanda, Kondapur, Gachibowli, and Hitec City ends here.
                  </p>
                </div>
                <button
                  onClick={() => handleNavigation('contact')}
                  className="rounded-full bg-warm-bronze px-5 py-2.5 font-display text-xs font-bold tracking-widest text-warm-charcoal transition-colors hover:bg-white"
                >
                  GET AN ESTIMATE NOW
                </button>
              </div>
            </div>
            <HomeView onNavigate={handleNavigation} />
          </div>
        );

      case 'premium-interiors':
        return (
          <div id="premium-interiors-landing">
            <div className="bg-warm-charcoal text-white py-12 px-6 border-b border-warm-bronze/20">
              <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2">
                  <span className="flex items-center gap-1.5 text-xs font-mono text-warm-bronze font-bold uppercase tracking-widest">
                    <Sparkles className="h-4 w-4 text-warm-bronze" />
                    ELITE CRAFT BLUEPRINTS
                  </span>
                  <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
                    Premium Interior Designers in Hyderabad
                  </h1>
                  <p className="text-xs sm:text-sm text-warm-cream/60">
                    High-end materials, custom furniture fabrication, and turnkey design integrations.
                  </p>
                </div>
                <button
                  onClick={() => handleNavigation('contact')}
                  className="rounded-full bg-warm-bronze px-5 py-2.5 font-display text-xs font-bold tracking-widest text-warm-charcoal transition-colors hover:bg-white"
                >
                  HIRE THE EXPERTS
                </button>
              </div>
            </div>
            <HomeView onNavigate={handleNavigation} />
          </div>
        );

      case 'modern-interiors':
        return (
          <div id="modern-interiors-landing">
            <div className="bg-warm-charcoal text-white py-12 px-6 border-b border-warm-bronze/20">
              <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2">
                  <span className="flex items-center gap-1.5 text-xs font-mono text-warm-bronze font-bold uppercase tracking-widest">
                    <Compass className="h-4 w-4 text-warm-bronze" />
                    FUNCTIONAL SPACE DESIGNS
                  </span>
                  <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
                    Modern Interior Designers in Hyderabad
                  </h1>
                  <p className="text-xs sm:text-sm text-warm-cream/60">
                    Optimized layouts, smart modular kitchens, and contemporary space solutions.
                  </p>
                </div>
                <button
                  onClick={() => handleNavigation('contact')}
                  className="rounded-full bg-warm-bronze px-5 py-2.5 font-display text-xs font-bold tracking-widest text-warm-charcoal transition-colors hover:bg-white"
                >
                  REQUEST MODERN ESTIMATE
                </button>
              </div>
            </div>
            <HomeView onNavigate={handleNavigation} />
          </div>
        );

      case 'luxury-interiors':
        return (
          <div id="luxury-interiors-landing">
            <div className="bg-warm-charcoal text-white py-12 px-6 border-b border-warm-bronze/20">
              <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2">
                  <span className="flex items-center gap-1.5 text-xs font-mono text-warm-bronze font-bold uppercase tracking-widest">
                    <ShieldCheck className="h-4 w-4 text-warm-bronze" />
                    PRESTIGE VILLAS & RESIDENCES
                  </span>
                  <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
                    Luxury Interior Designers in Hyderabad
                  </h1>
                  <p className="text-xs sm:text-sm text-warm-cream/60">
                    Custom-upholstered seating, high-gloss finishes, and bespoke Gwalior-stone installations.
                  </p>
                </div>
                <button
                  onClick={() => handleNavigation('contact')}
                  className="rounded-full bg-warm-bronze px-5 py-2.5 font-display text-xs font-bold tracking-widest text-warm-charcoal transition-colors hover:bg-white"
                >
                  SCHEDULE STUDIO VISIT
                </button>
              </div>
            </div>
            <HomeView onNavigate={handleNavigation} />
          </div>
        );

      case 'home':
      default:
        return <HomeView onNavigate={handleNavigation} />;
    }
  };

  return (
    <div id="app-wrapper" className="min-h-screen flex flex-col justify-between bg-warm-beige text-warm-charcoal">
      {/* Premium Sticky Navigation Header */}
      <Header currentView={currentView} onNavigate={handleNavigation} />

      {/* Main View Transition Frame */}
      <main id="main-content-area" className="flex-grow relative overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ 
              duration: 0.45, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="w-full"
          >
            {renderViewContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Structured Dark Warm Footer */}
      <Footer onNavigate={handleNavigation} />

      {/* Sticky floating actions (WhatsApp CTA on mobile/desktop + scroll to top) */}
      <StickyWhatsApp />
    </div>
  );
}
