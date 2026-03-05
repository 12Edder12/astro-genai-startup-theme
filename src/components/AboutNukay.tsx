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
    <section id="nosotros" className="py-20 md:py-32 bg-white dark:bg-[#2C2C2C] text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#002E6E] dark:text-[#00FF00]">Nuestra Misión</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              En Nukay, nuestra misión es desarrollar soluciones tecnológicas innovadoras que impulsen la transformación digital de las empresas, optimizando procesos y mejorando la experiencia del usuario.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#002E6E] dark:text-[#00FF00]">Nuestra Visión</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Ser líderes en el desarrollo de software, creando productos escalables y eficientes que impacten positivamente en la sociedad y la industria tecnológica.
            </p>
          </motion.div>
        </div>

        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#B9663B]"
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
                className="bg-gray-50 dark:bg-[#002E6E]/30 border border-gray-200 dark:border-[#00FF00]/20 p-6 rounded-2xl hover:border-[#002E6E] dark:hover:border-[#00FF00] transition-colors"
              >
                <div className="h-12 w-12 rounded-full bg-[#002E6E]/10 dark:bg-[#00FF00]/10 flex items-center justify-center mb-4">
                  <Icon className="text-[#002E6E] dark:text-[#00FF00] h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{v.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
