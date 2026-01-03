import { Navbar } from "@/components/layout";
import { Hero, Quote, Projects, TechStack, Journey, Social, Contact } from "@/components/sections";
import { useLenis } from "@/hooks";

export default function App() {
  // Initialize Lenis smooth scrolling (includes 3s scroll lock on load)
  useLenis();

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <Quote />
        <Projects />
        <TechStack />
        <Journey />
        <Social />
        <Contact />
      </main>
    </div>
  );
}