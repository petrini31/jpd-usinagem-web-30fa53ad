
import { ArrowRight, CheckCircle, Wrench, Zap, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import OptimizedImage from "./OptimizedImage";
import { useNavigate } from "react-router-dom";

const Pneumatica = () => {
  const navigate = useNavigate();
  
  const openPneumaticaFull = () => {
    navigate('/pneumatica');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  const advantages = [
    {
      icon: CheckCircle,
      title: "Qualidade Garantida",
      description: "Cilindros pneumáticos certificados com rigoroso controle de qualidade em Bom Jesus dos Perdões"
    },
    {
      icon: Wrench,
      title: "Customização Total", 
      description: "Soluções pneumáticas personalizadas para suas necessidades industriais específicas"
    },
    {
      icon: Zap,
      title: "Alta Performance",
      description: "Eficiência máxima e durabilidade comprovada em aplicações industriais SP"
    },
    {
      icon: Shield,
      title: "Confiabilidade",
      description: "Produtos robustos para operação contínua desenvolvidos com expertise regional"
    },
    {
      icon: Award,
      title: "Expertise Técnica",
      description: "Décadas de experiência em soluções pneumáticas para indústrias de Atibaia e região"
    }
  ];

  return (
    <section id="pneumatica" className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-accent rounded-full opacity-10 blur-3xl animate-float" style={{
        animationDelay: '2s'
      }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header - Left aligned */}
        <div className="mb-12 md:mb-16 animate-fade-in text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 md:mb-8">
            Soluções <span className="text-primary">Pneumáticas</span><br />
            de Alta Performance
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed">
            Nossa expertise em fabricação de cilindros pneumáticos personalizados em Bom Jesus dos Perdões 
            garante soluções eficientes e duráveis para aplicações industriais em Atibaia, Bragança Paulista 
            e toda SP. Cada projeto é desenvolvido com precisão técnica e foco na performance industrial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12 md:mb-16">
          {/* Left content */}
          <div className="space-y-6 md:space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Por que escolher nossos cilindros pneumáticos?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {advantages.map((advantage, index) => (
                  <Card key={index} className="group hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-primary/30">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform duration-300 shadow-soft flex-shrink-0">
                          <advantage.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">
                            {advantage.title}
                          </h4>
                          <p className="text-sm md:text-base text-muted-foreground">
                            {advantage.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-4 md:pt-6">
              <Button 
                onClick={openPneumaticaFull}
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary-dark transition-colors text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
              >
                Ver Mais Sobre Pneumática
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right content - Images */}
          <div className="space-y-4 md:space-y-6 animate-slide-up" style={{
            animationDelay: '0.2s'
          }}>
            <div className="relative">
              <OptimizedImage
                src="/lovable-uploads/2e86ffbf-edfb-42e6-abea-d053f935f05b.png"
                alt="Cilindros pneumáticos de alta qualidade fabricados pela JPD Usinagem em Bom Jesus dos Perdões SP"
                className="w-full h-56 md:h-72 rounded-lg shadow-strong"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
            
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              <OptimizedImage
                src="/lovable-uploads/0b40a727-907c-4275-91b3-c9f6b08c64f0.png"
                alt="Fabricação de cilindros pneumáticos industriais - JPD Usinagem Atibaia e região"
                className="w-full h-28 md:h-36 rounded-lg shadow-medium"
                loading="lazy"
              />
              <OptimizedImage
                src="/lovable-uploads/dd128e84-9545-4e4d-a57a-8aaca84f4a9b.png"
                alt="Cilindro pneumático de dupla ação em operação industrial - Pneumática SP"
                className="w-full h-28 md:h-36 rounded-lg shadow-medium"
                loading="lazy"
              />
              <OptimizedImage
                src="/lovable-uploads/6b860842-119a-4fbd-88fa-c950c619c263.png"
                alt="Cilindro pneumático de precisão customizado - Soluções pneumáticas Bragança Paulista"
                className="w-full h-28 md:h-36 rounded-lg shadow-medium"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pneumatica;
