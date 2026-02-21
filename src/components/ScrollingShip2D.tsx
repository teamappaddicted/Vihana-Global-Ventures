'use client';

import { useEffect, useState } from 'react';

export default function ScrollingShip2D() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const progress = Math.min(scrolled / 800, 1); // Animate over 800px
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate position - ship moves vertically down as user scrolls
  const yPosition = -200 + scrollProgress * 500; // Moves from -200px to 300px

  return (
    <div
      className="fixed left-12 top-1/4 z-20 pointer-events-none"
      style={{
        transform: `translateY(${yPosition}px)`,
        transition: 'none',
      }}
    >
      {/* 2D Cargo Ship SVG - Vertical orientation */}
      <svg width="100" height="140" viewBox="0 0 100 140" className="drop-shadow-lg">
        {/* Water wake effect */}
        <ellipse cx="50" cy="130" rx="35" ry="10" fill="#4fc3f7" opacity="0.5" />

        {/* Ship Hull - Vertical orientation */}
        <path
          d="M 15 60 L 20 90 L 80 90 L 85 60 Z"
          fill="#ff6b35"
          stroke="#d84315"
          strokeWidth="2"
        />

        {/* Waterline */}
        <line x1="15" y1="88" x2="85" y2="88" stroke="#0097a7" strokeWidth="1.5" />

        {/* Ship Superstructure - Bridge */}
        <rect x="35" y="35" width="30" height="28" fill="#003d82" stroke="#001f3f" strokeWidth="2" />

        {/* Windows on bridge */}
        <circle cx="40" cy="42" r="2" fill="#87ceeb" />
        <circle cx="50" cy="42" r="2" fill="#87ceeb" />
        <circle cx="60" cy="42" r="2" fill="#87ceeb" />
        <circle cx="40" cy="52" r="2" fill="#87ceeb" />
        <circle cx="50" cy="52" r="2" fill="#87ceeb" />
        <circle cx="60" cy="52" r="2" fill="#87ceeb" />

        {/* Cargo Containers - Stacked */}
        <rect x="20" y="70" width="14" height="14" fill="#00d4ff" stroke="#0097a7" strokeWidth="1" />
        <rect x="36" y="70" width="14" height="14" fill="#ffeb3b" stroke="#f57f17" strokeWidth="1" />
        <rect x="52" y="70" width="14" height="14" fill="#ff6b35" stroke="#d84315" strokeWidth="1" />

        {/* Mast */}
        <line x1="50" y1="35" x2="50" y2="5" stroke="#cccccc" strokeWidth="2" strokeDasharray="2,2" />

        {/* Radar Antenna */}
        <circle cx="50" cy="8" r="3" fill="#ffeb3b" />
        <path d="M 50 8 L 55 3 M 50 8 L 55 13 M 50 8 L 45 3 M 50 8 L 45 13" stroke="#ffeb3b" strokeWidth="1" />

        {/* Port/Starboard Lights */}
        <circle cx="18" cy="75" r="2.5" fill="#00ff00" />
        <circle cx="82" cy="75" r="2.5" fill="#ff0000" />

        {/* Flag at top */}
        <g transform="translate(50, 10)">
          <rect x="0" y="-2" width="18" height="12" fill="#ff6b35" stroke="#d84315" strokeWidth="1" />
          <text x="4" y="6" fontSize="6" fill="white" fontWeight="bold">EXPORT</text>
        </g>

        {/* Anchor point */}
        <circle cx="50" cy="100" r="2" fill="#666" />
        <line x1="50" y1="100" x2="50" y2="115" stroke="#666" strokeWidth="1" />
      </svg>
    </div>
  );
}

