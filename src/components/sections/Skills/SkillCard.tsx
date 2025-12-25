import { motion } from "framer-motion";
import { Code2, Database, Brain, Cloud } from "lucide-react";
import { SkillBar } from "@/components/animations";
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
        <header className="flex items-start justify-between mb-8">
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
          className="h-px w-full mb-8"
          style={{ backgroundColor: "var(--color-dark-800)" }}
        />

        {/* Skills list */}
        <div className="space-y-5">
          {category.skills.map((skill, i) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              color={category.color}
              delay={index * 0.15 + i * 0.1}
            />
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