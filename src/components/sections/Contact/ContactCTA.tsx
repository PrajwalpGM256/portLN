import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { contactData } from "@/data";

export function ContactCTA() {
  const { cta } = contactData;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={`mailto:${cta.email}`}
      className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
        boxShadow: "0 4px 15px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 6px 30px rgba(204,255,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Animated shimmer effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(204,255,0,0.15) 50%, transparent 100%)",
        }}
        animate={{
          x: isHovered ? ["-100%", "100%"] : "-100%",
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.8,
          repeat: isHovered ? Infinity : 0,
          repeatDelay: 0.3,
        }}
      />

      {/* Border glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          border: isHovered ? "2px solid #CCFF00" : "2px solid rgba(204,255,0,0.3)",
          transition: "all 0.3s ease",
        }}
      />

      {/* Text with swap animation */}
      <span className="relative z-10 text-sm font-bold tracking-[0.15em]" style={{ color: "#CCFF00" }}>
        <AnimatePresence mode="wait">
          {isHovered ? (
            <motion.span
              key="hover"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="block"
            >
              {cta.text}
            </motion.span>
          ) : (
            <motion.span
              key="default"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="block"
            >
              {cta.text}
            </motion.span>
          )}
        </AnimatePresence>
      </span>

      {/* Arrow icon */}
      <motion.div
        className="relative z-10"
        animate={{
          rotate: isHovered ? 45 : 0,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUpRight size={18} style={{ color: "#CCFF00" }} />
      </motion.div>
    </motion.a>
  );
}