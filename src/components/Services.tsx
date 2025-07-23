
import { useState } from "react";
import { Settings, Wrench, Cog, ArrowRight, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import MaterialsCarousel from "./MaterialsCarousel";
import ServicesCarousel from "./ServicesCarousel";
import precisionPartsImage from "@/assets/precision-parts.jpg";
import manufacturingProcessImage from "@/assets/manufacturing-process.jpg";
import qualityComponentsImage from "@/assets/quality-components.jpg";

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  
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
      ],
      modalContent: {
        overview: "Nossa tecnologia CNC avançada permite a fabricação de peças com precisão micrométrica, atendendo às especificações mais rigorosas da indústria.",
        benefits: [
          "Precisão dimensional excepcional com tolerâncias micrométricas",
          "Programação CNC otimizada para máxima eficiência",
          "Controle de qualidade dimensional rigoroso",
          "Acabamento superficial conforme especificações",
          "Capacidade para geometrias complexas"
        ],
        applications: [
          "Componentes automotivos",
          "Peças aeroespaciais",
          "Equipamentos médicos",
          "Ferramental industrial"
        ]
      }
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
      ],
      modalContent: {
        overview: "Desenvolvemos desenhos industriais personalizados completos, desde o conceito inicial até os desenhos técnicos finais prontos para produção.",
        benefits: [
          "Desenvolvimento de projetos do conceito à execução",
          "Desenhos técnicos detalhados conforme normas",
          "Otimização para usinabilidade e custos",
          "Simulação e validação de projetos",
          "Consultoria técnica especializada"
        ],
        applications: [
          "Máquinas especiais",
          "Dispositivos e ferramentas",
          "Equipamentos industriais",
          "Protótipos funcionais"
        ]
      }
    },
    {
      icon: Cog,
      title: "Fabricação de Cilindros Pneumáticos",
      description: "Especialização em soluções pneumáticas personalizadas, desde o projeto até a produção, com alta performance e durabilidade.",
      image: qualityComponentsImage,
      details: [
        "Cilindros pneumáticos personalizados",
        "Projeto sob medida para aplicações específicas",
        "Alta performance e durabilidade garantida",
        "Testes de qualidade rigorosos"
      ],
      modalContent: {
        overview: "Nossa especialização em fabricação de cilindros pneumáticos combina décadas de experiência com tecnologia de ponta para entregar soluções personalizadas de alta performance.",
        benefits: [
          "Desenvolvimento completo do projeto à produção",
          "Personalização total conforme necessidades específicas",
          "Materiais de alta qualidade e durabilidade",
          "Testes rigorosos de pressão e vedação",
          "Suporte técnico especializado"
        ],
        applications: [
          "Automação industrial",
          "Equipamentos de movimentação",
          "Sistemas de prensas e estampas",
          "Máquinas especiais"
        ]
      }
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header - Right aligned with left text alignment */}
        <div className="flex justify-end mb-16 animate-fade-in">
          <div className="max-w-2xl text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Especialistas em tecnologia de Usinagem CNC e desenvolvimento de desenhos industriais personalizados. 
              Oferecemos soluções completas e inovadoras para todos os seus projetos.
            </p>
          </div>
        </div>

        {/* Main Services Grid */}
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
                    onClick={() => setSelectedService(service)}
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Ver Detalhes
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services Carousel */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Outros Serviços Especializados
          </h3>
          <ServicesCarousel />
        </div>

        {/* Materials Section */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Materiais Trabalhados
          </h3>
          <MaterialsCarousel />
        </div>

        {/* Service Details Modal */}
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedService && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                    <selectedService.icon className="w-8 h-8 text-primary" />
                    {selectedService.title}
                  </DialogTitle>
                  <DialogDescription className="text-lg">
                    {selectedService.modalContent?.overview}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                  {/* Benefits */}
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Cog className="w-5 h-5 text-primary" />
                      Nossos Diferenciais
                    </h4>
                    <ul className="space-y-3">
                      {selectedService.modalContent?.benefits?.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Applications */}
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Settings className="w-5 h-5 text-primary" />
                      Principais Aplicações
                    </h4>
                    <ul className="space-y-3">
                      {selectedService.modalContent?.applications?.map((application: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{application}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex gap-4 justify-center">
                    <Button 
                      onClick={() => {
                        setSelectedService(null);
                        scrollToContact();
                      }}
                      className="bg-primary text-primary-foreground hover:bg-primary-dark"
                    >
                      Solicitar Orçamento para este Serviço
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => setSelectedService(null)}
                      className="border-border"
                    >
                      Fechar
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Services;
