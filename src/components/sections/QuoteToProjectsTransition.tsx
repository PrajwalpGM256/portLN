"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { SparklesCore } from "@/components/ui/Sparkles";

export function QuoteToProjectsTransition() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <div
      ref={containerRef}
      className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden"
    >
      {/* Sparkles Background */}
      <div className="absolute inset-0">
        <SparklesCore
          id="quote-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={60}
          particleColor="#22c55e"
          speed={0.8}
        />
      </div>

      {/* Secondary Sparkles - Cyan accent */}
      <div className="absolute inset-0">
        <SparklesCore
          id="quote-sparkles-cyan"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={20}
          particleColor="#06b6d4"
          speed={0.6}
        />
      </div>

      {/* Gradient overlays for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, transparent 30%, black 80%)",
        }}
      />

      {/* Lottie Animation - Abstract Modular Cube */}
      <motion.div
        className="relative z-10 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
        style={{ opacity, scale }}
      >
        <Player
          autoplay
          loop
          src="https://assets-v2.lottiefiles.com/a/edb114c0-1176-11ee-b4b6-2ffa3c22544c/rdpI6bAt6M.lottie"
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity }}
      >
        <span 
          className="text-xs tracking-[0.3em] uppercase"
          style={{ color: "var(--color-dark-600)" }}
        >
          Featured Work
        </span>
        <motion.div
          className="w-px h-8"
          style={{ backgroundColor: "var(--color-primary)" }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
}
