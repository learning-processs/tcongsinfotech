import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Calendar, 
  ArrowUpRight, 
  ShieldCheck, 
  Code2, 
  Palette, 
  Mic2, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2, 
  Zap, 
  Globe 
} from "lucide-react";
import ParticleField from "./ParticleField";
import MagneticButton from "./MagneticButton";

const HEADLINE_LINES = ["SMART DIGITAL", "SOLUTIONS FOR", "MODERN", "BUSINESSES"];
const TRUST_ICONS = [Code2, Palette, Mic2, Sparkles];

export default function Hero() {
  const sectionRef = useRef(null);

  // 3D Card Interactive Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();

    // Spotlight coordinates
    const spotX = ((e.clientX - rect.left) / rect.width) * 100;
    const spotY = ((e.clientY - rect.top) / rect.height) * 100;
    sectionRef.current.style.setProperty("--spot-x", `${spotX}%`);
    sectionRef.current.style.setProperty("--spot-y", `${spotY}%`);

    // 3D Tilt calculation
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen overflow-hidden bg-[#060608] px-5 py-16 sm:px-8 lg:px-12 lg:py-24 flex flex-col justify-between text-white select-none"
      style={{ "--spot-x": "50%", "--spot-y": "30%" }}
    >
      {/* Background Particle Effects */}
      <ParticleField />

      {/* Dynamic Cursor Spotlight Ambient Glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(700px circle at var(--spot-x) var(--spot-y), rgba(255,45,108,0.16), transparent 70%)",
        }}
      />

      {/* Atmospheric Background Typography Watermark */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black uppercase text-white/[0.012] leading-none tracking-tighter select-none">
        TCONGS
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full my-auto">
        
        {/* Top Floating Glass Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl shadow-2xl"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF2D6C] shadow-lg shadow-[#FF2D6C]/50">
            <ShieldCheck size={14} className="text-white" />
          </span>
          <span className="text-xs sm:text-sm font-medium text-white/90">
            Trusted by businesses worldwide
          </span>
          <div className="hidden xs:flex items-center gap-1.5 border-l border-white/10 pl-3">
            {TRUST_ICONS.map((Icon, i) => (
              <span
                key={i}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-[#FF2D6C] hover:text-white"
              >
                <Icon size={12} />
              </span>
            ))}
          </div>
        </motion.div>

        {/* Core Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Kinetic Oversized Headline */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold uppercase tracking-tighter text-white leading-[0.95]">
              {HEADLINE_LINES.map((line, i) => (
                <motion.span
                  key={line}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.12 * i, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  {i === 0 ? (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D6C] via-white to-white">
                      {line}
                    </span>
                  ) : i === 2 ? (
                    <span className="italic font-serif font-normal text-[#FF2D6C] lowercase">
                      {line}{" "}
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
              className="max-w-xl text-lg sm:text-xl text-white/85 leading-relaxed font-normal"
            >
              We Help Brands Grow With{" "}
              <span className="font-semibold text-[#FF2D6C] underline decoration-[#FF2D6C]/40 underline-offset-4">
                Web, Apps & Marketing
              </span>{" "}
              Solutions Across The Globe.
            </motion.p>

            {/* Buttons Group */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <MagneticButton className="flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm sm:text-base font-bold text-black shadow-xl hover:bg-white/90 transition-all">
                <Calendar size={18} />
                <span>Schedule Meeting</span>
              </MagneticButton>

              <MagneticButton className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-sm sm:text-base font-bold text-white hover:bg-white/10 backdrop-blur-md transition-all">
                <span>Services</span>
                <ArrowUpRight size={18} className="text-[#FF2D6C]" />
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: 3D Interactive Showcase Card */}
          <div className="lg:col-span-5 [perspective:1000px]">
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent p-6 sm:p-8 backdrop-blur-2xl shadow-2xl shadow-black/80"
            >
              {/* Card Status Line */}
              <div 
                style={{ transform: "translateZ(30px)" }}
                className="flex items-center justify-between pb-6 border-b border-white/10"
              >
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF2D6C] opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-[#FF2D6C]"></span>
                  </span>
                  <span className="text-xs font-mono text-white/70 uppercase tracking-wider">
                    Agency Status
                  </span>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                  Accepting Projects
                </span>
              </div>

              {/* Central Dynamic HUD Metrics */}
              <div 
                style={{ transform: "translateZ(50px)" }}
                className="my-6 space-y-4"
              >
                <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <div className="flex items-center justify-between text-xs text-white/60 font-mono">
                    <span className="flex items-center gap-1.5"><Zap size={13} className="text-[#FF2D6C]" /> Execution Velocity</span>
                    <span className="text-emerald-400 font-mono flex items-center gap-1">
                      <TrendingUp size={12} /> 99.8%
                    </span>
                  </div>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "95%" }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                      className="h-full bg-gradient-to-r from-white via-[#FF2D6C] to-[#FF2D6C]" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                    <Globe size={16} className="text-[#FF2D6C] mb-2" />
                    <p className="text-xs text-white/50 font-mono uppercase">Global Scope</p>
                    <p className="text-lg font-bold text-white mt-0.5">100+ Brands</p>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                    <Sparkles size={16} className="text-amber-400 mb-2" />
                    <p className="text-xs text-white/50 font-mono uppercase">Service Stack</p>
                    <p className="text-lg font-bold text-[#FF2D6C] mt-0.5">End-to-End</p>
                  </div>
                </div>
              </div>

              {/* Features Stack */}
              <div 
                style={{ transform: "translateZ(20px)" }}
                className="space-y-2.5 pt-2 border-t border-white/10"
              >
                {["High-Performance Web & Mobile", "Conversion-Focused Marketing", "Scalable Tech Infrastructure"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle2 size={14} className="text-[#FF2D6C] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Continuous Marquee Line */}
      <div className="relative z-10 mt-12 border-t border-white/10 pt-4 overflow-hidden pointer-events-none">
        <div className="flex whitespace-nowrap gap-8 font-mono text-[11px] text-white/30 uppercase tracking-widest">
          <span>Web Engineering</span> • <span>Mobile Architecture</span> • <span>Performance Marketing</span> • <span>UI/UX Systems</span> • <span>Cloud Scaling</span> • <span>Web Engineering</span> • <span>Mobile Architecture</span>
        </div>
      </div>
    </section>
  );
}