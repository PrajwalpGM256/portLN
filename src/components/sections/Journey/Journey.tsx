import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { experience, journeySection, type Experience } from "@/data";
import { theme } from "@/config/theme";

export function Journey() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const activeExperience = experience[activeIndex];

  // Progress bar update (every 100ms)
  const startProgress = useCallback(() => {
    setProgress(0);
    if (progressRef.current) clearInterval(progressRef.current);

    const step = 100 / (journeySection.autoPlayInterval / 100);
    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + step;
      });
    }, 100);
  }, []);

  // Auto-switch cards
  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    startProgress();

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % experience.length);
      startProgress();
    }, journeySection.autoPlayInterval);
  }, [startProgress]);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    startAutoPlay();
  };

  const goToPrev = () => {
    const newIndex = activeIndex === 0 ? experience.length - 1 : activeIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = (activeIndex + 1) % experience.length;
    goToSlide(newIndex);
  };

  return (
    <section
      id="journey"
      className="relative h-screen overflow-hidden z-20 flex flex-col"
      style={{
        backgroundColor: theme.black,
        marginTop: "-100px",
        paddingTop: "100px",
        borderTopLeftRadius: "2rem",
        borderTopRightRadius: "2rem",
        boxShadow: `0 -10px 40px ${theme.accent}`
      }}
    >
      {/* Background with dynamic gradient based on active card */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: `radial-gradient(ellipse at 30% 50%, ${activeExperience.color}08 0%, transparent 50%)`,
        }}
        transition={{ duration: 1 }}
      />

      {/* Content Container - fills viewport */}
      <div className="relative z-10 flex flex-col flex-1 site-container py-6 md:py-8">
        {/* Header Row - Title on left, Nav on right */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8 pb-4 md:pb-6">
          {/* Title - Single Line */}
          <div className="flex-shrink-0">
            <motion.span
              className="text-label block mb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {journeySection.label}
            </motion.span>
            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span>{journeySection.title} </span>
              <span style={{ color: "var(--color-primary)" }}>
                {journeySection.subtitle}
              </span>
            </motion.h2>
          </div>

          {/* Loaders + Nav */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Prev Button */}
            <button
              onClick={goToPrev}
              className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/5 shrink-0"
              style={{ border: "1px solid var(--color-dark-700)" }}
              aria-label="Previous"
            >
              <ChevronLeft size={14} style={{ color: "var(--color-dark-400)" }} />
            </button>

            {/* Progress Bars */}
            <div className="flex items-center gap-1.5 md:gap-2">
              {experience.map((exp, index) => (
                <button
                  key={exp.id}
                  onClick={() => goToSlide(index)}
                  className="w-10 md:w-14 lg:w-16"
                  aria-label={`Go to ${exp.company}`}
                >
                  <div
                    className="h-1 rounded-full overflow-hidden"
                    style={{ backgroundColor: "var(--color-dark-800)" }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        backgroundColor: index === activeIndex ? exp.color : "var(--color-dark-600)",
                        width: index === activeIndex ? `${progress}%` : index < activeIndex ? "100%" : "0%",
                      }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/5 shrink-0"
              style={{ border: "1px solid var(--color-dark-700)" }}
              aria-label="Next"
            >
              <ChevronRight size={14} style={{ color: "var(--color-dark-400)" }} />
            </button>
          </div>
        </div>

        {/* Story Cards - Fills remaining height */}
        <div className="relative flex-1 min-h-0">
          <AnimatePresence mode="wait">
            <StoryCard key={activeExperience.id} experience={activeExperience} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// Story Card Component
interface StoryCardProps {
  experience: Experience;
}

function StoryCard({ experience: exp }: StoryCardProps) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-full h-full">
        <div
          className="relative rounded-2xl overflow-hidden p-6 md:p-10 lg:p-12 h-full flex flex-col"
          style={{
            background: `linear-gradient(135deg, ${exp.color}12 0%, transparent 50%)`,
            border: `1px solid ${exp.color}20`,
          }}
        >
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(${exp.color} 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />

          {/* Corner Accent */}
          <div
            className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48"
            style={{
              background: `radial-gradient(circle at 100% 0%, ${exp.color}15 0%, transparent 70%)`,
            }}
          />

          {/* Content Grid - 55/45 split */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-16 flex-1">
            {/* Left - Main Info */}
            <div className="flex flex-col justify-start">
              {/* Role & Company */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <span
                  className="text-lg md:text-xl font-semibold tracking-wide pb-1"
                  style={{ color: exp.color }}
                >
                  {exp.role}
                </span>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mt-2 pb-2">
                  {exp.company}
                </h3>
              </motion.div>

              {/* Location & Period */}
              <motion.div
                className="flex flex-wrap items-center gap-4 md:gap-5 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-2">
                  <MapPin size={14} style={{ color: "var(--color-dark-500)" }} />
                  <span className="text-sm" style={{ color: "var(--color-dark-400)" }}>
                    {exp.location}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} style={{ color: "var(--color-dark-500)" }} />
                  <span className="text-sm" style={{ color: "var(--color-dark-400)" }}>
                    {exp.period}
                  </span>
                </div>
                {exp.current && (
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${exp.color}20`, color: exp.color }}
                  >
                    CURRENT
                  </span>
                )}
              </motion.div>

              {/* Story */}
              <motion.p
                className="text-sm md:text-base lg:text-lg leading-relaxed mt-6 pt-4 pb-2 max-w-lg"
                style={{ color: "var(--color-dark-300)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                {exp.story}
              </motion.p>
            </div>

            {/* Right - Highlights & Skills */}
            <div className="flex flex-col justify-start gap-10">
              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span
                  className="text-sm tracking-widest uppercase font-bold block mb-5 pb-2"
                  style={{ color: "var(--color-dark-400)" }}
                >
                  Key Highlights
                </span>
                <ul className="space-y-3">
                  {exp.highlights.slice(0, 5).map((highlight, i) => (
                    <motion.li
                      key={highlight}
                      className="flex gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 + i * 0.1 }}
                    >
                      <span
                        className="w-4 h-[2px] flex-shrink-0 rounded-full"
                        style={{
                          backgroundColor: exp.color,
                          marginTop: "0.75em"
                        }}
                      />
                      <span
                        className="text-sm md:text-base leading-relaxed"
                        style={{ color: "var(--color-dark-300)" }}
                      >
                        {highlight}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
              >
                <span
                  className="text-sm tracking-widest uppercase font-bold block mb-5 pb-2"
                  style={{ color: "var(--color-dark-400)" }}
                >
                  Technologies
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs md:text-sm px-3 py-1.5 rounded-full"
                      style={{
                        backgroundColor: "var(--color-dark-900)",
                        border: "1px solid var(--color-dark-700)",
                        color: "var(--color-dark-300)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Large Index Number */}
          <motion.div
            className="absolute bottom-4 right-6 md:bottom-8 md:right-12 text-[80px] md:text-[140px] font-black leading-none select-none pointer-events-none"
            style={{ color: exp.color, opacity: 0.15 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {String(experience.findIndex((e) => e.id === exp.id) + 1).padStart(2, "0")}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
