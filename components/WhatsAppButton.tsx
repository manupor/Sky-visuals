"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "+50612345678";
  const message = "Hola, quiero cotizar iluminación para mi evento 🎉";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:shadow-[0_0_50px_rgba(34,197,94,0.8)] transition-all animate-pulse"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </motion.button>
  );
}
