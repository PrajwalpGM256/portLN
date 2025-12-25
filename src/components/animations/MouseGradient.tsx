import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MouseGradientProps {
  size?: number;
  color?: string;
  opacity?: number;
  blur?: number;
}

export function MouseGradient({
  size = 600,
  color = "34, 197, 94",
  opacity = 0.15,
  blur = 40,
}: MouseGradientProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        x: smoothX,
        y: smoothY,
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        background: `radial-gradient(circle, rgba(${color}, ${opacity}) 0%, transparent 70%)`,
        filter: `blur(${blur}px)`,
      }}
    />
  );
}