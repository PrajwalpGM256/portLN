import { useState } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import {
  Component,
  FileCode,
  Terminal,
  Flame,
  Server,
  Database,
  Box,
  Cloud,
  Layers,
  Brain,
  LucideIcon,
} from "lucide-react";
import type { TechItem } from "@/data";

const iconMap: Record<string, LucideIcon> = {
  component: Component,
  "file-code": FileCode,
  terminal: Terminal,
  flame: Flame,
  server: Server,
  database: Database,
  box: Box,
  cloud: Cloud,
  layers: Layers,
  brain: Brain,
};

interface TechCardProps {
  tech: TechItem;
  index: number;
  columnIndex: number; // For alternating scroll animation
  scrollYProgress: MotionValue<number>; // Scroll progress from parent
}

// Lando-style border path with cut corner (bottom-right)
const CARD_CLIP_PATH = "polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)";

export function TechCard({ tech, index, columnIndex, scrollYProgress }: TechCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = iconMap[tech.icon] || Component;

  // Alternating column parallax: odd columns move up, even columns move down
  const isOddColumn = columnIndex % 2 === 1;
  const yOffset = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isOddColumn ? [80, 0, -80] : [-80, 0, 80]
  );

  return (
    <motion.article
      className="relative cursor-pointer group"
      style={{ 
        perspective: "1000px",
        y: yOffset, // Apply parallax
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{
        duration: 0.4,
        delay: 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* 3D Flip Container */}
      <motion.div
        className="relative w-full aspect-square"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* ========== FRONT OF CARD ========== */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* Outer border container with cut corner */}
          <div
            className="relative h-full p-[1px] md:p-[2px]"
            style={{
              clipPath: CARD_CLIP_PATH,
              background: `linear-gradient(135deg, ${tech.color}40, ${tech.color}15, var(--color-dark-800))`,
            }}
          >
            {/* Inner card */}
            <div
              className="relative h-full overflow-hidden"
              style={{
                clipPath: CARD_CLIP_PATH,
                backgroundColor: "rgba(10, 10, 15, 0.95)",
              }}
            >
              {/* Background gradient glow */}
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${tech.color}10 0%, transparent 70%)`,
                }}
              />

              {/* Corner accent lines - like Lando's card */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {/* Top-left corner */}
                <path
                  d="M 0 20 L 0 0 L 20 0"
                  fill="none"
                  stroke={tech.color}
                  strokeWidth="0.5"
                  strokeOpacity="0.5"
                />
                {/* Bottom-right cut corner accent */}
                <path
                  d="M 100 76 L 76 100"
                  fill="none"
                  stroke={tech.color}
                  strokeWidth="0.5"
                  strokeOpacity="0.8"
                />
              </svg>

              {/* Icon - centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow behind icon */}
                  <div
                    className="absolute rounded-full blur-3xl opacity-20"
                    style={{
                      backgroundColor: tech.color,
                      width: 140,
                      height: 140,
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  <Icon
                    size={64}
                    strokeWidth={1.2}
                    style={{ color: tech.color }}
                    className="relative z-10 drop-shadow-lg"
                  />
                </motion.div>
              </div>

              {/* Bottom info - Name */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <div className="flex items-end justify-between">
                  <span
                    className="text-[10px] md:text-xs font-medium tracking-wider uppercase"
                    style={{ color: "var(--color-dark-500)" }}
                  >
                    {tech.category}
                  </span>
                  <h3 className="text-sm md:text-base font-semibold tracking-tight">
                    {tech.name}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========== BACK OF CARD ========== */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Outer border container with cut corner */}
          <div
            className="relative h-full p-[1px] md:p-[2px]"
            style={{
              clipPath: CARD_CLIP_PATH,
              background: `linear-gradient(135deg, ${tech.color}60, ${tech.color}30, var(--color-dark-700))`,
            }}
          >
            {/* Inner card */}
            <div
              className="relative h-full overflow-hidden p-4 md:p-5"
              style={{
                clipPath: CARD_CLIP_PATH,
                backgroundColor: "rgba(10, 10, 15, 0.98)",
              }}
            >
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `radial-gradient(${tech.color} 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Header */}
              <div className="relative z-10 mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <Icon size={18} style={{ color: tech.color }} />
                  <h3 className="text-base md:text-lg font-bold">{tech.name}</h3>
                </div>
                <span
                  className="text-xs font-medium"
                  style={{ color: tech.color }}
                >
                  {tech.category}
                </span>
              </div>

              {/* Proficiency bar */}
              <div className="relative z-10 mb-4">
                <div className="flex items-center justify-between mb-1">
                  <span
                    className="text-[10px] tracking-wider uppercase"
                    style={{ color: "var(--color-dark-500)" }}
                  >
                    Proficiency
                  </span>
                  <span
                    className="text-xs font-bold"
                    style={{ color: tech.color }}
                  >
                    {tech.proficiency}%
                  </span>
                </div>
                <div
                  className="h-1 rounded-full overflow-hidden"
                  style={{ backgroundColor: "var(--color-dark-800)" }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: tech.color }}
                    initial={{ width: 0 }}
                    animate={{ width: isFlipped ? `${tech.proficiency}%` : 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>

              {/* Highlights */}
              <div className="relative z-10">
                <span
                  className="text-[10px] tracking-wider uppercase block mb-2"
                  style={{ color: "var(--color-dark-500)" }}
                >
                  Highlights
                </span>
                <ul className="space-y-1.5">
                  {tech.highlights.map((highlight, i) => (
                    <motion.li
                      key={highlight}
                      className="flex items-center gap-2 text-xs md:text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: isFlipped ? 1 : 0, x: isFlipped ? 0 : -10 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ backgroundColor: tech.color }}
                      />
                      <span style={{ color: "var(--color-dark-300)" }}>
                        {highlight}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}
