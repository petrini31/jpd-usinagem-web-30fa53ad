import { ArrowRight, Settings, Cog, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cnc.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="CNC Machining Equipment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Floating Industrial Elements */}
      <div className="absolute top-20 left-10 animate-machinery-move">
        <Settings className="w-12 h-12 text-primary-foreground opacity-30" />
      </div>
      <div className="absolute top-40 right-20 animate-machinery-move" style={{ animationDelay: '1s' }}>
        <Cog className="w-16 h-16 text-primary-foreground opacity-30" />
      </div>
      <div className="absolute bottom-40 left-20 animate-machinery-move" style={{ animationDelay: '2s' }}>
        <Zap className="w-10 h-10 text-primary-foreground opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Tecnologia em 
            <span className="text-primary-foreground block mt-2">Usinagem CNC</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Especialistas em usinagem CNC de alta precisão e desenvolvimento de desenhos industriais personalizados. 
            Transformamos suas ideias em realidade com tecnologia de ponta e qualidade incomparável.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              onClick={() => scrollToSection('servicos')}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all text-lg px-8 py-4 animate-pulse-glow"
            >
              Conheça Nossos Serviços
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('orcamento')}
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="animate-slide-up">
              <h3 className="text-4xl font-bold text-primary-foreground mb-2">15+</h3>
              <p className="text-primary-foreground/90">Anos de Experiência em CNC</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-4xl font-bold text-primary-foreground mb-2">1000+</h3>
              <p className="text-primary-foreground/90">Projetos Executados</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-4xl font-bold text-primary-foreground mb-2">100%</h3>
              <p className="text-primary-foreground/90">Precisão Garantida</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;