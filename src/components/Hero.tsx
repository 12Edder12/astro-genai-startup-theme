import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, Sparkles } from "lucide-react";
import { withBase } from "@/lib/utils";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-green-300 dark:bg-green-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-300 dark:bg-amber-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border bg-background/50 text-sm font-medium text-muted-foreground"
          >
            Ambato, Ecuador
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl"
          >
            <span className="bg-gradient-to-r from-green-500 via-blue-600 to-green-500 dark:from-green-400 dark:via-blue-500 dark:to-green-400 bg-clip-text text-transparent animate-gradient">
              Nukay
            </span>
            : software a medida para tu empresa
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg md:text-xl font-medium text-foreground/80 max-w-2xl"
          >
            Tecnología hecha por nosotros para potenciar lo nuestro.
          </motion.p>

          {/* Párrafo de identidad — quiénes somos, dónde, qué hacemos */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl"
          >
            Nukay es una empresa ecuatoriana de desarrollo de software con sede en Ambato, Tungurahua. Creamos software a medida, automatización de procesos, ciberseguridad y consultoría tecnológica para empresas de Ecuador.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="lg" asChild>
              <a href={withBase("/#contacto")}>
                Hablemos de tu proyecto
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 pt-8"
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 text-2xl md:text-3xl font-bold">
                <Zap className="h-6 w-6 text-yellow-500" />
                <span>Eficiencia</span>
              </div>
              <p className="text-sm text-muted-foreground">Optimizada</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 text-2xl md:text-3xl font-bold">
                <Brain className="h-6 w-6 text-green-500" />
                <span>IA</span>
              </div>
              <p className="text-sm text-muted-foreground">A Medida</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 text-2xl md:text-3xl font-bold">
                <Sparkles className="h-6 w-6 text-blue-500" />
                <span>Seguridad</span>
              </div>
              <p className="text-sm text-muted-foreground">Confiable</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
