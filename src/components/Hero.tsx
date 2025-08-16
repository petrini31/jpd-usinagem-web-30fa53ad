import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToQuote = () => {
    const quoteSection = document.getElementById('orcamento');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('servicos');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Background Blur */}
      <div className="absolute inset-0 bg-secondary/10 backdrop-blur-md z-10"></div>

      {/* Animated Circles */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl opacity-50 animate-pulse duration-10000"></div>
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-red-500/10 blur-3xl opacity-50 animate-pulse duration-10000"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <div className="bg-primary/10 inline-flex px-4 py-2 rounded-full font-medium text-primary animate-in fade-in duration-700">
            Inovação e Precisão
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground animate-in fade-in duration-700 delay-100">
            Usinagem CNC de Precisão e Ferramentaria Especializada
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-in fade-in duration-700 delay-200">
            Soluções completas em usinagem CNC, ferramentaria e pneumática industrial. Atendemos Atibaia, Bragança Paulista, São Paulo e toda região.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg text-lg px-8 py-6 rounded-xl"
              onClick={scrollToQuote}
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-secondary/50"
              onClick={scrollToServices}
            >
              Nossos Serviços
              <ArrowDown className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Social Proof Section */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mt-8 animate-in fade-in duration-700 delay-300">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">10+</span> Anos de Experiência
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">200+</span> Projetos Concluídos
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">50+</span> Clientes Satisfeitos
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      {/* <WhatsAppButton /> */}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 text-center z-20 animate-bounce">
        <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="w-6 h-6 mx-auto" />
          Saiba Mais
        </a>
      </div>
    </section>
  );
};

export default Hero;
