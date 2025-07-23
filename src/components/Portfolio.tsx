
import { ExternalLink, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import PortfolioCarousel from "./PortfolioCarousel";

const Portfolio = () => {
  const openPortfolio = () => {
    window.open('/portfolio-full', '_blank');
  };

  const miniGalleryImages = [
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=300&h=200",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=300&h=200",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=300&h=200",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=300&h=200",
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=300&h=200",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=300&h=200",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=300&h=200",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=300&h=200",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=300&h=200",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=300&h=200",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=300&h=200",
    "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&q=80&w=300&h=200"
  ];

  return (
    <section id="portfolio" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-32 left-10 w-64 h-64 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-32 right-10 w-96 h-96 bg-gradient-accent rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            Nosso <span className="text-primary">Portfólio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore uma seleção dos nossos projetos mais representativos, demonstrando 
            nossa expertise em usinagem CNC, fabricação de cilindros pneumáticos e 
            desenvolvimento de soluções industriais personalizadas.
          </p>
        </div>

        {/* Portfolio Carousel */}
        <div className="mb-16">
          <PortfolioCarousel />
        </div>

        {/* Mini Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Galeria Completa de Projetos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {miniGalleryImages.map((image, index) => (
              <div key={index} className="group cursor-pointer overflow-hidden rounded-lg shadow-soft hover:shadow-medium transition-all duration-300">
                <img
                  src={image}
                  alt={`Projeto ${index + 1}`}
                  className="w-full h-24 md:h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-secondary/50 via-background to-secondary/30 rounded-lg p-12 text-center animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 inline-flex items-center justify-center w-32 h-32 bg-gradient-primary rounded-full shadow-strong">
              <Camera className="w-16 h-16 text-primary-foreground" />
            </div>
            
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Explore Nossos Projetos Completos
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Acesse nossa galeria completa com dezenas de projetos executados, 
              incluindo peças usinadas com precisão micrométrica, cilindros pneumáticos 
              personalizados e soluções industriais inovadoras desenvolvidas para 
              nossos clientes ao longo dos anos.
            </p>
            
            <Button 
              size="lg"
              onClick={openPortfolio}
              className="bg-primary text-primary-foreground hover:bg-primary-dark transition-colors text-lg px-8 py-4"
            >
              Visualizar Portfólio Completo
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              * Abre em nova aba para melhor visualização
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
