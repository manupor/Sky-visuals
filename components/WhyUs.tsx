"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Users, Calendar } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: 150,
    label: "Eventos Realizados",
    prefix: "+",
  },
  {
    icon: Users,
    value: 80,
    label: "Clientes Satisfechos",
    prefix: "+",
  },
  {
    icon: Award,
    value: 5,
    label: "Años de Experiencia",
    prefix: "+",
  },
];

function Counter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (value - startValue) + startValue);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function WhyUs() {
  return (
    <section
      id="por-que-nosotros"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary-red/5 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary-pink mb-4 drop-shadow-[0_0_20px_rgba(255,44,85,0.8)]">
            ¿Por qué Sky Visuals CR?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative bg-background/50 backdrop-blur-sm border-2 border-primary-pink/30 rounded-xl p-8 text-center hover:border-primary-pink hover:shadow-[0_0_30px_rgba(255,44,85,0.5)] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-pink/10 to-transparent rounded-xl" />

                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary-pink/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-pink" />
                  </div>

                  <div className="text-5xl md:text-6xl font-poppins font-bold text-white mb-2">
                    {stat.prefix}
                    <Counter value={stat.value} />
                  </div>

                  <p className="text-lg text-gray-text font-poppins">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-gray-text font-poppins leading-relaxed">
            Somos especialistas en transformar espacios ordinarios en experiencias
            visuales extraordinarias. Contamos con equipo de última generación y un
            equipo humano apasionado por la luz y el espectáculo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
