import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { Particles, MouseGradient } from "@/components/animations";
import { heroData } from "@/data";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroCorners } from "./HeroCorners";
import { ScrollIndicator } from "./ScrollIndicator";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section
      ref={containerRef}
      className="h-screen relative flex items-center justify-center overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      <HeroBackground opacity={opacity} />
      <MouseGradient />
      <Particles config={heroData.particles} />
      <HeroContent y={y} scale={scale} opacity={opacity} />
      <HeroCorners />
      <ScrollIndicator />
    </section>
  );
}