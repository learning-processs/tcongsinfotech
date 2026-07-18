import { motion } from "framer-motion";
import { Bot } from "lucide-react";

export default function ChatWidget() {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 via-[#FF2D6C] to-[#FF2D6C] px-5 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#FF2D6C]/40"
    >
      <motion.span
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-2.5 w-2.5 rounded-full bg-white"
      />
      Chat
      <Bot size={18} />
    </motion.button>
  );
}