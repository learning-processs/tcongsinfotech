import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

const GROUPS = [
  {
    steps: [
      {
        num: "01",
        title: "Discovery",
        subtitle: "Business & Market Analysis",
        desc: "We understand your business goals, target audience, and competitors. This helps us define the right strategy to build a strong digital foundation.",
      },
      {
        num: "02",
        title: "Planning",
        subtitle: "Strategy & Architecture",
        desc: "We create detailed project plans, user flows, and system architecture to ensure smooth development and clear execution.",
      },
    ],
  },
  {
    steps: [
      {
        num: "03",
        title: "Design",
        subtitle: "UI/UX & Branding",
        desc: "Our team designs modern, user-friendly interfaces that enhance user experience and reflect your brand identity.",
      },
      {
        num: "04",
        title: "Development",
        subtitle: "Web & App Development",
        desc: "We build fast, scalable, and secure websites and applications using modern technologies tailored to your business needs.",
      },
    ],
  },
  {
    steps: [
      {
        num: "05",
        title: "Testing",
        subtitle: "Quality Assurance",
        desc: "We test every feature to ensure performance, security, and usability across all devices before launch.",
      },
      {
        num: "06",
        title: "Launch & Growth",
        subtitle: "Deployment & Marketing",
        desc: "After launch, we help you scale with SEO, digital marketing, and continuous optimization to grow your business online.",
      },
    ],
  },
];

const ALL_STEPS = GROUPS.flatMap((g) => g.steps);

function StepItem({ step, isActive, stepRef }) {
  return (
    <div ref={stepRef} className="relative pl-10 sm:pl-14">
      {/* Dynamic Animated Node Point */}
      <div className="absolute left-0 top-1 flex items-center justify-center">
        <motion.div
          animate={{
            scale: isActive ? 1.25 : 1,
            backgroundColor: isActive ? "#FF2D6C" : "rgba(255,255,255,0.15)",
            boxShadow: isActive ? "0 0 20px rgba(255,45,108,0.8)" : "none",
          }}
          transition={{ duration: 0.3 }}
          className="h-5 w-5 rounded-full border-2 border-[#060608] z-10"
        />
      </div>

      {/* Dynamic Card Area */}
      <motion.div
        animate={{
          opacity: isActive ? 1 : 0.45,
          x: isActive ? 8 : 0,
        }}
        transition={{ duration: 0.4 }}
        className={`rounded-2xl border p-6 sm:p-8 backdrop-blur-md transition-colors ${
          isActive
            ? "border-[#FF2D6C]/40 bg-gradient-to-r from-[#FF2D6C]/10 via-white/[0.02] to-transparent shadow-xl"
            : "border-white/5 bg-white/[0.01]"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className={`font-mono text-sm font-bold tracking-widest ${isActive ? "text-[#FF2D6C]" : "text-white/60"}`}>
            PHASE {step.num}
          </span>
          {isActive && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-1 rounded-full bg-[#FF2D6C]/20 px-2.5 py-0.5 text-[11px] font-semibold text-[#FF2D6C] border border-[#FF2D6C]/30"
            >
              <Sparkles size={11} /> Active Phase
            </motion.span>
          )}
        </div>

        <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {step.title}
        </h3>

        <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-[#FF2D6C]/90">
          {step.subtitle}
        </p>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">
          {step.desc}
        </p>
      </motion.div>
    </div>
  );
}

export default function ProcessSection() {
  const stepRefs = useRef([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveStep(index);
          }
        });
      },
      {
        rootMargin: "-35% 0px -35% 0px",
        threshold: 0,
      }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const activeData = ALL_STEPS[activeStep] || ALL_STEPS[0];

  return (
    <section className="relative overflow-hidden bg-[#060608] px-5 sm:px-8 lg:px-12 py-20 sm:py-28 text-white">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/3 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#FF2D6C]/10 blur-[160px]" />
      </div>

      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FF2D6C]"
        >
          OUR PROCESS, YOUR GROWTH
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight text-white tracking-tight"
        >
          From Idea to Scalable Digital Solution
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-base sm:text-lg text-white/60 leading-relaxed"
        >
          At Tcongs Infotech, we follow a proven process to transform your
          ideas into high-performing digital products. From strategy to
          execution, we focus on delivering scalable and result-driven
          solutions.
        </motion.p>
      </div>

      {/* Main Section Content Grid */}
      <div className="mx-auto mt-20 max-w-7xl grid lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Sticky Progress Summary HUD (Desktop) */}
        <div className="hidden lg:block lg:col-span-4 sticky top-28 rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <span className="text-xs font-mono uppercase tracking-wider text-white/50">Execution Engine</span>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
              <Zap size={13} /> Active Track
            </span>
          </div>

          <div className="my-8">
            <p className="text-xs text-[#FF2D6C] font-mono font-bold">CURRENT PHASE</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.num}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <h4 className="text-4xl font-black text-white mt-2">{activeData.num}. {activeData.title}</h4>
                <p className="text-sm font-semibold text-white/70 mt-1">{activeData.subtitle}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dynamic Step Progress Meter */}
          <div className="space-y-2 pt-4 border-t border-white/10">
            <div className="flex justify-between text-xs font-mono text-white/50">
              <span>Overall Completion</span>
              <span>{Math.round(((activeStep + 1) / ALL_STEPS.length) * 100)}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                animate={{ width: `${((activeStep + 1) / ALL_STEPS.length) * 100}%` }}
                transition={{ duration: 0.4 }}
                className="h-full bg-gradient-to-r from-white to-[#FF2D6C]"
              />
            </div>
          </div>
        </div>

        {/* Right Scrolling Dynamic Timeline */}
        <div className="lg:col-span-8 relative">
          
          {/* Continuous Vertical Timeline Track Line */}
          <div className="absolute left-[9px] top-4 bottom-8 w-[2px] bg-white/10" />
          
          {/* Active Dynamic Progress Filler Bar */}
          <motion.div
            animate={{
              height: `${(activeStep / (ALL_STEPS.length - 1)) * 90}%`,
            }}
            transition={{ duration: 0.4 }}
            className="absolute left-[9px] top-4 w-[2px] bg-gradient-to-b from-white via-[#FF2D6C] to-[#FF2D6C]"
          />

          <div className="flex flex-col gap-12 sm:gap-16">
            {GROUPS.map((group, groupIndex) => (
              <div key={groupIndex} className="flex flex-col gap-12 sm:gap-16">
                {group.steps.map((step, stepIndex) => {
                  const flatIndex = groupIndex * 2 + stepIndex;

                  return (
                    <div
                      key={step.num}
                      data-index={flatIndex}
                      ref={(el) => (stepRefs.current[flatIndex] = el)}
                    >
                      <StepItem
                        step={step}
                        isActive={activeStep === flatIndex}
                      />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}