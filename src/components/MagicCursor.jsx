'use client';

import React, { useEffect, useState } from 'react';

const MagicCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trails, setTrails] = useState([]);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check if the device has a fine pointer (usually a mouse/desktop)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsDesktop(mediaQuery.matches);
    
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Add a new sparkle to the trail
      const newSparkle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 6 + 2, // Random size between 2px and 8px
        color: ['#fbbf24', '#f472b6', '#c084fc', '#ffffff'][Math.floor(Math.random() * 4)]
      };

      setTrails((prev) => [...prev, newSparkle]);

      // Remove the sparkle after short animation
      setTimeout(() => {
        setTrails((prev) => prev.filter((t) => t.id !== newSparkle.id));
      }, 500); 
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      {/* Main Cursor Glow */}
      <div 
        className="fixed pointer-events-none z-[9999] rounded-full mix-blend-screen transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '20px',
          height: '20px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(236,72,153,0.8) 0%, rgba(236,72,153,0) 70%)',
          boxShadow: '0 0 15px rgba(251, 191, 36, 0.5)'
        }}
      />
      {/* Sparkle Trails */}
      {trails.map((sparkle) => (
        <div
          key={sparkle.id}
          className="fixed pointer-events-none z-[9998] rounded-full animate-ping"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            background: sparkle.color,
            transform: 'translate(-50%, -50%)',
            opacity: 0.8
          }}
        />
      ))}
    </>
  );
};

export default MagicCursor;
