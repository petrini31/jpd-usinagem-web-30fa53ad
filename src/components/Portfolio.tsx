
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const portfolioItems = [
    { id: 1, image: "/lovable-uploads/7487f020-2969-4fea-93cc-7232587c319e.png", title: "Usinagem CNC de precisão" },
    { id: 2, image: "/lovable-uploads/4d1166a1-566a-4f33-a6fb-05a628da0ceb.png", title: "Torneamento" },
    { id: 3, image: "/lovable-uploads/79615b86-054f-4f10-90ae-9bb561911010.png", title: "Fresamento" },
    { id: 4, image: "/lovable-uploads/77db13a0-f3ab-40f1-ad6e-d00c2a3ca32b.png", title: "Fabricação de cilindros pneumáticos" },
    { id: 5, image: "/lovable-uploads/dd128e84-9545-4e4d-a57a-8aaca84f4a9b.png", title: "Nosso cilindro pneumático em atuação" },
    { id: 6, image: "/lovable-uploads/3b518978-4d9c-4d5b-bcf8-4485bc695d1b.png", title: "Bicos injetores" }
  ];

  const openPortfolio = () => {
    window.open('/portfolio-full', '_blank');
  };

  return (
    <section id="portfolio" className="py-16 md:py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-left mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Nosso <span className="text-primary">Portfólio</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-6 md:mb-8">
            Conheça alguns dos projetos que desenvolvemos com excelência e precisão.
          </p>
          
          <Button 
            onClick={openPortfolio}
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
          >
            Ver Galeria Completa
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-12">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-medium transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <CardContent className="p-3 md:p-4">
                <h3 className="font-semibold text-foreground text-xs sm:text-sm md:text-base">
                  {item.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
            Cada projeto é único e desenvolvido com o máximo cuidado e precisão.
          </p>
          <Button 
            variant="outline" 
            onClick={openPortfolio}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm md:text-base"
          >
            Explorar Mais Projetos
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
