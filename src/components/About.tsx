import { Award, Users, Clock, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Qualidade",
      description: "Compromisso com a excelência em cada projeto executado."
    },
    {
      icon: Clock,
      title: "Pontualidade",
      description: "Cumprimento rigoroso de prazos estabelecidos."
    },
    {
      icon: Users,
      title: "Parceria",
      description: "Relacionamento duradouro baseado na confiança."
    },
    {
      icon: Target,
      title: "Precisão",
      description: "Resultados exatos conforme especificações técnicas."
    }
  ];

  return (
    <section id="empresa" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre a <span className="text-accent">JPD Usinagem CNC</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                A <strong className="text-foreground">JPD Usinagem CNC</strong> é uma empresa especializada 
                em usinagem de precisão, localizada em Bom Jesus dos Perdões - SP. Com anos de experiência 
                no mercado, oferecemos soluções completas para diversos segmentos industriais.
              </p>
              
              <p>
                Nossa equipe altamente qualificada utiliza tecnologia de ponta para garantir 
                a máxima precisão e qualidade em cada projeto. Trabalhamos com os mais diversos 
                materiais e atendemos desde pequenas peças até projetos complexos de grande porte.
              </p>
              
              <p>
                Localizada estrategicamente na região de Bom Jesus dos Perdões, atendemos 
                toda a Grande São Paulo e interior, oferecendo agilidade na entrega e 
                suporte técnico especializado.
              </p>
            </div>

            <div className="mt-8 p-6 bg-background rounded-lg shadow-soft">
              <h3 className="text-xl font-semibold text-foreground mb-4">Nossa Localização</h3>
              <p className="text-muted-foreground">
                <strong>Endereço:</strong> R. Uruguai, 573 - Parque das Hortênsias<br />
                Bom Jesus dos Perdões - SP
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-all duration-300 border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 animate-fade-in">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-accent mb-2">15+</h3>
            <p className="text-muted-foreground">Anos de Experiência</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-accent mb-2">500+</h3>
            <p className="text-muted-foreground">Projetos Concluídos</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-accent mb-2">50+</h3>
            <p className="text-muted-foreground">Clientes Ativos</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-accent mb-2">100%</h3>
            <p className="text-muted-foreground">Satisfação</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;