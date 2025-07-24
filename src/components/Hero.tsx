import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useCustomImage } from "@/hooks/useCustomImage";
import heroImage from "@/assets/hero-cnc-industrial.jpg";

const Hero = () => {
  const customHeroImage = useCustomImage('hero-main', heroImage);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={customHeroImage} 
          alt="Equipamentos de Usinagem CNC - JPD Usinagem" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            USINAGEM CNC, FERRAMENTARIA E
            <span className="block">MANUTENÇÃO DE COMPONENTES</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Entregamos as melhores soluções para sua empresa
          </p>

          <Button 
            size="lg"
            onClick={() => scrollToSection('servicos')}
            className="bg-primary text-white hover:bg-primary/90 transition-all text-lg px-8 py-4"
          >
            Conheça Nossos Serviços
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;