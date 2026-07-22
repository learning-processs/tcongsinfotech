import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, MapPin, Globe } from "lucide-react";

const COMPANY_LINKS = ["Home", "Company", "Solution", "Connect"];

const SPECIALIZED_SERVICES = [
  "Web & App Development",
  "Software Development",
  "E-commerce Solutions",
  "Digital Marketing",
  "Branding & UI/UX",
  "Business Growth",
];

const SCALE_BUSINESS = [
  "Launch on Top Marketplaces",
  "Build High-Converting Stores",
  "Optimize Listings for Sales",
  "Run Profitable Ad Campaigns",
  "Grow Globally",
];

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452z" />
    </svg>
  );
}

function FooterLinkList({ title, items }) {
  return (
    <div>
      <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF2D6C]">
        {title}
      </h4>

      <ul className="mt-5 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="group inline-flex items-center gap-1.5 text-sm text-white/60 transition-all hover:text-white"
            >
              <span>{item}</span>
              <ArrowUpRight
                size={13}
                className="opacity-0 -translate-x-1 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-[#FF2D6C]"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#060608] px-5 pt-16 sm:px-8 sm:pt-20 lg:px-12 text-white border-t border-white/10">
      
      {/* Glow Ambient Line on Top Edge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-[#FF2D6C] to-transparent" />
      
      {/* Ambient Background Radial Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 right-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-[#FF2D6C]/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr] lg:gap-8 pb-12"
        >
          {/* Brand Info & Mission */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md">
              <Sparkles size={13} className="text-[#FF2D6C]" />
              <span className="text-xs font-semibold text-white/80">
                Tcongs Infotech
              </span>
            </div>

            <p className="text-sm leading-relaxed text-white/65 sm:text-base max-w-md">
              Empowering global brands with 8+ years of expertise in custom web
              development, e-commerce marketplace optimization, and Generative
              Engine Optimization (GEO). We turn complex challenges into
              seamless digital growth.
            </p>

            {/* Social Icons Stack */}
            <div className="pt-2 flex items-center gap-3">
              <motion.a
                href="#"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#FF2D6C",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </motion.a>

              <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2 text-xs text-white/50 font-mono">
                <Globe size={13} className="text-emerald-400" />
                <span>Global Reach</span>
              </div>
            </div>
          </div>

          {/* Nav Links Column 1 */}
          <FooterLinkList
            title="Company"
            items={COMPANY_LINKS}
          />

          {/* Nav Links Column 2 */}
          <FooterLinkList
            title="Specialized Services"
            items={SPECIALIZED_SERVICES}
          />

          {/* Nav Links Column 3 */}
          <FooterLinkList
            title="Scale Your Online Business"
            items={SCALE_BUSINESS}
          />
        </motion.div>

        {/* Bottom Location & Copyright Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-white/50 sm:flex-row sm:text-sm"
        >
          <div className="flex items-center gap-2">
            <MapPin size={15} className="text-[#FF2D6C] shrink-0" />
            <p>
              <span className="font-semibold text-white/80">
                Mumbai Office:
              </span>{" "}
              Based in Mumbai, India. Serving clients worldwide.
            </p>
          </div>

          <p className="font-mono text-xs text-white/40">
            © 2026 Tcongs Infotech. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}