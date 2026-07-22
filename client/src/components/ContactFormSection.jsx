import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, ChevronDown, CheckCircle2, ShieldCheck, Sparkles, User, Phone, MessageSquare } from "lucide-react";

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
    setForm({ ...form, [e.target.name]: e.target.value });
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
    <section className="relative overflow-hidden bg-[#060608] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 text-white">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/3 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#FF2D6C]/10 blur-[160px]" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Fixed Sticky Copy on Desktop */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:sticky lg:top-28 h-fit space-y-6"
        >
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md">
            <Sparkles size={14} className="text-[#FF2D6C]" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#FF2D6C] uppercase">
              CONTACT US
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl tracking-tight">
            Let's Build Something <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#FF2D6C]">
              You'll Be Proud Of
            </span>
          </h2>

          <p className="text-sm leading-relaxed text-white/65 sm:text-base">
            Have a project in mind? Whether you need a website, mobile app,
            or digital solution, our team is ready to turn your ideas into
            reality.
          </p>

          {/* Benefits Stack */}
          <div className="pt-2 space-y-3.5">
            {BENEFITS.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.015] p-3.5 backdrop-blur-md"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF2D6C]/20 text-[#FF2D6C] mt-0.5">
                  <CheckCircle2 size={15} />
                </div>
                <p className="text-sm text-white/80 sm:text-base font-medium">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quick Contact Info Card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[#FF2D6C]">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-white/50">Direct Email</p>
                <a
                  href="mailto:info@tcongsinfotech.com"
                  className="text-sm font-semibold text-white transition-colors hover:text-[#FF2D6C]"
                >
                  info@tcongsinfotech.com
                </a>
              </div>
            </div>
            <span className="text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-1 rounded-md">
              Fast Response
            </span>
          </div>
        </motion.div>

        {/* Right Column: Moveable/Scrollable Form Container */}
        <div className="w-full">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="relative flex flex-col gap-5 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-8 backdrop-blur-xl shadow-2xl"
          >
            {/* Header Row */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-white/50">Inquiry Form</span>
              <span className="flex items-center gap-1.5 text-xs text-white/60">
                <ShieldCheck size={14} className="text-[#FF2D6C]" /> SSL Encrypted
              </span>
            </div>

            {/* Full Name Input */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name*"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 pl-11 text-sm text-white placeholder-white/40 outline-none transition-all focus:border-[#FF2D6C] focus:bg-white/[0.05] sm:text-base"
              />
              <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            </div>

            {/* Email Address Input */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address*"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 pl-11 text-sm text-white placeholder-white/40 outline-none transition-all focus:border-[#FF2D6C] focus:bg-white/[0.05] sm:text-base"
              />
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            </div>

            {/* Phone Input with Country Selector */}
            <div className="flex items-center rounded-2xl border border-white/10 bg-white/[0.03] px-3 transition-all focus-within:border-[#FF2D6C] focus-within:bg-white/[0.05]">
              <button
                type="button"
                className="flex items-center gap-1.5 border-r border-white/10 py-3 pr-3 text-sm text-white"
              >
                <span className="text-base">🇮🇳</span>
                <ChevronDown size={14} className="text-white/50" />
              </button>

              <div className="relative w-full">
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number*"
                  required
                  className="w-full bg-transparent px-3 py-3.5 pl-9 text-sm text-white placeholder-white/40 outline-none sm:text-base"
                />
                <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              </div>
            </div>

            {/* Project Message Textarea */}
            <div className="relative">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project*"
                required
                rows={4}
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 pl-11 text-sm text-white placeholder-white/40 outline-none transition-all focus:border-[#FF2D6C] focus:bg-white/[0.05] sm:text-base"
              />
              <MessageSquare size={18} className="absolute left-4 top-5 text-white/30" />
            </div>

            {/* Human Verification Box */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <label className="mb-2 block text-xs font-medium text-white/70 sm:text-sm">
                Human Verification: <span className="font-mono text-white font-bold">6 + 8 =</span>
              </label>

              <input
                type="text"
                name="sum"
                value={form.sum}
                onChange={handleChange}
                placeholder="Enter Sum*"
                required
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none transition-all focus:border-[#FF2D6C]"
              />
            </div>

            {/* Animated Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              className="relative mt-1 flex w-full overflow-hidden rounded-2xl p-[2px]"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,_#FF2D6C,_#FACC15,_#FF2D6C)]"
              />

              <span className="relative z-10 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0d0d0d] px-8 py-4 text-sm font-bold text-white sm:text-base transition-colors hover:bg-black">
                <span>Submit Inquiry</span>
                <Send size={16} />
              </span>
            </motion.button>

            {/* Direct Email Footer Link */}
            <div className="mt-2 text-center text-xs text-white/50 sm:text-sm space-y-1">
              <p>Prefer email instead? Feel free to contact us directly.</p>
              <a
                href="mailto:info@tcongsinfotech.com"
                className="inline-flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-[#FF2D6C]"
              >
                <Mail size={14} />
                info@tcongsinfotech.com
              </a>
            </div>
          </motion.form>
        </div>

      </div>
    </section>
  );
}