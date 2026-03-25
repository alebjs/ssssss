import { useState } from 'react';
import { Lang } from '@/i18n';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import MenuSection from '@/components/MenuSection';
import ReviewsSection from '@/components/ReviewsSection';
import GallerySection from '@/components/GallerySection';
import InfoSection from '@/components/InfoSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import FloatingReserveButton from '@/components/FloatingReserveButton';

export default function Index() {
  const [lang, setLang] = useState<Lang>('es');
  const toggleLang = () => setLang((l) => (l === 'es' ? 'en' : 'es'));

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} onToggleLang={toggleLang} />
      <HeroSection lang={lang} />
      <ExperienceSection lang={lang} />
      <SpecialtiesSection lang={lang} />
      <MenuSection lang={lang} />
      <ReviewsSection lang={lang} />
      <GallerySection lang={lang} />
      <InfoSection lang={lang} />
      <CTASection lang={lang} />
      <Footer lang={lang} />
      <FloatingReserveButton lang={lang} />
    </div>
  );
}
