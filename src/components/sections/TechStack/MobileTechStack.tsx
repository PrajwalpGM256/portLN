import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Component,
    FileCode,
    Terminal,
    Flame,
    Server,
    Database,
    Box,
    Cloud,
    Layers,
    Brain,
    ChevronDown,
    LucideIcon,
} from "lucide-react";
import type { TechItem } from "@/data";

const iconMap: Record<string, LucideIcon> = {
    component: Component,
    "file-code": FileCode,
    terminal: Terminal,
    flame: Flame,
    server: Server,
    database: Database,
    box: Box,
    cloud: Cloud,
    layers: Layers,
    brain: Brain,
};

// Category display order and colors
const categoryConfig: Record<string, { label: string; color: string }> = {
    Language: { label: "Languages", color: "#CCFF00" },
    Frontend: { label: "Frontend", color: "#00D4FF" },
    Framework: { label: "Frameworks", color: "#FF6B6B" },
    Backend: { label: "Backend", color: "#9945FF" },
    ORM: { label: "ORM", color: "#FF9500" },
    ML: { label: "Machine Learning", color: "#FF3366" },
    Data: { label: "Data Science", color: "#00FF88" },
    Database: { label: "Databases", color: "#FFD93D" },
    Cloud: { label: "Cloud", color: "#00A8E8" },
    DevOps: { label: "DevOps", color: "#FF5733" },
};

interface MobileTechStackProps {
    techStack: TechItem[];
}

export function MobileTechStack({ techStack }: MobileTechStackProps) {
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

    // Group tech items by category
    const groupedTech = techStack.reduce((acc, tech) => {
        if (!acc[tech.category]) {
            acc[tech.category] = [];
        }
        acc[tech.category].push(tech);
        return acc;
    }, {} as Record<string, TechItem[]>);

    // Get categories in order
    const categories = Object.keys(categoryConfig).filter(cat => groupedTech[cat]);

    const toggleCategory = (category: string) => {
        setExpandedCategory(expandedCategory === category ? null : category);
    };

    return (
        <div className="space-y-3">
            {categories.map((category, catIndex) => {
                const config = categoryConfig[category];
                const items = groupedTech[category];
                const isExpanded = expandedCategory === category;

                return (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.4, delay: catIndex * 0.05 }}
                    >
                        {/* Category Header - Always visible */}
                        <button
                            onClick={() => toggleCategory(category)}
                            className="w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300"
                            style={{
                                background: isExpanded
                                    ? 'rgba(255,255,255,0.05)'
                                    : 'transparent',
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <span
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: '#CCFF00' }}
                                />
                                <span className="text-lg font-bold text-white">
                                    {config.label}
                                </span>
                                <span
                                    className="text-sm font-medium px-2 py-0.5 rounded-full"
                                    style={{
                                        backgroundColor: 'rgba(255,255,255,0.1)',
                                        color: 'rgba(255,255,255,0.6)',
                                    }}
                                >
                                    {items.length}
                                </span>
                            </div>
                            <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown size={20} className="text-white opacity-60" />
                            </motion.div>
                        </button>

                        {/* Expanded Content - Skills Grid */}
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-3 pb-1 px-2">
                                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                                            {items.map((tech, techIndex) => {
                                                const Icon = iconMap[tech.icon] || Component;
                                                return (
                                                    <motion.div
                                                        key={tech.id}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: techIndex * 0.03 }}
                                                        className="flex items-center gap-2 py-1"
                                                    >
                                                        <Icon size={16} style={{ color: tech.color }} />
                                                        <span className="text-sm font-medium text-white">
                                                            {tech.name}
                                                        </span>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>

                                        {/* Show highlights for first item in category */}
                                        {items[0]?.highlights && items[0].highlights.length > 0 && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                                className="mt-4 pt-3 border-t"
                                                style={{ borderColor: config.color + '20' }}
                                            >
                                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                                                    Key Skills
                                                </p>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {items.flatMap(item => item.highlights).slice(0, 6).map((highlight, i) => (
                                                        <span
                                                            key={i}
                                                            className="text-xs px-2 py-1 rounded-md"
                                                            style={{
                                                                backgroundColor: 'rgba(255,255,255,0.05)',
                                                                color: 'var(--color-dark-300)',
                                                            }}
                                                        >
                                                            {highlight}
                                                        </span>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                );
            })}
        </div>
    );
}
