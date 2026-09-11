import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export default function GoldenGeometryBg() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate coordinates relative to this background container
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePos({ x, y });
      
      // Check if mouse is within bounds of this container plus some padding
      const padding = 150;
      const inBounds = 
        e.clientX >= rect.left - padding && 
        e.clientX <= rect.right + padding && 
        e.clientY >= rect.top - padding && 
        e.clientY <= rect.bottom + padding;
      
      setIsHovered(inBounds);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-black"
    >
      {/* SVG Definitions for our high-contrast seamless Op-Art pattern */}
      <svg className="absolute w-0 h-0">
        <defs>
          {/* 
            Perfect Repeating Op-Art Diamond Tile (120x120px)
            Calculated with a 50/50 gold/black duty cycle:
            Stroke width is 12px, step distance is 24px (12px stripe, 12px gap).
          */}
          <pattern id="op-art-gold-bg-pattern" width="120" height="120" patternUnits="userSpaceOnUse">
            <rect width="120" height="120" fill="transparent" />
            <g stroke="currentColor" strokeWidth="12" fill="none" strokeLinecap="square" strokeLinejoin="miter">
              {[12, 36, 60, 84, 108, 132, 156, 180, 204, 228, 252].map((r) => (
                <path
                  key={`diamond-${r}`}
                  d={`M 60,${60 - r} L ${60 + r},60 L 60,${60 + r} L ${60 - r},60 Z`}
                />
              ))}
            </g>
          </pattern>
        </defs>
      </svg>

      {/* Layer 1: Elegant Subtle Global Reveal when ANY part of the section is hovered */}
      <div 
        className="absolute inset-0 text-warm-bronze transition-opacity duration-700"
        style={{
          backgroundImage: 'url(#op-art-gold-bg-pattern)',
          backgroundSize: '120px 120px',
          opacity: isHovered ? 0.08 : 0.015,
        }}
      />

      {/* Layer 2: Interactive Spotlight Gold Reveal following mouse cursor */}
      <div 
        className="absolute inset-0 text-warm-bronze transition-opacity duration-500"
        style={{
          backgroundImage: 'url(#op-art-gold-bg-pattern)',
          backgroundSize: '120px 120px',
          opacity: isHovered ? 0.38 : 0,
          maskImage: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, black 10%, rgba(0,0,0,0.4) 45%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, black 10%, rgba(0,0,0,0.4) 45%, transparent 100%)`,
          filter: 'drop-shadow(0 0 8px rgba(197,168,128,0.3))',
        }}
      />

      {/* Ambient center radial glow for luxurious golden undertones */}
      <div 
        className="absolute inset-0 bg-radial-gradient from-warm-bronze/10 via-transparent to-transparent pointer-events-none transition-opacity duration-1000"
        style={{ opacity: isHovered ? 0.4 : 0.1 }}
      />

      {/* Dynamic Golden Floating Spark particles */}
      <div className="absolute inset-0 z-10 opacity-40">
        {[...Array(6)].map((_, i) => {
          const size = Math.random() * 2 + 1.5;
          const left = Math.random() * 100;
          const delay = Math.random() * 4;
          const duration = Math.random() * 8 + 10;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-tr from-warm-bronze to-yellow-100"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                bottom: `-5%`,
                boxShadow: '0 0 6px #dfb76c',
                opacity: 0,
              }}
              animate={{
                y: ['0vh', '-110vh'],
                x: [0, Math.sin(i) * 30, 0],
                opacity: [0, 0.4, 0.4, 0],
              }}
              transition={{
                duration: duration,
                delay: delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
