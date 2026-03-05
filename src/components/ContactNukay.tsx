import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactNukay() {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setModalMessage("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
        setShowModal(true);
        form.reset();
      } else {
        setModalMessage("Hubo un error al enviar. Por favor, intenta de nuevo.");
        setShowModal(true);
      }
    } catch (error) {
      setModalMessage("Error de red. Revisa tu conexión.");
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-white dark:bg-[#121212] transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Ponte en <span className="text-[#002E6E] dark:text-[#00FF00]">Contacto</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            ¿Tienes un proyecto en mente o quieres saber cómo podemos impulsar tu empresa? Escríbenos y nuestro equipo se pondrá en contacto pronto.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Información de cotacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-50 dark:bg-[#2C2C2C] p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-[#B9663B] dark:text-white">Información</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-[#002E6E]/10 dark:bg-[#00FF00]/10 rounded-xl">
                    <Mail className="h-6 w-6 text-[#002E6E] dark:text-[#00FF00]" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                    <a href="mailto:hola@nukay.com" className="text-lg font-semibold text-gray-900 dark:text-white hover:text-[#002E6E] dark:hover:text-[#00FF00] transition-colors">
                      hola@nukay.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-[#002E6E]/10 dark:bg-[#00FF00]/10 rounded-xl">
                    <Phone className="h-6 w-6 text-[#002E6E] dark:text-[#00FF00]" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Teléfono</p>
                    <a href="tel:+1234567890" className="text-lg font-semibold text-gray-900 dark:text-white hover:text-[#002E6E] dark:hover:text-[#00FF00] transition-colors">
                      +593 980734572
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-[#002E6E]/10 dark:bg-[#00FF00]/10 rounded-xl">
                    <MapPin className="h-6 w-6 text-[#002E6E] dark:text-[#00FF00]" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Ubicación</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      Ambato, Ecuador
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#2C2C2C] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-lg shadow-black/5 dark:shadow-none"
          >
            <form className="space-y-6" action="https://formsubmit.co/edderman21@gmail.com" method="POST" onSubmit={handleSubmit}>
              {/* Opciones ocultas para FormSubmit recomendadas */}
              <input type="hidden" name="_subject" value="Nuevo mensaje desde la página de Nukay!" />
              <input type="hidden" name="_template" value="table" />
              {/* Prevenir redirección a página de gracias, sino regresar a index y usar ajax */}
              <input type="hidden" name="_next" value="http://localhost:4321/" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-900 dark:text-gray-200">
                  Nombre completo
                </label>
                <Input id="name" name="name" required placeholder="Ej. Juan Pérez" className="bg-gray-50 dark:bg-[#1a1a1a] border-gray-200 dark:border-gray-700" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-900 dark:text-gray-200">
                  Correo electrónico
                </label>
                <Input id="email" name="email" type="email" required placeholder="juan@empresa.com" className="bg-gray-50 dark:bg-[#1a1a1a] border-gray-200 dark:border-gray-700" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-900 dark:text-gray-200">
                  Mensaje
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4} 
                  placeholder="Cuéntanos sobre tu proyecto..." 
                  className="flex w-full rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#1a1a1a] px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002E6E] dark:focus-visible:ring-[#00FF00] disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-[#002E6E] hover:bg-[#002E6E]/90 dark:bg-[#00FF00] dark:text-[#2C2C2C] dark:hover:bg-[#00FF00]/90">
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Modal de Éxito */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white dark:bg-[#2C2C2C] relative p-8 rounded-2xl shadow-2xl max-w-md w-full text-center border border-gray-100 dark:border-gray-700"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="mx-auto w-16 h-16 bg-[#00FF00]/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="h-8 w-8 text-[#00FF00]" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">¡Gracias!</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {modalMessage}
              </p>
              
              <Button 
                onClick={() => setShowModal(false)}
                className="w-full bg-[#002E6E] hover:bg-[#002E6E]/90 dark:bg-[#00FF00] dark:text-[#2C2C2C] dark:hover:bg-[#00FF00]/90"
              >
                Cerrar
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}