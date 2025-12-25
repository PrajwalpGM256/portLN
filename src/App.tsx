import { Navbar, Footer } from "@/components/layout";
import { Hero, Quote, Projects, TechStack, Journey } from "@/components/sections";

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
      </main>

      <Footer />
    </div>
  );
}