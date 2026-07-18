import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, ChevronDown, CheckCircle2 } from "lucide-react";

const BENEFITS = [
  "You'll hear from us within one business day.",
  "We'll understand your goals and requirements.",
  "You'll receive a clear proposal with pricing & timeline.",
];

export default function ContactFormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    sum: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Number(form.sum) !== 14) {
      alert("Please enter the correct human verification answer.");
      return;
    }

    console.log(form);

    alert("Inquiry submitted successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
      sum: "",
    });
  };

  return (
    <section className="relative bg-black px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="h-fit lg:sticky lg:top-28"
        >
          <p className="text-xs font-bold tracking-[0.25em] text-[#FF2D6C] sm:text-sm">
            CONTACT US
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Let's Build Something You'll Be Proud Of
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base">
            Have a project in mind? Whether you need a website, mobile app,
            or digital solution, our team is ready to turn your ideas into
            reality.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {BENEFITS.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.15 + i * 0.1,
                }}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-[#FF2D6C]"
                />

                <p className="text-sm text-white/75 sm:text-base">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name*"
            required
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-[#FF2D6C] sm:text-base"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address*"
            required
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-[#FF2D6C] sm:text-base"
          />

          {/* Phone */}
          <div className="flex items-center rounded-xl border border-white/10 bg-white/[0.03] px-3 transition-colors focus-within:border-[#FF2D6C]">
            <button
              type="button"
              className="flex items-center gap-1.5 border-r border-white/10 py-2.5 pr-3 text-sm text-white"
            >
              🇮🇳
              <ChevronDown size={14} className="text-white/50" />
            </button>

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number*"
              required
              className="w-full bg-transparent px-3 py-2.5 text-sm text-white placeholder-white/40 outline-none sm:text-base"
            />
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project*"
            required
            rows={4}
            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-[#FF2D6C] sm:text-base"
          />

          {/* Verification */}
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <label className="mb-2 block text-xs text-white/50 sm:text-sm">
              Human Verification: 6 + 8 =
            </label>

            <input
              type="text"
              name="sum"
              value={form.sum}
              onChange={handleChange}
              placeholder="Enter Sum*"
              required
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-[#FF2D6C]"
            />
          </div>

          {/* Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.97 }}
            className="relative mt-1 flex overflow-hidden rounded-full p-[2px]"
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,_#FACC15,_#22C55E,_#FACC15)]"
            />

            <span className="relative z-10 flex w-full items-center justify-center gap-2 rounded-full bg-[#0d0d0d] px-8 py-3.5 text-sm font-bold text-white sm:text-base">
              Submit Inquiry
              <Send size={16} />
            </span>
          </motion.button>

          {/* Email */}
          <div className="mt-2 text-center text-xs text-white/50 sm:text-sm">
            <p>Prefer email instead? Feel free to contact us directly.</p>

            <a
              href="mailto:info@tcongsinfotech.com"
              className="mt-2 inline-flex items-center gap-1.5 font-medium text-white transition-colors hover:text-[#FF2D6C]"
            >
              <Mail size={14} />
              info@tcongsinfotech.com
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
}