import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp } from 'lucide-react';
import { motion, Variants } from 'motion/react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

export default function StickyWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Show welcome tooltip after 2.5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2500);

    // Auto hide tooltip after 8 seconds
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 10500);

    // Handle scroll to top visibility
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      id="floating-actions"
      className="group fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Subtle golden geometrical pattern background */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center">
        <svg
          id="golden-geo-pattern"
          className="w-24 h-24 text-warm-bronze animate-spin-slow opacity-0 group-hover:opacity-15 scale-100 group-hover:scale-110 transition-all duration-500"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ animationDuration: '40s' }}
        >
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" />
          <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" />
          <polygon points="50,15 85,50 50,85 15,50" stroke="currentColor" strokeWidth="0.5" />
          <polygon points="50,15 85,50 50,85 15,50" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 50 50)" />
          <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Scroll to Top button item */}
      <motion.div variants={itemVariants}>
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          className={`group/scroll flex h-11 w-11 items-center justify-center rounded-full border border-warm-cream/50 bg-warm-beige text-warm-charcoal shadow-lg transition-all duration-300 hover:bg-warm-cream hover:-translate-y-1 hover:border-warm-bronze hover:ring-2 hover:ring-warm-bronze/20 hover:shadow-[0_0_15px_rgba(197,168,128,0.6)] ${
            showScrollTop ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-4 opacity-0 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 transition-transform duration-300 ease-out group-hover/scroll:-rotate-12 group-hover/scroll:-translate-y-0.5" />
        </button>
      </motion.div>

      {/* WhatsApp Sticky CTA Wrapper item */}
      <motion.div variants={itemVariants} className="relative flex items-center justify-end">
        {/* Tooltip message bubble */}
        <div
          id="whatsapp-chat-tooltip"
          className={`absolute right-14 mr-1 whitespace-nowrap rounded-xl bg-warm-charcoal px-4 py-2 text-xs font-medium text-warm-cream shadow-xl transition-all duration-300 ${
            showTooltip ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0 pointer-events-none'
          }`}
        >
          <div className="relative">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Chat with an Expert Interior Designer!
            </span>
            {/* Tooltip arrow */}
            <div className="absolute top-1/2 -right-2.5 h-2 w-2 -translate-y-1/2 rotate-45 bg-warm-charcoal"></div>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <a
          id="sticky-whatsapp-cta"
          href="https://wa.link/1ibryc"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl transition-all duration-300 hover:bg-emerald-600 hover:scale-110 active:scale-95 hover:ring-4 hover:ring-warm-bronze/40 hover:shadow-[0_0_20px_rgba(197,168,128,0.8)]"
          aria-label="Chat with us on WhatsApp"
        >
          {/* Animated pulsing wave rings */}
          <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping group-hover:hidden"></span>
          
          <svg
            className="h-7 w-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.705 1.456h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </motion.div>
    </motion.div>
  );
}
