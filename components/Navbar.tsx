"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-primary-pink/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("hero")}
          >
            <h1 className="text-2xl md:text-3xl font-poppins font-bold text-primary-pink drop-shadow-[0_0_10px_rgba(255,44,85,0.8)]">
              Sky Visuals CR
            </h1>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-white hover:text-primary-pink transition-colors font-montserrat font-semibold"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("por-que-nosotros")}
              className="text-white hover:text-primary-pink transition-colors font-montserrat font-semibold"
            >
              ¿Por qué nosotros?
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-white hover:text-primary-pink transition-colors font-montserrat font-semibold"
            >
              Contacto
            </button>
            <motion.button
              onClick={() => scrollToSection("contacto")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-primary-pink text-white rounded-lg font-montserrat font-bold hover:bg-primary-red transition-all shadow-[0_0_15px_rgba(255,44,85,0.5)]"
            >
              Cotizar ahora
            </motion.button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary-pink"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-primary-pink/20"
        >
          <div className="px-4 pt-2 pb-6 space-y-4">
            <button
              onClick={() => scrollToSection("servicios")}
              className="block w-full text-left text-white hover:text-primary-pink transition-colors font-montserrat font-semibold py-2"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("por-que-nosotros")}
              className="block w-full text-left text-white hover:text-primary-pink transition-colors font-montserrat font-semibold py-2"
            >
              ¿Por qué nosotros?
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="block w-full text-left text-white hover:text-primary-pink transition-colors font-montserrat font-semibold py-2"
            >
              Contacto
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="w-full px-6 py-3 bg-primary-pink text-white rounded-lg font-montserrat font-bold hover:bg-primary-red transition-all shadow-[0_0_15px_rgba(255,44,85,0.5)]"
            >
              Cotizar ahora
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
