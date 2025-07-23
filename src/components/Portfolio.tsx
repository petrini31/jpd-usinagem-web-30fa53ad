
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import PortfolioCarousel from "./PortfolioCarousel";

const Portfolio = () => {
  const openPortfolio = () => {
    window.open('/portfolio-full', '_blank');
  };

  const miniGalleryImages = [
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=400&h=300",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400&h=300",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400&h=300",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400&h=300",
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=400&h=300",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400&h=300",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=400&h=300",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=300",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=400&h=300",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400&h=300",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=400&h=300",
    "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&q=80&w=400&h=300"
  ];

  return (
    <section id="portfolio" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-32 left-10 w-64 h-64 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-32 right-10 w-96 h-96 bg-gradient-accent rounded-full opacity-10 blur-3xl animate-float" style={{
        animationDelay: '3s'
      }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header - Aligned left */}
        <div className="mb-20 animate-fade-in text-left">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            Nosso <span className="text-primary">Portfólio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed">
            Explore uma seleção dos nossos projetos mais representativos, demonstrando 
            nossa expertise em usinagem CNC, fabricação de cilindros pneumáticos e 
            desenvolvimento de soluções industriais personalizadas.
          </p>
        </div>

        {/* Mini Gallery - Moved up */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-left">Galeria de Projetos</h3>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mb-8 max-w-6xl">
            {miniGalleryImages.map((image, index) => (
              <div key={index} className="group cursor-pointer overflow-hidden rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 relative">
                {/* Sombreado vermelho atrás da imagem */}
                <div className="absolute inset-0 bg-red-500/20 rounded-lg transform translate-x-1 translate-y-1 -z-10"></div>
                <img 
                  src={image} 
                  alt={`Projeto ${index + 1}`} 
                  className="w-full h-32 md:h-36 object-cover group-hover:scale-105 transition-transform duration-300 relative z-10" 
                />
              </div>
            ))}
          </div>
          
          {/* Call to Action Button */}
          <div className="text-left">
            <Button 
              size="lg" 
              onClick={openPortfolio} 
              className="bg-primary text-primary-foreground hover:bg-primary-dark transition-colors text-lg px-8 py-4"
            >
              Visualizar Portfólio Completo
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Portfolio Carousel - Moved down */}
        <div className="mb-16">
          <PortfolioCarousel />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
