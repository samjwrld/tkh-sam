import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowRight, Play, Pause } from 'lucide-react';

export interface PaymentStageData {
  stageNumber: number;
  payPercentage: string; // e.g. "Pay 10%"
  noteUnderPay: string;  // e.g. "Booking amount"
  cumulativePaid: string; // e.g. "10% paid"
  pillTitle: string;    // e.g. "Design Starts"
  subtitle: string;     // e.g. "Designing Phase"
  images: Array<{
    url: string;
    alt: string;
    title: string;
  }>;
  bullets: string[];
}

export const PAYMENT_STAGES: PaymentStageData[] = [
  {
    stageNumber: 1,
    payPercentage: 'Pay 10%',
    noteUnderPay: 'Booking amount',
    cumulativePaid: '10% paid',
    pillTitle: 'Design Starts',
    subtitle: 'Designing Phase',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80',
        alt: 'Modern luxury dining area interior designed by The Koncept House',
        title: 'Bespoke Spatial Layouts'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
        alt: 'Pastel TV unit wall with custom fluted paneling',
        title: '3D Photorealistic Renders'
      },
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
        alt: 'Premium material laminates, veneer, and quartz swatch samples',
        title: 'Sourced Material Swatches'
      }
    ],
    bullets: [
      'Visit our studio',
      '3D designs',
      'Material selection',
      'Design finalisation',
      'Design overview',
      'Sign-off for production'
    ]
  },
  {
    stageNumber: 2,
    payPercentage: 'Pay 60%',
    noteUnderPay: 'Production starts',
    cumulativePaid: '70% paid',
    pillTitle: 'Production Starts',
    subtitle: 'Modular Production',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
        alt: 'High-tech precision cabinetry carpentry workshop with panels',
        title: 'German Machinery Precision'
      },
      {
        url: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
        alt: 'Master craftsman inspecting solid teakwood and marine plywood panels',
        title: 'In-House Craftsmanship'
      },
      {
        url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
        alt: 'Factory quality inspection and panel cutting for modular kitchen components',
        title: 'Factory Quality Checks'
      }
    ],
    bullets: [
      'Pay 60% before production starts',
      '15 days for factory production',
      'Site keys handed to our team',
      'Procurement of raw materials',
      'False ceiling completed',
      'Electrical work completed'
    ]
  },
  {
    stageNumber: 3,
    payPercentage: 'Pay 25%',
    noteUnderPay: 'Materials on site',
    cumulativePaid: '95% paid',
    pillTitle: 'Materials Reach Site',
    subtitle: 'Delivery of Your Modular Products',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
        alt: 'Carefully packed modular furniture units delivered to site',
        title: 'White-Glove Site Logistics'
      },
      {
        url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
        alt: 'Site engineers carrying calibrated modular panels safely indoors',
        title: 'Safe Material Handling'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
        alt: 'Clean apartment interior prepared for modular assembly',
        title: 'Site Preparation & Flooring'
      }
    ],
    bullets: [
      'Pay 25% upon material delivery',
      'Delivery of factory modular products',
      'Flooring & wall treatments',
      'Installation phase begins',
      'Decorative accessories',
      'Site quality check'
    ]
  },
  {
    stageNumber: 4,
    payPercentage: 'Pay 5%',
    noteUnderPay: 'At installation',
    cumulativePaid: '100% paid',
    pillTitle: 'Installation & Handover',
    subtitle: 'Crafting Your Dream Home',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80',
        alt: 'Expert installer executing fine wall finishes and touch-ups',
        title: 'Seamless Fit & Alignment'
      },
      {
        url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
        alt: 'Precision assembly of Blum soft-close fittings and cabinetry',
        title: 'Hardware & Fittings'
      },
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
        alt: 'Completed luxury living room ready for client key handover',
        title: 'Flawless Final Handover'
      }
    ],
    bullets: [
      'Pay 5% at the time of installation',
      'Installation of modular products',
      'Kitchen & home accessories fitted',
      'Tiling & final touch-ups',
      'Handover of keys',
      '45-day delivery guaranteed'
    ]
  }
];

export default function PaymentTimeline() {
  const [currentStageIndex, setCurrentStageIndex] = useState<number>(0);
  const [isAutoplayActive, setIsAutoplayActive] = useState<boolean>(false);
  const [isUserHovering, setIsUserHovering] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const totalStages = PAYMENT_STAGES.length;
  const currentStage = PAYMENT_STAGES[currentStageIndex];

  // Stop autoplay permanently when user explicitly interacts
  const handleUserAction = useCallback(() => {
    setIsAutoplayActive(false);
  }, []);

  // Autoplay timer (5 seconds)
  useEffect(() => {
    if (!isAutoplayActive || isUserHovering || isDragging) return;

    const timer = setInterval(() => {
      setCurrentStageIndex((prev) => (prev + 1) % totalStages);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoplayActive, isUserHovering, isDragging, totalStages]);

  // Update stage index safely
  const selectStage = useCallback((index: number) => {
    if (index >= 0 && index < totalStages) {
      setCurrentStageIndex(index);
    }
  }, [totalStages]);

  // Handle Drag / Click on Progress Track
  const handleTrackPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    handleUserAction();
    setIsDragging(true);

    if (trackRef.current) {
      const rect = trackRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const ratio = Math.max(0, Math.min(1, clickX / rect.width));
      const nearestIndex = Math.round(ratio * (totalStages - 1));
      selectStage(nearestIndex);
    }
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (!isDragging || !trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, currentX / rect.width));
    const nearestIndex = Math.round(ratio * (totalStages - 1));
    selectStage(nearestIndex);
  };

  const handlePointerUp = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
    } else {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    }
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging]);

  // Keyboard navigation on slider track
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    handleUserAction();
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      selectStage(Math.min(totalStages - 1, currentStageIndex + 1));
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      selectStage(Math.max(0, currentStageIndex - 1));
    } else if (e.key === 'Home') {
      e.preventDefault();
      selectStage(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      selectStage(totalStages - 1);
    }
  };

  // Mobile Touch Swipe on Content Area
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 40) {
      handleUserAction();
      if (diffX > 0 && currentStageIndex < totalStages - 1) {
        selectStage(currentStageIndex + 1); // Swipe left -> Next stage
      } else if (diffX < 0 && currentStageIndex > 0) {
        selectStage(currentStageIndex - 1); // Swipe right -> Prev stage
      }
    }
    touchStartX.current = null;
  };

  // Calculate percentage fill (0% for step 0, 33.33% for step 1, 66.66% for step 2, 100% for step 3)
  const fillPercentage = (currentStageIndex / (totalStages - 1)) * 100;

  return (
    <section 
      id="payment-timeline" 
      aria-label="Payment Timeline"
      className="py-20 md:py-24 bg-[#1C1B19] text-[#FAF8F5] relative overflow-hidden font-['Montserrat',sans-serif] border-y border-[#3A342D]"
      onMouseEnter={() => setIsUserHovering(true)}
      onMouseLeave={() => setIsUserHovering(false)}
    >
      {/* Subtle Background Radial Glow & Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#A8875A]/15 via-[#1C1B19] to-[#121110] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            1. HEADING & SUBHEADING
            ======================================================== */}
        <div className="text-center max-w-[720px] mx-auto space-y-3 mb-12 sm:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-bold text-[#FAF8F5] leading-tight tracking-tight">
            Hassle-free Payment Experience
          </h2>
          <p className="text-[#C5A880] font-semibold text-base sm:text-lg md:text-xl tracking-wide">
            All Modular Products at Factory Price
          </p>
        </div>

        {/* ========================================================
            2. PROGRESS SLIDER WITH EVENLY SPACED 4 STEPS
            ======================================================== */}
        <div className="max-w-4xl mx-auto mb-14 px-2 sm:px-6">
          {/* Drag Instruction Banner */}
          <div className="flex items-center justify-between text-xs text-[#C5A880] mb-3 font-mono tracking-wider">
            <span className="flex items-center gap-2 font-bold uppercase">
              <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-ping" />
              <span>CURRENT: {currentStage.payPercentage} ({currentStage.pillTitle})</span>
            </span>
            <span className="text-[#E8DFD3]/70 font-sans text-[11px] sm:text-xs">
              👈 Drag slider to explore stages 👉
            </span>
          </div>

          <div 
            ref={trackRef}
            role="slider"
            tabIndex={0}
            aria-label="Payment process stage selector"
            aria-valuemin={1}
            aria-valuemax={totalStages}
            aria-valuenow={currentStageIndex + 1}
            aria-valuetext={`Stage ${currentStageIndex + 1} of 4: ${currentStage.pillTitle}, ${currentStage.payPercentage}`}
            onPointerDown={handleTrackPointerDown}
            onKeyDown={handleKeyDown}
            className="relative cursor-grab active:cursor-grabbing py-5 touch-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1C1B19] rounded-full"
          >
            {/* HTML5 Native Range Overlay for Smooth Drag & Touch Swiping */}
            <input 
              type="range"
              min={0}
              max={totalStages - 1}
              step={1}
              value={currentStageIndex}
              onChange={(e) => {
                handleUserAction();
                selectStage(Number(e.target.value));
              }}
              className="absolute inset-0 w-full h-full opacity-0 cursor-grab active:cursor-grabbing z-30"
              aria-label="Drag payment stage slider"
            />

            {/* Outer Rounded Track Background */}
            <div className="h-3 w-full bg-[#342F28] rounded-full relative overflow-hidden shadow-inner border border-[#4A433A]/40">
              {/* Warm Gold Progress Fill */}
              <div 
                className="h-full bg-gradient-to-r from-[#A8875A] to-[#C5A880] rounded-full transition-all duration-300 ease-out"
                style={{ width: `${fillPercentage}%` }}
              />
            </div>

            {/* Floating Draggable Handle Badge */}
            <div 
              className="absolute top-0 -translate-y-full -translate-x-1/2 px-2.5 py-1 bg-[#A8875A] text-[#1C1B19] rounded-full text-[11px] font-bold shadow-lg transition-all duration-200 pointer-events-none z-20 whitespace-nowrap"
              style={{ left: `${fillPercentage}%` }}
            >
              {currentStage.payPercentage}
            </div>

            {/* Draggable Circular Thumb */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 bg-[#FAF8F5] rounded-full shadow-2xl border-2 border-[#A8875A] flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-active:scale-125 z-20 pointer-events-none ring-4 ring-[#A8875A]/20"
              style={{ left: `${fillPercentage}%` }}
            >
              <div className="w-3 h-3 rounded-full bg-[#A8875A]" />
            </div>

            {/* Step Ticks along the track */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-0 pointer-events-none z-10">
              {PAYMENT_STAGES.map((stage, idx) => {
                const isActive = idx <= currentStageIndex;
                const isCurrent = idx === currentStageIndex;
                return (
                  <div 
                    key={stage.stageNumber} 
                    className="relative flex items-center justify-center"
                    style={{ left: `${(idx / (totalStages - 1)) * 100}%`, transform: 'translateX(-50%)' }}
                  >
                    <div 
                      className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                        isCurrent 
                          ? 'bg-[#C5A880] border-[#FAF8F5] scale-125 shadow-md' 
                          : isActive 
                            ? 'bg-[#C5A880] border-[#A8875A]' 
                            : 'bg-[#1C1B19] border-[#A8875A]/50'
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Labels & Cumulative Totals under each step */}
          <div className="grid grid-cols-4 mt-3 text-center">
            {PAYMENT_STAGES.map((stage, idx) => {
              const isCurrent = idx === currentStageIndex;
              const isActive = idx <= currentStageIndex;

              return (
                <button
                  key={stage.stageNumber}
                  onClick={() => {
                    handleUserAction();
                    selectStage(idx);
                  }}
                  className="flex flex-col items-center group/btn focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] rounded-md p-1 transition-transform"
                >
                  <span className={`font-bold text-[13px] sm:text-base leading-tight transition-colors duration-200 ${
                    isCurrent ? 'text-[#C5A880] scale-105' : isActive ? 'text-[#FAF8F5]' : 'text-[#E8DFD3]/60 group-hover/btn:text-[#FAF8F5]'
                  }`}>
                    {stage.payPercentage}
                  </span>
                  
                  {/* Small Note Under Pay */}
                  {stage.noteUnderPay && (
                    <span className="text-[11px] sm:text-[12px] text-[#E8DFD3]/70 font-medium block mt-0.5 leading-none">
                      {stage.noteUnderPay}
                    </span>
                  )}

                  {/* Cumulative total */}
                  <span className={`text-[11px] sm:text-[13px] font-semibold mt-1 px-1.5 py-0.5 rounded transition-all ${
                    isCurrent ? 'bg-[#A8875A]/25 text-[#C5A880]' : 'text-[#E8DFD3]/50'
                  }`}>
                    {stage.cumulativePaid}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            3. WARM GOLD PILL-SHAPED TITLE BADGE
            ======================================================== */}
        <div className="flex justify-center mb-8">
          <motion.div 
            layout
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="inline-flex items-center gap-2 bg-[#A8875A] text-[#1C1B19] px-6 py-2.5 rounded-full shadow-lg font-bold text-sm sm:text-base tracking-wide border border-[#C5A880]/30"
          >
            <span className="w-2 h-2 rounded-full bg-[#1C1B19] animate-pulse" />
            <AnimatePresence mode="wait">
              <motion.span
                key={currentStage.pillTitle}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                Stage {currentStage.stageNumber}: {currentStage.pillTitle}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ========================================================
            4. DYNAMIC STAGE CONTENT CONTAINER (FIXED/MIN HEIGHT TO PREVENT PAGE JUMPS)
            ======================================================== */}
        <div 
          className="min-h-[520px] sm:min-h-[500px] flex flex-col justify-between bg-[#25221E]/90 border border-[#A8875A]/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStageIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="space-y-8 h-full flex flex-col justify-between"
            >
              {/* STAGE SUBTITLE */}
              <div className="text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#3A342D] pb-4">
                <div>
                  <span className="text-[12px] font-mono tracking-widest text-[#C5A880] uppercase font-bold block">
                    STAGE {currentStage.stageNumber} OF 4
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#FAF8F5] mt-0.5">
                    {currentStage.subtitle}
                  </h3>
                </div>
                
                <div className="text-xs text-[#E8DFD3]/80 flex items-center justify-center sm:justify-start gap-1.5 bg-[#1C1B19] px-3.5 py-1.5 rounded-full border border-[#A8875A]/25">
                  <span>{currentStage.payPercentage} due now</span>
                  <span className="text-[#C5A880]">({currentStage.cumulativePaid} cumulative)</span>
                </div>
              </div>

              {/* ROW OF 3 IMAGE CARDS (Swipeable on mobile) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto pb-2 sm:pb-0 scrollbar-none snap-x snap-mandatory">
                {currentStage.images.map((img, i) => (
                  <div 
                    key={i}
                    className="group relative bg-[#1C1B19] rounded-[8px] overflow-hidden shadow-md border border-[#3A342D] aspect-[4/3] flex-shrink-0 sm:flex-shrink snap-center"
                  >
                    <img 
                      src={img.url} 
                      alt={img.alt} 
                      onError={(e) => {
                        const target = e.currentTarget;
                        const fallback = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80';
                        if (target.src !== fallback) {
                          target.src = fallback;
                        }
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-transparent opacity-85 group-hover:opacity-65 transition-opacity" />
                    
                    <div className="absolute bottom-3 left-3 right-3 text-left">
                      <span className="text-[11px] font-mono font-medium text-[#C5A880] uppercase tracking-wider block">
                        Phase Highlight 0{i + 1}
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-[#FAF8F5] leading-snug line-clamp-2">
                        {img.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 3-COLUMN GRID OF 6 BULLET POINTS WITH GOLD ARROW MARKERS */}
              <div className="pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A880] mb-4 text-left font-mono">
                  Key Deliverables & Milestones:
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-left">
                  {currentStage.bullets.map((bullet, bIdx) => (
                    <div 
                      key={bIdx}
                      className="flex items-start gap-2.5 bg-[#1C1B19]/80 border border-[#3A342D] p-3 rounded-lg hover:border-[#A8875A]/60 transition-colors"
                    >
                      {/* Golden Yellow Arrow Marker */}
                      <div className="mt-0.5 p-1 rounded-full bg-[#A8875A]/20 flex-shrink-0">
                        <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                      </div>
                      <span className="text-[13px] sm:text-[14px] text-[#E8DFD3] leading-snug font-medium">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* ========================================================
            5. AUTOPLAY STATUS & FOOTER CONTROLS
            ======================================================== */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8DFD3]/70 px-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (!isAutoplayActive) {
                  setIsAutoplayActive(true);
                } else {
                  setIsAutoplayActive(false);
                }
              }}
              className="flex items-center gap-1.5 bg-[#25221E] hover:bg-[#342F28] text-[#FAF8F5] px-3 py-1.5 rounded-full border border-[#A8875A]/30 transition-colors"
              title={isAutoplayActive ? "Pause Autoplay" : "Resume Autoplay"}
            >
              {isAutoplayActive ? <Pause className="w-3.5 h-3.5 text-[#C5A880]" /> : <Play className="w-3.5 h-3.5 text-[#C5A880]" />}
              <span>{isAutoplayActive ? "Autoplay Active" : "Autoplay Paused"}</span>
            </button>
            <span className="hidden sm:inline text-[#E8DFD3]/30">•</span>
            <span className="hidden sm:inline">Drag thumb or click steps to navigate</span>
          </div>

          <div className="flex items-center gap-1.5 text-right">
            <span className="font-semibold text-[#FAF8F5]">45-Day Delivery Guarantee</span>
            <span className="text-[#C5A880]">•</span>
            <span>Zero Hidden Cost Promise</span>
          </div>
        </div>

      </div>
    </section>
  );
}
