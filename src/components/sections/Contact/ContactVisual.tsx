import { motion } from "framer-motion";

export function ContactVisual() {
  return (
    <motion.div
      className="relative w-40 h-48 md:w-48 md:h-56 mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Visual container */}
      <div
        className="relative w-full h-full rounded-2xl overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse at 50% 30%, rgba(34, 197, 94, 0.3) 0%, transparent 60%),
            linear-gradient(180deg, var(--color-dark-900) 0%, var(--color-black) 100%)
          `,
          border: "1px solid var(--color-dark-700)",
        }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(var(--color-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Animated rings */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${50 + i * 30}%`,
              height: `${50 + i * 30}%`,
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
              border: "1px solid var(--color-primary)",
              opacity: 0.2 - i * 0.05,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20 + i * 10, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Center code symbol */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-4xl md:text-5xl font-mono font-bold"
            style={{ color: "var(--color-primary)", opacity: 0.8 }}
          >
            {"{ }"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}