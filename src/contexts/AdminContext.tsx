import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ImageConfig {
  id: string;
  section: string;
  currentUrl: string;
  customUrl?: string;
  title: string;
}

interface AdminContextType {
  images: ImageConfig[];
  updateImage: (id: string, customUrl: string) => void;
  resetImage: (id: string) => void;
  resetAllImages: () => void;
  getImageUrl: (id: string) => string;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const DEFAULT_IMAGES: ImageConfig[] = [
  // Hero Section
  {
    id: 'hero-main',
    section: 'Hero',
    currentUrl: '/src/assets/hero-cnc-industrial.jpg',
    title: 'Imagem Principal do Hero'
  },
  
  // Serviços (9 imagens)
  {
    id: 'service-1',
    section: 'Serviços',
    currentUrl: '/src/assets/precision-parts.jpg',
    title: 'Usinagem CNC de Precisão'
  },
  {
    id: 'service-2',
    section: 'Serviços',
    currentUrl: '/src/assets/manufacturing-process.jpg',
    title: 'Desenhos Industriais Personalizados'
  },
  {
    id: 'service-3',
    section: 'Serviços',
    currentUrl: '/src/assets/quality-components.jpg',
    title: 'Fabricação de Cilindros Pneumáticos'
  },
  {
    id: 'service-4',
    section: 'Serviços',
    currentUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Torneamento'
  },
  {
    id: 'service-5',
    section: 'Serviços',
    currentUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Fresamento'
  },
  {
    id: 'service-6',
    section: 'Serviços',
    currentUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Manutenção e Recuperação de Peças'
  },
  {
    id: 'service-7',
    section: 'Serviços',
    currentUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Fabricação de Ferramentais e Dispositivos'
  },
  {
    id: 'service-8',
    section: 'Serviços',
    currentUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Especialistas em Moldes'
  },
  {
    id: 'service-9',
    section: 'Serviços',
    currentUrl: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Retificação de Precisão'
  },

  // Scroll Reveal - Precisão em Cada Detalhe
  {
    id: 'scroll-reveal-precision',
    section: 'Scroll Reveal',
    currentUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200&h=600',
    title: 'Precisão em Cada Detalhe'
  },

  // Principais Atuações no Mercado (12 fotos)
  {
    id: 'market-1',
    section: 'Atuações no Mercado',
    currentUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Indústria Automotiva'
  },
  {
    id: 'market-2',
    section: 'Atuações no Mercado',
    currentUrl: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Indústria Aeroespacial e Aeronáutica'
  },
  {
    id: 'market-3',
    section: 'Atuações no Mercado',
    currentUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Indústria Farmacêutica'
  },
  {
    id: 'market-4',
    section: 'Atuações no Mercado',
    currentUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Indústria de Máquinas e Equipamentos'
  },
  {
    id: 'market-5',
    section: 'Atuações no Mercado',
    currentUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Indústria de Petróleo e Gás'
  },
  {
    id: 'market-6',
    section: 'Atuações no Mercado',
    currentUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Indústria Médica e Odontológica'
  },
  {
    id: 'market-7',
    section: 'Atuações no Mercado',
    currentUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Indústria de Energia'
  },
  {
    id: 'market-8',
    section: 'Atuações no Mercado',
    currentUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Indústria Geotécnica'
  },
  {
    id: 'market-9',
    section: 'Atuações no Mercado',
    currentUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Indústria Eletrônica e de Telecomunicações'
  },
  {
    id: 'market-10',
    section: 'Atuações no Mercado',
    currentUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Indústria Ferroviária'
  },
  {
    id: 'market-11',
    section: 'Atuações no Mercado',
    currentUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Indústria de Automação Industrial e Robótica'
  },
  {
    id: 'market-12',
    section: 'Atuações no Mercado',
    currentUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Indústria Alimentícia'
  },

  // Portfolio (15 fotos)
  {
    id: 'portfolio-1',
    section: 'Portfólio',
    currentUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Usinagem CNC de Precisão'
  },
  {
    id: 'portfolio-2',
    section: 'Portfólio',
    currentUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Cilindros Pneumáticos'
  },
  {
    id: 'portfolio-3',
    section: 'Portfólio',
    currentUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Ferramentaria'
  },
  {
    id: 'portfolio-4',
    section: 'Portfólio',
    currentUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Moldes de Precisão'
  },
  {
    id: 'portfolio-5',
    section: 'Portfólio',
    currentUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Componentes Automotivos'
  },
  {
    id: 'portfolio-6',
    section: 'Portfólio',
    currentUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Peças Industriais'
  },
  {
    id: 'portfolio-7',
    section: 'Portfólio',
    currentUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Torneamento CNC'
  },
  {
    id: 'portfolio-8',
    section: 'Portfólio',
    currentUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Fresamento de Precisão'
  },
  {
    id: 'portfolio-9',
    section: 'Portfólio',
    currentUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Retificação'
  },
  {
    id: 'portfolio-10',
    section: 'Portfólio',
    currentUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Dispositivos Especiais'
  },
  {
    id: 'portfolio-11',
    section: 'Portfólio',
    currentUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Engrenagens'
  },
  {
    id: 'portfolio-12',
    section: 'Portfólio',
    currentUrl: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Componentes Hidráulicos'
  },
  {
    id: 'portfolio-13',
    section: 'Portfólio',
    currentUrl: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Peças Aeroespaciais'
  },
  {
    id: 'portfolio-14',
    section: 'Portfólio',
    currentUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Equipamentos Médicos'
  },
  {
    id: 'portfolio-15',
    section: 'Portfólio',
    currentUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Protótipos Funcionais'
  },

  // Scroll Reveal - Inovação e Qualidade
  {
    id: 'scroll-reveal-innovation',
    section: 'Scroll Reveal',
    currentUrl: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&q=80&w=1200&h=600',
    title: 'Inovação e Qualidade'
  },

  // Soluções Pneumáticas (3 fotos)
  {
    id: 'pneumatic-1',
    section: 'Soluções Pneumáticas',
    currentUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Cilindros Pneumáticos'
  },
  {
    id: 'pneumatic-2',
    section: 'Soluções Pneumáticas',
    currentUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Sistemas de Automação'
  },
  {
    id: 'pneumatic-3',
    section: 'Soluções Pneumáticas',
    currentUrl: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&q=80&w=600&h=400',
    title: 'Equipamentos Pneumáticos'
  },

  // Sobre a JPD Usinagem CNC
  {
    id: 'company-about',
    section: 'Empresa',
    currentUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=500',
    title: 'Sobre a JPD Usinagem CNC'
  },

  // Pneumática Full - Vídeo
  {
    id: 'pneumatic-video',
    section: 'Pneumática Full',
    currentUrl: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&q=80&w=320&h=568',
    title: 'Vídeo - Cilindros Pneumáticos de Alta Performance'
  },

  // Pneumática Full - Galeria de Cilindros (6 fotos PNG)
  {
    id: 'pneumatic-gallery-1',
    section: 'Pneumática Full',
    currentUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400&h=300',
    title: 'Cilindro Pneumático 1'
  },
  {
    id: 'pneumatic-gallery-2',
    section: 'Pneumática Full',
    currentUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=400&h=300',
    title: 'Cilindro Pneumático 2'
  },
  {
    id: 'pneumatic-gallery-3',
    section: 'Pneumática Full',
    currentUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=400&h=300',
    title: 'Cilindro Pneumático 3'
  },
  {
    id: 'pneumatic-gallery-4',
    section: 'Pneumática Full',
    currentUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=400&h=300',
    title: 'Cilindro Pneumático 4'
  },
  {
    id: 'pneumatic-gallery-5',
    section: 'Pneumática Full',
    currentUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400&h=300',
    title: 'Cilindro Pneumático 5'
  },
  {
    id: 'pneumatic-gallery-6',
    section: 'Pneumática Full',
    currentUrl: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&q=80&w=400&h=300',
    title: 'Cilindro Pneumático 6'
  },

  // Pneumática Full - Especificações Técnicas (3 fotos)
  {
    id: 'pneumatic-specs-1',
    section: 'Pneumática Full',
    currentUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400&h=300',
    title: 'Especificação Técnica 1'
  },
  {
    id: 'pneumatic-specs-2',
    section: 'Pneumática Full',
    currentUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=400&h=300',
    title: 'Especificação Técnica 2'
  },
  {
    id: 'pneumatic-specs-3',
    section: 'Pneumática Full',
    currentUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=400&h=300',
    title: 'Especificação Técnica 3'
  },

  // Portfolio Full - Todas as imagens com títulos e descrições editáveis
  {
    id: 'portfolio-full-1',
    section: 'Portfolio Full',
    currentUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=400&h=300',
    title: 'Peça CNC Complexa'
  },
  {
    id: 'portfolio-full-2',
    section: 'Portfolio Full',
    currentUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=400&h=300',
    title: 'Sistema Pneumático'
  },
  {
    id: 'portfolio-full-3',
    section: 'Portfolio Full',
    currentUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400&h=300',
    title: 'Ferramental Industrial'
  },

  // Materiais do Carrossel
  {
    id: 'material-aco-carbono',
    section: 'Materiais',
    currentUrl: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=2272&h=600',
    title: 'Aço Carbono'
  },
  {
    id: 'material-aco-inox',
    section: 'Materiais',
    currentUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2070&h=600',
    title: 'Aço Inoxidável'
  }
];

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [images, setImages] = useState<ImageConfig[]>(() => {
    const saved = localStorage.getItem('admin-images');
    return saved ? JSON.parse(saved) : DEFAULT_IMAGES;
  });

  useEffect(() => {
    localStorage.setItem('admin-images', JSON.stringify(images));
  }, [images]);

  const updateImage = (id: string, customUrl: string) => {
    setImages(prev => prev.map(img => 
      img.id === id ? { ...img, customUrl } : img
    ));
  };

  const resetImage = (id: string) => {
    setImages(prev => prev.map(img => 
      img.id === id ? { ...img, customUrl: undefined } : img
    ));
  };

  const resetAllImages = () => {
    setImages(DEFAULT_IMAGES);
  };

  const getImageUrl = (id: string) => {
    const image = images.find(img => img.id === id);
    return image?.customUrl || image?.currentUrl || '';
  };

  return (
    <AdminContext.Provider value={{
      images,
      updateImage,
      resetImage,
      resetAllImages,
      getImageUrl
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}