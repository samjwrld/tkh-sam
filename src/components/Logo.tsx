import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'color' | 'light' | 'dark';
  showSubtitle?: boolean;
  showImage?: boolean;
  showText?: boolean;
  logoPath?: string;
}

export default function Logo({ 
  className = "h-10", 
  variant = 'color', 
  showSubtitle = false,
  showImage = true,
  showText = true,
  logoPath = '/logo.png' 
}: LogoProps) {
  const [currentSrc, setCurrentSrc] = useState(logoPath);
  const [imgFailed, setImgFailed] = useState(false);

  // Brand color scheme
  const brandBlue = variant === 'light' ? '#FFFFFF' : '#1C4E73';
  const subtitleColor = variant === 'light' ? '#C5A880' : '#A8875A';

  const handleImgError = () => {
    if (currentSrc === '/logo.png') {
      setCurrentSrc('/tkh logo.png');
    } else if (currentSrc === '/tkh logo.png') {
      setCurrentSrc('/tkh-logo.png');
    } else {
      setImgFailed(true);
    }
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Reserved Logo Image Space for local PNG upload */}
      {showImage && (
        <div className={showText ? "h-8 w-8 sm:h-9 sm:w-9 shrink-0 flex items-center justify-center" : "h-10 sm:h-12 lg:h-14 w-auto min-w-[140px] sm:min-w-[200px] max-w-[220px] sm:max-w-[280px] md:max-w-[340px] shrink-0 flex items-center justify-start py-0.5"}>
          {!imgFailed ? (
            <img 
              src={currentSrc} 
              alt="The Koncept House Logo" 
              className="h-full w-auto max-w-full object-contain"
              onError={handleImgError}
            />
          ) : (
            /* Clean empty reserved space container for local logo upload */
            <div className="h-full w-full" />
          )}
        </div>
      )}

      {/* Brand Name Typography (Optional) */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <div 
            className="flex flex-col text-left"
            style={{ 
              color: brandBlue,
              fontFamily: "'Cinzel', 'Cormorant Garamond', 'Playfair Display', serif",
              fontWeight: 500,
            }}
          >
            <span className="text-[10px] sm:text-[12px] font-medium leading-[1.0] tracking-[0.24em] uppercase">
              THE
            </span>
            <span className="text-[13px] sm:text-[16px] font-medium leading-[1.05] tracking-[0.05em] uppercase">
              KONCEPT
            </span>
            <span className="text-[11px] sm:text-[13.5px] font-medium leading-[1.0] tracking-[0.18em] uppercase">
              HOUSE
            </span>
          </div>
          
          {showSubtitle && (
            <span 
              className="font-mono text-[7.5px] sm:text-[8.5px] tracking-[0.22em] font-bold uppercase mt-1 block"
              style={{ color: subtitleColor }}
            >
              INTERIOR ARCHITECTURE
            </span>
          )}
        </div>
      )}
    </div>
  );
}


