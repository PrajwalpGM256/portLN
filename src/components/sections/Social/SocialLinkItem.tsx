import type { SocialLink } from "@/data";

interface SocialLinkItemProps {
  social: SocialLink;
}

export function SocialLinkItem({ social }: SocialLinkItemProps) {
  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm md:text-base font-bold tracking-widest uppercase transition-all duration-300 hover:text-[var(--color-primary)]"
      style={{ color: "var(--color-dark-300)" }}
    >
      {social.name}
    </a>
  );
}
