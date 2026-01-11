import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/data";
import { theme } from "@/config/theme";

interface MobileProjectCardProps {
    project: Project;
    index: number;
}

export function MobileProjectCard({ project, index }: MobileProjectCardProps) {
    return (
        <motion.article
            className="relative pb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Card Container */}
            <div
                className="relative overflow-hidden rounded-2xl mx-auto"
                style={{
                    background: theme.cardBgGradient,
                    boxShadow: `0 20px 40px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)`,
                    minHeight: "480px",
                    maxWidth: "400px",
                }}
            >
                {/* Background number */}
                <div
                    className="absolute -bottom-2 right-2 text-[120px] font-black leading-none select-none pointer-events-none"
                    style={{
                        color: project.color,
                        WebkitTextFillColor: 'transparent',
                        WebkitTextStroke: `2px ${project.color}30`,
                    }}
                >
                    {String(index + 1).padStart(2, '0')}
                </div>

                {/* Content */}
                <div className="relative z-10 p-7 pb-8 flex flex-col h-full" style={{ minHeight: "480px" }}>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <span
                            className="inline-flex items-center text-sm font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full"
                            style={{
                                background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}cc 100%)`,
                                color: theme.black,
                                boxShadow: `0 4px 15px ${project.color}40`,
                            }}
                        >
                            {project.category}
                        </span>
                        <span
                            className="text-lg font-mono"
                            style={{ color: theme.cardTextMuted }}
                        >
                            {project.year}
                        </span>
                    </div>

                    {/* Title */}
                    <h3
                        className="text-[2.5rem] font-black tracking-tight leading-tight mb-5"
                        style={{ color: theme.cardText }}
                    >
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p
                        className="text-[1.35rem] leading-relaxed mb-7 flex-grow"
                        style={{ color: theme.cardTextSecondary }}
                    >
                        {project.description}
                    </p>

                    {/* Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                        <div className="flex flex-wrap gap-x-3 gap-y-2 mb-5">
                            {project.highlights.slice(0, 3).map((highlight) => (
                                <span
                                    key={highlight}
                                    className="text-base font-semibold uppercase tracking-wider flex items-center gap-2"
                                    style={{ color: project.color }}
                                >
                                    <span
                                        className="w-2 h-2 rounded-full"
                                        style={{ background: project.color }}
                                    />
                                    {highlight}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-x-3 gap-y-1 mb-6">
                        {project.tech.slice(0, 4).map((tech) => (
                            <span
                                key={tech}
                                className="text-lg font-medium"
                                style={{ color: theme.cardTextSecondary }}
                            >
                                {tech}
                            </span>
                        ))}
                        {project.tech.length > 4 && (
                            <span
                                className="text-lg font-medium"
                                style={{ color: theme.cardTextMuted }}
                            >
                                +{project.tech.length - 4}
                            </span>
                        )}
                    </div>

                    {/* Action Links */}
                    <div
                        className="flex items-center gap-3 pt-5 mt-auto border-t"
                        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                    >
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-base font-semibold px-5 py-3 rounded-full"
                                style={{
                                    color: theme.cardTextSecondary,
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                }}
                            >
                                <Github size={16} />
                                <span>Code</span>
                            </a>
                        )}
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-base font-bold px-5 py-3 rounded-full"
                                style={{
                                    color: theme.black,
                                    background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}dd 100%)`,
                                    boxShadow: `0 4px 15px ${project.color}30`,
                                }}
                            >
                                <span>Live Demo</span>
                                <ArrowUpRight size={18} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Corner accent */}
                <div
                    className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at 100% 0%, ${project.color}15 0%, transparent 70%)`,
                        borderTopRightRadius: '16px',
                    }}
                />
            </div>
        </motion.article>
    );
}
