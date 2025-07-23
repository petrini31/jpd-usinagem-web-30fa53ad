
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MaterialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const materials = [
    {
      title: "Aços",
      subtitle: "Carbono e Inoxidáveis",
      description: "Usinagem de aços de diversas ligas, incluindo carbono e inoxidáveis (ferríticos, martensíticos, austeníticos e duplex). Garantimos precisão, acabamento superficial ideal e respeito às propriedades mecânicas, essenciais para aplicações robustas e resistentes à corrosão.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "Alumínios",
      subtitle: "Diversas Ligas",
      description: "Trabalhamos com uma vasta gama de ligas de alumínio. Material leve e versátil, ideal para peças aeroespaciais, automotivas, eletrônicas e protótipos, onde a precisão, peso reduzido e resistência à corrosão são cruciais.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "Latões",
      subtitle: "Alta Qualidade",
      description: "Usinamos latões de alta qualidade, reconhecidos pela excelente usinabilidade, resistência à corrosão e bom acabamento estético. Perfeito para componentes de precisão, conexões, válvulas e elementos decorativos.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "Polímeros",
      subtitle: "Nylons, Acrílicos e Plásticos de Engenharia",
      description: "Usinamos uma variedade de polímeros, como Nylons, Acrílicos, Poliacetal (POM), Polietileno (UHMW) e PEEK. Oferecemos soluções para peças leves, isolantes, com baixo atrito e alta resistência química, ideais para isoladores, engrenagens e componentes de vedação.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "Cobre e Ligas",
      subtitle: "Bronze e Cobre Eletrolítico",
      description: "Usinagem de cobre e suas ligas como bronze, com foco em alta condutividade elétrica e térmica. Ideal para barramentos, eletrodos, componentes elétricos, buchas e mancais, onde a dissipação de calor e a resistência ao desgaste são fundamentais.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "Ferros Fundidos",
      subtitle: "Cinzentos e Nodulares",
      description: "Usinamos ferros fundidos cinzentos e nodulares, materiais robustos e versáteis para bases de máquinas, carcaças, blocos de motor e peças que exigem alta capacidade de amortecimento de vibrações e resistência à compressão.",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "Titânio",
      subtitle: "Alta Resistência e Leveza",
      description: "Especialistas na usinagem de titânio, um material de alta performance, leveza e excepcional resistência à corrosão e fadiga. Essencial para aplicações aeroespaciais, médicas (implantes) e automobilísticas de alta exigência.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "Superligas",
      subtitle: "Níquel e Cobalto (HRSA)",
      description: "Usinagem de superligas à base de Níquel e Cobalto (ex: Inconel, Hastelloy). Materiais com resistência superior a altas temperaturas e ambientes corrosivos, ideais para turbinas, componentes aeroespaciais e da indústria química.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800&h=600"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % materials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [materials.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % materials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + materials.length) % materials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative bg-secondary rounded-lg overflow-hidden">
      {/* Carousel Container */}
      <div className="relative h-96 md:h-80">
        {materials.map((material, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex h-full">
              {/* Image Section */}
              <div className="w-1/2 relative">
                <img
                  src={material.image}
                  alt={material.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" />
              </div>

              {/* Content Section */}
              <div className="w-1/2 p-8 flex flex-col justify-center bg-background">
                <h4 className="text-2xl font-bold text-foreground mb-2">
                  {material.title}
                </h4>
                <p className="text-primary font-semibold mb-4">
                  {material.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {material.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border-border z-10"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border-border z-10"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {materials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MaterialsCarousel;
