
import { ExternalLink, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import PortfolioCarousel from "./PortfolioCarousel";

const Portfolio = () => {
  const openPortfolio = () => {
    window.open('/portfolio-full', '_blank');
  };

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

        {/* Portfolio Gallery Preview */}
        <div className="bg-gradient-to-br from-secondary/50 via-background to-secondary/30 rounded-lg p-12 text-center animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 inline-flex items-center justify-center w-32 h-32 bg-gradient-primary rounded-full shadow-strong">
              <Camera className="w-16 h-16 text-primary-foreground" />
            </div>
            
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Galeria Completa de Projetos
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
