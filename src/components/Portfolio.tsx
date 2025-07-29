
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import OptimizedImage from "./OptimizedImage";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  
  const openPortfolioFull = () => {
    navigate('/portfolio-full');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  const projects = [
    {
      title: "Pneumática Completa Atibaia",
      description: "Soluções pneumáticas personalizadas para otimizar processos industriais em Atibaia, garantindo eficiência e durabilidade.",
      image: "/lovable-uploads/2e86ffbf-edfb-42e6-abea-d053f935f05b.png",
      tags: ["Pneumática", "Cilindros", "Automação Atibaia"]
    },
    {
      title: "Usinagem CNC de Precisão São Paulo",
      description: "Peças usinadas com alta precisão e qualidade para indústrias de São Paulo, atendendo às necessidades específicas de cada cliente.",
      image: "/lovable-uploads/f370996c-dd23-4c78-b534-ce466c030a0b.png",
      tags: ["CNC São Paulo", "Usinagem", "Precisão"]
    },
    {
      title: "Projetos de Desenho Técnico Bragança Paulista",
      description: "Desenvolvimento de projetos de desenho técnico personalizados para Bragança Paulista, desde o conceito até a produção.",
      image: "/lovable-uploads/39454b83-b7cf-4cbe-83d6-9609d65aa701.png",
      tags: ["Desenho Técnico", "Projetos Bragança", "Engenharia"]
    },
    {
      title: "Manutenção e Recuperação Industrial",
      description: "Serviços de manutenção e recuperação de peças industriais em Bom Jesus dos Perdões, prolongando a vida útil e reduzindo custos.",
      image: "/lovable-uploads/9bc73a42-18ba-45e1-96b7-c2035acfb640.png",
      tags: ["Manutenção", "Recuperação", "Industrial Bom Jesus"]
    },
    {
      title: "Ferramentais e Dispositivos Região SP",
      description: "Fabricação de ferramentais e dispositivos para otimizar processos de produção na região de São Paulo e garantir a repetibilidade.",
      image: "/lovable-uploads/5747a4c1-c343-4946-a329-d3e6c45e6be9.png",
      tags: ["Ferramentas", "Dispositivos", "Produção SP"]
    },
    {
      title: "Moldes de Injeção Alta Precisão",
      description: "Especialistas na fabricação de moldes de injeção, garantindo precisão e durabilidade para a indústria em toda região.",
      image: "/lovable-uploads/7de9727d-b15c-4acd-a2b3-8bc626ea3949.png",
      tags: ["Moldes", "Injeção", "Plástico Precisão"]
    }
  ];

  return (
    <section id="portfolio" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header - Left aligned */}
        <div className="mb-8 md:mb-16 animate-fade-in text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Nosso <span className="text-primary">Portfólio</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            Explore alguns dos nossos projetos mais recentes de usinagem CNC, fresamento, torneamento e cilindros pneumáticos 
            para Atibaia, Bragança Paulista, Bom Jesus dos Perdões e toda região de São Paulo. Descubra como podemos ajudar 
            a sua empresa a alcançar novos patamares de excelência industrial.
          </p>
        </div>

        {/* Reduced grid layout with red borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border border-border/50 overflow-hidden">
              <div className="relative overflow-hidden">
                <OptimizedImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 md:h-40 object-cover border-2 border-red-500 group-hover:scale-105 transition-transform duration-300"
                  loading={index < 3 ? "eager" : "lazy"}
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-3 md:p-4">
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="inline-flex items-center px-1.5 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            onClick={openPortfolioFull}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary-dark transition-colors"
          >
            Ver Portfólio Completo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
