import { motion } from "framer-motion";

export default function AnimatedBlob() {
  return (
    <>
      {/* Olive glow — top left */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-20 -top-20 h-[420px] w-[420px] sm:h-[560px] sm:w-[560px] rounded-full bg-[#7A8C1B]/35 blur-[120px]"
      />

      {/* Deep red/pink glow — bottom right */}
      <motion.div
        animate={{ x: [0, -35, 0], y: [0, 30, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-24 bottom-0 h-[420px] w-[420px] sm:h-[600px] sm:w-[600px] rounded-full bg-[#8C0E2B]/45 blur-[130px]"
      />

      {/* Center accent glow behind headline */}
      <motion.div
        animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[500px] sm:h-[400px] sm:w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[100px]"
      />

      {/* Fine grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
    </>
  );
}