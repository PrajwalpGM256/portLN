// Social Section Configuration
export const socialsSection = {
  headingLine1: "FIND ME",
  headingLine2: "EVERYWHERE",
  subtext: "Follow me on social media",
  cardImages: [
    "/5thImage.jpeg",
    "/2ndImage.jpeg",
    "/3rdimaeg.jpeg",
    "/4thimage.jpeg",
    "/Gemini_Generated_Image_8eqg5w8eqg5w8eqg.png",
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
