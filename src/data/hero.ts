export const heroData = {
  // Corner labels
  availabilityStatus: "Available for Work",
  portfolioYear: "Portfolio 2025",
  scrollText: "Scroll to Explore",
  
  // Stats displayed in hero
  stats: [
    { value: "4.0", label: "GPA" },
    { value: "5+", label: "YEARS" },
  ],
  
  // Particles config
  particles: {
    count: 30,
    color: "34, 197, 94", // RGB for primary green
    minSize: 1,
    maxSize: 5,
    minDuration: 10,
    maxDuration: 30,
  },
  
  // Animation timing (seconds)
  timing: {
    labelDelay: 0.3,
    nameDelay: 0.5,
    signatureDelay: 1.5,
    subtitleDelay: 1.8,
    statsDelay: 2.2,
    cornersDelay: 2.0,
    scrollIndicatorDelay: 2.5,
  },
} as const;