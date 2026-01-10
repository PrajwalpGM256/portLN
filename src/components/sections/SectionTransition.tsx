import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { theme } from "@/config/theme";

interface SectionTransitionProps {
    fromColor?: string;
    toColor?: string;
    variant?: "slide-up" | "fade" | "wipe" | "reveal";
}

export function SectionTransition({
    fromColor = theme.black,
    toColor = theme.black,
    variant = "reveal"
}: SectionTransitionProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Animations based on scroll progress
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

    // For wipe effect
    const clipPath = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [
            "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ]
    );

    // Background gradient transition
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [fromColor, theme.accent, toColor]
    );

    return (
        <div
            ref={containerRef}
            className="relative h-[40vh] overflow-hidden"
            style={{ backgroundColor: fromColor }}
        >
            {/* Animated overlay */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                    backgroundColor,
                    clipPath: variant === "wipe" ? clipPath : undefined,
                    opacity: variant === "fade" ? opacity : 1,
                }}
            >
                {/* Decorative elements */}
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, ${theme.accent}20 0%, transparent 50%)`,
                        scale,
                    }}
                />

                {/* Animated lines */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute h-[1px] w-full"
                            style={{
                                backgroundColor: `${theme.accent}30`,
                                top: `${20 + i * 15}%`,
                                x: useTransform(
                                    scrollYProgress,
                                    [0, 1],
                                    [i % 2 === 0 ? -100 : 100, i % 2 === 0 ? 100 : -100]
                                ),
                            }}
                        />
                    ))}
                </div>

                {/* Center content */}
                <motion.div
                    className="relative z-10 text-center"
                    style={{ y, opacity }}
                >
                    <motion.div
                        className="w-16 h-16 mx-auto mb-4 rounded-full border-2 flex items-center justify-center"
                        style={{
                            borderColor: theme.accent,
                            scale,
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        <motion.div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: theme.accent }}
                        />
                    </motion.div>
                    <motion.p
                        className="text-xs uppercase tracking-[0.3em] font-medium"
                        style={{ color: theme.accent, opacity }}
                    >
                        Scroll to continue
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* Top fade gradient */}
            <div
                className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
                style={{
                    background: `linear-gradient(to bottom, ${fromColor}, transparent)`,
                }}
            />

            {/* Bottom fade gradient */}
            <div
                className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                style={{
                    background: `linear-gradient(to top, ${toColor}, transparent)`,
                }}
            />
        </div>
    );
}
