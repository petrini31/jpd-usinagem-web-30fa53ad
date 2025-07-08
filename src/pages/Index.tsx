import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Company from "@/components/Company";
import Quote from "@/components/Quote";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Company />
      <Quote />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
