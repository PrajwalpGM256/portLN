import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";

import { socialLinks, socialsSection } from "@/data";
import {
  CARD_POSITIONS,
  headingVariants,
  headingTransition,
  fadeUpVariants,
  createFadeUpTransition,
} from "@/components/animations/socialAnimations";

import { PhotoCard } from "./PhotoCard";
import { SocialLinkItem } from "./SocialLinkItem";
import { theme } from "@/config/theme";

// Mobile card positions - tighter fan for small screens
const MOBILE_CARD_POSITIONS = [
  { rotate: -12, x: -140, y: 20, z: 1 },
  { rotate: -6, x: -75, y: 5, z: 2 },
  { rotate: 0, x: 0, y: 0, z: 5 },
  { rotate: 6, x: 75, y: 5, z: 2 },
  { rotate: 12, x: 140, y: 20, z: 1 },
];

function MobilePhotoCard({
  imageSrc,
  position,
  index,
  isInView,
  isActive,
  onClick
}: {
  imageSrc: string;
  position: typeof MOBILE_CARD_POSITIONS[0];
  index: number;
  isInView: boolean;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.figure
      className="absolute w-[200px] h-[280px] rounded-xl overflow-hidden cursor-pointer"
      style={{
        background: "linear-gradient(135deg, var(--color-dark-800) 0%, var(--color-dark-900) 100%)",
        zIndex: isActive ? 10 : position.z,
        left: "50%",
        top: "50%",
        marginLeft: "-100px",
        marginTop: "-140px",
        boxShadow: isActive
          ? "0 30px 60px -12px rgba(204, 255, 0, 0.3)"
          : "0 20px 40px -12px rgba(0, 0, 0, 0.5)",
        border: isActive ? "2px solid #CCFF00" : "1px solid var(--color-dark-700)",
      }}
      initial={{ opacity: 0, rotate: 0, x: 0, y: 60, scale: 0.8 }}
      animate={isInView ? {
        opacity: 1,
        rotate: isActive ? 0 : position.rotate,
        x: isActive ? 0 : position.x,
        y: isActive ? -10 : position.y,
        scale: isActive ? 1.1 : 0.95,
      } : {}}
      transition={{
        duration: 0.5,
        delay: isInView ? 0.1 + index * 0.06 : 0,
        ease: [0.16, 1, 0.3, 1],
      }}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={imageSrc}
        alt={`Photo ${index + 1}`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)" }}
      />
    </motion.figure>
  );
}

export function Social() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-50px" });
  const [activeCard, setActiveCard] = useState(2); // Center card active by default
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate photos every 3 seconds
  const startAutoRotate = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % MOBILE_CARD_POSITIONS.length);
    }, 3000);
  }, []);

  // Start auto-rotate when in view
  useEffect(() => {
    if (isInView) {
      startAutoRotate();
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isInView, startAutoRotate]);

  // Handle manual click - select card and restart timer
  const handleCardClick = (index: number) => {
    setActiveCard(index);
    startAutoRotate(); // Restart timer on click
  };


  return (
    <section
      ref={sectionRef}
      id="socials"
      className="relative min-h-screen md:h-screen flex flex-col md:flex-row overflow-hidden"
      style={{ backgroundColor: theme.black }}
      aria-labelledby="socials-heading"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 30% 50%, ${theme.accentLight} 0%, transparent 50%)`,
        }}
        aria-hidden
      />

      {/* ==================== MOBILE VIEW ==================== */}
      <div className="md:hidden relative z-10 flex flex-col flex-1 px-6 pt-16 pb-8">
        {/* Header */}
        <div className="text-center mb-6">
          <motion.h2
            className="text-4xl font-black tracking-tighter leading-[0.95]"
            variants={headingVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={headingTransition}
          >
            <span className="block text-white">{socialsSection.headingLine1}</span>
            <span className="block text-white">{socialsSection.headingLine2.split(' ')[0]}</span>
            <span
              className="block"
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                color: "#CCFF00",
              }}
            >
              {socialsSection.headingLine2.split(' ').slice(1).join(' ') || socialsSection.headingLine2}
            </span>
          </motion.h2>

          <motion.p
            className="text-sm mt-4 max-w-xs mx-auto"
            style={{
              color: "var(--color-dark-500)",
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
            }}
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={createFadeUpTransition(0.3)}
          >
            {socialsSection.subtext}
          </motion.p>
        </div>

        {/* Photo Cards - Interactive fanned gallery */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative" style={{ width: '360px', height: '340px' }}>
            {MOBILE_CARD_POSITIONS.map((position, index) => (
              <MobilePhotoCard
                key={index}
                imageSrc={socialsSection.cardImages[index]}
                position={position}
                index={index}
                isInView={isInView}
                isActive={activeCard === index}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 py-4">
          {MOBILE_CARD_POSITIONS.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCardClick(index)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: activeCard === index ? "#CCFF00" : "var(--color-dark-700)",
                transform: activeCard === index ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>

        {/* Social Links */}
        <motion.nav
          className="flex items-center justify-center gap-5 pt-2 pb-4"
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={createFadeUpTransition(0.4)}
          aria-label="Social media links"
        >
          {socialLinks.map((social) => (
            <SocialLinkItem key={social.id} social={social} />
          ))}
        </motion.nav>
      </div>

      {/* ==================== DESKTOP VIEW ==================== */}
      {/* Left Column - 30% width - Heading */}
      <div className="hidden md:flex relative z-10 w-[30%] h-full flex-col justify-center px-8 md:px-12 lg:px-16">
        <motion.h2
          id="socials-heading"
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-[0.95]"
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={headingTransition}
        >
          <span className="block text-white">{socialsSection.headingLine1}</span>
          <span
            className="block"
            style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#CCFF00",
            }}
          >
            {socialsSection.headingLine2}
          </span>
        </motion.h2>

        <motion.p
          className="text-sm md:text-base mt-6 md:mt-8"
          style={{
            color: "var(--color-dark-500)",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
          }}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={createFadeUpTransition(0.3)}
        >
          {socialsSection.subtext}
        </motion.p>
      </div>

      {/* Right Column - 70% width */}
      <div className="hidden md:flex relative z-10 w-[70%] h-full flex-col">
        {/* Cards Area - 80% height */}
        <div
          className="relative flex-[0.8] flex items-center justify-center"
          role="img"
          aria-label="Collection of photos"
        >
          <div className="relative">
            {CARD_POSITIONS.map((position, index) => (
              <PhotoCard
                key={index}
                imageSrc={socialsSection.cardImages[index]}
                position={position}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>

        {/* Links Area - 20% height */}
        <motion.nav
          className="flex-[0.2] flex items-center justify-center gap-6 md:gap-10"
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={createFadeUpTransition(0.4)}
          aria-label="Social media links"
        >
          {socialLinks.map((social) => (
            <SocialLinkItem key={social.id} social={social} />
          ))}
        </motion.nav>
      </div>
    </section>
  );
}
