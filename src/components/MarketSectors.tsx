
import { useState, useMemo, useCallback } from "react";
import { ChevronLeft, ChevronRight, Building, Plane, Pill, Cog, Droplet, Heart, Zap, Mountain, Smartphone, Train, Bot, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MarketSectors = () => {
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const sectors = [
    {
      id: 'automotiva',
      icon: Building,
      title: "Indústria Automotiva",
      description: "Peças para motores (blocos, cabeçotes, virabrequins, bielas), transmissões (engrenagens, eixos), sistemas de freio e suspensão, componentes de chassi, moldes e ferramentas para fabricação.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      id: 'aeroespacial',
      icon: Plane,
      title: "Indústria Aeroespacial e Aeronáutica",
      description: "Componentes críticos para turbinas, fuselagens, asas, sistemas de controle, trens de pouso, peças estruturais leves, fixadores e atuadores, utilizando materiais como titânio, alumínio e superligas.",
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      id: 'farmaceutica',
      icon: Pill,
      title: "Indústria Farmacêutica",
      description: "Componentes para equipamentos de produção farmacêutica, máquinas de encapsulamento, sistemas de dosagem, peças para laboratórios e equipamentos de controle de qualidade com alto padrão de limpeza e precisão.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      id: 'maquinas-equipamentos',
      icon: Cog,
      title: "Indústria de Máquinas e Equipamentos",
      description: "Fabricantes de máquinas para os mais diversos fins (agrícolas, construção civil, mineração, têxtil, alimentícia, embalagens, metalúrgicas, etc.). Produzem engrenagens, eixos, rolamentos, estruturas, carcaças, cilindros hidráulicos e pneumáticos.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      id: 'petroleo-gas',
      icon: Droplet,
      title: "Indústria de Petróleo e Gás",
      description: "Componentes para válvulas, bombas, conectores, flanges, tubulações de alta pressão, equipamentos de perfuração e extração, peças para plataformas offshore e refinarias que exigem alta resistência e durabilidade.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      id: 'medica-odontologica',
      icon: Heart,
      title: "Indústria Médica e Odontológica",
      description: "Implantes (ortopédicos, dentários), instrumentos cirúrgicos, próteses, componentes para equipamentos de diagnóstico e terapias, peças para cadeiras e equipamentos odontológicos. Exige extrema precisão e uso de materiais biocompatíveis.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      id: 'energia',
      icon: Zap,
      title: "Indústria de Energia",
      description: "Peças para turbinas (eólicas, hidrelétricas, a gás, a vapor), geradores, eixos, componentes de válvulas e estruturas de suporte para usinas eólicas e termelétricas.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      id: 'geotecnica',
      icon: Mountain,
      title: "Indústria Geotécnica",
      description: "Componentes para equipamentos de perfuração, sondagem, fundações especiais, estacas, equipamentos de contenção e estabilização de solos, peças para obras de infraestrutura e engenharia geotécnica.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      id: 'eletronica-telecomunicacoes',
      icon: Smartphone,
      title: "Indústria Eletrônica e de Telecomunicações",
      description: "Gabinetes metálicos e plásticos de precisão, dissipadores de calor, conectores, suportes para placas de circuito, componentes de antenas e equipamentos de rede.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      id: 'ferroviaria',
      icon: Train,
      title: "Indústria Ferroviária",
      description: "Componentes para sistemas de freio, eixos de rodas, engrenagens para locomotivas, estruturas de vagões e sistemas de suspensão para o transporte ferroviário.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      id: 'automacao-robotica',
      icon: Bot,
      title: "Indústria de Automação Industrial e Robótica",
      description: "Componentes de precisão para robôs industriais, atuadores, sensores, garras, eixos de movimento, e estruturas para linhas de montagem automatizadas.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      id: 'alimenticia',
      icon: Utensils,
      title: "Indústria Alimentícia",
      description: "Peças para máquinas de processamento, envase e embalagem, componentes para tanques e tubulações, que exigem materiais sanitários (como aço inoxidável) e acabamento superficial impecável para evitar contaminação.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=400"
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
    <section id="atuacoes" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header - Left aligned */}
        <div className="mb-16 animate-fade-in text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Principais <span className="text-primary">Atuações no Mercado</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl">
            Nossa expertise atende diversos setores da indústria, oferecendo soluções 
            especializadas e customizadas para cada segmento com alta precisão e qualidade.
          </p>
        </div>

        {/* Sectors Carousel */}
        <div className="relative mb-16 px-8">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentBlockIndex * 100}%)`,
              }}
            >
              {sectorBlocks.map((block, blockIndex) => (
                <div 
                  key={blockIndex}
                  className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {block.map((sector) => (
                    <Card 
                      key={sector.id}
                      className="group hover:shadow-medium transition-all duration-300 border border-border/50 h-full flex flex-col"
                    >
                      <div className="relative overflow-hidden">
                        <img 
                          src={sector.image} 
                          alt={sector.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <sector.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      <CardHeader className="flex-grow">
                        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                          {sector.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
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
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-background/95 hover:bg-background border-border shadow-lg z-20 hidden lg:flex disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextBlock}
            disabled={isTransitioning}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-background/95 hover:bg-background border-border shadow-lg z-20 hidden lg:flex disabled:opacity-50"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
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
          <div className="flex justify-center gap-4 mt-6 lg:hidden">
            <Button 
              variant="outline" 
              onClick={prevBlock}
              disabled={isTransitioning}
              className="disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Anterior
            </Button>
            <Button 
              variant="outline" 
              onClick={nextBlock}
              disabled={isTransitioning}
              className="disabled:opacity-50"
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
