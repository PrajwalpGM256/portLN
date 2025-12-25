import { motion } from "framer-motion";

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export function SplitText({
  children,
  className,
  delay = 0.5,
  staggerDelay = 0.05,
}: SplitTextProps) {
  return (
    <span className={className} style={{ display: "inline-block" }}>
      {children.split("").map((char, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block" }}
          initial={{ y: 100, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{
            duration: 1,
            delay: delay + i * staggerDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}