
import Header from "@/components/Header";
import Services from "@/components/Services";
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
      <Services />
      <Portfolio />
      <MarketSectors />
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
