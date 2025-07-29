import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuoteModal from "@/components/QuoteModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OptimizedImage from "@/components/OptimizedImage";

const PneumaticaFull = () => {
  const navigate = useNavigate();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goBack = () => {
    navigate('/');
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
              <h1 className="text-2xl font-bold text-foreground">JPD Usinagem - Cilindros Pneumáticos</h1>
              <p className="text-muted-foreground">Especialistas em soluções pneumáticas</p>
            </div>
          </div>
        </div>
      </header>

      <main className="py-8">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Cilindros <span className="text-primary">Pneumáticos</span> de Alta Performance
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Na JPD Usinagem, desenvolvemos cilindros pneumáticos sob medida para suas necessidades industriais,
                  garantindo máxima eficiência, durabilidade e confiabilidade em cada projeto.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-background p-6 rounded-lg shadow-sm border">
                    <h3 className="font-semibold text-foreground mb-2">Projetos Personalizados</h3>
                    <p className="text-muted-foreground text-sm">
                      Desenvolvemos cilindros pneumáticos específicos para sua aplicação
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm border">
                    <h3 className="font-semibold text-foreground mb-2">Alta Durabilidade</h3>
                    <p className="text-muted-foreground text-sm">
                      Materiais de qualidade superior e processos de fabricação rigorosos
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm border">
                    <h3 className="font-semibold text-foreground mb-2">Suporte Técnico</h3>
                    <p className="text-muted-foreground text-sm">
                      Equipe especializada para orientação e manutenção
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm border">
                    <h3 className="font-semibold text-foreground mb-2">Entrega Rápida</h3>
                    <p className="text-muted-foreground text-sm">
                      Prazos otimizados sem comprometer a qualidade
                    </p>
                  </div>
                </div>

                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => setIsQuoteModalOpen(true)}
                >
                  Solicitar Orçamento Personalizado
                </Button>
              </div>
              
              <div className="order-first lg:order-last">
                <OptimizedImage
                  src="/pneumatica.png"
                  alt="Cilindros Pneumáticos JPD Usinagem"
                  className="rounded-lg shadow-2xl"
                  priority={true}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Especificações Técnicas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-4">Pressões de Trabalho</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Pressão mínima: 2 bar</li>
                  <li>• Pressão máxima: 10 bar</li>
                  <li>• Pressão recomendada: 6 bar</li>
                </ul>
              </div>
              
              <div className="bg-background p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-4">Diâmetros Disponíveis</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• 20mm a 200mm</li>
                  <li>• Cursos de 10mm a 2000mm</li>
                  <li>• Tolerâncias precisas</li>
                </ul>
              </div>
              
              <div className="bg-background p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-4">Materiais</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Alumínio anodizado</li>
                  <li>• Aço inox 304/316</li>
                  <li>• Vedações NBR/Viton</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Galeria de Projetos
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <OptimizedImage
                src="/lovable-uploads/77db13a0-f3ab-40f1-ad6e-d00c2a3ca32b.png"
                alt="Fabricação de cilindros pneumáticos"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <OptimizedImage
                src="/lovable-uploads/dd128e84-9545-4e4d-a57a-8aaca84f4a9b.png"
                alt="Cilindro pneumático em operação"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <OptimizedImage
                src="/lovable-uploads/0b40a727-907c-4275-91b3-c9f6b08c64f0.png"
                alt="Linha de cilindros pneumáticos"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <OptimizedImage
                src="/lovable-uploads/c8fafa21-468e-4af3-a404-6e5ab6bcfc69.png"
                alt="Manutenção de cilindros pneumáticos Parker"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <OptimizedImage
                src="/lovable-uploads/7487f020-2969-4fea-93cc-7232587c319e.png"
                alt="Usinagem CNC de precisão"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <OptimizedImage
                src="/lovable-uploads/4d1166a1-566a-4f33-a6fb-05a628da0ceb.png"
                alt="Processo de torneamento"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Precisa de um Cilindro Pneumático Personalizado?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nossa equipe técnica está pronta para desenvolver a solução pneumática ideal para sua aplicação.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Solicitar Orçamento
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open('https://wa.me/5511958274054', '_blank')}
              >
                Falar via WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
      
      <WhatsAppButton />
    </div>
  );
};

export default PneumaticaFull;
