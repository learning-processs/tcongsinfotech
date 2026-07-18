import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = ["Home", "Company", "Connect"];

const SOLUTIONS = [
  "Web Development",
  "App Development",
  "Digital Marketing",
  "UI/UX Design",
  "Custom Software",
];

export default function Headers() {
  const [solutionOpen, setSolutionOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-30 flex items-center justify-between bg-black px-5 sm:px-8 lg:px-12 py-4 sm:py-5"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="relative h-9 w-9 sm:h-11 sm:w-11">
          <div className="absolute left-0 top-0 h-4 w-4 sm:h-5 sm:w-5 rotate-45 bg-gradient-to-br from-yellow-400 to-orange-500" />
          <div className="absolute right-0 top-1 h-5 w-5 sm:h-6 sm:w-6 -rotate-12 bg-[#FF2D6C]" />
          <div className="absolute bottom-0 left-1 h-5 w-3 sm:h-6 sm:w-3.5 bg-[#1B3A8C]" />
        </div>
        <div className="leading-none">
          <p className="text-lg sm:text-2xl font-extrabold tracking-tight text-white">
            TCONGS
          </p>
          <p className="text-[9px] sm:text-xs font-semibold tracking-[0.3em] text-orange-400">
            INFOTECH
          </p>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/80">
        {NAV_LINKS.slice(0, 1).map((item) => (
          <a key={item} href="#" className="relative text-[#FF2D6C]">
            {item}
            <motion.span
              layoutId="nav-underline"
              className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-[#FF2D6C]"
            />
          </a>
        ))}

        <a href="#" className="transition-colors hover:text-white">
          Company
        </a>

        {/* Solution dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setSolutionOpen(true)}
          onMouseLeave={() => setSolutionOpen(false)}
        >
          <button className="flex items-center gap-1 transition-colors hover:text-white">
            Solution
            <motion.span
              animate={{ rotate: solutionOpen ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <ChevronDown size={16} />
            </motion.span>
          </button>

          <AnimatePresence>
            {solutionOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0A0A0A] p-2 shadow-2xl"
              >
                {SOLUTIONS.map((sol) => (
                  <a
                    key={sol}
                    href="#"
                    className="block rounded-xl px-4 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {sol}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <a href="#" className="transition-colors hover:text-white">
          Connect
        </a>
      </nav>

      {/* CTA + mobile toggle */}
      <div className="flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden sm:flex items-center gap-2 rounded-full bg-[#FF2D6C] px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#FF2D6C]/30"
        >
          Launch Your Idea 🚀
          <ArrowUpRight size={16} />
        </motion.button>

        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden text-white"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-72 max-w-[80%] bg-[#0A0A0A] p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="mb-8 text-white"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              <nav className="flex flex-col gap-5 text-white/80 font-medium">
                <a href="#" className="text-[#FF2D6C]">
                  Home
                </a>
                <a href="#" className="hover:text-white">
                  Company
                </a>
                <div>
                  <p className="mb-3 text-white/50 text-xs tracking-widest">
                    SOLUTION
                  </p>
                  <div className="flex flex-col gap-3 pl-2">
                    {SOLUTIONS.map((sol) => (
                      <a
                        key={sol}
                        href="#"
                        className="text-sm hover:text-white"
                      >
                        {sol}
                      </a>
                    ))}
                  </div>
                </div>
                <a href="#" className="hover:text-white">
                  Connect
                </a>
                <button className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#FF2D6C] px-6 py-3 text-sm font-bold text-white">
                  Launch Your Idea 🚀
                </button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
