import { motion } from "framer-motion";
import { contactData } from "@/data";

export function ContactSocials() {
  const { labels, socials } = contactData;

  return (
    <div className="text-right">
      <p
        className="text-[10px] tracking-[0.3em] mb-4 font-medium"
        style={{ color: "rgba(0,0,0,0.5)" }}
      >
        {labels.connect}
      </p>

      <nav className="space-y-2">
        {socials.map((social) => (
          <motion.a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-base md:text-lg font-bold transition-all duration-300"
            style={{ color: "#000" }}
            whileHover={{ x: -4 }}
          >
            {social.name}
          </motion.a>
        ))}
      </nav>
    </div>
  );
}