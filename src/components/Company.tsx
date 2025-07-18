import { Award, Users, Clock, Target, Factory, Cog, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const Company = () => {
  const values = [{
    icon: Target,
    title: "Precisão Milimétrica",
    description: "Comprometimento com a exatidão e qualidade impecável em todos os processos de fabricação."
  }, {
    icon: Clock,
    title: "Pontualidade",
    description: "Entrega dentro dos prazos estabelecidos, garantindo que sua produção nunca pare."
  }, {
    icon: Zap,
    title: "Tecnologia",
    description: "Utilização de tecnologias de ponta, especialmente em CNC, para soluções inovadoras e eficientes."
  }, {
    icon: Users,
    title: "Parceria",
    description: "Construção de relacionamentos duradouros e colaborativos com nossos clientes."
  }];
  const capabilities = [{
    icon: Factory,
    title: "Parque Industrial Moderno",
    description: "Equipamentos de última geração com tecnologia CNC avançada para máxima precisão e produtividade."
  }, {
    icon: Cog,
    title: "Desenhos Industriais Personalizados",
    description: "Desenvolvemos projetos sob medida, desde o conceito até os desenhos técnicos detalhados para sua produção."
  }, {
    icon: Shield,
    title: "Certificações de Qualidade",
    description: "Processos certificados e controle rigoroso garantindo conformidade com normas internacionais."
  }, {
    icon: Zap,
    title: "Agilidade na Entrega",
    description: "Processos otimizados e gestão eficiente permitindo entregas rápidas sem comprometer a qualidade."
  }];
  const stats = [{
    number: "20+",
    label: "Anos de Experiência",
    description: "Duas décadas de excelência em usinagem"
  }, {
    number: "1000+",
    label: "Projetos Concluídos",
    description: "Projetos entregues com sucesso"
  }, {
    number: "100+",
    label: "Clientes Ativos",
    description: "Empresas que confiam em nosso trabalho"
  }, {
    number: "99.8%",
    label: "Taxa de Satisfação",
    description: "Aprovação dos nossos clientes"
  }];
  return <section id="empresa" className="py-24 bg-gradient-to-br from-secondary/50 via-background to-secondary/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-32 left-10 w-64 h-64 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-32 right-10 w-96 h-96 bg-gradient-accent rounded-full opacity-10 blur-3xl animate-float" style={{
      animationDelay: '3s'
    }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            Sobre a <span className="text-primary">JPD Usinagem CNC</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Referência em excelência em serviços de Usinagem CNC e expertise como fabricante de cilindros pneumáticos. 
            Combinamos décadas de experiência, tecnologia de ponta e técnicas avançadas para 
            entregar soluções industriais de alta precisão, complexidade e performance superior.
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
                    Somos especialistas em <strong className="text-primary">excelência em serviços de Usinagem CNC</strong> 
                    com foco em peças de alta precisão e complexidade. Nossa expertise técnica permite 
                    executar projetos desafiadores com tolerâncias micrométricas em diversos materiais industriais.
                  </p>
                  
                  <p>
                    Nossa <strong className="text-primary">expertise como fabricante de cilindros pneumáticos </strong> 
                    nos destaca no mercado, oferecendo soluções personalizadas desde o projeto até a produção, 
                    com alta performance, durabilidade e tecnologia de ponta em cada componente fabricado.
                  </p>
                  
                  <p>
                    Desenvolvemos <strong className="text-primary">desenhos industriais personalizados </strong> 
                    desde o conceito inicial até os desenhos técnicos finais, otimizando cada projeto 
                    para usinabilidade, funcionalidade e custos de produção com máxima eficiência.
                  </p>
                  
                  <p>
                    Nossa técnica diferenciada em usinagem CNC combina programação avançada, 
                    ferramental especializado e controle rigoroso de processo, utilizando tecnologias 
                    CAD/CAM de última geração para garantir qualidade superior e precisão excepcional.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border/50">
                <h4 className="text-lg font-bold text-foreground mb-3">Localização Estratégica</h4>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p><strong className="text-foreground">Endereço:</strong> R. Uruguai, 573 - Parque das Hortênsias, Bom Jesus dos Perdões - SP</p>
                  <p><strong className="text-foreground">Região:</strong> Grande São Paulo e interior paulista</p>
                  <p><strong className="text-foreground">Acesso:</strong> Principais rodovias da região</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-slide-up" style={{
          animationDelay: '0.2s'
        }}>
            {stats.map((stat, index) => <Card key={index} className="text-center p-6 group hover:shadow-strong transition-all duration-300 border border-border/50 bg-card/80 backdrop-blur-sm" style={{
            animationDelay: `${index * 0.1}s`
          }}>
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
              </Card>)}
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
            {values.map((value, index) => <Card key={index} className="group hover:shadow-strong transition-all duration-300 border border-border/50 bg-card/80 backdrop-blur-sm animate-slide-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
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
              </Card>)}
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
            {capabilities.map((capability, index) => <Card key={index} className="group hover:shadow-strong transition-all duration-300 border border-border/50 bg-card/80 backdrop-blur-sm animate-slide-up" style={{
            animationDelay: `${index * 0.15}s`
          }}>
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
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Company;