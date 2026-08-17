import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { withBase } from "@/lib/utils";
import { company } from "@/lib/company";
import { services } from "@/lib/services";
import { TikTokIcon } from "@/components/icons/TikTokIcon";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <a href={withBase("/")} className="flex items-center space-x" aria-label="Nukay — Inicio">
              <div className="flex items-center justify-center w-7 h-8 rounded-lg overflow-hidden" aria-hidden="true">
                <img src={withBase("/nukay-mark.png")} alt="" className="w-full h-full object-cover" />
              </div>
              <span aria-hidden="true" className="font-bold text-xl bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
                ukay
              </span>
            </a>
            <p className="text-sm text-muted-foreground">
              {company.tagline}
            </p>
            <div className="flex gap-3">
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nukay en Instagram"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={company.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nukay en TikTok"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a
                href={company.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Escríbenos por WhatsApp"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-semibold mb-4">Nukay</h3>
            <ul className="space-y-3">
              <li>
                <a href={withBase("/sobre-nosotros")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href={withBase("/servicios")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href={withBase("/#contacto")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <a
                    href={withBase(`/servicios/${service.slug}`)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto + Legal */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <a href={`mailto:${company.email}`} className="hover:text-foreground transition-colors break-all">
                    {company.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <a href={`tel:${company.phone.e164}`} className="hover:text-foreground transition-colors">
                    {company.phone.display}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>{company.address.full}</span>
                </li>
              </ul>
            </div>
            <ul className="space-y-3">
              <li>
                <a href={withBase("/privacy")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href={withBase("/terms")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Términos de Servicio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Nukay. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Naranjo Vaca Danny Fabricio
          </p>
        </div>
      </div>
    </footer>
  );
}
