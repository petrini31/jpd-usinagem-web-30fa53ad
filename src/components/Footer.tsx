import { Settings, Linkedin, Instagram, MessageCircle, Wrench, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const serviceAreas = [
    "Atibaia", "Bragança Paulista", "São Paulo", "Guarulhos",
    "Bom Jesus dos Perdões", "Campo Limpo Paulista", "Jundiaí", "Campinas"
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-4 h-4 text-muted-foreground" />,
      label: "Telefone",
      value: "+55 (11) 99999-9999"
    },
    {
      icon: <MessageCircle className="w-4 h-4 text-muted-foreground" />,
      label: "Email",
      value: "contato@jpdusinagem.com"
    },
    {
      icon: <MapPin className="w-4 h-4 text-muted-foreground" />,
      label: "Endereço",
      value: "Av. Industrial, 1234 - Centro"
    }
  ];

  return (
    <footer className="bg-muted py-12 md:py-16 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">JPD Usinagem</h3>
            </div>
            <p className="text-muted-foreground">
              Especialistas em usinagem CNC de precisão, ferramentaria e sistemas pneumáticos industriais. 
              Qualidade e inovação em cada projeto.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.linkedin.com/company/jpd-usinagem" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.instagram.com/jpd.usinagem" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Wrench className="w-5 h-5 text-primary" />
              Serviços
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Usinagem CNC de Precisão
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Bicos de Injeção Plástica
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Ferramentaria Especializada
                </a>
              </li>
              <li>
                <a href="#pneumatica" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cilindros Pneumáticos
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projetos Customizados
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Áreas de Atuação
            </h4>
            <div className="space-y-3">
              <p className="text-sm text-primary font-medium">
                Atendemos os maiores mercados industriais do Brasil
              </p>
              <div className="grid grid-cols-2 gap-1">
                {serviceAreas.map((area, index) => (
                  <span key={index} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              Contato
            </h4>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-3">
                  {contact.icon}
                  <div>
                    <p className="font-medium text-sm text-foreground">{contact.label}</p>
                    <p className="text-sm text-muted-foreground">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2024 JPD Usinagem. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
              <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
