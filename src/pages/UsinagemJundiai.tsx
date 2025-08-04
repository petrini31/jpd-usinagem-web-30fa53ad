
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEOBreadcrumb from "@/components/SEOBreadcrumb";
import QuoteModal from "@/components/QuoteModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from "react";

const UsinagemJundiai = () => {
  const navigate = useNavigate();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Usinagem em Jundiaí - JPD Usinagem CNC | Torneamento e Fresamento";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Usinagem CNC em Jundiaí - JPD oferece serviços de torneamento, fresamento e fabricação de peças de precisão. Atendimento especializado na região de Jundiaí e Grande São Paulo.');
    }
  }, []);

  const services = [
    "Usinagem CNC de Precisão",
    "Torneamento de Peças Cilíndricas", 
    "Fresamento de Superfícies Complexas",
    "Fabricação de Cilindros Pneumáticos",
    "Usinagem de Auto Peças",
    "Usinagem para Equipamentos Agrícolas",
    "Ferramentaria Especializada",
    "Manutenção de Componentes Industriais"
  ];

  const differentials = [
    "Atendimento rápido em Jundiaí",
    "Equipamentos CNC de última geração",
    "Entrega dentro do prazo acordado", 
    "Qualidade certificada ISO",
    "Orçamento sem compromisso",
    "Coleta e entrega na região"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOBreadcrumb customItems={[
        { label: 'Início', href: '/' },
        { label: 'Usinagem em Jundiaí' }
      ]} />
      
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Usinagem em Jundiaí</h1>
              <p className="text-muted-foreground">Serviços especializados de usinagem CNC na região de Jundiaí</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Usinagem CNC de Precisão em <span className="text-primary">Jundiaí</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            A JPD Usinagem atende Jundiaí e região com serviços especializados de usinagem CNC, 
            torneamento, fresamento e fabricação de cilindros pneumáticos. Localizada estrategicamente 
            em Bom Jesus dos Perdões, oferecemos atendimento rápido e eficiente para toda a região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground"
              onClick={() => setIsQuoteModalOpen(true)}
            >
              Solicitar Orçamento em Jundiaí
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('tel:+5511958274054', '_self')}
            >
              <Phone className="w-4 h-4 mr-2" />
              (11) 95827-4054
            </Button>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Nossos Serviços de Usinagem em Jundiaí
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground">{service}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Por que escolher a JPD para usinagem em Jundiaí?
              </h3>
              <div className="space-y-4">
                {differentials.map((differential, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{differential}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted/30 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-foreground mb-4">
                Atendimento Especializado em Jundiaí
              </h4>
              <p className="text-muted-foreground mb-6">
                Nossa empresa está localizada estrategicamente para atender com rapidez e eficiência 
                toda a região de Jundiaí. Oferecemos coleta e entrega de peças, além de 
                consultoria técnica personalizada para cada projeto.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">Distância: Aproximadamente 30km de Jundiaí</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm">Tempo de entrega: 2-5 dias úteis</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center bg-muted/20 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Entre em Contato para Usinagem em Jundiaí
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              <span>(11) 95827-4054</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <span>comercial@jpdusinagem.com.br</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Bom Jesus dos Perdões - SP</span>
            </div>
          </div>
        </section>
      </main>

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="usinagem-jundiai"
      />
      <WhatsAppButton />
    </div>
  );
};

export default UsinagemJundiai;
