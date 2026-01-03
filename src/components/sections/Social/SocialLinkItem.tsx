import { Github, Linkedin, Instagram, Mail, GraduationCap, LucideIcon } from "lucide-react";
import type { SocialLink } from "@/data";

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  mail: Mail,
  "graduation-cap": GraduationCap,
};

interface SocialLinkItemProps {
  social: SocialLink;
}

export function SocialLinkItem({ social }: SocialLinkItemProps) {
  const Icon = iconMap[social.icon] || Mail;

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 hover:bg-[var(--color-primary)]"
      style={{
        backgroundColor: "var(--color-dark-800)",
        border: "1px solid var(--color-dark-700)"
      }}
      title={social.name}
    >
      <Icon
        size={22}
        className="transition-colors duration-300"
        style={{ color: "#CCFF00" }}
      />
    </a>
  );
}
