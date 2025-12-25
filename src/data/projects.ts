export interface Project {
  id: string;
  title: string;
  description: string;
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
    id: "climate-gpt",
    title: "ClimateGPT MCP",
    description: "Fire detection & water risk analysis platform with VIIRS satellite integration",
    tech: ["Python", "DuckDB", "ETL", "MCP"],
    category: "Data Engineering",
    year: "2025",
    color: "#f97316",
    github: "https://github.com",
    featured: true,
  },
  {
    id: "ipl-analytics",
    title: "IPL Analytics",
    description: "Match prediction & player performance analysis using ML clustering",
    tech: ["Python", "Scikit-learn", "PCA", "K-means"],
    category: "Machine Learning",
    year: "2024",
    color: "#3b82f6",
    github: "https://github.com",
    featured: true,
  },
  {
    id: "neural-networks",
    title: "Neural Network Suite",
    description: "Deep learning implementations from scratch — CNNs, RNNs, Transformers",
    tech: ["PyTorch", "FastAI", "TensorFlow"],
    category: "Deep Learning",
    year: "2024",
    color: "#8b5cf6",
    github: "https://github.com",
    featured: true,
  },
  {
    id: "stock-predictor",
    title: "Stock Predictor",
    description: "NYSE stock price forecasting with LSTM and attention mechanisms",
    tech: ["Python", "LSTM", "Time Series", "yFinance"],
    category: "RNN/LSTM",
    year: "2024",
    color: "#22c55e",
    github: "https://github.com",
    featured: true,
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "This site — built with React, Framer Motion, and lots of attention to detail",
    tech: ["React", "TypeScript", "Framer Motion", "Tailwind"],
    category: "Full Stack",
    year: "2025",
    color: "#06b6d4",
    github: "https://github.com",
    live: "https://prajwal.dev",
    featured: true,
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