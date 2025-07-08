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

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Settings className="w-12 h-12 text-accent opacity-20" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Cog className="w-16 h-16 text-accent opacity-20" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Zap className="w-10 h-10 text-accent opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Precisão em 
            <span className="text-accent block mt-2">Usinagem CNC</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Especialistas em usinagem de precisão para todas as suas necessidades industriais. 
            Qualidade, tecnologia e inovação em cada projeto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              onClick={() => scrollToSection('servicos')}
              className="bg-gradient-accent text-accent-foreground hover:opacity-90 transition-opacity text-lg px-8 py-4"
            >
              Conheça Nossos Serviços
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contato')}
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="animate-slide-up">
              <h3 className="text-4xl font-bold text-accent mb-2">15+</h3>
              <p className="text-primary-foreground/90">Anos de Experiência</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-4xl font-bold text-accent mb-2">500+</h3>
              <p className="text-primary-foreground/90">Projetos Realizados</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-4xl font-bold text-accent mb-2">100%</h3>
              <p className="text-primary-foreground/90">Qualidade Garantida</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;