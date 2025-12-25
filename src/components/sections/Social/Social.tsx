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

export function Social() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="socials"
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
      style={{ backgroundColor: "#000000" }}
      aria-labelledby="socials-heading"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, rgba(255,128,0,0.05) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      {/* Header */}
      <header className="text-center mb-16 md:mb-20 relative z-10">
        <motion.h2
          id="socials-heading"
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95]"
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
      </header>

      {/* Photo Cards */}
      <div
        className="relative h-[320px] md:h-[420px] lg:h-[500px] flex items-center justify-center mb-12 md:mb-16"
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

      {/* Subtext */}
      <motion.p
        className="text-center text-base md:text-lg mb-8 pt-20 md:pt-32"
        style={{
          color: "var(--color-dark-500)",
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
        }}
        variants={fadeUpVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={createFadeUpTransition(0.5)}
      >
        {socialsSection.subtext}
      </motion.p>

      {/* Social Links */}
      <motion.nav
        className="flex flex-wrap justify-center gap-6 md:gap-10"
        variants={fadeUpVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={createFadeUpTransition(0.6)}
        aria-label="Social media links"
      >
        {socialLinks.map((social) => (
          <SocialLinkItem key={social.id} social={social} />
        ))}
      </motion.nav>
    </section>
  );
}
