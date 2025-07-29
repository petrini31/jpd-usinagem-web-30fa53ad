
import { supabase } from "@/integrations/supabase/client";

// Mapeamento das imagens locais para o Supabase Storage
const IMAGE_MAPPING: Record<string, string> = {
  // Portfolio images
  "/lovable-uploads/2e86ffbf-edfb-42e6-abea-d053f935f05b.png": "portfolio/pneumatica-completa-atibaia.png",
  "/lovable-uploads/f370996c-dd23-4c78-b534-ce466c030a0b.png": "portfolio/usinagem-cnc-sao-paulo.png",
  "/lovable-uploads/39454b83-b7cf-4cbe-83d6-9609d65aa701.png": "portfolio/desenho-tecnico-braganca.png",
  "/lovable-uploads/9bc73a42-18ba-45e1-96b7-c2035acfb640.png": "portfolio/manutencao-industrial.png",
  "/lovable-uploads/5747a4c1-c343-4946-a329-d3e6c45e6be9.png": "portfolio/ferramentais-dispositivos.png",
  "/lovable-uploads/7de9727d-b15c-4acd-a2b3-8bc626ea3949.png": "portfolio/moldes-injecao.png",
  "/lovable-uploads/7487f020-2969-4fea-93cc-7232587c319e.png": "portfolio/usinagem-cnc-precisao.png",
  "/lovable-uploads/77db13a0-f3ab-40f1-ad6e-d00c2a3ca32b.png": "portfolio/cilindros-pneumaticos-customizados.png",
  "/lovable-uploads/4d1166a1-566a-4f33-a6fb-05a628da0ceb.png": "portfolio/torneamento-precisao.png",
  "/lovable-uploads/79615b86-054f-4f10-90ae-9bb561911010.png": "portfolio/fresamento-industrial.png",
  "/lovable-uploads/3b518978-4d9c-4d5b-bcf8-4485bc695d1b.png": "portfolio/componentes-alta-qualidade.png",
  "/lovable-uploads/aec5fa4d-81c6-4c81-938b-e57e9900c236.png": "portfolio/pecas-usinadas-especiais.png",

  // Market Sectors images
  "/lovable-uploads/c389b1c3-66fe-4964-8cf6-c6b4966a9e60.png": "sectors/automotiva.png",
  "/lovable-uploads/28087462-bab2-42aa-9639-f40509fec923.png": "sectors/injecao-plastica.png",
  "/lovable-uploads/dec3d1a6-b3e5-42f1-b536-d50f5322c31c.png": "sectors/farmaceutica.png",
  "/lovable-uploads/407e4db0-5aff-4ff1-a425-6473a2ccc334.png": "sectors/agricola.png",
  "/lovable-uploads/e95a555a-a0a9-47b3-914e-3462320aeffb.png": "sectors/automacao-robotica.png",
  "/lovable-uploads/248ec544-caa9-4ba0-8c08-898392a2d8d2.png": "sectors/alimenticia.png",
  "/lovable-uploads/fe2271b0-1ea4-40c5-a9db-7fdb22004661.png": "sectors/petroleo-gas.png",
  "/lovable-uploads/9dd0ff85-d042-4379-b43c-18bfe0d638de.png": "sectors/aeroespacial.png",
  "/lovable-uploads/6666ef25-8040-4754-8cb3-579bee47ea4e.png": "sectors/medica-odontologica.png",
  "/lovable-uploads/a8d9cbcf-ad1f-41fa-830c-c7b9fcdbed75.png": "sectors/eletronica-telecomunicacoes.png",
  "/lovable-uploads/e01fa817-6092-4fbb-8bfe-773092e4abac.png": "sectors/geotecnica.png",

  // Pneumatic images
  "/lovable-uploads/35e6299d-9a61-4325-acb4-7152297159c9.png": "pneumatic/cilindro-pneumatico-precisao.png",
  "/lovable-uploads/a029f8f6-79e0-4060-9302-8e14e10ecbf0.png": "pneumatic/sistema-pneumatico-industrial.png",
  "/lovable-uploads/dca69ce5-79d3-4cdd-a1de-6e4a0344daa7.png": "pneumatic/componentes-pneumaticos.png",
  "/lovable-uploads/5a5b397a-73d5-43f2-b1c5-299b8039b70a.png": "pneumatic/cilindro-pneumatico-personalizado.png"
};

/**
 * Gera URL otimizada para imagens do Supabase Storage
 */
export const getOptimizedImageUrl = (
  originalPath: string, 
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'avif' | 'original';
  } = {}
): string => {
  // Se a imagem já está mapeada, usa o Supabase Storage
  const storagePath = IMAGE_MAPPING[originalPath];
  
  if (storagePath) {
    const { data } = supabase.storage
      .from('site-images')
      .getPublicUrl(storagePath);
    
    // Adiciona parâmetros de otimização se suportado
    const url = new URL(data.publicUrl);
    
    if (options.width) url.searchParams.set('width', options.width.toString());
    if (options.height) url.searchParams.set('height', options.height.toString());
    if (options.quality) url.searchParams.set('quality', options.quality.toString());
    if (options.format && options.format !== 'original') {
      url.searchParams.set('format', options.format);
    }
    
    return url.toString();
  }
  
  // Fallback para imagens locais
  return originalPath;
};

/**
 * Gera múltiplas versões da imagem para diferentes dispositivos
 */
export const getResponsiveImageUrls = (originalPath: string) => {
  return {
    mobile: getOptimizedImageUrl(originalPath, { width: 400, quality: 80, format: 'webp' }),
    tablet: getOptimizedImageUrl(originalPath, { width: 768, quality: 85, format: 'webp' }),
    desktop: getOptimizedImageUrl(originalPath, { width: 1200, quality: 90, format: 'webp' }),
    original: getOptimizedImageUrl(originalPath)
  };
};

/**
 * Hook para precarregar imagens críticas
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Hook para precarregar múltiplas imagens
 */
export const preloadImages = async (sources: string[]): Promise<void> => {
  try {
    await Promise.all(sources.map(preloadImage));
  } catch (error) {
    console.warn('Erro ao precarregar imagens:', error);
  }
};
