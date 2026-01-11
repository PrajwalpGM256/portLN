import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { projects, projectsSection } from "@/data";
import { ProjectCard } from "./ProjectCard";
import { MobileProjectCard } from "./MobileProjectCard";
import { theme } from "@/config/theme";

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: false, margin: "-100px" });

  // Mobile carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);

  // Show only featured projects
  const featuredProjects = projects.filter((p) => p.featured);

  // Calculate total scroll width needed
  const cardWidth = 380;
  const cardGap = 40;
  const totalCards = featuredProjects.length;
  const endPadding = 600;
  const totalScrollWidth = totalCards * (cardWidth + cardGap) + endPadding;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0.15, 0.95],
    ["3%", `-${totalScrollWidth - (typeof window !== 'undefined' ? window.innerWidth : 1200)}px`]
  );

  const headerY = useTransform(scrollYProgress, [0, 0.05], [30, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.03], [0.2, 1]);
  const cardsOpacity = useTransform(scrollYProgress, [0.02, 0.08], [0.2, 1]);

  // Mobile navigation
  const paginate = (newDirection: number) => {
    const newIndex = currentIndex + newDirection;
    if (newIndex >= 0 && newIndex < featuredProjects.length) {
      setCurrentIndex(newIndex);
      setPage([page + newDirection, newDirection]);
    }
  };

  // Swipe handling
  const swipeConfidenceThreshold = 5000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <>
      {/* ==================== MOBILE VIEW ==================== */}
      <section id="work" className="md:hidden relative py-12 site-section">
        {/* Header */}
        <div className="site-container mb-10 pb-6">
          <motion.div
            className="flex items-center gap-4 mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <span className="w-12 h-px" style={{ backgroundColor: "var(--color-primary)" }} />
            <span className="text-label">{projectsSection.label}</span>
          </motion.div>

          <motion.h2
            className="text-4xl font-black tracking-tighter leading-none"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {projectsSection.title}
          </motion.h2>
        </div>

        {/* Card Carousel */}
        <div className="relative overflow-hidden mt-6 flex justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.3 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="w-full flex justify-center"
            >
              <MobileProjectCard
                project={featuredProjects[currentIndex]}
                index={currentIndex}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Page Indicator */}
        <div className="flex items-center justify-center mt-12 pt-6">
          <div className="flex gap-3">
            {featuredProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const dir = idx > currentIndex ? 1 : -1;
                  setCurrentIndex(idx);
                  setPage([idx, dir]);
                }}
                className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: idx === currentIndex ? "var(--color-primary)" : "var(--color-dark-700)",
                  transform: idx === currentIndex ? "scale(1.3)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Swipe hint */}
        <motion.p
          className="text-center mt-4 text-[11px] tracking-wide"
          style={{ color: "var(--color-dark-600)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1 }}
        >
          ← Swipe to explore →
        </motion.p>
      </section>

      {/* ==================== DESKTOP VIEW ==================== */}
      <section
        ref={sectionRef}
        className="relative hidden md:block"
        style={{ height: `${totalScrollWidth}px` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
          {/* Section Header */}
          <motion.div
            ref={headerRef}
            className="site-container pt-20 pb-8 relative z-20"
            style={{ y: headerY, opacity: headerOpacity }}
          >
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="w-12 h-px" style={{ backgroundColor: "var(--color-primary)" }} />
              <span className="text-label">{projectsSection.label}</span>
            </motion.div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
              <motion.h2
                className="text-7xl lg:text-8xl font-black tracking-tighter leading-none"
                initial={{ opacity: 0, y: 60 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {projectsSection.title}
              </motion.h2>

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

          {/* Horizontal scroll gallery */}
          <motion.div
            ref={horizontalRef}
            className="flex-1 flex items-start gap-10 lg:gap-12 relative z-10 pb-12"
            style={{
              x,
              opacity: cardsOpacity,
              paddingLeft: "clamp(48px, 8vw, 140px)",
              paddingRight: "100vw",
            }}
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {/* Gradient overlays */}
          <div
            className="absolute left-0 top-[20%] bottom-8 w-20 lg:w-24 pointer-events-none z-30"
            style={{ background: `linear-gradient(90deg, ${theme.black} 0%, ${theme.black}80 40%, transparent 100%)` }}
          />
          <div
            className="absolute right-0 top-[20%] bottom-8 w-20 lg:w-24 pointer-events-none z-30"
            style={{ background: `linear-gradient(270deg, ${theme.black} 0%, ${theme.black}80 40%, transparent 100%)` }}
          />
        </div>
      </section>
    </>
  );
}