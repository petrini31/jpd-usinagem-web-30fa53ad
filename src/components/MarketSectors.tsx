
import { useState, useMemo, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Building, Plane, Pill, Cog, Droplet, Heart, Zap, Mountain, Smartphone, Train, Bot, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import OptimizedImage from "./OptimizedImage";

const MarketSectors = () => {
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const sectors = [
    {
      id: 'automotiva',
      icon: Building,
      title: "Indústria Automotiva",
      description: "Peças para motores (blocos, cabeçotes, virabrequins, bielas), transmissões (engrenagens, eixos), sistemas de freio e suspensão, componentes de chassi, moldes e ferramentas para fabricação.",
      image: "/lovable-uploads/c389b1c3-66fe-4964-8cf6-c6b4966a9e60.png"
    },
    {
      id: 'injecao-plastica',
      icon: Train,
      title: "Injeção Plástica",
      description: "Componentes para moldes de injeção plástica, matrizes, porta-moldes, insertos, canais de refrigeração, sistemas de extração e gavetas para produção de peças plásticas de alta precisão.",
      image: "/lovable-uploads/28087462-bab2-42aa-9639-f40509fec923.png"
    },
    {
      id: 'farmaceutica',
      icon: Pill,
      title: "Indústria Farmacêutica",
      description: "Componentes para equipamentos de produção farmacêutica, máquinas de encapsulamento, sistemas de dosagem, peças para laboratórios e equipamentos de controle de qualidade com alto padrão de limpeza e precisão.",
      image: "/lovable-uploads/dec3d1a6-b3e5-42f1-b536-d50f5322c31c.png"
    },
    {
      id: 'agricola',
      icon: Cog,
      title: "Indústria Agrícola",
      description: "Componentes para tratores, colheitadeiras, equipamentos de irrigação, sistemas de plantio, peças para implementos agrícolas, engrenagens, eixos e estruturas para máquinas de processamento de alimentos e beneficiamento de grãos.",
      image: "/lovable-uploads/407e4db0-5aff-4ff1-a425-6473a2ccc334.png"
    },
    {
      id: 'automacao-robotica',
      icon: Bot,
      title: "Indústria de Automação Industrial e Robótica",
      description: "Componentes de precisão para robôs industriais, atuadores, sensores, garras, eixos de movimento, e estruturas para linhas de montagem automatizadas.",
      image: "/lovable-uploads/e95a555a-a0a9-47b3-914e-3462320aeffb.png"
    },
    {
      id: 'alimenticia',
      icon: Utensils,
      title: "Indústria Alimentícia",
      description: "Peças para máquinas de processamento, envase e embalagem, componentes para tanques e tubulações, que exigem materiais sanitários (como aço inoxidável) e acabamento superficial impecável para evitar contaminação.",
      image: "/lovable-uploads/248ec544-caa9-4ba0-8c08-898392a2d8d2.png"
    },
    {
      id: 'petroleo-gas',
      icon: Droplet,
      title: "Indústria de Petróleo e Gás",
      description: "Componentes para válvulas, bombas, conectores, flanges, tubulações de alta pressão, equipamentos de perfuração e extração, peças para plataformas offshore e refinarias que exigem alta resistência e durabilidade.",
      image: "/lovable-uploads/fe2271b0-1ea4-40c5-a9db-7fdb22004661.png"
    },
    {
      id: 'aeroespacial',
      icon: Plane,
      title: "Indústria Aeroespacial e Aeronáutica",
      description: "Componentes críticos para turbinas, fuselagens, asas, sistemas de controle, trens de pouso, peças estruturais leves, fixadores e atuadores, utilizando materiais como titânio, alumínio e superligas.",
      image: "/lovable-uploads/9dd0ff85-d042-4379-b43c-18bfe0d638de.png"
    },
    {
      id: 'medica-odontologica',
      icon: Heart,
      title: "Indústria Médica e Odontológica",
      description: "Implantes (ortopédicos, dentários), instrumentos cirúrgicos, próteses, componentes para equipamentos de diagnóstico e terapias, peças para cadeiras e equipamentos odontológicos. Exige extrema precisão e uso de materiais biocompatíveis.",
      image: "/lovable-uploads/6666ef25-8040-4754-8cb3-579bee47ea4e.png"
    },
    {
      id: 'eletronica-telecomunicacoes',
      icon: Smartphone,
      title: "Indústria Eletrônica e de Telecomunicações",
      description: "Gabinetes metálicos e plásticos de precisão, dissipadores de calor, conectores, suportes para placas de circuito, componentes de antenas e equipamentos de rede.",
      image: "/lovable-uploads/a8d9cbcf-ad1f-41fa-830c-c7b9fcdbed75.png"
    },
    {
      id: 'geotecnica',
      icon: Mountain,
      title: "Indústria Geotécnica",
      description: "Componentes para equipamentos de perfuração, sondagem, fundações especiais, estacas, equipamentos de contenção e estabilização de solos, peças para obras de infraestrutura e engenharia geotécnica.",
      image: "/lovable-uploads/e01fa817-6092-4fbb-8bfe-773092e4abac.png"
    },
    {
      id: 'energia',
      icon: Zap,
      title: "Indústria de Energia",
      description: "Peças para turbinas (eólicas, hidrelétricas, a gás, a vapor), geradores, eixos, componentes de válvulas e estruturas de suporte para usinas eólicas e termelétricas.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=600&h=400"
    }
  ];

  // Dividir setores em blocos de 3
  const sectorBlocks = useMemo(() => {
    const blocks = [];
    for (let i = 0; i < sectors.length; i += 3) {
      blocks.push(sectors.slice(i, i + 3));
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
    setCurrentBlockIndex((prev) => (prev + 1) % sectorBlocks.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, sectorBlocks.length]);

  const prevBlock = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentBlockIndex((prev) => (prev - 1 + sectorBlocks.length) % sectorBlocks.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, sectorBlocks.length]);

  const goToBlock = useCallback((blockIndex: number) => {
    if (isTransitioning || blockIndex === currentBlockIndex) return;
    setIsTransitioning(true);
    setCurrentBlockIndex(blockIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, currentBlockIndex]);

  return (
    <section id="atuacoes" className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header - Left aligned */}
        <div className="mb-8 md:mb-16 animate-fade-in text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Principais <span className="text-primary">Atuações no Mercado</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl">
            Nossa expertise atende diversos setores da indústria, oferecendo soluções 
            especializadas e customizadas para cada segmento com alta precisão e qualidade.
          </p>
        </div>

        {/* Sectors Carousel */}
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
              {sectorBlocks.map((block, blockIndex) => (
                <div 
                  key={blockIndex}
                  className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8 px-2 md:px-0"
                >
                  {block.map((sector) => (
                    <Card 
                      key={sector.id}
                      className="group hover:shadow-medium transition-all duration-300 border border-border/50 h-full flex flex-col"
                    >
                      <div className="relative overflow-hidden">
                        <OptimizedImage
                          src={sector.image}
                          alt={sector.title}
                          className="w-full h-40 md:h-48 group-hover:scale-105 transition-transform duration-300"
                          loading={blockIndex === currentBlockIndex ? "eager" : "lazy"}
                          priority={blockIndex === 0}
                        />
                        <div className="absolute top-3 left-3 md:top-4 md:left-4">
                          <sector.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </div>
                      </div>
                      
                      <CardHeader className="flex-grow p-4 md:p-6">
                        <CardTitle className="text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                          {sector.title}
                        </CardTitle>
                        <CardDescription className="text-sm md:text-base text-muted-foreground">
                          {sector.description}
                        </CardDescription>
                      </CardHeader>
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
            {sectorBlocks.map((_, index) => (
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
      </div>
    </section>
  );
};

export default MarketSectors;
