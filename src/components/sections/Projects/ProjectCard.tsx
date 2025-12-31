import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative flex-shrink-0 cursor-pointer group"
      style={{
        width: "min(420px, 85vw)",
        perspective: "1000px",
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{
        duration: 1,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1]
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative rounded-3xl overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          backgroundColor: `${project.color}08`,
          border: `1px solid ${project.color}20`,
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 50% 0%, ${project.color}12 0%, transparent 50%),
              radial-gradient(ellipse at 80% 100%, ${project.color}08 0%, transparent 40%)
            `,
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Top accent bar with glow */}
        <div className="absolute top-0 left-0 right-0">
          <div
            className="h-1 w-full"
            style={{ backgroundColor: project.color }}
          />
          <div
            className="h-16 w-full"
            style={{
              background: `linear-gradient(to bottom, ${project.color}20, transparent)`,
            }}
          />
        </div>

        {/* ====== CARD CONTENT WITH EQUAL PADDING ====== */}
        <div className="p-5 md:p-6 lg:p-8">

          {/* Top area - Index number */}
          <div className="relative h-28 md:h-36 mb-4">
            <motion.div
              className="absolute top-0 right-0 text-[90px] md:text-[110px] font-black leading-none select-none"
              style={{
                color: project.color,
                opacity: 0.15,
              }}
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 0.15 }}
              transition={{ duration: 1, delay: index * 0.15 + 0.3 }}
            >
              0{index + 1}
            </motion.div>
          </div>

          {/* Category pill */}
          <motion.div
            className="mb-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
          >
            <span
              className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest px-4 py-2 rounded-full"
              style={{
                backgroundColor: `${project.color}18`,
                color: project.color,
              }}
            >
              {project.category.toUpperCase()}
              <span style={{ opacity: 0.5 }}>·</span>
              <span style={{ opacity: 0.8 }}>{project.year}</span>
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-2xl md:text-3xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-sm md:text-base leading-relaxed mb-6"
            style={{ color: "var(--color-dark-400)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
          >
            {project.description}
          </motion.p>

          {/* Tech stack */}
          <motion.div
            className="flex flex-wrap gap-2 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
          >
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1.5 rounded-full font-medium"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  color: "var(--color-dark-300)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Action links */}
          <motion.div
            className="relative z-50 flex items-center gap-6 pt-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
            onClick={(e) => e.stopPropagation()}
          >
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: "var(--color-dark-400)" }}
                whileHover={{ color: "#fff", x: 4 }}
              >
                <Github size={18} />
                <span>View Code</span>
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium"
                style={{ color: project.color }}
                whileHover={{ x: 4 }}
              >
                <span>Live Demo</span>
                <ArrowUpRight size={18} />
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Hover border glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            border: `2px solid ${project.color}`,
            opacity: 0,
          }}
          whileHover={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}