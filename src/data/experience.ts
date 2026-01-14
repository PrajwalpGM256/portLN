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
    story: "At Infosys, I started my career as a software developer. I worked on full-stack projects using Spring Boot and React, learned about microservices, and set up CI/CD pipelines. This role gave me hands-on experience building software for real users and collaborating with talented teams.",
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
    story: "At Northeastern, I focused on machine learning, algorithms, and web development at Khoury College. Balancing coursework and projects, I maintained a strong GPA and enjoyed working on practical problems with classmates from around the world.",
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
    story: "At Northcross Group, I worked on both backend APIs and frontend applications. I enjoyed building features that made our systems faster and easier to use, and learned a lot about testing and deployment in a real business environment.",
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
  description: "I started programming in college and have enjoyed learning new technologies ever since. Each job and project has taught me something new about building software and working with others.",
  autoPlayInterval: 8000, // 8 seconds per card
} as const;
