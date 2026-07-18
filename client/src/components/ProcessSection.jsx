import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
    <div ref={stepRef} className="relative pl-8">
      <motion.div
        animate={{
          backgroundColor: isActive ? "#FF2D6C" : "rgba(255,255,255,0.15)",
          boxShadow: isActive
            ? "0 0 16px rgba(255,45,108,0.6)"
            : "none",
        }}
        transition={{ duration: 0.4 }}
        className="absolute left-0 top-1 h-full w-[3px]"
      />

      <motion.span
        animate={{
          color: isActive ? "#FF2D6C" : "rgba(255,255,255,0.9)",
        }}
        transition={{ duration: 0.4 }}
        className="text-sm font-bold tracking-widest"
      >
        {step.num}
      </motion.span>

      <h3 className="mt-2 text-2xl font-extrabold text-white">
        {step.title}
      </h3>

      <p className="mt-1 text-base text-white/45">
        {step.subtitle}
      </p>

      <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
        {step.desc}
      </p>
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
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-black px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
      {/* Heading */}
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
          className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight text-white"
        >
          From Idea to Scalable Digital Solution
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-sm sm:text-base text-white/60"
        >
          At Tcongs Infotech, we follow a proven process to transform your
          ideas into high-performing digital products. From strategy to
          execution, we focus on delivering scalable and result-driven
          solutions.
        </motion.p>
      </div>

      {/* Steps */}
      <div className="mx-auto mt-16 max-w-4xl">
        <div className="flex flex-col gap-16">
          {GROUPS.map((group, groupIndex) => (
            <div key={groupIndex} className="flex flex-col gap-16">
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
    </section>
  );
}