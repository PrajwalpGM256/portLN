import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Brain, Database, Cloud, LucideIcon } from "lucide-react";
import type { SkillCategory } from "@/data";

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  brain: Brain,
  database: Database,
  cloud: Cloud,
};

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

export function SkillCard({ category, index }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[category.icon] || Code2;

  return (
    <motion.article
      className="relative flex-shrink-0 cursor-pointer group"
      style={{ width: "min(320px, 80vw)" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main card container - Lando's hall of fame style */}
      <motion.div
        className="relative overflow-hidden rounded-2xl"
        style={{
          backgroundColor: `${category.color}08`,
          border: `1px solid ${category.color}15`,
        }}
        animate={{
          backgroundColor: isHovered ? `${category.color}12` : `${category.color}08`,
          borderColor: isHovered ? `${category.color}40` : `${category.color}15`,
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Top accent bar */}
        <motion.div
          className="h-1 w-full"
          style={{ backgroundColor: category.color }}
          initial={{ scaleX: 0, transformOrigin: "left" }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
        />

        {/* Visual area - Icon display like helmet image */}
        <div className="relative h-48 md:h-56 flex items-center justify-center overflow-hidden">
          {/* Background glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 50% 80%, ${category.color}20 0%, transparent 60%)`,
            }}
            animate={{
              opacity: isHovered ? 1 : 0.5,
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Large icon - like helmet display */}
          <motion.div
            className="relative z-10"
            animate={{
              scale: isHovered ? 1.1 : 1,
              y: isHovered ? -8 : 0,
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Glow ring behind icon */}
            <motion.div
              className="absolute inset-0 blur-2xl rounded-full"
              style={{ 
                backgroundColor: category.color,
                width: 120,
                height: 120,
                marginLeft: -20,
                marginTop: -20,
              }}
              animate={{ opacity: isHovered ? 0.4 : 0.15 }}
              transition={{ duration: 0.4 }}
            />
            
            <Icon
              size={80}
              strokeWidth={1}
              style={{ color: category.color }}
              className="relative z-10"
            />
          </motion.div>

          {/* Index number - subtle like Lando's year display */}
          <motion.span
            className="absolute bottom-4 right-4 text-6xl font-black select-none"
            style={{ color: category.color, opacity: 0.1 }}
            animate={{ opacity: isHovered ? 0.2 : 0.1 }}
          >
            0{index + 1}
          </motion.span>
        </div>

        {/* Content area - clean like Lando's card footer */}
        <div className="p-5 md:p-6">
          {/* Category title */}
          <motion.h3
            className="text-xl md:text-2xl font-bold mb-2 tracking-tight"
            animate={{ color: isHovered ? category.color : "#ffffff" }}
            transition={{ duration: 0.3 }}
          >
            {category.title}
          </motion.h3>

          {/* Description */}
          <p
            className="text-sm mb-5 leading-relaxed"
            style={{ color: "var(--color-dark-400)" }}
          >
            {category.description}
          </p>

          {/* Skills list - like Lando's minimal detail reveal */}
          <div className="space-y-3">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                className="relative"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 + skillIndex * 0.05 + 0.3, duration: 0.4 }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span 
                    className="text-xs font-semibold"
                    style={{ color: category.color }}
                  >
                    {skill.level}%
                  </span>
                </div>
                
                {/* Progress bar */}
                <div 
                  className="h-1 rounded-full overflow-hidden"
                  style={{ backgroundColor: "var(--color-dark-800)" }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: category.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: false }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.1 + skillIndex * 0.08 + 0.4,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hover overlay - lime fade like Lando's */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background: `linear-gradient(to top, ${category.color}20, transparent)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.article>
  );
}
