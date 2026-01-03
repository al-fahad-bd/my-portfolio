
import React, { useMemo, useEffect, useState } from 'react';

const TopographyBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const topoLines = useMemo(() => {
    const paths = [];
    for (let i = 0; i < 40; i++) {
      paths.push({
        r: 150 + i * 25,
        opacity: 0.02 + i * 0.002
      });
    }
    return paths;
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none blueprint-lines">
      {/* Precision Light Source Follower - Concentrated to prevent bleed */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full blur-[80px] bg-white/20 opacity-40 transition-transform duration-[400ms] ease-out"
        style={{ 
          transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)` 
        }}
      ></div>

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900">
        <defs>
          <radialGradient id="grad-center" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="black" stopOpacity="0.1" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Animated Central Mesh */}
        <g 
          className="transition-transform duration-500 ease-out"
          style={{ transform: `translate(${(mousePos.x - 720) * 0.02}px, ${(mousePos.y - 450) * 0.02}px)` }}
        >
          {topoLines.map((l, i) => (
            <circle 
              key={i} 
              cx="400" 
              cy="350" 
              r={l.r} 
              fill="none" 
              stroke="black" 
              strokeWidth="0.4" 
              strokeOpacity={l.opacity} 
            />
          ))}
        </g>

        {/* Parallax Secondary Circles */}
        <g 
          className="transition-transform duration-1000 ease-out"
          style={{ transform: `translate(${(mousePos.x - 720) * -0.015}px, ${(mousePos.y - 450) * -0.015}px)` }}
        >
          {topoLines.map((l, i) => (
            <circle 
              key={`sec-${i}`} 
              cx="1100" 
              cy="200" 
              r={l.r * 1.2} 
              fill="none" 
              stroke="black" 
              strokeWidth="0.3" 
              strokeOpacity={l.opacity * 0.5} 
            />
          ))}
        </g>

        {/* Modern Geometric Floating Units */}
        <g 
          className="transition-transform duration-300 ease-out"
          style={{ transform: `translate(${(mousePos.x - 720) * 0.05}px, ${(mousePos.y - 450) * 0.05}px)` }}
        >
          <rect x="100" y="700" width="200" height="200" fill="none" stroke="black" strokeWidth="0.2" strokeOpacity="0.1" strokeDasharray="5,5" />
          <line x1="100" y1="700" x2="300" y2="900" stroke="black" strokeWidth="0.2" strokeOpacity="0.1" />
          <line x1="300" y1="700" x2="100" y2="900" stroke="black" strokeWidth="0.2" strokeOpacity="0.1" />
        </g>
      </svg>
    </div>
  );
};

export default TopographyBackground;
