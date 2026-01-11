import { motion } from "framer-motion";
import { contactData } from "@/data";
import { theme } from "@/config/theme";

export function ContactStatement() {
  const { statement, timing } = contactData;
  const lines = [statement.line1, statement.line2, statement.line3];

  return (
    <div className="text-center mb-6 md:mb-8">
      {/* Signature flourish - dark stroke */}
      <motion.svg
        viewBox="0 0 200 50"
        className="w-24 md:w-32 mx-auto mb-4 opacity-80"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.8 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: timing.statementDelay }}
      >
        <motion.path
          d="M10 40 Q30 10 60 35 Q90 60 120 25 Q150 -5 180 30 Q190 40 195 35"
          fill="none"
          stroke={theme.black}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: timing.statementDelay }}
        />
      </motion.svg>

      {/* Main statement - dark text */}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight">
        {lines.map((line, i) => (
          <motion.span
            key={line}
            className="block"
            style={{
              color: line === statement.accent ? theme.black : theme.accentDark,
              fontStyle: line === statement.accent ? "italic" : "normal",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: timing.statementDelay + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        ))}
        {/* Period */}
        <motion.span
          className="inline-block"
          style={{ color: theme.black }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: timing.statementDelay + 0.3 }}
        >

        </motion.span>
      </h2>
    </div>
  );
}