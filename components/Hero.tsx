"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 1000], [0, 200]);
  const raysY = useTransform(scrollY, [0, 1000], [0, 500]);
  const contentY = useTransform(scrollY, [0, 1000], [0, 1000]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-b from-background via-primary-pink/10 to-background"
      />

      <motion.div
        style={{ y: raysY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-primary-red/30 via-transparent to-transparent blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-tl from-pink-accent/30 via-transparent to-transparent blur-3xl animate-pulse" />
      </motion.div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 44, 85, 0.15), transparent 40%)`,
        }}
      />

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <Sparkles className="w-12 h-12 mx-auto text-primary-pink mb-4 animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-poppins font-bold mb-6 text-white drop-shadow-[0_0_30px_rgba(255,44,85,0.8)]"
        >
          Sky Visuals CR
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-4xl font-poppins font-semibold text-white mb-6"
        >
          Transformamos cada escenario en una experiencia visual única
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-text font-poppins max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Alquiler, venta y diseño de iluminación profesional para conciertos,
          fiestas, festivales y eventos en Costa Rica.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToContact}
          className="px-8 py-4 bg-primary-pink text-white font-montserrat font-bold text-lg rounded-lg shadow-[0_0_30px_rgba(255,44,85,0.6)] hover:bg-primary-red hover:shadow-[0_0_50px_rgba(255,44,85,0.8)] transition-all"
        >
          Solicitar Servicio Ahora
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16"
        >
          <div className="flex justify-center gap-4">
            <div className="w-2 h-2 bg-primary-pink rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-primary-red rounded-full animate-pulse delay-100" />
            <div className="w-2 h-2 bg-pink-accent rounded-full animate-pulse delay-200" />
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
