import React from 'react';
import { cn } from './Layout';

export default function MysticCard({ children, className, glow = false }) {
  return (
    <div className={cn(
      "mystic-card relative overflow-hidden group",
      glow ? "border-mystic-400/40 shadow-lg shadow-mystic-400/40" : "",
      className
    )}>
      {/* Optional decorative corner pieces */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-mystic-500/30 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-mystic-500/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-mystic-500/30 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-mystic-500/30 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
