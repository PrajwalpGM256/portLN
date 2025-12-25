export interface Company {
  id: string;
  name: string;
  logo?: string; // URL or could use text
  role: string;
  period: string;
  current: boolean;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export const companies: Company[] = [
  {
    id: "northcross",
    name: "Northcross Group",
    role: "Full Stack Developer",
    period: "2024 - Present",
    current: true,
  },
  {
    id: "infosys",
    name: "Infosys",
    role: "Software Developer",
    period: "2020 - 2023",
    current: false,
  },
  {
    id: "northeastern",
    name: "Northeastern",
    role: "Graduate Researcher",
    period: "2024 - Present",
    current: true,
  },
  {
    id: "gmu",
    name: "George Mason",
    role: "ML Research",
    period: "2025",
    current: false,
  },
];

export const stats: Stat[] = [
  { value: "5", suffix: "+", label: "Years Experience" },
  { value: "4.0", label: "GPA" },
  { value: "15", suffix: "+", label: "Projects Built" },
  { value: "3", label: "Companies" },
];

export const aboutSection = {
  titleLine1: "Experience",
  titleLine2: "&Journey",
  description: "From Electronics & Communication engineering to mastering full-stack development and machine learning. A relentless pursuit of building systems that matter.",
  
  storyTitle: "The Path",
  storyParagraphs: [
    "Started coding in 2019, fell in love with the craft. What began as curiosity became obsession — understanding systems, optimizing performance, creating experiences.",
    "Now pursuing MS in Computer Science at Northeastern while building production systems at Northcross Group. Every line of code is intentional.",
  ],
  
  currentFocus: [
    "Machine Learning & AI",
    "Full Stack Development", 
    "Data Engineering",
    "System Design",
  ],
  
  ctaText: "Let's Connect",
  ctaLink: "#contact",
  
  timing: {
    headerDelay: 0.2,
    statsDelay: 0.3,
    statsStagger: 0.1,
    companiesDelay: 0.4,
  },
} as const;