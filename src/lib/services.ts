// Fuente única de los 4 servicios de Nukay: la comparten ServicesNukay.tsx (home),
// las páginas /servicios/ y el schema hasOfferCatalog del JSON-LD.
export const services = [
  {
    slug: "desarrollo-de-software-a-medida",
    icon: "Code2",
    title: "Desarrollo de Software a Medida",
    summary:
      "Creación de aplicaciones web y móviles personalizadas para necesidades específicas del cliente.",
    description:
      "Diseñamos y construimos aplicaciones web y móviles a la medida de la operación de tu empresa, en lugar de forzarte a adaptarte a un software genérico. Cada proyecto empieza por entender tus procesos reales para que el sistema resultante encaje con tu forma de trabajar, no al revés.",
  },
  {
    slug: "optimizacion-de-procesos",
    icon: "Settings",
    title: "Optimización de Procesos",
    summary:
      "Automatización e integración de sistemas para mejorar la eficiencia operativa de las empresas.",
    description:
      "Automatizamos tareas repetitivas e integramos los sistemas que ya usa tu empresa para que la información fluya sin reprocesos manuales. El objetivo es reducir tiempos operativos y errores humanos en procesos que hoy consumen horas de trabajo evitable.",
  },
  {
    slug: "seguridad-informatica",
    icon: "ShieldCheck",
    title: "Seguridad Informática",
    summary:
      "Soluciones de ciberseguridad para proteger datos y sistemas, incluyendo auditorías y planes de respuesta.",
    description:
      "Protegemos los datos y sistemas de tu empresa con auditorías de seguridad, corrección de vulnerabilidades y planes de respuesta ante incidentes. Trabajamos tanto en la prevención como en la reacción, para que un incidente no se convierta en una crisis.",
  },
  {
    slug: "consultoria-en-tecnologia",
    icon: "Presentation",
    title: "Consultoría en Tecnología",
    summary:
      "Asesoramiento especializado en selección e implementación de tecnologías para impulsar innovación y crecimiento.",
    description:
      "Asesoramos a empresas ecuatorianas en qué tecnología adoptar y cómo implementarla, evitando decisiones costosas basadas en modas en lugar de necesidades reales. Acompañamos desde la evaluación inicial hasta la puesta en marcha.",
  },
] as const;
