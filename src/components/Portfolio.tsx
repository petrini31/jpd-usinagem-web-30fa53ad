
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import OptimizedImage from "./OptimizedImage";

const portfolioItems = [
  { id: 1, image: "/lovable-uploads/7487f020-2969-4fea-93cc-7232587c319e.png", title: "Usinagem CNC de precisão", description: "Processo de usinagem CNC com alta precisão e qualidade" },
  { id: 2, image: "/lovable-uploads/4d1166a1-566a-4f33-a6fb-05a628da0ceb.png", title: "Torneamento", description: "Operação de torneamento para peças cilíndricas" },
  { id: 3, image: "/lovable-uploads/79615b86-054f-4f10-90ae-9bb561911010.png", title: "Fresamento", description: "Processo de fresamento para usinagem de superfícies complexas" },
  { id: 4, image: "/lovable-uploads/77db13a0-f3ab-40f1-ad6e-d00c2a3ca32b.png", title: "Fabricação de cilindros pneumáticos", description: "Desenvolvimento e fabricação de cilindros pneumáticos personalizados" },
  { id: 5, image: "/lovable-uploads/dd128e84-9545-4e4d-a57a-8aaca84f4a9b.png", title: "Nosso cilindro pneumático em atuação", description: "Cilindro pneumático da JPD Usinagem em operação industrial" },
  { id: 6, image: "/lovable-uploads/3b518978-4d9c-4d5b-bcf8-4485bc695d1b.png", title: "Bicos injetores", description: "Fabricação de bicos injetores de alta precisão" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nosso Portfólio de <span className="text-primary">Usinagem CNC</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Confira alguns dos projetos desenvolvidos pela JPD Usinagem em Bom Jesus dos Perdões e região
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((project) => (
            <Card key={project.id} className="group hover:shadow-medium transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <OptimizedImage
                  src={project.image}
                  alt={project.title}
                  className="group-hover:scale-105 transition-transform duration-300"
                  aspectRatio="aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2 text-sm">
                  {project.title}
                </h3>
                {project.description && (
                  <p className="text-xs text-muted-foreground">
                    {project.description}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary-dark"
          >
            <Link to="/portfolio-full">
              Ver Portfólio Completo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
