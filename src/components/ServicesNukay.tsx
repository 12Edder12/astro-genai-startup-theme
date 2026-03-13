import { motion } from "framer-motion";
import { Code2, Settings, ShieldCheck, Presentation } from "lucide-react";
import servicesImg from "../images/services.jpg";

const services = [
  {
    icon: Code2,
    title: "Desarrollo de Software a Medida",
    description: "Creación de aplicaciones web y móviles personalizadas para necesidades específicas del cliente.",
  },
  {
    icon: Settings,
    title: "Optimización de Procesos",
    description: "Automatización e integración de sistemas para mejorar la eficiencia operativa de las empresas.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad Informática",
    description: "Soluciones de ciberseguridad para proteger datos y sistemas, incluyendo auditorías y planes de respuesta.",
  },
  {
    icon: Presentation,
    title: "Consultoría en Tecnología",
    description: "Asesoramiento especializado en selección e implementación de tecnologías para impulsar innovación y crecimiento.",
  },
];

export function ServicesNukay() {
  return (
    <section id="servicios" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${servicesImg.src ?? servicesImg})` }}
      >
        <div className="absolute inset-0 bg-gray-50/90 dark:bg-[#1a1a1a]/90 transition-colors duration-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Nukay <span className="text-[#002E6E] dark:text-[#00FF00]">Servicios</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Los servicios que ofrecemos para llevar tu empresa al futuro.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
                whileHover={{ y: -6, scale: 1.02, boxShadow: "0 16px 40px rgba(0,0,0,0.12)" }}
                whileTap={{ scale: 0.98 }}
                className="flex items-start p-6 bg-white dark:bg-[#2C2C2C] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-[#002E6E] dark:hover:border-[#00FF00] transition-colors duration-300 cursor-pointer"
              >
                <div className="flex-shrink-0 p-3 bg-[#002E6E]/10 dark:bg-[#002E6E]/30 rounded-xl mt-1">
                  <Icon className="h-6 w-6 text-[#002E6E] dark:text-[#00FF00]" />
                </div>
                <div className="ml-5">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-justify">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
