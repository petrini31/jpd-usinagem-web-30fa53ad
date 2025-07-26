
import { ArrowLeft, Eye, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import QuoteModal from "@/components/QuoteModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from "react";

const PortfolioFull = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{image: string, title: string, description: string} | null>(null);
  
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
    { id: 11, image: "/lovable-uploads/ba3a95b9-2493-4b0f-95b4-e5f0ef359808.png", title: "Desenho 3D de peças utilizando o software SolidWorks", description: "Modelagem 3D precisa utilizando tecnologia SolidWorks para desenvolvimento de peças" },
    { id: 12, image: "/lovable-uploads/0d9ad922-c4a5-49e8-86f4-bb6a70b5f8a0.png", title: "Desenho CAM software SolidWorks", description: "Programação CAM para usinagem automatizada através do SolidWorks" },
    { id: 13, image: "/lovable-uploads/a522d4a4-fb2b-4475-9d48-70f368558ed1.png", title: "Desenho 3D de embalagem", description: "Desenvolvimento de projetos 3D para soluções de embalagem industrial" },
    { id: 14, image: "/lovable-uploads/c8fafa21-468e-4af3-a404-6e5ab6bcfc69.png", title: "Manutenção de cilindros pneumáticos Parker", description: "Serviços especializados de manutenção e reparo em cilindros pneumáticos Parker" },
    { id: 15, image: "/lovable-uploads/0b40a727-907c-4275-91b3-c9f6b08c64f0.png", title: "Cilindros Pneumáticos", description: "Linha completa de cilindros pneumáticos fabricados com alta precisão" },
    { id: 16, image: "/lovable-uploads/d935ac2b-69a0-4605-97a9-9ed833328812.png", title: "Usinagem de bicos rosqueáveis", description: "Fabricação de bicos com roscas de alta precisão para aplicações industriais" },
    { id: 17, image: "/lovable-uploads/fe9a8f7f-8375-4ca9-ad80-c2d41477588f.png", title: "Usinagem de roscas precisas", description: "Processos especializados de usinagem para roscas de alta precisão" },
    { id: 18, image: "/lovable-uploads/b9bfc907-c347-4aa3-bc9c-0d01b83eeecf.png", title: "Usinagem de roldanas para passagem de fiação", description: "Fabricação de roldanas especializadas para sistemas de passagem de fiação" },
    { id: 19, image: "/lovable-uploads/2690f737-f123-4d40-bf5f-a5a449e4f707.png", title: "Usinagem em materiais plásticos", description: "Processos especializados de usinagem em diversos tipos de materiais plásticos" }
  ];

  const goBack = () => {
    window.close();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={goBack}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-foreground">JPD Usinagem - Portfólio Completo</h1>
              <p className="text-sm md:text-base text-muted-foreground">Galeria completa dos nossos projetos</p>
            </div>
          </div>
        </div>
      </header>

      {/* Portfolio Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-medium transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="h-8 w-8 p-0"
                    onClick={() => setSelectedImage({image: item.image, title: item.title, description: item.description})}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-2 md:p-4">
                <h3 className="font-semibold text-foreground text-xs sm:text-sm md:text-base line-clamp-2">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {item.description}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground mb-4 text-sm md:text-base">
            Quer ver seu projeto aqui? Entre em contato conosco!
          </p>
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary-dark text-sm md:text-base"
            onClick={() => setIsQuoteModalOpen(true)}
          >
            Solicitar Orçamento
          </Button>
        </div>
      </main>

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
      
      {/* Image Viewer Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0 shadow-none">
          <div className="relative bg-background rounded-lg overflow-hidden shadow-2xl">
            <DialogClose className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background rounded-full p-2 transition-colors">
              <X className="w-4 h-4" />
            </DialogClose>
            
            {selectedImage && (
              <>
                <div className="relative">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                </div>
                
                <div className="p-4 md:p-6 border-t border-border">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {selectedImage.description}
                  </p>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
      
      <WhatsAppButton />
    </div>
  );
};

export default PortfolioFull;
