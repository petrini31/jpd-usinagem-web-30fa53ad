
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const openPortfolio = () => {
    window.open('/portfolio-full', '_blank');
  };

  // 10 primeiras imagens da rota /portfolio-full com as imagens fornecidas
  const galleryProjects = [
    {
      id: 1,
      image: "/lovable-uploads/7487f020-2969-4fea-93cc-7232587c319e.png",
      title: "Usinagem CNC de precisão"
    },
    {
      id: 2,
      image: "/lovable-uploads/4d1166a1-566a-4f33-a6fb-05a628da0ceb.png",
      title: "Torneamento"
    },
    {
      id: 3,
      image: "/lovable-uploads/79615b86-054f-4f10-90ae-9bb561911010.png",
      title: "Fresamento"
    },
    {
      id: 4,
      image: "/lovable-uploads/77db13a0-f3ab-40f1-ad6e-d00c2a3ca32b.png",
      title: "Fabricação de cilindros pneumáticos"
    },
    {
      id: 5,
      image: "/lovable-uploads/dd128e84-9545-4e4d-a57a-8aaca84f4a9b.png",
      title: "Nosso cilindro pneumático em atuação"
    },
    {
      id: 6,
      image: "/lovable-uploads/3b518978-4d9c-4d5b-bcf8-4485bc695d1b.png",
      title: "Bicos injetores"
    },
    {
      id: 7,
      image: "/lovable-uploads/aec5fa4d-81c6-4c81-938b-e57e9900c236.png",
      title: "Usinagem em série"
    },
    {
      id: 8,
      image: "/lovable-uploads/209bf881-1ece-45ad-9b34-a76bd704a853.png",
      title: "Tratamento de peças de precisão"
    },
    {
      id: 9,
      image: "/lovable-uploads/1159c5da-7355-4c50-9483-b457bb702d07.png",
      title: "Manutenção de componentes"
    },
    {
      id: 10,
      image: "/lovable-uploads/1bf1d819-ce80-415a-b87c-fd78e53be919.png",
      title: "Usinagem de arruelas"
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

        {/* Grid de 10 imagens com molduras */}
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
