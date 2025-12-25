import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects, projectsSection } from "@/data";
import { ProjectCard } from "./ProjectCard";
import { theme } from "@/config/theme";

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: false, margin: "-100px" });
  
  const featuredProjects = projects.filter((p) => p.featured);
  
  // Calculate total scroll width needed
  const cardWidth = 420; // approximate card width
  const cardGap = 48; // gap between cards
  const totalCards = featuredProjects.length + 1; // +1 for view all card
  const totalScrollWidth = totalCards * (cardWidth + cardGap);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Transform vertical scroll to horizontal movement - starts after header is visible
  const x = useTransform(
    scrollYProgress, 
    [0.15, 0.95], // Start horizontal scroll after 15%, end at 95% (slower, less sensitive)
    ["0%", `-${totalScrollWidth - (typeof window !== 'undefined' ? window.innerWidth : 1200)}px`]
  );

  // Header appears with more scroll range (less sensitive)
  const headerY = useTransform(scrollYProgress, [0, 0.08], [60, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  
  // Cards fade in after header with more scroll range
  const cardsOpacity = useTransform(scrollYProgress, [0.08, 0.18], [0, 1]);

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
            paddingLeft: "var(--padding-x-mobile)",
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
          
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
          
          {/* View All card */}
          <motion.a
            href="#"
            className="relative flex-shrink-0 flex items-center justify-center cursor-pointer group"
            style={{ 
              width: "min(280px, 70vw)",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="w-full h-full min-h-[450px] rounded-3xl flex flex-col items-center justify-center gap-8"
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
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ 
                  border: "1px solid var(--color-dark-700)",
                }}
                whileHover={{ 
                  borderColor: "var(--color-primary)",
                  scale: 1.1,
                }}
              >
                <ArrowRight 
                  size={28} 
                  style={{ color: "var(--color-primary)" }} 
                />
              </motion.div>
              <span 
                className="text-sm tracking-widest"
                style={{ color: "var(--color-dark-500)" }}
              >
                VIEW ALL PROJECTS
              </span>
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Gradient overlays - positioned to cover only the cards area */}
        <div 
          className="absolute left-0 top-[20%] bottom-8 w-8 md:w-16 pointer-events-none z-30"
          style={{ background: `linear-gradient(90deg, ${theme.black}, transparent)` }}
        />
        <div 
          className="absolute right-0 top-[20%] bottom-8 w-16 md:w-32 pointer-events-none z-30"
          style={{ background: `linear-gradient(270deg, ${theme.black}, transparent)` }}
        />
      </div>
    </section>
  );
}