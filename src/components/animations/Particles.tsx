import { motion } from "framer-motion";
import { useMemo } from "react";

interface ParticlesConfig {
  count: number;
  color: string;
  minSize: number;
  maxSize: number;
  minDuration: number;
  maxDuration: number;
}

interface ParticlesProps {
  config: ParticlesConfig;
}

export function Particles({ config }: ParticlesProps) {
  const particles = useMemo(() => {
    return Array.from({ length: config.count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (config.maxSize - config.minSize) + config.minSize,
      duration: Math.random() * (config.maxDuration - config.minDuration) + config.minDuration,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.1,
    }));
  }, [config]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `rgba(${config.color}, ${p.opacity})`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}