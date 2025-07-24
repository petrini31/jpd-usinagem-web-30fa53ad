
import { ArrowRight, CheckCircle, Target, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useCustomImage } from "@/hooks/useCustomImage";

const Company = () => {
  const companyImage = useCustomImage('company-about', 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=500');
  
  const values = [
    {
      icon: CheckCircle,
      title: "Qualidade Excepcional",
      description: "Compromisso com a excelência em cada projeto, garantindo precisão micrométrica e acabamento superior."
    },
    {
      icon: Target,
      title: "Inovação Contínua",
      description: "Investimento constante em tecnologia de ponta e aprimoramento de processos para soluções avançadas."
    },
    {
      icon: Shield,
      title: "Confiabilidade",
      description: "Décadas de experiência e parcerias sólidas construídas com base na transparência e cumprimento de prazos."
    }
  ];

  return (
    <section id="empresa" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header - Left aligned */}
        <div className="mb-16 animate-fade-in">
          <div className="max-w-4xl text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre a <span className="text-primary">JPD Usinagem CNC</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Referência em excelência em serviços de Usinagem CNC e expertise como fabricante de cilindros pneumáticos. 
              Combinamos décadas de experiência, tecnologia de ponta e técnicas avançadas para entregar soluções 
              industriais de alta precisão, complexidade e performance superior.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <ArrowRight className="w-6 h-6 text-primary" />
                Nossa Expertise
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Especializados em usinagem CNC de alta precisão e fabricação de cilindros pneumáticos 
                personalizados. Nossa equipe técnica altamente qualificada domina as mais avançadas 
                técnicas de manufatura, garantindo resultados excepcionais para os mais diversos setores industriais.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Tecnologia CNC Avançada</h4>
                    <p className="text-sm text-muted-foreground">Equipamentos de última geração para precisão micrométrica</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Cilindros Pneumáticos Personalizados</h4>
                    <p className="text-sm text-muted-foreground">Desenvolvimento completo desde o projeto até a produção</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Controle de Qualidade Rigoroso</h4>
                    <p className="text-sm text-muted-foreground">Inspeção dimensional e funcional em todas as etapas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-lg shadow-strong">
              <img 
                src={companyImage}
                alt="JPD Usinagem CNC - Tecnologia de Precisão"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-6 rounded-lg shadow-strong">
              <div className="text-center">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm opacity-90">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Nossos Valores
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border border-border/50 hover:shadow-medium transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
