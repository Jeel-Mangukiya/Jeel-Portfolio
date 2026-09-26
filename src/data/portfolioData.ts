import type { Project, SkillCategory, Experience, Education, Achievement } from '../types';

export const PERSONAL_INFO = {
  name: "Jeel Mangukiya",
  title: "Full Stack Software Developer",
  tagline: "I build scalable, modern and user-focused web applications.",
  subtext: "Computer Science & Engineering graduate passionate about transforming complex engineering challenges into seamless, high-performance digital experiences.",
  location: "Bhavnagar, Gujarat, India",
  email: "jeel09896@gmail.com",
  github: "https://github.com/Jeel-Mangukiya",
  linkedin: "https://www.linkedin.com/in/jeel-mangukiya-7a7052253/",
  twitter: "https://x.com/jeelmangukiya",
  availableForWork: true,
  stats: [
    { label: "Graduation Year", value: "2026", sub: "PDEU B.Tech CSE" },
    { label: "Production Apps", value: "4+", sub: "Full Stack & AI" },
    { label: "Tech Stack Known", value: "10+", sub: "Modern Web Tech" },
    { label: "Internship Duration", value: "5 Months", sub: "Helios Infotech" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    iconName: "Layout",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript (ES6+)" },
      { name: "Tailwind CSS" },
      { name: "HTML5 & CSS3" }
    ]
  },
  {
    title: "Backend Development",
    iconName: "Server",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" }
    ]
  },
  {
    title: "Databases & ORM",
    iconName: "Database",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "MySQL" }
    ]
  },
  {
    title: "Authentication & Payments",
    iconName: "ShieldCheck",
    skills: [
      { name: "JWT" },
      { name: "Clerk" }
    ]
  },
  {
    title: "Tools & DevOps",
    iconName: "Wrench",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Postman" },
      { name: "Vite" }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "helios-internship",
    company: "Helios Infotech",
    role: "Software Developer Intern",
    period: "Jan 2026 – May 2026",
    location: "Surat, Gujarat, India",
    type: "Internship",
    bullets: [
      "Engineered an AI-powered website generation platform enabling users to generate fully functional multi-page websites using simple natural language prompts.",
      "Integrated prompt-based website generation pipeline, JWT/Clerk authentication, credit-based user quota management, and Stripe payment gateway for seamless monetized SaaS.",
      "Spearheaded development using the MERN stack (MongoDB, Express.js, React.js, Node.js) along with Tailwind CSS and Framer Motion for modern, responsive user interfaces.",
      "Architected and built a real-time collaborative document editor featuring rich-text formatting, live cursor presence, commenting system, reusable templates, and PDF/Markdown document export."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API", "WebSockets", "Tailwind CSS", "TypeScript"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "ai-site-builder",
    title: "AI Website Builder",
    subtitle: "Prompt-Based SaaS Platform",
    tagline: "Generate production-grade responsive websites in seconds using natural language prompts.",
    problem: "Small businesses and individual developers spend days writing repetitive layout code and configuring boilerplate components when launching landing pages.",
    solution: "Built a full-stack AI SaaS platform that accepts natural language prompts, interprets component structures using LLM APIs, renders dynamic live previews, and allows instant code export with Stripe credit billing.",
    keyFeatures: [
      "Prompt-to-Website Generation with real-time streaming preview",
      "Stripe payment integration with credit-based usage tiering",
      "Secure user authentication & user project dashboard",
      "Interactive drag-and-drop section customization",
      "One-click HTML/React component export"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Stripe", "Clerk / JWT"],
    category: "AI & Web3",
    githubUrl: "https://github.com/Jeel-Mangukiya/Site-Builder.git",
    liveUrl: "https://sitebuilder-rouge.vercel.app/",
    featured: true,
    image: "ai-builder-preview",
    highlights: [
      "Generated 50+ website templates automated by AI logic",
      "Integrated Stripe webhook notifications for sub-second credit updates"
    ],
    metrics: "Instant 5-sec Web Generation"
  },
  {
    id: "tripmate",
    title: "TripMate – Smart Travel Itinerary Planner",
    subtitle: "AI Travel Companion & Budget Manager",
    tagline: "Effortlessly plan multi-day personalized trips with smart AI itineraries and interactive map routes.",
    problem: "Travelers waste hours researching destinations, structuring daily activity schedules, and managing trip budgets across fragmented apps and spreadsheets.",
    solution: "Developed TripMate, an all-in-one travel planner that crafts tailored day-by-day itineraries based on duration, travel style, and budget constraints with embedded interactive maps.",
    keyFeatures: [
      "AI-driven smart itinerary generation based on interests & group size",
      "Interactive map visualizer showing optimal daily routes",
      "Real-time expense estimator & multi-currency budget tracker",
      "Bookmark destinations, export PDF itineraries, and share with travel partners"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Google Maps API"],
    category: "Full Stack",
    githubUrl: "https://github.com/jeelmangukiya/tripmate-travel-planner",
    liveUrl: "https://tripmate-planner.vercel.app",
    featured: true,
    image: "tripmate-preview",
    highlights: [
      "Type-safe Prisma ORM queries reducing database latency by 35%",
      "Interactive map markers with route optimization"
    ],
    metrics: "1,000+ Travel Plans Created"
  },
  {
    id: "docsapp-eight",
    title: "Real-Time Collaborative Document Editor",
    subtitle: "Multiplayer Rich-Text Workspace",
    tagline: "Collaborate simultaneously with live presence, rich-text formatting, comments, and multi-format export.",
    problem: "Modern remote teams require seamless, low-latency document collaboration without file sync conflicts or lost changes.",
    solution: "Engineered a real-time multiplayer document editor using WebSockets for ultra-low latency cursor tracking, rich-text editing, granular commenting, and template management.",
    keyFeatures: [
      "Real-time multiplayer text editing with WebSockets / Socket.io",
      "Live cursor presence indicators with team avatars",
      "Inline comment threads with resolve/reply capabilities",
      "Pre-designed document templates (Resume, Meeting Notes, PRD)",
      "Multi-format document export to PDF, HTML, and Markdown"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    category: "Real-Time",
    githubUrl: "https://github.com/jeelmangukiya/collaborative-doc-editor",
    liveUrl: "https://docsapp-eight.vercel.app",
    featured: true,
    image: "collab-editor-preview",
    highlights: [
      "Sub-50ms sync latency across concurrent client connections",
      "Built during internship at Helios Infotech as a core platform module"
    ],
    metrics: "Sub-50ms Latency Sync"
  },
  {
    id: "genmode",
    title: "GenMode – Gen-Z Translator",
    subtitle: "Interactive Slang & Tone Converter",
    tagline: "Bridge the generational communication gap with instant Gen-Z internet slang translation.",
    problem: "Modern internet culture rapidly invents slang, acronyms, and subtle contextual tones that confuse casual readers or recruiters.",
    solution: "Created GenMode, a crisp interactive translation app that converts standard text into authentic Gen-Z slang and vice versa with custom vibe intensity toggles.",
    keyFeatures: [
      "Bidirectional translation: Standard English ↔ Gen-Z Slang",
      "Slang dictionary with origin breakdowns and example usage",
      "Vibe intensity slider (Low Chill to Maximum Brainrot)",
      "One-click audio text-to-speech and social share buttons"
    ],
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "REST API"],
    category: "Tools",
    githubUrl: "https://github.com/Jeel-Mangukiya/GenMode.git",
    liveUrl: "https://genmode-translator.vercel.app",
    featured: true,
    image: "genmode-preview",
    highlights: [
      "Engaging micro-interactions built with Framer Motion spring physics",
      "Lightweight standalone client-side engine"
    ],
    metrics: "50,000+ Phrases Translated"
  }
];

export const EDUCATION: Education = {
  institution: "Pandit Deendayal Energy University (PDEU)",
  degree: "Bachelor of Technology (B.Tech)",
  field: "Computer Science & Engineering",
  period: "2022 – 2026",
  location: "Gandhinagar, Gujarat, India",
  highlights: [
    "Specialization in Software Engineering, Full Stack Web Architecture, and Database Systems.",
    "Active member of developer clubs and tech symposiums.",
    "Comprehensive coursework: Data Structures & Algorithms, Object-Oriented Programming, Computer Networks, Operating Systems, and Database Management Systems."
  ]
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    title: "Software Developer Intern",
    category: "Experience",
    description: "Selected for Software Developer Internship at Helios Infotech, engineering AI & real-time SaaS applications.",
    icon: "Briefcase",
    stat: "Helios Infotech",
    statLabel: "Internship 2026",
    date: "2026"
  },
  {
    id: "ach-2",
    title: "B.Tech CSE Graduate",
    category: "Academic",
    description: "Completed 4-year Computer Science & Engineering degree at Pandit Deendayal Energy University (PDEU).",
    icon: "GraduationCap",
    stat: "2022–2026",
    statLabel: "PDEU Graduate",
    date: "2026"
  },
  {
    id: "ach-3",
    title: "Full Stack Mastery",
    category: "Projects",
    description: "Architected 4+ full-stack projects with MongoDB, React, Node, Express.js, and TypeScript.",
    icon: "Code2",
    stat: "Full Stack Projects",
    statLabel: "Built & Deployed",
    date: "2026"
  },
  {
    id: "ach-4",
    title: "AI & Real-Time Innovation",
    category: "Technical",
    description: "Built prompt-to-website generation engines and sub-50ms WebSockets collaborative tools.",
    icon: "Zap",
    stat: "AI & WebSockets",
    statLabel: "Specialized Stack",
    date: "2026"
  }
];
