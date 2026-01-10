import { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import { techStack, techStackSection } from "@/data";
import { TechCard } from "./TechCard";
import { theme } from "@/config/theme";

// Grid column count for different breakpoints (used for columnIndex calculation)
const COLUMNS = { sm: 2, md: 3, lg: 4, xl: 6 };

export function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: false, margin: "-100px" });

  // Scroll progress for parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Calculate column index based on item index (assumes 4 columns on xl)
  const getColumnIndex = (index: number): number => {
    // Use xl column count as base for calculation
    return index % COLUMNS.xl;
  };

  return (
    <section
      ref={sectionRef}
      id="tech"
      className="site-section relative overflow-visible"
      style={{ backgroundColor: theme.black }}
    >
      {/* Background gradient accent */}
      {/* Gradient background removed for cleaner look */}

      {/* Header */}
      <div ref={headerRef} className="site-container mb-20 md:mb-28 lg:mb-36 pb-8 md:pb-12 lg:pb-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16">
          {/* Left side - Title */}
          <div className="lg:max-w-xl">
            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9]"
              initial={{ opacity: 0, y: 50 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="block">{techStackSection.titleLine1.toUpperCase()}</span>
            </motion.h2>
          </div>

          {/* Right side - Description */}
          <motion.div
            className="lg:max-w-md lg:pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "var(--color-dark-400)" }}
            >
              The <span style={{ color: "#CCFF00", fontWeight: 600 }}>programming languages</span>, <span style={{ color: "#9EFF00", fontWeight: 600 }}>frameworks</span>, <span style={{ color: "#66FF00", fontWeight: 600 }}>libraries</span>, and <span style={{ color: "#39FF14", fontWeight: 600 }}>cloud services</span> I use to build robust applications.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Grid - uniform cards with alternating parallax */}
      <div className="site-container overflow-hidden py-16">
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4 lg:gap-5"
        >
          {techStack.map((tech, index) => (
            <TechCard
              key={tech.id}
              tech={tech}
              index={index}
              columnIndex={getColumnIndex(index)}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
