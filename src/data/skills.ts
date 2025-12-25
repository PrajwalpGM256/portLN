export interface Skill {
  name: string;
  level: number; // 0-100 for visual bar
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: "code" | "database" | "brain" | "cloud";
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "fullstack",
    title: "Full Stack",
    description: "End-to-end application development with modern frameworks",
    icon: "code",
    color: "#22c55e",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Flask / FastAPI", level: 80 },
    ],
  },
  {
    id: "ml",
    title: "Machine Learning",
    description: "Building intelligent systems that learn and adapt",
    icon: "brain",
    color: "#8b5cf6",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "Scikit-learn", level: 90 },
      { name: "NLP / Transformers", level: 80 },
    ],
  },
  {
    id: "data",
    title: "Data Engineering",
    description: "Designing scalable data pipelines and analytics",
    icon: "database",
    color: "#06b6d4",
    skills: [
      { name: "Python / Pandas", level: 95 },
      { name: "SQL / PostgreSQL", level: 90 },
      { name: "ETL / DuckDB", level: 85 },
      { name: "Data Visualization", level: 85 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "Deploying and scaling applications in the cloud",
    icon: "cloud",
    color: "#f97316",
    skills: [
      { name: "AWS / GCP", level: 80 },
      { name: "Docker", level: 85 },
      { name: "CI/CD", level: 80 },
      { name: "Git / GitHub", level: 95 },
    ],
  },
];

export const skillsSection = {
  label: "Expertise",
  title: "SKILLS",
  subtitle: "Technologies and tools I use to bring ideas to life",
  
  timing: {
    headerDelay: 0.2,
    cardStagger: 0.15,
  },
} as const;