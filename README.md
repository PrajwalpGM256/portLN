# Prajwal's Portfolio

A modern, animated portfolio website inspired by Lando Norris's design aesthetic. Built with React, TypeScript, and Framer Motion.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?logo=framer)

## ✨ Features

- **Smooth Scroll Animations** - Scroll-triggered animations using Framer Motion
- **Interactive Tech Stack** - Flip cards with hover effects
- **Auto-rotating Journey Section** - Career timeline with progress indicators
- **Quote Section** - Animated text reveal with parallax
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark Theme** - Sleek dark aesthetic with accent colors

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/PrajwalpGM256/portLN.git

# Navigate to project directory
cd portLN

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── animations/     # Reusable animation components
│   ├── layout/         # Navbar, Footer
│   ├── sections/       # Hero, Projects, TechStack, Journey, etc.
│   └── ui/             # Button, Card, Badge, Typography
├── data/               # Static content (experience, projects, skills)
├── hooks/              # Custom React hooks
├── styles/             # Global CSS
└── utils/              # Utility functions
```

## 📝 Customization

All personal content is centralized in the `src/data/` directory:

- `personal.ts` - Name, title, social links
- `experience.ts` - Work history and journey
- `projects.ts` - Portfolio projects
- `skills.ts` - Technical skills
- `techStack.ts` - Technology stack with icons

## 📄 License

MIT License - feel free to use this template for your own portfolio!

---

Built with ❤️ by Prajwal
