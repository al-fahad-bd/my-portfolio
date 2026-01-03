
import React, { useState, useEffect } from 'react';
import TopographyBackground from './components/TopographyBackground';
import CustomCursor from './components/CustomCursor';
import ProjectModal from './components/ProjectModal';
import AchievementModal from './components/AchievementModal';
import ContactModal from './components/ContactModal';
import AIAssistant from './components/AIAssistant';
import { PROJECTS, SKILLS, EXPERIENCES, EDUCATION, ACHIEVEMENTS } from './constants';
import { Project, Skill, Experience, Education, Achievement } from './types';

const ExperienceModule: React.FC<{ exp: Experience; index: number }> = ({ exp, index }) => {
  return (
    <div className="relative pl-8 md:pl-12 group interactive mb-12 last:mb-0">
      {/* Timeline Indicator */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-black/10 group-hover:bg-blue-600/30 transition-colors duration-500">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#b8bcC2] border border-black/20 flex items-center justify-center">
          <div className={`w-1.5 h-1.5 rounded-full ${index === 0 ? 'bg-blue-600 animate-pulse shadow-[0_0_8px_#2563eb]' : 'bg-black/30'}`}></div>
        </div>
      </div>

      <div className="debossed-panel p-6 md:p-8 relative overflow-hidden transition-all duration-300 group-hover:bg-white/10">
        {/* Hex Bolt Detail */}
        <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-black/20 border border-white/20 shadow-inner"></div>

        <div className="mb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
            <span className="font-mono text-[8px] text-blue-600 font-bold tracking-[0.4em] uppercase">NODE_EXP_0x0{index + 1}</span>
            <span className="font-mono text-[9px] text-black/40 font-black uppercase tracking-widest bg-black/5 px-2 py-0.5">{exp.period}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight mb-1">{exp.role}</h3>
          <h4 className="text-sm font-mono font-bold text-slate-500 uppercase tracking-widest italic">{exp.company}</h4>
        </div>

        <ul className="space-y-3">
          {exp.description.map((desc, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 w-1 h-1 bg-blue-600 shrink-0"></span>
              <p className="text-[11px] md:text-xs font-mono text-slate-600 uppercase leading-relaxed">{desc}</p>
            </li>
          ))}
        </ul>

        {/* Decorative Progress Strip */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black/5">
          <div className="h-full bg-blue-600/40 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
        </div>
      </div>
    </div>
  );
};

const EducationModule: React.FC<{ edu: Education; index: number }> = ({ edu, index }) => {
  return (
    <div className="relative pl-8 md:pl-12 group interactive mb-12 last:mb-0">
      {/* Timeline Indicator */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-black/10 group-hover:bg-blue-600/30 transition-colors duration-500">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#b8bcC2] border border-black/20 flex items-center justify-center">
          <div className={`w-1.5 h-1.5 rounded-full ${index === 0 ? 'bg-blue-600 animate-pulse shadow-[0_0_8px_#2563eb]' : 'bg-black/30'}`}></div>
        </div>
      </div>

      <div className="debossed-panel p-6 md:p-8 relative overflow-hidden transition-all duration-300 group-hover:bg-white/10 border-blue-600/5">
        <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-black/20 border border-white/20 shadow-inner"></div>

        <div className="mb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
            <span className="font-mono text-[8px] text-blue-600 font-bold tracking-[0.4em] uppercase">ACAD_NODE_0x0{index + 1}</span>
            <span className="font-mono text-[9px] text-black/40 font-black uppercase tracking-widest bg-black/5 px-2 py-0.5">{edu.year}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight mb-1">{edu.degree}</h3>
          <h4 className="text-sm font-mono font-bold text-slate-500 uppercase tracking-widest italic">{edu.institution}</h4>
        </div>

        <ul className="space-y-3">
          {edu.details.map((detail, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 w-1 h-1 bg-blue-600 shrink-0"></span>
              <p className="text-[11px] md:text-xs font-mono text-slate-600 uppercase leading-relaxed">{detail}</p>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-black/5">
          <div className="h-full bg-blue-600/40 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
        </div>
      </div>
    </div>
  );
};

const AchievementModule: React.FC<{ ach: Achievement; index: number; onClick: () => void }> = ({ ach, index, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative group interactive cursor-none h-full"
    >
      <div className="debossed-panel p-5 md:p-6 bg-gradient-to-br from-white/5 to-transparent border-black/10 group-hover:border-blue-600/30 transition-all duration-500 overflow-hidden h-full flex flex-col group-hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)] group-active:translate-y-1">
        {/* Badge HUD Element */}
        <div className="flex justify-between items-start mb-4">
          <div className="font-mono text-[7px] text-black/30 uppercase tracking-[0.3em]">
            MOD_ACH_0x{index.toString(16).toUpperCase()}
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-black/20 group-hover:bg-blue-600 group-hover:shadow-[0_0_10px_#2563eb] transition-all duration-500"></div>
        </div>

        <div className="flex-1">
          <span className="font-mono text-[9px] text-blue-600 font-bold uppercase tracking-widest bg-blue-50 px-2 py-0.5 mb-2 inline-block">
            {ach.type === 'certification' ? 'CERT_VERIFIED' : ach.type === 'award' ? 'DISTINCTION' : 'MILESTONE'}
          </span>
          <h4 className="text-lg font-black text-slate-800 uppercase tracking-tight mb-1 leading-tight group-hover:text-blue-700 transition-colors">{ach.title}</h4>
          <p className="text-[8px] font-mono text-slate-500 uppercase tracking-widest mb-3 italic">
            ISSUER: {ach.issuer} // {ach.date}
          </p>
          <div className="w-full h-px bg-black/5 mb-3"></div>
          <p className="text-[10px] font-mono text-slate-600 leading-relaxed uppercase">
            {ach.description}
          </p>
        </div>

        {/* Tactical Instruction Overlay on Hover */}
        <div className="mt-4 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="font-mono text-[7px] text-blue-600/60 uppercase tracking-widest animate-pulse">INIT_VISUAL_DECRYPT &gt;&gt;</span>
        </div>

        {/* Decorative Engraving */}
        <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none transform rotate-12">
          <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const ProfileModule: React.FC = () => {
  return (
    <div className="relative group interactive cursor-none">
      {/* Precision Milled Frame */}
      <div className="relative w-full aspect-[3/4] max-w-[220px] md:max-w-[250px] mx-auto bg-[#b8bcC2] p-[2px] shadow-[20px_20px_50px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(255,255,255,0.9)] border border-black/10">

        {/* Recessed Internal Bevel */}
        <div className="absolute inset-1.5 border border-black/5 pointer-events-none z-20"></div>

        {/* Machine Head Bolts */}
        <div className="absolute top-1.5 left-1.5 w-1 h-1 rounded-full bg-black/40 border border-white/20 z-30"></div>
        <div className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-black/40 border border-white/20 z-30"></div>
        <div className="absolute bottom-1.5 left-1.5 w-1 h-1 rounded-full bg-black/40 border border-white/20 z-30"></div>
        <div className="absolute bottom-1.5 right-1.5 w-1 h-1 rounded-full bg-black/40 border border-white/20 z-30"></div>

        {/* The Portrait Container */}
        <div className="relative w-full h-full overflow-hidden bg-[#0d0f11] flex items-center justify-center">
          <img
            src="https://github.com/al-fahad-bd/my-portfolio/blob/main/assets/photos/abdullah_al_fahad.png?raw=true"
            alt="Abdullah Al Fahad"
            className="w-full h-full object-cover grayscale contrast-110 brightness-[0.85] group-hover:brightness-105 group-hover:contrast-[1.25] group-hover:scale-[1.02] transition-all duration-700 ease-in-out"
          />

          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')] z-10"></div>
          <div className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.12] transition-opacity duration-700 z-10 pointer-events-none bg-[radial-gradient(#1e4ed8_1px,transparent_1px)] [background-size:40px_40px]"></div>

          <div className="absolute inset-0 pointer-events-none overflow-hidden z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen">
            <div className="absolute left-0 w-full animate-scan-sweep h-px">
              <div className="absolute bottom-full left-0 w-full h-[150px] bg-gradient-to-t from-blue-600/50 via-blue-500/10 to-transparent"></div>
              <div className="absolute top-0 left-0 w-full h-[1.5px] bg-white shadow-[0_0_15px_#3b82f6,0_0_30px_#2563eb]">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-3 bg-blue-400 blur-lg rounded-full opacity-60"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-3 bg-blue-400 blur-lg rounded-full opacity-60"></div>
              </div>
            </div>
          </div>

          <div className="absolute top-3 left-3 z-30 flex gap-2">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse shadow-[0_0_8px_#2563eb]"></div>
          </div>

          <div className="absolute bottom-4 left-4 font-mono text-[7px] text-white/40 group-hover:text-blue-300/80 uppercase tracking-[0.4em] pointer-events-none drop-shadow-md z-30 transition-colors duration-500">
            <span className="opacity-50 group-hover:hidden">IDLE_STATE</span>
            <span className="hidden group-hover:inline animate-pulse">PRECISION_SCAN_ACTIVE</span>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 left-0 right-0 flex justify-center">
        <div className="bg-[#1a1c1e] text-white px-5 py-1.5 font-mono text-[8px] tracking-[0.6em] uppercase shadow-2xl border-x-2 border-blue-600 group-hover:bg-blue-600 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-500 translate-y-0 group-hover:-translate-y-1">
          BIOMETRIC_UNIT
        </div>
      </div>
    </div>
  );
};

const MobileDeviceFrame: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative interactive cursor-none shrink-0 w-[160px] md:w-[280px]"
    >
      <div className="relative w-full aspect-[9/19] bg-[#b8bcC2] rounded-[1.5rem] md:rounded-[2.5rem] border-[2px] md:border-[3px] border-[#9ca3af] shadow-[4px_4px_10px_rgba(0,0,0,0.15),-2px_-2px_5px_rgba(255,255,255,0.8)] md:shadow-[8px_8px_20px_rgba(0,0,0,0.15),-4px_-4px_10px_rgba(255,255,255,0.8)] p-2 md:p-3 transition-transform duration-500 hover:-rotate-2 hover:scale-[1.02]">
        <div className="absolute top-16 md:top-24 -left-[2px] md:-left-[3px] w-[2px] md:w-[3px] h-8 md:h-12 bg-[#8e949e] rounded-l-md border-y border-l border-black/20"></div>
        <div className="absolute top-32 md:top-40 -left-[2px] md:-left-[3px] w-[2px] md:w-[3px] h-8 md:h-12 bg-[#8e949e] rounded-l-md border-y border-l border-black/20"></div>
        <div className="absolute top-20 md:top-28 -right-[2px] md:-right-[3px] w-[2px] md:w-[3px] h-12 md:h-16 bg-[#8e949e] rounded-r-md border-y border-r border-black/20"></div>

        <div className="relative w-full h-full bg-[#1a1c1e] rounded-[1.2rem] md:rounded-[2rem] overflow-hidden border border-black/40 shadow-inner">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
            <span className="font-mono text-[7px] md:text-[9px] text-blue-400 mb-1 md:mb-2 tracking-widest uppercase">MODULE_OS_BOOT</span>
            <h4 className="text-sm md:text-xl font-black text-white uppercase leading-none mb-1 md:mb-2">{project.title}</h4>
            <p className="hidden md:block text-[10px] text-slate-300 font-mono uppercase leading-tight mb-4 whitespace-normal">
              {project.description}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-6 text-center">
        <span className="font-mono text-[8px] md:text-[10px] text-black/30 block mb-1 uppercase tracking-widest">00{project.id} // SYS_LNK</span>
        <h4 className="font-black text-[10px] md:text-xs uppercase tracking-widest text-slate-800 truncate px-2 md:px-4">{project.title}</h4>
      </div>
    </div>
  );
};

const SkillModule: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(skill.level);
    }, 500 + index * 100);
    return () => clearTimeout(timer);
  }, [skill.level, index]);

  const totalSegments = 20;
  const activeSegments = Math.round((animatedLevel / 100) * totalSegments);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`skill-card relative p-4 mb-2 debossed-panel border-none group interactive transition-colors duration-300 ${isHovered ? 'bg-white/10' : ''}`}
    >
      <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500/5 to-transparent transition-transform duration-700 pointer-events-none ${isHovered ? 'translate-x-0' : '-translate-x-full'}`}></div>
      <div className="relative flex justify-between items-end mb-3">
        <div className="flex flex-col">
          <span className="font-mono text-[8px] text-black/30 uppercase tracking-widest mb-1">UNIT_SKILL_0x{index.toString(16).toUpperCase()}</span>
          <h4 className={`font-mono text-xs font-black uppercase tracking-tight transition-colors duration-300 ${isHovered ? 'text-blue-600' : 'text-slate-800'}`}>{skill.name}</h4>
        </div>
        <div className="flex flex-col items-end">
          <span className={`font-mono text-[10px] font-black tabular-nums transition-colors duration-300 ${isHovered ? 'text-blue-600' : 'text-slate-500'}`}>
            {animatedLevel.toFixed(1)}%
          </span>
          <div className="w-10 h-[1px] bg-black/10"></div>
        </div>
      </div>
      <div className={`relative h-4 flex items-center p-1 border transition-colors duration-300 ${isHovered ? 'bg-blue-600/5 border-blue-600/10' : 'bg-black/5 border-black/5'}`}>
        <div className="segment-bar flex-1 h-2 flex gap-[1px]">
          {[...Array(totalSegments)].map((_, i) => (
            <div
              key={i}
              className={`segment ${i < activeSegments ? 'active' : ''}`}
              style={{
                transitionDelay: `${i * 10}ms`,
                backgroundColor: i < activeSegments ? (isHovered ? '#2563eb' : '#1a1c1e') : 'rgba(0,0,0,0.05)',
                boxShadow: (isHovered && i < activeSegments) ? '0 0 8px rgba(37,99,235,0.4)' : 'none'
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SocialLink: React.FC<{ platform: string; handle: string; url: string; index: number; icon: React.ReactNode }> = ({ platform, handle, url, index, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="block interactive group w-full">
      <div className={`relative p-5 md:p-6 transition-all duration-300 debossed-panel overflow-hidden ${isHovered ? 'bg-white/10 border-blue-600/20' : ''}`}>
        <div className="absolute top-0 right-0 p-2 overflow-hidden pointer-events-none">
          <div className={`font-mono text-[6px] text-black/10 uppercase tracking-widest transition-transform duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>NODE_EST_0x{index}</div>
        </div>
        <div className="flex items-center space-x-4">
          <div className={`w-10 h-10 border flex items-center justify-center transition-all duration-300 shrink-0 ${isHovered ? 'border-blue-600 bg-blue-600 text-white rotate-12 shadow-[0_0_15px_rgba(37,99,235,0.4)]' : 'border-black/10 bg-black/5 text-black/60'}`}>
            <div className="w-5 h-5 fill-current">{icon}</div>
          </div>
          <div className="min-w-0">
            <span className="font-mono text-[8px] text-black/30 block mb-0.5 uppercase tracking-widest truncate">PROTOCOL: {platform}</span>
            <h4 className={`text-xs md:text-sm font-black uppercase transition-colors duration-300 truncate ${isHovered ? 'text-blue-600' : 'text-slate-800'}`}>{handle}</h4>
          </div>
        </div>
      </div>
    </a>
  );
};

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [devTime, setDevTime] = useState('');
  const [visitorLoc, setVisitorLoc] = useState('DETECTING_LOC...');
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    // Update Time (GMT+6 - Asia/Dhaka)
    const timer = setInterval(() => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const timeStr = now.toLocaleTimeString('en-US', options);
      setDevTime(timeStr);

      // Availability check (Example: 9 AM to 10 PM GMT+6)
      const dhakaHour = parseInt(now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Dhaka', hour: '2-digit' }));
      setIsAvailable(dhakaHour >= 9 && dhakaHour < 22);
    }, 1000);

    // Detect Visitor Location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setVisitorLoc(`${pos.coords.latitude.toFixed(2)}°N, ${pos.coords.longitude.toFixed(2)}°E`);
        },
        () => {
          // Fallback to Timezone if geolocation is denied
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
          setVisitorLoc(tz.split('/').pop()?.toUpperCase() || 'NODE_UNKNOWN');
        }
      );
    } else {
      setVisitorLoc('COORDS_UNSUPPORTED');
    }

    return () => clearInterval(timer);
  }, []);

  const handleDownloadResume = () => {
    const googleDrivePdfUrl = 'https://docs.google.com/document/d/1j8dnDBnEFo9EvIgxm56VplUBbgSEvSbKLYpbcby2lss/edit?usp=sharing';
    window.open(googleDrivePdfUrl, '_blank');
  };

  const icons = {
    github: <svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>,
    linkedin: <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>,
    twitter: <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
    email: <svg viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099l3.83-3.104 5.612 8.118h-18.73l5.464-8.113zm9.201-1.259l4.623-3.746v9.458l-4.623-5.712z" /></svg>
  };

  const socialLinks = [
    { platform: 'GitHub', handle: '@abdullah-al-fahad', url: 'https://github.com', index: 1, icon: icons.github },
    { platform: 'LinkedIn', handle: 'Abdullah Al Fahad', url: 'https://linkedin.com', index: 2, icon: icons.linkedin },
    { platform: 'Twitter', handle: '@fahad_flutter', url: 'https://twitter.com', index: 3, icon: icons.twitter },
    { platform: 'Email', handle: 'fahad.dev@protocol.net', url: 'mailto:fahad.dev@protocol.net', index: 4, icon: icons.email }
  ];

  const projectTrack = [...PROJECTS, ...PROJECTS];

  return (
    <div className="min-h-screen flex flex-col items-center select-none overflow-x-hidden">
      <TopographyBackground />
      <CustomCursor />

      <main className="w-full max-w-[1440px] px-4 md:px-8 lg:px-16 py-8 md:py-12 flex flex-col relative">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-16 border-b border-black/10 pb-6 gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 border border-black flex items-center justify-center bg-white/50 shadow-sm shrink-0">
              <span className="font-mono text-xl font-black text-black/80">A</span>
            </div>
            <div className="font-mono text-[9px] text-black/40 leading-tight uppercase tracking-widest">
              <div className="flex items-center space-x-2">
                <span>DEV_TIME (GMT+6):</span>
                <span className="text-black font-black tabular-nums">{devTime || '--:--:--'}</span>
                <span className={`w-1.5 h-1.5 rounded-full ${isAvailable ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-orange-500'} animate-pulse`}></span>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <span>CLIENT_LOC:</span>
                <span className="text-black font-black">{visitorLoc}</span>
              </div>
            </div>
          </div>
          <div className="font-mono text-[9px] text-black/40 tracking-[0.4em] uppercase text-left md:text-right w-full md:w-auto flex flex-col items-start md:items-end">
            <span>REF: 2021-2024_DEV_CYCLE</span>
            <span className="text-[7px] mt-1 opacity-60">STATUS: {isAvailable ? 'ACTIVE_AND_AVAILABLE' : 'IDLE_OFFLINE_MODE'}</span>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="grid lg:grid-cols-[1fr_300px_450px] gap-8 md:gap-12 items-center mb-16 md:mb-24">
          <div className="relative order-1 lg:order-1">
            <div className="absolute -top-12 left-0 font-mono text-[10px] text-blue-600 font-bold opacity-60 hidden sm:block">
              // INITIALIZING_PERSONA
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[70px] xl:text-[90px] leading-[0.9] embossed-text mb-8 md:mb-12 tracking-tighter break-words">
              ABDULLAH<br />
              <span className="text-black/30">AL FAHAD</span>
            </h1>
            <div className="max-w-xl border-l-4 border-black pl-4 md:pl-8 py-2">
              <p className="text-lg md:text-2xl text-slate-700 font-bold leading-tight mb-8 uppercase">
                Flutter Developer with 2+ years of experience in engineering high-fidelity mobile systems.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleDownloadResume}
                  className="steel-btn px-6 md:px-8 py-3 md:py-4 font-mono text-[9px] md:text-[10px] font-black uppercase tracking-widest text-black/80 interactive w-full sm:w-auto"
                >
                  DOWNLOAD_SPECS_PDF
                </button>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="steel-btn px-6 md:px-8 py-3 md:py-4 font-mono text-[9px] md:text-[10px] font-black uppercase tracking-widest text-blue-600 interactive w-full sm:w-auto border-blue-600/30"
                >
                  OPEN_COMMAND_LINE
                </button>
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-2 flex justify-center py-8 lg:py-0">
            <ProfileModule />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 order-3">
            <div className="debossed-panel p-5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-1 h-full bg-blue-600 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
              <span className="font-mono text-[8px] text-black/40 uppercase block mb-1">DEV_EXPERIENCE</span>
              <h3 className="text-xl md:text-2xl font-black font-mono text-slate-800">2.0+ YEARS</h3>
            </div>
            <div className="debossed-panel p-5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-1 h-full bg-blue-600 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
              <span className="font-mono text-[8px] text-black/40 uppercase block mb-1">CORE_STACK</span>
              <h3 className="text-lg md:text-xl font-black font-mono text-slate-800">Flutter / Dart / Firebase / Supabase</h3>
            </div>
          </div>
        </section>

        {/* PROJECTS ASSEMBLY LINE SECTION */}
        <section id="projects" className="mt-16 md:mt-20 pt-16 border-t border-black/10 overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-xs font-mono font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Milled_Hardware_Assembly</h2>
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter italic">PRODUCTION_LINE</h3>
            </div>
            <div className="hidden lg:block font-mono text-[8px] text-black/30 uppercase tracking-[0.4em] mb-2">
              [ AUTO_SCROLL_ACTIVE // 0.05 m/s ]
            </div>
          </div>

          <div className="relative w-screen -mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 lg:px-16">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-black/10 z-10 shadow-[0_1px_0_rgba(255,255,255,0.5)]"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black/10 z-10 shadow-[0_-1px_0_rgba(255,255,255,0.5)]"></div>

            <div className="overflow-hidden">
              <div className="flex animate-mechanical-scroll gap-10 md:gap-16 py-12 md:py-20 px-8 w-fit">
                {projectTrack.map((proj, idx) => (
                  <MobileDeviceFrame
                    key={`${proj.id}-${idx}`}
                    project={proj}
                    onClick={() => setSelectedProject(proj)}
                  />
                ))}
              </div>
            </div>

            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--steel-bg)] to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--steel-bg)] to-transparent z-20 pointer-events-none"></div>
          </div>
        </section>

        <section id="skills" className="mt-24 md:mt-40 border-b border-black/10 pb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20">
            <div>
              <h2 className="text-xs font-mono font-black text-blue-600 uppercase tracking-[0.4em] mb-4">DIAGNOSTIC_REPORT</h2>
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter italic">SKILL_DISTRIBUTION</h3>
            </div>
          </div>
          <div className="grid lg:grid-cols-[2fr_1fr] gap-12 md:gap-16">
            <div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                {SKILLS.map((skill, i) => (
                  <SkillModule key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </div>
            <div className="bg-white/10 p-8 md:p-10 border border-black/10 flex flex-col justify-center relative shadow-sm h-fit self-center">
              <p className="text-sm font-mono text-slate-700 leading-relaxed uppercase font-bold italic">
                "Mobile interfaces are the physical bridge between humans and machine logic. My goal is to mill that bridge with surgical precision."
              </p>
              <div className="mt-8 font-mono text-[8px] text-black/30 uppercase tracking-widest">
                SYS_VERSION: 2.1.0-STABLE
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="mt-24 md:mt-40">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20">
            <div>
              <h2 className="text-xs font-mono font-black text-blue-600 uppercase tracking-[0.4em] mb-4">SYSTEM_LOGS_HISTORY</h2>
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter italic">CAREER_ARCHITECTURE</h3>
            </div>
          </div>
          <div className="max-w-4xl">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceModule key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="mt-24 md:mt-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20">
            <div>
              <h2 className="text-xs font-mono font-black text-blue-600 uppercase tracking-[0.4em] mb-4">ACADEMIC_FOUNDATION</h2>
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter italic">TECHNICAL_FORMATION</h3>
            </div>
          </div>
          <div className="max-w-4xl">
            {EDUCATION.map((edu, i) => (
              <EducationModule key={edu.institution} edu={edu} index={i} />
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS & CERTIFICATIONS SECTION */}
        <section id="achievements" className="mt-24 md:mt-40 pt-16 border-t border-black/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20">
            <div>
              <h2 className="text-xs font-mono font-black text-blue-600 uppercase tracking-[0.4em] mb-4">VALIDATED_CREDENTIALS</h2>
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter italic">CERT_AND_ACHIEVEMENTS</h3>
            </div>
            <div className="font-mono text-[9px] text-black/30 uppercase tracking-[0.4em] hidden md:block">
              [ SECURE_REGISTRY_LOCK // 0xAF92 ]
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACHIEVEMENTS.map((ach, i) => (
              <AchievementModule key={ach.title} ach={ach} index={i} onClick={() => setSelectedAchievement(ach)} />
            ))}
          </div>
        </section>

        {/* CONNECT INTERFACE SECTION */}
        <section id="connect" className="mt-24 md:mt-40">
          <div className="mb-12">
            <h2 className="text-xs font-mono font-black text-blue-600 uppercase tracking-[0.4em] mb-4">EXTERNAL_NODES</h2>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter italic">CONNECT_INTERFACE</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {socialLinks.map((link, i) => (
              <SocialLink key={link.platform} {...link} />
            ))}
          </div>
        </section>

        {/* REDESIGNED DIRECT COMMAND SECTION - MACHINED STEEL TOPOGRAPHY STYLE */}
        <section id="command" className="mt-24 md:mt-40 relative group interactive cursor-none">
          <div className="relative w-full bg-[#b8bcC2] p-1 shadow-[inset_-4px_-4px_10px_rgba(255,255,255,0.7),inset_4px_4px_10px_rgba(0,0,0,0.2),0_40px_80px_rgba(0,0,0,0.25)] border border-black/10">
            <div className="absolute top-4 left-4 w-3 h-3 bg-black/30 rounded-full border border-white/20 shadow-inner z-20"></div>
            <div className="absolute top-4 right-4 w-3 h-3 bg-black/30 rounded-full border border-white/20 shadow-inner z-20"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-black/30 rounded-full border border-white/20 shadow-inner z-20"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 bg-black/30 rounded-full border border-white/20 shadow-inner z-20"></div>

            <div className="relative overflow-hidden bg-[#0d0f11] min-h-[400px] flex flex-col items-center justify-center p-8 md:p-20 border-[3px] border-black/40 shadow-[inset_10px_10px_30px_rgba(0,0,0,0.8)]">
              <div className="absolute inset-0 opacity-[0.08] pointer-events-none scale-150">
                <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none" stroke="#3b82f6" strokeWidth="0.5">
                  {[...Array(20)].map((_, i) => (
                    <circle key={i} cx="500" cy="500" r={100 + i * 50} strokeDasharray="10,10" />
                  ))}
                </svg>
              </div>

              <div className="absolute top-0 left-0 w-full h-2 bg-[repeating-linear-gradient(45deg,#3b82f6,#3b82f6_10px,#0d0f11_10px,#0d0f11_20px)] opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-full h-2 bg-[repeating-linear-gradient(45deg,#3b82f6,#3b82f6_10px,#0d0f11_10px,#0d0f11_20px)] opacity-40"></div>

              <div className="absolute top-8 left-8 font-mono text-[8px] text-blue-500/60 uppercase tracking-widest hidden md:block">
                SYS_PWR: 440V_STABLE<br />
                FREQ: 60.00Hz
              </div>
              <div className="absolute top-8 right-8 font-mono text-[8px] text-blue-500/60 text-right uppercase tracking-widest hidden md:block">
                UPLINK_NODE: 0xFD92<br />
                LATENCY: 12ms_OPTIMAL
              </div>

              <div className="relative z-10 text-center max-w-2xl px-4">
                <div className="mb-6 flex justify-center items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse shadow-[0_0_15px_rgba(37,99,235,1)]"></div>
                  <span className="font-mono text-[10px] text-blue-400 uppercase tracking-[0.6em] font-black">DIRECT_LINK_STANDBY</span>
                </div>

                <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-12 leading-none italic drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  READY_FOR<br />
                  <span className="text-blue-500 opacity-80 group-hover:opacity-100 transition-opacity">OVERRIDE?</span>
                </h2>

                <div className="inline-block p-1 bg-black/40 shadow-inner rounded-sm border border-white/5 max-w-full">
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="relative interactive px-6 py-4 md:px-12 md:py-8 bg-gradient-to-br from-white via-[#e0e2e5] to-[#b8bcC2] text-black font-mono text-[10px] md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.4em] shadow-[0_10px_25px_rgba(0,0,0,0.5)] active:translate-y-1 active:shadow-none transition-all duration-300 border-x-4 border-blue-600 group/btn"
                  >
                    <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                    <span className="relative z-10">INITIATE_DIRECT_UPLINK</span>
                  </button>
                </div>

                <div className="mt-14 font-mono text-[7px] text-white/30 uppercase tracking-[1.5em] flex justify-center items-center">
                  <span className="w-8 md:w-12 h-px bg-white/10 mx-2 md:mx-4"></span>
                  AES_256_PROTOCOL_ACTIVE
                  <span className="w-8 md:w-12 h-px bg-white/10 mx-2 md:mx-4"></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-16 md:py-24 flex flex-col md:flex-row justify-between items-center opacity-40 gap-4">
          <div className="font-mono text-[8px] tracking-[0.5em] uppercase text-center md:text-left">
            (c) 2024 Abdullah Al Fahad // Built with Flutter_Mindset
          </div>
          <div className="font-mono text-[8px] font-black uppercase tracking-widest text-center">
            PRECISION_SYSTEMS_OVERRIDE_ENABLED
          </div>
        </footer>
      </main>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <AchievementModal achievement={selectedAchievement} onClose={() => setSelectedAchievement(null)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <AIAssistant />
    </div>
  );
};

export default App;
