
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Phone, Mail, Clock, CheckCircle, Cog } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEOBreadcrumb from "@/components/SEOBreadcrumb";
import QuoteModal from "@/components/QuoteModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from "react";

const TorneamentoAtibaia = () => {
  const navigate = useNavigate();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Torneamento em Atibaia - JPD Usinagem | Tornearia de Precisão";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Torneamento de precisão em Atibaia - JPD oferece serviços especializados de tornearia, usinagem de peças cilíndricas e componentes industriais. Atendimento rápido em Atibaia e região.');
    }
  }, []);

  const torneamentoServices = [
    "Torneamento CNC de Alta Precisão",
    "Torneamento de Peças Cilíndricas", 
    "Usinagem de Eixos e Buchas",
    "Torneamento de Componentes Automotivos",
    "Fabricação de Pinos e Parafusos",
    "Torneamento de Peças Agrícolas",
    "Usinagem de Componentes Pneumáticos",
    "Acabamento e Polimento"
  ];

  const materials = [
    "Aço Carbono",
    "Aço Inoxidável",
    "Alumínio",
    "Bronze",
    "Latão",
    "Ferro Fundido",
    "Plásticos Técnicos",
    "Ligas Especiais"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOBreadcrumb customItems={[
        { label: 'Início', href: '/' },
        { label: 'Torneamento em Atibaia' }
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
              <h1 className="text-2xl font-bold text-foreground">Torneamento em Atibaia</h1>
              <p className="text-muted-foreground">Tornearia de precisão com tecnologia CNC</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Torneamento de Precisão em <span className="text-primary">Atibaia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Especialistas em torneamento CNC para Atibaia e região. A JPD Usinagem oferece 
            serviços de tornearia com máxima precisão dimensional, atendendo desde peças unitárias 
            até produções seriadas com qualidade garantida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground"
              onClick={() => setIsQuoteModalOpen(true)}
            >
              <Cog className="w-4 h-4 mr-2" />
              Solicitar Orçamento
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('tel:+5511958274054', '_self')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Ligar Agora
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Serviços de Torneamento em Atibaia
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {torneamentoServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Cog className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground text-sm">{service}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Materials and Precision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Materiais Trabalhados
              </h3>
              <p className="text-muted-foreground mb-6">
                Nossa tornearia em Atibaia trabalha com diversos tipos de materiais, 
                garantindo a melhor técnica para cada aplicação específica.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {materials.map((material, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{material}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Precisão Garantida
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Tolerância dimensional</span>
                  <span className="font-semibold text-foreground">±0.01mm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Rugosidade superficial</span>
                  <span className="font-semibold text-foreground">Ra 0.8 μm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Tempo de entrega</span>
                  <span className="font-semibold text-foreground">2-7 dias</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Capacidade máxima</span>
                  <span className="font-semibold text-foreground">Ø500mm</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Advantage */}
        <section className="mb-16 text-center bg-muted/20 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Vantagens para Clientes de Atibaia
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-3">
              <MapPin className="w-8 h-8 text-primary mx-auto" />
              <h4 className="font-semibold">Proximidade Estratégica</h4>
              <p className="text-sm text-muted-foreground">
                Localização próxima a Atibaia facilita coleta e entrega de peças
              </p>
            </div>
            <div className="space-y-3">
              <Clock className="w-8 h-8 text-primary mx-auto" />
              <h4 className="font-semibold">Entrega Rápida</h4>
              <p className="text-sm text-muted-foreground">
                Atendimento ágil com prazos reduzidos para a região
              </p>
            </div>
            <div className="space-y-3">
              <CheckCircle className="w-8 h-8 text-primary mx-auto" />
              <h4 className="font-semibold">Qualidade Certificada</h4>
              <p className="text-sm text-muted-foreground">
                Controle rigoroso de qualidade em todas as etapas
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Precisa de Torneamento em Atibaia?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para um orçamento personalizado. Nossa equipe 
            técnica está pronta para atender suas necessidades de torneamento com 
            a máxima qualidade e agilidade.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-primary-foreground"
            onClick={() => setIsQuoteModalOpen(true)}
          >
            Solicitar Orçamento Agora
          </Button>
        </section>
      </main>

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)}
        source="torneamento-atibaia"
      />
      <WhatsAppButton />
    </div>
  );
};

export default TorneamentoAtibaia;
