import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              JPD <span className="text-accent">Usinagem CNC</span>
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Especialistas em usinagem de precisão, oferecendo soluções completas 
              para diversos segmentos industriais com qualidade e tecnologia.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-sm">Segunda à Sexta: 8h às 18h</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-sm">Sábado: 8h às 12h</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>• Usinagem em Geral</li>
              <li>• Fabricação de Máquinas</li>
              <li>• Componentes de Qualidade</li>
              <li>• Tratamentos Térmicos</li>
              <li>• Ferramentaria</li>
              <li>• Projetos Customizados</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">
                    R. Uruguai, 573 - Parque das Hortênsias<br />
                    Bom Jesus dos Perdões - SP
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a 
                  href="tel:+5511999999999" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  (11) 99999-9999
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a 
                  href="mailto:contato@jpdusinagem.com.br" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  contato@jpdusinagem.com.br
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {currentYear} JPD Usinagem CNC. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;