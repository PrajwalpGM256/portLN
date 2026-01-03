// Social Section Configuration
export const socialsSection = {
  headingLine1: "FIND ME",
  headingLine2: "EVERYWHERE",
  subtext: "Follow me on social media",
  cardImages: [
    "/2ndImage.jpeg",
    "/3rdimaeg.jpeg",
    "/5thImage.jpeg",
    "/4thimage.jpeg",
    "/Gemini_Generated_Image_8eqg5w8eqg5w8eqg.png",
  ],
} as const;

export const socialLinks = [
  {
    id: "github",
    name: "GitHub",
    icon: "github",
    url: "https://github.com/PrajwalpGM256",
    handle: "@PrajwalpGM256",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/paztino/",
    handle: "/in/paztino",
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: "instagram",
    url: "https://www.instagram.com/praj_wal_g_m",
    handle: "@praj_wal_g_m",
  },
  {
    id: "email",
    name: "Gmail",
    icon: "mail",
    url: "mailto:pgm1431998@gmail.com",
    handle: "pgm1431998@gmail.com",
  },
  {
    id: "neuemail",
    name: "NEU Email",
    icon: "graduation-cap",
    url: "mailto:gangadharmelinaman.p@northeastern.edu",
    handle: "gangadharmelinaman.p@northeastern.edu",
  },
] as const;

export type SocialLink = (typeof socialLinks)[number];
