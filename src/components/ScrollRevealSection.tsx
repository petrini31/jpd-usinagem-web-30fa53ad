import { useEffect, useRef, useState } from 'react';
interface ScrollRevealSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
}
const ScrollRevealSection = ({
  image,
  title,
  subtitle,
  description
}: ScrollRevealSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calcular o progresso do scroll quando a seção está visível
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;

      // A seção está visível na tela
      if (sectionTop < windowHeight && sectionBottom > 0) {
        // Calcular progresso mais suave
        const sectionCenter = sectionTop + sectionRect.height / 2;
        const screenCenter = windowHeight / 2;
        const distance = Math.abs(sectionCenter - screenCenter);
        const maxDistance = windowHeight / 2 + sectionRect.height / 2;

        // Inverter o progresso - quanto mais próximo do centro, maior o progresso
        const progress = Math.max(0, Math.min(1, 1 - distance / maxDistance));
        setScrollProgress(progress);
      } else if (sectionTop >= windowHeight) {
        // Seção ainda não entrou na tela
        setScrollProgress(0);
      } else if (sectionBottom <= 0) {
        // Seção já passou da tela
        setScrollProgress(1);
      }
    };

    // Usar throttle para melhorar performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', throttledHandleScroll, {
      passive: true
    });
    handleScroll(); // Verificar posição inicial

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  // Garantir que sempre temos uma imagem
  const imageUrl = image || 'https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&q=80&w=1600&h=600';
  return;
};
export default ScrollRevealSection;