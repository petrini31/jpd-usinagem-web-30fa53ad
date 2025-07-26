
import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Phone, Mail, Factory, Settings, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PneumaticaFull = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goBack = () => {
    window.history.back();
  };

  const scrollToContact = () => {
    const element = document.getElementById('contato-pneumatica');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const galleryImages = [
    {
      src: "/lovable-uploads/465f725e-f900-4e3d-bbd1-7857bff755a0.png",
      alt: "Sistema Pneumático Industrial",
      icon: Settings
    },
    {
      src: "/lovable-uploads/5374c883-b08b-4cf0-bac2-5738865be94f.png",
      alt: "Cilindros Pneumáticos de Precisão",
      icon: Factory
    },
    {
      src: "/lovable-uploads/29628d4e-98eb-4c44-89cf-954fdd334f0d.png",
      alt: "Cilindros Pneumáticos Manufaturados",
      icon: Wrench
    },
    {
      src: "/lovable-uploads/4cf2cbb7-3495-45ff-a87d-e3a1f5b88e49.png",
      alt: "Cilindro Pneumático Transparente",
      icon: Settings
    }
  ];

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, galleryImages.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, galleryImages.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Button 
              variant="ghost" 
              onClick={goBack}
              className="flex items-center gap-2 hover:bg-muted"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar
            </Button>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">JPD</span>
              </div>
              <span className="text-xl font-bold text-foreground">JPD Usinagem</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
                Cilindros Pneumáticos<br />
                <span className="text-primary">de Alta Performance</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                Especialistas em fabricação, reparo e manutenção de cilindros pneumáticos 
                com precisão micrométrica e qualidade excepcional.
              </p>
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Solicitar Projeto Personalizado
              </Button>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/77db13a0-f3ab-40f1-ad6e-d00c2a3ca32b.png"
                alt="Cilindro Pneumático de Precisão"
                className="w-48 h-48 md:w-80 md:h-80 object-contain animate-slide-up"
                style={{ animationDelay: '0.2s' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Galeria de <span className="text-primary">Cilindros Pneumáticos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Conheça nossa linha completa de cilindros pneumáticos desenvolvidos com tecnologia de ponta.
            </p>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {galleryImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="group hover:shadow-lg transition-all duration-300 mx-2">
                      <div className="relative overflow-hidden">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        <div className="absolute bottom-3 left-3">
                          <image.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-foreground text-center">
                          {image.alt}
                        </h3>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <Button 
                variant="outline" 
                size="icon"
                onClick={prevSlide}
                disabled={isTransitioning}
                className="disabled:opacity-50"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isTransitioning) {
                        setIsTransitioning(true);
                        setCurrentIndex(index);
                        setTimeout(() => setIsTransitioning(false), 300);
                      }
                    }}
                    disabled={isTransitioning}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index 
                        ? 'bg-primary scale-125' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="icon"
                onClick={nextSlide}
                disabled={isTransitioning}
                className="disabled:opacity-50"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <image.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground text-center">
                    {image.alt}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Especificações <span className="text-primary">Técnicas</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Settings className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Precisão Micrométrica</h3>
              <p className="text-muted-foreground">Tolerâncias de até ±0,01mm</p>
            </Card>

            <Card className="p-6 text-center">
              <Factory className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pressões de Trabalho</h3>
              <p className="text-muted-foreground">De 0,5 a 16 bar</p>
            </Card>

            <Card className="p-6 text-center">
              <Wrench className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Durabilidade</h3>
              <p className="text-muted-foreground">Mais de 2 milhões de ciclos</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato-pneumatica" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Entre em <span className="text-primary">Contato</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Solicite um orçamento personalizado para seus cilindros pneumáticos
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Telefone</h3>
              <p className="text-muted-foreground">(11) 9999-9999</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">E-mail</h3>
              <p className="text-muted-foreground">contato@jpdusinagem.com.br</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PneumaticaFull;
