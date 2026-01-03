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
    role: "Software Developer",
    company: "Infosys",
    location: "Bengaluru, India",
    period: "Jan 2021 - Dec 2023",
    duration: "3 years",
    current: false,
    color: "#0066CC",
    story: "My journey began at Infosys, where I grew from a fresh engineer into a confident developer. I built full-stack applications with Spring Boot and React, architected microservices that improved scalability, and established CI/CD pipelines. This was where I fell in love with building software that impacts millions.",
    highlights: [
      "Developed full-stack apps with Spring Boot & React, improving performance by 15%",
      "Refactored monolithic apps to microservices, improving scalability by 10%",
      "Implemented CI/CD pipelines with ELK Stack & AWS CloudWatch",
      "Provisioned AWS VPCs, security groups & IAM policies, reducing deployment time by 30%",
      "Collaborated with cross-functional teams, increasing project success rates by 15%",
    ],
    skills: ["Java", "Spring Boot", "React JS", "AWS", "Microservices", "CI/CD"],
  },
  {
    id: "northeastern",
    role: "MS in Computer Science",
    company: "Northeastern University",
    location: "Portland, ME",
    period: "2024 - May 2026",
    duration: "2 years",
    current: true,
    color: "#CC0000",
    story: "Northeastern became my launchpad to the next level. Diving deep into Machine Learning, Algorithms, AI, and Web Development at Khoury College expanded my horizons beyond traditional software engineering. Maintaining a 3.85 GPA while building real-world projects has shaped me into a well-rounded technologist.",
    highlights: [
      "Pursuing MS in Computer Science at Khoury College with 3.85 GPA",
      "Coursework in Programming Design Paradigm, Algorithms, AI, ML",
      "Ranked 2nd in The Roux Institute Hackathon",
      "Building intelligent systems with Python, PyTorch & modern ML tools",
      "Worked with Sierra Group for Maine legislation project",
    ],
    skills: ["Python", "PyTorch", "TensorFlow", "ML/AI", "Algorithms"],
  },
  {
    id: "ncg",
    role: "Full Stack Developer",
    company: "Northcross Group",
    location: "Portland, ME",
    period: "Jan 2025 - Jul 2025",
    duration: "7 months",
    current: false,
    color: "#22c55e",
    story: "At Northcross Group, I pushed the boundaries of full-stack development. Building scalable RESTful APIs and intuitive frontend applications sharpened my skills in both backend robustness and frontend finesse. Every feature I shipped improved system efficiency and user experience.",
    highlights: [
      "Engineered scalable RESTful APIs with Node.js & Express, improving throughput by 35%",
      "Built intuitive frontend pages and applications for enhanced UX",
      "Designed databases and wrote SQL queries for efficient data management",
      "Implemented OAuth2 & JWT authentication, Docker containerization & Swagger API docs",
      "Conducted comprehensive testing using Cypress and Artillery",
    ],
    skills: ["Node.js", "Express.js", "React", "Docker", "OAuth2/JWT", "Cypress"],
  },
];

export const journeySection = {
  label: "My Journey",
  title: "THE STORY",
  subtitle: "SO FAR",
  description: "From writing my first lines of code to building intelligent systems — every experience has shaped who I am today.",
  autoPlayInterval: 8000, // 8 seconds per card
} as const;
