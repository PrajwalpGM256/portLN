import { useEffect } from "react";
import { Navbar } from "@/components/layout";
import { Hero, Quote, Projects, TechStack, Journey, Social, Contact } from "@/components/sections";
import { useLenis } from "@/hooks";

export default function App() {
  // Initialize Lenis smooth scrolling
  useLenis();

  // Disable scrolling for 3 seconds on initial load to let animations play
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      document.body.style.overflow = originalOverflow || "";
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow || "";
    };
  }, []);

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