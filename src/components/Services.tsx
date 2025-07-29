
import { useState, useMemo, useCallback, useRef } from "react";
import { Settings, Wrench, Cog, ArrowRight, PenTool, RefreshCw, ChevronLeft, ChevronRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import OptimizedImage from "./OptimizedImage";

// Import das novas imagens dos serviços
const usinagemCncImage = "/lovable-uploads/f370996c-dd23-4c78-b534-ce466c030a0b.png";
const desenhosIndustriaisImage = "/lovable-uploads/39454b83-b7cf-4cbe-83d6-9609d65aa701.png";
const cilindrosPneumaticosImage = "/lovable-uploads/2e86ffbf-edfb-42e6-abea-d053f935f05b.png";
const torneamentoImage = "/lovable-uploads/5747a4c1-c343-4946-a329-d3e6c45e6be9.png";
const fresamentoImage = "/lovable-uploads/d96ed422-eb47-483d-8dff-2ec3026e0fa7.png";
const manutencaoRecuperacaoImage = "/lovable-uploads/9bc73a42-18ba-45e1-96b7-c2035acfb640.png";
const especialistasMoldesImage = "/lovable-uploads/7de9727d-b15c-4acd-a2b3-8bc626ea3949.png";

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
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
      image: usinagemCncImage,
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
      image: desenhosIndustriaisImage,
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
      image: cilindrosPneumaticosImage,
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
      image: torneamentoImage,
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
      image: fresamentoImage,
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
      image: manutencaoRecuperacaoImage,
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
      image: torneamentoImage,
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
      image: especialistasMoldesImage,
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
    },
    {
      id: 'retifica',
      icon: Zap,
      title: "Retificação de Precisão",
      description: "Serviços de retificação de alta precisão para acabamento superficial superior e tolerâncias extremamente rigorosas em diversas geometrias.",
      image: fresamentoImage,
      details: [
        "Retífica cilíndrica e plana",
        "Tolerâncias micrométricas",
        "Acabamento superficial espelhado",
        "Peças temperadas e endurecidas"
      ],
      modalContent: {
        overview: "Nossa retificação de precisão garante acabamentos superficiais excepcionais e tolerâncias dimensionais extremamente rigorosas para as aplicações mais exigentes.",
        benefits: [
          "Precisão dimensional micrométrica",
          "Acabamento superficial superior",
          "Capacidade para materiais endurecidos",
          "Geometrias cilíndricas e planas",
          "Controle rigoroso de qualidade"
        ],
        applications: [
          "Componentes de precisão",
          "Peças para instrumentos",
          "Elementos de máquinas",
          "Ferramentas de corte"
        ]
      }
    }
  ];

  // Dividir serviços em blocos de 3
  const serviceBlocks = useMemo(() => {
    const blocks = [];
    for (let i = 0; i < services.length; i += 3) {
      blocks.push(services.slice(i, i + 3));
    }
    return blocks;
  }, []);

  // Touch handlers para mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && !isTransitioning) {
      nextBlock();
    }
    if (isRightSwipe && !isTransitioning) {
      prevBlock();
    }
  };

  const nextBlock = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentBlockIndex((prev) => (prev + 1) % serviceBlocks.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, serviceBlocks.length]);

  const prevBlock = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentBlockIndex((prev) => (prev - 1 + serviceBlocks.length) % serviceBlocks.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, serviceBlocks.length]);

  const goToBlock = useCallback((blockIndex: number) => {
    if (isTransitioning || blockIndex === currentBlockIndex) return;
    setIsTransitioning(true);
    setCurrentBlockIndex(blockIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, currentBlockIndex]);

  return (
    <section id="servicos" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header - Left aligned */}
        <div className="mb-8 md:mb-16 animate-fade-in">
          <div className="max-w-2xl text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Especialistas em tecnologia de Usinagem CNC e desenvolvimento de desenhos industriais personalizados. 
              Oferecemos soluções completas e inovadoras para todos os seus projetos.
            </p>
          </div>
        </div>

        {/* Services Carousel */}
        <div className="relative mb-8 md:mb-16 px-2 md:px-8">
          <div 
            ref={carouselRef}
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentBlockIndex * 100}%)`,
              }}
            >
              {serviceBlocks.map((block, blockIndex) => (
                <div 
                  key={blockIndex}
                  className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8 px-2 md:px-0"
                >
                  {block.map((service) => (
                    <Card 
                      key={service.id}
                      className="group hover:shadow-medium transition-all duration-300 border border-border/50 h-full flex flex-col"
                    >
                      <div className="relative overflow-hidden">
                        <OptimizedImage
                          src={service.image}
                          alt={service.title}
                          className="w-full h-40 md:h-48 group-hover:scale-105 transition-transform duration-300"
                          loading={blockIndex === currentBlockIndex ? "eager" : "lazy"}
                          priority={blockIndex === 0}
                        />
                        <div className="absolute top-3 left-3 md:top-4 md:left-4">
                          <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </div>
                      </div>
                      
                      <CardHeader className="flex-grow p-4 md:p-6">
                        <CardTitle className="text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-sm md:text-base text-muted-foreground">
                          {service.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="mt-auto p-4 md:p-6 pt-0">
                        <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                          {service.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-primary mt-0.5 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex gap-2 mt-auto">
                          <Button 
                            onClick={scrollToContact}
                            className="flex-1 bg-primary text-primary-foreground hover:bg-primary-dark transition-colors text-xs md:text-sm py-2 md:py-2"
                          >
                            Solicitar Orçamento
                          </Button>
                          <Button 
                            variant="outline"
                            onClick={() => setSelectedService(service)}
                            className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-xs md:text-sm py-2 md:py-2"
                          >
                            Ver Detalhes
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevBlock}
            disabled={isTransitioning}
            className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 bg-background/95 hover:bg-background border-border shadow-lg z-20 disabled:opacity-50 w-8 h-8 md:w-10 md:h-10"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextBlock}
            disabled={isTransitioning}
            className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 bg-background/95 hover:bg-background border-border shadow-lg z-20 disabled:opacity-50 w-8 h-8 md:w-10 md:h-10"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </Button>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {serviceBlocks.map((_, index) => (
              <button
                key={index}
                onClick={() => goToBlock(index)}
                disabled={isTransitioning}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentBlockIndex === index 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-4 md:mt-6 lg:hidden">
            <Button 
              variant="outline" 
              onClick={prevBlock}
              disabled={isTransitioning}
              className="disabled:opacity-50 text-sm"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Anterior
            </Button>
            <Button 
              variant="outline" 
              onClick={nextBlock}
              disabled={isTransitioning}
              className="disabled:opacity-50 text-sm"
            >
              Próximo
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
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
