import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { quoteData } from "@/data";

export function QuoteText() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  
  const { text, highlights } = quoteData.quote;

  const renderText = () => {
    const words = text.split(" ");
    
    return words.map((word, i) => {
      const cleanWord = word.replace(/[.,]/g, "");
      const isHighlight = (highlights as readonly string[]).includes(cleanWord.toLowerCase());
      const punctuation = word.match(/[.,]/)?.[0] || "";
      
      return (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.6, 
            delay: quoteData.timing.quoteDelay + i * 0.03,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ 
            display: "inline-block",
            marginRight: "0.3em",
            color: isHighlight ? "var(--color-primary)" : "inherit",
            fontWeight: isHighlight ? 700 : 300,
          }}
        >
          {cleanWord}{punctuation}
        </motion.span>
      );
    });
  };

  return (
    <div ref={ref} className="relative site-container">
      {/* Large quote mark */}
      <motion.div
        className="absolute -top-8 md:-top-12 left-0 text-[160px] md:text-[220px] font-serif leading-none pointer-events-none select-none"
        style={{ color: "rgba(34, 197, 94, 0.08)" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        "
      </motion.div>

      {/* Quote text */}
      <blockquote className="max-w-5xl text-2xl md:text-4xl lg:text-5xl leading-snug md:leading-snug lg:leading-snug relative z-10">
        {renderText()}
      </blockquote>

      {/* Bottom accent line */}
      <motion.div
        className="mt-12 md:mt-16 flex items-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="h-px"
          style={{ background: "var(--color-primary)" }}
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : {}}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
    </div>
  );
}