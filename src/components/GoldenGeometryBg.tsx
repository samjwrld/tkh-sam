import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface GoldenGeometryBgProps {
  id?: string;
  className?: string;
}

export default function GoldenGeometryBg({ 
  id = "golden-geo-pattern", 
  className = "" 
}: GoldenGeometryBgProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);
  const [closeness, setCloseness] = useState(0); // 0 (far) to 1 (at center)
  const [rotationAngle, setRotationAngle] = useState(0);

  // Refs for continuous smooth frame-rate independent rotation
  const closenessRef = useRef(0);
  const rotationAngleRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  // Raw motion values for smooth mouse tracking
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  // Smooth spring physics for fluid, luxury parallax tilt
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(rawMouseX, springConfig);
  const smoothY = useSpring(rawMouseY, springConfig);

  // Map normalized mouse (-1 to 1) to tilt rotations and subtle shifts
  const rotateX = useTransform(smoothY, [-1, 1], [10, -10]);
  const rotateY = useTransform(smoothX, [-1, 1], [-10, 10]);
  const translateX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const translateY = useTransform(smoothY, [-1, 1], [-18, 18]);

  // Continuous animation loop for dynamic rotation speed based on closeness to center
  useEffect(() => {
    let animId: number;
    const updateRotation = (time: number) => {
      if (lastTimeRef.current !== null) {
        const dt = (time - lastTimeRef.current) / 1000; // time delta in seconds
        
        // Base ambient speed: 6 deg/sec (60s full rotation)
        // Max center speed: 60 deg/sec (6s full rotation - 10x acceleration as cursor approaches center)
        const currentCloseness = closenessRef.current;
        const speed = 6 + currentCloseness * 54; 
        
        rotationAngleRef.current = (rotationAngleRef.current + speed * dt) % 360;
        setRotationAngle(rotationAngleRef.current);
      }
      lastTimeRef.current = time;
      animId = requestAnimationFrame(updateRotation);
    };

    animId = requestAnimationFrame(updateRotation);
    return () => cancelAnimationFrame(animId);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate center point of the element
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance between mouse pointer and element's center
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Max radius threshold for mapping distance to glow
      const maxDistance = Math.max(rect.width, rect.height) * 0.6 || 600;
      const normalizedCloseness = Math.max(0, 1 - distance / maxDistance);

      // Map distance to CSS variable --glow-blur (ranging from 6px far away to 48px at center)
      const glowBlurPx = Math.round(6 + normalizedCloseness * 42);
      containerRef.current.style.setProperty('--glow-blur', `${glowBlurPx}px`);

      // Calculate normalized viewport position for 3D tilt
      const normX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const normY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);

      rawMouseX.set(normX);
      rawMouseY.set(normY);

      // Coordinates relative to background container
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });

      // Check hover bounds
      const padding = 200;
      const inBounds = 
        e.clientX >= rect.left - padding && 
        e.clientX <= rect.right + padding && 
        e.clientY >= rect.top - padding && 
        e.clientY <= rect.bottom + padding;

      setIsHovered(inBounds);
      
      const activeCloseness = inBounds ? normalizedCloseness : 0;
      closenessRef.current = activeCloseness;
      setCloseness(activeCloseness);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [rawMouseX, rawMouseY]);

  const strokeColor = closeness > 0.6 ? '#FFE8B6' : closeness > 0.25 ? '#E8C58C' : '#C5A880';

  return (
    <div 
      id={id}
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 bg-black perspective-1000 ${className}`}
      style={{ perspective: '1200px', '--glow-blur': '10px' } as React.CSSProperties}
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

      {/* Main Interactive 3D Tilting & Rotating Geometric Pattern Frame */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Layer 1: Elegant Subtle Global Reveal when ANY part of the section is hovered */}
        <motion.div 
          className="absolute -inset-10 transition-opacity duration-700"
          animate={{
            color: strokeColor
          }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundImage: 'url(#op-art-gold-bg-pattern)',
            backgroundSize: '120px 120px',
            opacity: isHovered ? 0.08 + closeness * 0.05 : 0.02,
          }}
        />

        {/* Layer 2: Interactive Spotlight Gold Reveal following mouse cursor */}
        <motion.div 
          className="absolute -inset-10 transition-opacity duration-500"
          animate={{
            color: strokeColor
          }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundImage: 'url(#op-art-gold-bg-pattern)',
            backgroundSize: '120px 120px',
            opacity: isHovered ? 0.35 + closeness * 0.25 : 0,
            maskImage: `radial-gradient(${400 + closeness * 120}px circle at ${mousePos.x}px ${mousePos.y}px, black 15%, rgba(0,0,0,0.4) 50%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(${400 + closeness * 120}px circle at ${mousePos.x}px ${mousePos.y}px, black 15%, rgba(0,0,0,0.4) 50%, transparent 100%)`,
            filter: 'drop-shadow(0 0 var(--glow-blur) #A8875A)',
          }}
        />

        {/* Layer 3: Interactive SVG Sacred Geometry & Op-Art Emblem - Dynamic Speed & Glow based on Distance to Center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <svg
            className="w-[600px] h-[600px] sm:w-[850px] sm:h-[850px] transition-all duration-300"
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: `rotate(${rotationAngle}deg)`,
              stroke: strokeColor,
              filter: 'drop-shadow(0 0 var(--glow-blur) #A8875A)',
              opacity: isHovered ? 0.28 + closeness * 0.35 : 0.12
            }}
          >
            {/* Concentric Outer Sacred Geometry Rings */}
            <circle cx="400" cy="400" r="380" strokeWidth="1.5" strokeDasharray="6 6" />
            <circle cx="400" cy="400" r="350" strokeWidth="1" />
            <circle cx="400" cy="400" r="300" strokeWidth="2" />
            
            {/* Rotating Diamond Lattice Grid */}
            <g strokeWidth="1.5">
              {[0, 30, 60, 90, 120, 150].map((deg) => (
                <rect
                  key={deg}
                  x="150"
                  y="150"
                  width="500"
                  height="500"
                  transform={`rotate(${deg} 400 400)`}
                  fill="none"
                />
              ))}
            </g>

            {/* Inner Star / Compass Rose Geometry */}
            <path
              d="M 400 100 L 440 360 L 700 400 L 440 440 L 400 700 L 360 440 L 100 400 L 360 360 Z"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="400" cy="400" r="60" strokeWidth="2" />
            <circle cx="400" cy="400" r="12" fill={strokeColor} />
          </svg>
        </div>
      </motion.div>

      {/* Ambient center radial glow for luxurious golden undertones */}
      <div 
        className="absolute inset-0 bg-radial-gradient from-warm-bronze/10 via-transparent to-transparent pointer-events-none transition-opacity duration-1000"
        style={{ opacity: isHovered ? 0.35 + closeness * 0.3 : 0.15 }}
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
