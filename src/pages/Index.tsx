
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MaterialsCarousel from "@/components/MaterialsCarousel";
import Portfolio from "@/components/Portfolio";
import MarketSectors from "@/components/MarketSectors";
import Pneumatica from "@/components/Pneumatica";
import BlogPreview from "@/components/BlogPreview";
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
      <MaterialsCarousel />
      <MarketSectors />
      <Portfolio />
      <Pneumatica />
      <BlogPreview />
      <Company />
      <Contact />
      <Quote />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
