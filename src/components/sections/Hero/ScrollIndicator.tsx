import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { heroData } from "@/data";

export function ScrollIndicator() {
  const { timing } = heroData;

  return (
    <motion.div
      className="absolute bottom-12 left-1/2 flex flex-col items-center gap-3"
      style={{ transform: "translateX(-50%)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: timing.scrollIndicatorDelay }}
    >
      <motion.div
        className="w-px h-16"
        style={{ 
          background: "linear-gradient(to bottom, var(--color-primary), transparent)",
          transformOrigin: "top"
        }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: timing.scrollIndicatorDelay + 0.2, duration: 0.8 }}
      />
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={20} style={{ color: "var(--color-primary)" }} />
      </motion.div>
    </motion.div>
  );
}