
import { Project, Skill, Experience, Education, Achievement } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Plantera',
    description: 'A smart plant care and identification app designed to help users diagnose plant diseases and maintain healthy green spaces.',
    techStack: ['Flutter', 'GetX', 'Node.js', 'Firebase'],
    imageUrl: 'https://github.com/al-fahad-bd/my-portfolio/blob/main/photo/Screenshot_20260103-184636.png?raw=true',
    longDescription: 'Plantera is a design-focused plant management application built with Flutter and GetX, offering plant identification, disease diagnosis, and care guidance. The app leverages a scalable Node.js backend and Firebase services for real-time data handling, authentication, and cloud storage, delivering a smooth and reliable experience for plant lovers and gardeners.'
  },
  {
    id: '2',
    title: 'Titan-ERP',
    description: 'Enterprise resource planning system for industrial manufacturing plants.',
    techStack: ['Flutter Web', 'Firebase', 'Clean Architecture'],
    imageUrl: 'https://picsum.photos/seed/erp/800/600',
    longDescription: 'A robust, multi-platform dashboard for monitoring real-time CNC machine output, inventory logs, and supply chain telemetry.'
  },
  {
    id: '3',
    title: 'Steel-Secure',
    description: 'Military-grade encrypted messaging and wallet integration.',
    techStack: ['Flutter', 'Web3Dart', 'Biometrics', 'AES-256'],
    imageUrl: 'https://picsum.photos/seed/secure/800/600',
    longDescription: 'Focused on low-level security protocols and smooth biometric authentication flows with custom-milled UI transitions.'
  },
  {
    id: '4',
    title: 'Hydro-Sync',
    description: 'IoT-enabled irrigation and water management system interface.',
    techStack: ['Flutter', 'MQTT', 'Google Maps API'],
    imageUrl: 'https://picsum.photos/seed/hydro/800/600',
    longDescription: 'Integrated real-time sensor data streaming to provide a tactile control surface for large-scale agricultural operations.'
  },
  {
    id: '5',
    title: 'Aero-Flow',
    description: 'Real-time aviation telemetry and flight planning interface.',
    techStack: ['Flutter', 'Supabase', 'WebSockets', 'Custom Painter'],
    imageUrl: 'https://picsum.photos/seed/aero/800/600',
    longDescription: 'Designed for pilots to visualize complex weather patterns and cockpit telemetry with sub-16ms latency updates.'
  },
  {
    id: '6',
    title: 'Vulcan-Forge',
    description: 'IoT monitoring for high-temperature smelting furnaces.',
    techStack: ['Flutter', 'Bluetooth LE', 'Isar DB', 'Provider'],
    imageUrl: 'https://picsum.photos/seed/forge/800/600',
    longDescription: 'A ruggedized interface for foundry technicians to monitor thermal stress and alloy composition through BLE sensor arrays.'
  },
  {
    id: '7',
    title: 'Neuro-Graph',
    description: 'MedTech application for brain activity visualization.',
    techStack: ['Flutter', 'GraphQL', 'TensorFlow Lite', 'Riverpod'],
    imageUrl: 'https://picsum.photos/seed/neuro/800/600',
    longDescription: 'Utilized on-device ML to interpret EEG data and render 3D brain models in real-time for clinical research.'
  },
  {
    id: '8',
    title: 'Grid-Master',
    description: 'Smart city energy management and load balancing hub.',
    techStack: ['Flutter', 'D3.js integration', 'Node.js', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/seed/grid/800/600',
    longDescription: 'Orchestrates regional power distribution data, allowing grid operators to manage renewable energy surges via mobile terminal.'
  },
  {
    id: '9',
    title: 'Cargo-Link',
    description: 'Logistics tracking with massive offline-first architecture.',
    techStack: ['Flutter', 'SQLite', 'Hive', 'Background Fetch'],
    imageUrl: 'https://picsum.photos/seed/cargo/800/600',
    longDescription: 'Ensures zero data loss for long-haul shipping in areas with no connectivity, featuring seamless auto-sync protocols.'
  },
  {
    id: '10',
    title: 'Ion-Drive',
    description: 'Electric vehicle fleet manager and charging optimizer.',
    techStack: ['Flutter', 'Google Cloud Functions', 'Stripe', 'Animation Controller'],
    imageUrl: 'https://picsum.photos/seed/ion/800/600',
    longDescription: 'Optimizes battery longevity and charging schedules for commercial EV fleets with high-fidelity motion design.'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Dart/Flutter Specialist', level: 98, category: 'framework' },
  { name: 'C / C++ Engineering', level: 75, category: 'core' },
  { name: 'Python Automation', level: 65, category: 'core' },
  { name: 'Java Development', level: 70, category: 'core' },
  { name: 'MySQL / SQL Logic', level: 80, category: 'tool' },
  { name: 'Firebase Systems', level: 90, category: 'tool' },
  { name: 'Supabase Architecture', level: 90, category: 'tool' },
  { name: 'Blender 3D Modeling', level: 60, category: 'tool' },
  { name: 'UI/UX Interaction Design', level: 80, category: 'core' },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'SM Technology (Betopia Group)',
    role: 'Flutter Developer',
    period: 'April 2025 - Present',
    description: [
      'Architecting high-performance cross-platform mobile systems.',
      'Integrating advanced state management and real-time data sync.',
      'Leading UI/UX refinement for group-wide digital products.'
    ]
  },
  {
    company: 'Lab AR',
    role: 'Junior Flutter Developer',
    period: 'September 2024 - March 2025',
    description: [
      'Developed AR-integrated mobile experiences using Flutter.',
      'Optimized 3D rendering performance on consumer-grade hardware.',
      'Collaborated on low-level native bridge implementations.'
    ]
  },
  {
    company: 'Suffix IT',
    role: 'Application Developer Intern',
    period: 'February 2023 - July 2023',
    description: [
      'Explored Flutter framework internals and widget tree optimization.',
      'Built modular internal tools for development workflow automation.',
      'Maintained version control protocols and documentation standards.'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: 'Bangladesh Army University of Engineering and Technology (BAUET)',
    degree: 'B.Sc. in Computer Science and Engineering',
    year: 'Graduated 2023',
    details: [
      'Specialized in Software Engineering and Mobile Application Development.',
      'Completed intensive technical formation with a focus on high-precision systems.',
      'Active participation in regional engineering workshops and technical symposiums.'
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Google Cloud Skills Boost',
    issuer: 'Google Cloud',
    date: '2024',
    description: 'Verified competency in cloud architecture and data orchestration protocols.',
    type: 'certification',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000'
  },
  {
    title: 'Best Technical Project Award',
    issuer: 'BAUET Symposium',
    date: '2023',
    description: 'Awarded for exceptional engineering in cross-platform mobile architecture.',
    type: 'award',
    imageUrl: 'https://images.unsplash.com/photo-1496469888073-80de7e952517?q=80&w=1000'
  },
  {
    title: 'Open Source Contributor',
    issuer: 'Flutter Community',
    date: 'Ongoing',
    description: 'Active contribution to high-traffic Dart packages and framework core components.',
    type: 'milestone',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000'
  },
  {
    title: 'Mobile Security Specialist',
    issuer: 'Cyber Defense Initiative',
    date: '2024',
    description: 'Certification in AES-256 implementation and biometric authentication security.',
    type: 'certification',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000'
  }
];
