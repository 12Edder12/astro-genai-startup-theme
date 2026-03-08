import { motion } from "framer-motion";
import { Lightbulb, Users, Search, Target, Zap, Heart } from "lucide-react";

const valores = [
  { icon: Lightbulb, title: "Innovación", desc: "Buscamos soluciones tecnológicas creativas y disruptivas." },
  { icon: Users, title: "Colaboración", desc: "Creemos en el trabajo en equipo y la comunicación efectiva." },
  { icon: Search, title: "Transparencia", desc: "Actuamos con honestidad y claridad en cada proyecto." },
  { icon: Target, title: "Excelencia", desc: "Nos esforzamos por ofrecer software de alta calidad." },
  { icon: Zap, title: "Agilidad", desc: "Nos adaptamos rápidamente a los cambios y desafíos." },
  { icon: Heart, title: "Responsabilidad", desc: "Contribuimos al bienestar social y ambiental." },
];

export function AboutNukay() {
  return (
    <section id="nosotros" className="bg-white dark:bg-[#2C2C2C] text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#002E6E] dark:text-white">Nuestra Misión</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-justify">
              En Nukay, nuestra misión es desarrollar soluciones tecnológicas innovadoras que impulsen la transformación digital de las empresas, optimizando procesos y mejorando la experiencia del usuario.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#002E6E] dark:text-white">Nuestra Visión</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-justify">
              Ser líderes en el desarrollo de software, creando productos escalables y eficientes que impacten positivamente en la sociedad y la industria tecnológica.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sección Nuestros Valores — mismo fondo que Servicios */}
      <div className="bg-gray-50 dark:bg-[#1a1a1a] py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
            >
              Nuestros Valores
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {valores.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02, boxShadow: "0 16px 40px rgba(0,0,0,0.12)" }}
                  whileTap={{ scale: 0.98 }}
                  className="flex flex-col bg-white dark:bg-[#2C2C2C] border border-gray-100 dark:border-gray-800 p-6 rounded-2xl shadow-sm hover:border-[#002E6E] dark:hover:border-[#00FF00] transition-colors duration-300 cursor-pointer"
                >
                  <div className="flex-shrink-0 p-3 bg-[#002E6E]/10 dark:bg-[#002E6E]/30 rounded-xl mb-4 w-fit">
                    <Icon className="text-[#002E6E] dark:text-[#00FF00] h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{v.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-justify">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
