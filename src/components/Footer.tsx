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
              JPD <span className="text-primary-foreground">Usinagem CNC</span>
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Especialistas em tecnologia de Usinagem CNC e desenvolvimento de desenhos industriais personalizados. 
              Transformamos suas ideias em realidade com precisão e qualidade incomparável.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>• Usinagem CNC de Precisão</li>
              <li>• Desenhos Industriais Personalizados</li>
              <li>• Fabricação de Componentes</li>
              <li>• Desenvolvimento de Projetos</li>
              <li>• Consultoria Técnica</li>
              <li>• Soluções Sob Medida</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">
                    R. Uruguai, 573 - Parque das Hortênsias<br />
                    Bom Jesus dos Perdões - SP
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-foreground" />
                <a 
                  href="tel:+5511958274054" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  (11) 95827-4054
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-foreground" />
                <a 
                  href="mailto:comercial@jpdusinagem.com.br" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  comercial@jpdusinagem.com.br
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