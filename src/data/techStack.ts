export interface TechItem {
  id: string;
  name: string;
  year: string; // Year started using
  category: string;
  color: string;
  icon: string; // Lucide icon name or custom
  // Back of card details
  experience: string; // e.g., "4+ years"
  proficiency: number; // 0-100
  highlights: string[]; // Key achievements/uses
}

export const techStack: TechItem[] = [
  {
    id: "react",
    name: "React",
    year: "2020",
    category: "Frontend",
    color: "#61DAFB",
    icon: "component",
    experience: "5+ years",
    proficiency: 95,
    highlights: ["Component Architecture", "Hooks & Context", "Performance Optimization"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    year: "2021",
    category: "Language",
    color: "#3178C6",
    icon: "file-code",
    experience: "4+ years",
    proficiency: 90,
    highlights: ["Type Safety", "Generics", "Advanced Patterns"],
  },
  {
    id: "python",
    name: "Python",
    year: "2019",
    category: "Language",
    color: "#3776AB",
    icon: "terminal",
    experience: "6+ years",
    proficiency: 95,
    highlights: ["Data Science", "ML Pipelines", "Backend APIs"],
  },
  {
    id: "pytorch",
    name: "PyTorch",
    year: "2022",
    category: "ML",
    color: "#EE4C2C",
    icon: "flame",
    experience: "3+ years",
    proficiency: 85,
    highlights: ["Deep Learning", "Neural Networks", "Model Training"],
  },
  {
    id: "nodejs",
    name: "Node.js",
    year: "2020",
    category: "Backend",
    color: "#339933",
    icon: "server",
    experience: "5+ years",
    proficiency: 88,
    highlights: ["REST APIs", "Express/Fastify", "Real-time Apps"],
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    year: "2020",
    category: "Database",
    color: "#4169E1",
    icon: "database",
    experience: "5+ years",
    proficiency: 85,
    highlights: ["Query Optimization", "Data Modeling", "Indexing"],
  },
  {
    id: "docker",
    name: "Docker",
    year: "2021",
    category: "DevOps",
    color: "#2496ED",
    icon: "box",
    experience: "4+ years",
    proficiency: 82,
    highlights: ["Containerization", "Docker Compose", "CI/CD"],
  },
  {
    id: "aws",
    name: "AWS",
    year: "2022",
    category: "Cloud",
    color: "#FF9900",
    icon: "cloud",
    experience: "3+ years",
    proficiency: 78,
    highlights: ["EC2 & Lambda", "S3 & RDS", "CloudFormation"],
  },
  {
    id: "nextjs",
    name: "Next.js",
    year: "2022",
    category: "Framework",
    color: "#ffffff",
    icon: "layers",
    experience: "3+ years",
    proficiency: 88,
    highlights: ["SSR & SSG", "App Router", "API Routes"],
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    year: "2021",
    category: "ML",
    color: "#FF6F00",
    icon: "brain",
    experience: "4+ years",
    proficiency: 80,
    highlights: ["Model Deployment", "TensorFlow.js", "Keras"],
  },
];

export const techStackSection = {
  titleLine1: "Tech",
  titleLine2: "Hall of Fame",
  description: "From modern frameworks to battle-tested tools, these are the technologies I use to build exceptional digital experiences.",
  ctaText: "View All Skills",
  ctaLink: "#skills",
  
  timing: {
    titleDelay: 0.2,
    descDelay: 0.4,
    galleryDelay: 0.3,
    cardStagger: 0.08,
  },
} as const;