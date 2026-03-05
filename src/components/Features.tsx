import { motion } from "framer-motion";
import {
  Brain,
  Zap,
  Shield,
  Code,
  Globe,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Software a Medida",
    description:
      "Desarrollo de aplicaciones inteligentes personalizadas para las necesidades específicas de tu empresa.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Optimización de Procesos",
    description:
      "Automatización e integración de sistemas mediante IA para mejorar la eficiencia operativa.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Control de Datos",
    description:
      "Soluciones de ciberseguridad avanzada. Devolvemos el control de la información a tu empresa.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Brain,
    title: "Consultoría Tecnológica",
    description:
      "Asesoramiento especializado en la selección e implementación de tecnologías innovadoras.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Globe,
    title: "Escalabilidad Global",
    description:
      "Infraestructura tecnológica preparada para crecer contigo hacia nuevos mercados.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Sparkles,
    title: "Innovación Continua",
    description:
      "Aprovechamos las últimas herramientas de IA generativa para mantenerte a la vanguardia.",
    gradient: "from-purple-500 to-pink-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Servicios para la{" "}
            <span className="bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
              transformación digital
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Soluciones innovadoras diseñadas para optimizar tus procesos empresariales con inteligencia artificial.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="group relative p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
