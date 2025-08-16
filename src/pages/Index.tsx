
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MaterialsCarousel from "@/components/MaterialsCarousel";
import Portfolio from "@/components/Portfolio";
import MarketSectors from "@/components/MarketSectors";
import Pneumatica from "@/components/Pneumatica";
import Quote from "@/components/Quote";
import Company from "@/components/Company";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // SEO dinâmico baseado na rota
    const updateSEO = () => {
      const path = location.pathname;
      
      const seoConfig: Record<string, {title: string, description: string, keywords: string}> = {
        '/usinagem-cnc': {
          title: 'Usinagem CNC de Precisão - JPD Usinagem | Atibaia, Bragança, SP',
          description: 'Usinagem CNC de alta precisão em Atibaia, Bragança Paulista e região. Equipamentos modernos para peças complexas e seriadas. Orçamento gratuito.',
          keywords: 'usinagem cnc, usinagem de precisão, cnc atibaia, usinagem bragança paulista, usinagem cnc são paulo'
        },
        '/tornearia': {
          title: 'Tornearia Industrial - JPD Usinagem | Torneamento CNC',
          description: 'Serviços de tornearia e torneamento CNC em Atibaia e região. Peças cilíndricas com máxima precisão. Atendimento rápido e qualidade garantida.',
          keywords: 'tornearia, torneamento cnc, torneamento atibaia, tornearia perto de mim, torneamento industrial'
        },
        '/fresamento': {
          title: 'Fresamento Industrial - JPD Usinagem | Fresamento CNC',
          description: 'Fresamento de precisão em Bragança Paulista e região. Usinagem de superfícies complexas com tecnologia CNC. Qualidade e pontualidade.',
          keywords: 'fresamento, fresamento cnc, fresamento bragança paulista, fresamento perto de mim, fresamento industrial'
        },
        '/cilindros-pneumaticos': {
          title: 'Cilindros Pneumáticos ISO 6431 - JPD Usinagem | Fabricação',
          description: 'Fabricação de cilindros pneumáticos ISO 6431 personalizados. Atendemos Atibaia, Jundiaí, Campinas e região. Qualidade e durabilidade garantidas.',
          keywords: 'cilindros pneumáticos, cilindro pneumático iso 6431, fabricante cilindro pneumático, onde comprar cilindro pneumático, pneumática industrial'
        },
        '/usinagem-atibaia': {
          title: 'Usinagem em Atibaia - JPD Usinagem CNC | Torneamento e Fresamento',
          description: 'Usinagem especializada em Atibaia - CNC, torneamento, fresamento e cilindros pneumáticos. Atendimento próximo com qualidade superior.',
          keywords: 'usinagem atibaia, usinagem perto de mim, cnc atibaia, torneamento atibaia, fresamento atibaia'
        },
        '/usinagem-braganca': {
          title: 'Usinagem em Bragança Paulista - JPD Usinagem CNC',
          description: 'Serviços de usinagem CNC em Bragança Paulista. Torneamento, fresamento e fabricação de peças industriais. Orçamento sem compromisso.',
          keywords: 'usinagem bragança paulista, cnc bragança, torneamento bragança paulista, fresamento bragança paulista'
        },
        '/usinagem-auto-pecas': {
          title: 'Usinagem de Auto Peças - JPD Usinagem | Peças Automotivas',
          description: 'Usinagem especializada em auto peças e componentes automotivos. Precisão e qualidade para o setor automotivo em SP.',
          keywords: 'usinagem auto peças, usinagem automotiva, peças automotivas usinadas, usinagem setor automotivo'
        },
        '/usinagem-agricola': {
          title: 'Usinagem Agrícola - JPD Usinagem | Peças para Equipamentos',
          description: 'Usinagem de peças para equipamentos agrícolas. Componentes resistentes e duráveis para o agronegócio. Atendimento especializado.',
          keywords: 'usinagem agrícola, peças equipamentos agrícolas, usinagem agronegócio, componentes agrícolas usinados'
        }
      };

      const config = seoConfig[path];
      if (config) {
        document.title = config.title;
        const metaDescription = document.querySelector('meta[name="description"]');
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        
        if (metaDescription) {
          metaDescription.setAttribute('content', config.description);
        }
        if (metaKeywords) {
          metaKeywords.setAttribute('content', config.keywords);
        }
      }
    };

    updateSEO();
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <MaterialsCarousel />
      <MarketSectors />
      <Portfolio />
      <Pneumatica />
      <Company />
      <Contact />
      <Quote />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
