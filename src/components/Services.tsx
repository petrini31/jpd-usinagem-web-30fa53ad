import { useState } from "react";
import { Settings, Wrench, Cog, ArrowRight, PenTool, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import precisionPartsImage from "@/assets/precision-parts.jpg";
import manufacturingProcessImage from "@/assets/manufacturing-process.jpg";
import qualityComponentsImage from "@/assets/quality-components.jpg";

const Services = () => {
  const [expandedMaterial, setExpandedMaterial] = useState<string | null>(null);
  
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMaterial = (material: string) => {
    setExpandedMaterial(expandedMaterial === material ? null : material);
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <service.icon className="w-8 h-8 text-white" />
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
                
                <div className="flex gap-2">
                  <Button 
                    onClick={scrollToContact}
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary-dark transition-colors"
                  >
                    Solicitar Orçamento
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Ver Detalhes
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Materials Section */}
        <div className="bg-secondary rounded-lg p-8 animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Materiais Trabalhados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Aços */}
            <div className="bg-background rounded-lg shadow-soft">
              <button 
                onClick={() => toggleMaterial('acos')}
                className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors rounded-lg"
              >
                <div className="text-left">
                  <h4 className="font-semibold text-foreground">Aços</h4>
                  <p className="text-sm text-muted-foreground">Carbono e Inox</p>
                </div>
                {expandedMaterial === 'acos' ? 
                  <ChevronUp className="w-5 h-5 text-primary" /> : 
                  <ChevronDown className="w-5 h-5 text-primary" />
                }
              </button>
              {expandedMaterial === 'acos' && (
                <div className="px-4 pb-4 animate-accordion-down">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Trabalhamos com aços carbono e inoxidáveis de diversas especificações. 
                    Nossa expertise garante usinagem precisa respeitando as propriedades mecânicas de cada liga, 
                    com acabamento superficial adequado para cada aplicação industrial.
                  </p>
                </div>
              )}
            </div>

            {/* Alumínios */}
            <div className="bg-background rounded-lg shadow-soft">
              <button 
                onClick={() => toggleMaterial('aluminios')}
                className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors rounded-lg"
              >
                <div className="text-left">
                  <h4 className="font-semibold text-foreground">Alumínios</h4>
                  <p className="text-sm text-muted-foreground">Diversas Ligas</p>
                </div>
                {expandedMaterial === 'aluminios' ? 
                  <ChevronUp className="w-5 h-5 text-primary" /> : 
                  <ChevronDown className="w-5 h-5 text-primary" />
                }
              </button>
              {expandedMaterial === 'aluminios' && (
                <div className="px-4 pb-4 animate-accordion-down">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Especialistas em usinagem de ligas de alumínio aeronáutico e comercial. 
                    Dominamos as técnicas específicas para evitar deformações e garantir 
                    tolerâncias dimensionais rigorosas mesmo em peças complexas e paredes finas.
                  </p>
                </div>
              )}
            </div>

            {/* Latões */}
            <div className="bg-background rounded-lg shadow-soft">
              <button 
                onClick={() => toggleMaterial('latoes')}
                className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors rounded-lg"
              >
                <div className="text-left">
                  <h4 className="font-semibold text-foreground">Latões</h4>
                  <p className="text-sm text-muted-foreground">Alta Qualidade</p>
                </div>
                {expandedMaterial === 'latoes' ? 
                  <ChevronUp className="w-5 h-5 text-primary" /> : 
                  <ChevronDown className="w-5 h-5 text-primary" />
                }
              </button>
              {expandedMaterial === 'latoes' && (
                <div className="px-4 pb-4 animate-accordion-down">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Usinagem de latão com foco em componentes de precisão para equipamentos industriais. 
                    Nossa experiência permite obter excelente acabamento superficial e 
                    manter as propriedades anticorrosivas naturais do material.
                  </p>
                </div>
              )}
            </div>

            {/* Polímeros */}
            <div className="bg-background rounded-lg shadow-soft">
              <button 
                onClick={() => toggleMaterial('polimeros')}
                className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors rounded-lg"
              >
                <div className="text-left">
                  <h4 className="font-semibold text-foreground">Polímeros</h4>
                  <p className="text-sm text-muted-foreground">Nylons e Acrílicos</p>
                </div>
                {expandedMaterial === 'polimeros' ? 
                  <ChevronUp className="w-5 h-5 text-primary" /> : 
                  <ChevronDown className="w-5 h-5 text-primary" />
                }
              </button>
              {expandedMaterial === 'polimeros' && (
                <div className="px-4 pb-4 animate-accordion-down">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Usinagem especializada em materiais plásticos técnicos como nylons e acrílicos. 
                    Utilizamos ferramentas e parâmetros específicos para evitar deformações térmicas 
                    e garantir dimensões precisas em componentes técnicos.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;