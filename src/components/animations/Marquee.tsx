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
  // Duplicate 4 times for seamless looping without gaps
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedItems.map((item, i) => (
          <span key={i} className="flex items-center flex-shrink-0">
            <span className="px-4 md:px-8 flex-shrink-0">{item}</span>
            <span className="flex-shrink-0" style={{ color: "var(--color-primary)" }}>{separator}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}