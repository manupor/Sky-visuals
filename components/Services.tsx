"use client";

import { motion } from "framer-motion";
import { Lightbulb, Palette, Zap, Music } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Cabezas Móviles de Alta Potencia",
    description:
      "Equipos de última generación con movimiento DMX, efectos de gobo, colores y strobo para espectáculos de alto impacto.",
  },
  {
    icon: Lightbulb,
    title: "Pares LED Profesionales",
    description:
      "Iluminación LED de alta intensidad con mezcla de colores RGBW. Perfectos para ambientar cualquier espacio con estilo.",
  },
  {
    icon: Palette,
    title: "Diseño de Iluminación",
    description:
      "Creamos el concepto visual completo de tu evento. Desde el plano técnico hasta la ejecución en vivo.",
  },
  {
    icon: Music,
    title: "DJs · Artistas · Bandas",
    description:
      "Paquetes especiales para artistas y performers. Llevamos tu show al siguiente nivel con iluminación sincronizada.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary-pink/5 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary-pink mb-4 drop-shadow-[0_0_20px_rgba(255,44,85,0.8)]">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-text font-poppins">
            Soluciones de iluminación para cada tipo de evento
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative bg-background/50 backdrop-blur-sm border-2 border-primary-pink/30 rounded-xl p-6 hover:border-primary-pink hover:shadow-[0_0_30px_rgba(255,44,85,0.5)] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-pink/10 via-primary-red/10 to-pink-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-16 h-16 mb-4 bg-primary-pink/20 rounded-lg flex items-center justify-center group-hover:bg-primary-pink/30 transition-colors">
                    <Icon className="w-8 h-8 text-primary-pink" />
                  </div>

                  <h3 className="text-xl font-poppins font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-text font-poppins leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-20 h-20 bg-primary-red/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
