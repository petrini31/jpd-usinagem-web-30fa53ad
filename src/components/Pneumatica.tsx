
import { Factory, ArrowRight, ExternalLink, Settings, Wrench } from "lucide-react";
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
              <div className="relative overflow-hidden rounded-lg shadow-medium">
                <img 
                  src="/lovable-uploads/904064bb-8bba-48f4-81df-ea8735cb9997.png"
                  alt="Sistema Pneumático Industrial"
                  className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <Settings className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-medium">
                <img 
                  src="/lovable-uploads/5374c883-b08b-4cf0-bac2-5738865be94f.png"
                  alt="Cilindros Pneumáticos de Precisão"
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <Factory className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            <div className="space-y-4 mt-6">
              <div className="relative overflow-hidden rounded-lg shadow-medium">
                <img 
                  src="/lovable-uploads/2f4f9d38-c8e0-4f26-ac39-3dc5473788e8.png"
                  alt="Montagem de Pistão - Fabricação"
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-medium">
                <img 
                  src="/lovable-uploads/4cf2cbb7-3495-45ff-a87d-e3a1f5b88e49.png"
                  alt="Cilindro Pneumático Transparente"
                  className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <Settings className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pneumatica;
