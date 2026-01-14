export interface Company {
  id: string;
  name: string;
  logo?: string;
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
  description: "I studied Electronics & Communication engineering before moving into software. Along the way, I picked up full-stack development and machine learning by working on real projects and learning from others.",
  storyTitle: "The Path",
  storyParagraphs: [
    "I started coding in 2019, mostly out of curiosity. Over time, I found myself enjoying the process of solving problems and building things that people use.",
    "I'm currently pursuing my MS in Computer Science at Northeastern and working at Northcross Group. I like working on practical projects and learning from my teammates.",
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