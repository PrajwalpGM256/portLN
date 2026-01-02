export interface Skill {
  name: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: "code" | "database" | "brain" | "cloud";
  color: string;
  skills: Skill[];
}

import { theme } from "@/config/theme";

export const skillCategories: SkillCategory[] = [
  {
    id: "fullstack",
    title: "Full Stack",
    description: "End-to-end application development with modern frameworks",
    icon: "code",
    color: theme.navbarBg,
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "Flask" },
      { name: "FastAPI" },
      { name: "Express" },
      { name: "REST APIs" },
    ],
  },
  {
    id: "ml",
    title: "Machine Learning",
    description: "Building intelligent systems that learn and adapt",
    icon: "brain",
    color: "var(--color-purple)",
    skills: [
      { name: "PyTorch" },
      { name: "TensorFlow" },
      { name: "Scikit-learn" },
      { name: "NLP" },
      { name: "Transformers" },
      { name: "Deep Learning" },
      { name: "Computer Vision" },
      { name: "Keras" },
    ],
  },
  {
    id: "data",
    title: "Data Engineering",
    description: "Designing scalable data pipelines and analytics",
    icon: "database",
    color: "var(--color-cyan)",
    skills: [
      { name: "Python" },
      { name: "Pandas" },
      { name: "SQL" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "DuckDB" },
      { name: "ETL" },
      { name: "Data Visualization" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "Deploying and scaling applications in the cloud",
    icon: "cloud",
    color: "var(--color-orange)",
    skills: [
      { name: "AWS" },
      { name: "GCP" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "CI/CD" },
      { name: "Git" },
      { name: "GitHub Actions" },
      { name: "Linux" },
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