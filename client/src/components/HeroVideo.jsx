import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

const HEADLINE_LINES = ["Build. Scale. Grow", "Your Digital", "Business."];

const lineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function HeroVideo() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Vibrant gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_#EAD916_0%,_transparent_45%),radial-gradient(circle_at_0%_100%,_#1B7A3D_0%,_transparent_45%),radial-gradient(circle_at_100%_100%,_#0F4D2A_0%,_transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-black/40" />

      <div className="relative z-10 grid lg:grid-cols-2 items-center gap-10 lg:gap-6 px-5 sm:px-8 lg:px-12 pt-28 sm:pt-32 lg:pt-16 pb-16 sm:pb-20 lg:pb-0 lg:min-h-[700px]">
        {/* Left: text */}
        <div className="max-w-xl">
          <h1 className="font-extrabold leading-[1.05] text-white text-[34px] xs:text-4xl sm:text-5xl lg:text-6xl">
            {HEADLINE_LINES.map((line, i) => (
              <motion.span
                key={line}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={lineVariants}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 text-sm sm:text-base lg:text-lg text-white/85 leading-relaxed"
          >
            At Tcongs Infotech, we deliver powerful web, app, and marketing
            solutions designed to help your business grow faster, scale smarter,
            and succeed globally.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8"
          >
            <MagneticButton className="flex w-fit items-center gap-2 rounded-full bg-[#FF2D6C] px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-[#FF2D6C]/30">
              Start Your Project 🚀
              <ArrowUpRight size={18} />
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right: video panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative h-[320px] sm:h-[420px] lg:h-[560px] w-full overflow-hidden rounded-2xl lg:rounded-none"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="public/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
