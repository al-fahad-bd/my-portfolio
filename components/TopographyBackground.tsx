
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
        opacity: 0.1 + i * 0.005 // Increased base opacity (was 0.02) and step (was 0.002)
      });
    }
    return paths;
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Precision Light Source Follower - Concentrated to prevent bleed */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[80px] bg-white/20 opacity-40 transition-transform duration-[400ms] ease-out"
        style={{
          transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)`
        }}
      ></div>

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="grad-center" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="black" stopOpacity="0.1" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </radialGradient>
          <pattern id="hex-grid" x="0" y="0" width="50" height="86.6" patternUnits="userSpaceOnUse">
            {/* Hexagon Tiling Logic: Height 86.6 (50*sqrt(3)), Width 50? No.
                Standard Hex: Side S=28.8. Width roughly 50. Height roughly 50.
                Let's use a simpler path that tiles a standard rectangular block. 
                Vertical spacing: 1.5 * S. Horizontal spacing: sqrt(3) * S.
            */}
            <path d="M 25 0 L 50 14.43 L 50 43.3 L 25 57.73 L 0 43.3 L 0 14.43 Z" fill="none" stroke="black" strokeWidth="0.8" strokeOpacity="0.1" />
          </pattern>
          <pattern id="hex-mesh" x="0" y="0" width="60" height="103.92" patternUnits="userSpaceOnUse">
            <path d="M30 0 L60 17.32 L60 51.96 L30 69.28 L0 51.96 L0 17.32 Z" fill="none" stroke="black" strokeWidth="0.7" strokeOpacity="0.08" />
            <path d="M30 0 L60 17.32 L60 51.96 L30 69.28 L0 51.96 L0 17.32 Z" fill="none" stroke="black" strokeWidth="0.7" strokeOpacity="0.08" transform="translate(30, 51.96)" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#hex-mesh)" />

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

          {/* Hexagonal Geometric Units */}
          <path
            d="M 200 700 L 286.6 750 L 286.6 850 L 200 900 L 113.4 850 L 113.4 750 Z"
            fill="none"
            stroke="black"
            strokeWidth="0.5"
            strokeOpacity="0.2"
            strokeDasharray="5,5"
          />
          <path
            d="M 200 700 L 200 900 M 113.4 750 L 286.6 850 M 286.6 750 L 113.4 850"
            stroke="black"
            strokeWidth="0.3"
            strokeOpacity="0.15"
          />

        </g>
      </svg>
    </div>
  );
};

export default TopographyBackground;
