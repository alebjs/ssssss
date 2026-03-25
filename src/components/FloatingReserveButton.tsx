import { useState, useEffect } from 'react';
import { CalendarDays } from 'lucide-react';
import { Lang, t } from '@/i18n';

export default function FloatingReserveButton({ lang }: { lang: Lang }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <a
      href="#reservar"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:scale-105 transition-all animate-fade-up"
      style={{ boxShadow: 'var(--shadow-elevated)' }}
    >
      <CalendarDays size={18} />
      <span className="hidden sm:inline">{t(lang).nav.reserve}</span>
    </a>
  );
}
