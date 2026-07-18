import { useRef } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowUpRight, ShieldCheck, Code2, Palette, Mic2, Sparkles } from "lucide-react";
import ParticleField from "./ParticleField";
import MagneticButton from "./MagneticButton";

const HEADLINE_LINES = ["SMART DIGITAL", "SOLUTIONS FOR", "MODERN", "BUSINESSES"];
const TRUST_ICONS = [Code2, Palette, Mic2, Sparkles];

const lineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    sectionRef.current.style.setProperty("--spot-x", `${x}%`);
    sectionRef.current.style.setProperty("--spot-y", `${y}%`);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-black px-5 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-28"
      style={{ "--spot-x": "50%", "--spot-y": "30%" }}
    >
      <ParticleField />

      {/* Cursor-follow spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(500px circle at var(--spot-x) var(--spot-y), rgba(255,45,108,0.10), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 sm:mb-10 flex w-fit flex-wrap items-center justify-center gap-2.5 sm:gap-3 rounded-full border border-white/10 bg-white/5 px-3.5 sm:px-5 py-2 sm:py-2.5 backdrop-blur-sm"
        >
          <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-[#FF2D6C]">
            <ShieldCheck size={14} className="text-white" />
          </span>
          <span className="text-[11px] sm:text-sm text-white/80 whitespace-nowrap">
            Trusted by businesses worldwide
          </span>
          <div className="hidden xs:flex items-center gap-1.5">
            {TRUST_ICONS.map((Icon, i) => (
              <span
                key={i}
                className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white/10 text-white/70"
              >
                <Icon size={12} />
              </span>
            ))}
          </div>
        </motion.div>

        <h1 className="font-extrabold uppercase leading-[0.95] tracking-tight text-white text-[36px] xs:text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          {HEADLINE_LINES.map((line, i) => (
            <motion.span
              key={line}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
              className="block"
              style={{ textShadow: "0 0 40px rgba(255,255,255,0.12)" }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-xl text-white/85"
        >
          We Help Brands Grow With{" "}
          <span className="font-semibold text-[#FF2D6C]">Web, Apps & Marketing</span>{" "}
          Solutions Across The Globe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <MagneticButton className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm sm:text-base font-bold text-black shadow-xl">
            <Calendar size={18} />
            Schedule Meeting
          </MagneticButton>

          <MagneticButton className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-white/70 px-7 py-3.5 text-sm sm:text-base font-bold text-white">
            Services
            <ArrowUpRight size={18} />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}