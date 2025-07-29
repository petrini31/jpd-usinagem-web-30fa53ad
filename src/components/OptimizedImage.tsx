
import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import ImageOptimizer from '@/utils/imageOptimization';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  aspectRatio?: string;
  priority?: boolean;
  quality?: number;
  width?: number;
  height?: number;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  aspectRatio = 'aspect-[4/3]',
  priority = false,
  quality = 0.85,
  width,
  height
}: OptimizedImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [supportsWebP, setSupportsWebP] = useState<boolean | null>(null);
  const [optimizedSrc, setOptimizedSrc] = useState(src);

  // Detectar suporte a WebP
  useEffect(() => {
    ImageOptimizer.supportsWebP().then(setSupportsWebP);
  }, []);

  // Otimizar imagem quando WebP for suportado
  useEffect(() => {
    if (supportsWebP === null) return;

    const optimizeImage = async () => {
      if (supportsWebP && !src.includes('.webp') && !src.startsWith('data:')) {
        try {
          const webpUrl = await ImageOptimizer.convertToWebP(src, {
            quality,
            width,
            height,
            format: 'webp'
          });
          setOptimizedSrc(webpUrl);
        } catch (error) {
          console.warn('Erro na conversão para WebP:', error);
          setOptimizedSrc(src); // Fallback para imagem original
        }
      } else {
        setOptimizedSrc(src);
      }
    };

    optimizeImage();
  }, [src, supportsWebP, quality, width, height]);

  const handleLoad = () => {
    setImageLoaded(true);
  };

  const handleError = () => {
    setImageError(true);
    setImageLoaded(true);
    // Tentar com imagem original se WebP falhar
    if (optimizedSrc !== src) {
      setOptimizedSrc(src);
      setImageError(false);
      setImageLoaded(false);
    }
  };

  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${className}`}>
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
      ) : (
        <picture>
          {/* WebP source se suportado */}
          {supportsWebP && optimizedSrc.includes('webp') && (
            <source srcSet={optimizedSrc} type="image/webp" />
          )}
          
          {/* Fallback para outros formatos */}
          <img
            src={optimizedSrc}
            alt={alt}
            loading={priority ? 'eager' : loading}
            onLoad={handleLoad}
            onError={handleError}
            width={width}
            height={height}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              transition: 'opacity 0.3s ease-in-out',
              willChange: imageLoaded ? 'auto' : 'opacity'
            }}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;
