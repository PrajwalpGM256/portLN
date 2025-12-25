import { motion, MotionValue } from "framer-motion";

interface HeroBackgroundProps {
  opacity: MotionValue<number>;
}

export function HeroBackground({ opacity }: HeroBackgroundProps) {
  return (
    <>
      {/* Base black */}
      <div className="absolute inset-0" style={{ background: "#000" }} />

      {/* Gradient mesh */}
      <motion.div className="absolute inset-0" style={{ opacity }}>
        <div
          className="absolute top-0 left-1/4 w-[800px] h-[800px]"
          style={{
            background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 60%)",
            filter: "blur(60px)",
            transform: "translate(-50%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px]"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 60%)",
            filter: "blur(60px)",
            transform: "translate(50%, 30%)",
          }}
        />
      </motion.div>

      {/* Grid overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,197,94,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
          opacity,
        }}
      />
    </>
  );
}