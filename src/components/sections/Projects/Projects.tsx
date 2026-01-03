import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { projects, projectsSection } from "@/data";
import { ProjectCard } from "./ProjectCard";
import { theme } from "@/config/theme";

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: false, margin: "-100px" });

  // Show all projects instead of just featured
  const allProjects = projects;

  // Calculate total scroll width needed
  const cardWidth = 380; // Fixed card width
  const cardGap = 40; // gap between cards
  const totalCards = allProjects.length;
  const endPadding = 250; // Extra padding to ensure last card is fully visible
  const totalScrollWidth = totalCards * (cardWidth + cardGap) + endPadding;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Transform vertical scroll to horizontal movement - smoother, starts later
  const x = useTransform(
    scrollYProgress,
    [0.15, 0.95], // Start horizontal scroll after 15%, end at 95% for smoother feel
    ["3%", `-${totalScrollWidth - (typeof window !== 'undefined' ? window.innerWidth : 1200)}px`]
  );

  // Header appears immediately when section is in view
  const headerY = useTransform(scrollYProgress, [0, 0.05], [30, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.03], [0.2, 1]);

  // Cards fade in slightly after header
  const cardsOpacity = useTransform(scrollYProgress, [0.02, 0.08], [0.2, 1]);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative"
      style={{
        // Height determines how long we "scroll" through this section
        height: `${totalScrollWidth}px`,
      }}
    >
      {/* Sticky container that stays in view during scroll */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Background accent */}
        {/* Gradient background removed for cleaner look */}

        {/* Section Header - positioned at top */}
        <motion.div
          ref={headerRef}
          className="site-container pt-16 md:pt-20 pb-6 md:pb-8 relative z-20"
          style={{ y: headerY, opacity: headerOpacity }}
        >
          {/* Label */}
          <motion.div
            className="flex items-center gap-4 mb-6 md:mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="w-12 h-px"
              style={{ backgroundColor: "var(--color-primary)" }}
            />
            <span className="text-label">{projectsSection.label}</span>
          </motion.div>

          {/* Title row with scroll indicator */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
            <motion.h2
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none"
              initial={{ opacity: 0, y: 60 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {projectsSection.title}
            </motion.h2>

            {/* Scroll progress indicator */}
            <motion.div
              className="flex items-center gap-4 lg:mb-4"
              initial={{ opacity: 0 }}
              animate={isHeaderInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              <span className="text-xs tracking-widest" style={{ color: "var(--color-dark-600)" }}>
                SCROLL
              </span>
              <div className="w-24 h-0.5 rounded-full overflow-hidden" style={{ backgroundColor: "var(--color-dark-800)" }}>
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

        {/* Horizontal scroll gallery - positioned below header */}
        <motion.div
          ref={horizontalRef}
          className="flex-1 flex items-start gap-8 md:gap-10 lg:gap-12 relative z-10 pb-8 md:pb-12"
          style={{
            x,
            opacity: cardsOpacity,
            paddingLeft: "clamp(48px, 8vw, 140px)", // More breathing room for first card
            paddingRight: "100vw", // Extra space at the end
          }}
        >
          <style>{`
            @media (min-width: 768px) {
              .projects-horizontal { 
                padding-left: var(--padding-x-tablet) !important; 
              }
            }
            @media (min-width: 1024px) {
              .projects-horizontal { 
                padding-left: var(--padding-x-desktop) !important; 
              }
            }
            @media (min-width: 1440px) {
              .projects-horizontal { 
                padding-left: var(--padding-x-wide) !important; 
              }
            }
          `}</style>

          {allProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Gradient overlays - subtle fade effect */}
        <div
          className="absolute left-0 top-[20%] bottom-8 w-12 md:w-20 lg:w-24 pointer-events-none z-30"
          style={{
            background: `linear-gradient(90deg, ${theme.black} 0%, ${theme.black}80 40%, transparent 100%)`
          }}
        />
        <div
          className="absolute right-0 top-[20%] bottom-8 w-12 md:w-20 lg:w-24 pointer-events-none z-30"
          style={{
            background: `linear-gradient(270deg, ${theme.black} 0%, ${theme.black}80 40%, transparent 100%)`
          }}
        />
      </div>
    </section>
  );
}