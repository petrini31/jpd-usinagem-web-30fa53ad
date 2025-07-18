import { ExternalLink, Camera, Settings, Cog, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const openPortfolio = () => {
    // Abre uma nova aba com o portfólio
    window.open('#portfolio-full', '_blank');
  };

  const projectCategories = [
    {
      icon: Settings,
      title: "Usinagem CNC",
      description: "Peças de alta precisão e complexidade"
    },
    {
      icon: Factory,
      title: "Cilindros Pneumáticos",
      description: "Soluções personalizadas em pneumática"
    },
    {
      icon: Cog,
      title: "Componentes Industriais",
      description: "Fabricação de máquinas e dispositivos"
    }
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

        {/* Project Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {projectCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-all duration-300 border border-border/50 bg-card/80 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <category.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
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

            {/* Image Placeholders Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 opacity-60">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div 
                  key={item} 
                  className="aspect-square bg-gradient-primary rounded-lg opacity-30 flex items-center justify-center hover:opacity-50 transition-opacity"
                >
                  <Factory className="w-8 h-8 text-primary" />
                </div>
              ))}
            </div>
            
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