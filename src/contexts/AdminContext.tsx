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
  {
    id: 'hero-main',
    section: 'Hero',
    currentUrl: '/src/assets/hero-cnc-industrial.jpg',
    title: 'Imagem Principal do Hero'
  },
  {
    id: 'hero-secondary',
    section: 'Hero',
    currentUrl: '/src/assets/hero-cnc.jpg',
    title: 'Imagem Secundária do Hero'
  },
  {
    id: 'manufacturing-process',
    section: 'Serviços',
    currentUrl: '/src/assets/manufacturing-process.jpg',
    title: 'Processo de Manufatura'
  },
  {
    id: 'precision-parts',
    section: 'Serviços',
    currentUrl: '/src/assets/precision-parts.jpg',
    title: 'Peças de Precisão'
  },
  {
    id: 'quality-components',
    section: 'Serviços',
    currentUrl: '/src/assets/quality-components.jpg',
    title: 'Componentes de Qualidade'
  },
  // Portfolio images
  {
    id: 'portfolio-1',
    section: 'Portfolio',
    currentUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Portfolio Item 1'
  },
  {
    id: 'portfolio-2',
    section: 'Portfolio',
    currentUrl: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Portfolio Item 2'
  },
  {
    id: 'portfolio-3',
    section: 'Portfolio',
    currentUrl: 'https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Portfolio Item 3'
  },
  // Materials
  {
    id: 'material-aco-carbono',
    section: 'Materiais',
    currentUrl: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2272&q=80',
    title: 'Aço Carbono'
  },
  {
    id: 'material-aco-inox',
    section: 'Materiais',
    currentUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
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