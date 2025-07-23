
import Header from "@/components/Header";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Pneumatica from "@/components/Pneumatica";
import Quote from "@/components/Quote";
import Contact from "@/components/Contact";
import Company from "@/components/Company";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Services />
      <Portfolio />
      <Pneumatica />
      <Quote />
      <Company />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
