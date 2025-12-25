import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { skillCategories, skillsSection } from "@/data";
import { SkillCard } from "./SkillCard";

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="site-section relative overflow-hidden"
    >
      {/* Background accent */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          y: backgroundY,
          background: `
            radial-gradient(ellipse at 100% 0%, rgba(139,92,246,0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 0% 100%, rgba(34,197,94,0.05) 0%, transparent 50%)
          `,
        }}
      />

      {/* Header */}
      <header ref={headerRef} className="site-container mb-16 md:mb-20 lg:mb-24">
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
          <span className="text-label">{skillsSection.label}</span>
        </motion.div>

        {/* Title & Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none"
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
            className="text-base md:text-lg max-w-md lg:text-right lg:mb-3"
            style={{ color: "var(--color-dark-400)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {skillsSection.subtitle}
          </motion.p>
        </div>
      </header>

      {/* Skills Grid */}
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        className="site-container mt-20 md:mt-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <div
          className="h-px w-full"
          style={{
            background: "linear-gradient(90deg, var(--color-primary), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}