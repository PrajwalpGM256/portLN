import { motion } from "framer-motion";

import {
  type CardPosition,
  getCardInitial,
  getCardAnimate,
  getCardTransition,
  getCardHover,
} from "@/components/animations/socialAnimations";

interface PhotoCardProps {
  imageSrc: string;
  position: CardPosition;
  index: number;
  isInView: boolean;
}

export function PhotoCard({ imageSrc, position, index, isInView }: PhotoCardProps) {
  return (
    <motion.figure
      className="absolute w-[140px] h-[190px] md:w-[180px] md:h-[250px] lg:w-[220px] lg:h-[300px] rounded-xl md:rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: "linear-gradient(135deg, var(--color-dark-800) 0%, var(--color-dark-900) 100%)",
        zIndex: position.z,
        left: "50%",
        top: "50%",
        marginLeft: "-70px",
        marginTop: "-95px",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        border: "1px solid var(--color-dark-700)",
      }}
      initial={getCardInitial()}
      animate={isInView ? getCardAnimate(position) : {}}
      transition={getCardTransition(index)}
      whileHover={getCardHover(position.y)}
    >
      <img
        src={imageSrc}
        alt={`Photo ${index + 1}`}
        className="w-full h-full object-cover"
        loading="lazy"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)" }}
        aria-hidden
      />
    </motion.figure>
  );
}
