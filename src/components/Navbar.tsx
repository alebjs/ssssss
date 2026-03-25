import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Lang, t } from '@/i18n';

interface NavbarProps {
  lang: Lang;
  onToggleLang: () => void;
}

export default function Navbar({ lang, onToggleLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const tr = t(lang).nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#experiencia', label: tr.experience },
    { href: '#especialidades', label: tr.specialties },
    { href: '#carta', label: tr.menu },
    { href: '#opiniones', label: tr.reviews },
    { href: '#galeria', label: tr.gallery },
    { href: '#contacto', label: tr.contact },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-secondary/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
        <a href="#" className="font-display text-xl md:text-2xl font-bold text-primary-foreground tracking-wide">
          Venta El Buscón
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={onToggleLang}
            className="text-xs font-semibold border border-accent/40 text-accent px-3 py-1 rounded-sm hover:bg-accent/10 transition-colors"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <a
            href="#reservar"
            className="text-sm font-semibold px-5 py-2 rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {tr.reserve}
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-secondary/95 backdrop-blur-md border-t border-accent/20 animate-fade-up">
          <div className="flex flex-col gap-2 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-primary-foreground/80 hover:text-accent py-2 transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onToggleLang}
                className="text-xs font-semibold border border-accent/40 text-accent px-3 py-1 rounded-sm"
              >
                {lang === 'es' ? 'EN' : 'ES'}
              </button>
              <a
                href="#reservar"
                className="text-sm font-semibold px-5 py-2 rounded-sm bg-primary text-primary-foreground"
                onClick={() => setOpen(false)}
              >
                {tr.reserve}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
