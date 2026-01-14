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
    description: "Languages I use most often for building projects and solving problems.",
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
    description: "I like working on both the frontend and backend, using modern frameworks to build complete apps.",
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
    description: "I use ML tools and libraries to work on projects that involve data and predictions.",
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
    description: "I enjoy working with data, from building pipelines to analyzing results.",
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
    description: "I deploy and manage apps in the cloud, and use tools like Docker and GitHub Actions for automation.",
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