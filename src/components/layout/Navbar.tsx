
import { useState, useEffect } from "react";
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

          {/* Desktop Nav: Only Let's Connect Button */}
          <div className="hidden md:flex items-center w-full">
            <div className="flex-1" />
            <SlotContactButton />
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
            {/* Only Let's Connect button in mobile menu */}
            <SlotContactButtonMobile setIsOpen={setIsOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
// Slot-machine style Let's Connect button (desktop)
function SlotContactButton() {
  const text = "Let's Connect!";
  const [settled, setSettled] = useState(Array(text.length).fill(false));
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < text.length; i++) {
      timers.push(setTimeout(() => {
        setSettled(prev => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 10000 + i * 200));
    }
    return () => { timers.forEach(clearTimeout); };
  }, []);
  return (
    <a
      href="#contact"
      className="ml-16 px-3 py-1 rounded-full font-bold text-sm tracking-widest uppercase text-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black bg-transparent border-0"
      style={{ background: "transparent", border: 0, boxShadow: "none" }}
      onClick={e => {
        e.preventDefault();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={false}
          animate={settled[i] ? { rotateX: 0 } : { rotateX: [0, 360, 0, 360, 0, 360, 0] }}
          transition={{ duration: settled[i] ? 0.3 : 10, ease: "easeInOut" }}
          style={{ display: "inline-block", transformOrigin: "50% 60%", minWidth: "0.7em" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </a>
  );
}

// Slot-machine style Let's Connect button (mobile)
interface SlotContactButtonMobileProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function SlotContactButtonMobile({ setIsOpen }: SlotContactButtonMobileProps) {
  const text = "Let's Connect!";
  const [settled, setSettled] = useState(Array(text.length).fill(false));
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < text.length; i++) {
      timers.push(setTimeout(() => {
        setSettled(prev => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 10000 + i * 200));
    }
    return () => { timers.forEach(clearTimeout); };
  }, []);
  return (
    <a
      href="#contact"
      onClick={e => {
        e.preventDefault();
        setIsOpen(false);
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }}
      className="text-2xl font-black uppercase px-5 py-1.5 rounded-full text-black mt-4 bg-transparent border-0"
      style={{ background: "transparent", border: 0, boxShadow: "none" }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={false}
          animate={settled[i] ? { rotateX: 0 } : { rotateX: [0, 360, 0, 360, 0, 360, 0] }}
          transition={{ duration: settled[i] ? 0.3 : 10, ease: "easeInOut" }}
          style={{ display: "inline-block", transformOrigin: "50% 60%", minWidth: "0.7em" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </a>
  );
}
}