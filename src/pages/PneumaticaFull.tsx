import { ArrowLeft, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuoteModal from "@/components/QuoteModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import OptimizedImage from "@/components/OptimizedImage";
import SEOHead from "@/components/SEOHead";
import SEOBreadcrumb from "@/components/SEOBreadcrumb";
import useSchemaMarkup from "@/hooks/useSchemaMarkup";

const PneumaticaFull = () => {
  const navigate = useNavigate();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Schema Markup para Service
  useSchemaMarkup({
    type: 'Service',
    data: {
      name: 'Fabricação de Cilindros Pneumáticos Personalizados',
      description: 'Especialistas em fabricação de cilindros pneumáticos personalizados em Bom Jesus dos Perdões, oferecendo soluções pneumáticas para automação industrial.',
      serviceType: 'Fabricação de Cilindros Pneumáticos',
      areaServed: ['Bom Jesus dos Perdões', 'Atibaia', 'Bragança Paulista', 'São Paulo', 'SP']
    }
  });

  // Schema Markup para Product
  useSchemaMarkup({
    type: 'Product',
    data: {
      name: 'Cilindros Pneumáticos JPD Usinagem',
      description: 'Cilindros pneumáticos de alta performance fabricados com precisão para aplicações industriais e automação.',
      category: 'Equipamentos Pneumáticos',
      image: '/pneumatica.png'
    }
  });

  const goBack = () => {
    navigate('/');
  };

  const breadcrumbItems = [
    { label: "Cilindros Pneumáticos Industriais", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Cilindros Pneumáticos JPD Usinagem - Fabricação em Bom Jesus dos Perdões SP"
        description="Especialistas em fabricação de cilindros pneumáticos personalizados em Bom Jesus dos Perdões. Soluções pneumáticas para automação industrial em Atibaia e SP."
        keywords="cilindros pneumáticos, fabricação cilindros, automação pneumática, bom jesus dos perdões, atibaia sp, bragança paulista"
        ogTitle="Cilindros Pneumáticos - Fabricação Personalizada JPD Usinagem"
        ogDescription="Cilindros pneumáticos de alta performance fabricados em Bom Jesus dos Perdões para automação industrial em SP."
        canonicalUrl="https://jpdusinagem.com/cilindros-pneumaticos"
      />

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
              <p className="text-muted-foreground">Soluções personalizadas para sua indústria</p>
            </div>
          </div>
        </div>
      </header>

      <SEOBreadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="py-12 md:py-24 bg-muted/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Cilindros <span className="text-primary">Pneumáticos</span> de Alta Performance
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Descubra a excelência em cilindros pneumáticos com a JPD Usinagem. Projetados para
                oferecer desempenho superior e confiabilidade em suas aplicações industriais.
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Projetos personalizados para sua necessidade
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Alta durabilidade e resistência
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Suporte técnico especializado
                </li>
              </ul>
            </div>

            {/* Image */}
            <div>
              <OptimizedImage
                src="/pneumatica.png"
                alt="Cilindros Pneumáticos JPD Usinagem"
                className="w-full rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
            Características <span className="text-primary">Essenciais</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Cards */}
            <Card className="bg-background border border-border/50 hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">
                  Design Personalizado
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Projetamos cilindros pneumáticos sob medida para atender às suas necessidades
                  específicas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Nossa equipe de engenharia trabalha em estreita colaboração com você para criar
                  soluções inovadoras e eficientes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border border-border/50 hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">
                  Materiais de Alta Qualidade
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Utilizamos materiais de primeira linha para garantir a durabilidade e o
                  desempenho dos nossos cilindros.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Nossos cilindros são fabricados com aço, alumínio e outros materiais resistentes
                  à corrosão e ao desgaste.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border border-border/50 hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">
                  Tecnologia de Ponta
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Empregamos as mais recentes tecnologias de fabricação para garantir a precisão e
                  a qualidade dos nossos produtos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Nossos processos de usinagem CNC e controle de qualidade garantem a excelência
                  dos nossos cilindros.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
            Entre em <span className="text-primary">Contato</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Cards */}
            <Card className="bg-background border border-border/50 hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Phone className="w-5 h-5 mr-2 text-primary" />
                  Telefone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ligue para nós e converse com um de nossos especialistas.
                </p>
                <p className="text-foreground font-medium mt-2">
                  +55 (11) 95827-4054
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border border-border/50 hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Mail className="w-5 h-5 mr-2 text-primary" />
                  E-mail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Envie-nos um e-mail e responderemos o mais breve possível.
                </p>
                <p className="text-foreground font-medium mt-2">
                  contato@jpdusinagem.com
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border border-border/50 hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Visite nossa fábrica em Bom Jesus dos Perdões.
                </p>
                <p className="text-foreground font-medium mt-2">
                  Rua da Usinagem, 123 - Bairro Industrial
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 md:py-24 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Solicite um <span className="text-primary">Orçamento</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Entre em contato conosco para discutir suas necessidades e obter um orçamento
            personalizado.
          </p>
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary-dark"
            onClick={() => setIsQuoteModalOpen(true)}
          >
            Solicitar Orçamento
          </Button>
        </div>
      </section>

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
      
      <WhatsAppButton />
    </div>
  );
};

export default PneumaticaFull;
