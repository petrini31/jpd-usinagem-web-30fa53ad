
import { Button } from "@/components/ui/button";
import QuoteModal from "./QuoteModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OptimizedImage from "./OptimizedImage";

const Pneumatica = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleVerMais = () => {
    navigate('/pneumatica');
  };

  return (
    <section id="pneumatica" className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            Especialistas em <span className="text-primary">Cilindros Pneumáticos</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl">
            Desenvolvimento e fabricação de cilindros pneumáticos personalizados com 
            tecnologia de ponta e qualidade incomparável
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna de texto */}
          <div className="space-y-6">
            <div className="text-left space-y-4">
              <h3 className="text-2xl font-bold text-primary">Nossa Expertise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nossa expertise em fabricação de cilindros pneumáticos personalizados para usinagem Atibaia, 
                fresamento Bragança Paulista e torneamento Bom Jesus dos Perdões garante soluções eficientes 
                e duráveis para suas aplicações industriais em toda região de São Paulo. Cada projeto é 
                desenvolvido com precisão técnica e foco na performance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Características:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Alta durabilidade</li>
                  <li>• Precisão dimensional</li>
                  <li>• Resistência à corrosão</li>
                  <li>• Performance superior</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Aplicações:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Automação industrial</li>
                  <li>• Linhas de produção</li>
                  <li>• Equipamentos CNC</li>
                  <li>• Sistemas pneumáticos</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-primary text-primary-foreground hover:bg-primary-dark px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Solicitar Orçamento
              </Button>
              <Button 
                onClick={handleVerMais}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                Ver Mais
              </Button>
            </div>
          </div>

          {/* Coluna de imagens - substituindo pelas novas imagens */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <OptimizedImage
                src="/lovable-uploads/35e6299d-9a61-4325-acb4-7152297159c9.webp"
                alt="Cilindro pneumático de precisão"
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <OptimizedImage
                src="/lovable-uploads/a029f8f6-79e0-4060-9302-8e14e10ecbf0.webp"
                alt="Sistema pneumático industrial"
                className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div className="space-y-4 pt-8">
              <OptimizedImage
                src="/lovable-uploads/dca69ce5-79d3-4cdd-a1de-6e4a0344daa7.webp"
                alt="Componentes pneumáticos"
                className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <OptimizedImage
                src="/lovable-uploads/5a5b397a-73d5-43f2-b1c5-299b8039b70a.webp"
                alt="Cilindro pneumático personalizado"
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>

        <QuoteModal 
          isOpen={isQuoteModalOpen} 
          onClose={() => setIsQuoteModalOpen(false)} 
          source="pneumatica"
        />
      </div>
    </section>
  );
};

export default Pneumatica;
