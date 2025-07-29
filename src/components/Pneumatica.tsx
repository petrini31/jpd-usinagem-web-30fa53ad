
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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Especialistas em Cilindros Pneumáticos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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

          {/* Coluna de imagens */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <OptimizedImage
                src="/lovable-uploads/c389b1c3-66fe-4964-8cf6-c6b4966a9e60.png"
                alt="Cilindro pneumático de precisão"
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <OptimizedImage
                src="/lovable-uploads/a8d9cbcf-ad1f-41fa-830c-c7b9fcdbed75.png"
                alt="Sistema pneumático industrial"
                className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div className="space-y-4 pt-8">
              <OptimizedImage
                src="/lovable-uploads/6c709c11-9b63-4474-a89d-c18c44a9c825.png"
                alt="Componentes pneumáticos"
                className="w-full h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <OptimizedImage
                src="/lovable-uploads/ba3a95b9-2493-4b0f-95b4-e5f0ef359808.png"
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
