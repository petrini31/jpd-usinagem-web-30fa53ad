
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
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      
      {/* Primeira seção de revelação - entre Nossos Serviços e Materiais Trabalhados */}
      <ScrollRevealSection
        title="Precisão em Cada Detalhe"
        subtitle="Tecnologia Avançada"
        description="Nossa expertise em usinagem CNC garante a máxima precisão em cada projeto. Utilizamos equipamentos de última geração para entregar componentes que atendem aos mais rigorosos padrões de qualidade da indústria."
        imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200&h=800"
        imageAlt="Precisão em usinagem CNC"
        buttonText="Conheça Nossos Equipamentos"
        onButtonClick={() => scrollToSection('servicos')}
      />

      {/* Seção de Materiais Trabalhados */}
      <section id="materiais" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Materiais <span className="text-primary">Trabalhados</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trabalhamos com uma ampla variedade de materiais, desde aços convencionais até superligas especiais, 
              garantindo a solução ideal para cada aplicação.
            </p>
          </div>
          <MaterialsCarousel />
        </div>
      </section>

      <Portfolio />
      <MarketSectors />
      
      {/* Segunda seção de revelação - entre Principais Atuações no Mercado e Especialistas em Pneumática */}
      <ScrollRevealSection
        title="Inovação e Qualidade"
        subtitle="Compromisso com a Excelência"
        description="Há mais de 15 anos no mercado, a JPD Usinagem se destaca pela qualidade excepcional e inovação constante. Nosso compromisso é entregar soluções que superem expectativas e impulsionem o sucesso de nossos clientes."
        imageUrl="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=1200&h=800"
        imageAlt="Inovação e qualidade na usinagem"
        buttonText="Conheça Nossa História"
        onButtonClick={() => scrollToSection('empresa')}
        reversed={true}
      />

      <Pneumatica />
      <Quote />
      <Company />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
