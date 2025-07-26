
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ScrollRevealSection from "@/components/ScrollRevealSection";
import MaterialsCarousel from "@/components/MaterialsCarousel";
import Portfolio from "@/components/Portfolio";
import MarketSectors from "@/components/MarketSectors";
import Pneumatica from "@/components/Pneumatica";
import Quote from "@/components/Quote";
import Company from "@/components/Company";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      
      {/* Primeira seção de scroll reveal - Abaixo de Nossos Serviços e acima de Principais Atuações no Mercado */}
      <ScrollRevealSection 
        image="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=1600&h=600"
        title="Precisão em Cada Detalhe"
        subtitle="Tecnologia avançada para resultados excepcionais"
        description="Nossa expertise em usinagem CNC garante a máxima precisão em cada projeto, atendendo aos mais rigorosos padrões de qualidade da indústria."
      />
      
      <MaterialsCarousel />
      <MarketSectors />
      <Portfolio />
      
      {/* Segunda seção de scroll reveal - Abaixo de Nosso Portfólio e acima de Soluções Pneumáticas de Alta Performance */}
      <ScrollRevealSection 
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600&h=600"
        title="Inovação e Qualidade"
        subtitle="Soluções customizadas para sua empresa"
        description="Desenvolvemos soluções sob medida para atender às necessidades específicas de cada cliente, combinando tradição e inovação."
      />
      
      <Pneumatica />
      
      {/* Terceira seção de scroll reveal - Abaixo de Soluções Pneumáticas de Alta Performance e acima de Sobre a JPD Usinagem CNC */}
      <ScrollRevealSection 
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600&h=600"
        title="Excelência Industrial"
        subtitle="Automação e robótica de ponta"
        description="Investimos constantemente em tecnologia para oferecer as melhores soluções em automação industrial e sistemas pneumáticos."
      />
      
      <Company />
      <Contact />
      <Quote />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
