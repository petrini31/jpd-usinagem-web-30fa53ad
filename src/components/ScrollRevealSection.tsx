
import { useEffect, useRef, useState } from 'react';
import { useCustomImage } from '@/hooks/useCustomImage';

interface ScrollRevealSectionProps {
  image: string;
  imageId: string;
  title: string;
  subtitle?: string;
  description?: string;
}

const ScrollRevealSection = ({ image, imageId, title, subtitle, description }: ScrollRevealSectionProps) => {
  const customImage = useCustomImage(imageId, image);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !imageRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calcular o progresso do scroll quando a seção está visível
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;
      
      if (sectionTop < windowHeight && sectionBottom > 0) {
        // Calcular progresso de 0 a 1 baseado na posição da seção
        const visibleHeight = Math.min(windowHeight - sectionTop, sectionRect.height);
        const progress = Math.max(0, Math.min(1, visibleHeight / sectionRect.height));
        setScrollProgress(progress);
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

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll(); // Verificar posição inicial

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-[40vh] overflow-hidden">
      {/* Overlay com conteúdo */}
      {title && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl md:text-2xl mb-6 drop-shadow-md">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="text-lg drop-shadow-md max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Overlay escuro para melhor legibilidade */}
      <div className="absolute inset-0 bg-black/40 z-5"></div>

      {/* Imagem que se revela */}
      <div 
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out"
        style={{
          backgroundImage: `url(${customImage})`,
          transform: `translateX(${-100 + (scrollProgress * 100)}%)`,
        }}
      />

      {/* Placeholder para manter o espaço quando a imagem não está totalmente revelada */}
      <div className="absolute inset-0 bg-muted"></div>
    </section>
  );
};

export default ScrollRevealSection;
