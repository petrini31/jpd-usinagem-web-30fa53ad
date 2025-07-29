import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import OptimizedImage from "./OptimizedImage";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  
  const openPortfolioFull = () => {
    navigate('/portfolio-full');
  };

  const projects = [
    {
      title: "Pneumática Completa",
      description: "Soluções pneumáticas personalizadas para otimizar processos industriais, garantindo eficiência e durabilidade.",
      image: "/lovable-uploads/2e86ffbf-edfb-42e6-abea-d053f935f05b.png",
      tags: ["Pneumática", "Cilindros", "Automação"]
    },
    {
      title: "Usinagem CNC de Precisão",
      description: "Peças usinadas com alta precisão e qualidade, atendendo às necessidades específicas de cada cliente.",
      image: "/lovable-uploads/f370996c-dd23-4c78-b534-ce466c030a0b.png",
      tags: ["CNC", "Usinagem", "Precisão"]
    },
    {
      title: "Projetos de Desenho Técnico",
      description: "Desenvolvimento de projetos de desenho técnico personalizados, desde o conceito até a produção.",
      image: "/lovable-uploads/39454b83-b7cf-4cbe-83d6-9609d65aa701.png",
      tags: ["Desenho Técnico", "Projetos", "Engenharia"]
    },
    {
      title: "Manutenção e Recuperação",
      description: "Serviços de manutenção e recuperação de peças industriais, prolongando a vida útil e reduzindo custos.",
      image: "/lovable-uploads/9bc73a42-18ba-45e1-96b7-c2035acfb640.png",
      tags: ["Manutenção", "Recuperação", "Industrial"]
    },
    {
      title: "Ferramentais e Dispositivos",
      description: "Fabricação de ferramentais e dispositivos para otimizar processos de produção e garantir a repetibilidade.",
      image: "/lovable-uploads/5747a4c1-c343-4946-a329-d3e6c45e6be9.png",
      tags: ["Ferramentas", "Dispositivos", "Produção"]
    },
    {
      title: "Moldes de Injeção",
      description: "Especialistas na fabricação de moldes de injeção, garantindo precisão e durabilidade para a indústria.",
      image: "/lovable-uploads/7de9727d-b15c-4acd-a2b3-8bc626ea3949.png",
      tags: ["Moldes", "Injeção", "Plástico"]
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
            Explore alguns dos nossos projetos mais recentes e descubra como podemos ajudar a sua empresa a alcançar novos patamares de excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border border-border/50 overflow-hidden">
              <div className="relative overflow-hidden">
                <OptimizedImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 md:h-48 group-hover:scale-105 transition-transform duration-300"
                  loading={index < 3 ? "eager" : "lazy"}
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="inline-flex items-center px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
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
