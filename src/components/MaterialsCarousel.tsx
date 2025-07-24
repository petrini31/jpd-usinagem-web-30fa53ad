import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCustomImage } from "@/hooks/useCustomImage";
const MaterialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Custom images for materials
  const acoCarbonoImage = useCustomImage('material-aco-carbono', 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=2272&h=600');
  const acoInoxImage = useCustomImage('material-aco-inox', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2070&h=600');
  
  const materials = [{
    id: 'acos',
    title: "Aços",
    subtitle: "Carbono e Inoxidáveis",
    description: "Usinagem de aços de diversas ligas, incluindo carbono e inoxidáveis (ferríticos, martensíticos, austeníticos e duplex). Garantimos precisão, acabamento superficial ideal e respeito às propriedades mecânicas, essenciais para aplicações robustas e resistentes à corrosão.",
    image: acoCarbonoImage
  }, {
    id: 'aluminios',
    title: "Alumínios",
    subtitle: "Diversas Ligas",
    description: "Trabalhamos com uma vasta gama de ligas de alumínio. Material leve e versátil, ideal para peças aeroespaciais, automotivas, eletrônicas e protótipos, onde a precisão, peso reduzido e resistência à corrosão são cruciais.",
    image: acoInoxImage
  }, {
    id: 'latoes',
    title: "Latões",
    subtitle: "Alta Qualidade",
    description: "Usinamos latões de alta qualidade, reconhecidos pela excelente usinabilidade, resistência à corrosão e bom acabamento estético. Perfeito para componentes de precisão, conexões, válvulas e elementos decorativos.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800&h=600"
  }, {
    id: 'polimeros',
    title: "Polímeros",
    subtitle: "Nylons, Acrílicos e Plásticos de Engenharia",
    description: "Usinamos uma variedade de polímeros, como Nylons, Acrílicos, Poliacetal (POM), Polietileno (UHMW) e PEEK. Oferecemos soluções para peças leves, isolantes, com baixo atrito e alta resistência química, ideais para isoladores, engrenagens e componentes de vedação.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&h=600"
  }, {
    id: 'cobre',
    title: "Cobre e Ligas",
    subtitle: "Bronze e Cobre Eletrolítico",
    description: "Usinagem de cobre e suas ligas como bronze, com foco em alta condutividade elétrica e térmica. Ideal para barramentos, eletrodos, componentes elétricos, buchas e mancais, onde a dissipação de calor e a resistência ao desgaste são fundamentais.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=800&h=600"
  }, {
    id: 'ferros-fundidos',
    title: "Ferros Fundidos",
    subtitle: "Cinzentos e Nodulares",
    description: "Usinamos ferros fundidos cinzentos e nodulares, materiais robustos e versáteis para bases de máquinas, carcaças, blocos de motor e peças que exigem alta capacidade de amortecimento de vibrações e resistência à compressão.",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&q=80&w=800&h=600"
  }, {
    id: 'titanio',
    title: "Titânio",
    subtitle: "Alta Resistência e Leveza",
    description: "Especialistas na usinagem de titânio, um material de alta performance, leveza e excepcional resistência à corrosão e fadiga. Essencial para aplicações aeroespaciais, médicas (implantes) e automobilísticas de alta exigência.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=600"
  }, {
    id: 'superligas',
    title: "Superligas",
    subtitle: "Níquel e Cobalto (HRSA)",
    description: "Usinagem de superligas à base de Níquel e Cobalto (ex: Inconel, Hastelloy). Materiais com resistência superior a altas temperaturas e ambientes corrosivos, ideais para turbinas, componentes aeroespaciais e da indústria química.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800&h=600"
  }];

  // Auto-slide com loop correto
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % materials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [materials.length]);
  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % materials.length);
  };
  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + materials.length) % materials.length);
  };
  const currentMaterial = materials[currentIndex];

  return (
    <div className="relative bg-secondary rounded-lg overflow-hidden h-[600px]">
      {/* Carousel Container */}
      <div className="relative h-full">
        <img 
          src={currentMaterial.image} 
          alt={currentMaterial.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-8 max-w-4xl">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              {currentMaterial.title}
            </h3>
            <p className="text-xl md:text-2xl mb-6 text-white/90">
              {currentMaterial.subtitle}
            </p>
            <p className="text-lg leading-relaxed text-white/80">
              {currentMaterial.description}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button variant="outline" size="icon" onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border-border z-10">
        <ChevronLeft className="w-4 h-4" />
      </Button>

      <Button variant="outline" size="icon" onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border-border z-10">
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
};
export default MaterialsCarousel;