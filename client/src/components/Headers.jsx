import { useState } from "react";
import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = ["Home", "Company", "Connect"];

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

  return (
    <header className="relative z-30 flex items-center justify-between bg-black px-5 sm:px-8 lg:px-12 py-4 sm:py-5">
      {/* Logo */}
     <a href="#" className="flex items-center">
  <img
    src="/logo.png"
    alt="Tcongs Infotech"
    className="h-9 sm:h-12 w-auto object-contain"
  />
</a>

      {/* Desktop nav */}
      <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/80">
        {NAV_LINKS.slice(0, 1).map((item) => (
          <a key={item} href="#" className="relative text-[#FF2D6C]">
            {item}
            <span className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-[#FF2D6C]" />
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
            <span
              className={`transition-transform duration-250 ${solutionOpen ? "rotate-180" : "rotate-0"}`}
            >
              <ChevronDown size={16} />
            </span>
          </button>

          {solutionOpen && (
            <div className="absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0A0A0A] p-2 shadow-2xl">
              {SOLUTIONS.map((sol) => (
                <a
                  key={sol}
                  href="#"
                  className="block rounded-xl px-4 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {sol}
                </a>
              ))}
            </div>
          )}
        </div>

        <a href="#" className="transition-colors hover:text-white">
          Connect
        </a>
      </nav>

      {/* CTA + mobile toggle */}
      <div className="flex items-center gap-3">
        <button className="hidden sm:flex items-center gap-2 rounded-full bg-[#FF2D6C] px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#FF2D6C]/30 transition-transform hover:scale-105 active:scale-95">
          Launch Your Idea 🚀
          <ArrowUpRight size={16} />
        </button>

        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden text-white"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile slide-in menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-72 max-w-[80%] bg-[#0A0A0A] p-6 shadow-2xl"
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
                    <a key={sol} href="#" className="text-sm hover:text-white">
                      {sol}
                    </a>
                  ))}
                </div>
              </div>
              <a href="#" className="hover:text-white">
                Connect
              </a>
              <button className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#FF2D6C] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#FF2D6C]/30">
                Launch Your Idea 🚀
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
