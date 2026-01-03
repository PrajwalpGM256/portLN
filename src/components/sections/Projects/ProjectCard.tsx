import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/data";
import { theme } from "@/config/theme";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 400, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 400, damping: 30 });

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
    setIsHovered(false);
  };

  return (
    <motion.article
      ref={cardRef}
      className="relative flex-shrink-0 cursor-pointer group"
      style={{
        width: "440px",
        height: "340px",
        perspective: "1200px",
        paddingLeft: "8px",
        paddingBottom: "8px",
      }}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{
        duration: 1.2,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1]
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* L-shaped border - Left side */}
      <motion.div
        className="absolute left-0 top-[15%] bottom-0 w-[2px] pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, ${project.color}60, ${project.color})`,
        }}
        animate={{
          opacity: isHovered ? 1 : 0.5,
          boxShadow: isHovered ? `0 0 10px ${project.color}50` : 'none',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* L-shaped border - Bottom side */}
      <motion.div
        className="absolute bottom-0 left-0 right-[15%] h-[2px] pointer-events-none"
        style={{
          background: `linear-gradient(to right, ${project.color}, ${project.color}60)`,
        }}
        animate={{
          opacity: isHovered ? 1 : 0.5,
          boxShadow: isHovered ? `0 0 10px ${project.color}50` : 'none',
        }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="relative overflow-hidden h-full ml-2 mb-2"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          background: theme.cardBgGradient,
          borderRadius: "0 28px 0 0",
        }}
        animate={{
          scale: isHovered ? 1.02 : 1,
          boxShadow: isHovered
            ? `0 40px 80px -20px rgba(0,0,0,0.8), 0 0 0 1px ${project.color}30, inset 0 1px 0 0 rgba(255,255,255,0.1)`
            : `0 20px 40px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 0 rgba(255,255,255,0.05)`,
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Animated border glow on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${project.color}20 0%, transparent 50%, ${project.color}10 100%)`,
            opacity: 0,
            borderRadius: "0 28px 0 0",
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Background index number - Large Lando style */}
        <motion.div
          className="absolute -bottom-4 -right-2 text-[140px] font-black leading-none select-none pointer-events-none"
          style={{
            color: project.color,
            WebkitTextStroke: `2px ${project.color}20`,
            WebkitTextFillColor: 'transparent',
          }}
          animate={{
            opacity: isHovered ? 0.3 : 0.15,
            x: isHovered ? -10 : 0,
            y: isHovered ? -10 : 0,
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {String(index + 1).padStart(2, '0')}
        </motion.div>

        {/* Content container */}
        <div className="relative z-10 h-full flex flex-col p-6 pb-8">

          {/* ====== Header: Category & Year ====== */}
          <div className="flex items-center justify-between mb-4 pb-2">
            <motion.span
              className="inline-flex items-center text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}cc 100%)`,
                color: theme.black,
                boxShadow: `0 4px 15px ${project.color}40`,
              }}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
            >
              {project.category}
            </motion.span>

            <motion.span
              className="text-xs font-mono tracking-wider"
              style={{ color: theme.cardTextMuted }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.15 }}
            >
              {project.year}
            </motion.span>
          </div>

          {/* ====== Title ====== */}
          <motion.h3
            className="text-3xl font-black tracking-tight leading-[1.1] mb-3 pb-2"
            style={{ color: theme.cardText }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 + 0.2 }}
          >
            {project.title}
          </motion.h3>

          {/* ====== Description ====== */}
          <motion.div
            className="text-sm leading-[1.6] mb-4 pb-2"
            style={{ color: theme.cardTextSecondary }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 + 0.25 }}
          >
            <span className="line-clamp-2">{project.description}</span>
            {(project.github || project.live) ? (
              <motion.a
                href={project.live || project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 ml-1 font-semibold"
                style={{ color: project.color }}
                whileHover={{ x: 3 }}
              >
                more
                <ArrowUpRight size={12} />
              </motion.a>
            ) : (
              <span
                className="inline-flex items-center gap-1 ml-1 font-semibold opacity-50 cursor-default"
                style={{ color: project.color }}
              >
                more
                <ArrowUpRight size={12} />
              </span>
            )}
          </motion.div>

          {/* ====== Key Highlights ====== */}
          {project.highlights && project.highlights.length > 0 && (
            <motion.div
              className="flex flex-wrap gap-3 mb-4 pb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.28 }}
            >
              {project.highlights.map((highlight, _i) => (
                <span
                  key={highlight}
                  className="text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"
                  style={{ color: project.color }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: project.color }}
                  />
                  {highlight}
                </span>
              ))}
            </motion.div>
          )}

          {/* ====== Tech Stack ====== */}
          <motion.div
            className="flex flex-wrap gap-x-4 gap-y-1 mb-5 pb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
          >
            {project.tech.slice(0, 5).map((tech, _i) => (
              <motion.span
                key={tech}
                className="text-[12px] font-medium"
                style={{
                  color: theme.cardTextSecondary,
                }}
                whileHover={{
                  color: project.color,
                }}
              >
                {tech}
              </motion.span>
            ))}
            {project.tech.length > 5 && (
              <span
                className="text-[12px] font-medium"
                style={{
                  color: theme.cardTextMuted,
                }}
              >
                +{project.tech.length - 5} more
              </span>
            )}
          </motion.div>

          {/* ====== Action Links ====== */}
          <motion.div
            className="flex items-center gap-3 pt-3 pb-2 border-t"
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.35 }}
            onClick={(e) => e.stopPropagation()}
          >
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all"
                style={{
                  color: theme.cardTextSecondary,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
                whileHover={{
                  color: theme.cardText,
                  background: 'rgba(255,255,255,0.1)',
                  x: 3,
                }}
              >
                <Github size={14} />
                <span>Code</span>
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
                style={{
                  color: theme.black,
                  background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}dd 100%)`,
                  boxShadow: `0 4px 15px ${project.color}30`,
                }}
                whileHover={{
                  x: 3,
                  boxShadow: `0 6px 20px ${project.color}50`,
                }}
              >
                <span>Live Demo</span>
                <ArrowUpRight size={14} />
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Corner accent */}
        <div
          className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 100% 0%, ${project.color}15 0%, transparent 70%)`,
            borderTopRightRadius: '28px',
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{
            background: `linear-gradient(to top, ${theme.cardBg} 0%, transparent 100%)`,
          }}
        />
      </motion.div>
    </motion.article>
  );
}