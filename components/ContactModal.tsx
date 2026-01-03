
import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isTransmitting, setIsTransmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTransmitting(true);

    // Construct mailto link
    const mailtoLink = `mailto:fahad.bauet@gmail.com?subject=${encodeURIComponent(formData.subject || 'Direct Inquiry from Portfolio')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    // Simulate industrial transmission lag for aesthetics
    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsTransmitting(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center p-6 md:p-12 bg-slate-900/90 backdrop-blur-md overflow-y-auto transition-all duration-300">
      {/* Container with vertical margins to guarantee a gap from viewport edges */}
      <div className="w-full max-w-xl my-auto py-8 animate-in fade-in zoom-in duration-300">
        
        {/* Main Modal Body - Redesigned for a "Milled Slab" look instead of two separate layers */}
        <div className="relative bg-[#c5c9d0] border-[1px] border-black/40 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_-1px_-1px_0px_rgba(255,255,255,0.6),inset_1px_1px_0px_rgba(0,0,0,0.2)] machined-surface overflow-hidden">
          
          {/* Beveled Edge - Simulating a thick steel plate */}
          <div className="absolute inset-0 pointer-events-none border-b-[6px] border-r-[6px] border-black/20"></div>
          
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-black/10 pointer-events-none"></div>
          <div className="absolute bottom-1 right-1 w-8 h-8 border-b-2 border-r-2 border-black/10 pointer-events-none"></div>

          {/* Header Strip - High Precision Layout */}
          <div className="bg-[#1a1c1e] text-white p-4 md:p-5 flex flex-row justify-between items-center border-b-[3px] border-blue-600 gap-4">
            <div className="flex items-center space-x-3 min-w-0 flex-1">
              <div className="w-2.5 h-2.5 bg-blue-600 animate-pulse shrink-0"></div>
              <span className="font-mono text-[9px] md:text-[11px] uppercase tracking-[0.2em] font-black truncate">
                SECURE_UPLINK_NODE: 0xFD
              </span>
            </div>
            <button 
              onClick={onClose}
              className="interactive text-white/70 hover:text-red-500 font-mono text-[8px] md:text-[10px] border border-white/10 px-3 py-1.5 hover:border-red-500 hover:bg-red-500/20 transition-all uppercase tracking-widest shrink-0 whitespace-nowrap"
            >
              [ DISCONNECT ]
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-5 md:p-10 space-y-5 md:space-y-7 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div className="space-y-2">
                <label className="font-mono text-[9px] text-black/60 uppercase block tracking-[0.2em] font-bold">SOURCE_IDENT</label>
                <div className="relative">
                  <input 
                    required
                    type="text"
                    placeholder="NAME REQUIRED"
                    className="w-full bg-black/5 border border-black/10 debossed-panel px-4 py-3 font-mono text-xs focus:outline-none focus:border-blue-600 focus:bg-white transition-all placeholder:text-black/20"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-1 h-1 bg-black/10 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[9px] text-black/60 uppercase block tracking-[0.2em] font-bold">RETURN_ADDR</label>
                <div className="relative">
                  <input 
                    required
                    type="email"
                    placeholder="EMAIL REQUIRED"
                    className="w-full bg-black/5 border border-black/10 debossed-panel px-4 py-3 font-mono text-xs focus:outline-none focus:border-blue-600 focus:bg-white transition-all placeholder:text-black/20"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-1 h-1 bg-black/10 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-[9px] text-black/60 uppercase block tracking-[0.2em] font-bold">COMM_SUBJECT</label>
              <div className="relative">
                <input 
                  required
                  type="text"
                  placeholder="SUBJECT INPUT"
                  className="w-full bg-black/5 border border-black/10 debossed-panel px-4 py-3 font-mono text-xs focus:outline-none focus:border-blue-600 focus:bg-white transition-all placeholder:text-black/20"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-1 h-1 bg-black/10 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-[9px] text-black/60 uppercase block tracking-[0.2em] font-bold">DATA_PAYLOAD</label>
              <div className="relative">
                <textarea 
                  required
                  rows={4}
                  placeholder="ENTER MESSAGE BODY"
                  className="w-full bg-black/5 border border-black/10 debossed-panel px-4 py-4 font-mono text-xs focus:outline-none focus:border-blue-600 focus:bg-white transition-all resize-none placeholder:text-black/20"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
                <div className="absolute right-3 bottom-3 w-1.5 h-1.5 bg-black/10 rotate-45"></div>
              </div>
            </div>

            <div className="pt-2">
              <button 
                type="submit"
                disabled={isTransmitting}
                className={`interactive w-full steel-btn py-4 md:py-5 px-6 font-mono text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] flex items-center justify-center gap-3 md:gap-4 group transition-all relative overflow-hidden ${isTransmitting ? 'opacity-50 grayscale cursor-not-allowed' : 'hover:text-blue-700 hover:shadow-lg'}`}
              >
                {isTransmitting ? (
                  <>
                    <span className="animate-spin w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full"></span>
                    <span className="animate-pulse">TRANSMITTING...</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10 whitespace-normal text-center break-words">INITIATE_DATA_TRANSMISSION</span>
                    <svg className="w-4 h-4 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="3" strokeLinecap="square"/>
                    </svg>
                    <div className="absolute inset-0 bg-blue-600/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Footer Technical Metadata */}
          <div className="bg-black/5 border-t border-black/10 p-4 md:px-10 flex flex-col sm:flex-row justify-between items-center gap-2 opacity-70 relative z-10">
            <div className="font-mono text-[7px] md:text-[8px] uppercase tracking-widest flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-black/40 rotate-45 shrink-0"></div>
              TARGET_LINK: fahad.bauet@gmail.com
            </div>
            <div className="font-mono text-[7px] md:text-[8px] uppercase tracking-widest flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500/60 rounded-full shrink-0 animate-pulse"></div>
              UPLINK_STATUS: ENCRYPTION_VERIFIED
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
