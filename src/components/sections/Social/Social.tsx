import { useRef } from "react";
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

export function Social() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-50px" });

  return (
    <section
      ref={sectionRef}
      id="socials"
      className="relative h-screen flex overflow-hidden"
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

      {/* Left Column - 30% width - Heading */}
      <div className="relative z-10 w-[30%] h-full flex flex-col justify-center px-8 md:px-12 lg:px-16">
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
              color: "var(--color-dark-400)",
            }}
          >
            {socialsSection.headingLine2}
          </span>
        </motion.h2>

        {/* Subtext below heading */}
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
      <div className="relative z-10 w-[70%] h-full flex flex-col">
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

