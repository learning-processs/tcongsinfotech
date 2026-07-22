import { useRef } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowUpRight, ShieldCheck, Code2, Palette, Mic2, Sparkles, TrendingUp, CheckCircle2 } from "lucide-react";
import ParticleField from "./ParticleField";
import MagneticButton from "./MagneticButton";

const HEADLINE_LINES = ["SMART DIGITAL", "SOLUTIONS FOR", "MODERN", "BUSINESSES"];
const TRUST_ICONS = [Code2, Palette, Mic2, Sparkles];

export default function Hero() {
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
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
      className="relative min-h-screen overflow-hidden bg-[#0A0A0C] px-6 py-16 sm:px-10 lg:px-16 lg:py-24 flex flex-col justify-center text-white"
      style={{ "--spot-x": "50%", "--spot-y": "30%" }}
    >
      {/* Background Particle Effects */}
      <ParticleField />

      {/* Dynamic Ambient Glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(600px circle at var(--spot-x) var(--spot-y), rgba(255,45,108,0.12), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        {/* Top Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF2D6C]">
            <ShieldCheck size={14} className="text-white" />
          </span>
          <span className="text-xs sm:text-sm font-medium text-white/80">
            Trusted by businesses worldwide
          </span>
          <div className="hidden xs:flex items-center gap-1.5 border-l border-white/10 pl-3">
            {TRUST_ICONS.map((Icon, i) => (
              <span
                key={i}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white/70"
              >
                <Icon size={12} />
              </span>
            ))}
          </div>
        </motion.div>

        {/* Main Grid: Headline Left | Interactive Preview Right */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column - Headline & Actions */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[1.05]">
              {HEADLINE_LINES.map((line, i) => (
                <motion.span
                  key={line}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="block"
                >
                  {i === 0 ? (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#FF2D6C]">
                      {line}
                    </span>
                  ) : (
                    line
                  )}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 max-w-xl text-lg sm:text-xl text-white/85 leading-relaxed"
            >
              We Help Brands Grow With{" "}
              <span className="font-semibold text-[#FF2D6C]">Web, Apps & Marketing</span>{" "}
              Solutions Across The Globe.
            </motion.p>

            {/* Buttons Group */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <MagneticButton className="flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm sm:text-base font-bold text-black shadow-xl hover:bg-white/90 transition-all">
                <Calendar size={18} />
                Schedule Meeting
              </MagneticButton>

              <MagneticButton className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm sm:text-base font-bold text-white hover:bg-white/10 transition-all">
                Services
                <ArrowUpRight size={18} />
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column - Glassmorphic Digital Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-6 sm:p-8 backdrop-blur-xl">
              
              {/* Card Header Status */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF2D6C] opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-[#FF2D6C]"></span>
                  </span>
                  <span className="text-xs font-mono text-white/70 uppercase tracking-wider">Agency Status</span>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                  Accepting Projects
                </span>
              </div>

              {/* Central Feature Metrics */}
              <div className="my-6 space-y-4">
                <div className="rounded-2xl border border-white/5 bg-black/40 p-4">
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>Client Satisfaction</span>
                    <span className="text-emerald-400 font-mono flex items-center gap-1">
                      <TrendingUp size={12} /> 99.8%
                    </span>
                  </div>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[95%] bg-gradient-to-r from-white to-[#FF2D6C]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <p className="text-xs text-white/50">Global Scope</p>
                    <p className="text-lg font-bold text-white mt-1">100+ Brands</p>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <p className="text-xs text-white/50">Service Stack</p>
                    <p className="text-lg font-bold text-[#FF2D6C] mt-1">End-to-End</p>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2.5 pt-2 border-t border-white/10">
                {["High-Performance Web & Mobile", "Conversion-Focused Marketing", "Scalable Tech Infrastructure"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle2 size={14} className="text-[#FF2D6C] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}