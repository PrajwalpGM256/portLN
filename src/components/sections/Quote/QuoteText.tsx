import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { quoteData } from "@/data";

export function QuoteText() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const renderQuoteText = (text: string, highlights: readonly string[], baseDelay: number) => {
    const words = text.split(" ");

    return words.map((word, i) => {
      const cleanWord = word.replace(/[.,;]/g, "");
      const isHighlight = highlights.some(h =>
        cleanWord.toLowerCase().includes(h.toLowerCase())
      );
      const punctuation = word.match(/[.,;]/)?.[0] || "";

      return (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: baseDelay + i * 0.02,
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
      {/* Large quote mark - smaller on mobile */}
      <motion.div
        className="absolute -top-4 md:-top-12 left-0 md:left-0 text-[80px] md:text-[160px] lg:text-[220px] font-serif leading-none pointer-events-none select-none"
        style={{ color: "rgba(34, 197, 94, 0.08)" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        "
      </motion.div>

      {/* Both Quotes */}
      <div className="space-y-8 md:space-y-14 pt-8 md:pt-0">
        {quoteData.quotes.map((quote, idx) => (
          <div key={idx} className="relative z-10">
            {/* Quote text */}
            <blockquote className="max-w-5xl text-lg md:text-3xl lg:text-4xl leading-relaxed md:leading-snug lg:leading-snug">
              {renderQuoteText(quote.text, quote.highlights, quoteData.timing.quoteDelay + idx * 0.8)}
            </blockquote>

            {/* Author */}
            <motion.p
              className="mt-3 md:mt-4 text-sm md:text-lg font-medium"
              style={{ color: "var(--color-dark-400)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + idx * 0.8, duration: 0.6 }}
            >
              — {quote.author}
            </motion.p>

            {/* Accent line after each quote - shorter on mobile */}
            <motion.div
              className="mt-4 md:mt-6 flex items-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 + idx * 0.8, duration: 0.8 }}
            >
              <motion.div
                className="h-px"
                style={{ background: "var(--color-primary)" }}
                initial={{ width: 0 }}
                animate={isInView ? { width: 40 } : {}}
                transition={{ delay: 1.2 + idx * 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}