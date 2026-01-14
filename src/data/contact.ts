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

export interface FooterLink {
  name: string;
  href: string;
}

export const contactData = {
  // Main statement
  statement: {
    line1: "READY TO COLLABORATE?",
    line2: "LET'S",
    line3: "CONNECT",
    accent: "CONNECT", // which word gets the accent color
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
    { id: "quote", name: "QUOTE", href: "#quote" },
    { id: "projects", name: "PROJECTS", href: "#work" },
    { id: "tech", name: "TECH", href: "#tech" },
    { id: "journey", name: "JOURNEY", href: "#journey" },
    { id: "social", name: "SOCIAL", href: "#socials" },
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
    { id: "lenis", name: "Lenis" },
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
    links: [] as FooterLink[],
  },

  // Animation timing
  timing: {
    statementDelay: 0.2,
    linksStagger: 0.05,
    badgesDelay: 0.5,
  },
} as const;