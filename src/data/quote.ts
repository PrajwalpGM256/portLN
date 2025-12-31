export const quoteData = {
  quotes: [
    {
      text: "I'm not a great programmer, I'm just a good programmer with great habits.",
      author: "Kent Beck",
      highlights: ["great", "programmer", "habits", "Kent Beck", "good"],
    },
    {
      text: "The best programs are written so that computing machines can perform them quickly and so that human beings can understand them clearly.",
      author: "Donald Knuth",
      highlights: ["best", "programs", "quickly", "clearly"],
    },
  ],  

  marquee: {
    items: [
      "JAVA",
      "PYTHON",
      "TYPESCRIPT",
      "SPRING BOOT",
      "REACT JS",
      "NODE.JS",
      "AWS",
      "DOCKER",
      "MICROSERVICES",
      "REST APIs",
      "MACHINE LEARNING",
      "NEXT.JS",
      "POSTGRESQL",
      "CI/CD",
    ],
    speed: 25,
  },

  timing: {
    quoteDelay: 0.2,
    marqueeDelay: 0.5,
  },
} as const;