"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  tipoEvento: string;
  fecha: string;
  lugar: string;
  detalles: string;
}

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section
      id="contacto"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary-pink/5 to-background" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary-pink mb-4 drop-shadow-[0_0_20px_rgba(255,44,85,0.8)]">
            Cotiza tu Evento
          </h2>
          <p className="text-xl text-gray-text font-poppins">
            Cuéntanos sobre tu evento y te contactamos en menos de 24 horas
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-background/50 backdrop-blur-sm border-2 border-primary-pink/30 rounded-xl p-8 md:p-12"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-poppins font-bold text-green-500 mb-4">
                ¡Gracias! Tu solicitud fue recibida.
              </h3>
              <p className="text-lg text-gray-text font-poppins">
                Te contactaremos pronto 🎉
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-montserrat font-semibold mb-2">
                    Nombre completo *
                  </label>
                  <input
                    {...register("nombre", {
                      required: "El nombre es requerido",
                    })}
                    type="text"
                    className="w-full px-4 py-3 bg-background/50 border-2 border-primary-pink/30 rounded-lg text-white font-poppins focus:border-primary-pink focus:outline-none focus:shadow-[0_0_15px_rgba(255,44,85,0.3)] transition-all"
                    placeholder="Tu nombre"
                  />
                  {errors.nombre && (
                    <p className="text-pink-accent text-sm mt-1 font-poppins">
                      {errors.nombre.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-white font-montserrat font-semibold mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    {...register("email", {
                      required: "El correo es requerido",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Correo inválido",
                      },
                    })}
                    type="email"
                    className="w-full px-4 py-3 bg-background/50 border-2 border-primary-pink/30 rounded-lg text-white font-poppins focus:border-primary-pink focus:outline-none focus:shadow-[0_0_15px_rgba(255,44,85,0.3)] transition-all"
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="text-pink-accent text-sm mt-1 font-poppins">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-montserrat font-semibold mb-2">
                    Teléfono WhatsApp *
                  </label>
                  <input
                    {...register("telefono", {
                      required: "El teléfono es requerido",
                    })}
                    type="tel"
                    className="w-full px-4 py-3 bg-background/50 border-2 border-primary-pink/30 rounded-lg text-white font-poppins focus:border-primary-pink focus:outline-none focus:shadow-[0_0_15px_rgba(255,44,85,0.3)] transition-all"
                    placeholder="+506 1234 5678"
                  />
                  {errors.telefono && (
                    <p className="text-pink-accent text-sm mt-1 font-poppins">
                      {errors.telefono.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-white font-montserrat font-semibold mb-2">
                    Tipo de evento *
                  </label>
                  <select
                    {...register("tipoEvento", {
                      required: "Selecciona un tipo de evento",
                    })}
                    className="w-full px-4 py-3 bg-background/50 border-2 border-primary-pink/30 rounded-lg text-white font-poppins focus:border-primary-pink focus:outline-none focus:shadow-[0_0_15px_rgba(255,44,85,0.3)] transition-all"
                  >
                    <option value="">Selecciona...</option>
                    <option value="concierto">Concierto</option>
                    <option value="fiesta-privada">Fiesta Privada</option>
                    <option value="festival">Festival</option>
                    <option value="boda">Boda</option>
                    <option value="corporativo">Corporativo</option>
                    <option value="otro">Otro</option>
                  </select>
                  {errors.tipoEvento && (
                    <p className="text-pink-accent text-sm mt-1 font-poppins">
                      {errors.tipoEvento.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-montserrat font-semibold mb-2">
                    Fecha del evento
                  </label>
                  <input
                    {...register("fecha")}
                    type="date"
                    className="w-full px-4 py-3 bg-background/50 border-2 border-primary-pink/30 rounded-lg text-white font-poppins focus:border-primary-pink focus:outline-none focus:shadow-[0_0_15px_rgba(255,44,85,0.3)] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white font-montserrat font-semibold mb-2">
                    Lugar del evento
                  </label>
                  <input
                    {...register("lugar")}
                    type="text"
                    className="w-full px-4 py-3 bg-background/50 border-2 border-primary-pink/30 rounded-lg text-white font-poppins focus:border-primary-pink focus:outline-none focus:shadow-[0_0_15px_rgba(255,44,85,0.3)] transition-all"
                    placeholder="Ciudad, provincia"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-montserrat font-semibold mb-2">
                  Detalles adicionales
                </label>
                <textarea
                  {...register("detalles")}
                  rows={4}
                  className="w-full px-4 py-3 bg-background/50 border-2 border-primary-pink/30 rounded-lg text-white font-poppins focus:border-primary-pink focus:outline-none focus:shadow-[0_0_15px_rgba(255,44,85,0.3)] transition-all resize-none"
                  placeholder="Cuéntanos más sobre tu evento..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-primary-pink text-white font-montserrat font-bold text-lg rounded-lg shadow-[0_0_30px_rgba(255,44,85,0.6)] hover:bg-primary-red hover:shadow-[0_0_50px_rgba(255,44,85,0.8)] transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Solicitud
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
