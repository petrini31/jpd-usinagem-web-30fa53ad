import { Settings, Wrench, Cog, ArrowRight, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import precisionPartsImage from "@/assets/precision-parts.jpg";
import manufacturingProcessImage from "@/assets/manufacturing-process.jpg";
import qualityComponentsImage from "@/assets/quality-components.jpg";

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Settings,
      title: "Usinagem CNC de Precisão",
      description: "Fabricamos peças de alta precisão utilizando tecnologia CNC avançada conforme suas especificações.",
      image: precisionPartsImage,
      details: [
        "Usinagem CNC de precisão micrométrica",
        "Aços, alumínios, latões, nylons e acrílicos",
        "Tolerâncias dimensionais rigorosas",
        "Tratamentos térmicos e superficiais"
      ]
    },
    {
      icon: PenTool,
      title: "Desenhos Industriais Personalizados",
      description: "Desenvolvemos projetos sob medida, desde o conceito até os desenhos técnicos detalhados.",
      image: manufacturingProcessImage,
      details: [
        "Projetos personalizados do zero",
        "Desenhos técnicos detalhados",
        "Otimização para fabricação",
        "Consultoria técnica especializada"
      ]
    },
    {
      icon: Cog,
      title: "Fabricação de Componentes",
      description: "Produção de componentes industriais e máquinas completas com foco na qualidade total.",
      image: qualityComponentsImage,
      details: [
        "Fabricação de máquinas sob medida",
        "Controle rigoroso de qualidade",
        "Montagem de subconjuntos complexos",
        "Certificação dimensional completa"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Especialistas em tecnologia de Usinagem CNC e desenvolvimento de desenhos industriais personalizados. 
            Oferecemos soluções completas e inovadoras para todos os seus projetos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 border border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary-dark transition-colors"
                >
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Materials Section */}
        <div className="bg-secondary rounded-lg p-8 animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Materiais Trabalhados
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-background rounded-lg p-4 shadow-soft">
              <h4 className="font-semibold text-foreground">Aços</h4>
              <p className="text-sm text-muted-foreground">Carbono e Inox</p>
            </div>
            <div className="bg-background rounded-lg p-4 shadow-soft">
              <h4 className="font-semibold text-foreground">Alumínios</h4>
              <p className="text-sm text-muted-foreground">Diversas Ligas</p>
            </div>
            <div className="bg-background rounded-lg p-4 shadow-soft">
              <h4 className="font-semibold text-foreground">Latões</h4>
              <p className="text-sm text-muted-foreground">Alta Qualidade</p>
            </div>
            <div className="bg-background rounded-lg p-4 shadow-soft">
              <h4 className="font-semibold text-foreground">Polímeros</h4>
              <p className="text-sm text-muted-foreground">Nylons e Acrílicos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;