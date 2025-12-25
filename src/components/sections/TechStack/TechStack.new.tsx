import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { skillCategories, skillsSection } from "@/data";
import { SkillCard } from "./SkillCard";

export function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: false, margin: "-100px" });

  // Calculate total scroll width for horizontal scroll
  const cardWidth = 340; // card width
  const cardGap = 32; // gap between cards
  const totalCards = skillCategories.length + 1; // +1 for CTA card
  const totalScrollWidth = totalCards * (cardWidth + cardGap) + 400;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Transform vertical scroll to horizontal movement
  const x = useTransform(
    scrollYProgress,
    [0.08, 0.95],
    ["0%", `-${totalScrollWidth - (typeof window !== "undefined" ? window.innerWidth : 1200)}px`]
  );

  // Header animations - appear quickly
  const headerY = useTransform(scrollYProgress, [0, 0.03], [40, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.04], [0, 1]);

  // Cards fade in after header
  const cardsOpacity = useTransform(scrollYProgress, [0.03, 0.08], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative"
      style={{
        height: `${totalScrollWidth}px`,
      }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Background gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.04) 0%, transparent 50%)",
          }}
        />

        {/* Section Header - Lando's Hall of Fame style */}
        <motion.div
          ref={headerRef}
          className="site-container pt-16 md:pt-20 pb-8 md:pb-10 relative z-20"
          style={{ y: headerY, opacity: headerOpacity }}
        >
          {/* Label line */}
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="w-12 h-px"
              style={{ backgroundColor: "var(--color-primary)" }}
            />
            <span className="text-label">{skillsSection.label}</span>
          </motion.div>

          {/* Title row with scroll indicator */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
            <div>
              <motion.h2
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-4"
                initial={{ opacity: 0, y: 60 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {skillsSection.title}
              </motion.h2>

              <motion.p
                className="text-base md:text-lg max-w-md"
                style={{ color: "var(--color-dark-400)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {skillsSection.subtitle}
              </motion.p>
            </div>

            {/* Scroll progress indicator */}
            <motion.div
              className="flex items-center gap-4 lg:mb-4"
              initial={{ opacity: 0 }}
              animate={isHeaderInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              <span
                className="text-xs tracking-widest"
                style={{ color: "var(--color-dark-600)" }}
              >
                SCROLL
              </span>
              <div
                className="w-24 h-0.5 rounded-full overflow-hidden"
                style={{ backgroundColor: "var(--color-dark-800)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    scaleX: scrollYProgress,
                    transformOrigin: "left",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Horizontal scroll gallery - like Lando's helmet cards */}
        <motion.div
          className="flex-1 flex items-start gap-8 md:gap-10 relative z-10 pb-8 md:pb-12"
          style={{
            x,
            opacity: cardsOpacity,
            paddingLeft: "var(--padding-x-mobile)",
            paddingRight: "100vw",
          }}
        >
          <style>{`
            @media (min-width: 768px) {
              .skills-horizontal {
                padding-left: var(--padding-x-tablet) !important;
              }
            }
            @media (min-width: 1024px) {
              .skills-horizontal {
                padding-left: var(--padding-x-desktop) !important;
              }
            }
            @media (min-width: 1440px) {
              .skills-horizontal {
                padding-left: var(--padding-x-wide) !important;
              }
            }
          `}</style>

          {skillCategories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}

          {/* View All / CTA card - like Lando's "See more" */}
          <motion.a
            href="#contact"
            className="relative flex-shrink-0 flex items-center justify-center cursor-pointer group"
            style={{ width: "min(280px, 70vw)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="w-full h-full min-h-[400px] rounded-2xl flex flex-col items-center justify-center gap-6"
              style={{
                border: "1px dashed var(--color-dark-700)",
              }}
              whileHover={{
                borderColor: "var(--color-primary)",
                backgroundColor: "rgba(34,197,94,0.03)",
              }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  border: "1px solid var(--color-dark-700)",
                }}
                whileHover={{
                  borderColor: "var(--color-primary)",
                  scale: 1.1,
                }}
              >
                <ArrowRight size={24} style={{ color: "var(--color-primary)" }} />
              </motion.div>
              <div className="text-center">
                <span
                  className="text-xs tracking-widest block mb-2"
                  style={{ color: "var(--color-dark-500)" }}
                >
                  LET'S WORK TOGETHER
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--color-primary)" }}
                >
                  GET IN TOUCH
                </span>
              </div>
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Gradient overlays */}
        <div
          className="absolute left-0 top-[20%] bottom-8 w-8 md:w-16 pointer-events-none z-30"
          style={{ background: "linear-gradient(90deg, black, transparent)" }}
        />
        <div
          className="absolute right-0 top-[20%] bottom-8 w-16 md:w-32 pointer-events-none z-30"
          style={{ background: "linear-gradient(270deg, black, transparent)" }}
        />
      </div>
    </section>
  );
}
