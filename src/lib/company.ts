// Fuente única de verdad para los datos de la empresa (NAP: Name, Address, Phone).
// Cualquier componente o página que muestre estos datos debe leerlos de aquí,
// para que no se desincronicen (p. ej. el teléfono llegó a estar duplicado
// y en conflicto entre ContactNukay y las páginas legales).
export const company = {
  name: "Nukay",
  alternateNames: ["Nukay SW", "Nukay Software"],
  tagline: "Tecnología hecha por nosotros para potenciar lo nuestro.",
  description:
    "Nukay (Nukay SW) es una empresa ecuatoriana de desarrollo de software con sede en Ambato, Tungurahua. Desarrolla software a medida, automatización de procesos, ciberseguridad y consultoría tecnológica para empresas de Ecuador.",
  disambiguatingDescription:
    'El término kichwa "ñukay" también da nombre a otros negocios y organizaciones en Ecuador, sin relación con esta empresa. Nukay SW es exclusivamente una empresa de desarrollo de software con sede en Ambato, Tungurahua.',
  email: "edder.naranjo@nukaysw.com",
  phone: {
    e164: "+593980734572",
    display: "+593 980 734 572",
  },
  address: {
    street: "Julio Berne y Juan Sebastián Bash, Picaigua",
    locality: "Ambato",
    region: "Tungurahua",
    country: "EC",
    countryName: "Ecuador",
    full: "Julio Berne y Juan Sebastián Bash, Picaigua, Ambato, Tungurahua, Ecuador",
  },
  social: {
    instagram: "https://www.instagram.com/nukay.sw/",
    tiktok: "https://www.tiktok.com/@nukay_sw",
    whatsapp: "https://wa.me/593980734572",
  },
} as const;
