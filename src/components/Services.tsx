
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Settings, Wrench, Cog, Zap } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import OptimizedImage from "./OptimizedImage";

const Services = () => {
  const services = [
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Usinagem CNC de Precisão",
      description: "Usinagem CNC com tolerâncias rigorosas para peças complexas e seriadas, atendendo diversos setores industriais com qualidade superior.",
      image: "/lovable-uploads/f370996c-dd23-4c78-b534-ce466c030a0b.png",
      technologies: ["Centro de Usinagem 5 eixos", "Torno CNC", "Controle de Qualidade", "CAD/CAM"],
      details: "Nossa usinagem CNC de precisão utiliza equipamentos de última geração para garantir tolerâncias micrométricas. Atendemos desde protótipos até grandes séries, com controle rigoroso de qualidade em cada etapa do processo."
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "Usinagem de Bicos de Injeção Plástica",
      description: "Especialistas em usinagem de bicos de injeção para moldes plásticos com tolerâncias máximas, garantindo precisão e qualidade superior em seus projetos.",
      image: "/lovable-uploads/48ae22ca-4c4f-4fbb-b4bb-e74727daef9f.png",
      technologies: ["Bicos Valvulados", "Tolerâncias Submicrométricas", "Aço Temperado", "Controle Dimensional"],
      details: "Fabricamos bicos de injeção para moldes plásticos com precisão excepcional. Nossa expertise inclui bicos valvulados, bicos térmicos e sistemas de injeção customizados, garantindo perfeita vedação e fluxo otimizado para seus moldes de injeção plástica."
    },
    {
      icon: <Cog className="w-8 h-8 text-primary" />,
      title: "Ferramentaria Especializada",
      description: "Desenvolvimento e fabricação de ferramentas, moldes e dispositivos sob medida para otimizar seus processos produtivos.",
      image: "/lovable-uploads/5747a4c1-c343-4946-a329-d3e6c45e6be9.png",
      technologies: ["Moldes de Injeção", "Estampos", "Gabaritos", "Ferramentas Especiais"],
      details: "Nossa ferramentaria desenvolve soluções completas para sua linha de produção. Criamos moldes de injeção, estampos, gabaritos e ferramentas especiais, sempre focando na durabilidade e precisão necessárias para otimizar seus processos industriais."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Cilindros Pneumáticos Customizados",
      description: "Fabricação de cilindros pneumáticos personalizados para automação industrial, com foco em durabilidade e performance superior.",
      image: "/lovable-uploads/77db13a0-f3ab-40f1-ad6e-d00c2a3ca32b.png",
      technologies: ["ISO 6431", "Dupla Ação", "Aço Inoxidável", "Vedações Especiais"],
      details: "Desenvolvemos cilindros pneumáticos customizados conforme ISO 6431 e outras normas internacionais. Nossa linha inclui cilindros de dupla ação, simples ação, rotativos e especiais para ambientes agressivos, garantindo automação confiável para sua indústria."
    }
  ];

  return (
    <section id="servicos" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 md:mb-16 text-left animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            Soluções completas em usinagem CNC, ferramentaria e pneumática industrial com a qualidade e precisão que sua empresa precisa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-border/50 h-full">
              <div className="relative overflow-hidden">
                <OptimizedImage
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading={index < 2 ? "eager" : "lazy"}
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 text-white">
                    {service.icon}
                    <h3 className="text-xl md:text-2xl font-bold">{service.title}</h3>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Ver Detalhes
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl flex items-center gap-3">
                        {service.icon}
                        {service.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <OptimizedImage
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 object-cover rounded-lg"
                        loading="lazy"
                      />
                      <p className="text-lg leading-relaxed text-muted-foreground">
                        {service.details}
                      </p>
                      <div>
                        <h4 className="font-semibold mb-2">Tecnologias e Especialidades:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-secondary/30 rounded-lg p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            Precisa de uma solução personalizada?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nossa equipe técnica está pronta para desenvolver a solução ideal para sua empresa. 
            Entre em contato e solicite um orçamento personalizado.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
            Solicitar Orçamento Personalizado
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
