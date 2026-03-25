import { Instagram, Facebook } from 'lucide-react';
import { Lang, t } from '@/i18n';

export default function Footer({ lang }: { lang: Lang }) {
  const tr = t(lang);

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4 sm:px-6">
      <div className="container-narrow">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-cream mb-3">Venta El Buscón</h3>
            <p className="text-sm text-secondary-foreground/70 italic font-display">
              "La vida del buscón llamado don Pablos"
            </p>
          </div>
          <div className="text-sm text-secondary-foreground/70 space-y-1">
            <p>{tr.info.address}</p>
            <p>{tr.info.phone}</p>
            <p>{tr.info.hours}</p>
          </div>
          <div className="flex sm:justify-end items-start gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors">
              <Instagram size={18} className="text-cream" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors">
              <Facebook size={18} className="text-cream" />
            </a>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/20 pt-6 text-center">
          <p className="text-xs text-secondary-foreground/50">{tr.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
