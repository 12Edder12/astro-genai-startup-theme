import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";

export function ProjectsNukay() {
  return (
    <section className="py-20 md:py-32 bg-white dark:bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Proyectos <span className="text-[#002E6E] dark:text-[#00FF00]">Realizados</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Aquí encontrarás los proyectos que se han realizado por el equipo de Nukay.
          </motion.p>
        </div>

        <div className="flex flex-col items-center justify-center p-12 bg-gray-50 dark:bg-[#2C2C2C] rounded-2xl border border-dashed border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-20 w-20 bg-[#00FF00]/10 rounded-full flex items-center justify-center mb-6"
          >
            <FolderGit2 className="h-10 w-10 text-[#00FF00]" />
          </motion.div>
          <h3 className="text-xl font-semibold mb-2 text-center text-[#B9663B] dark:text-white">Muy pronto</h3>
          <p className="text-center text-muted-foreground">
            Estamos preparando nuestra galería de casos de éxito y proyectos destacados. ¡Mantente atento!
          </p>
        </div>
      </div>
    </section>
  );
}
