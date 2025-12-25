export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  current: boolean;
  color: string;
  story: string;
  highlights: string[];
  skills: string[];
}

export const experience: Experience[] = [
  {
    id: "infosys",
    role: "Systems Engineer",
    company: "Infosys",
    location: "Bangalore, India",
    period: "2019 - 2022",
    duration: "3 years",
    current: false,
    color: "#0066CC",
    story: "My journey began at Infosys, where I transformed from a fresh graduate into a confident engineer. Working on enterprise-scale projects taught me the importance of clean code, systematic problem-solving, and the power of collaboration. This was where I fell in love with building software that impacts millions.",
    highlights: [
      "Built enterprise Java applications serving 50K+ users",
      "Led migration of legacy systems to microservices architecture",
      "Mentored junior developers and conducted code reviews",
    ],
    skills: ["Java", "Spring Boot", "Oracle", "Microservices"],
  },
  {
    id: "ncg",
    role: "Full Stack Developer",
    company: "Northcross Group",
    location: "Boston, MA",
    period: "2024 - Present",
    duration: "1+ year",
    current: true,
    color: "#22c55e",
    story: "At Northcross Group, I'm pushing the boundaries of what's possible with modern web technologies. Building secure, scalable applications for government and enterprise clients has sharpened my skills in both frontend finesse and backend robustness. Every day is a new challenge, and I'm loving every moment of it.",
    highlights: [
      "Architecting full-stack solutions with React & Node.js",
      "Implementing secure authentication & authorization systems",
      "Optimizing application performance and user experience",
    ],
    skills: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    id: "northeastern",
    role: "MS in Computer Science",
    company: "Northeastern University",
    location: "Boston, MA",
    period: "2023 - 2025",
    duration: "2 years",
    current: true,
    color: "#CC0000",
    story: "Northeastern became my launchpad to the next level. Diving deep into Machine Learning, Distributed Systems, and cutting-edge research expanded my horizons beyond traditional software engineering. The co-op program connected classroom theory with real-world impact, shaping me into a well-rounded technologist.",
    highlights: [
      "Specializing in Machine Learning & Artificial Intelligence",
      "Research in NLP and Deep Learning applications",
      "Building data-driven solutions with Python & PyTorch",
    ],
    skills: ["Python", "PyTorch", "TensorFlow", "ML/AI", "Research"],
  },
];

export const journeySection = {
  label: "My Journey",
  title: "THE STORY",
  subtitle: "SO FAR",
  description: "From writing my first lines of code to building intelligent systems — every experience has shaped who I am today.",
  autoPlayInterval: 8000, // 8 seconds per card
} as const;
