import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram } from "lucide-react";
import { withBase } from "@/lib/utils";
import { company } from "@/lib/company";
import { TikTokIcon } from "@/components/icons/TikTokIcon";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Nosotros", href: withBase("/sobre-nosotros") },
    { label: "Servicios", href: withBase("/servicios") },
    { label: "Contacto", href: withBase("/#contacto") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container grid grid-cols-2 md:grid-cols-3 items-center h-16 gap-4">
        {/* Logo */}
        <a href={withBase("/")} className="flex items-center space-x shrink-0" aria-label="Nukay — Inicio">
          <div className="flex items-center justify-center w-7 h-8 rounded-lg overflow-hidden shrink-0" aria-hidden="true">
            <img src={withBase("/nukay-mark.png")} alt="" className="w-full h-full object-cover" />
          </div>
          <span aria-hidden="true" className="font-bold text-xl bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
            ukay
          </span>
        </a>

        {/* Desktop Navigation — centrada */}
        <div className="hidden md:flex items-center justify-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 md:gap-4">
          {/* Redes sociales */}
          <div className="hidden lg:flex items-center gap-3">
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

          {/* CTA desktop */}
          <Button className="hidden md:inline-flex" size="sm" asChild>
            <a href={withBase("/#contacto")}>Contáctanos</a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
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
            <Button className="w-full" asChild>
              <a href={withBase("/#contacto")} onClick={() => setIsMenuOpen(false)}>Contáctanos</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
