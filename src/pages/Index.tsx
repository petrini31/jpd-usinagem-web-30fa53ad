
import Header from "@/components/Header";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Company from "@/components/Company";
import Pneumatica from "@/components/Pneumatica";
import Quote from "@/components/Quote";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Services />
      <Portfolio />
      <Company />
      <Pneumatica />
      <Quote />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
