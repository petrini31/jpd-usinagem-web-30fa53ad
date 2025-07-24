
import { Factory, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCustomImage } from "@/hooks/useCustomImage";

const Pneumatica = () => {
  const pneumaticImage1 = useCustomImage('pneumatic-1', 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600&h=400');
  const pneumaticImage2 = useCustomImage('pneumatic-2', 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600&h=400');
  const pneumaticImage3 = useCustomImage('pneumatic-3', 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&q=80&w=600&h=400');

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
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Text Content */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-foreground mb-4">
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

              <p>
                A <strong className="text-primary">JPD Usinagem</strong> se destaca no mercado pela 
                capacidade única de oferecer serviços completos de <strong className="text-primary">fabricação, 
                reparo e manutenção</strong> de cilindros pneumáticos. Nossa oficina especializada conta 
                com equipamentos de última geração e técnicos altamente qualificados, garantindo que 
                cada cilindro seja restaurado ou fabricado com os mais altos padrões de qualidade e durabilidade.
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <Button 
                size="lg" 
                onClick={scrollToContact} 
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
              >
                Solicitar Projeto
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                onClick={openPneumaticaPage} 
                className="border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                Ver Mais
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src={pneumaticImage1} 
                  alt="Cilindros Pneumáticos" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src={pneumaticImage2} 
                  alt="Sistemas de Automação" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-6">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src={pneumaticImage3} 
                  alt="Equipamentos Pneumáticos" 
                  className="w-full h-full object-cover"
                />
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
