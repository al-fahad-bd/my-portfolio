
import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { getAIProjectInsight } from '../services/geminiService';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [insight, setInsight] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (project) {
      const fetchInsight = async () => {
        setLoading(true);
        const res = await getAIProjectInsight(project.title, project.longDescription || project.description);
        setInsight(res);
        setLoading(false);
      };
      fetchInsight();
    } else {
      setInsight('');
    }
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center p-2 md:p-8 bg-slate-200/50 backdrop-blur-sm overflow-y-auto">
      {/* Scrollable Container Wrapper */}
      <div className="w-full flex justify-center py-4 md:py-0 md:min-h-full md:items-center">
        <div className="bg-white/95 border-2 border-black w-full max-w-4xl shadow-2xl relative machined-surface flex flex-col md:flex-row overflow-hidden">
          
          {/* Close Button Container - Sticky on Mobile, Absolute on Desktop */}
          <div className="sticky top-0 right-0 z-[70] flex justify-end p-2 md:absolute md:top-4 md:right-4 pointer-events-none w-full">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="pointer-events-auto text-black hover:text-red-600 font-mono text-[10px] bg-white/90 px-3 py-1.5 border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all active:bg-slate-100"
            >
              [ TERMINATE_X ]
            </button>
          </div>

          {/* Project Image Section */}
          <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-black/10 shrink-0">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-48 sm:h-64 md:h-full object-cover grayscale" 
            />
          </div>
          
          {/* Content Section */}
          <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col">
            <div className="mb-6">
              <span className="text-[9px] font-mono text-slate-400 block mb-1 uppercase tracking-widest">UNIT_REF: 0X-{project.id}F</span>
              <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tighter leading-tight break-words">
                {project.title}
              </h2>
              <div className="w-12 h-1 bg-black/10 mt-2"></div>
            </div>
            
            <div className="mb-8">
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* AI Insight Module */}
            <div className="mb-8 p-5 bg-black/[0.03] border-l-4 border-blue-600 relative overflow-hidden debossed-panel">
              <div className="absolute top-1 right-2 opacity-10">
                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                 </svg>
              </div>
              <h3 className="text-[9px] font-mono uppercase tracking-[0.2em] text-blue-600/60 mb-3 font-bold">
                // AI_ANALYTICS_STREAM
              </h3>
              <div className="min-h-[60px]">
                <p className="text-[11px] text-slate-600 italic font-mono leading-relaxed">
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
                      CRUNCHING_PRECISION_DATA...
                    </span>
                  ) : insight}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4 mt-auto">
              <button className="steel-btn text-black text-[9px] font-mono py-3 uppercase tracking-widest hover:text-blue-700 transition-all font-bold">
                ACCESS_SRC
              </button>
              <button className="border border-black text-black text-[9px] font-mono py-3 uppercase tracking-widest hover:bg-black/5 transition-all">
                INIT_PREVIEW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
