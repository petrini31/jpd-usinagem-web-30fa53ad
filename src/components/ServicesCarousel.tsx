
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Settings, Wrench, Cog, PenTool, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const additionalServices = [
    {
      icon: Settings,
      title: "Torneamento",
      description: "Serviços de torneamento de alta precisão para peças cilíndricas e complexas, garantindo tolerâncias rigorosas e acabamento superior."
    },
    {
      icon: Wrench,
      title: "Fresamento",
      description: "Usinagem de precisão através de fresamento CNC para componentes com geometrias variadas, superfícies planas e detalhes intrincados."
    },
    {
      icon: RefreshCw,
      title: "Manutenção e Recuperação de Peças",
      description: "Soluções especializadas em manutenção e recuperação de peças industriais, prolongando a vida útil e restaurando a funcionalidade original."
    },
    {
      icon: Cog,
      title: "Fabricação de Ferramentais e Dispositivos",
      description: "Desenvolvimento e fabricação de ferramentais, gabaritos e dispositivos customizados para otimizar processos de produção e garantir a repetibilidade."
    },
    {
      icon: PenTool,
      title: "Especialistas em Moldes",
      description: "Expertise na fabricação de moldes de injeção e estampo, com foco em precisão, durabilidade e eficiência para a indústria de transformação."
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % additionalServices.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [additionalServices.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % additionalServices.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + additionalServices.length) % additionalServices.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative bg-secondary/30 rounded-lg overflow-hidden">
      <div className="relative h-64">
        {additionalServices.map((service, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Card className="h-full border-0 bg-gradient-to-br from-background to-secondary/20">
              <CardContent className="p-8 flex flex-col justify-center h-full text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mx-auto">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
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
        {additionalServices.map((_, index) => (
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

export default ServicesCarousel;
