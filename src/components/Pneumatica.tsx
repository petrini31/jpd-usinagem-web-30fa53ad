
import { Factory, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pneumatica = () => {
  const scrollToContact = () => {
    const element = document.getElementById('orcamento');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const openPneumaticaPage = () => {
    window.open('/pneumatica', '_blank');
  };

  return (
    <section id="pneumatica" className="py-16 bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 right-10 w-48 h-48 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-accent rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-left mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Especialistas em <span className="text-primary">Pneumática</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Nossa expertise em fabricação de cilindros pneumáticos representa décadas de 
            inovação e excelência técnica. Desenvolvemos soluções personalizadas que combinam 
            precisão dimensional, durabilidade excepcional e performance superior.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Text Content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Soluções Pneumáticas de Alta Performance
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Nossa <strong className="text-primary">especialização em cilindros pneumáticos</strong> 
                vai além da fabricação tradicional. Desenvolvemos cada componente com precisão 
                micrométrica, utilizando materiais de alta qualidade e processos de manufatura 
                avançados que garantem performance excepcional e vida útil estendida.
              </p>
              
              <p>
                Desde o <strong className="text-primary">projeto personalizado</strong> até a 
                produção final, nossa equipe técnica especializada trabalha em estreita 
                colaboração com nossos clientes para desenvolver soluções pneumáticas que 
                atendem perfeitamente às necessidades específicas de cada aplicação industrial.
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <Button size="lg" onClick={scrollToContact} className="bg-primary text-primary-foreground hover:bg-primary-dark transition-colors">
                Solicitar Projeto
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button size="lg" variant="outline" onClick={openPneumaticaPage} className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                Ver Mais
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <div className="aspect-square bg-gradient-primary rounded-lg opacity-20 flex items-center justify-center">
                <Factory className="w-12 h-12 text-primary" />
              </div>
              <div className="aspect-[4/3] bg-gradient-accent rounded-lg opacity-20 flex items-center justify-center">
                <Factory className="w-10 h-10 text-primary" />
              </div>
            </div>
            <div className="space-y-4 mt-6">
              <div className="aspect-[4/3] bg-gradient-primary rounded-lg opacity-20 flex items-center justify-center">
                <Factory className="w-10 h-10 text-primary" />
              </div>
              <div className="aspect-square bg-gradient-accent rounded-lg opacity-20 flex items-center justify-center">
                <Factory className="w-12 h-12 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pneumatica;
