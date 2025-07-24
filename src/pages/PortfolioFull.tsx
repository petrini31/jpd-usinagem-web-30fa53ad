
import { ArrowLeft, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import QuoteModal from "@/components/QuoteModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from "react";

const PortfolioFull = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const portfolioItems = [
    { id: 1, image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=400&h=300", title: "Peça CNC Complexa", description: "Componente aeroespacial de alta precisão" },
    { id: 2, image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=400&h=300", title: "Sistema Pneumático", description: "Cilindro pneumático personalizado" },
    { id: 3, image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400&h=300", title: "Ferramental Industrial", description: "Molde de injeção de precisão" },
    { id: 4, image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400&h=300", title: "Componente Automotivo", description: "Peça usinada em alumínio" },
    { id: 5, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400&h=300", title: "Circuito Eletrônico", description: "Base usinada para componentes" },
    { id: 6, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=400&h=300", title: "Dispositivo Médico", description: "Componente em titânio" },
    { id: 7, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=300", title: "Máquina Especial", description: "Conjunto mecânico completo" },
    { id: 8, image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=400&h=300", title: "Protótipo Industrial", description: "Desenvolvimento de conceito" },
    { id: 9, image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&q=80&w=400&h=300", title: "Ferramenta de Corte", description: "Usinagem de alta dureza" },
    { id: 10, image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400&h=300", title: "Sistema Hidráulico", description: "Bloco manifold personalizado" },
    { id: 11, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=300", title: "Componente Naval", description: "Peça em bronze naval" },
    { id: 12, image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=400&h=300", title: "Equipamento Laboratório", description: "Peça de alta precisão" },
    { id: 13, image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80&w=400&h=300", title: "Dispositivo Eletrônico", description: "Carcaça usinada" },
    { id: 14, image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=400&h=300", title: "Componente Robótico", description: "Junta articulada" },
    { id: 15, image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80&w=400&h=300", title: "Peça Arquitetural", description: "Elemento decorativo" },
    { id: 16, image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&q=80&w=400&h=300", title: "Componente Drone", description: "Peça em liga leve" },
    { id: 17, image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&q=80&w=400&h=300", title: "Estrutura Industrial", description: "Suporte usinado" },
    { id: 18, image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&q=80&w=400&h=300", title: "Sistema de Fixação", description: "Dispositivo de montagem" },
    { id: 19, image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=400&h=300", title: "Componente Ótico", description: "Suporte de lente" },
    { id: 20, image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80&w=400&h=300", title: "Peça de Vedação", description: "Anel de vedação especial" },
    { id: 21, image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&q=80&w=400&h=300", title: "Equipamento Petroquímico", description: "Resistente à corrosão" },
    { id: 22, image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80&w=400&h=300", title: "Componente Espacial", description: "Liga de titânio" },
    { id: 23, image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&q=80&w=400&h=300", title: "Ferramenta Especial", description: "Molde personalizado" },
    { id: 24, image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80&w=400&h=300", title: "Sistema de Transmissão", description: "Engrenagem de precisão" },
    { id: 25, image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80&w=400&h=300", title: "Componente Têxtil", description: "Peça para tecelagem" },
    { id: 26, image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&q=80&w=400&h=300", title: "Estrutura Transparente", description: "Suporte em acrílico" },
    { id: 27, image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?auto=format&fit=crop&q=80&w=400&h=300", title: "Sistema Elevação", description: "Componente de elevador" },
    { id: 28, image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&q=80&w=400&h=300", title: "Peça Decorativa", description: "Elemento ornamental" },
    { id: 29, image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&q=80&w=400&h=300", title: "Componente Segurança", description: "Sistema de travamento" },
    { id: 30, image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&q=80&w=400&h=300", title: "Estrutura Modular", description: "Sistema de conexão" },
    { id: 31, image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80&w=400&h=300", title: "Equipamento Hospitalar", description: "Componente médico" },
    { id: 32, image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?auto=format&fit=crop&q=80&w=400&h=300", title: "Sistema de Refrigeração", description: "Trocador de calor" },
    { id: 33, image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80&w=400&h=300", title: "Componente Acústico", description: "Peça para áudio" },
    { id: 34, image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80&w=400&h=300", title: "Estrutura Religiosa", description: "Ornamento em bronze" },
    { id: 35, image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&q=80&w=400&h=300", title: "Sistema Iluminação", description: "Suporte para LED" },
    { id: 36, image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=400&h=300", title: "Componente Paisagístico", description: "Elemento de jardim" }
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
              <h1 className="text-2xl font-bold text-foreground">JPD Usinagem - Portfólio Completo</h1>
              <p className="text-muted-foreground">Galeria completa dos nossos projetos</p>
            </div>
          </div>
        </div>
      </header>

      {/* Portfolio Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-medium transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2 text-sm">
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
        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground mb-4">
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
      />
      
      <WhatsAppButton />
    </div>
  );
};

export default PortfolioFull;
