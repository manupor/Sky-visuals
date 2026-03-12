"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Music2, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-primary-pink/20">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-pink/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-poppins font-bold text-primary-pink mb-2 drop-shadow-[0_0_15px_rgba(255,44,85,0.8)]"
          >
            Sky Visuals CR
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-text font-poppins"
          >
            Iluminación Profesional para Escenarios | Costa Rica 🇨🇷
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-6 mb-8"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-primary-pink/10 border-2 border-primary-pink/30 rounded-lg flex items-center justify-center hover:border-primary-pink hover:bg-primary-pink/20 hover:shadow-[0_0_20px_rgba(255,44,85,0.5)] transition-all"
          >
            <Instagram className="w-6 h-6 text-primary-pink" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-primary-red/10 border-2 border-primary-red/30 rounded-lg flex items-center justify-center hover:border-primary-red hover:bg-primary-red/20 hover:shadow-[0_0_20px_rgba(244,41,92,0.5)] transition-all"
          >
            <Facebook className="w-6 h-6 text-primary-red" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-pink-accent/10 border-2 border-pink-accent/30 rounded-lg flex items-center justify-center hover:border-pink-accent hover:bg-pink-accent/20 hover:shadow-[0_0_20px_rgba(255,45,120,0.5)] transition-all"
          >
            <Music2 className="w-6 h-6 text-primary-pink" />
          </a>
          <a
            href="https://wa.me/50612345678"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-primary-pink/10 border-2 border-primary-pink/30 rounded-lg flex items-center justify-center hover:border-primary-pink hover:bg-primary-pink/20 hover:shadow-[0_0_20px_rgba(255,44,85,0.5)] transition-all"
          >
            <MessageCircle className="w-6 h-6 text-primary-pink" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-text font-poppins text-sm"
        >
          <p>© 2026 Sky Visuals CR. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}
