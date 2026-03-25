import experienceImg from '@/assets/experience.jpg';
import { Lang, t } from '@/i18n';

export default function ExperienceSection({ lang }: { lang: Lang }) {
  const tr = t(lang).experience;

  return (
    <section id="experiencia" className="section-padding bg-card">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative group overflow-hidden rounded-sm">
            <img
              src={experienceImg}
              alt="Barra tradicional de taberna madrileña"
              className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={800}
              height={1000}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
          </div>
          <div>
            <p className="ornament mb-4">{tr.ornament}</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {tr.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{tr.p1}</p>
            <p className="text-muted-foreground leading-relaxed mb-8">{tr.p2}</p>
            <blockquote className="border-l-4 border-accent pl-4 italic font-display text-lg text-foreground/80">
              {tr.quote}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
