
/**
 * Utilitário para otimização e conversão de imagens
 */

export interface ImageOptimizationOptions {
  quality?: number;
  width?: number;
  height?: number;
  format?: 'webp' | 'jpeg' | 'png';
  fallback?: string;
}

export class ImageOptimizer {
  private static canvas: HTMLCanvasElement | null = null;
  private static ctx: CanvasRenderingContext2D | null = null;

  private static getCanvas(): HTMLCanvasElement {
    if (!this.canvas) {
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
    }
    return this.canvas;
  }

  /**
   * Converte uma imagem para WebP
   */
  static async convertToWebP(
    imageUrl: string, 
    options: ImageOptimizationOptions = {}
  ): Promise<string> {
    const { quality = 0.8, width, height } = options;
    
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      img.onload = () => {
        const canvas = this.getCanvas();
        const ctx = this.ctx;
        
        if (!ctx) {
          reject(new Error('Canvas context não disponível'));
          return;
        }

        // Definir dimensões
        const targetWidth = width || img.width;
        const targetHeight = height || img.height;
        
        canvas.width = targetWidth;
        canvas.height = targetHeight;

        // Desenhar e converter
        ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
        
        // Converter para WebP
        const webpDataUrl = canvas.toDataURL('image/webp', quality);
        resolve(webpDataUrl);
      };
      
      img.onerror = () => reject(new Error('Erro ao carregar imagem'));
      img.src = imageUrl;
    });
  }

  /**
   * Gera URLs otimizadas para diferentes formatos
   */
  static getOptimizedUrls(originalUrl: string): {
    webp: string;
    fallback: string;
    srcSet: string;
  } {
    // Se já for uma URL do Supabase ou externa, retorna como está
    if (originalUrl.startsWith('http') || originalUrl.startsWith('data:')) {
      return {
        webp: originalUrl,
        fallback: originalUrl,
        srcSet: originalUrl
      };
    }

    // Para arquivos locais, gera versões otimizadas
    const basePath = originalUrl.replace(/\.[^/.]+$/, '');
    const extension = originalUrl.match(/\.[^/.]+$/)?.[0] || '.jpg';
    
    return {
      webp: `${basePath}.webp`,
      fallback: originalUrl,
      srcSet: `${basePath}.webp 1x, ${basePath}@2x.webp 2x`
    };
  }

  /**
   * Detecta suporte a WebP no navegador
   */
  static supportsWebP(): Promise<boolean> {
    return new Promise((resolve) => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        resolve(webP.height === 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
  }
}

export default ImageOptimizer;
