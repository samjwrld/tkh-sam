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

  // Handle URL synchronisation for page refreshes, direct links, and SEO compliance
  useEffect(() => {
    const handleLocationChange = () => {
      let rawPath = window.location.pathname.toLowerCase().trim();
      
      // Strip trailing slashes unless it's root '/'
      if (rawPath.length > 1 && rawPath.endsWith('/')) {
        rawPath = rawPath.slice(0, -1);
      }

      switch (rawPath) {
        case '/about-us':
        case '/about':
        case '/about-us.html':
          setCurrentView('about');
          break;
        case '/projects':
        case '/our-projects':
        case '/portfolio':
        case '/projects.html':
          setCurrentView('projects');
          break;
        case '/projects/pramod-residence':
        case '/projects/pramod':
          setCurrentView('project-pramod');
          break;
        case '/projects/anils-residence':
        case '/projects/anil':
          setCurrentView('project-anil');
          break;
        case '/projects/sudheers-residence':
        case '/projects/sudheer':
          setCurrentView('project-sudheer');
          break;
        case '/projects/spoorthis-residence':
        case '/projects/spoorthi':
          setCurrentView('project-spoorthi');
          break;
        case '/projects/tanushrees-residence':
        case '/projects/tanushree':
          setCurrentView('project-tanushree');
          break;
        case '/our-blogs':
        case '/blogs':
        case '/blog':
          setCurrentView('blogs');
          break;
        case '/contact':
        case '/contact-us':
        case '/contact.html':
          setCurrentView('contact');
          break;
        case '/home-interior-designers-near-me':
          setCurrentView('home-interior-designers-near-me');
          break;
        case '/premium-interior-designers':
          setCurrentView('premium-interiors');
          break;
        case '/modern-interior-designers':
          setCurrentView('modern-interiors');
          break;
        case '/luxury-interior-designers':
          setCurrentView('luxury-interiors');
          break;
        case '':
        case '/':
        default:
          setCurrentView('home');
          break;
      }
    };

    // Listen to popstate (browser back/forward buttons and state changes)
    window.addEventListener('popstate', handleLocationChange);
    // Initial parse on load/refresh
    handleLocationChange();

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Dynamically synchronize document title, meta tags, and canonical links for SEO tools & audits
  useEffect(() => {
    const seoMap: Record<ViewState, { title: string; description: string; path: string }> = {
      home: {
        title: "The Koncept House | Luxury Interior Designers in Hyderabad",
        description: "The Koncept House is Hyderabad's premier luxury interior design studio. Crafting bespoke villas, penthouses, and high-end residences in Hyderabad with refined local heritage and contemporary minimalism.",
        path: "/"
      },
      about: {
        title: "About Us | The Koncept House – Luxury Interior Design Studio Hyderabad",
        description: "Discover the story, design philosophy, and in-house manufacturing capabilities behind The Koncept House, Hyderabad's leading luxury interior design studio.",
        path: "/about-us/"
      },
      projects: {
        title: "Luxury Interior Projects & Portfolio | The Koncept House Hyderabad",
        description: "Explore our portfolio of luxury residential interiors in Hyderabad, including independent villas, penthouses, and high-rise duplexes.",
        path: "/projects/"
      },
      'project-pramod': {
        title: "Pramod's Residence | Minimalist Family Villa Interior Hyderabad",
        description: "Inside Pramod's Residence: A 9,200 sq.ft. luxury family villa interior crafted with warm Burma teak, Italian marble, and bespoke millwork.",
        path: "/projects/pramod-residence/"
      },
      'project-anil': {
        title: "Anil's Residence | Pet-Friendly Luxury Villa Interiors Hyderabad",
        description: "Explore Anil's Residence: Pet-friendly luxury villa interiors featuring scratch-resistant finishes, custom cabinetry, and seamless spatial flow.",
        path: "/projects/anils-residence/"
      },
      'project-sudheer': {
        title: "Sudheer's Residence | Sky Duplex Interior Design Hyderabad",
        description: "Sudheer's Residence: A 4,100 sq.ft. luxury sky duplex interior with acoustically tuned paneling, Italian marble, and custom lighting.",
        path: "/projects/sudheers-residence/"
      },
      'project-spoorthi': {
        title: "Spoorthi's Residence | Heritage Modern Luxury Interiors Hyderabad",
        description: "Spoorthi's Residence at Kohinoor Aurobindo: Timeless Bidriware brass inlay and Pochampally silk accents paired with contemporary luxury.",
        path: "/projects/spoorthis-residence/"
      },
      'project-tanushree': {
        title: "Tanushree's Residence | Organic Earthy Luxury Interiors Hyderabad",
        description: "Tanushree's Residence at Aparna Luxor Park: High-end organic textures, lime-wash finishes, and custom-milled cabinetry.",
        path: "/projects/tanushrees-residence/"
      },
      blogs: {
        title: "Interior Design Insights & Trends Blog | The Koncept House",
        description: "Expert interior design advice, luxury Hyderabad home trends, modular kitchen guides, and material selection tips from The Koncept House.",
        path: "/our-blogs/"
      },
      contact: {
        title: "Contact Us & Book Studio Consultation | The Koncept House Hyderabad",
        description: "Get in touch with The Koncept House for bespoke interior design consultations in Hyderabad. Visit our studio or request a turnkey estimate.",
        path: "/contact/"
      },
      'home-interior-designers-near-me': {
        title: "Best Home Interior Designers Near Me in Hyderabad | The Koncept House",
        description: "Top-rated local home interior designers in Hyderabad. Turnkey design, in-house modular manufacturing, and zero-delay execution.",
        path: "/home-interior-designers-near-me/"
      },
      'premium-interiors': {
        title: "Premium Interior Designers in Hyderabad | The Koncept House",
        description: "Bespoke premium interior design services in Hyderabad. High-end materials, custom furniture fabrication, and white-glove turnkey execution.",
        path: "/premium-interior-designers/"
      },
      'modern-interiors': {
        title: "Modern Interior Designers in Hyderabad | The Koncept House",
        description: "Modern, minimalist interior designers in Hyderabad. Smart modular kitchens, spatial planning, and clutter-free luxury layouts.",
        path: "/modern-interior-designers/"
      },
      'luxury-interiors': {
        title: "Luxury Villa & Penthouse Interior Designers in Hyderabad | The Koncept House",
        description: "Prestige villa and penthouse interior design specialists in Hyderabad. Bespoke millwork, Italian marble, and architectural lighting.",
        path: "/luxury-interior-designers/"
      }
    };

    const currentSeo = seoMap[currentView] || seoMap.home;

    // 1. Update Document Title
    document.title = currentSeo.title;

    // 2. Helper to set/update meta tag
    const setMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attrName, attrVal);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMetaTag('meta[name="description"]', 'name', 'description', currentSeo.description);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', currentSeo.title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', currentSeo.description);

    const canonicalUrl = window.location.origin + currentSeo.path;
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);

    // 3. Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [currentView]);

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
                    Your search for top-rated local interior experts in Hyderabad ends here.
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
