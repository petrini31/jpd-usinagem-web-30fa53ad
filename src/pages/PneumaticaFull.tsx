import { ArrowLeft, MessageCircle, Phone, Mail, MapPin, CheckCircle2, Settings, Wrench, Cog, Clock, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const PneumaticaFull = () => {
  const navigate = useNavigate();

  const handleQuoteRequest = () => {
    // Redireciona para a página principal na seção de orçamento
    window.location.href = '/#orcamento';
  };

  const advantages = [
    "Projetos personalizados sob medida",
    "Alta performance e durabilidade",
    "Materiais de alta qualidade",
    "Testes rigorosos de qualidade",
    "Suporte técnico especializado"
  ];

  const applications = [
    "Automação industrial",
    "Equipamentos de movimentação",
    "Sistemas de prensas e estampas",
    "Máquinas especiais"
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle2,
      title: "Qualidade Superior",
      description: "Garantimos a mais alta qualidade em cada cilindro pneumático que produzimos."
    },
    {
      icon: Settings,
      title: "Personalização Total",
      description: "Projetamos cilindros pneumáticos que atendem às suas necessidades específicas."
    },
    {
      icon: Wrench,
      title: "Engenharia Especializada",
      description: "Nossa equipe de engenheiros está pronta para criar soluções inovadoras."
    },
    {
      icon: Cog,
      title: "Tecnologia Avançada",
      description: "Utilizamos tecnologia de ponta para garantir precisão e eficiência."
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Cumprimos prazos rigorosos para que você não precise esperar."
    },
    {
      icon: Shield,
      title: "Confiabilidade",
      description: "Nossos cilindros pneumáticos são construídos para durar."
    },
    {
      icon: Award,
      title: "Experiência",
      description: "Anos de experiência no mercado garantem a excelência de nossos produtos."
    }
  ];

  const contactInfo = {
    phone: "55 11 1234-5678",
    email: "contato@jpdusinagem.com.br",
    address: "Rua da Indústria, 123 - São Paulo, SP"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar ao Site
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                onClick={handleQuoteRequest}
                className="bg-primary text-primary-foreground hover:bg-primary-dark"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-8">
            Cilindros Pneumáticos Personalizados
          </h1>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Soluções pneumáticas de alta performance, projetadas sob medida para 
            sua aplicação. Conte com a JPD Usinagem para cilindros pneumáticos 
            que garantem eficiência, durabilidade e precisão.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleQuoteRequest}
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
            >
              Solicitar Orçamento Agora
            </Button>
            <Button 
              onClick={() => window.open('https://wa.me/5511958274054', '_blank')}
              size="lg"
              variant="outline"
              className="border-background text-background hover:bg-background hover:text-foreground"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Fale Conosco no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Vantagens dos Nossos Cilindros Pneumáticos
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <li key={index} className="flex items-center gap-4 text-lg">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                {advantage}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Aplicações dos Nossos Cilindros Pneumáticos
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <li key={index} className="flex items-center gap-4 text-lg">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                {application}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Por Que Escolher a JPD Usinagem?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <item.icon className="w-6 h-6 text-primary" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Precisa de Cilindros Pneumáticos Personalizados?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Nossa equipe de especialistas está pronta para desenvolver a solução perfeita 
            para sua aplicação. Entre em contato e solicite seu orçamento personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleQuoteRequest}
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
            >
              Solicitar Orçamento Detalhado
            </Button>
            <Button 
              onClick={() => window.open('https://wa.me/5511958274054', '_blank')}
              size="lg"
              variant="outline"
              className="border-background text-background hover:bg-background hover:text-foreground"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Entre em Contato Conosco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Informações de Contato
              </h3>
              <p className="flex items-center gap-2 text-lg mb-2">
                <Phone className="w-5 h-5 text-muted-foreground" />
                {contactInfo.phone}
              </p>
              <p className="flex items-center gap-2 text-lg mb-2">
                <Mail className="w-5 h-5 text-muted-foreground" />
                {contactInfo.email}
              </p>
              <p className="flex items-center gap-2 text-lg">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                {contactInfo.address}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Formulário de Contato
              </h3>
              <p>Em breve, um formulário de contato estará disponível aqui.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary text-center">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} JPD Usinagem. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default PneumaticaFull;
