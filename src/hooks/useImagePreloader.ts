
import { useEffect, useState } from 'react';
import { preloadImages } from '@/utils/imageUtils';

interface UseImagePreloaderOptions {
  enabled?: boolean;
  delay?: number;
  priority?: string[];
}

export const useImagePreloader = (
  images: string[], 
  options: UseImagePreloaderOptions = {}
) => {
  const { enabled = true, delay = 1000, priority = [] } = options;
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());
  const [isPreloading, setIsPreloading] = useState(false);

  useEffect(() => {
    if (!enabled || images.length === 0) return;

    const preloadWithPriority = async () => {
      setIsPreloading(true);
      
      try {
        // Primeiro, carrega as imagens prioritárias
        if (priority.length > 0) {
          const priorityImages = images.filter(img => priority.includes(img));
          await preloadImages(priorityImages);
          setPreloadedImages(new Set(priorityImages));
        }

        // Aguarda um pouco antes de carregar as demais
        if (delay > 0) {
          await new Promise(resolve => setTimeout(resolve, delay));
        }

        // Carrega as imagens restantes
        const remainingImages = images.filter(img => !priority.includes(img));
        await preloadImages(remainingImages);
        setPreloadedImages(new Set(images));
      } catch (error) {
        console.warn('Erro no preload das imagens:', error);
      } finally {
        setIsPreloading(false);
      }
    };

    // Inicia o preload apenas quando a página estiver idle
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(preloadWithPriority, { timeout: 3000 });
    } else {
      setTimeout(preloadWithPriority, delay);
    }
  }, [images, enabled, delay, priority]);

  return {
    preloadedImages,
    isPreloading,
    preloadProgress: preloadedImages.size / Math.max(images.length, 1)
  };
};
