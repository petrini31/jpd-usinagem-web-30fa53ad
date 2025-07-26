
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const openPortfolio = () => {
    window.open('/portfolio-full', '_blank');
  };

  // 15 primeiras imagens da rota /portfolio-full
  const galleryProjects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=400",
      title: "Usinagem CNC de Precisão"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600&h=400",
      title: "Cilindros Pneumáticos"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=400",
      title: "Ferramentaria"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600&h=400",
      title: "Moldes de Precisão"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=600&h=400",
      title: "Componentes Automotivos"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400",
      title: "Peças Industriais"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600&h=400",
      title: "Torneamento CNC"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=400",
      title: "Fresamento de Precisão"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600&h=400",
      title: "Retificação"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600&h=400",
      title: "Dispositivos Especiais"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=600&h=400",
      title: "Engrenagens"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&q=80&w=600&h=400",
      title: "Componentes Hidráulicos"
    },
    {
      id: 13,
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=600&h=400",
      title: "Peças Aeroespaciais"
    },
    {
      id: 14,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=400",
      title: "Equipamentos Médicos"
    },
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600&h=400",
      title: "Protótipos Funcionais"
    }
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

        {/* Grid de 15 imagens com molduras vermelhas */}
        <div className="mb-12">
          <div className="bg-muted/20 p-4 rounded-lg" style={{ margin: '0 0.5cm' }}>
            <div className="grid grid-cols-5 gap-3">
              {galleryProjects.map((project) => (
                <div key={project.id} className="group cursor-pointer overflow-hidden rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 relative aspect-[4/3] border-2 border-muted-foreground/40">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  {/* Título sobreposto com degradê */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3">
                    <h4 className="text-white text-sm font-medium leading-tight">
                      {project.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Call to Action Button - Centralizado com espaçamento */}
          <div className="text-center mt-12">
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
      </div>
    </section>
  );
};

export default Portfolio;
