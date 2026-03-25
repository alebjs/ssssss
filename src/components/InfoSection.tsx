import { MapPin, Phone, Clock } from 'lucide-react';
import { Lang, t } from '@/i18n';

export default function InfoSection({ lang }: { lang: Lang }) {
  const tr = t(lang).info;

  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <p className="ornament mb-4">{tr.ornament}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{tr.title}</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="text-primary" size={24} />
            </div>
            <p className="text-foreground font-medium text-sm">{tr.address}</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="text-primary" size={24} />
            </div>
            <p className="text-foreground font-medium text-sm">{tr.phone}</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="text-primary" size={24} />
            </div>
            <p className="text-foreground font-medium text-sm">{tr.hours}</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a
            href="https://maps.google.com/?q=Calle+de+la+Victoria+7+Madrid"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-sm border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all text-center"
          >
            📍 {tr.directions}
          </a>
          <a
            href="tel:+34910123456"
            className="px-6 py-3 rounded-sm bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all text-center"
          >
            📞 {tr.call}
          </a>
        </div>
      </div>
    </section>
  );
}
