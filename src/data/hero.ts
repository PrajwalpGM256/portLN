export const heroData = {
  availabilityStatus: "Available for Work",
  portfolioYear: "Portfolio",
  scrollText: "Scroll to Explore",
  
  stats: [
    { value: "3.86", label: "GPA" },
    { value: "5+", label: "YEARS" },
  ],
  

  particles: {
    count: 100,
    color: "34, 197, 94",
    minSize: 1,
    maxSize: 10,
    minDuration: 10,
    maxDuration: 30,
  },
  
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