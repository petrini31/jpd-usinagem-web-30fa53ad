
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
      
      {/* Primeira seção de scroll reveal - Usinagem CNC de alta precisão */}
      <ScrollRevealSection 
        image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1600&h=600"
        title="Precisão em Cada Detalhe"
        subtitle="Tecnologia avançada para resultados excepcionais"
        description="Nossa expertise em usinagem CNC garante a máxima precisão em cada projeto, atendendo aos mais rigorosos padrões de qualidade da indústria."
      />
      
      <MaterialsCarousel />
      <MarketSectors />
      <Portfolio />
      
      {/* Segunda seção de scroll reveal - Máquinas CNC industriais */}
      <ScrollRevealSection 
        image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1600&h=600"
        title="Inovação e Qualidade"
        subtitle="Soluções customizadas para sua empresa"
        description="Desenvolvemos soluções sob medida para atender às necessidades específicas de cada cliente, combinando tradição e inovação."
      />
      
      <Pneumatica />
      
      {/* Terceira seção de scroll reveal - Peças usinadas de precisão */}
      <ScrollRevealSection 
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600&h=600"
        title="Excelência em Usinagem"
        subtitle="Componentes de alta qualidade"
        description="Cada peça produzida passa por rigoroso controle de qualidade, garantindo os mais altos padrões de precisão e acabamento."
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
