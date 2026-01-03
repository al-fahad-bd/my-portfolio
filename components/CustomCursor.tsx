
import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(target.tagName) || target.closest('.interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const animate = () => {
      setRotation(prev => (prev + 0.8) % 360);
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-[9999]"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className="relative flex items-center justify-center">
        {/* Refined Light Source Halo */}
        <div className={`absolute rounded-full blur-xl transition-all duration-500 ${isHovering ? 'w-32 h-32 bg-blue-500/10' : 'w-20 h-20 bg-white/10'}`}></div>
        
        {/* Outer Orbitals */}
        <div 
          className={`absolute border-[0.5px] border-black/30 transition-all duration-300 ${isHovering ? 'w-20 h-20 rounded-full' : 'w-14 h-14 rounded-none'}`}
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-black/40"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1 h-1 bg-black/40"></div>
        </div>

        {/* Inner Geometric Core */}
        <div 
          className={`absolute border-[0.5px] border-black transition-all duration-500 ${isHovering ? 'w-10 h-10' : 'w-8 h-8'}`}
          style={{ transform: `rotate(${-rotation * 2}deg)` }}
        ></div>

        {/* Crosshair Precision Lines */}
        <div className={`absolute w-[100px] h-[0.5px] transition-all bg-black/10 ${isHovering ? 'scale-x-125 opacity-100 bg-blue-600/30' : 'scale-x-100 opacity-50'}`}></div>
        <div className={`absolute h-[100px] w-[0.5px] transition-all bg-black/10 ${isHovering ? 'scale-y-125 opacity-100 bg-blue-600/30' : 'scale-y-100 opacity-50'}`}></div>
        
        {/* Technical HUD Overlay - Top Left Positioning */}
        <div className="absolute top-10 left-10 flex flex-col items-start min-w-[120px]">
           <div className={`font-mono text-[7px] font-black uppercase tracking-widest transition-colors duration-300 ${isHovering ? 'text-blue-600' : 'text-black/60'}`}>
             {isHovering ? 'TARGET_LOCKED' : 'INITIALIZING...'}
           </div>
           <div className={`h-[1px] transition-all duration-300 bg-black/20 ${isHovering ? 'w-full bg-blue-600/40' : 'w-1/2'}`}></div>
           <div className="flex gap-2 mt-1 opacity-40">
              <span className="font-mono text-[5px] text-black tracking-tighter">SCAN_READY_v7.2</span>
           </div>
        </div>

        {/* Dynamic Axis Readout - Bottom Right Positioning (Replaces NODE_0X_SYS) */}
        <div className="absolute top-8 right-8 flex flex-col items-end min-w-[80px]">
           <div className="flex flex-col items-end space-y-0.5">
             <div className="flex items-center space-x-2">
                <span className="font-mono text-[6px] text-black/30 uppercase">AXIS_X</span>
                <span className="font-mono text-[7px] text-black font-black tabular-nums">{Math.round(position.x)}</span>
             </div>
             <div className="flex items-center space-x-2">
                <span className="font-mono text-[6px] text-black/30 uppercase">AXIS_Y</span>
                <span className="font-mono text-[7px] text-black font-black tabular-nums">{Math.round(position.y)}</span>
             </div>
           </div>
           <div className="w-12 h-[0.5px] bg-black/20 mt-1"></div>
        </div>

        {/* Dynamic Point */}
        <div className={`w-1 h-1 bg-black transition-all ${isHovering ? 'scale-[3] bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.8)]' : 'scale-100'}`}></div>
      </div>
    </div>
  );
};

export default CustomCursor;
