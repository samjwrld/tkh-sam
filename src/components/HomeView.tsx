import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import GoldenGeometryBg from './GoldenGeometryBg';
import BespokeOpArtPattern from './BespokeOpArtPattern';
import { ViewState } from '../types';
import { 
  Home as HomeIcon, 
  Sparkles, 
  Check, 
  Star, 
  ArrowRight, 
  ArrowUpRight, 
  Phone, 
  Calendar, 
  ShieldCheck, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight,
  Compass,
  MapPin,
  Clock,
  Building2,
  Award,
  Layers,
  Send,
  Sliders,
  CheckCircle2,
  Quote,
  AlertCircle,
  XCircle,
  Play,
  Video,
  X,
  HelpCircle,
  Plus,
  Minus,
  Globe,
  Hammer,
  UserCheck,
  FileCheck2,
  Clock3,
  BadgeCheck
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: ViewState) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  // Editorial Lookbook Hero State
  const [selectedHeroProject, setSelectedHeroProject] = useState<number>(0);

  const heroProjects = [
    {
      id: 'jubilee-estate',
      title: "The Jubilee Hills Estate",
      subtitle: "8,500 sq ft Independent Villa • Burma Teak & Travertine Courtyard",
      location: "Road No. 36, Jubilee Hills",
      tagline: "Spaces Crafted to be Lived In.",
      quote: "Blending contemporary architectural minimalism with quiet Nizami arched thresholds.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
      stats: { sqft: "8,500 SQ FT", type: "LUXURY VILLA", year: "2025" }
    },
    {
      id: 'kokapet-sky',
      title: "The Kokapet Sky Sanctuary",
      subtitle: "4,200 sq ft Penthouse • Acoustically Tuned Acoustic Paneling",
      location: "Aparna Luxor Park, Kondapur",
      tagline: "Quiet Luxury Above The City.",
      quote: "Organic textures, imported Italian marble, and custom-milled cabinetry from our Kondapur facility.",
      image: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=2000&q=85",
      stats: { sqft: "4,200 SQ FT", type: "PENTHOUSE", year: "2025" }
    },
    {
      id: 'hitec-duplex',
      title: "The Kohinoor Sky Duplex",
      subtitle: "4,100 sq ft Duplex • Bidriware Brass & Pochampally Silk Accents",
      location: "Kohinoor Aurobindo, HITEC City",
      tagline: "Heritage Reimagined For Modernity.",
      quote: "Custom Bidriware brass inlay embedded into dark walnut thresholds with zero-VOC satin finishes.",
      image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=2000&q=85",
      stats: { sqft: "4,100 SQ FT", type: "DUPLEX", year: "2025" }
    }
  ];

  // Process step state (1 to 5)
  const [activeProcessStep, setActiveProcessStep] = useState<number>(1);

  // Portfolio filter tab state
  const [activeProjectFilter, setActiveProjectFilter] = useState<'all' | 'villas' | 'penthouses' | 'fusion'>('all');

  // Mini image carousel state for project cards
  const [projectImageIndexes, setProjectImageIndexes] = useState<{ [key: string]: number }>({
    'project-pramod': 0,
    'project-tanushree': 0,
    'project-spoorthi': 0,
    'project-anil': 0,
  });

  // FAQ open/close state
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  // Video modal state
  const [activeVideoModal, setActiveVideoModal] = useState<{ title: string; client: string; videoUrl: string } | null>(null);

  // Consultation enquiry form state
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Luxury Villa',
    location: 'Jubilee Hills',
    areaSqFt: '5,000 - 8,000 sq ft',
    budgetRange: '₹1 Cr – ₹3 Cr',
    timeline: 'Within 3 Months',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleLinkClick = (e: React.MouseEvent, view: ViewState) => {
    e.preventDefault();
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: '',
        phone: '',
        email: '',
        propertyType: 'Luxury Villa',
        location: 'Jubilee Hills',
        areaSqFt: '5,000 - 8,000 sq ft',
        budgetRange: '₹1 Cr – ₹3 Cr',
        timeline: 'Within 3 Months',
        message: ''
      });
    }, 6000);
  };

  const handleNextCarouselImage = (e: React.MouseEvent, projectId: string, maxImages: number) => {
    e.stopPropagation();
    setProjectImageIndexes((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % maxImages,
    }));
  };

  const handlePrevCarouselImage = (e: React.MouseEvent, projectId: string, maxImages: number) => {
    e.stopPropagation();
    setProjectImageIndexes((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + maxImages) % maxImages,
    }));
  };

  // Featured Projects Data with 3-Image Carousel each
  const featuredProjects = [
    {
      id: 'project-pramod',
      title: "Pramod's Residence",
      category: 'Minimalist Family Villa',
      filterType: 'villas',
      location: 'Jubilee Hills, Hyderabad',
      area: '8,500 sq ft',
      year: '2025',
      images: [
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      ],
      materials: ['Burma Teak', 'Italian Lime Plaster', 'Fluted Glass'],
      quote: 'A study in light wood accents, quiet negative spaces, and hidden custom storage.'
    },
    {
      id: 'project-tanushree',
      title: "Tanushree's Residence",
      category: 'Earthy Wabi-Sabi Penthouse',
      filterType: 'penthouses',
      location: 'Aparna Luxor Park, Kondapur',
      area: '4,200 sq ft',
      year: '2025',
      images: [
        'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80',
      ],
      materials: ['Travertine Stone', 'Tactile Linen', 'Antique Brass'],
      quote: 'Organic textures and warm neutral tones crafting an elevated sky sanctuary.'
    },
    {
      id: 'project-spoorthi',
      title: "Spoorthi's Residence",
      category: 'Transitional Heritage Fusion',
      filterType: 'fusion',
      location: 'Kohinoor Aurobindo, HITEC City',
      area: '4,100 sq ft',
      year: '2025',
      images: [
        'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
      ],
      materials: ['Bidri Metal Inlay', 'Laser Cut Brass Screen', 'Calibrated Quartz'],
      quote: 'Nizami architectural arches paired seamlessly with modern Italian leather.'
    },
    {
      id: 'project-anil',
      title: "Anil's Residence",
      category: 'Modernist Gated Villa',
      filterType: 'villas',
      location: 'Narsingi & Financial District',
      area: '6,200 sq ft',
      year: '2025',
      images: [
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      ],
      materials: ['Anti-scratch PU', 'Satin Vitrified Tile', 'Walnut Millwork'],
      quote: 'Scratch-proof heavy-duty luxury built for multi-generational pet-friendly living.'
    }
  ];

  const filteredProjects = activeProjectFilter === 'all' 
    ? featuredProjects 
    : featuredProjects.filter(p => p.filterType === activeProjectFilter);

  // 4 "Your Concerns" Cards
  const clientConcerns = [
    {
      id: 'concern-villa',
      title: 'Building your dream villa',
      description: 'From bare civil structure to complete turn-key move in. We manage structural modifications, electrical grids, plumbing, HVAC, and custom furniture.',
      tag: 'TURNKEY VILLA ARCHITECTURE',
      targetView: 'premium-interiors' as ViewState,
      icon: Building2
    },
    {
      id: 'concern-nri',
      title: 'NRI? Build your Hyderabad home from abroad',
      description: 'Live video walkthroughs, weekly WhatsApp reporting, digital milestone sign-offs, and a single trusted project lead in Hyderabad.',
      tag: 'REMOTE DESIGN MANAGEMENT',
      targetView: 'contact' as ViewState,
      icon: Globe
    },
    {
      id: 'concern-renovation',
      title: 'Renovating a family home',
      description: 'Modernize layout and lighting while respecting heirloom pieces, memory-rich architecture, and generational space comfort.',
      tag: 'HERITAGE MODERNIZATION',
      targetView: 'modern-interiors' as ViewState,
      icon: Hammer
    },
    {
      id: 'concern-guarantee',
      title: 'Worried about delays and overruns?',
      description: 'Written timeline commitments, fixed itemized quotes down to the rupee, and zero mid-project price escalation surprises.',
      tag: 'FIXED COST & TIMELINE',
      targetView: 'luxury-interiors' as ViewState,
      icon: ShieldCheck
    }
  ];

  // 6 "What You Gain With Us" Promises (Benefit + Never)
  const brandPromises = [
    {
      title: 'One Dedicated Point of Contact',
      benefit: 'Direct access to your assigned senior architectural lead throughout the entire journey.',
      never: 'NEVER passed around between vendor sub-contractors or junior site reps.'
    },
    {
      title: 'Fixed, Itemized Quote',
      benefit: 'Complete line-item clarity detailing every square foot, hardware brand, and finish.',
      never: 'NEVER hidden costs, mid-project surcharges, or surprise final invoices.'
    },
    {
      title: 'Truly Bespoke Design',
      benefit: 'Custom spatial blueprints designed exclusively around your family’s daily rhythm.',
      never: 'NEVER copy-paste catalog templates or cookie-cutter showroom layouts.'
    },
    {
      title: 'We Own Every Risk & Surprise',
      benefit: 'Full accountability for site variations, civil adjustments, and material lead times.',
      never: 'NEVER leave structural hiccups or supplier issues on your shoulders.'
    },
    {
      title: 'Timelines Committed in Writing',
      benefit: 'Legally binding milestone schedule with penalties if we breach handover dates.',
      never: 'NEVER endless delays, vague promises, or trailing finish dates.'
    },
    {
      title: 'Materials Built to Last 10+ Years',
      benefit: 'Burma teak, calibrated quartz, marine plywood, and Blum soft-close fittings.',
      never: 'NEVER short-term cosmetic fixes, cheap board substitutes, or peeling veneers.'
    }
  ];

  // 5 Process Steps
  const processSteps = [
    {
      number: '01',
      title: 'Consultation & Lifestyle Brief',
      subtitle: 'Mapping your daily rhythm & aesthetic vision',
      description: 'We begin with an in-depth dialogue at our Kondapur studio or your residence. We analyze spatial orientation, Vastu alignments, natural lighting, and how your family uses every square foot.',
      deliverables: ['Spatial orientation map', 'Lifestyle & Vastu brief', 'Initial budget outline', 'Material direction moodboard'],
      duration: '7 - 10 Days'
    },
    {
      number: '02',
      title: 'Architectural Concept & Spatial Layout',
      subtitle: 'Designing proportions, circulation & light',
      description: 'Developing 3D photorealistic spatial models, ceiling volumes, and lighting schemas. We present customized layouts that respect Deccan light angles and create effortless flow.',
      deliverables: ['3D photorealistic renderings', 'Acoustic & lighting plans', 'Furniture placement schematics', 'Material sample tray'],
      duration: '2 - 3 Weeks'
    },
    {
      number: '03',
      title: 'Detailed Design Development & Engineering',
      subtitle: 'Precision CAD blueprints & custom millwork',
      description: 'Creating comprehensive technical working drawings for civil modifications, HVAC ducting, smart home grids, and custom cabinetry for our in-house modular manufacturing plant.',
      deliverables: ['Full CAD technical booklet', 'Electrical & plumbing grids', 'Millwork cut-list blueprints', 'Final fixed-quote itemization'],
      duration: '2 Weeks'
    },
    {
      number: '04',
      title: 'Turnkey Execution & Millwork Fabrication',
      subtitle: 'In-house factory precision & site management',
      description: 'Our in-house modular factory precision-engineers your wardrobes and kitchens while our senior site leads supervise civil work, flooring, and electrical installations.',
      deliverables: ['In-house factory assembly', 'Dedicated project manager', 'Weekly digital site reports', 'Milestone quality sign-offs'],
      duration: '6 - 10 Weeks'
    },
    {
      number: '05',
      title: 'Curated Handover & White-Glove Styling',
      subtitle: 'Final art installation, deep cleaning & warranty',
      description: 'We install custom textiles, fine art, and light fixtures, followed by deep white-glove acoustic and surface cleaning before handing over your keys with a 10-year structural warranty.',
      deliverables: ['White-glove deep cleaning', 'Art & textile styling', '10-Year structural warranty', 'Care & maintenance dossier'],
      duration: '1 Week'
    }
  ];

  // Detailed Testimonials with full client name, profession, and neighborhood
  const testimonials = [
    {
      quote: "The Koncept House transformed our Kokapet villa into a timeless sanctuary. The way they integrated subtle Nizami arch motifs with Burma teak millwork is pure art. Zero budget surprises.",
      author: "Vikram & Ananya Reddy",
      title: "Tech Founder & Angel Investor",
      location: "Villa Owner, Jubilee Hills Road No. 36",
      projectSize: "9,200 sq.ft. Independent Villa",
      videoDuration: "1:45",
      videoThumb: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "Being based in Silicon Valley, managing a project in Hyderabad felt daunting. Their weekly digital reporting, single point of contact, and flawless execution made it completely effortless.",
      author: "Dr. Sandeep Rao",
      title: "Senior Director, Silicon Valley Tech",
      location: "NRI Residence Owner, Kokapet",
      projectSize: "7,500 sq.ft. Gated Community Villa",
      videoDuration: "2:10",
      videoThumb: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "Their in-house factory precision is unmatched in Hyderabad. Every wardrobe fit, soft-close runner, and hidden lighting cove was executed with millimeter perfection.",
      author: "Sudheer Varma",
      title: "Executive Vice President, Global Tech",
      location: "Duplex Owner, Kohinoor Aurobindo, HITEC City",
      projectSize: "4,100 sq.ft. Sky Duplex",
      videoDuration: "1:30",
      videoThumb: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80"
    }
  ];

  // FAQs
  const faqItems = [
    {
      id: 'faq-1',
      question: 'What budget ranges do you work with for residential projects?',
      answer: 'We craft turnkey interiors across three primary tiers: Premium (₹50 Lakhs – ₹1 Crore), Luxury (₹1 Crore – ₹3 Crores), and Bespoke Estates (₹3 Crores+). Each tier includes complete fixed-price transparency with no hidden costs, covering civil adjustments, false ceiling, lighting, modular cabinetry, and imported furniture.'
    },
    {
      id: 'faq-2',
      question: 'How long does a typical turnkey interior project take from design to handover?',
      answer: 'For 3BHK/4BHK luxury apartments, complete execution takes 45 to 60 days. Multi-story gated villas (6,000 to 12,000 sq ft) take 90 to 120 days. Timelines are committed in writing with milestone sign-offs supported by our in-house Kondapur manufacturing factory.'
    },
    {
      id: 'faq-3',
      question: 'Are your interior layouts 100% Vastu compliant?',
      answer: 'Yes. Our lead architects work closely with accredited Vastu consultants to align main entrance thresholds, Pooja altars, kitchen hob orientations, and master bedroom placements without compromising contemporary aesthetics or spatial flow.'
    },
    {
      id: 'faq-4',
      question: 'Do you handle civil work, plumbing, electrical, and structural alterations?',
      answer: 'Yes, absolutely. As a complete turnkey interior architecture consultancy, we handle civil wall removals, electrical rewiring, plumbing re-routing, HVAC ducting, and false ceiling structural framing. You do not need to coordinate with external civil contractors.'
    },
    {
      id: 'faq-5',
      question: 'How does the first consultation work at your Kondapur studio?',
      answer: 'During your 60-minute studio visit, we review your floor plans, analyze your family lifestyle brief, and showcase physical material trays (travertine stone, Burma teak veneers, Bidri metal inlays, and Belgian linens). We then present a preliminary scope outline and fixed budget roadmap.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#1C1B19] font-sans selection:bg-[#A8875A] selection:text-white">
      
      {/* ==========================================
          1. EDITORIAL LUXURY HERO CANVAS
          ========================================== */}
      <section id="hero-section" className="relative w-full min-h-[92vh] bg-[#F5E1DC] text-[#241F16] flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28 py-24 sm:py-32 md:py-40 lg:py-48 overflow-hidden select-none">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
              },
            },
          }}
          className="mx-auto w-full max-w-7xl"
        >
          {/* Small Uppercase Label Above Headline */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 0.75,
                y: 0,
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="mb-8 sm:mb-12"
          >
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#241F16] uppercase block">
              INTERIOR DESIGN STUDIO · HYDERABAD
            </span>
          </motion.div>

          {/* Bold Geometric Sans-Serif Headline with Deliberate Line Breaks */}
          <motion.h1
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.14 },
              },
            }}
            className="font-sans font-black tracking-tight text-[#241F16] text-[56px] sm:text-[80px] md:text-[110px] lg:text-[130px] xl:text-[140px] leading-[0.88] uppercase"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="block"
            >
              Your space.
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="block"
            >
              Our vision.
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="block"
            >
              Distinctly you.
            </motion.span>
          </motion.h1>

          {/* Refined Supporting Text */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: {
                opacity: 0.85,
                y: 0,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="font-sans text-base sm:text-xl font-light text-[#241F16] max-w-xl leading-relaxed mt-8 sm:mt-12"
          >
            Thoughtfully crafted homes and commercial spaces, shaped around the way you live.
          </motion.p>

          {/* Minimal Text-Style CTA */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="mt-8 sm:mt-10"
          >
            <a
              href="/projects/"
              onClick={(e) => handleLinkClick(e, 'projects')}
              className="inline-flex items-center gap-2 font-sans text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#241F16] border-b-2 border-[#241F16] pb-1 hover:opacity-60 transition-opacity"
            >
              <span>Explore our spaces ↗</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ==========================================
          1.5 EDITORIAL FEATURED INTERIOR & FLOATING QUOTE
          ========================================== */}
      <section className="relative w-full bg-[#241F16] text-white overflow-hidden py-12 md:py-20 px-4 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl relative">
          
          {/* Main Luxury Interior Architectural Image */}
          <div className="relative h-[65vh] min-h-[480px] max-h-[750px] w-full overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90"
              alt="Jubilee Hills Luxury Residence Interior by The Koncept House"
              className="h-full w-full object-cover object-center filter brightness-[0.92] contrast-[1.05] transition-transform duration-1000 hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
            {/* Soft Ambient Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#241F16]/80 via-transparent to-[#241F16]/30"></div>

            {/* Architectural Location Tag */}
            <div className="absolute top-6 left-6 sm:top-10 sm:left-10 bg-[#241F16]/85 backdrop-blur-md px-4 py-2 border border-white/10 text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#C5A880] uppercase">
              JUBILEE HILLS ESTATE · LIVING ATELIER
            </div>

            {/* Floating Editorial Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-10 sm:bottom-12 sm:max-w-xl bg-[#241F16]/90 backdrop-blur-xl border border-[#C5A880]/30 p-6 sm:p-8 md:p-10 shadow-2xl space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#C5A880]"></span>
                <span className="font-mono text-[10px] tracking-[0.25em] text-[#C5A880] uppercase font-bold">
                  ATELIER PHILOSOPHY
                </span>
              </div>

              <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl font-light italic leading-snug text-[#F5E1DC]">
                “A home should not be a museum of possessions, but a sanctuary of quiet light, tactile textures, and effortless human flow.”
              </blockquote>

              <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs font-sans text-[#C5A880]/80">
                <span className="font-medium tracking-wider">THE KONCEPT HOUSE</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#F5E1DC]/60">HYDERABAD · 2026</span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ==========================================
          2. BRAND PHILOSOPHY & HERITAGE CRAFT
          ========================================== */}
      <section id="brand-philosophy" className="relative py-24 sm:py-32 bg-[#FAF8F5] text-[#1C1B19]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Statement */}
            <div className="lg:col-span-8 space-y-6">
              <span className="font-mono text-xs tracking-[0.25em] text-[#A8875A] uppercase font-bold block">
                OUR DESIGN PHILOSOPHY
              </span>
              
              <h2 className="font-serif text-3xl sm:text-5xl font-light leading-[1.2] text-[#1C1B19]">
                "Modern luxury is not loudness. It is the weight of solid Burma teak, the calm temperature of hand-burnished travertine, and light filtered through quiet geometric proportions."
              </h2>

              <p className="text-base sm:text-lg text-[#1C1B19]/70 font-light leading-relaxed max-w-2xl">
                Founded in 2019 in Kondapur, <strong className="text-[#1C1B19] font-medium">The Koncept House</strong> bridges contemporary architectural minimalism with subtle references to Hyderabadi heritage — arched silhouettes, Bidriware metallic inlay, and Pochampally ikat textiles woven with quiet restraint.
              </p>

              <div className="pt-4 flex items-center gap-6">
                <div className="h-px w-16 bg-[#A8875A]"></div>
                <span className="font-serif italic text-lg text-[#A8875A]">Spaces Crafted to be Lived In</span>
              </div>
            </div>

            {/* Right Heritage Craft Grid */}
            <div className="lg:col-span-4 bg-[#F5F1EA] p-8 border border-[#E8DFD3] space-y-6">
              <h3 className="font-serif text-xl font-medium text-[#1C1B19] border-b border-[#E8DFD3] pb-3">
                Signature Deccan Elements
              </h3>

              <ul className="space-y-4 text-xs font-sans tracking-wide">
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A8875A] mt-1.5 shrink-0"></span>
                  <div>
                    <strong className="block text-[#1C1B19]">Arched Spatial Thresholds</strong>
                    <span className="text-[#1C1B19]/60">Softened doorways & alcoves echoing Nizami palace architecture.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A8875A] mt-1.5 shrink-0"></span>
                  <div>
                    <strong className="block text-[#1C1B19]">Bidriware Metallic Inlay</strong>
                    <span className="text-[#1C1B19]/60">Hand-finished brass and silver accents embedded in dark walnut.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A8875A] mt-1.5 shrink-0"></span>
                  <div>
                    <strong className="block text-[#1C1B19]">Custom Millwork & In-House Factory</strong>
                    <span className="text-[#1C1B19]/60">Precision cabinetry manufactured locally in Kondapur.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. YOUR CONCERNS SECTION
          ========================================== */}
      <section id="your-concerns" className="py-24 bg-[#1C1B19] text-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="font-mono text-xs tracking-[0.25em] text-[#C5A880] uppercase font-bold block">
              ADDRESSING YOUR PRIORITIES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white">
              We Understand What Keeps You Up At Night.
            </h2>
            <p className="text-sm text-[#E8DFD3]/70 font-light leading-relaxed">
              Every home project is a significant personal investment. Here is how we eliminate uncertainty across every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clientConcerns.map((concern) => {
              const IconComp = concern.icon;
              return (
                <div
                  key={concern.id}
                  onClick={(e) => handleLinkClick(e, concern.targetView)}
                  className="group cursor-pointer bg-[#2A231D] p-8 border border-[#A8875A]/30 transition-all duration-300 hover:border-[#C5A880] hover:bg-[#1C1B19] flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] tracking-[0.2em] text-[#C5A880] font-semibold uppercase bg-[#A8875A]/20 px-3 py-1 border border-[#A8875A]/30">
                        {concern.tag}
                      </span>
                      <IconComp className="h-6 w-6 text-[#C5A880] group-hover:scale-110 transition-transform" />
                    </div>

                    <h3 className="font-serif text-2xl font-light text-white group-hover:text-[#C5A880] transition-colors pt-2">
                      "{concern.title}"
                    </h3>

                    <p className="text-xs text-[#E8DFD3]/80 font-light leading-relaxed">
                      {concern.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs font-bold tracking-widest text-[#C5A880] uppercase group-hover:text-white transition-colors">
                    <span>EXPLORE SOLUTIONS</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          4. WHAT YOU GAIN WITH US (6 PROMISES - INNOVATIVE COMMITMENT MATRIX)
          ========================================== */}
      <section id="what-you-gain" className="py-24 sm:py-32 bg-[#FAF8F5] text-[#1C1B19] relative overflow-hidden">
        
        {/* Subtle Background Architectural Grid Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1C1B19_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          
          {/* Section Header with Animated Status Pulse */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E8DFD3]">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#F5F1EA] border border-[#E8DFD3] rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A8875A] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A8875A]"></span>
                </span>
                <span className="font-mono text-[10px] tracking-[0.25em] text-[#A8875A] uppercase font-bold">
                  OUR UNCOMPROMISING COMMITMENT
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1C1B19] tracking-tight">
                What You Gain With Us
              </h2>

              <p className="text-sm sm:text-base text-[#1C1B19]/75 font-light leading-relaxed max-w-xl">
                European consultancy standards applied to luxury Hyderabadi residences. Six legally bound transparent guarantees.
              </p>
            </div>

            {/* Interactive Quality Assurance Counter Badge */}
            <div className="flex items-center gap-4 bg-[#F5F1EA] p-4 border border-[#E8DFD3] shadow-sm shrink-0">
              <div className="flex h-12 w-12 items-center justify-center bg-[#1C1B19] text-[#C5A880]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="space-y-0.5">
                <span className="font-mono text-xs font-bold text-[#1C1B19] block tracking-wider">100% FIXED-FEE PLEDGE</span>
                <span className="text-[11px] font-mono text-[#A8875A] uppercase block">HYDERABAD ATELIER GUARANTEE</span>
              </div>
            </div>
          </div>

          {/* Staggered Innovative Interactive Promise Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {brandPromises.map((promise, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.97 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
                className="group relative bg-[#F5F1EA] border border-[#E8DFD3] p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#A8875A] hover:shadow-xl hover:bg-white overflow-hidden"
              >
                {/* Top Animated Gold Scanner Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#E8DFD3] group-hover:bg-[#A8875A] transition-colors duration-300">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full bg-[#C5A880] origin-left"
                  />
                </div>

                {/* Card Main Body */}
                <div className="space-y-6 relative z-10">
                  
                  {/* Top Row: Index Badge & Promise Title */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1C1B19] text-[#C5A880] font-mono text-xs font-bold group-hover:bg-[#A8875A] group-hover:text-white transition-colors duration-300">
                          0{idx + 1}
                        </span>
                        <span className="font-mono text-[9px] tracking-[0.2em] text-[#A8875A] uppercase font-bold">
                          PROMISE {idx + 1} OF 6
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1C1B19] group-hover:text-[#A8875A] transition-colors duration-300">
                        {promise.title}
                      </h3>
                    </div>

                    <CheckCircle2 className="h-5 w-5 text-[#A8875A] shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Benefit Statement */}
                  <div className="p-4 bg-white/70 group-hover:bg-[#FAF8F5] border border-[#E8DFD3]/60 transition-colors duration-300">
                    <span className="font-mono text-[9px] text-[#A8875A] uppercase tracking-widest font-bold block mb-1">
                      WHAT YOU EXPERIENCE:
                    </span>
                    <p className="text-xs sm:text-sm text-[#1C1B19]/85 font-normal leading-relaxed">
                      {promise.benefit}
                    </p>
                  </div>
                </div>

                {/* Bottom Sealed "NEVER" Guarantee Box */}
                <div className="mt-6 pt-4 border-t border-[#E8DFD3] relative z-10">
                  <div className="bg-[#FAF8F5] group-hover:bg-amber-50/70 p-3.5 border-l-2 border-amber-600 transition-colors duration-300 flex items-start gap-3">
                    <XCircle className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <span className="font-mono text-[9px] font-bold text-amber-900 tracking-wider uppercase block">
                        OUR STRICT POLICY:
                      </span>
                      <p className="text-[11px] font-mono font-semibold text-amber-950 leading-tight">
                        {promise.never}
                      </p>
                    </div>
                  </div>

                  {/* Animated Sealed Verification Label on Hover */}
                  <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-[#A8875A] pt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-1 font-bold">
                      <ShieldCheck className="h-3 w-3" /> VERIFIED GUARANTEE
                    </span>
                    <span className="tracking-widest">ATELIER SEAL ↗</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ==========================================
          5. FEATURED PROJECTS (3-IMAGE MINI CAROUSEL)
          ========================================== */}
      <section id="featured-projects" className="py-24 bg-[#F5F1EA] border-y border-[#E8DFD3]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Section Header & Filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-2">
              <span className="font-mono text-xs tracking-[0.25em] text-[#A8875A] uppercase font-bold block">
                SELECTED PORTFOLIO
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1C1B19]">
                Featured Residences
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 border border-[#E8DFD3] bg-[#FAF8F5] p-1.5">
              {[
                { id: 'all', label: 'ALL RESIDENCES' },
                { id: 'villas', label: 'LUXURY VILLAS' },
                { id: 'penthouses', label: 'PENTHOUSES' },
                { id: 'fusion', label: 'HERITAGE FUSION' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveProjectFilter(tab.id as any)}
                  className={`px-4 py-2 font-sans text-[10px] font-bold tracking-[0.15em] uppercase transition-all ${
                    activeProjectFilter === tab.id
                      ? 'bg-[#1C1B19] text-[#FAF8F5]'
                      : 'text-[#1C1B19]/70 hover:text-[#1C1B19] hover:bg-[#F5F1EA]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Asymmetric Grid with 3-Image Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredProjects.map((project, idx) => {
              const currentImgIdx = projectImageIndexes[project.id] || 0;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  className={`group cursor-pointer ${idx % 2 === 1 ? 'md:mt-12' : ''}`}
                  onClick={() => onNavigate(project.id as ViewState)}
                >
                  {/* Image Carousel Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1C1B19] mb-6">
                    <img
                      src={project.images[currentImgIdx]}
                      alt={`${project.title} slide ${currentImgIdx + 1}`}
                      className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Floating Specs Pill */}
                    <div className="absolute top-4 left-4 z-10 bg-[#1C1B19]/90 px-3 py-1.5 backdrop-blur-md border border-[#A8875A]/40">
                      <span className="font-mono text-[9px] tracking-widest text-[#C5A880] uppercase font-semibold">
                        {project.area} • {project.year}
                      </span>
                    </div>

                    {/* Next / Prev Carousel Controls */}
                    <button
                      onClick={(e) => handlePrevCarouselImage(e, project.id, project.images.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 hover:bg-[#A8875A] transition-all"
                      aria-label="Previous Image"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>

                    <button
                      onClick={(e) => handleNextCarouselImage(e, project.id, project.images.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 hover:bg-[#A8875A] transition-all"
                      aria-label="Next Image"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>

                    {/* Carousel Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-black/50 px-3 py-1 rounded-full backdrop-blur-xs">
                      {project.images.map((_, dotIdx) => (
                        <span
                          key={dotIdx}
                          className={`h-1.5 rounded-full transition-all ${
                            currentImgIdx === dotIdx ? 'w-5 bg-[#C5A880]' : 'w-1.5 bg-white/50'
                          }`}
                        ></span>
                      ))}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-[#A8875A] uppercase font-semibold">
                        {project.location}
                      </span>
                      <span className="text-xs text-[#1C1B19]/50 font-mono">{project.category}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-normal text-[#1C1B19] group-hover:text-[#A8875A] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#1C1B19]/70 font-light leading-relaxed">
                      "{project.quote}"
                    </p>

                    {/* Material Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.materials.map((mat, mIdx) => (
                        <span key={mIdx} className="bg-[#FAF8F5] border border-[#E8DFD3] px-2.5 py-1 font-mono text-[9px] text-[#1C1B19]/70">
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* View All Projects Button */}
          <div className="text-center pt-16">
            <a
              href="/projects/"
              onClick={(e) => handleLinkClick(e, 'projects')}
              className="inline-flex items-center gap-3 border-b-2 border-[#1C1B19] pb-1 font-sans text-xs font-bold tracking-[0.2em] uppercase text-[#1C1B19] transition-all hover:border-[#A8875A] hover:text-[#A8875A]"
            >
              <span>EXPLORE ALL RESIDENTIAL CASE STUDIES</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

        </div>
      </section>

      {/* ==========================================
          6. SERVICES OVERVIEW
          ========================================== */}
      <section id="services-overview" className="py-24 bg-[#FAF8F5]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="font-mono text-xs tracking-[0.25em] text-[#A8875A] uppercase font-bold block">
              OUR SCOPE & CAPABILITIES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1C1B19]">
              Turnkey Architectural Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: '01',
                title: 'Luxury Villa Interiors',
                desc: 'End-to-end interior architecture for multi-story gated villas in Jubilee Hills, Kokapet, and Narsingi. Structural layout customization, ceiling volumes, and climate-responsive cooling.',
                tags: ['Villas', 'Penthouses', 'Farmhouses']
              },
              {
                num: '02',
                title: 'In-House Modular Factory',
                desc: 'State-of-the-art manufacturing facility in Kondapur. Precision-milled Burma teak wardrobes, German-engineered hardware, and zero-wobble kitchen carcasses.',
                tags: ['Burma Teak', 'Italian Acrylic', 'German Fittings']
              },
              {
                num: '03',
                title: 'Heritage Modernization',
                desc: 'Infusing contemporary luxury residences with subtle Deccan craft: arched thresholds, brass inlay, and hand-woven silk ikat textures crafted with modern restraint.',
                tags: ['Nizami Arches', 'Bidri Inlay', 'Pochampally Ikat']
              },
              {
                num: '04',
                title: 'Curation & Styling',
                desc: 'Art advisory, custom acoustic wall paneling, imported Italian furniture curation, and layered lighting schemes created specifically for high-ceiling living rooms.',
                tags: ['Art Curation', 'Acoustics', 'Italian Furniture']
              }
            ].map((srv) => (
              <div 
                key={srv.num}
                className="bg-[#F5F1EA] p-8 border border-[#E8DFD3] flex flex-col justify-between hover:border-[#A8875A] transition-colors group"
              >
                <div className="space-y-4">
                  <span className="font-mono text-xs text-[#A8875A] font-bold tracking-widest">{srv.num}</span>
                  <h3 className="font-serif text-2xl font-normal text-[#1C1B19] group-hover:text-[#A8875A] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#1C1B19]/70 font-light leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E8DFD3] mt-6 flex flex-wrap gap-1.5">
                  {srv.tags.map((t, i) => (
                    <span key={i} className="text-[9px] font-mono text-[#1C1B19]/60 uppercase bg-[#FAF8F5] px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          7. OUR PROCESS IN 5 ARCHITECTURAL STEPS
          ========================================== */}
      <section id="our-process" className="py-24 bg-[#2A231D] text-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <BespokeOpArtPattern />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="font-mono text-xs tracking-[0.25em] text-[#C5A880] uppercase font-bold block">
              HOW WE EXECUTE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white">
              Our 5-Step Architectural Process
            </h2>
            <p className="text-sm text-[#E8DFD3]/80 font-light">
              From initial Vastu analysis to white-glove handover, every milestone is managed through a single point of contact with complete cost transparency.
            </p>
          </div>

          {/* Interactive Steps Selector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Step Navigation Tabs */}
            <div className="lg:col-span-5 space-y-3">
              {processSteps.map((step, idx) => {
                const isCurrent = activeProcessStep === idx + 1;
                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveProcessStep(idx + 1)}
                    className={`w-full text-left p-5 transition-all flex items-center justify-between border ${
                      isCurrent
                        ? 'bg-[#1C1B19] border-[#A8875A] text-white shadow-xl translate-x-1'
                        : 'bg-[#1C1B19]/40 border-white/10 text-white/70 hover:bg-[#1C1B19]/80 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-sm font-bold ${isCurrent ? 'text-[#C5A880]' : 'text-white/40'}`}>
                        {step.number}
                      </span>
                      <div>
                        <h4 className="font-serif text-lg font-normal leading-tight">{step.title}</h4>
                        <span className="text-[10px] font-mono text-[#E8DFD3]/60 block mt-0.5">{step.duration}</span>
                      </div>
                    </div>

                    <ChevronDown className={`h-4 w-4 text-[#C5A880] transition-transform ${isCurrent ? '-rotate-90' : ''}`} />
                  </button>
                );
              })}
            </div>

            {/* Step Detailed Panel */}
            <div className="lg:col-span-7 bg-[#1C1B19] p-8 border border-[#A8875A]/40 relative min-h-[420px] flex flex-col justify-between">
              {(() => {
                const current = processSteps[activeProcessStep - 1];
                return (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.number}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <div>
                          <span className="font-mono text-xs text-[#C5A880] tracking-widest font-bold">
                            STEP {current.number} OF 05
                          </span>
                          <h3 className="font-serif text-2xl sm:text-3xl font-light text-white mt-1">
                            {current.title}
                          </h3>
                        </div>
                        <span className="bg-[#A8875A]/20 text-[#C5A880] font-mono text-xs px-3 py-1 border border-[#A8875A]/40">
                          {current.duration}
                        </span>
                      </div>

                      <p className="text-sm text-[#E8DFD3]/90 font-light leading-relaxed">
                        {current.description}
                      </p>

                      <div className="pt-4 border-t border-white/10">
                        <span className="font-mono text-[10px] text-[#C5A880] uppercase tracking-widest block mb-3 font-semibold">
                          KEY DELIVERABLES:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {current.deliverables.map((item, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-2 text-xs text-white/80">
                              <CheckCircle2 className="h-4 w-4 text-[#A8875A] shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                );
              })()}

              <div className="pt-8 flex items-center justify-between border-t border-white/10 mt-6">
                <button
                  disabled={activeProcessStep === 1}
                  onClick={() => setActiveProcessStep(prev => Math.max(1, prev - 1))}
                  className="text-xs font-mono tracking-widest text-[#E8DFD3]/60 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                >
                  ← PREVIOUS STEP
                </button>
                
                <button
                  disabled={activeProcessStep === 5}
                  onClick={() => setActiveProcessStep(prev => Math.min(5, prev + 1))}
                  className="text-xs font-mono tracking-widest text-[#C5A880] hover:text-white disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1"
                >
                  <span>NEXT STEP</span> →
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          8. CLIENT TESTIMONIALS & VIDEO TESTIMONIALS
          ========================================== */}
      <section id="testimonials" className="py-24 bg-[#FAF8F5]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-mono text-xs tracking-[0.25em] text-[#A8875A] uppercase font-bold block">
              CLIENT VOICES & VIDEO WALKTHROUGHS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1C1B19]">
              Verified Homeowner Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="bg-[#F5F1EA] border border-[#E8DFD3] relative flex flex-col justify-between hover:border-[#A8875A] transition-colors"
              >
                {/* Video Preview Thumbnail Header */}
                <div 
                  onClick={() => setActiveVideoModal({ title: t.projectSize, client: t.author, videoUrl: t.videoThumb })}
                  className="relative aspect-video w-full overflow-hidden bg-black cursor-pointer group"
                >
                  <img
                    src={t.videoThumb}
                    alt={t.author}
                    className="h-full w-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#A8875A] text-white shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="h-5 w-5 fill-current ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/80 px-2.5 py-1 text-[9px] font-mono text-[#C5A880] flex items-center gap-1">
                    <Video className="h-3 w-3" />
                    <span>WATCH VIDEO ({t.videoDuration})</span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <Quote className="h-6 w-6 text-[#A8875A]/40 mb-3" />
                    <p className="font-serif italic text-sm sm:text-base text-[#1C1B19]/90 font-normal leading-relaxed mb-6">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E8DFD3] space-y-1">
                    <h4 className="font-sans font-bold text-sm text-[#1C1B19]">{t.author}</h4>
                    <p className="text-xs text-[#A8875A] font-mono">{t.title}</p>
                    <span className="text-[10px] text-[#1C1B19]/60 font-semibold block">{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          9. HOMEPAGE FAQ SECTION
          ========================================== */}
      <section id="homepage-faq" className="py-24 bg-[#F5F1EA] border-y border-[#E8DFD3]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="font-mono text-xs tracking-[0.25em] text-[#A8875A] uppercase font-bold block">
              TRANSPARENCY & CLARITY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1C1B19]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-[#1C1B19]/60 font-mono">
              Everything you need to know about budgets, timelines, civil scope, and Vastu compliance.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#FAF8F5] border border-[#E8DFD3] transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4"
                  >
                    <span className="font-serif text-lg sm:text-xl font-normal text-[#1C1B19]">
                      {faq.question}
                    </span>
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E8DFD3]/60 text-[#1C1B19]">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-[#E8DFD3]/60"
                      >
                        <p className="p-6 text-xs sm:text-sm text-[#1C1B19]/80 font-light leading-relaxed bg-[#F5F1EA]/50">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          9.5 HYDERABAD LOCAL SEO & SEM DESTINATION MATRIX
          ========================================== */}
      <section id="hyderabad-local-seo" className="py-24 bg-[#F5F1EA] border-t border-[#E8DFD3]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E8DFD3]">
            <div className="space-y-3 max-w-2xl">
              <span className="font-mono text-xs tracking-[0.25em] text-[#A8875A] uppercase font-bold block">
                HYDERABAD ATELIER COVERAGE
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1C1B19]">
                Designing Luxury Residences Across Hyderabad
              </h2>
              <p className="text-sm text-[#1C1B19]/75 font-light leading-relaxed">
                From Jubilee Hills independent estates to Kokapet gated villas & Financial District penthouses, we provide turnkey interior architecture tailored to Hyderabad's premier addresses.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-[#FAF8F5] p-3.5 border border-[#E8DFD3] shrink-0">
              <MapPin className="h-5 w-5 text-[#A8875A]" />
              <div className="text-left">
                <span className="font-mono text-[10px] font-bold text-[#1C1B19] block uppercase">SERVICING ALL PRIME ZONES</span>
                <span className="text-[10px] font-mono text-[#A8875A]">100% IN-HOUSE FACTORY EXECUTION</span>
              </div>
            </div>
          </div>

          {/* 4 Prime Location Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                neighborhood: 'Jubilee Hills & Banjara Hills',
                focus: 'Independent Villas & Heritage Estates',
                projects: 'Road No. 36, Film Nagar, MLA Colony',
                specs: 'Burma Teak Millwork · Italian Marble · Private Elevators',
                tag: 'ULTRA-LUXURY ESTATES'
              },
              {
                neighborhood: 'Kokapet & Narsingi',
                focus: 'Gated Luxury Villas & Sky Duplexes',
                projects: 'My Home Bhooja, Jayabheri, Prestige City',
                specs: 'Double-Height Ceilings · Smart Automation · Acoustic Panels',
                tag: 'GATED VILLA COMMUNITIES'
              },
              {
                neighborhood: 'Financial District & Gachibowli',
                focus: 'Executive Penthouses & CXO Ateliers',
                projects: 'Nanakramguda, Waverock Hub, Lansum Greens',
                specs: 'Minimalist Layouts · Hidden Kitchens · Motorized Louvers',
                tag: 'SKY PENTHOUSES'
              },
              {
                neighborhood: 'Kondapur & Hitec City',
                focus: 'Turnkey Residences & Experience Center',
                projects: 'Opp. Sumadhura Horizon, Masjidbanda',
                specs: 'In-House CNC Factory · 45-Day Delivery · 10-Yr Warranty',
                tag: 'EXPERIENCE STUDIO HUB'
              }
            ].map((loc, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] p-6 border border-[#E8DFD3] flex flex-col justify-between hover:border-[#A8875A] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-widest text-[#A8875A] font-bold uppercase bg-[#F5F1EA] px-2.5 py-1 border border-[#E8DFD3]">
                      {loc.tag}
                    </span>
                    <span className="font-mono text-xs text-[#1C1B19]/40 font-bold">0{idx + 1}</span>
                  </div>

                  <h3 className="font-serif text-xl font-normal text-[#1C1B19] group-hover:text-[#A8875A] transition-colors">
                    {loc.neighborhood}
                  </h3>

                  <p className="text-xs text-[#1C1B19]/80 font-medium">
                    {loc.focus}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-[#E8DFD3]/60 text-[11px] font-mono text-[#1C1B19]/70">
                    <div className="flex items-center gap-1.5 text-[#A8875A] font-bold">
                      <Compass className="h-3 w-3" />
                      <span>{loc.projects}</span>
                    </div>
                    <p className="text-[10px] text-[#1C1B19]/60 leading-tight">
                      {loc.specs}
                    </p>
                  </div>
                </div>

                <a
                  href="/contact/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="mt-6 pt-3 border-t border-[#E8DFD3] flex items-center justify-between text-[10px] font-mono font-bold text-[#1C1B19] group-hover:text-[#A8875A]"
                >
                  <span>BOOK SITE VISIT IN THIS ZONE</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>

          {/* Local SEM Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#1C1B19] text-white p-8 sm:p-10 border border-[#A8875A]/40">
            <div className="space-y-2 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
              <span className="font-mono text-[10px] tracking-widest text-[#C5A880] uppercase font-bold block">
                KONDAPUR FACTORY MANUFACTURED
              </span>
              <h4 className="font-serif text-xl font-light text-white">Direct German CNC Precision</h4>
              <p className="text-xs text-[#E8DFD3]/70 font-light leading-relaxed">
                Zero reliance on local carpenter delays. All wardrobes and kitchens are pre-engineered in our Kondapur modular facility with 1mm edge banding.
              </p>
            </div>

            <div className="space-y-2 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
              <span className="font-mono text-[10px] tracking-widest text-[#C5A880] uppercase font-bold block">
                100% DECCAN VASTU INTEGRATION
              </span>
              <h4 className="font-serif text-xl font-light text-white">Certified Vastu Harmony</h4>
              <p className="text-xs text-[#E8DFD3]/70 font-light leading-relaxed">
                Full alignment of North-East entrance thresholds, South-West master suites, and Agni-mula kitchen layouts combined seamlessly with modern aesthetics.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-[10px] tracking-widest text-[#C5A880] uppercase font-bold block">
                OVERSEAS & NRI CONCIERGE
              </span>
              <h4 className="font-serif text-xl font-light text-white">Build From Anywhere</h4>
              <p className="text-xs text-[#E8DFD3]/70 font-light leading-relaxed">
                US, UK, and Gulf NRI families receive weekly 4K drone & 360° video site walkthroughs with a single point of senior architectural contact.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          10. PRESS & RECOGNITION ROW
          ========================================== */}
      <section id="press-row" className="py-12 bg-[#FAF8F5]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#1C1B19]/50 uppercase block text-center mb-8 font-semibold">
            FEATURED & RECOGNIZED IN LEADING DESIGN PUBLICATIONS
          </span>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
            <span className="font-serif text-xl font-bold tracking-widest text-[#1C1B19]">ARCHITECTURAL DIGEST INDIA</span>
            <span className="font-serif text-xl font-semibold tracking-wider text-[#1C1B19]">ELLE DECOR INDIA</span>
            <span className="font-serif text-xl font-medium tracking-tight text-[#1C1B19]">TRENDS LUXURY</span>
            <span className="font-serif text-xl font-bold italic text-[#1C1B19]">VOGUE LIVING</span>
            <span className="font-mono text-sm tracking-widest font-bold text-[#1C1B19]">DECCAN CHRONICLE LUXE</span>
          </div>
        </div>
      </section>

      {/* ==========================================
          11. CONSULTATION BOOKING & ENQUIRY FORM
          ========================================== */}
      <section id="consultation-booking" className="py-24 bg-[#1C1B19] text-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Info & Contact Studio */}
            <div className="lg:col-span-5 space-y-8">
              <span className="font-mono text-xs tracking-[0.25em] text-[#C5A880] uppercase font-bold block">
                BEGIN YOUR PROJECT
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
                Schedule a Studio Consultation.
              </h2>
              <p className="text-sm text-[#E8DFD3]/80 font-light leading-relaxed">
                Whether you are building a new 10,000 sq ft villa in Jubilee Hills or acquiring a sky penthouse in Kokapet, our design directors will review your floor plans and present bespoke material directions.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-[#C5A880] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-mono text-xs text-[#C5A880] uppercase font-bold tracking-wider">KONDAPUR EXPERIENCE STUDIO</h4>
                    <p className="text-xs text-[#E8DFD3]/70 leading-relaxed mt-1">
                      4th Floor, Sadanand Yadav's Buildings,<br />
                      Opp. Sumadhura Horizon, Masjidbanda, Kondapur,<br />
                      Hyderabad, Telangana - 500084
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-[#C5A880] shrink-0" />
                  <div>
                    <h4 className="font-mono text-xs text-[#C5A880] uppercase font-bold tracking-wider">DIRECT DESK</h4>
                    <a href="tel:+919888192345" className="text-xs text-[#E8DFD3]/90 hover:text-[#C5A880] transition-colors">
                      +91 98881 92345
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-[#C5A880] shrink-0" />
                  <div>
                    <h4 className="font-mono text-xs text-[#C5A880] uppercase font-bold tracking-wider">STUDIO HOURS</h4>
                    <p className="text-xs text-[#E8DFD3]/70">Monday – Saturday: 10:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="lg:col-span-7 bg-[#2A231D] p-8 sm:p-10 border border-[#A8875A]/40 relative">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16 space-y-4">
                  <CheckCircle2 className="h-16 w-16 text-[#C5A880] animate-bounce" />
                  <h3 className="font-serif text-3xl font-normal text-white">Consultation Requested</h3>
                  <p className="text-xs text-[#E8DFD3]/80 max-w-md leading-relaxed">
                    Thank you. Our Senior Creative Lead will contact you within 2 business hours to confirm your private studio appointment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <h3 className="font-serif text-2xl font-light text-white">Private Project Enquiry</h3>
                    <p className="text-xs text-[#E8DFD3]/60 font-mono mt-1">
                      Complete this brief to schedule your consultation with our lead architectural team.
                    </p>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-[10px] tracking-widest text-[#C5A880] uppercase mb-2 font-semibold">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Vikram Reddy"
                        className="w-full bg-[#1C1B19] border border-white/20 px-4 py-3 text-xs text-white placeholder-white/30 focus:border-[#C5A880] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] tracking-widest text-[#C5A880] uppercase mb-2 font-semibold">
                        PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#1C1B19] border border-white/20 px-4 py-3 text-xs text-white placeholder-white/30 focus:border-[#C5A880] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Property Type & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-[10px] tracking-widest text-[#C5A880] uppercase mb-2 font-semibold">
                        PROPERTY TYPE
                      </label>
                      <select
                        value={formState.propertyType}
                        onChange={(e) => setFormState({ ...formState, propertyType: e.target.value })}
                        className="w-full bg-[#1C1B19] border border-white/20 px-4 py-3 text-xs text-white focus:border-[#C5A880] focus:outline-none"
                      >
                        <option value="Luxury Villa">Gated Luxury Villa</option>
                        <option value="Sky Penthouse">Sky Penthouse / Duplex</option>
                        <option value="4BHK Premium Flat">4BHK Premium Residence</option>
                        <option value="Farmhouse">Private Farmhouse / Estate</option>
                        <option value="Commercial">Commercial / Executive Workspace</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] tracking-widest text-[#C5A880] uppercase mb-2 font-semibold">
                        LOCATION IN HYDERABAD
                      </label>
                      <select
                        value={formState.location}
                        onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                        className="w-full bg-[#1C1B19] border border-white/20 px-4 py-3 text-xs text-white focus:border-[#C5A880] focus:outline-none"
                      >
                        <option value="Jubilee Hills">Jubilee Hills</option>
                        <option value="Banjara Hills">Banjara Hills</option>
                        <option value="Kokapet">Kokapet</option>
                        <option value="Gachibowli">Gachibowli</option>
                        <option value="Financial District">Financial District</option>
                        <option value="Kondapur">Kondapur / HITEC City</option>
                        <option value="Narsingi">Narsingi / Gandipet</option>
                        <option value="NRI External">NRI / Overseas Client</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-[10px] tracking-widest text-[#C5A880] uppercase mb-2 font-semibold">
                        APPROX. BUDGET RANGE
                      </label>
                      <select
                        value={formState.budgetRange}
                        onChange={(e) => setFormState({ ...formState, budgetRange: e.target.value })}
                        className="w-full bg-[#1C1B19] border border-white/20 px-4 py-3 text-xs text-white focus:border-[#C5A880] focus:outline-none"
                      >
                        <option value="₹50L – ₹1 Cr">₹50 Lakhs – ₹1 Crore</option>
                        <option value="₹1 Cr – ₹3 Cr">₹1 Crore – ₹3 Crores</option>
                        <option value="₹3 Cr+">₹3 Crores + (Bespoke Estate)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] tracking-widest text-[#C5A880] uppercase mb-2 font-semibold">
                        TIMELINE / POSSESSION
                      </label>
                      <select
                        value={formState.timeline}
                        onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                        className="w-full bg-[#1C1B19] border border-white/20 px-4 py-3 text-xs text-white focus:border-[#C5A880] focus:outline-none"
                      >
                        <option value="Immediately">Immediate (Next 30 Days)</option>
                        <option value="Within 3 Months">Within 1 - 3 Months</option>
                        <option value="3 to 6 Months">3 to 6 Months</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-mono text-[10px] tracking-widest text-[#C5A880] uppercase mb-2 font-semibold">
                      SPECIFIC REQUIREMENTS / NOTES
                    </label>
                    <textarea
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share details regarding your floorplan, Vastu preferences, or key design visions..."
                      className="w-full bg-[#1C1B19] border border-white/20 px-4 py-3 text-xs text-white placeholder-white/30 focus:border-[#C5A880] focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#A8875A] py-4 text-center font-sans text-xs font-bold tracking-[0.2em] uppercase text-white shadow-xl hover:bg-white hover:text-[#1C1B19] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>SUBMIT CONSULTATION REQUEST</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-3xl border border-[#A8875A] bg-[#1C1B19] overflow-hidden shadow-2xl">
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-[#A8875A]"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-6 border-b border-white/10">
              <span className="font-mono text-[10px] tracking-widest text-[#C5A880] uppercase">
                VIDEO TESTIMONIAL
              </span>
              <h3 className="font-serif text-2xl text-white font-light">{activeVideoModal.client}</h3>
              <p className="text-xs text-[#E8DFD3]/70">{activeVideoModal.title}</p>
            </div>

            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <img
                src={activeVideoModal.videoUrl}
                alt="Video Walkthrough"
                className="h-full w-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/40">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#A8875A] text-white shadow-2xl mb-3">
                  <Play className="h-7 w-7 fill-current ml-1" />
                </div>
                <p className="font-serif text-lg text-white font-light">Interactive Video Walkthrough Loaded</p>
                <p className="text-xs text-[#C5A880] font-mono mt-1">Full 4K Ultra HD Client Story</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
