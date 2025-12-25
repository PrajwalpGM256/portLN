export interface ContactSocialLink {
  id: string;
  name: string;
  url: string;
  handle?: string;
}

export interface ContactNavLink {
  id: string;
  name: string;
  href: string;
  accent?: boolean;
}

export interface ContactTechBadge {
  id: string;
  name: string;
}

export const contactData = {
  // Main statement
  statement: {
    line1: "LET'S BUILD",
    line2: "SOMETHING",
    line3: "GREAT",
    accent: "GREAT", // which word gets the accent color
  },

  // Section labels
  labels: {
    navigation: "NAVIGATION",
    connect: "CONNECT",
    built: "BUILT WITH",
  },

  // Navigation links
  navLinks: [
    { id: "home", name: "HOME", href: "#hero" },
    { id: "about", name: "ABOUT", href: "#about" },
    { id: "work", name: "WORK", href: "#work" },
    { id: "skills", name: "SKILLS", href: "#skills" },
    { id: "contact", name: "CONTACT", href: "#contact", accent: true },
  ] as ContactNavLink[],

  // Social links
  socials: [
    { id: "github", name: "GITHUB", url: "https://github.com/yourusername", handle: "@yourusername" },
    { id: "linkedin", name: "LINKEDIN", url: "https://linkedin.com/in/yourusername" },
    { id: "email", name: "EMAIL", url: "mailto:your.email@example.com" },
  ] as ContactSocialLink[],

  // Tech badges (like sponsor logos)
  techBadges: [
    { id: "react", name: "React" },
    { id: "typescript", name: "TypeScript" },
    { id: "framer", name: "Framer Motion" },
    { id: "tailwind", name: "Tailwind" },
    { id: "vite", name: "Vite" },
    { id: "python", name: "Python" },
    { id: "pytorch", name: "PyTorch" },
    { id: "nodejs", name: "Node.js" },
  ] as ContactTechBadge[],

  // CTA
  cta: {
    text: "GET IN TOUCH",
    email: "your.email@example.com",
  },

  // Footer
  footer: {
    copyright: `© ${new Date().getFullYear()} Prajwal. All rights reserved.`,
    builtWith: "Built with React & Framer Motion",
    links: [
      { name: "Privacy", href: "#" },
      { name: "Resume", href: "#" },
    ],
  },

  // Animation timing
  timing: {
    statementDelay: 0.2,
    linksStagger: 0.05,
    badgesDelay: 0.5,
  },
} as const;