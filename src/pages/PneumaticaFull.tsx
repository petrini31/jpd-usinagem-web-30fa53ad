
import { ArrowLeft, Factory, Cog, Shield, Zap, Settings, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PneumaticaFull = () => {
  const goBack = () => {
    window.close();
  };

  const features = [
    {
      icon: Factory,
      title: "Projeto Personalizado",
      description: "Desenvolvimento completo conforme suas especificações técnicas e aplicações específicas.",
      details: [
        "Análise de necessidades específicas",
        "Projeto customizado para aplicação",
        "Simulação e validação técnica",
        "Otimização de performance"
      ]
    },
    {
      icon: Shield,
      title: "Alta Durabilidade",
      description: "Materiais premium e processos rigorosos garantem vida útil estendida dos componentes.",
      details: [
        "Materiais de alta qualidade",
        "Tratamentos superficiais especiais",
        "Vedações de longa duração",
        "Resistência a ambientes agressivos"
      ]
    },
    {
      icon: Cog,
      title: "Precisão Dimensional",
      description: "Tolerâncias rigorosas e acabamento superficial perfeito para performance superior.",
      details: [
        "Usinagem CNC de alta precisão",
        "Tolerâncias micrométricas",
        "Acabamento superficial controlado",
        "Controle dimensional rigoroso"
      ]
    },
    {
      icon: Zap,
      title: "Performance Superior",
      description: "Testes de qualidade e validação garantem eficiência máxima em operação.",
      details: [
        "Testes de pressão rigorosos",
        "Validação de performance",
        "Eficiência energética",
        "Resposta dinâmica otimizada"
      ]
    }
  ];

  const applications = [
    "Automação Industrial",
    "Equipamentos de Movimentação",
    "Sistemas de Prensas e Estampas",
    "Máquinas Especiais",
    "Linhas de Produção",
    "Robótica Industrial",
    "Sistemas de Embalagem",
    "Equipamentos Pneumáticos"
  ];

  const specifications = [
    { label: "Pressão de Trabalho", value: "Até 16 bar" },
    { label: "Diâmetros", value: "16mm a 320mm" },
    { label: "Cursos", value: "Sob medida" },
    { label: "Tipos de Montagem", value: "Múltiplas opções" },
    { label: "Materiais", value: "Alumínio, Aço Inox, Aço Carbono" },
    { label: "Vedações", value: "NBR, Viton, Poliuretano" },
    { label: "Temperatura", value: "-20°C a +150°C" },
    { label: "Certificações", value: "ISO 9001" }
  ];

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
              <h1 className="text-2xl font-bold text-foreground">JPD Usinagem - Especialistas em Pneumática</h1>
              <p className="text-muted-foreground">Soluções completas em cilindros pneumáticos</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              Cilindros <span className="text-primary">Pneumáticos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Desenvolvemos e fabricamos cilindros pneumáticos personalizados com tecnologia de ponta, 
              garantindo máxima performance, durabilidade e confiabilidade para suas aplicações industriais.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            Nossos Diferenciais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-strong transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8">
                Especificações Técnicas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="bg-background rounded-lg p-4 border border-border">
                    <div className="text-sm text-muted-foreground mb-1">{spec.label}</div>
                    <div className="font-semibold text-foreground">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8">
                Principais Aplicações
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {applications.map((application, index) => (
                  <div key={index} className="flex items-center gap-3 bg-background rounded-lg p-4 border border-border">
                    <Settings className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{application}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            Nosso Processo de Desenvolvimento
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Análise", description: "Estudo detalhado das necessidades e especificações técnicas" },
              { step: "2", title: "Projeto", description: "Desenvolvimento personalizado com simulação e validação" },
              { step: "3", title: "Fabricação", description: "Produção com tecnologia CNC e controle de qualidade rigoroso" },
              { step: "4", title: "Entrega", description: "Testes finais e entrega com suporte técnico especializado" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-2xl font-bold">
                  {process.step}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">
                  {process.title}
                </h4>
                <p className="text-muted-foreground">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Pronto para Desenvolver sua Solução Pneumática?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e desenvolva cilindros pneumáticos personalizados 
            para suas necessidades específicas.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-dark">
              Solicitar Orçamento
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PneumaticaFull;
