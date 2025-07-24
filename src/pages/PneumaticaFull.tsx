import { useState } from "react";
import { ArrowLeft, MessageCircle, Phone, Mail, MapPin, CheckCircle2, Settings, Wrench, Cog, Clock, Shield, Award, Send, User, Building, MessageSquare, Factory, Gauge, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import QuoteModal from "@/components/QuoteModal";

const PneumaticaFull = () => {
  const navigate = useNavigate();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const advantages = [
    {
      icon: Settings,
      title: "Projetos Personalizados",
      description: "Cada cilindro é projetado sob medida para sua aplicação específica"
    },
    {
      icon: Shield,
      title: "Alta Durabilidade",
      description: "Materiais premium e processos rigorosos garantem vida útil estendida"
    },
    {
      icon: Gauge,
      title: "Performance Superior",
      description: "Eficiência máxima com controle preciso de força e velocidade"
    },
    {
      icon: Award,
      title: "Qualidade Certificada",
      description: "Padrões internacionais de qualidade em cada componente"
    },
    {
      icon: Wrench,
      title: "Suporte Técnico",
      description: "Equipe especializada para consultoria e manutenção"
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Prazos otimizados sem comprometer a qualidade"
    }
  ];

  const applications = [
    {
      icon: Factory,
      title: "Automação Industrial",
      description: "Linhas de produção, robótica e sistemas automatizados"
    },
    {
      icon: Cog,
      title: "Equipamentos de Movimentação",
      description: "Elevadores, esteiras transportadoras e sistemas de carga"
    },
    {
      icon: Zap,
      title: "Prensas e Estampas",
      description: "Sistemas de conformação e prensagem de alta precisão"
    },
    {
      icon: Target,
      title: "Máquinas Especiais",
      description: "Equipamentos customizados para processos específicos"
    }
  ];

  const specifications = [
    "Diâmetros de 16mm a 320mm",
    "Cursos até 3000mm",
    "Pressões de trabalho até 10 bar",
    "Vedações em NBR, Viton ou PU",
    "Acabamentos especiais disponíveis",
    "Certificações ISO 9001"
  ];

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
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-primary text-primary-foreground hover:bg-primary-dark"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            Cilindros Pneumáticos <br />
            <span className="text-white/90">de Alta Performance</span>
          </h1>
          <p className="text-xl mb-12 max-w-4xl mx-auto text-white/90 leading-relaxed">
            Especialistas em desenvolvimento e fabricação de cilindros pneumáticos personalizados. 
            Décadas de experiência em soluções pneumáticas que combinam precisão dimensional, 
            durabilidade excepcional e performance superior para aplicações industriais exigentes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setIsQuoteModalOpen(true)}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
            >
              Solicitar Projeto Personalizado
            </Button>
            <Button 
              onClick={() => window.open('https://wa.me/5511958274054', '_blank')}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Vantagens dos Nossos <span className="text-primary">Cilindros Pneumáticos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tecnologia avançada e expertise técnica para soluções pneumáticas que superam expectativas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-muted-foreground/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <advantage.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{advantage.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Aplicações <span className="text-primary">Industriais</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nossos cilindros pneumáticos atendem aos mais diversos segmentos industriais
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-4 text-xl">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <application.icon className="w-6 h-6 text-primary" />
                    </div>
                    {application.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{application.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                Especificações <span className="text-primary">Técnicas</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Ampla gama de especificações para atender às necessidades mais específicas 
                de cada aplicação industrial.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-lg">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gradient-primary rounded-lg opacity-20 flex items-center justify-center">
                <Factory className="w-16 h-16 text-primary" />
              </div>
              <div className="aspect-square bg-gradient-accent rounded-lg opacity-20 flex items-center justify-center mt-8">
                <Cog className="w-16 h-16 text-primary" />
              </div>
              <div className="aspect-square bg-gradient-accent rounded-lg opacity-20 flex items-center justify-center -mt-8">
                <Settings className="w-16 h-16 text-primary" />
              </div>
              <div className="aspect-square bg-gradient-primary rounded-lg opacity-20 flex items-center justify-center">
                <Shield className="w-16 h-16 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Solicite seu <span className="text-white/90">Projeto Personalizado</span>
            </h2>
            <p className="text-xl mb-12 text-white/90 leading-relaxed">
              Nossa equipe de engenheiros especializados está pronta para desenvolver 
              a solução pneumática perfeita para sua aplicação. Conte-nos sobre seu projeto 
              e receba um orçamento detalhado.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Consultoria Técnica</h3>
                <p className="text-white/80">Análise detalhada das suas necessidades</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Projeto Customizado</h3>
                <p className="text-white/80">Desenvolvimento sob medida</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Qualidade Garantida</h3>
                <p className="text-white/80">Certificação e suporte completo</p>
              </div>
            </div>

            <Button 
              onClick={() => setIsQuoteModalOpen(true)}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-4"
            >
              <Send className="w-5 h-5 mr-2" />
              Solicitar Orçamento Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Entre em <span className="text-primary">Contato</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Estamos prontos para atender você e desenvolver soluções pneumáticas de excelência
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Telefone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">(11) 95827-4054</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">contato@jpdusinagem.com.br</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Localização</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Bom Jesus dos Perdões, SP</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">JPD Usinagem</h3>
            <p className="text-muted-foreground mb-6">
              Especialistas em cilindros pneumáticos e soluções industriais de precisão
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} JPD Usinagem. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
};

export default PneumaticaFull;