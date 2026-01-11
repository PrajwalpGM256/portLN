import { motion } from "framer-motion";
import { contactData } from "@/data";
import { theme } from "@/config/theme";

export function ContactNav() {
  const { labels, navLinks } = contactData;

  return (
    <div className="md:text-left">
      <p
        className="text-[10px] tracking-[0.3em] mb-4 font-medium"
        style={{ color: theme.accent }}
      >
        {labels.navigation}
      </p>

      <nav className="space-y-2 md:space-y-2">
        {navLinks.map((link) => (
          <motion.a
            key={link.id}
            href={link.href}
            className="block text-lg md:text-lg font-bold transition-colors duration-300"
            style={{ color: link.accent ? "var(--color-primary)" : theme.black }}
            whileHover={{ x: 4 }}
          >
            {link.name}
          </motion.a>
        ))}
      </nav>
    </div>
  );
}