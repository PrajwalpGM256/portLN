import { contactData } from "@/data";
import { theme } from "@/config/theme";

export function ContactFooter() {
  const { footer } = contactData;

  return (
    <footer className="mt-4 pt-4 flex flex-col md:flex-row justify-between items-center gap-2 text-[11px]">
      {/* Copyright */}
      <p style={{ color: "var(--color-dark-500)" }}>{footer.copyright}</p>

      {/* Links */}
      <div className="flex gap-6">
        {footer.links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="uppercase tracking-[0.2em] transition-colors duration-300 hover:text-[var(--color-primary)]"
            style={{ color: "var(--color-dark-500)" }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}