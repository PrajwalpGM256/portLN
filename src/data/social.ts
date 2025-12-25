// Social Section Configuration
export const socialsSection = {
  headingLine1: "FIND ME",
  headingLine2: "EVERYWHERE",
  subtext: "Follow me on social media",
  cardImages: [
    "/src/assets/images/photo-1.jpg",
    "/src/assets/images/photo-2.jpg",
    "/src/assets/images/photo-3.jpg",
    "/src/assets/images/photo-4.jpg",
    "/src/assets/images/photo-5.jpg",
  ],
} as const;

export const socialLinks = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/yourusername",
    handle: "@yourusername",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    handle: "/in/yourusername",
  },
  {
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    handle: "@yourusername",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:your.email@example.com",
    handle: "your.email@example.com",
  },
] as const;

export type SocialLink = (typeof socialLinks)[number];
