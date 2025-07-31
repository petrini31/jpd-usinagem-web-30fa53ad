
import Header from "@/components/Header";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const BlogFull = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-8">
        <Blog />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogFull;
