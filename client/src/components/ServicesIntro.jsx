import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Code2, 
  Cpu, 
  ShoppingBag, 
  TrendingUp, 
  Palette, 
  Zap 
} from "lucide-react";

const SERVICES = [
  { label: "FOR BUSINESSES", title: "Web & App Development", icon: Code2 },
  { label: "CUSTOM SOLUTIONS", title: "Software Development", icon: Cpu },
  { label: "ONLINE SELLERS", title: "E-commerce Solutions", icon: ShoppingBag },
  { label: "GROWTH FOCUSED", title: "Digital Marketing", icon: TrendingUp },
  { label: "CREATIVE DESIGN", title: "Branding & UI/UX", icon: Palette },
  { label: "SCALING BUSINESS", title: "Business Growth", icon: Zap },
];

export default function ServicesIntro() {
  return (
    <section className="relative overflow-hidden bg-[#060608] px-5 sm:px-8 lg:px-12 py-20 sm:py-28 text-white">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF2D6C]/10 blur-[160px]" />
      </div>

      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FF2D6C]"
        >
          WE ARE GREAT AT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white"
        >
          Digital Solutions & Development Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-white/60"
        >
          Scalable solutions for modern businesses
        </motion.p>
      </div>

      {/* Modern Interactive Bento Grid */}
      <div className="mx-auto mt-14 sm:mt-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            const indexFormatted = String(i + 1).padStart(2, "0");

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: (i % 3) * 0.1,
                }}
                whileHover="hover"
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-[#FF2D6C]/40 hover:bg-gradient-to-b hover:from-[#FF2D6C]/10 hover:to-transparent hover:shadow-2xl hover:shadow-[#FF2D6C]/10 flex flex-col justify-between"
              >
                {/* Background Glow Orb on Hover */}
                <motion.div
                  variants={{
                    hover: { opacity: 1, scale: 1 },
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[#FF2D6C]/20 blur-2xl"
                />

                {/* Top Header Row */}
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#FF2D6C] transition-colors group-hover:bg-[#FF2D6C] group-hover:text-white">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-xs font-bold text-white/30 group-hover:text-[#FF2D6C] transition-colors">
                      {indexFormatted}
                    </span>
                  </div>

                  {/* Service Metadata */}
                  <p className="mt-8 text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#FF2D6C]/90 uppercase">
                    {service.label}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white tracking-tight group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Bottom Interactive Arrow Bar */}
                <div className="mt-10 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-medium text-white/50 group-hover:text-white transition-colors">
                  <span>Explore Capabilities</span>
                  <motion.div
                    variants={{
                      hover: { x: 3, y: -3, scale: 1.1 },
                    }}
                    transition={{ duration: 0.2 }}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/70 group-hover:bg-[#FF2D6C] group-hover:text-white"
                  >
                    <ArrowUpRight size={16} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}