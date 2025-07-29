import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";

const portfolioItems = [
  { id: 1, image: "/lovable-uploads/7487f020-2969-4fea-93cc-7232587c319e.png", title: "Usinagem CNC de precisão", description: "Processo de usinagem CNC com alta precisão e qualidade" },
  { id: 2, image: "/lovable-uploads/4d1166a1-566a-4f33-a6fb-05a628da0ceb.png", title: "Torneamento", description: "Operação de torneamento para peças cilíndricas" },
  { id: 3, image: "/lovable-uploads/79615b86-054f-4f10-90ae-9bb561911010.png", title: "Fresamento", description: "Processo de fresamento para usinagem de superfícies complexas" },
  { id: 4, image: "/lovable-uploads/77db13a0-f3ab-40f1-ad6e-d00c2a3ca32b.png", title: "Fabricação de cilindros pneumáticos", description: "Desenvolvimento e fabricação de cilindros pneumáticos personalizados" },
  { id: 5, image: "/lovable-uploads/dd128e84-9545-4e4d-a57a-8aaca84f4a9b.png", title: "Nosso cilindro pneumático em atuação", description: "Cilindro pneumático da JPD Usinagem em operação industrial" },
  { id: 6, image: "/lovable-uploads/3b518978-4d9c-4d5b-bcf8-4485bc695d1b.png", title: "Bicos injetores", description: "Fabricação de bicos injetores de alta precisão" },
  { id: 7, image: "/lovable-uploads/aec5fa4d-81c6-4c81-938b-e57e9900c236.png", title: "Usinagem em série", description: "Produção em série de peças usinadas com qualidade consistente" },
  { id: 8, image: "/lovable-uploads/209bf881-1ece-45ad-9b34-a76bd704a853.png", title: "Tratamento de peças de precisão", description: "Peças usinadas com acabamento e tratamento especial" },
  { id: 9, image: "/lovable-uploads/1159c5da-7355-4c50-9483-b457bb702d07.png", title: "Manutenção de componentes", description: "Serviços de manutenção e reparo de componentes industriais" },
  { id: 10, image: "/lovable-uploads/1bf1d819-ce80-415a-b87c-fd78e53be919.png", title: "Usinagem de arruelas", description: "Fabricação de arruelas e componentes de fixação" },
];

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

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
          {portfolioItems.slice(0, 6).map((project) => (
            <Card key={project.id} className="group hover:shadow-medium transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
            <Link to="/portfolio-completo-usinagem">
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
