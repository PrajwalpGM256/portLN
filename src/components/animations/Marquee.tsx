import { motion } from "framer-motion";

interface MarqueeProps {
  items: readonly string[];
  speed?: number;
  separator?: string;
  className?: string;
}

export function Marquee({ 
  items, 
  speed = 25, 
  separator = "✦",
  className = "",
}: MarqueeProps) {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -33.33 + "%"] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedItems.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-8">{item}</span>
            <span style={{ color: "var(--color-primary)" }}>{separator}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}