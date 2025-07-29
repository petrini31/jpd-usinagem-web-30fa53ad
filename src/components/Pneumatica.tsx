
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Gauge, Shield, Award, ExternalLink } from "lucide-react";
import { useState } from "react";
import QuoteModal from "./QuoteModal";
import { useNavigate } from "react-router-dom";

const Pneumatica = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const navigate = useNavigate();

  const features = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Personalização Total",
      description: "Cilindros desenvolvidos sob medida para suas necessidades específicas"
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Alta Performance",
      description: "Máxima eficiência e durabilidade em aplicações industriais"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Qualidade Garantida",
      description: "Rigorosos testes de qualidade e controle de processo"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expertise Comprovada",
      description: "Anos de experiência em soluções pneumáticas industriais"
    }
  ];

  return (
    <section id="pneumatica" className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Soluções <span className="text-transparent bg-clip-text bg-gradient-primary">Pneumáticas</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
            de Alta Performance
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Texto principal - alinhado à esquerda */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed text-left">
              Nossa expertise em fabricação de cilindros pneumáticos personalizados para usinagem Atibaia, fresamento Bragança Paulista e torneamento Bom Jesus dos Perdões garante soluções eficientes e duráveis para suas aplicações industriais em toda região de São Paulo. Cada projeto é desenvolvido com precisão técnica e foco na performance.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => setShowQuoteModal(true)}
                className="bg-primary text-primary-foreground hover:bg-primary-dark hover:scale-105 transition-all duration-300 px-8 py-6 text-lg shadow-strong"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                onClick={() => navigate('/pneumatica')}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
              >
                Ver Mais
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Grid de imagens compacto */}
          <div className="grid grid-cols-2 gap-4 animate-slide-up">
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/ba3a95b9-2493-4b0f-95b4-e5f0ef359808.png" 
                alt="Cilindro pneumático de precisão"
                className="w-full h-48 object-cover rounded-lg shadow-medium hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="/lovable-uploads/fe2271b0-1ea4-40c5-a9db-7fdb22004661.png" 
                alt="Sistema pneumático industrial"
                className="w-full h-32 object-cover rounded-lg shadow-medium hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src="/lovable-uploads/39454b83-b7cf-4cbe-83d6-9609d65aa701.png" 
                alt="Componentes pneumáticos"
                className="w-full h-32 object-cover rounded-lg shadow-medium hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="/lovable-uploads/dec3d1a6-b3e5-42f1-b536-d50f5322c31c.png" 
                alt="Aplicação pneumática"
                className="w-full h-48 object-cover rounded-lg shadow-medium hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-up">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-card border border-border/50 hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <QuoteModal 
        isOpen={showQuoteModal} 
        onClose={() => setShowQuoteModal(false)} 
        source="pneumatica"
      />
    </section>
  );
};

export default Pneumatica;
