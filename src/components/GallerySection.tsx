import { Lang, t } from '@/i18n';
import galleryBar from '@/assets/gallery-bar.jpg';
import galleryDining from '@/assets/gallery-dining.jpg';
import galleryTapas from '@/assets/gallery-tapas.jpg';
import galleryExterior from '@/assets/gallery-exterior.jpg';
import foodPaella from '@/assets/food-paella.jpg';
import foodChuleton from '@/assets/food-chuleton.jpg';

const images = [
  { src: galleryBar, alt: 'Barra del restaurante' },
  { src: galleryDining, alt: 'Salón comedor lleno' },
  { src: galleryTapas, alt: 'Variedad de tapas' },
  { src: galleryExterior, alt: 'Fachada exterior' },
  { src: foodPaella, alt: 'Paella marinera' },
  { src: foodChuleton, alt: 'Chuletón a la brasa' },
];

export default function GallerySection({ lang }: { lang: Lang }) {
  const tr = t(lang).gallery;

  return (
    <section id="galeria" className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <p className="ornament mb-4">{tr.ornament}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">{tr.title}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-sm cursor-pointer ${
                i === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                width={640}
                height={640}
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-cream font-display text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
