import React, { useId } from 'react';

interface BespokeOpArtPatternProps {
  className?: string;
  color?: string; // e.g. "text-warm-bronze" or "text-yellow-500/20"
}

export default function BespokeOpArtPattern({ 
  className = "opacity-0 group-hover:opacity-15 transition-all duration-700 scale-95 group-hover:scale-100", 
  color = "text-warm-bronze" 
}: BespokeOpArtPatternProps) {
  const patternId = useId();

  return (
    <div className={`absolute inset-0 pointer-events-none z-10 overflow-hidden ${className} ${color}`}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Uniquely identified repeating pattern cell of 100x100 pixels */}
          <pattern id={patternId} width="100" height="100" patternUnits="userSpaceOnUse">
            {/* Transparent background */}
            <rect width="100" height="100" fill="transparent" />
            
            {/* 
              Mathematically perfect Op-Art diamond stripes.
              Using 8px stroke and 16px steps creates equal 8px gold stripes 
              and 8px transparent gaps for high-contrast op-art depth.
            */}
            <g stroke="currentColor" strokeWidth="8" fill="none">
              {[8, 24, 40, 56, 72, 88, 104, 120, 136].map((r) => (
                <path
                  key={`card-diamond-${r}`}
                  d={`M 50,${50 - r} L ${50 + r},50 L 50,${50 + r} L ${50 - r},50 Z`}
                />
              ))}
            </g>
          </pattern>
        </defs>
        {/* Draw the patterned background across the entire canvas */}
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
