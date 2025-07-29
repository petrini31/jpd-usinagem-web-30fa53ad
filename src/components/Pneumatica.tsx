
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import QuoteModal from "./QuoteModal";
import { useState } from "react";

const Pneumatica = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const pneumaticImages = [
    {
      src: "/lovable-uploads/77db13a0-f3ab-40f1-ad6e-d00c2a3ca32b.png",
      alt: "Fabricação de cilindros pneumáticos personalizados para usinagem"
    },
    {
      src: "/lovable-uploads/dd128e84-9545-4e4d-a57a-8aaca84f4a9b.png", 
      alt: "Cilindros pneumáticos em operação industrial"
    },
    {
      src: "/lovable-uploads/c8fafa21-468e-4af3-a404-6e5ab6bcfc69.png",
      alt: "Manutenção especializada em cilindros pneumáticos Parker"
    },
    {
      src: "/lovable-uploads/0b40a727-907c-4275-91b3-c9f6b08c64f0.png",
      alt: "Linha completa de cilindros pneumáticos de precisão"
    }
  ];

  return (
    <section id="pneumatica" className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-accent rounded-full opacity-10 blur-3xl animate-float will-change-transform"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-float will-change-transform" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Soluções <span className="text-transparent bg-clip-text bg-gradient-accent">Pneumáticas</span> de Alta Performance
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-justify mb-8">
              Nossa expertise em fabricação de cilindros pneumáticos personalizados para usinagem Atibaia, fresamento Bragança Paulista e torneamento Bom Jesus dos Perdões garante soluções eficientes e duráveis para suas aplicações industriais em toda região de São Paulo. Cada projeto é desenvolvido com precisão técnica e foco na performance.
            </p>
            
            {/* Image Grid - Positioned right after the text */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {pneumaticImages.map((image, index) => (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-32 md:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Cilindros Personalizados",
              description: "Desenvolvimento de cilindros pneumáticos sob medida para suas necessidades específicas de usinagem e automação industrial."
            },
            {
              title: "Manutenção Especializada", 
              description: "Serviços completos de manutenção preventiva e corretiva em cilindros pneumáticos de todas as marcas."
            },
            {
              title: "Consultoria Técnica",
              description: "Assessoria especializada para otimização de sistemas pneumáticos e aumento da eficiência produtiva."
            }
          ].map((feature, index) => (
            <Card key={index} className="group hover:shadow-strong transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary-dark hover:scale-105 transition-all duration-300 text-lg px-8 py-6 shadow-strong"
            onClick={() => setIsQuoteModalOpen(true)}
          >
            Solicitar Orçamento Personalizado
          </Button>
        </div>
      </div>

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="pneumatica"
      />
    </section>
  );
};

export default Pneumatica;
