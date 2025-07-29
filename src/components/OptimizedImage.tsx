
import { useState } from 'react';
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
        <img
          src={src}
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
