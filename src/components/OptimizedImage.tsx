
import { useState, useRef, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  aspectRatio?: string;
  priority?: boolean;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  aspectRatio = 'aspect-[4/3]',
  priority = false
}: OptimizedImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Função para detectar suporte a WebP
  const supportsWebP = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  };

  // Função para gerar URLs otimizadas
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.includes('lovable-uploads') && originalSrc.endsWith('.png')) {
      const baseUrl = originalSrc.replace('.png', '');
      if (supportsWebP()) {
        return `${baseUrl}.webp`;
      }
    }
    return originalSrc;
  };

  // Intersection Observer para lazy loading inteligente
  useEffect(() => {
    if (priority || shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px', // Carrega quando está 50px antes de aparecer
        threshold: 0.1
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, shouldLoad]);

  const handleLoad = () => {
    setImageLoaded(true);
  };

  const handleError = () => {
    // Se falhar com WebP, tenta PNG original
    if (imgRef.current && imgRef.current.src.includes('.webp')) {
      imgRef.current.src = src; // Volta para a imagem original
    } else {
      setImageError(true);
      setImageLoaded(true);
    }
  };

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${aspectRatio} ${className}`}>
      {!imageLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      
      {imageError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="text-center text-muted-foreground">
            <div className="w-8 h-8 mx-auto mb-2 opacity-50">⚠️</div>
            <p className="text-sm">Imagem indisponível</p>
          </div>
        </div>
      ) : shouldLoad && (
        <img
          ref={imgRef}
          src={getOptimizedSrc(src)}
          alt={alt}
          loading={priority ? 'eager' : loading}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            transition: 'opacity 0.3s ease-in-out',
            willChange: imageLoaded ? 'auto' : 'opacity'
          }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
