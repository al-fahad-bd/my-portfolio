
import React from 'react';

const Navigation: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-full px-6 py-3 glossy-finish">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-sky-500 rounded-sm transform rotate-45 flex items-center justify-center">
            <span className="text-white font-bold text-xs transform -rotate-45">S</span>
          </div>
          <span className="font-mono text-xl font-bold tracking-tighter text-slate-100">STEEL.TOPO</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {['home', 'projects', 'skills', 'experience', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-sky-400 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        <button 
          onClick={() => scrollTo('contact')}
          className="bg-sky-600 hover:bg-sky-500 text-white text-xs font-mono px-4 py-2 rounded-full transition-all neon-glow"
        >
          INITIATE_CONTACT
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
