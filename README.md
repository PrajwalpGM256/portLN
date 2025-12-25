# portLN

My personal portfolio site. Heavily inspired by [Lando Norris's website](https://landonorris.com) — clean, dark, and scroll-driven.

## Stack

- React 18 / TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion

## Run locally

```bash
npm install
npm run dev
```

## Structure

```
src/
├── components/
│   ├── animations/   # scroll effects, particles, etc
│   ├── sections/     # Hero, Projects, TechStack, Journey
│   └── ui/           # reusable bits
├── data/             # all the content lives here
└── styles/
```

## Content

Everything's in `src/data/` — just edit those files to make it yours:

- `personal.ts` — name, links, bio
- `experience.ts` — work history
- `projects.ts` — portfolio items
- `techStack.ts` — skills grid

