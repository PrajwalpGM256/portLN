
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personal } from "@/data";
import { theme } from "@/config/theme";



export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        className="fixed top-0 w-full z-50 shadow-lg"
        style={{
          backgroundColor: theme.navbarBg,
          borderBottom: `4px solid ${theme.black}`,
          backdropFilter: "blur(6px)",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="site-container py-1 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-2xl font-black tracking-tighter flex items-center gap-1" style={{ color: theme.black }}>
            {personal.name.slice(0, 4).toUpperCase()}
            <span style={{ color: theme.black, fontWeight: 900, fontSize: 28, marginLeft: 2 }}>.</span>
          </a>

          {/* Desktop Nav: Old Website + Contact Me Button */}
          <div className="hidden md:flex items-center w-full">
            <div className="flex-1" />
            <div className="flex items-center gap-3">
              <OldPortfolioButton />
              <SlotContactButton />
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-0.5 transition-colors"
            style={{ color: theme.black }}
            aria-label="Open menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center gap-10"
            style={{ backgroundColor: theme.navbarBg }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Old Website link */}
            <motion.a
              href="https://prajwalpgm256.github.io/Resume-Project/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 rounded-lg font-semibold text-base tracking-wider uppercase flex items-center gap-3 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(30,30,30,0.95) 100%)",
                color: "#CCFF00",
                boxShadow: "0 4px 15px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 6px 25px rgba(204,255,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Retro monitor icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              <span>Old Portfolio</span>
            </motion.a>
            {/* Contact Me button */}
            <SlotContactButtonMobile setIsOpen={setIsOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  // Old Portfolio button with hover text swap
  function OldPortfolioButton() {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.a
        href="https://prajwalpgm256.github.io/Resume-Project/"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-6 px-4 py-1.5 rounded-lg font-semibold text-xs tracking-wider uppercase flex items-center gap-2 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(30,30,30,0.95) 100%)",
          color: "#CCFF00",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
          minWidth: "120px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 4px 20px rgba(204,255,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
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
        {/* Retro icon */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 flex-shrink-0">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
        {/* Text swap */}
        <span className="relative z-10 flex-1 text-center">
          <AnimatePresence mode="wait">
            {isHovered ? (
              <motion.span
                key="hover"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="block whitespace-nowrap"
              >
                Old Portfolio
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
                Old Portfolio
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      </motion.a>
    );
  }

  // Contact Me button (desktop) - matching Old Portfolio style
  function SlotContactButton() {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="px-4 py-1.5 rounded-lg font-bold text-xs tracking-wider uppercase flex items-center gap-2 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #CCFF00 0%, #9EFF00 100%)",
          color: "#000000",
          boxShadow: "0 2px 10px rgba(204,255,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
          minWidth: "120px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 4px 25px rgba(204,255,0,0.6), inset 0 1px 0 rgba(255,255,255,0.4)",
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Animated shimmer effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
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
        {/* Mail icon */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 flex-shrink-0">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
        {/* Text swap */}
        <span className="relative z-10 flex-1 text-center">
          <AnimatePresence mode="wait">
            {isHovered ? (
              <motion.span
                key="hover"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="block whitespace-nowrap"
              >
                Contact Me
              </motion.span>
            ) : (
              <motion.span
                key="default"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="block whitespace-nowrap"
              >
                Contact Me
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      </motion.a>
    );
  }

  // Contact Me button (mobile) - matching Old Portfolio style
  interface SlotContactButtonMobileProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
  function SlotContactButtonMobile({ setIsOpen }: SlotContactButtonMobileProps) {
    return (
      <motion.a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(false);
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="px-6 py-3 rounded-lg font-bold text-base tracking-wider uppercase flex items-center gap-3 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #CCFF00 0%, #9EFF00 100%)",
          color: "#000000",
          boxShadow: "0 4px 15px rgba(204,255,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 6px 25px rgba(204,255,0,0.6), inset 0 1px 0 rgba(255,255,255,0.4)",
        }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Mail icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
        <span>Contact Me</span>
      </motion.a>
    );
  }
}