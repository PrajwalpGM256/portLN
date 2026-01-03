import { motion } from "framer-motion";
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

export function ContactSocials() {
  const { labels, socials } = contactData;

  return (
    <div className="text-right">
      <p
        className="text-[10px] tracking-[0.3em] mb-4 font-medium"
        style={{ color: theme.accent }}
      >
        {labels.connect}
      </p>

      <nav className="flex justify-end gap-3">
        {socials.map((social) => {
          const Icon = iconMap[social.icon] || Mail;
          return (
            <motion.a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300"
              style={{
                backgroundColor: theme.black,
                border: `1px solid ${theme.accent}30`
              }}
              whileHover={{ scale: 1.15, backgroundColor: theme.accent }}
              title={social.name}
            >
              <Icon size={18} style={{ color: theme.white }} />
            </motion.a>
          );
        })}
      </nav>
    </div>
  );
}