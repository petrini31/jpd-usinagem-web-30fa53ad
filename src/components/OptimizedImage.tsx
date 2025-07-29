
import { useState, useRef, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  aspectRatio?: string;
  priority?: boolean;
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
  width,
  height
}: OptimizedImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (priority || shouldLoad) return;

    // Intersection Observer for lazy loading
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observerRef.current?.disconnect();
          }
        });
      },
      {
        rootMargin: '100px' // Start loading 100px before entering viewport
      }
    );

    const currentRef = imgRef.current?.parentElement;
    if (currentRef) {
      observerRef.current.observe(currentRef);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [priority, shouldLoad]);

  const handleLoad = () => {
    setImageLoaded(true);
  };

  const handleError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

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
      ) : shouldLoad ? (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={handleLoad}
          onError={handleError}
          width={width}
          height={height}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            transition: 'opacity 0.5s ease-in-out',
            willChange: imageLoaded ? 'auto' : 'opacity',
            // Optimize for faster decoding
            imageRendering: 'auto',
          }}
          decoding="async"
        />
      ) : null}
    </div>
  );
};

export default OptimizedImage;
