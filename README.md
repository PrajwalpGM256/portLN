
# My personal portfolio site. Inspired by Off+brand.

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

## LICENSE - MIT
