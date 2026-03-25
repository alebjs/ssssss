import heroBg from '@/assets/hero-bg.jpg';
import { Lang, t } from '@/i18n';

export default function HeroSection({ lang }: { lang: Lang }) {
  const tr = t(lang).hero;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Interior de Venta El Buscón con mesas llenas de tapas"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <p className="ornament mb-6 animate-fade-up">✦ ✦ ✦</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight animate-fade-up-delay-1">
          {tr.title}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-cream/80 font-body max-w-2xl mx-auto animate-fade-up-delay-2">
          {tr.subtitle}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
          <a
            href="#reservar"
            className="px-8 py-4 rounded-sm bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105"
          >
            {tr.cta1}
          </a>
          <a
            href="#carta"
            className="px-8 py-4 rounded-sm border-2 border-accent text-accent font-semibold text-lg hover:bg-accent/10 transition-all hover:scale-105"
          >
            {tr.cta2}
          </a>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-cream/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
