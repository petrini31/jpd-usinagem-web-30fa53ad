import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envio do formulário
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado pelo interesse!",
    });
    
    // Limpar formulário
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(11) 99999-9999",
      link: "tel:+5511999999999"
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@jpdusinagem.com.br",
      link: "mailto:contato@jpdusinagem.com.br"
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "R. Uruguai, 573 - Parque das Hortênsias\nBom Jesus dos Perdões - SP",
      link: "https://maps.google.com/?q=R.+Uruguai,+573+Bom+Jesus+dos+Perdões+SP"
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Segunda à Sexta: 8h às 18h\nSábado: 8h às 12h",
      link: null
    }
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em <span className="text-accent">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Solicite seu orçamento sem compromisso. Nossa equipe está pronta para 
            atender suas necessidades em usinagem de precisão.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Informações de Contato
            </h3>
            
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-all duration-300 border border-border/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground whitespace-pre-line">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Map placeholder */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-primary flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Localização</p>
                    <p className="text-sm opacity-90">
                      R. Uruguai, 573 - Parque das Hortênsias<br />
                      Bom Jesus dos Perdões - SP
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Solicite seu Orçamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva seu projeto ou necessidade..."
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-accent text-accent-foreground hover:opacity-90 transition-opacity text-lg py-3"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;