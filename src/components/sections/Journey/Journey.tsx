import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { experience, journeySection, type Experience } from "@/data";

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
      className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24 z-20"
      style={{ 
        backgroundColor: "#000000",
        marginTop: "-100px",
        borderTopLeftRadius: "2rem",
        borderTopRightRadius: "2rem",
        boxShadow: "0 -10px 40px rgba(0,0,0,0.5)"
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

      {/* Content Container */}
      <div className="relative z-10 flex flex-col">
        {/* Header */}
        <div className="site-container pb-8">
          <div>
            <motion.span
              className="text-label block mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
            >
              {journeySection.label}
            </motion.span>
            <motion.h2
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1 }}
            >
              <span className="block">{journeySection.title}</span>
              <span className="block" style={{ color: "var(--color-primary)" }}>
                {journeySection.subtitle}
              </span>
            </motion.h2>
          </div>
        </div>        {/* Story Cards - Full Width with fixed height container */}
        <div className="relative min-h-[400px] md:min-h-[450px] lg:min-h-[500px] mt-12 md:mt-16">
          <AnimatePresence mode="wait">
            <StoryCard key={activeExperience.id} experience={activeExperience} />
          </AnimatePresence>
        </div>

        {/* Progress Indicators with Navigation */}
        <div className="py-6 md:py-8 flex justify-center">
          <div className="flex items-center gap-4">
            {/* Prev Button */}
            <button
              onClick={goToPrev}
              className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/5 shrink-0"
              style={{ border: "1px solid var(--color-dark-700)" }}
              aria-label="Previous"
            >
              <ChevronLeft size={16} style={{ color: "var(--color-dark-400)" }} />
            </button>

            {/* Progress Bars */}
            <div className="flex items-center gap-2">
            {experience.map((exp, index) => (
              <button
                key={exp.id}
                onClick={() => goToSlide(index)}
                className="w-16 md:w-24"
                aria-label={`Go to ${exp.company}`}
              >
                {/* Progress bar background */}
                <div
                  className="h-1 rounded-full overflow-hidden"
                  style={{ backgroundColor: "var(--color-dark-800)" }}
                >
                  {/* Active progress */}
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
              className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/5 shrink-0"
              style={{ border: "1px solid var(--color-dark-700)" }}
              aria-label="Next"
            >
              <ChevronRight size={16} style={{ color: "var(--color-dark-400)" }} />
            </button>
          </div>
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
      className="absolute inset-0 flex items-start pt-0"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="site-container w-full">
        <div
          className="relative rounded-2xl md:rounded-3xl overflow-hidden p-6 md:p-10 lg:p-16"
          style={{
            background: `linear-gradient(135deg, ${exp.color}08 0%, transparent 50%)`,
            border: `1px solid ${exp.color}20`,
          }}
        >
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(${exp.color} 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />

          {/* Corner Accent */}
          <div
            className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48"
            style={{
              background: `radial-gradient(circle at 100% 0%, ${exp.color}15 0%, transparent 70%)`,
            }}
          />

          {/* Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            {/* Left - Main Info */}
            <div>
              {/* Role & Company */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span
                  className="text-sm md:text-base font-medium"
                  style={{ color: exp.color }}
                >
                  {exp.role}
                </span>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mt-2 pb-4">
                  {exp.company}
                </h3>
              </motion.div>

              {/* Location & Period */}
              <motion.div
                className="flex flex-wrap items-center gap-4 md:gap-6 mt-4 md:mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
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
                className="text-base md:text-lg lg:text-xl leading-relaxed mt-6 md:mt-8 max-w-xl"
                style={{ color: "var(--color-dark-300)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {exp.story}
              </motion.p>
            </div>

            {/* Right - Highlights & Skills */}
            <div className="flex flex-col gap-8">
              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span
                  className="text-xs tracking-widest uppercase font-medium block pb-4"
                  style={{ color: "var(--color-dark-500)" }}
                >
                  Key Highlights
                </span>
                <ul className="space-y-4">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={highlight}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <span
                        className="w-6 h-0.5 flex-shrink-0"
                        style={{ backgroundColor: exp.color }}
                      />
                      <span
                        className="text-sm md:text-base"
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
                transition={{ delay: 0.8 }}
              >
                <span
                  className="text-xs tracking-widest uppercase font-medium block pb-4"
                  style={{ color: "var(--color-dark-500)" }}
                >
                  Technologies
                </span>
                <div className="flex flex-wrap gap-2">
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
            className="absolute bottom-4 right-6 md:bottom-8 md:right-12 text-[100px] md:text-[180px] font-black leading-none select-none pointer-events-none"
            style={{ color: exp.color, opacity: 0.05 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {String(experience.findIndex((e) => e.id === exp.id) + 1).padStart(2, "0")}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
