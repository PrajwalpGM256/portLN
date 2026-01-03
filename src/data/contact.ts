export interface ContactSocialLink {
  id: string;
  name: string;
  icon: string;
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
    { id: "github", name: "GITHUB", icon: "github", url: "https://github.com/PrajwalpGM256", handle: "@PrajwalpGM256" },
    { id: "linkedin", name: "LINKEDIN", icon: "linkedin", url: "https://www.linkedin.com/in/paztino/" },
    { id: "instagram", name: "INSTAGRAM", icon: "instagram", url: "https://www.instagram.com/praj_wal_g_m" },
    { id: "email", name: "EMAIL", icon: "mail", url: "mailto:pgm1431998@gmail.com" },
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
    email: "pgm1431998@gmail.com",
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