import { motion } from "framer-motion";

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
      <h4 className="text-sm font-bold text-white sm:text-base">
        {title}
      </h4>

      <ul className="mt-5 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-sm text-white/50 transition-colors hover:text-[#FF2D6C]"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 pt-14 sm:px-8 sm:pt-16 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1fr] lg:gap-8"
      >
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-sm leading-relaxed text-white/60 sm:text-base">
            Empowering global brands with 8+ years of expertise in custom web
            development, e-commerce marketplace optimization, and Generative
            Engine Optimization (GEO). We turn complex challenges into
            seamless digital growth.
          </p>

          <motion.a
            href="#"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#FF2D6C",
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </motion.a>
        </div>

        <FooterLinkList
          title="Company"
          items={COMPANY_LINKS}
        />

        <FooterLinkList
          title="Specialized Services"
          items={SPECIALIZED_SERVICES}
        />

        <FooterLinkList
          title="Scale Your Online Business"
          items={SCALE_BUSINESS}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/45 sm:mt-14 sm:flex-row sm:text-sm"
      >
        <p>
          <span className="font-semibold text-white/70">
            Mumbai Office:
          </span>{" "}
          Based in Mumbai, India. Serving clients worldwide.
        </p>

        <p>
          © 2026 Tcongs Infotech. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
}