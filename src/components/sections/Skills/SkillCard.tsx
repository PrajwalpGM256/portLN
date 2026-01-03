import { motion } from "framer-motion";
import { Code2, Database, Brain, Cloud, FileCode } from "lucide-react";
import type { SkillCategory } from "@/data";

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

const iconMap = {
  code: Code2,
  database: Database,
  brain: Brain,
  cloud: Cloud,
  languages: FileCode,
} as const;

export function SkillCard({ category, index }: SkillCardProps) {
  const Icon = iconMap[category.icon];

  return (
    <motion.article
      className="group relative rounded-3xl overflow-hidden"
      style={{
        backgroundColor: `${category.color}08`,
        border: `1px solid ${category.color}15`,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -4 }}
    >
      {/* Top accent bar */}
      <div
        className="h-1 w-full"
        style={{ backgroundColor: category.color }}
      />

      {/* Hover gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${category.color}15, transparent 70%)`,
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />

      {/* Content */}
      <div className="relative p-8 md:p-10">
        {/* Header */}
        <header className="flex items-start justify-between mb-6">
          <div>
            {/* Icon */}
            <motion.div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
              style={{
                backgroundColor: `${category.color}15`,
              }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Icon size={26} style={{ color: category.color }} />
            </motion.div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-2">{category.title}</h3>

            {/* Description */}
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--color-dark-400)" }}
            >
              {category.description}
            </p>
          </div>

          {/* Index number */}
          <span
            className="text-6xl font-black select-none"
            style={{ color: `${category.color}15` }}
          >
            0{index + 1}
          </span>
        </header>

        {/* Divider */}
        <div
          className="h-px w-full mb-6"
          style={{ backgroundColor: "var(--color-dark-800)" }}
        />

        {/* Skills as text */}
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {category.skills.map((skill, i) => (
            <motion.span
              key={skill.name}
              className="text-sm font-medium"
              style={{
                color: category.color,
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1 + i * 0.03,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                opacity: 0.7,
              }}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Hover border */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{ border: `2px solid ${category.color}` }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.4 }}
        transition={{ duration: 0.3 }}
      />
    </motion.article>
  );
}