
import { ArrowLeft, Download, Eye, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import QuoteModal from "@/components/QuoteModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOBreadcrumb from "@/components/SEOBreadcrumb";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PortfolioFull = () => {
  const navigate = useNavigate();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{image: string, title: string, description: string} | null>(null);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const portfolioItems = [
    { id: 1, image: "/lovable-uploads/7487f020-2969-4fea-93cc-7232587c319e.png", title: "Usinagem CNC de precisão", description: "Processo de usinagem CNC com alta precisão e qualidade para indústrias" },
    { id: 2, image: "/lovable-uploads/d268acc0-92e6-4fdb-b950-427519cc8d6f.png", title: "Usinagem de Bicos de Injeção Plástica", description: "Fabricação de bicos valvulados e componentes para injetoras com precisão dimensional excepcional" },
    { id: 3, image: "/lovable-uploads/4d1166a1-566a-4f33-a6fb-05a628da0ceb.png", title: "Torneamento de precisão", description: "Operação de torneamento para peças cilíndricas com máxima precisão" },
    { id: 4, image: "/lovable-uploads/79615b86-054f-4f10-90ae-9bb561911010.png", title: "Fresamento industrial", description: "Processo de fresamento para usinagem de superfícies complexas" },
    { id: 5, image: "/lovable-uploads/77db13a0-f3ab-40f1-ad6e-d00c2a3ca32b.png", title: "Fabricação de cilindros pneumáticos", description: "Desenvolvimento e fabricação de cilindros pneumáticos personalizados" },
    { id: 6, image: "/lovable-uploads/dd128e84-9545-4e4d-a57a-8aaca84f4a9b.png", title: "Cilindros pneumáticos em operação industrial", description: "Cilindro pneumático da JPD Usinagem em operação industrial de alta performance" },
    { id: 7, image: "/lovable-uploads/3b518978-4d9c-4d5b-bcf8-4485bc695d1b.png", title: "Bicos injetores usinados com precisão", description: "Fabricação de bicos injetores de alta precisão para aplicações industriais" },
    { id: 8, image: "/lovable-uploads/aec5fa4d-81c6-4c81-938b-e57e9900c236.png", title: "Usinagem em série para indústrias", description: "Produção em série de peças usinadas com qualidade consistente para grandes volumes" },
    { id: 9, image: "/lovable-uploads/209bf881-1ece-45ad-9b34-a76bd704a853.png", title: "Tratamento de peças de precisão", description: "Peças usinadas com acabamento e tratamento especial para aplicações críticas" },
    { id: 10, image: "/lovable-uploads/1159c5da-7355-4c50-9483-b457bb702d07.png", title: "Manutenção de componentes industriais", description: "Serviços especializados de manutenção e reparo de componentes industriais" },
    { id: 11, image: "/lovable-uploads/1bf1d819-ce80-415a-b87c-fd78e53be919.png", title: "Usinagem de arruelas e componentes", description: "Fabricação de arruelas e componentes de fixação com precisão dimensional" },
    { id: 12, image: "/lovable-uploads/a47de443-9f77-4dad-8b27-afbe4499fcb3.png", title: "Desenho 3D de peças utilizando SolidWorks", description: "Desenvolvimento de peças em 3D utilizando o software SolidWorks com precisão técnica" },
    { id: 13, image: "/lovable-uploads/b52c3490-e9ca-4a77-8890-a97adb936f28.png", title: "Desenho CAM software SolidWorks", description: "Programação CAM para usinagem automatizada através do SolidWorks" },
    { id: 14, image: "/lovable-uploads/e48e8e08-7abd-4564-bb6a-2f78a6c39ae7.png", title: "Desenho 3D de embalagem", description: "Desenvolvimento de projetos 3D para soluções de embalagem customizadas" },
    { id: 15, image: "/lovable-uploads/c790e369-fe03-4fd2-aeea-f3c5117ed598.png", title: "Manutenção de cilindros pneumáticos Parker", description: "Serviços especializados de manutenção e reparo em cilindros pneumáticos Parker" },
    { id: 16, image: "/lovable-uploads/62714cf4-a52d-41b2-8be3-ef32206484f5.png", title: "Cilindros Pneumáticos de precisão", description: "Linha completa de cilindros pneumáticos fabricados com alta precisão dimensional" },
    { id: 17, image: "/lovable-uploads/c04a5de3-d203-4738-84d5-9dfa43a46eee.png", title: "Usinagem de bicos rosqueáveis", description: "Fabricação de bicos com roscas de alta precisão para aplicações industriais específicas" },
    { id: 18, image: "/lovable-uploads/61e252e4-2932-493c-aeb8-9c567a147615.png", title: "Usinagem de roscas de precisão", description: "Processos especializados de usinagem para roscas de alta precisão e acabamento" },
    { id: 19, image: "/lovable-uploads/5bd32bfd-e0df-45a6-ac88-736216a53e2d.png", title: "Usinagem de roldanas para passagem de fiação", description: "Fabricação de roldanas especializadas para sistemas de passagem de fiação industrial" },
    { id: 20, image: "/lovable-uploads/6314b530-f73f-499a-abc1-f5c6f733b59b.png", title: "Usinagem em materiais plásticos", description: "Processos especializados de usinagem em diversos tipos de materiais plásticos técnicos" }
  ];

  const goBack = () => {
    navigate('/');
    // Scroll para o topo da página principal quando voltar
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Breadcrumb */}
      <SEOBreadcrumb />
      
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-3 md:px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-4">
              <Button 
                variant="outline" 
                onClick={goBack}
                className="flex items-center gap-2 text-xs md:text-sm"
              >
                <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
                Voltar
              </Button>
              <div>
                <h1 className="text-lg md:text-2xl font-bold text-foreground">JPD Usinagem - Portfólio Completo</h1>
                <p className="text-xs md:text-base text-muted-foreground">Galeria completa dos nossos projetos de usinagem, fresamento e torneamento</p>
              </div>
            </div>
            <Button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-red-600 hover:bg-red-700 text-white text-xs md:text-sm px-2 md:px-4"
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </header>

      {/* Portfolio Grid */}
      <main className="container mx-auto px-3 md:px-4 py-6 md:py-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-medium transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="h-6 w-6 md:h-8 md:w-8 p-0"
                    onClick={() => setSelectedImage({image: item.image, title: item.title, description: item.description})}
                  >
                    <Eye className="w-3 h-3 md:w-4 md:h-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-2 md:p-4">
                <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-xs md:text-sm">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border px-3 md:px-0">
          <p className="text-muted-foreground mb-4 text-sm md:text-base">
            Quer ver seu projeto aqui? Entre em contato conosco!
          </p>
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary-dark"
            onClick={() => setIsQuoteModalOpen(true)}
          >
            Solicitar Orçamento
          </Button>
        </div>
      </main>

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="portfolio"
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
