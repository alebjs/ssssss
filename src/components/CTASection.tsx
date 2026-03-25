import { Lang, t } from '@/i18n';

export default function CTASection({ lang }: { lang: Lang }) {
  const tr = t(lang).cta;

  return (
    <section id="reservar" className="relative py-20 md:py-28 overflow-hidden" style={{ background: 'var(--gradient-wine)' }}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23C9A15C\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6">
        <p className="ornament mb-6">✦ ✦ ✦</p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream max-w-3xl mx-auto leading-tight">
          {tr.title}
        </h2>
        <a
          href="tel:+34910123456"
          className="inline-block mt-10 px-10 py-4 rounded-sm bg-accent text-accent-foreground font-bold text-lg hover:scale-105 transition-transform"
        >
          👉 {tr.button}
        </a>
      </div>
    </section>
  );
}
