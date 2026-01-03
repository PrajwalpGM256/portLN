export interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  category: string;
  year: string;
  color: string;
  github?: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "brocode",
    title: "Brocode",
    description: "AI-powered code review platform with GitHub webhook integration for automatic PR reviews using Gemini API",
    highlights: ["Automated PR reviews", "GitHub webhooks", "AI-powered analysis"],
    tech: ["FastAPI", "Python", "React", "Vite", "Gemini API"],
    category: "Full Stack",
    year: "2025",
    color: "#8b5cf6",
    github: "https://github.com/PrajwalpGM256/brocode",
    live: "https://brocode-six.vercel.app/",
    featured: true,
  },
  {
    id: "judgment-day",
    title: "JudgmentDay",
    description: "NFL fantasy league platform with team creation, league management, and live scoring via sports API",
    highlights: ["Live scoring", "League management", "Real-time updates"],
    tech: ["React", "Node.js", "Sports API", "Database"],
    category: "Full Stack",
    year: "2024",
    color: "#22c55e",
    featured: true,
  },
  {
    id: "ipl-analytics",
    title: "IPL Analytics",
    description: "Match prediction & player clustering analysis on IPL data (2008-2014) with score forecasting",
    highlights: ["Score prediction", "Player clustering", "Data visualization"],
    tech: ["Python", "Scikit-learn", "PCA", "K-means"],
    category: "Machine Learning",
    year: "2024",
    color: "#3b82f6",
    github: "https://github.com/PrajwalpGM256/ipl",
    featured: true,
  },
  {
    id: "maine-legislation",
    title: "Maine Legislation Analysis",
    description: "Web scraping & data exploration project for Sierra Club Maine — built database from scraped legislative data",
    highlights: ["Web scraping", "Database design", "Data exploration"],
    tech: ["Python", "Web Scraping", "SQL", "Data Analysis"],
    category: "Data Science",
    year: "2024",
    color: "#f97316",
    featured: true,
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "This site — built with React, Framer Motion, Lenis smooth scroll, and attention to detail",
    highlights: ["Smooth animations", "Responsive design", "Premium UX"],
    tech: ["React", "TypeScript", "Vite", "Framer Motion", "Lenis"],
    category: "Frontend",
    year: "2025",
    color: "#06b6d4",
    github: "https://github.com/PrajwalpGM256/portLN",
    featured: true,
  },
  {
    id: "besocial",
    title: "BeSocial",
    description: "Full-stack social media application with React frontend and Java backend",
    highlights: ["Social features", "REST API", "User auth"],
    tech: ["React", "Java", "REST API"],
    category: "Full Stack",
    year: "2024",
    color: "#ec4899",
    featured: false,
  },
  {
    id: "ride-sharing",
    title: "Ride Sharing Optimization",
    description: "Route optimization backend using Dijkstra's algorithm for efficient ride matching",
    highlights: ["Route optimization", "Dijkstra algorithm", "Ride matching"],
    tech: ["Python", "Dijkstra", "Algorithms"],
    category: "Backend",
    year: "2024",
    color: "#eab308",
    featured: false,
  },
  {
    id: "react-components",
    title: "React Components",
    description: "Collection of reusable React components — navbar, modal, sidebar, and more",
    highlights: ["Reusable UI", "Component library", "Modular design"],
    tech: ["React", "CSS", "JavaScript"],
    category: "Frontend",
    year: "2023",
    color: "#14b8a6",
    github: "https://github.com/PrajwalpGM256/React-projects",
    featured: false,
  },
  {
    id: "gsap-workshop",
    title: "GSAP Workshop",
    description: "Learning project exploring GSAP animation fundamentals and techniques",
    highlights: ["GSAP mastery", "Animation techniques", "Interactive UI"],
    tech: ["GSAP", "JavaScript", "CSS"],
    category: "Frontend",
    year: "2024",
    color: "#a855f7",
    github: "https://github.com/PrajwalpGM256/GSAP_workshop",
    featured: false,
  },
];

export const projectsSection = {
  label: "Featured Work",
  title: "PROJECTS",
  viewAllText: "View All Projects",
  
  timing: {
    headerDelay: 0.2,
    cardsStagger: 0.1,
  },
} as const;