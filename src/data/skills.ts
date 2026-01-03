export interface Skill {
  name: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: "code" | "database" | "brain" | "cloud" | "languages";
  color: string;
  skills: Skill[];
}

import { theme } from "@/config/theme";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Core languages I use to build software solutions",
    icon: "languages",
    color: "#f59e0b",
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "C++" },
      { name: "JavaScript" },
      { name: "TypeScript" },
    ],
  },
  {
    id: "fullstack",
    title: "Full Stack",
    description: "End-to-end application development with modern frameworks",
    icon: "code",
    color: theme.navbarBg,
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Flask" },
      { name: "FastAPI" },
      { name: "Express" },
      { name: "Spring" },
      { name: "Django" },
      { name: "AngularJS" },
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
    ],
  },
  {
    id: "data",
    title: "Data Engineering",
    description: "Designing scalable data pipelines and analytics",
    icon: "database",
    color: "var(--color-cyan)",
    skills: [
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "FastAI" },
      { name: "SQL" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
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
      { name: "Jenkins" },
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