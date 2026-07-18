import { useMemo } from "react";
import { motion } from "framer-motion";

export default function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 8 + 8,
        delay: Math.random() * 6,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Static soft glows */}
      <div className="absolute -left-32 top-0 h-96 w-96 sm:h-[500px] sm:w-[500px] rounded-full bg-[#7A8C1B]/25 blur-[120px]" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 sm:h-[500px] sm:w-[500px] rounded-full bg-[#8C0E2B]/35 blur-[120px]" />

      {/* Gentle twinkling particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ opacity: [0, 0.7, 0], y: [0, -24] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
    </div>
  );
}