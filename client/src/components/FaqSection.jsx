import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";

const FAQS = [
  {
    q: "What services does Tcongs Infotech offer?",
    a: "We offer web development, mobile app development, custom software solutions, eCommerce management, and digital marketing services to help businesses grow online.",
  },
  {
    q: "How long does it take to build a website or app?",
    a: "Timelines vary by scope, but most websites take 2-4 weeks and apps take 6-10 weeks. We'll give you a clear estimate after understanding your requirements.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes, we work with clients across the globe. We've delivered projects for businesses in multiple countries and adapt to your timezone for smooth communication.",
  },
  {
    q: "Can you help grow my business after development?",
    a: "Absolutely. Beyond development, we offer SEO, digital marketing, and ongoing optimization to help you scale and grow after launch.",
  },
  {
    q: "What makes Tcongs Infotech different?",
    a: "We combine strategy, design, and development under one roof, focusing on scalable, result-driven solutions rather than one-off projects.",
  },
  {
    q: "How can I get started?",
    a: "Just book a free call or submit an inquiry through our contact form. We'll schedule a discovery session to understand your goals and next steps.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative bg-black px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16">
        {/* Left: heading */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:sticky lg:top-28 h-fit"
        >
          <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FF2D6C]">
            FAQS
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
            Questions? We've Got Answers
          </h2>
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/60">
            Tcongs Infotech helps businesses grow with web development,
            mobile apps, eCommerce solutions, and digital marketing. Here are
            answers to common questions from our clients.
          </p>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="mt-8 flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm sm:text-base font-bold text-black shadow-xl"
          >
            Book a Free Call 🚀
            <ArrowUpRight size={18} />
          </motion.button>
        </motion.div>

        {/* Right: accordion */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                animate={{
                  borderColor: isOpen ? "#FF2D6C" : "rgba(255,255,255,0.1)",
                  backgroundColor: isOpen ? "rgba(255,45,108,0.05)" : "rgba(255,255,255,0.02)",
                }}
                className="overflow-hidden rounded-2xl border"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 sm:px-7 py-5 text-left"
                >
                  <span className="text-sm sm:text-lg font-semibold text-white">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{
                      rotate: isOpen ? 45 : 0,
                      backgroundColor: isOpen ? "#FF2D6C" : "rgba(255,255,255,0.08)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full text-white"
                  >
                    <Plus size={16} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="px-5 sm:px-7 pb-5 text-sm sm:text-base leading-relaxed text-white/65">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 