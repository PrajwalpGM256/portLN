import { motion, MotionValue } from "framer-motion";
import { SplitText } from "@/components/animations";
import { personal, heroData } from "@/data";
import { theme } from "@/config/theme";

interface HeroContentProps {
  y: MotionValue<number>;
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
}

export function HeroContent({ y, scale, opacity }: HeroContentProps) {
  const { timing, stats } = heroData;

  return (
    <motion.div className="relative z-10 text-center px-6" style={{ y, scale, opacity }}>
      {/* Label */}
      <motion.div
        className="flex items-center justify-center gap-4 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 1, delay: timing.labelDelay }}
      >
        <motion.div
          className="h-px"
          style={{ background: theme.navbarBg }}
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: timing.labelDelay + 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.span
          className="text-label"
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: timing.labelDelay + 0.2 }}
        >
          {personal.title}
        </motion.span>
        <motion.div
          className="h-px"
          style={{ background: theme.navbarBg }}
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: timing.labelDelay + 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>

      {/* Name */}
      <div className="overflow-hidden">
        <h1 className="text-display">
          <SplitText delay={timing.nameDelay}>{personal.name.toUpperCase()}</SplitText>
        </h1>
      </div>

      {/* Signature */}
      <motion.svg
        viewBox="0 0 300 60"
        className="w-72 mx-auto mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.8 }}
        viewport={{ once: false }}
        transition={{ delay: timing.signatureDelay }}
      >
        <motion.path
          d="M20 45 Q40 15 70 40 Q100 65 130 35 Q160 5 190 40 Q220 75 250 30 Q270 10 280 25"
          fill="none"
          stroke="url(#signature-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: timing.signatureDelay }}
        />
        <defs>
          <linearGradient id="signature-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={theme.navbarBg} />
            <stop offset="100%" stopColor={theme.accentBg} />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Subtitle */}
      <motion.div
        className="mt-10 flex flex-wrap items-center justify-center gap-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: timing.subtitleDelay, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-lg" style={{ color: "var(--color-dark-400)" }}>
          {personal.degree}
        </span>
        <span style={{ color: theme.navbarBg }}>·</span>
        <span className="text-lg font-medium">{personal.university}</span>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="mt-12 flex items-center justify-center gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: timing.statsDelay }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: timing.statsDelay + i * 0.1 }}
          >
            <div className="text-2xl font-bold" style={{ color: theme.navbarBg }}>
              {stat.value}
            </div>
            <div className="text-xs tracking-widest" style={{ color: "var(--color-dark-500)" }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}