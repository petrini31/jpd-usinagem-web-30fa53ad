
import { useState, useEffect } from "react";
import { Settings, CheckCircle, Eye, Wrench, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import OptimizedImage from "./OptimizedImage";

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      icon: Settings,
      title: "Usinagem CNC de Precisão",
      description: "Torneamento e fresamento CNC com precisão micrométrica para componentes industriais complexos.",
      image: "/lovable-uploads/f370996c-dd23-4c78-b534-ce466c030a0b.png",
      alt: "Usinagem CNC de precisão - Torno CNC JPD Bom Jesus dos Perdões SP",
      details: {
        fullDescription: "Especialistas em usinagem CNC de alta precisão em Bom Jesus dos Perdões, atendendo Atibaia, Bragança Paulista e região. Nossa tornearia CNC oferece serviços de torneamento e fresamento para peças complexas com tolerâncias rigorosas.",
        features: [
          "Torneamento CNC com precisão micrométrica",
          "Fresamento CNC para geometrias complexas",
          "Usinagem de peças seriadas e protótipos",
          "Controle dimensional rigoroso",
          "Materiais diversos: aço, alumínio, latão, bronze"
        ],
        applications: "Componentes automotivos, peças industriais, protótipos, ferramentaria"
      }
    },
    {
      icon: Wrench,
      title: "Ferramentaria Especializada",
      description: "Desenvolvimento e fabricação de ferramentas, moldes e dispositivos industriais sob medida.",
      image: "/lovable-uploads/5747a4c1-c343-4946-a329-d3e6c45e6be9.png",
      alt: "Ferramentaria especializada - Moldes e ferramentas JPD Usinagem SP",
      details: {
        fullDescription: "Nossa ferramentaria em Bom Jesus dos Perdões desenvolve soluções personalizadas em ferramentas, moldes e dispositivos para indústrias de SP. Expertise em usinagem de moldes de injeção e ferramental de precisão.",
        features: [
          "Moldes de injeção plástica",
          "Ferramentas de corte e conformação",
          "Dispositivos de fixação",
          "Gabaritos de controle",
          "Reforma e manutenção de moldes"
        ],
        applications: "Injeção plástica, estamparia, fundição, controle de qualidade"
      }
    },
    {
      icon: Zap,
      title: "Pneumática Industrial",
      description: "Fabricação de cilindros pneumáticos personalizados e soluções em automação pneumática.",
      image: "/lovable-uploads/2e86ffbf-edfb-42e6-abea-d053f935f05b.png",
      alt: "Cilindros pneumáticos industriais fabricados em Atibaia e Bom Jesus dos Perdões - JPD",
      details: {
        fullDescription: "Especialistas em fabricação de cilindros pneumáticos em Bom Jesus dos Perdões, oferecendo soluções pneumáticas customizadas para automação industrial em Atibaia, Bragança e toda SP.",
        features: [
          "Cilindros pneumáticos de dupla ação",
          "Cilindros de simples ação",
          "Atuadores pneumáticos especiais",
          "Manutenção de sistemas pneumáticos",
          "Projeto e desenvolvimento personalizado"
        ],
        applications: "Automação industrial, linhas de produção, máquinas especiais, robótica"
      }
    },
    {
      icon: CheckCircle,
      title: "Manutenção Industrial",
      description: "Recuperação e manutenção de componentes industriais, prolongando vida útil e reduzindo custos.",
      image: "/lovable-uploads/9bc73a42-18ba-45e1-96b7-c2035acfb640.png",
      alt: "Manutenção industrial e recuperação de peças - Usinagem Bragança Paulista SP",
      details: {
        fullDescription: "Serviços de manutenção industrial e recuperação de peças em Bom Jesus dos Perdões, atendendo empresas de Atibaia, Bragança e região com soluções em usinagem de recuperação.",
        features: [
          "Recuperação de eixos e cilindros",
          "Soldagem e usinagem de reparos",
          "Retrofit de máquinas industriais",
          "Fabricação de peças de reposição",
          "Análise técnica e diagnóstico"
        ],
        applications: "Indústria em geral, máquinas operatrizes, equipamentos hidráulicos"
      }
    }
  ];

  // Auto-advance every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [services.length]);

  const openServiceModal = (service: any) => {
    setSelectedService(service);
  };

  return (
    <section id="servicos" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-left mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Soluções completas em usinagem CNC, ferramentaria e pneumática industrial em Bom Jesus dos Perdões, 
            atendendo Atibaia, Bragança Paulista e toda SP com excelência e precisão.
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative mb-12 md:mb-16">
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="mx-2 md:mx-4 bg-background border border-border/50 hover:shadow-medium transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                      {/* Image Section */}
                      <div className="relative overflow-hidden">
                        <OptimizedImage
                          src={service.image}
                          alt={service.alt}
                          className="w-full h-64 md:h-80 lg:h-full min-h-[300px]"
                          loading={index === currentIndex ? "eager" : "lazy"}
                          priority={index === 0}
                        />
                        <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground p-3 rounded-full">
                          <service.icon className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        <CardHeader className="p-0 mb-4 md:mb-6">
                          <CardTitle className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            {service.description}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="p-0">
                          <Button 
                            onClick={() => openServiceModal(service)}
                            className="bg-primary text-primary-foreground hover:bg-primary-dark transition-colors w-full sm:w-auto"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Ver Detalhes
                          </Button>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Service Details Modal */}
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            {selectedService && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {selectedService.title}
                  </DialogTitle>
                  <DialogDescription asChild>
                    <div className="space-y-6">
                      <OptimizedImage
                        src={selectedService.image}
                        alt={selectedService.alt}
                        className="w-full h-48 md:h-64 rounded-lg"
                        loading="eager"
                      />
                      
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Descrição Completa</h4>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {selectedService.details.fullDescription}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Características Principais</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                          {selectedService.details.features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Aplicações</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {selectedService.details.applications}
                        </p>
                      </div>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Services;
