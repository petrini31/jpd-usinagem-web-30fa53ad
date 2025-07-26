
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Settings, Wrench, Cog, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import QuoteModal from "./QuoteModal";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const services = [
    {
      icon: Settings,
      title: "Usinagem CNC de Precisão",
      description: "Fabricação de peças com tolerâncias micrométricas utilizando tecnologia CNC de última geração.",
      features: ["Tornos CNC", "Centros de Usinagem", "Fresadoras CNC", "Retíficas de Precisão"],
      image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      icon: Wrench,
      title: "Usinagem Mecânica Convencional",
      description: "Serviços tradicionais de usinagem com a expertise e qualidade que só anos de experiência proporcionam.",
      features: ["Torneamento", "Fresamento", "Furação", "Rosqueamento"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      icon: Cog,
      title: "Ferramentaria",
      description: "Desenvolvimento e fabricação de ferramentas, moldes e dispositivos especiais para sua produção.",
      features: ["Moldes de Injeção", "Estampos", "Dispositivos", "Ferramentas Especiais"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      icon: Factory,
      title: "Fabricação de Cilindros Pneumáticos",
      description: "Especialistas em cilindros pneumáticos customizados, desde o projeto até a fabricação final.",
      features: ["Cilindros Personalizados", "Reparo e Manutenção", "Vedações Especiais", "Testes de Qualidade"],
      image: "/lovable-uploads/77db13a0-f3ab-40f1-ad6e-d00c2a3ca32b.png"
    }
  ];

  // Mobile: mostrar 1 por vez, Desktop: mostrar 3 por vez
  const getVisibleServices = useCallback(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      return [services[currentIndex]];
    } else {
      const result = [];
      for (let i = 0; i < 3; i++) {
        result.push(services[(currentIndex + i) % services.length]);
      }
      return result;
    }
  }, [currentIndex, services]);

  const nextService = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, services.length]);

  const prevService = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, services.length]);

  useEffect(() => {
    const interval = setInterval(nextService, 4000);
    return () => clearInterval(interval);
  }, [nextService]);

  const visibleServices = getVisibleServices();

  return (
    <section id="servicos" className="py-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-left mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            Oferecemos soluções completas em usinagem, desde peças de alta precisão 
            até sistemas pneumáticos customizados.
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 transition-all duration-300">
            {visibleServices.map((service, index) => (
              <Card 
                key={`${service.title}-${currentIndex}-${index}`}
                className="group hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-primary/30 animate-fade-in h-full"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 md:top-4 md:left-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-full shadow-soft">
                      <service.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-3 md:pb-4">
                  <CardTitle className="text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm md:text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-4 md:mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs md:text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 md:mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs md:text-sm"
                    onClick={() => setIsQuoteModalOpen(true)}
                  >
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows - Desktop */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevService}
            disabled={isTransitioning}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-background/95 hover:bg-background border-border shadow-lg z-20 hidden md:flex disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextService}
            disabled={isTransitioning}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-background/95 hover:bg-background border-border shadow-lg z-20 hidden md:flex disabled:opacity-50"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 300);
                  }
                }}
                disabled={isTransitioning}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-4 md:hidden">
            <Button 
              variant="outline" 
              size="sm"
              onClick={prevService}
              disabled={isTransitioning}
              className="disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Anterior
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={nextService}
              disabled={isTransitioning}
              className="disabled:opacity-50"
            >
              Próximo
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </section>
  );
};

export default Services;
