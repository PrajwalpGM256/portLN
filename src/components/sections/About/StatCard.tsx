import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { Stat } from "@/data";

interface StatCardProps {
  stat: Stat;
  index: number;
}

// Animated counter hook
function useCounter(end: number, isInView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, isInView, duration]);

  return count;
}

export function StatCard({ stat, index }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Parse numeric value
  const numericValue = parseFloat(stat.value);
  const isDecimal = stat.value.includes(".");
  const animatedValue = useCounter(
    isDecimal ? numericValue * 10 : numericValue,
    isInView
  );

  const displayValue = isDecimal 
    ? (animatedValue / 10).toFixed(1) 
    : animatedValue;

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Card */}
      <div
        className="relative p-8 md:p-10 rounded-2xl overflow-hidden transition-all duration-500"
        style={{
          backgroundColor: "rgba(34,197,94,0.03)",
          border: "1px solid rgba(34,197,94,0.1)",
        }}
      >
        {/* Hover glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(34,197,94,0.1), transparent 70%)",
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Value */}
        <div className="relative">
          <span
            className="text-5xl md:text-6xl font-black tabular-nums"
            style={{ color: "var(--color-primary)" }}
          >
            {displayValue}
          </span>
          {stat.suffix && (
            <span
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              {stat.suffix}
            </span>
          )}
        </div>

        {/* Label */}
        <p
          className="mt-3 text-sm md:text-base"
          style={{ color: "var(--color-dark-400)" }}
        >
          {stat.label}
        </p>

        {/* Corner accent */}
        <div
          className="absolute top-0 right-0 w-16 h-16"
          style={{
            background: "linear-gradient(135deg, rgba(34,197,94,0.1), transparent)",
          }}
        />
      </div>
    </motion.div>
  );
}