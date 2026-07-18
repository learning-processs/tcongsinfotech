import { motion } from "framer-motion";
import { Calendar, ArrowUpRight, ShieldCheck, Code2, Palette, Mic2, Sparkles } from "lucide-react";
import AnimatedBlob from "./AnimatedBlob";
import AnimatedHeadline from "./AnimatedHeadline";

const TRUST_ICONS = [Code2, Palette, Mic2, Sparkles];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black px-5 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-28">
      <AnimatedBlob />

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
              <motion.span
                key={i}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white/10 text-white/70"
              >
                <Icon size={12} />
              </motion.span>
            ))}
          </div>
        </motion.div>

        <AnimatedHeadline />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-xl text-white/85"
        >
          We Help Brands Grow With{" "}
          <span className="font-semibold text-[#FF2D6C]">Web, Apps & Marketing</span>{" "}
          Solutions Across The Globe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.15 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm sm:text-base font-bold text-black shadow-xl"
          >
            <Calendar size={18} />
            Schedule Meeting
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, backgroundColor: "#ffffff", color: "#000000" }}
            whileTap={{ scale: 0.96 }}
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-white/70 px-7 py-3.5 text-sm sm:text-base font-bold text-white transition-colors"
          >
            Services
            <ArrowUpRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}