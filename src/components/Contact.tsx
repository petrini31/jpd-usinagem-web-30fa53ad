
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(11) 95827-4054",
      link: "tel:+5511958274054"
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "comercial@jpdusinagem.com.br",
      link: "mailto:comercial@jpdusinagem.com.br"
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "R. Uruguai, 573 - Parque das Hortênsias\nBom Jesus dos Perdões - SP",
      link: "https://maps.google.com/?q=R.+Uruguai,+573+Bom+Jesus+dos+Perdões+SP"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-left mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Estamos prontos para atender você. Entre em contato pelos canais abaixo ou 
            visite nossa sede em Bom Jesus dos Perdões.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Fale Conosco
              </h3>
              <p className="text-muted-foreground text-lg">
                Nossa equipe está disponível para esclarecer dúvidas e fornecer 
                informações sobre nossos serviços.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 border border-border/50 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-5">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform duration-300 shadow-soft flex-shrink-0">
                        <info.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xl font-semibold text-foreground mb-3">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line text-lg break-words"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground whitespace-pre-line text-lg">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Map and Location */}
          <div className="space-y-8 animate-slide-up" style={{
            animationDelay: '0.2s'
          }}>
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Nossa Localização
              </h3>
              <p className="text-muted-foreground text-lg mb-8">
                Visite nossa sede em Bom Jesus dos Perdões, estrategicamente localizada 
                para atender toda a Grande São Paulo e interior.
              </p>
            </div>

            {/* Google Maps Embed */}
            <Card className="overflow-hidden shadow-strong animate-fade-in">
              <CardContent className="p-0">
                <div className="relative h-96">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.5668524987877!2d-46.4590534!3d-23.1776885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf27b8f00f15b7%3A0x7c0f4c4c4c4c4c4c!2sR.%20Uruguai%2C%20573%20-%20Parque%20das%20Hort%C3%AAncias%2C%20Bom%20Jesus%20dos%20Perd%C3%B5es%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                    className="w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
