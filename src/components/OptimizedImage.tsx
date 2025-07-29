
import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { getOptimizedImageUrl, getResponsiveImageUrls } from '@/utils/imageUtils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  aspectRatio?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  aspectRatio = 'aspect-[4/3]',
  priority = false,
  quality = 85,
  sizes = '(max-width: 640px) 400px, (max-width: 768px) 768px, 1200px'
}: OptimizedImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');

  useEffect(() => {
    // Gera URLs otimizadas para diferentes dispositivos
    const responsiveUrls = getResponsiveImageUrls(src);
    
    // Determina qual URL usar baseado no tamanho da tela
    const getAppropriateUrl = () => {
      if (typeof window === 'undefined') return responsiveUrls.desktop;
      
      const width = window.innerWidth;
      if (width <= 640) return responsiveUrls.mobile;
      if (width <= 768) return responsiveUrls.tablet;
      return responsiveUrls.desktop;
    };

    const optimizedSrc = priority 
      ? getOptimizedImageUrl(src, { quality: 95, format: 'webp' })
      : getAppropriateUrl();
    
    setCurrentSrc(optimizedSrc);
  }, [src, priority]);

  const handleLoad = () => {
    setImageLoaded(true);
  };

  const handleError = () => {
    // Fallback para imagem original em caso de erro
    const fallbackSrc = getOptimizedImageUrl(src, { format: 'original' });
    if (currentSrc !== fallbackSrc && currentSrc !== src) {
      setCurrentSrc(src); // Última tentativa com a URL original
    } else {
      setImageError(true);
      setImageLoaded(true);
    }
  };

  // Precarrega imagem se for prioridade
  useEffect(() => {
    if (priority && currentSrc) {
      const img = new Image();
      img.src = currentSrc;
    }
  }, [priority, currentSrc]);

  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${className}`}>
      {!imageLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full animate-pulse" />
      )}
      
      {imageError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="text-center text-muted-foreground">
            <div className="w-8 h-8 mx-auto mb-2 opacity-50">⚠️</div>
            <p className="text-sm">Imagem indisponível</p>
          </div>
        </div>
      ) : (
        <picture>
          {/* WebP source para navegadores compatíveis */}
          <source 
            srcSet={`
              ${getOptimizedImageUrl(src, { width: 400, quality, format: 'webp' })} 400w,
              ${getOptimizedImageUrl(src, { width: 768, quality, format: 'webp' })} 768w,
              ${getOptimizedImageUrl(src, { width: 1200, quality, format: 'webp' })} 1200w
            `}
            sizes={sizes}
            type="image/webp"
          />
          
          {/* Fallback para imagem original */}
          <img
            src={currentSrc}
            alt={alt}
            loading={priority ? 'eager' : loading}
            onLoad={handleLoad}
            onError={handleError}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            sizes={sizes}
            style={{ 
              transition: 'opacity 0.5s ease-in-out',
              willChange: imageLoaded ? 'auto' : 'opacity'
            }}
          />
        </picture>
      )}
      
      {/* Overlay de loading sutil */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gradient-to-r from-muted/20 to-muted/10 animate-pulse" />
      )}
    </div>
  );
};

export default OptimizedImage;
