import { Factory, Cog, Shield, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const Pneumatica = () => {
  const scrollToContact = () => {
    const element = document.getElementById('orcamento');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const features = [{
    icon: Factory,
    title: "Projeto Personalizado",
    description: "Desenvolvimento completo conforme suas especificações técnicas e aplicações específicas."
  }, {
    icon: Shield,
    title: "Alta Durabilidade",
    description: "Materiais premium e processos rigorosos garantem vida útil estendida dos componentes."
  }, {
    icon: Cog,
    title: "Precisão Dimensional",
    description: "Tolerâncias rigorosas e acabamento superficial perfeito para performance superior."
  }, {
    icon: Zap,
    title: "Performance Superior",
    description: "Testes de qualidade e validação garantem eficiência máxima em operação."
  }];
  return <section id="pneumatica" className="py-24 bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-accent rounded-full opacity-10 blur-3xl animate-float" style={{
      animationDelay: '2s'
    }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            Especialistas em <span className="text-primary">Pneumática</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Nossa expertise em fabricação de cilindros pneumáticos representa décadas de 
            inovação e excelência técnica. Desenvolvemos soluções personalizadas que combinam 
            precisão dimensional, durabilidade excepcional e performance superior para 
            atender às demandas mais exigentes da indústria moderna.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Soluções Pneumáticas de Alta Performance
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Nossa <strong className="text-primary">especialização em cilindros pneumáticos </strong> 
                vai além da fabricação tradicional. Desenvolvemos cada componente com precisão 
                micrométrica, utilizando materiais de alta qualidade e processos de manufatura 
                avançados que garantem performance excepcional e vida útil estendida.
              </p>
              
              <p>
                Desde o <strong className="text-primary">projeto personalizado</strong> até a 
                produção final, nossa equipe técnica especializada trabalha em estreita 
                colaboração com nossos clientes para desenvolver soluções pneumáticas que 
                atendem perfeitamente às necessidades específicas de cada aplicação industrial.
              </p>
              
              <p>
                Nossos cilindros pneumáticos são submetidos a <strong className="text-primary">testes 
                rigorosos de qualidade</strong>, incluindo verificações de pressão, vedação e 
                performance operacional, garantindo que cada unidade atenda aos mais altos 
                padrões de confiabilidade e eficiência.
              </p>
            </div>

            <Button size="lg" onClick={scrollToContact} className="mt-8 bg-primary text-primary-foreground hover:bg-primary-dark transition-colors">
              Solicitar Projeto Personalizado
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Image Placeholders */}
          <div className="grid grid-cols-2 gap-6 animate-slide-up" style={{
          animationDelay: '0.2s'
        }}>
            <div className="space-y-6">
              <div className="aspect-square bg-gradient-primary rounded-lg opacity-20 flex items-center justify-center">
                <Factory className="w-16 h-16 text-primary" />
              </div>
              <div className="aspect-[4/3] bg-gradient-accent rounded-lg opacity-20 flex items-center justify-center">
                <Cog className="w-12 h-12 text-primary" />
              </div>
            </div>
            <div className="space-y-6 mt-8">
              <div className="aspect-[4/3] bg-gradient-primary rounded-lg opacity-20 flex items-center justify-center">
                <Shield className="w-12 h-12 text-primary" />
              </div>
              <div className="aspect-square bg-gradient-accent rounded-lg opacity-20 flex items-center justify-center">
                <Zap className="w-16 h-16 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <Card key={index} className="group hover:shadow-strong transition-all duration-300 border border-border/50 bg-card/80 backdrop-blur-sm animate-slide-up" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <feature.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Pneumatica;