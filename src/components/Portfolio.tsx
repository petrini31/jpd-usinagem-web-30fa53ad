
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import OptimizedImage from "./OptimizedImage";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  
  const openPortfolioFull = () => {
    navigate('/portfolio');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  const projects = [
    {
      title: "Sistemas Pneumáticos Industriais",
      description: "Soluções pneumáticas completas para automação industrial, incluindo cilindros customizados e sistemas integrados.",
      image: "/lovable-uploads/2e86ffbf-edfb-42e6-abea-d053f935f05b.png",
      tags: ["Pneumática", "Cilindros", "Automação"]
    },
    {
      title: "Usinagem de Bicos de Injeção Plástica",
      description: "Fabricação especializada de bicos de injeção, bicos valvulados e sistemas para moldes de injeção plástica com alta precisão.",
      image: "/lovable-uploads/48ae22ca-4c4f-4fbb-b4bb-e74727daef9f.png",
      tags: ["Bicos Injeção", "Moldes", "Precisão"]
    },
    {
      title: "Projetos de Engenharia Industrial",
      description: "Desenvolvimento de projetos técnicos personalizados, desde o conceito até a produção final.",
      image: "/lovable-uploads/39454b83-b7cf-4cbe-83d6-9609d65aa701.png",
      tags: ["Projetos", "Engenharia", "Desenvolvimento"]
    },
    {
      title: "Manutenção Industrial Especializada",
      description: "Serviços de manutenção e recuperação de componentes industriais, prolongando vida útil e otimizando performance.",
      image: "/lovable-uploads/9bc73a42-18ba-45e1-96b7-c2035acfb640.png",
      tags: ["Manutenção", "Recuperação", "Otimização"]
    },
    {
      title: "Ferramentaria e Dispositivos",
      description: "Fabricação de ferramentas e dispositivos especializados para otimizar processos de produção industrial.",
      image: "/lovable-uploads/5747a4c1-c343-4946-a329-d3e6c45e6be9.png",
      tags: ["Ferramentas", "Dispositivos", "Produção"]
    },
    {
      title: "Moldes de Injeção de Precisão",
      description: "Desenvolvimento de moldes de injeção com tecnologia avançada, garantindo qualidade e durabilidade superior.",
      image: "/lovable-uploads/7de9727d-b15c-4acd-a2b3-8bc626ea3949.png",
      tags: ["Moldes", "Injeção", "Qualidade"]
    },
    {
      title: "Usinagem CNC Avançada",
      description: "Processos de usinagem CNC com tecnologia de ponta para componentes de alta complexidade e precisão.",
      image: "/lovable-uploads/7487f020-2969-4fea-93cc-7232587c319e.png",
      tags: ["CNC", "Precisão", "Tecnologia"]
    },
    {
      title: "Cilindros Pneumáticos Customizados",
      description: "Desenvolvimento e fabricação de cilindros pneumáticos sob medida para aplicações industriais específicas.",
      image: "/lovable-uploads/77db13a0-f3ab-40f1-ad6e-d00c2a3ca32b.png",
      tags: ["Pneumática", "Customização", "Industrial"]
    },
    {
      title: "Torneamento de Alta Precisão",
      description: "Operações de torneamento especializado para componentes que exigem tolerâncias rigorosas e acabamento superior.",
      image: "/lovable-uploads/4d1166a1-566a-4f33-a6fb-05a628da0ceb.png",
      tags: ["Torneamento", "Precisão", "Acabamento"]
    },
    {
      title: "Fresamento Industrial",
      description: "Processos de fresamento para usinagem de superfícies complexas e componentes de geometria avançada.",
      image: "/lovable-uploads/79615b86-054f-4f10-90ae-9bb561911010.png",
      tags: ["Fresamento", "Superfícies", "Geometria"]
    },
    {
      title: "Componentes de Alta Performance",
      description: "Fabricação de componentes industriais com padrões superiores de qualidade e durabilidade.",
      image: "/lovable-uploads/3b518978-4d9c-4d5b-bcf8-4485bc695d1b.png",
      tags: ["Componentes", "Performance", "Durabilidade"]
    },
    {
      title: "Peças Usinadas Especiais",
      description: "Desenvolvimento de peças sob medida para aplicações específicas, utilizando materiais e técnicas avançadas.",
      image: "/lovable-uploads/aec5fa4d-81c6-4c81-938b-e57e9900c236.png",
      tags: ["Peças Especiais", "Sob Medida", "Avançado"]
    }
  ];

  return (
    <section id="portfolio" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 md:mb-16 animate-fade-in text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Nosso <span className="text-primary">Portfólio</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            Explore alguns dos nossos projetos mais recentes de usinagem CNC, ferramentaria e sistemas pneumáticos. 
            Cada projeto demonstra nossa expertise e compromisso com a excelência em soluções industriais.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border border-border/50 overflow-hidden">
              <div className="relative overflow-hidden">
                <OptimizedImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-24 md:h-32 object-cover border-2 border-red-500 group-hover:scale-105 transition-transform duration-300"
                  loading={index < 6 ? "eager" : "lazy"}
                  priority={index < 6}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-2 md:p-3">
                <h3 className="text-xs md:text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="inline-flex items-center px-1 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

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
