import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, ShieldCheck, Play, Globe } from "lucide-react";
import MagneticButton from "./MagneticButton";

const HEADLINE_LINES = ["Build. Scale. Grow", "Your Digital", "Business."];

const lineVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.12 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function HeroVideo() {
  return (
    <section className="relative overflow-hidden bg-[#060608] py-16 sm:py-24 lg:py-28 text-white">
      {/* Refined Ambient Radial Glow Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 -left-20 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#1B7A3D]/20 blur-[140px]" />
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-[#EAD916]/10 blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-[#FF2D6C]/15 blur-[120px]" />
      </div>

      {/* Subtle Background Grid Line Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Messaging & Action */}
          <div className="lg:col-span-6 max-w-xl">
            
            {/* Minimal Badge */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md"
            >
              <Sparkles size={13} className="text-[#EAD916]" />
              <span className="text-xs font-medium tracking-wide text-white/80">
                Tcongs Infotech Digital Studio
              </span>
            </motion.div>

            {/* Staggered Heading */}
            <h1 className="font-extrabold leading-[1.05] text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              {HEADLINE_LINES.map((line, i) => (
                <motion.span
                  key={line}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={lineVariants}
                  className="block"
                >
                  {i === 0 ? (
                    <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                      {line}
                    </span>
                  ) : (
                    line
                  )}
                </motion.span>
              ))}
            </h1>

            {/* Paragraph Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed font-normal"
            >
              At Tcongs Infotech, we deliver powerful web, app, and marketing
              solutions designed to help your business grow faster, scale smarter,
              and succeed globally.
            </motion.p>

            {/* CTA Button Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <MagneticButton className="flex items-center justify-center gap-2 rounded-xl bg-[#FF2D6C] px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-xl shadow-[#FF2D6C]/25 transition-all hover:bg-[#e0265d]">
                <span>Start Your Project 🚀</span>
                <ArrowUpRight size={18} />
              </MagneticButton>

              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-white/60 font-mono">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>Verified Deliverables</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Device Frame with Video */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* Outer Glassmorphic Frame */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent p-3 sm:p-4 backdrop-blur-xl shadow-2xl">
              
              {/* Window Controls Bar */}
              <div className="flex items-center justify-between pb-3 px-3 border-b border-white/10 mb-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-0.5 border border-white/5 text-[11px] font-mono text-white/50">
                  <Globe size={11} />
                  <span>tcongs.com/showcase</span>
                </div>
              </div>

              {/* Video Viewport Container */}
              <div className="relative h-[300px] sm:h-[380px] lg:h-[460px] w-full overflow-hidden rounded-2xl bg-black">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                
                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Micro Badge inside Video */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/60 p-3 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1B7A3D]/30 text-emerald-400">
                      <Play size={14} className="fill-emerald-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Live Showcase</p>
                      <p className="text-[11px] text-white/60">High-Performance Engine</p>
                    </div>
                  </div>
                  <span className="rounded-md bg-white/10 px-2 py-1 text-[10px] font-mono font-medium text-white/80">
                    4K HDR
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}