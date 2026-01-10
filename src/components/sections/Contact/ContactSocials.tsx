import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, GraduationCap, LucideIcon } from "lucide-react";
import { contactData } from "@/data";
import { theme } from "@/config/theme";

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  mail: Mail,
  "graduation-cap": GraduationCap,
};

const SPOTLIGHT_INTERVAL = 4000; // 4 seconds per spotlight

export function ContactSocials() {
  const { socials } = contactData;
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Start/restart the carousel
  const startCarousel = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % socials.length);
    }, SPOTLIGHT_INTERVAL);
  };

  // Stop the carousel
  const stopCarousel = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Initialize carousel
  useEffect(() => {
    startCarousel();
    return () => stopCarousel();
  }, [socials.length]);

  // Handle hover - pause carousel and highlight hovered icon
  const handleMouseEnter = (index: number) => {
    stopCarousel();
    setHoveredIndex(index);
  };

  // Handle hover end - resume carousel
  const handleMouseLeave = () => {
    setHoveredIndex(null);
    startCarousel();
  };

  // Determine which icon should be highlighted
  const activeIndex = hoveredIndex !== null ? hoveredIndex : spotlightIndex;

  return (
    <div className="flex flex-col items-end gap-4">
      {/* All icons in a row - spotlight is larger */}
      <div className="flex items-center gap-3">
        {socials.map((social, index) => {
          const Icon = iconMap[social.icon] || Mail;
          const isSpotlight = index === activeIndex;

          return (
            <motion.a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full cursor-pointer"
              animate={{
                width: isSpotlight ? 56 : 40,
                height: isSpotlight ? 56 : 40,
                backgroundColor: isSpotlight ? "rgba(204, 255, 0, 0.3)" : theme.black,
                boxShadow: isSpotlight
                  ? "0 0 25px rgba(204, 255, 0, 0.5), 0 0 50px rgba(204, 255, 0, 0.25)"
                  : "0 4px 15px rgba(0,0,0,0.3)",
                borderWidth: isSpotlight ? 3 : 2,
                borderColor: isSpotlight ? "#CCFF00" : `${theme.accent}40`,
              }}
              style={{
                borderStyle: "solid",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              whileHover={{ scale: 1.1 }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              title={social.name}
            >
              <motion.div
                animate={{
                  scale: isSpotlight ? 1 : 0.85,
                }}
                transition={{ duration: 0.3 }}
              >
                <Icon
                  size={isSpotlight ? 26 : 18}
                  style={{ color: isSpotlight ? "#CCFF00" : theme.white }}
                />
              </motion.div>
            </motion.a>
          );
        })}
      </div>

      {/* Platform name label */}
      <AnimatePresence mode="wait">
        <motion.span
          key={activeIndex}
          className="text-xs font-bold tracking-[0.2em] uppercase"
          style={{ color: theme.black }}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          {socials[activeIndex]?.name}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}