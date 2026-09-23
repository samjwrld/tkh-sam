import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import GoldenGeometryBg from './GoldenGeometryBg';
import BespokeOpArtPattern from './BespokeOpArtPattern';
import PaymentTimeline from './PaymentTimeline';
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
  Pause,
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
      id: 'hyderabad-sanctuary',
      title: "The Hyderabad Sanctuary Villa",
      subtitle: "8,500 sq ft Independent Villa • Burma Teak & Travertine Courtyard",
      location: "Hyderabad",
      tagline: "Spaces Crafted to be Lived In.",
      quote: "Blending contemporary interior minimalism with quiet architectural thresholds.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
      stats: { sqft: "8,500 SQ FT", type: "LUXURY VILLA", year: "2025" }
    },
    {
      id: 'hyderabad-sky',
      title: "The Hyderabad Sky Sanctuary",
      subtitle: "4,200 sq ft Penthouse • Acoustically Tuned Acoustic Paneling",
      location: "Aparna Luxor Park, Hyderabad",
      tagline: "Quiet Luxury Above The City.",
      quote: "Organic textures, imported Italian marble, and custom-milled cabinetry from our Hyderabad facility.",
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

  // Featured Residence Carousel state
  const [activeResIndex, setActiveResIndex] = useState<number>(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState<boolean>(false);

  // Process step state (1 to 5)
  const [activeProcessStep, setActiveProcessStep] = useState<number>(1);

  // Portfolio filter tab state
  const [activeProjectFilter, setActiveProjectFilter] = useState<'all' | 'villas' | 'penthouses' | 'fusion'>('all');

  // Mini image carousel state for project cards
  const [projectImageIndexes, setProjectImageIndexes] = useState<{ [key: string]: number }>({
    'project-pramod': 0,
    'project-piyush': 0,
    'project-spoorthi': 0,
    'project-anil': 0,
  });

  const handleNextResidence = () => {
    setActiveResIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const handlePrevResidence = () => {
    setActiveResIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

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
    location: 'Hyderabad',
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
        location: 'Hyderabad',
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

  // Featured Projects Data with 3-Image Carousel each (Mapped to local directory /public/images/selected-residences/)
  const featuredProjects = [
    {
      id: 'project-pramod',
      title: "Pramod's Residence",
      category: 'Minimalist Family Villa',
      filterType: 'villas',
      location: 'Amberpet, Hyderabad',
      area: '8,500 sq ft',
      year: '2025',
      images: [
        '/images/selected-residences/pramod-1.jpg',
        '/images/selected-residences/pramod-2.jpg',
        '/images/selected-residences/pramod-3.jpg',
      ],
      fallbackImages: [
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      ],
      materials: ['Burma Teak', 'Italian Lime Plaster', 'Fluted Glass'],
      quote: 'A study in light wood accents, quiet negative spaces, and hidden custom storage.'
    },
    {
      id: 'project-piyush',
      title: "Piyush's Residence",
      category: 'Contemporary Italian Luxury',
      filterType: 'penthouses',
      location: 'Aurobindo Regent, Kondapur, Hyderabad',
      area: '4,070 sq ft',
      year: '2025',
      images: [
        '/images/selected-residences/piyush-1.jpg',
        '/images/selected-residences/piyush-2.jpg',
        '/images/selected-residences/piyush-3.jpg',
      ],
      fallbackImages: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      ],
      materials: ['Statuario Marble', 'Champagne Gold Trim', 'Lutron Automation'],
      quote: 'Refined Italian luxury and intelligent smart home automation at Aurobindo Regent.'
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
        '/images/selected-residences/spoorthi-1.jpg',
        '/images/selected-residences/spoorthi-2.jpg',
        '/images/selected-residences/spoorthi-3.jpg',
      ],
      fallbackImages: [
        'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
      ],
      materials: ['Bidri Metal Inlay', 'Laser Cut Brass Screen', 'Calibrated Quartz'],
      quote: 'Nizami interior arches paired seamlessly with modern Italian leather.'
    },
    {
      id: 'project-anil',
      title: "Anil's Residence",
      category: 'Modernist Gated Villa',
      filterType: 'villas',
      location: 'Hyderabad',
      area: '6,200 sq ft',
      year: '2025',
      images: [
        '/images/selected-residences/anil-1.jpg',
        '/images/selected-residences/anil-2.jpg',
        '/images/selected-residences/anil-3.jpg',
      ],
      fallbackImages: [
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      ],
      materials: ['Anti-scratch PU', 'Satin Vitrified Tile', 'Walnut Millwork'],
      quote: 'Scratch-proof heavy-duty luxury built for multi-generational pet-friendly living.'
    }
  ];

  // Automated Carousel Timer (switches residence every 5 seconds)
  useEffect(() => {
    if (isAutoplayPaused) return;

    const interval = setInterval(() => {
      setActiveResIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplayPaused, featuredProjects.length]);

  const filteredProjects = activeProjectFilter === 'all' 
    ? featuredProjects 
    : featuredProjects.filter(p => p.filterType === activeProjectFilter);

  // 4 "Your Concerns" Cards
  const clientConcerns = [
    {
      id: 'concern-villa',
      title: 'Building your dream villa',
      description: 'From bare civil structure to complete turn-key move in. We manage structural modifications, electrical grids, plumbing, HVAC, and custom furniture.',
      tag: 'TURNKEY VILLA INTERIOR STUDIO',
      targetView: 'premium-interiors' as ViewState,
      icon: Building2
    },
    {
      id: 'concern-nri',
      title: 'NRI? Build your Hyderabad home from abroad',
      description: 'Live video walkthroughs, weekly WhatsApp reporting, milestone sign-offs, and a single trusted project lead in Hyderabad.',
      tag: 'REMOTE DESIGN MANAGEMENT',
      targetView: 'contact' as ViewState,
      icon: Globe
    },
    {
      id: 'concern-renovation',
      title: 'Renovating a family home',
      description: 'Modernize layout and lighting while respecting heirloom pieces, memory-rich interiors, and generational space comfort.',
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
      benefit: 'Direct access to your assigned senior interior design lead throughout the entire journey.',
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
      title: 'Materials Built to Last 10+ Years',
      benefit: 'Burma teak, calibrated quartz, marine plywood, and Blum soft-close fittings.',
      never: 'NEVER short-term cosmetic fixes, cheap board substitutes, or peeling veneers.'
    }
  ];

  // 5 Process Steps
  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Interior Design Brief',
      subtitle: 'Mapping interior aesthetics, spatial flow & material preferences',
      description: 'We begin with an in-depth interior consultation at our studio or your residence. We analyze interior spatial flow, Vastu alignments, room lighting, color palettes, storage requirements, and how your family uses every living space.',
      deliverables: ['Interior moodboard & color palette', 'Space planning & Vastu brief', 'Initial interior budget outline', 'Material & finish samples'],
      duration: '7 - 10 Days'
    },
    {
      number: '02',
      title: 'Interior Concept & 3D Spatial Layout',
      subtitle: 'Visualizing bespoke furniture, lighting & false ceiling designs',
      description: 'Developing 3D photorealistic interior renderings, false ceiling designs, custom lighting schemas, and wall treatments. We curate bespoke furniture layouts and material palettes tailored for ultimate interior luxury.',
      deliverables: ['3D photorealistic interior renderings', 'False ceiling & lighting layouts', 'Bespoke furniture schematics', 'Physical material sample tray'],
      duration: '2 - 3 Weeks'
    },
    {
      number: '03',
      title: 'Detailed Interior Engineering & Custom Millwork',
      subtitle: 'Precision CAD drawings for modular furniture & woodwork',
      description: 'Creating comprehensive interior working drawings for custom cabinetry, modular wardrobes, TV units, kitchen layouts, electrical points, and interior partition details for our in-house precision manufacturing plant.',
      deliverables: ['Full interior CAD working drawings', 'Modular kitchen & wardrobe blueprints', 'Electrical & plumbing interior grids', 'Final fixed-quote itemization'],
      duration: '2 Weeks'
    },
    {
      number: '04',
      title: 'Turnkey Interior Execution & Factory Fabrication',
      subtitle: 'Precision modular manufacturing & white-glove site installation',
      description: 'Our in-house modular factory precision-crafts your custom wardrobes, kitchens, and wall panels, while our senior site engineers supervise civil updates, interior painting, wallpaper, panelling, and flooring installation.',
      deliverables: ['Factory precision manufacturing', 'Dedicated interior project manager', 'Weekly progress & site reports', 'Quality assurance milestone sign-offs'],
      duration: '6 - 10 Weeks'
    },
    {
      number: '05',
      title: 'Curated Interior Handover & White-Glove Styling',
      subtitle: 'Final soft furnishings, art placement & white-glove cleaning',
      description: 'We curate and install soft furnishings, custom curtains, rugs, accent lighting, and wall art, followed by white-glove deep cleaning before handing over your fully transformed interior with a 10-year warranty.',
      deliverables: ['White-glove interior deep cleaning', 'Curtains, rugs & art styling', '10-Year interior material warranty', 'Care & maintenance dossier'],
      duration: '1 Week'
    }
  ];

  interface TestimonialItem {
    quote: string;
    author: string;
    title?: string;
    location?: string;
    videoDuration: string;
    videoThumb: string;
  }

  // Detailed Testimonials
  const testimonials: TestimonialItem[] = [
    {
      quote: "Recently, Koncept House Interiors completed the interior work for my new home. They did an excellent job and delivered everything on time. Siresha ma’am suggested many valuable improvements that truly enhanced our interior design. Her ideas made a big difference in the overall look and feel of our home. Overall, I had a very good experience with Koncept House Interiors. Thank you for designing my home so beautifully!",
      author: "Bala Naresh Nalamati",
      videoDuration: "1:45",
      videoThumb: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "Working with The Koncept House interior Design Studio has been an exceptional experience. As NRI clients, we initially reached out through Instagram, impressed by the quality and style showcased in their online portfolio. The trust we placed in them was well-placed, as they have delivered outstanding results that truly reflect their expertise and attention to detail. From initial consultation to final execution, their professionalism and creativity have exceeded our expectations. We highly recommend The Koncept House interior Design Studio to anyone seeking top-notch interior design solutions!",
      author: "Amruthamma Kudikilla",
      videoDuration: "2:10",
      videoThumb: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "Koncept house has been wonderful designing our house. The output is very good, totally recommendable. Sirisha garu being the nicest, she was being very crisp and clear on each design session. Timely & quality delivery is appreciated.",
      author: "Snehalata Reddy",
      videoDuration: "1:30",
      videoThumb: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80"
    }
  ];

  // FAQs
  const faqItems = [
    {
      id: 'faq-1',
      question: 'What is included in your complete turnkey interior design scope for a home?',
      answer: 'Our turnkey scope delivers a complete, move-in ready home. It includes spatial layout planning, photorealistic 3D renders, a factory-milled modular kitchen with anti-scratch surfaces, master bedroom wardrobes with soft-close hardware, custom TV media units, foyer cabinetry, false ceiling design with LED cove lighting, full-home painting, electrical profile additions, and site cleanup. You hand over the keys and walk into a pristine, fully finished home.'
    },
    {
      id: 'faq-2',
      question: 'How do you guarantee long-lasting material quality in Hyderabad’s climate?',
      answer: 'We use water-resistant Boiling Waterproof (BWP) plywood for kitchen wet zones and High-Density Moisture-Resistant (HDMR) boards for wardrobes and dry storage areas. All cabinetry is precision-edged at our in-house Hyderabad factory using hot-melt PUR edgebanding to prevent moisture ingress. We pair these with premium German-engineered soft-close hinges and heavy-duty tandem drawer runners.'
    },
    {
      id: 'faq-3',
      question: 'How long does a turnkey interior project take from design approval to final handover?',
      answer: 'Execution typically takes 45 to 60 days following final 3D design and material sign-off. Because 80% of your furniture and cabinetry is pre-manufactured at our state-of-the-art Hyderabad factory while on-site civil and false ceiling work takes place simultaneously, site installation is fast, clean, and strictly adheres to written timeline commitments.'
    },
    {
      id: 'faq-4',
      question: 'Can I monitor my site progress remotely if I am an NRI or busy working professional?',
      answer: 'Yes. You get a dedicated single point of contact for your project. You receive weekly HD video walkthroughs, detailed photo logs, and progress updates directly via WhatsApp and email, allowing you to stay updated effortlessly from anywhere in the world without having to visit the site daily.'
    },
    {
      id: 'faq-5',
      question: 'Do you handle civil modifications, electrical rewiring, and false ceiling work under one roof?',
      answer: 'Yes. As a complete turnkey studio, we manage all civil alterations, electrical point additions, plumbing rerouting, false ceiling structural framing, LED profile installations, and wall painting. You work with a single unified team, eliminating the stress of managing external contractors or multiple vendors.'
    },
    {
      id: 'faq-6',
      question: 'How to choose the right interior designer in Hyderabad for your home?',
      answer: 'To choose the right interior designer in Hyderabad, evaluate their portfolio of completed residential homes, verify if they operate an in-house manufacturing factory for modular cabinetry precision, demand a transparent line-item BOQ with zero hidden costs, review client testimonials across Hyderabad, and ensure they provide written timeline commitments with post-handover warranty support.'
    },
    {
      id: 'faq-7',
      question: 'How does the first consultation work at your Hyderabad studio?',
      answer: 'During your 60-minute studio visit at our Hyderabad experience lounge (Opp. Sumadhura Horizon), we review your floor plans, analyze your family lifestyle brief, and showcase physical material trays (acrylic finishes, high-pressure laminates, veneer samples, stone counters, and soft-close hardware). We then present a transparent itemized scope and execution roadmap.'
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
            Thoughtfully crafted luxury residences, villas, and apartments, shaped around the way you live.
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
              alt="Hyderabad Residential Luxury Interior by The Koncept House"
              className="h-full w-full object-cover object-center filter brightness-[0.92] contrast-[1.05] transition-transform duration-1000 hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
            {/* Soft Ambient Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#241F16]/90 via-transparent to-[#241F16]/30"></div>

            {/* Architectural Location Tag */}
            <div className="absolute top-6 left-6 sm:top-10 sm:left-10 bg-[#241F16]/85 backdrop-blur-md px-4 py-2 border border-white/10 text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#C5A880] uppercase">
              HYDERABAD RESIDENTIAL SANCTUARY · LIVING ATELIER
            </div>

            {/* Floating Editorial Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-10 sm:bottom-12 sm:max-w-xl bg-[#241F16]/90 backdrop-blur-xl border border-[#C5A880]/30 p-6 sm:p-8 md:p-10 shadow-2xl space-y-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#C5A880]"></span>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-[#C5A880] uppercase font-bold">
                    ATELIER PHILOSOPHY
                  </span>
                </div>
                <span className="hidden sm:inline-block font-mono text-[9px] tracking-widest text-[#F5E1DC]/50 uppercase">
                  8,500 SQ. FT. VILLA
                </span>
              </div>

              <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl font-light italic leading-snug text-[#F5E1DC]">
                “A home should not be a museum of possessions, but a sanctuary of quiet light, tactile textures, and effortless human flow.”
              </blockquote>

              <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-white/10 text-xs font-sans text-[#C5A880]/80">
                <div className="flex items-center gap-2">
                  <span className="font-medium tracking-wider">THE KONCEPT HOUSE</span>
                  <span className="text-[#F5E1DC]/40">•</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#F5E1DC]/60">HYDERABAD · 2026</span>
                </div>

                <button
                  onClick={(e) => handleLinkClick(e, 'projects')}
                  className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#C5A880] hover:text-white transition-colors group cursor-pointer"
                >
                  <span>EXPLORE RESIDENCES</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ==========================================
          2. BRAND PHILOSOPHY
          ========================================== */}
      <section id="brand-philosophy" className="relative py-24 sm:py-32 bg-[#FAF8F5] text-[#1C1B19]">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center space-y-8">
          <span className="font-mono text-xs tracking-[0.25em] text-[#A8875A] uppercase font-bold block">
            OUR DESIGN PHILOSOPHY
          </span>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-light leading-[1.2] text-[#1C1B19] max-w-4xl mx-auto">
            "Modern luxury is not loudness. It is the weight of solid Burma teak, the calm temperature of hand-burnished travertine, and light filtered through quiet geometric proportions."
          </h2>

          <p className="text-base sm:text-lg text-[#1C1B19]/70 font-light leading-relaxed max-w-3xl mx-auto">
            Founded in 2019 in Hyderabad, <strong className="text-[#1C1B19] font-medium">The Koncept House</strong> bridges contemporary interior minimalism with subtle references to local heritage — woven textures, metallic accents, and quiet restraint.
          </p>

          <div className="pt-4 flex items-center justify-center gap-6">
            <div className="h-px w-16 bg-[#A8875A]"></div>
            <span className="font-serif italic text-lg text-[#A8875A]">Spaces Crafted to be Lived In</span>
            <div className="h-px w-16 bg-[#A8875A]"></div>
          </div>
        </div>
      </section>

      {/* ==========================================
          2.5 WHY CHOOSE US
          ========================================== */}
      <section id="why-choose-us" className="py-24 bg-[#FAF8F5] border-t border-[#E8DFD3]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="font-mono text-xs tracking-[0.25em] text-[#A8875A] uppercase font-bold block">
              THE KONCEPT HOUSE ADVANTAGE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1C1B19]">
              Why Choose Us
            </h2>
            <p className="text-base sm:text-lg text-[#1C1B19]/70 font-light leading-relaxed">
              Besides great interior design, there are lots of reasons to choose Koncept house. Here are some of the most popular ones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5F1EA] p-8 border border-[#E8DFD3] hover:border-[#A8875A] transition-all hover:shadow-lg flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded bg-[#A8875A]/10 text-[#A8875A] group-hover:bg-[#A8875A] group-hover:text-white transition-colors">
                  <UserCheck className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#1C1B19] group-hover:text-[#A8875A] transition-colors">
                  Free Designs with Professional Team
                </h3>
                <p className="text-sm text-[#1C1B19]/70 font-light leading-relaxed">
                  Our team includes only the best decorators and interior designers in the industry & End to End Interior solutions
                </p>
              </div>
              <div className="pt-6 border-t border-[#E8DFD3] mt-6 flex items-center gap-2 text-xs font-mono font-bold text-[#A8875A] uppercase tracking-wider">
                <span>End-to-End Solutions</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>

            <div className="bg-[#F5F1EA] p-8 border border-[#E8DFD3] hover:border-[#A8875A] transition-all hover:shadow-lg flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded bg-[#A8875A]/10 text-[#A8875A] group-hover:bg-[#A8875A] group-hover:text-white transition-colors">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#1C1B19] group-hover:text-[#A8875A] transition-colors">
                  Best Materials and Warranty
                </h3>
                <p className="text-sm text-[#1C1B19]/70 font-light leading-relaxed">
                  We offers a wide range of materials for your dream home including wood options, laminates, acrylics, glass and more
                </p>
              </div>
              <div className="pt-6 border-t border-[#E8DFD3] mt-6 flex items-center gap-2 text-xs font-mono font-bold text-[#A8875A] uppercase tracking-wider">
                <span>Premium Quality Assured</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>

            <div className="bg-[#F5F1EA] p-8 border border-[#E8DFD3] hover:border-[#A8875A] transition-all hover:shadow-lg flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded bg-[#A8875A]/10 text-[#A8875A] group-hover:bg-[#A8875A] group-hover:text-white transition-colors">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#1C1B19] group-hover:text-[#A8875A] transition-colors">
                  Our in house Factory
                </h3>
                <p className="text-sm text-[#1C1B19]/70 font-light leading-relaxed">
                  All our Modular products are produced in our in house Modular factory .
                </p>
              </div>
              <div className="pt-6 border-t border-[#E8DFD3] mt-6 flex items-center gap-2 text-xs font-mono font-bold text-[#A8875A] uppercase tracking-wider">
                <span>100% In-House Production</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
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
                <div className="space-y-4 relative z-10">
                  
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

                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1C1B19] group-hover:text-[#A8875A] transition-colors duration-300 pt-1">
                        {promise.title}
                      </h3>
                    </div>

                    <CheckCircle2 className="h-5 w-5 text-[#A8875A] shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Benefit Statement */}
                  <p className="text-sm text-[#1C1B19]/80 font-light leading-relaxed pt-2">
                    {promise.benefit}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ==========================================
          5. FEATURED RESIDENCES (EDITORIAL INTERACTIVE CAROUSEL)
          ========================================== */}
      <section id="featured-projects" className="py-24 bg-[#F5F1EA] border-y border-[#E8DFD3] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Section Header & Carousel Navigation Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <span className="font-mono text-xs tracking-[0.25em] text-[#A8875A] uppercase font-bold block">
                SELECTED PORTFOLIO ARCHIVE
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1C1B19]">
                Selected Residences
              </h2>
            </div>

            {/* Carousel Navigation Buttons & Counter */}
            <div className="flex items-center gap-3 bg-[#FAF8F5] border border-[#E8DFD3] p-2.5 shadow-xs">
              {/* Autoplay Pause / Play Toggle Button */}
              <button
                onClick={() => setIsAutoplayPaused(!isAutoplayPaused)}
                className="flex h-9 w-9 items-center justify-center border border-[#E8DFD3] bg-white text-[#1C1B19] hover:bg-[#1C1B19] hover:text-[#C5A880] transition-all"
                title={isAutoplayPaused ? "Resume Autoplay" : "Pause Autoplay"}
                aria-label={isAutoplayPaused ? "Resume Autoplay" : "Pause Autoplay"}
              >
                {isAutoplayPaused ? (
                  <Play className="h-3.5 w-3.5 fill-current ml-0.5 text-[#A8875A]" />
                ) : (
                  <Pause className="h-3.5 w-3.5 fill-current text-[#1C1B19]" />
                )}
              </button>

              <span className="font-mono text-xs font-bold text-[#A8875A] px-2 tracking-widest">
                {String(activeResIndex + 1).padStart(2, '0')} / {String(featuredProjects.length).padStart(2, '0')}
              </span>

              <div className="h-4 w-px bg-[#E8DFD3]"></div>

              <button
                onClick={handlePrevResidence}
                className="flex h-10 w-10 items-center justify-center border border-[#E8DFD3] bg-white text-[#1C1B19] hover:bg-[#1C1B19] hover:text-[#C5A880] transition-all"
                aria-label="Previous Residence"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={handleNextResidence}
                className="flex h-10 w-10 items-center justify-center border border-[#E8DFD3] bg-[#1C1B19] text-[#C5A880] hover:bg-[#A8875A] hover:text-white transition-all"
                aria-label="Next Residence"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Main Active Residence Showcase Card with Autoplay Pause on Hover */}
          <div 
            onMouseEnter={() => setIsAutoplayPaused(true)}
            onMouseLeave={() => setIsAutoplayPaused(false)}
            className="relative"
          >
            {/* Subtle Animated Progress Bar for Autoplay */}
            {!isAutoplayPaused && (
              <motion.div
                key={activeResIndex}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 5, ease: "linear" }}
                className="absolute top-0 left-0 right-0 h-1 bg-[#A8875A] z-30 origin-left"
              />
            )}

            <AnimatePresence mode="wait">
              {(() => {
                const currentProject = featuredProjects[activeResIndex];
                const activeImgIdx = projectImageIndexes[currentProject.id] || 0;
                const activeImgSrc = currentProject.images[activeImgIdx];
                const fallbackImgSrc = currentProject.fallbackImages[activeImgIdx];

                return (
                  <motion.div
                    key={currentProject.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-[#FAF8F5] border border-[#E8DFD3] shadow-lg overflow-hidden"
                  >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    
                    {/* Image Showcase Column (7 cols) */}
                    <div className="lg:col-span-7 relative bg-[#1C1B19] min-h-[360px] sm:min-h-[480px] lg:min-h-[560px] flex items-center justify-center overflow-hidden group">
                      <img
                        key={activeImgSrc}
                        src={activeImgSrc}
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (target.src !== fallbackImgSrc) {
                            target.src = fallbackImgSrc;
                          }
                        }}
                        alt={currentProject.title}
                        className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                      {/* Top Location Badge */}
                      <div className="absolute top-6 left-6 z-10 bg-[#1C1B19]/90 border border-[#A8875A]/40 px-4 py-2 backdrop-blur-md">
                        <span className="font-mono text-xs tracking-widest text-[#C5A880] uppercase font-bold block">
                          {currentProject.location}
                        </span>
                      </div>

                      {/* Photo Carousel Dots / Navigation Controls on Image */}
                      <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2 bg-[#1C1B19]/80 border border-[#E8DFD3]/20 px-3 py-1.5 backdrop-blur-md">
                        <button
                          onClick={(e) => handlePrevCarouselImage(e, currentProject.id, currentProject.images.length)}
                          className="text-[#C5A880] hover:text-white transition-colors p-1"
                          title="Previous Photo"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>

                        <div className="flex gap-1.5 px-1">
                          {currentProject.images.map((_, dotIdx) => (
                            <button
                              key={dotIdx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setProjectImageIndexes((prev) => ({ ...prev, [currentProject.id]: dotIdx }));
                              }}
                              className={`h-1.5 transition-all rounded-full ${
                                activeImgIdx === dotIdx ? 'w-5 bg-[#C5A880]' : 'w-1.5 bg-white/40 hover:bg-white'
                              }`}
                            />
                          ))}
                        </div>

                        <button
                          onClick={(e) => handleNextCarouselImage(e, currentProject.id, currentProject.images.length)}
                          className="text-[#C5A880] hover:text-white transition-colors p-1"
                          title="Next Photo"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Residence Details Column (5 cols) */}
                    <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-8 bg-[#FAF8F5]">
                      <div className="space-y-6">
                        <div className="flex items-center justify-between border-b border-[#E8DFD3] pb-4">
                          <span className="font-mono text-xs tracking-[0.2em] text-[#A8875A] uppercase font-bold">
                            {currentProject.category}
                          </span>
                          <span className="font-mono text-xs text-[#1C1B19]/50 font-bold">
                            0{activeResIndex + 1}
                          </span>
                        </div>

                        <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1B19]">
                          {currentProject.title}
                        </h3>

                        <blockquote className="font-serif italic text-lg text-[#1C1B19]/80 border-l-2 border-[#A8875A] pl-4 py-1">
                          "{currentProject.quote}"
                        </blockquote>
                      </div>

                      {/* Action CTA */}
                      <div className="pt-6 border-t border-[#E8DFD3]">
                        <button
                          onClick={() => onNavigate(currentProject.id as ViewState)}
                          className="w-full inline-flex items-center justify-between bg-[#1C1B19] text-[#FAF8F5] px-6 py-4 font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#A8875A] transition-all group"
                        >
                          <span>EXPLORE RESIDENCE CASE STUDY</span>
                          <ArrowUpRight className="h-4 w-4 text-[#C5A880] group-hover:text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        </button>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
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
              Turnkey Interior Studio Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: '01',
                title: 'Luxury Villa Interiors',
                desc: 'End-to-end interior design for multi-story gated villas across Hyderabad. Spatial layout customization, ceiling design, and climate-responsive comfort.',
                tags: ['Villas', 'Penthouses', 'Gated Residences']
              },
              {
                num: '02',
                title: 'In-House Modular Factory',
                desc: 'State-of-the-art manufacturing facility in Hyderabad. Precision-milled Burma teak wardrobes, German-engineered hardware, and zero-wobble kitchen carcasses.',
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
          7. OUR PROCESS IN 5 INTERIOR DESIGN STEPS
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
              Our 5-Step Interior Process
            </h2>
            <p className="text-sm text-[#E8DFD3]/80 font-light">
              From initial interior space planning to white-glove handover, every stage of your interior transformation is managed with complete transparency.
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
          7.5. HASSLE-FREE PAYMENT TIMELINE
          ========================================== */}
      <PaymentTimeline />

      {/* ==========================================
          8. CLIENT TESTIMONIALS
          ========================================== */}
      <section id="testimonials" className="py-24 bg-[#FAF8F5]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-mono text-xs tracking-[0.25em] text-[#A8875A] uppercase font-bold block">
              CLIENT VOICES & TESTIMONIALS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1C1B19]">
              Client Reviews & Testimonials
            </h2>
          </div>

          {/* Staggered Fade-In Testimonials Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.98 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
                className="bg-[#F5F1EA] border border-[#E8DFD3] p-8 relative flex flex-col justify-between hover:border-[#A8875A] transition-all hover:shadow-xl group"
              >
                <div>
                  <Quote className="h-8 w-8 text-[#A8875A]/50 mb-4 group-hover:text-[#A8875A] transition-colors duration-300" />
                  <p className="font-serif italic text-base text-[#1C1B19]/90 font-normal leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8DFD3] space-y-1">
                  <h4 className="font-sans font-bold text-sm text-[#1C1B19]">{t.author}</h4>
                  {t.title && <p className="text-xs text-[#A8875A] font-mono">{t.title}</p>}
                  {t.location && <span className="text-[10px] text-[#1C1B19]/60 font-semibold block">{t.location}</span>}
                </div>
              </motion.div>
            ))}
          </motion.div>
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
              Everything you need to know about project scope, materials, timelines, and execution.
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
          10. CONSULTATION BOOKING & ENQUIRY FORM
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
                Whether you are designing a new villa, penthouse, or luxury apartment in Hyderabad, our design directors will review your floor plans at our studio and present bespoke material directions.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-[#C5A880] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-mono text-xs text-[#C5A880] uppercase font-bold tracking-wider">HYDERABAD EXPERIENCE STUDIO</h4>
                    <p className="text-xs text-[#E8DFD3]/70 leading-relaxed mt-1">
                      4th Floor, Sadanand Yadav's Buildings,<br />
                      Opp. Sumadhura Horizon,<br />
                      Hyderabad, Telangana - 500084
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-[#C5A880] shrink-0" />
                  <div>
                    <h4 className="font-mono text-xs text-[#C5A880] uppercase font-bold tracking-wider">DIRECT DESK</h4>
                    <a href="tel:+918907545678" className="text-xs text-[#E8DFD3]/90 hover:text-[#C5A880] transition-colors">
                      +91 89075 45678
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-[#C5A880] shrink-0" />
                  <div>
                    <h4 className="font-mono text-xs text-[#C5A880] uppercase font-bold tracking-wider">STUDIO HOURS</h4>
                    <p className="text-xs text-[#E8DFD3]/70">Wednesday – Monday: 10:00 AM – 6:00 PM (Tuesday Closed)</p>
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
                      Complete this brief to schedule your consultation with our lead interior design team.
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
                        <option value="3BHK Premium Flat">3BHK Premium Residence</option>
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
                        <option value="Hyderabad">Hyderabad Region</option>
                        <option value="Central Hyderabad">Central Hyderabad</option>
                        <option value="West Hyderabad">West Hyderabad</option>
                        <option value="North Hyderabad">North Hyderabad</option>
                        <option value="South Hyderabad">South Hyderabad</option>
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
