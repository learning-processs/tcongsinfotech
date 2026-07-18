import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  { label: "FOR BUSINESSES", title: "Web & App Development" },
  { label: "CUSTOM SOLUTIONS", title: "Software Development" },
  { label: "ONLINE SELLERS", title: "E-commerce Solutions" },
  { label: "GROWTH FOCUSED", title: "Digital Marketing" },
  { label: "CREATIVE DESIGN", title: "Branding & UI/UX" },
  { label: "SCALING BUSINESS", title: "Business Growth" },
];

export default function ServicesIntro() {
  return (
    <section className="relative bg-black px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
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
          className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight text-white"
        >
          Digital Solutions & Development Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-sm sm:text-base text-white/60"
        >
          Scalable solutions for modern businesses
        </motion.p>
      </div>

      {/* Service list grid */}
      <div className="mx-auto mt-14 sm:mt-16 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 + Math.floor(i / 2) * 0.08 }}
              whileHover="hover"
              className="group relative cursor-pointer border-t border-white/10 py-7 sm:py-9 px-1 sm:px-6 last:border-b sm:[&:nth-last-child(2)]:border-b"
            >
              {/* Hover background sweep */}
              <motion.div
                variants={{
                  hover: { opacity: 1 },
                }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FF2D6C]/10 via-transparent to-transparent"
              />

              <div className="relative z-10 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-white/45">
                    {service.label}
                  </p>
                  <motion.h3
                    variants={{ hover: { x: 8 } }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="mt-1.5 text-xl sm:text-3xl font-extrabold text-white"
                  >
                    {service.title}
                  </motion.h3>
                </div>

                <motion.span
                  variants={{
                    hover: { opacity: 1, scale: 1, rotate: 45 },
                  }}
                  initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D6C] text-white"
                >
                  <ArrowUpRight size={18} />
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}