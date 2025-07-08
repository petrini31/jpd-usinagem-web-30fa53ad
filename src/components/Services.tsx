import { Settings, Wrench, Cog, ArrowRight } from "lucide-react";
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
      title: "Usinagem em Geral",
      description: "Fabricamos peças de alta precisão conforme desenhos técnicos ou amostras fornecidas pelo cliente.",
      image: precisionPartsImage,
      details: [
        "Usinagem de precisão em diversos materiais",
        "Aços, alumínios, latões, nylons e acrílicos",
        "Tolerâncias dimensionais rigorosas",
        "Tratamentos térmicos e químicos"
      ]
    },
    {
      icon: Wrench,
      title: "Fabricação de Máquinas",
      description: "Desenvolvimento e construção de dispositivos, subconjuntos e máquinas completas.",
      image: manufacturingProcessImage,
      details: [
        "Projetos customizados conforme especificação",
        "Montagem de subconjuntos complexos",
        "Dispositivos e ferramentais",
        "Máquinas sob medida"
      ]
    },
    {
      icon: Cog,
      title: "Componentes de Qualidade",
      description: "Produção de componentes industriais com foco na qualidade e durabilidade.",
      image: qualityComponentsImage,
      details: [
        "Controle rigoroso de qualidade",
        "Certificação dimensional",
        "Peças de reposição industrial",
        "Ferramentaria especializada"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="text-accent">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em usinagem CNC, trabalhando com diversos materiais 
            e atendendo às mais rigorosas especificações técnicas.
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
                  <service.icon className="w-8 h-8 text-accent" />
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
                      <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
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