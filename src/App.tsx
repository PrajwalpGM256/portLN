import { Navbar } from "@/components/layout";
import { Hero, Quote, Projects, TechStack, Journey, Social, Contact } from "@/components/sections";

export default function App() {
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