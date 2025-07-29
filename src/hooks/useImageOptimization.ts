
import { useState, useEffect } from 'react';
import ImageOptimizer from '@/utils/imageOptimization';

interface UseImageOptimizationOptions {
  quality?: number;
  width?: number;
  height?: number;
  eager?: boolean;
}

export const useImageOptimization = (
  src: string,
  options: UseImageOptimizationOptions = {}
) => {
  const [optimizedSrc, setOptimizedSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [supportsWebP, setSupportsWebP] = useState<boolean | null>(null);

  // Detectar suporte WebP
  useEffect(() => {
    ImageOptimizer.supportsWebP().then(setSupportsWebP);
  }, []);

  // Otimizar imagem
  useEffect(() => {
    if (supportsWebP === null || (!options.eager && !src)) return;

    const optimizeImage = async () => {
      if (!supportsWebP || src.includes('.webp') || src.startsWith('data:')) {
        setOptimizedSrc(src);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const webpSrc = await ImageOptimizer.convertToWebP(src, {
          quality: options.quality || 0.85,
          width: options.width,
          height: options.height,
          format: 'webp'
        });
        
        setOptimizedSrc(webpSrc);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erro na otimização'));
        setOptimizedSrc(src); // Fallback
      } finally {
        setIsLoading(false);
      }
    };

    optimizeImage();
  }, [src, supportsWebP, options.quality, options.width, options.height, options.eager]);

  return {
    optimizedSrc,
    isLoading,
    error,
    supportsWebP
  };
};

export default useImageOptimization;
