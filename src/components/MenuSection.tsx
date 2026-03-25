import { useState } from 'react';
import { Lang, t } from '@/i18n';

export default function MenuSection({ lang }: { lang: Lang }) {
  const tr = t(lang).menuSection;
  const cats = tr.categories;
  const catKeys = Object.keys(cats) as (keyof typeof cats)[];
  const [active, setActive] = useState(catKeys[0]);

  return (
    <section id="carta" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <p className="ornament mb-4">{tr.ornament}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{tr.title}</h2>
        </div>

        {/* Menu del día highlight */}
        <div className="bg-card border border-accent/30 rounded-sm p-6 mb-10 text-center">
          <h3 className="font-display text-xl font-bold text-accent">{tr.menuDay}</h3>
          <p className="text-muted-foreground mt-1">{tr.menuDayDesc}</p>
          <p className="text-sm text-muted-foreground mt-2">{tr.glutenFree}</p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {catKeys.map((k) => (
            <button
              key={k}
              onClick={() => setActive(k)}
              className={`px-4 py-2 rounded-sm text-sm font-medium transition-all ${
                active === k
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-muted-foreground hover:bg-muted'
              }`}
            >
              {cats[k].title}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="max-w-2xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">{cats[active].title}</h3>
          <ul className="space-y-3">
            {cats[active].items.map((item, i) => {
              const parts = item.split(' — ');
              return (
                <li key={i} className="flex justify-between items-baseline border-b border-border/50 pb-3">
                  <span className="text-foreground font-medium">{parts[0]}</span>
                  <span className="text-accent font-display font-bold ml-4 whitespace-nowrap">{parts[1]}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
