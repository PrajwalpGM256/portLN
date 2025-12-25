import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SkillBarProps {
  /** Skill name */
  name: string;
  /** Progress level 0-100 */
  level: number;
  /** Accent color */
  color?: string;
  /** Animation delay */
  delay?: number;
}

export function SkillBar({
  name,
  level,
  color = "var(--color-primary)",
  delay = 0,
}: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="group">
      {/* Label row */}
      <div className="flex justify-between items-center mb-2">
        <span 
          className="text-sm font-medium transition-colors group-hover:text-white"
          style={{ color: "var(--color-dark-300)" }}
        >
          {name}
        </span>
        <motion.span
          className="text-xs font-mono"
          style={{ color }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5, duration: 0.4 }}
        >
          {level}%
        </motion.span>
      </div>

      {/* Bar track */}
      <div 
        className="h-1.5 rounded-full overflow-hidden"
        style={{ backgroundColor: "var(--color-dark-800)" }}
      >
        {/* Animated fill */}
        <motion.div
          className="h-full rounded-full"
          style={{ 
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{
            delay,
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </div>
    </div>
  );
}