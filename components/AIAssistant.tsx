
import React, { useState, useEffect, useRef } from 'react';
import { chatWithDeveloperAI } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', content: string}[]>([
    { role: 'bot', content: 'TERMINAL ONLINE. I am the virtual engineering overseer. Query Abdullah\'s technical repository here.' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);

    try {
      const botMsg = await chatWithDeveloperAI(userMsg);
      setMessages(prev => [...prev, { role: 'bot', content: botMsg }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'bot', content: 'SIGNAL_LOST: RE-ESTABLISHING_LINK...' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[70]">
      {isOpen ? (
        <div className="bg-[#c5c9d0] border-2 border-black w-[calc(100vw-3rem)] sm:w-80 md:w-96 shadow-2xl overflow-hidden flex flex-col h-[500px] max-h-[70vh] relative">
          {/* Header */}
          <div className="bg-black px-4 py-3 flex justify-between items-center shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 animate-pulse"></div>
              <span className="text-[10px] font-mono text-white tracking-[0.2em] font-bold">FAHAD_BOT_v1.0.4</span>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }} 
              className="text-white hover:text-red-500 font-mono text-[10px] interactive border border-white/20 px-2 py-0.5 hover:border-red-500 transition-colors"
            >
              [ TERMINATE_X ]
            </button>
          </div>
          
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-[10px] bg-[#d1d5db]/50 backdrop-blur-sm">
            {messages.map((m, i) => (
              <div key={i} className={`${m.role === 'user' ? 'text-right pl-8' : 'text-left pr-8'}`}>
                <div className="text-[8px] text-black/40 mb-1 uppercase">
                  {m.role === 'user' ? 'LOCAL_ACCESS' : 'REMOTE_DATA'}
                </div>
                <div className={`inline-block p-3 border-l-2 shadow-sm ${m.role === 'user' ? 'bg-white border-blue-600 text-black' : 'bg-black text-white border-slate-500'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="text-blue-600 animate-pulse flex items-center space-x-2">
                <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                <span>PROCESSING_NEURAL_QUERY...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-black flex space-x-2 bg-white/80 shrink-0">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="ENTER_CMD_OR_QUERY_"
              className="flex-1 bg-slate-100 border border-black/10 rounded-none px-3 py-2 text-[10px] font-mono focus:outline-none focus:border-blue-600 transition-colors"
            />
            <button 
              onClick={handleSend} 
              className="bg-black text-white px-4 py-2 hover:bg-blue-700 transition-colors interactive flex items-center justify-center shrink-0"
              disabled={isTyping}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="3" strokeLinecap="square"/>
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group interactive relative w-16 h-16 md:w-20 md:h-20 transition-all duration-300 transform hover:scale-105"
        >
          {/* Main Octagonal Steel Plate */}
          <div 
            className="absolute inset-0 bg-[#b8bcC2] border border-black/40 shadow-[4px_4px_10px_rgba(0,0,0,0.2),-2px_-2px_5px_rgba(255,255,255,0.7)] group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-500"
            style={{ 
              clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
              background: 'linear-gradient(135deg, #e0e2e5 0%, #b8bcC2 45%, #9499a1 100%)'
            }}
          >
            {/* Inner Etched Area */}
            <div 
              className="absolute inset-[3px] bg-black/5 border border-black/10"
              style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}
            ></div>
          </div>

          {/* Recessed Hex Screws */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black/20 border border-white/20 shadow-inner"></div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black/20 border border-white/20 shadow-inner"></div>
          <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-black/20 border border-white/20 shadow-inner"></div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-black/20 border border-white/20 shadow-inner"></div>

          {/* Central Branding */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-1">
            <div className="font-mono text-lg md:text-xl font-black text-black/70 group-hover:text-blue-600 transition-colors duration-300 select-none drop-shadow-[1px_1px_0px_rgba(255,255,255,0.5)]">
              AI
            </div>
            <div className="font-mono text-[7px] md:text-[8px] text-black/40 font-bold uppercase tracking-widest group-hover:text-blue-500/60 transition-colors">
              CORE_OS
            </div>
          </div>

          {/* Recessed Status LED - Moved to Top Right Corner */}
          <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-black/20 border border-black/30 flex items-center justify-center overflow-hidden">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(37,99,235,0.8)]"></div>
          </div>

          {/* Top Decorative Line */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-black/10"></div>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
