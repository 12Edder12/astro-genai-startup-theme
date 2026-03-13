import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, X, AlertCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

// ── Validadores ──────────────────────────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateName(val: string) {
  const trimmed = val.trim();
  if (!trimmed) return "El nombre es obligatorio.";
  if (trimmed.length < 5) return "El nombre debe tener al menos 5 caracteres.";
  return "";
}

function validateEmail(val: string) {
  const trimmed = val.trim();
  if (!trimmed) return "El correo es obligatorio.";
  if (!EMAIL_REGEX.test(trimmed)) return "Ingresa un correo electrónico válido.";
  return "";
}

function validateMessage(val: string) {
  const trimmed = val.trim();
  if (!trimmed) return "El mensaje es obligatorio.";
  if (trimmed.length < 10) return "El mensaje debe tener al menos 10 caracteres.";
  return "";
}

// ── Componente de campo con error ────────────────────────────────────────────
function FieldError({ msg }: { msg: string }) {
  if (!msg) return null;
  return (
    <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
      <AlertCircle className="h-3 w-3 flex-shrink-0" />
      {msg}
    </p>
  );
}

// ── Componente principal ─────────────────────────────────────────────────────
export function ContactNukay() {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);

  // Cooldown de 10 segundos
  const [cooldown, setCooldown] = useState(0);
  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldown]);

  // Estado de cada campo
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Errores (solo se muestran tras primer intento de envío o al salir del campo)
  const [touched, setTouched] = useState({ name: false, email: false, message: false });

  const nameErr = validateName(name);
  const emailErr = validateEmail(email);
  const messageErr = validateMessage(message);

  const isFormValid = !nameErr && !emailErr && !messageErr;
  const canSubmit = isFormValid && !isSubmitting && cooldown === 0;

  const handleBlur = (field: "name" | "email" | "message") =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Marcar todos como tocados para mostrar errores
    setTouched({ name: true, email: true, message: true });
    if (!isFormValid || cooldown > 0) return;

    setIsSubmitting(true);

    // Construir FormData con valores limpiados (trim)
    const fd = new FormData();
    fd.append("name", name.trim());
    fd.append("email", email.trim());
    fd.append("message", message.trim());
    fd.append("_subject", "Nuevo mensaje desde la página de Nukay!");
    fd.append("_template", "table");
    fd.append("_captcha", "false");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${import.meta.env.PUBLIC_CORREO_EMAIL || "edderman21@gmail.com"}`,
        { method: "POST", body: fd, headers: { Accept: "application/json" } }
      );

      const data = await response.json();

      if (response.ok && data.success === "true") {
        setIsSuccess(true);
        setModalMessage("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
        setName("");
        setEmail("");
        setMessage("");
        setTouched({ name: false, email: false, message: false });
        setCooldown(10);
      } else {
        setIsSuccess(false);
        setModalMessage(data?.message || "Hubo un error al enviar. Por favor, intenta de nuevo.");
      }
    } catch {
      setIsSuccess(false);
      setModalMessage("Error de red. Revisa tu conexión e intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
      setShowModal(true);
    }
  };

  // ── Estilos compartidos ────────────────────────────────────────────────────
  const inputClass = (hasError: boolean) =>
    `flex w-full rounded-md border px-3 py-2 text-sm bg-gray-50 dark:bg-[#1a1a1a]
     placeholder:text-muted-foreground
     focus-visible:outline-none focus-visible:ring-2
     focus-visible:ring-[#002E6E] dark:focus-visible:ring-[#00FF00]
     disabled:cursor-not-allowed disabled:opacity-50 transition-colors
     ${hasError
      ? "border-red-400 dark:border-red-500"
      : "border-gray-200 dark:border-gray-700"}`;

  return (
    <section id="contacto" className="py-20 md:py-32 bg-white dark:bg-[#121212] transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Encabezado */}
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
            className="text-lg text-muted-foreground max-w-2xl mx-auto text-justify"
          >
            ¿Tienes un proyecto en mente o quieres saber cómo podemos impulsar tu empresa? Escríbenos y nuestro equipo se pondrá en contacto pronto.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-50 dark:bg-[#2C2C2C] p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Información</h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-[#002E6E]/10 dark:bg-[#00FF00]/10 rounded-xl">
                    <Mail className="h-6 w-6 text-[#002E6E] dark:text-[#00FF00]" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                    <a
                      href="mailto:hola@nukay.com"
                      className="text-lg font-semibold text-gray-900 dark:text-white hover:text-[#002E6E] dark:hover:text-[#00FF00] transition-colors"
                    >
                      hola@nukay.com
                    </a>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-[#002E6E]/10 dark:bg-[#00FF00]/10 rounded-xl">
                    <Phone className="h-6 w-6 text-[#002E6E] dark:text-[#00FF00]" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Teléfono</p>
                    <a
                      href="tel:+593980734572"
                      className="text-lg font-semibold text-gray-900 dark:text-white hover:text-[#002E6E] dark:hover:text-[#00FF00] transition-colors"
                    >
                      +593 980734572
                    </a>
                  </div>
                </div>

                {/* Ubicación */}
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

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#2C2C2C] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-lg shadow-black/5 dark:shadow-none"
          >
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>

              {/* Nombre completo */}
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm font-medium text-gray-900 dark:text-gray-200">
                  Nombre completo <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => handleBlur("name")}
                  placeholder="Ej. Juan Pérez"
                  className={inputClass(touched.name && !!nameErr)}
                  autoComplete="name"
                />
                {touched.name && <FieldError msg={nameErr} />}
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  Mínimo 5 caracteres ({Math.max(0, name.trim().length)}/5)
                </p>
              </div>

              {/* Correo electrónico */}
              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium text-gray-900 dark:text-gray-200">
                  Correo electrónico <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => handleBlur("email")}
                  placeholder="juan@empresa.com"
                  className={inputClass(touched.email && !!emailErr)}
                  autoComplete="email"
                />
                {touched.email && <FieldError msg={emailErr} />}
              </div>

              {/* Mensaje */}
              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-medium text-gray-900 dark:text-gray-200">
                  Mensaje <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={() => handleBlur("message")}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className={inputClass(touched.message && !!messageErr)}
                />
                {touched.message && <FieldError msg={messageErr} />}
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  Mínimo 10 caracteres ({Math.max(0, message.trim().length)}/10)
                </p>
              </div>

              {/* Botón */}
              <button
                type="submit"
                disabled={!canSubmit}
                className={`
                  w-full inline-flex items-center justify-center gap-2
                  px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                  ${canSubmit
                    ? "bg-[#002E6E] text-white hover:bg-[#002E6E]/90 dark:bg-[#00FF00] dark:text-[#2C2C2C] dark:hover:bg-[#00FF00]/90 cursor-pointer"
                    : "bg-gray-300 text-gray-500 dark:bg-gray-700 dark:text-gray-400 cursor-not-allowed opacity-60"
                  }
                `}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Enviando...
                  </>
                ) : cooldown > 0 ? (
                  <>
                    <Clock className="h-4 w-4" />
                    Espera {cooldown}s para reenviar
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              {/* Mensaje de campos requeridos */}
              {!isFormValid && touched.name && touched.email && touched.message && (
                <p className="text-xs text-center text-gray-400 dark:text-gray-500">
                  Completa todos los campos para habilitar el envío.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Modal resultado */}
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

              <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6 ${isSuccess ? "bg-[#00FF00]/10" : "bg-red-100 dark:bg-red-900/20"
                }`}>
                {isSuccess
                  ? <CheckCircle2 className="h-8 w-8 text-[#00FF00]" />
                  : <AlertCircle className="h-8 w-8 text-red-500" />
                }
              </div>

              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {isSuccess ? "¡Gracias!" : "Algo salió mal"}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-justify">
                {modalMessage}
              </p>

              <button
                onClick={() => setShowModal(false)}
                className="w-full inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium
                  bg-[#002E6E] text-white hover:bg-[#002E6E]/90
                  dark:bg-[#00FF00] dark:text-[#2C2C2C] dark:hover:bg-[#00FF00]/90 transition-colors"
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}