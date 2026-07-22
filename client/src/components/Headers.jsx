import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight, Menu, X, Sparkles, Layers } from "lucide-react";

const SOLUTIONS = [
  "Web Development",
  "App Development",
  "Digital Marketing",
  "UI/UX Design",
  "Custom Software",
];

export default function Header() {
  const [solutionOpen, setSolutionOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Dynamic Scroll Handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060608]/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/50"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <img
            src="/logo.png"
            alt="Tcongs Infotech"
            className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation Pill */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-6 py-2 backdrop-blur-md shadow-inner">
          <a
            href="#"
            className="relative px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:text-[#FF2D6C]"
          >
            Home
            <motion.span
              layoutId="activeIndicator"
              className="absolute bottom-0 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full bg-[#FF2D6C]"
            />
          </a>

          <a
            href="#"
            className="px-4 py-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Company
          </a>

          {/* Solution Dropdown Trigger */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionOpen(true)}
            onMouseLeave={() => setSolutionOpen(false)}
          >
            <button className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white">
              Solutions
              <motion.span
                animate={{ rotate: solutionOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={15} />
              </motion.span>
            </button>

            {/* Dynamic Glassmorphic Dropdown */}
            <AnimatePresence>
              {solutionOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0C]/90 p-2 backdrop-blur-2xl shadow-2xl shadow-[#FF2D6C]/10"
                >
                  <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-wider text-white/40">
                    Core Capabilities
                  </div>
                  {SOLUTIONS.map((sol) => (
                    <a
                      key={sol}
                      href="#"
                      className="group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm text-white/70 transition-all hover:bg-[#FF2D6C]/10 hover:text-white"
                    >
                      <span>{sol}</span>
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 transition-all group-hover:opacity-100 group-hover:text-[#FF2D6C]"
                      />
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#"
            className="px-4 py-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Connect
          </a>
        </nav>

        {/* CTA Button + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 rounded-full bg-[#FF2D6C] px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#FF2D6C]/25 transition-all hover:bg-[#e0265d] hover:shadow-[#FF2D6C]/40 active:scale-95">
            <span>Launch Your Idea 🚀</span>
            <ArrowUpRight size={16} />
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden transition-colors hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Slide-In Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
            />

            {/* Menu Content Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-50 h-full w-80 max-w-[85%] border-l border-white/10 bg-[#060608] p-6 shadow-2xl lg:hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <span className="text-xs font-mono uppercase text-white/50 tracking-wider">Navigation</span>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg p-1 text-white/70 hover:text-white"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="mt-8 flex flex-col gap-4">
                  <a
                    href="#"
                    className="flex items-center justify-between rounded-xl bg-[#FF2D6C]/10 px-4 py-3 text-base font-bold text-[#FF2D6C]"
                  >
                    <span>Home</span>
                    <Sparkles size={16} />
                  </a>

                  <a
                    href="#"
                    className="rounded-xl px-4 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    Company
                  </a>

                  {/* Mobile Solutions Section */}
                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                    <p className="mb-3 flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white/40">
                      <Layers size={12} /> Solutions
                    </p>
                    <div className="flex flex-col gap-2 pl-2">
                      {SOLUTIONS.map((sol) => (
                        <a
                          key={sol}
                          href="#"
                          className="text-sm font-medium text-white/70 transition-colors hover:text-[#FF2D6C]"
                        >
                          {sol}
                        </a>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#"
                    className="rounded-xl px-4 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    Connect
                  </a>
                </nav>
              </div>

              {/* Bottom Mobile Action Button */}
              <div className="pt-6 border-t border-white/10">
                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF2D6C] py-3.5 text-sm font-bold text-white shadow-lg shadow-[#FF2D6C]/30">
                  <span>Launch Your Idea 🚀</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}