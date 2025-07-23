
import { useState, useMemo, useCallback } from "react";
import { Settings, Wrench, Cog, ArrowRight, PenTool, RefreshCw, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import MaterialsCarousel from "./MaterialsCarousel";
import precisionPartsImage from "@/assets/precision-parts.jpg";
import manufacturingProcessImage from "@/assets/manufacturing-process.jpg";
import qualityComponentsImage from "@/assets/quality-components.jpg";

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 'usinagem-cnc',
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
      id: 'desenhos-industriais',
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
      id: 'cilindros-pneumaticos',
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
    },
    {
      id: 'torneamento',
      icon: Settings,
      title: "Torneamento",
      description: "Serviços de torneamento de alta precisão para peças cilíndricas e complexas, garantindo tolerâncias rigorosas e acabamento superior.",
      image: precisionPartsImage,
      details: [
        "Torneamento CNC de alta precisão",
        "Peças cilíndricas e cônicas complexas",
        "Tolerâncias micrométricas",
        "Acabamento superficial excepcional"
      ],
      modalContent: {
        overview: "Nossos serviços de torneamento utilizam tecnologia CNC avançada para produzir peças cilíndricas com precisão excepcional e acabamento superior.",
        benefits: [
          "Precisão dimensional micrométrica",
          "Capacidade para geometrias complexas",
          "Controle rigoroso de tolerâncias",
          "Acabamento superficial de alta qualidade",
          "Programação CNC otimizada"
        ],
        applications: [
          "Eixos e árvores",
          "Buchas e casquilhos",
          "Pinos e parafusos especiais",
          "Componentes rotativos"
        ]
      }
    },
    {
      id: 'fresamento',
      icon: Wrench,
      title: "Fresamento",
      description: "Usinagem de precisão através de fresamento CNC para componentes com geometrias variadas, superfícies planas e detalhes intrincados.",
      image: manufacturingProcessImage,
      details: [
        "Fresamento CNC multi-eixos",
        "Geometrias complexas e variadas",
        "Superfícies planas e curvas",
        "Detalhes intrincados e precisos"
      ],
      modalContent: {
        overview: "Nosso fresamento CNC oferece versatilidade excepcional para produzir peças com geometrias complexas e detalhes intrincados.",
        benefits: [
          "Fresamento multi-eixos avançado",
          "Capacidade para formas complexas",
          "Precisão em superfícies planas e curvas",
          "Detalhamento fino e preciso",
          "Programação CAM otimizada"
        ],
        applications: [
          "Moldes e matrizes",
          "Carcaças e chassi",
          "Flanges e bases",
          "Componentes aeroespaciais"
        ]
      }
    },
    {
      id: 'manutencao-recuperacao',
      icon: RefreshCw,
      title: "Manutenção e Recuperação de Peças",
      description: "Soluções especializadas em manutenção e recuperação de peças industriais, prolongando a vida útil e restaurando a funcionalidade original.",
      image: qualityComponentsImage,
      details: [
        "Análise técnica de desgaste",
        "Recuperação dimensional",
        "Soldagem e retífica especializada",
        "Testes de funcionalidade"
      ],
      modalContent: {
        overview: "Oferecemos serviços especializados de manutenção e recuperação, restaurando peças industriais com precisão e confiabilidade.",
        benefits: [
          "Diagnóstico preciso de problemas",
          "Técnicas avançadas de recuperação",
          "Soldagem especializada",
          "Testes rigorosos de qualidade",
          "Redução de custos operacionais"
        ],
        applications: [
          "Equipamentos industriais",
          "Máquinas de produção",
          "Componentes hidráulicos",
          "Peças de reposição"
        ]
      }
    },
    {
      id: 'ferramentais-dispositivos',
      icon: Cog,
      title: "Fabricação de Ferramentais e Dispositivos",
      description: "Desenvolvimento e fabricação de ferramentais, gabaritos e dispositivos customizados para otimizar processos de produção e garantir a repetibilidade.",
      image: precisionPartsImage,
      details: [
        "Ferramentais sob medida",
        "Gabaritos de montagem",
        "Dispositivos de fixação",
        "Otimização de processos"
      ],
      modalContent: {
        overview: "Desenvolvemos ferramentais e dispositivos personalizados que otimizam processos produtivos e garantem repetibilidade excepcional.",
        benefits: [
          "Projeto customizado para aplicação específica",
          "Otimização de tempos de produção",
          "Garantia de repetibilidade",
          "Redução de retrabalho",
          "Melhoria da qualidade final"
        ],
        applications: [
          "Linhas de produção",
          "Processos de montagem",
          "Controle de qualidade",
          "Automação industrial"
        ]
      }
    },
    {
      id: 'moldes',
      icon: PenTool,
      title: "Especialistas em Moldes",
      description: "Expertise na fabricação de moldes de injeção e estampo, com foco em precisão, durabilidade e eficiência para a indústria de transformação.",
      image: manufacturingProcessImage,
      details: [
        "Moldes de injeção de precisão",
        "Moldes de estampo",
        "Projeto e fabricação completa",
        "Testes e validação"
      ],
      modalContent: {
        overview: "Nossa expertise em moldes combina design avançado com fabricação de precisão para atender às demandas da indústria de transformação.",
        benefits: [
          "Design otimizado para eficiência",
          "Precisão dimensional excepcional",
          "Materiais de alta durabilidade",
          "Testes rigorosos de funcionalidade",
          "Suporte técnico especializado"
        ],
        applications: [
          "Indústria plástica",
          "Componentes automotivos",
          "Produtos eletrônicos",
          "Embalagens especiais"
        ]
      }
    }
  ];

  const nextService = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, services.length]);

  const prevService = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentServiceIndex((prev) => (prev - 1 + services.length) % services.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, services.length]);

  const goToService = useCallback((index: number) => {
    if (isTransitioning || index === currentServiceIndex) return;
    setIsTransitioning(true);
    setCurrentServiceIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, currentServiceIndex]);

  // Gerar todos os 8 cards para evitar re-renderização
  const allServiceCards = useMemo(() => services.map((service) => (
    <Card 
      key={service.id}
      className="group hover:shadow-medium transition-all duration-300 border border-border/50 h-full flex flex-col"
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
      
      <CardHeader className="flex-grow">
        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
          {service.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="mt-auto">
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
  )), [services, scrollToContact]);

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header - Left aligned */}
        <div className="mb-16 animate-fade-in">
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

        {/* Services Carousel */}
        <div className="relative mb-16 px-8">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentServiceIndex * (100 / 3)}%)`,
                width: `${(services.length * 100) / 3}%`
              }}
            >
              {allServiceCards.map((card, index) => (
                <div 
                  key={services[index].id}
                  className="w-1/3 px-4 flex-shrink-0"
                  style={{ width: `${100 / services.length}%` }}
                >
                  {card}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Mais próximas dos cards */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevService}
            disabled={isTransitioning}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-background/95 hover:bg-background border-border shadow-lg z-20 hidden lg:flex disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextService}
            disabled={isTransitioning}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-background/95 hover:bg-background border-border shadow-lg z-20 hidden lg:flex disabled:opacity-50"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToService(index)}
                disabled={isTransitioning}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentServiceIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-6 lg:hidden">
            <Button 
              variant="outline" 
              onClick={prevService}
              disabled={isTransitioning}
              className="disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Anterior
            </Button>
            <Button 
              variant="outline" 
              onClick={nextService}
              disabled={isTransitioning}
              className="disabled:opacity-50"
            >
              Próximo
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
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
