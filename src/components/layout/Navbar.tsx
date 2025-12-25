
// ============================================
// src/components/layout/Navbar.tsx
// ============================================
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollPosition } from "@/hooks";
import { personal } from "@/data";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScrollPosition();
  const isScrolled = scrollY > 50;

  return (
    <>
      <motion.nav
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          backgroundColor: isScrolled ? "rgba(0,0,0,0.8)" : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="site-container py-5 flex justify-between items-center">
          <a href="#" className="text-xl font-black tracking-tighter">
            {personal.name.slice(0, 4).toUpperCase()}
            <span style={{ color: "var(--color-primary)" }}>.</span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.2em] uppercase transition-colors hover:text-white"
                style={{ color: "var(--color-dark-400)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 transition-colors"
            style={{ color: isOpen ? "var(--color-primary)" : "white" }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center gap-10"
            style={{ backgroundColor: "rgba(0,0,0,0.98)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-bold transition-colors hover:text-white"
                style={{ color: "var(--color-dark-300)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}