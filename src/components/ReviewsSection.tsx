import { Star } from 'lucide-react';
import { Lang, t } from '@/i18n';

export default function ReviewsSection({ lang }: { lang: Lang }) {
  const tr = t(lang).reviews;

  return (
    <section id="opiniones" className="section-padding bg-card">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <p className="ornament mb-4">{tr.ornament}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{tr.title}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tr.items.map((review, i) => (
            <div key={i} className="bg-background rounded-sm p-6 hover-lift" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{review.text}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{review.author}</p>
                <p className="text-xs text-muted-foreground">{review.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
