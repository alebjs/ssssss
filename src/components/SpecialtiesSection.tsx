import { Lang, t } from '@/i18n';

import arrozBogavante from '@/assets/food-arroz-bogavante.jpg';
import raboToro from '@/assets/food-rabo-toro.jpg';
import paella from '@/assets/food-paella.jpg';
import gambones from '@/assets/food-gambones.jpg';
import pulpo from '@/assets/food-pulpo.jpg';
import chuleton from '@/assets/food-chuleton.jpg';
import croquetas from '@/assets/food-croquetas.jpg';
import tartaQueso from '@/assets/food-tarta-queso.jpg';

const images = [arrozBogavante, raboToro, paella, gambones, pulpo, chuleton, croquetas, tartaQueso];

export default function SpecialtiesSection({ lang }: { lang: Lang }) {
  const tr = t(lang).specialties;

  return (
    <section id="especialidades" className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <p className="ornament mb-4">{tr.ornament}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">{tr.title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tr.items.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-sm hover-lift cursor-pointer">
              <div className="aspect-square overflow-hidden">
                <img
                  src={images[i]}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width={640}
                  height={640}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent flex flex-col justify-end p-5">
                <h3 className="font-display text-xl font-bold text-cream">{item.name}</h3>
                <p className="text-cream/70 text-sm mt-1 line-clamp-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
