import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Pneumatica = () => {
  return (
    <section id="pneumatica" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="/pneumatica.png"
              alt="Cilindros Pneumáticos JPD Usinagem"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Cilindros <span className="text-primary">Pneumáticos</span> de Alta Performance
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Descubra a excelência em cilindros pneumáticos com a JPD Usinagem. Projetados para
              oferecer desempenho superior e confiabilidade em suas aplicações industriais.
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Projetos personalizados para sua necessidade
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Alta durabilidade e resistência
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Suporte técnico especializado
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary-dark"
              >
                <Link to="/cilindros-pneumaticos">
                  Ver Mais Sobre Pneumática
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={() => window.open('https://wa.me/5511958274054', '_blank')}
              >
                Orçamento via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pneumatica;
