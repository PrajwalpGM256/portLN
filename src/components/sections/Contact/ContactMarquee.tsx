import { motion } from "framer-motion";
import { contactData } from "@/data";
import { theme } from "@/config/theme";

export function ContactMarquee() {
  const { techBadges, labels } = contactData;
  // Duplicate 4 times to ensure no gaps
  const duplicatedBadges = [...techBadges, ...techBadges, ...techBadges, ...techBadges];

  return (
    <div className="border-t border-b py-4" style={{ borderColor: theme.accentLight }}>
      {/* Label */}
      <p
        className="text-[10px] tracking-[0.3em] text-center mb-3 font-medium"
        style={{ color: theme.accent }}
      >
        {labels.built}
      </p>

      {/* Marquee */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-8 md:gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {duplicatedBadges.map((badge, i) => (
            <span
              key={`${badge.id}-${i}`}
              className="text-sm md:text-base font-semibold tracking-wide flex items-center gap-2 flex-shrink-0"
              style={{ color: theme.accentDark }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: theme.black, opacity: 0.4 }}
              />
              {badge.name}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}