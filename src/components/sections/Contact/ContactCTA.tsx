import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { contactData } from "@/data";

export function ContactCTA() {
  const { cta } = contactData;

  return (
    <motion.a
      href={`mailto:${cta.email}`}
      className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full overflow-hidden"
      style={{
        border: "2px solid #000",
        backgroundColor: "#000",
        color: "#CCFF00",
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="text-sm font-bold tracking-[0.15em]">
        {cta.text}
      </span>

      <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
    </motion.a>
  );
}