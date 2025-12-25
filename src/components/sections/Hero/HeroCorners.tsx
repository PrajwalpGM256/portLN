import { motion } from "framer-motion";
import { personal, heroData } from "@/data";

export function HeroCorners() {
  const { timing, availabilityStatus, portfolioYear, scrollText } = heroData;

  return (
    <>
      {/* Top Left - uses site padding */}
      <motion.div
        className="absolute top-24 text-xs hidden lg:block"
        style={{ 
          left: "var(--padding-x-desktop)",
          color: "var(--color-dark-500)" 
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: timing.cornersDelay }}
      >
        <span style={{ color: "var(--color-primary)" }}>●</span> {availabilityStatus.toUpperCase()}
      </motion.div>

      {/* Top Right - uses site padding */}
      <motion.div
        className="absolute top-24 text-right text-xs hidden lg:block"
        style={{ 
          right: "var(--padding-x-desktop)",
          color: "var(--color-dark-500)" 
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: timing.cornersDelay }}
      >
        <div>{personal.location.toUpperCase()}</div>
        <div style={{ color: "var(--color-primary)" }}>{personal.gradYear}</div>
      </motion.div>

      {/* Bottom Left */}
      <motion.div
        className="absolute bottom-8 text-xs hidden lg:block"
        style={{ 
          left: "var(--padding-x-desktop)",
          color: "var(--color-dark-500)" 
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: timing.cornersDelay }}
      >
        {portfolioYear.toUpperCase()}
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        className="absolute bottom-8 text-xs hidden lg:block"
        style={{ 
          right: "var(--padding-x-desktop)",
          color: "var(--color-dark-600)" 
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: timing.cornersDelay }}
      >
        {scrollText.toUpperCase()}
      </motion.div>
    </>
  );
}