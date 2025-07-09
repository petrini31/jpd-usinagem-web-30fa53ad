import { Award, Users, Clock, Target, Factory, Cog, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Company = () => {
  const values = [
    {
      icon: Award,
      title: "Excelência",
      description: "Comprometimento com a mais alta qualidade em cada projeto executado, superando expectativas."
    },
    {
      icon: Clock,
      title: "Pontualidade",
      description: "Cumprimento rigoroso de prazos, garantindo que sua produção nunca pare."
    },
    {
      icon: Users,
      title: "Parceria",
      description: "Relacionamento duradouro baseado na confiança mútua e transparência total."
    },
    {
      icon: Target,
      title: "Precisão",
      description: "Tolerâncias milimétricas e acabamentos perfeitos conforme especificações técnicas."
    }
  ];

  const capabilities = [
    {
      icon: Factory,
      title: "Parque Industrial Moderno",
      description: "Equipamentos de última geração com tecnologia CNC avançada para máxima precisão e produtividade."
    },
    {
      icon: Cog,
      title: "Desenhos Industriais Personalizados",
      description: "Desenvolvemos projetos sob medida, desde o conceito até os desenhos técnicos detalhados para sua produção."
    },
    {
      icon: Shield,
      title: "Certificações de Qualidade",
      description: "Processos certificados e controle rigoroso garantindo conformidade com normas internacionais."
    },
    {
      icon: Zap,
      title: "Agilidade na Entrega",
      description: "Processos otimizados e gestão eficiente permitindo entregas rápidas sem comprometer a qualidade."
    }
  ];

  const stats = [
    { number: "20+", label: "Anos de Experiência", description: "Duas décadas de excelência em usinagem" },
    { number: "1000+", label: "Projetos Concluídos", description: "Projetos entregues com sucesso" },
    { number: "100+", label: "Clientes Ativos", description: "Empresas que confiam em nosso trabalho" },
    { number: "99.8%", label: "Taxa de Satisfação", description: "Aprovação dos nossos clientes" }
  ];

  return (
    <section id="empresa" className="py-24 bg-gradient-to-br from-secondary/50 via-background to-secondary/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-32 left-10 w-64 h-64 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-32 right-10 w-96 h-96 bg-gradient-accent rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            Sobre a <span className="text-primary">JPD Usinagem CNC</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Especialistas em tecnologia de Usinagem CNC e desenvolvimento de desenhos industriais personalizados. 
            Combinamos inovação, precisão e expertise técnica para transformar ideias em realidade.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="animate-slide-up">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Nossa História e Missão
                </h3>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Somos especialistas em <strong className="text-primary">tecnologia de Usinagem CNC</strong> 
                    e <strong className="text-primary">desenvolvimento de desenhos industriais personalizados</strong>. 
                    Nossa empresa nasceu da paixão pela precisão e inovação tecnológica.
                  </p>
                  
                  <p>
                    Com equipamentos CNC de última geração e uma equipe altamente especializada, 
                    oferecemos soluções completas desde o desenvolvimento do projeto até a 
                    fabricação das peças com tolerâncias milimétricas.
                  </p>
                  
                  <p>
                    Nosso diferencial está na capacidade de <strong className="text-primary">criar desenhos 
                    industriais sob medida</strong> para cada cliente, garantindo que cada projeto 
                    seja otimizado para máxima eficiência e qualidade.
                  </p>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-border/50">
                <h4 className="text-xl font-bold text-foreground mb-4">Nossa Localização Estratégica</h4>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Endereço:</strong> R. Uruguai, 573 - Parque das Hortênsias, Bom Jesus dos Perdões - SP</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Localização privilegiada para atender toda a Grande São Paulo e interior</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Fácil acesso via principais rodovias da região</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="text-center p-6 group hover:shadow-strong transition-all duration-300 border border-border/50 bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {stat.label}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-bold text-foreground mb-6">
              Nossos <span className="text-primary">Valores</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Os princípios que norteiam nossa atuação e garantem a excelência em cada projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-strong transition-all duration-300 border border-border/50 bg-card/80 backdrop-blur-sm animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform duration-300 shadow-soft">
                    <value.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div>
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-bold text-foreground mb-6">
              Nossas <span className="text-primary">Capacidades</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Infraestrutura e expertise que nos permitem entregar soluções de alta complexidade 
              com a máxima qualidade e eficiência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-strong transition-all duration-300 border border-border/50 bg-card/80 backdrop-blur-sm animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft">
                      <capability.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {capability.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;