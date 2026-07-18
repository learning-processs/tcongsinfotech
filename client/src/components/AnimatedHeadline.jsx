import { motion } from "framer-motion";

const LINES = ["SMART DIGITAL", "SOLUTIONS FOR", "MODERN", "BUSINESSES"];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const wordContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const letter = {
  hidden: { opacity: 0, y: 40, skewY: 4 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AnimatedHeadline() {
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={container}
      className="font-extrabold uppercase leading-[0.95] tracking-tight text-[36px] xs:text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]"
    >
      {LINES.map((line, li) => {
        const isLast = li === LINES.length - 1;
        return (
          <motion.span key={line} variants={wordContainer} className="block overflow-hidden py-1">
            {line.split("").map((char, ci) => (
              <motion.span
                key={ci}
                variants={letter}
                className={
                  isLast
                    ? "inline-block bg-gradient-to-r from-[#FF2D6C] via-white to-[#FF2D6C] bg-[length:200%_auto] bg-clip-text text-transparent"
                    : "inline-block text-white"
                }
                style={
                  isLast
                    ? {
                        animation: "shimmer 3.5s linear infinite",
                        textShadow: "0 0 40px rgba(255,45,108,0.35)",
                      }
                    : { textShadow: "0 0 30px rgba(255,255,255,0.08)" }
                }
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        );
      })}

      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </motion.h1>
  );
}