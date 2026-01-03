import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Marquee } from "@/components/animations";
import { quoteData } from "@/data";
import { QuoteText } from "./QuoteText";

export function Quote() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const isMarqueeInView = useInView(marqueeRef, { once: false, margin: "-50px" });

  return (
    <section id="quote" className="relative site-section">
      {/* Quote Text */}
      <QuoteText />

      {/* Spacer */}
      <div className="h-20 md:h-28 lg:h-32" />

      {/* Marquee Banner */}
      <motion.div
        ref={marqueeRef}
        className="py-6 md:py-8 border-y"
        style={{ borderColor: "var(--color-dark-800)" }}
        initial={{ opacity: 0 }}
        animate={isMarqueeInView ? { opacity: 1 } : {}}
        transition={{ delay: quoteData.timing.marqueeDelay, duration: 0.8 }}
      >
        <Marquee
          items={quoteData.marquee.items}
          speed={quoteData.marquee.speed}
          className="text-sm tracking-widest"
          separator="✦"
        />
      </motion.div>
    </section>
  );
}