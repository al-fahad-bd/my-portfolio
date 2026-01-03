
import React from 'react';
import { Achievement } from '../types';

interface AchievementModalProps {
  achievement: Achievement | null;
  onClose: () => void;
}

const AchievementModal: React.FC<AchievementModalProps> = ({ achievement, onClose }) => {
  if (!achievement) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/95 backdrop-blur-md overflow-y-auto">
      {/* Centering wrapper with clean spacing */}
      <div className="w-full max-w-5xl py-4 flex justify-center">
        <div className="relative w-full bg-[#c5c9d0] border-[2px] border-black/40 shadow-[0_30px_70px_rgba(0,0,0,0.8)] machined-surface overflow-hidden animate-in zoom-in duration-300">
          
          {/* Beveled Top Plate / Header */}
          <div className="bg-[#1a1c1e] text-white p-3 md:p-5 flex justify-between items-center border-b-[4px] border-blue-600">
            <div className="flex items-center space-x-3">
              <div className="w-2.5 h-2.5 bg-blue-600 animate-pulse rounded-full shadow-[0_0_8px_#2563eb]"></div>
              <div className="flex flex-col">
                <span className="font-mono text-[7px] uppercase tracking-[0.4em] text-white/40">VALIDATION_UPLINK</span>
                <h2 className="font-black text-xs md:text-lg uppercase tracking-tighter leading-none">{achievement.title}</h2>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="interactive px-3 py-1.5 bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500 text-white font-mono text-[9px] uppercase tracking-widest transition-all"
            >
              [ DISMISS ]
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-col lg:flex-row">
            {/* Visual Asset Container - Naturally sized to content */}
            <div className="w-full lg:w-2/3 bg-black relative flex items-center justify-center overflow-hidden">
               {achievement.imageUrl ? (
                 <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
                    {/* Decorative Subtle Overlay */}
                    <div className="absolute inset-0 z-10 pointer-events-none opacity-10 blueprint-lines"></div>
                    
                    <img 
                      src={achievement.imageUrl} 
                      alt={achievement.title} 
                      className="max-w-full h-auto max-h-[70vh] object-contain shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-700" 
                    />

                    {/* Corner Target Markers */}
                    <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/20"></div>
                    <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20"></div>
                    <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/20"></div>
                    <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/20"></div>
                 </div>
               ) : (
                 <div className="w-full h-64 flex items-center justify-center text-white/20 font-mono text-xs italic">
                   NO_VISUAL_ASSET_AT_THIS_NODE
                 </div>
               )}
            </div>

            {/* Metadata Sidebar */}
            <div className="w-full lg:w-1/3 p-6 md:p-8 border-t lg:border-t-0 lg:border-l border-black/10 flex flex-col bg-white/40 backdrop-blur-sm">
               <div className="space-y-6">
                 <div>
                   <span className="font-mono text-[8px] text-blue-600 font-bold uppercase tracking-[0.3em] mb-3 block">REGISTRY_METADATA</span>
                   <div className="space-y-3">
                     <div className="debossed-panel p-3 bg-white/20">
                        <span className="font-mono text-[6px] text-black/40 uppercase block mb-0.5">ISSUING_ENTITY</span>
                        <span className="font-black text-slate-800 uppercase text-xs leading-tight">{achievement.issuer}</span>
                     </div>
                     <div className="debossed-panel p-3 bg-white/20">
                        <span className="font-mono text-[6px] text-black/40 uppercase block mb-0.5">EXECUTION_DATE</span>
                        <span className="font-black text-slate-800 uppercase text-xs leading-tight">{achievement.date}</span>
                     </div>
                   </div>
                 </div>

                 <div>
                    <span className="font-mono text-[8px] text-blue-600 font-bold uppercase tracking-[0.3em] mb-3 block">TECHNICAL_ABSTRACT</span>
                    <div className="border-l-2 border-black/5 pl-3 py-1">
                      <p className="text-[11px] font-mono text-slate-600 leading-relaxed uppercase italic">
                        {achievement.description}
                      </p>
                    </div>
                 </div>
               </div>

               {/* Functional Seal */}
               <div className="pt-5 border-t border-black/5 flex justify-between items-end mt-8">
                  <div className="font-mono text-[6px] text-black/30 uppercase leading-loose tracking-widest">
                    VERIFIED_BY<br />
                    PRECISION_CORE<br />
                    0x77-SYS-FINAL
                  </div>
                  <div className="w-10 h-10 rounded-full border border-blue-600/10 flex items-center justify-center relative">
                     <div className="absolute inset-0 rounded-full border border-blue-600/20 animate-ping opacity-10"></div>
                     <div className="w-6 h-6 rounded-full border border-blue-600/30 animate-spin-slow"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementModal;
