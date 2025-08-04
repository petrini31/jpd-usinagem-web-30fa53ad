
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Blog from "@/components/Blog";
import QuoteModal from "@/components/QuoteModal";
import WhatsAppButton from "@/components/WhatsAppButton";

const BlogFull = () => {
  const navigate = useNavigate();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleBackClick = () => {
    navigate('/');
    // Scroll para o topo da página principal quando voltar
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleQuoteClick = () => {
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button and quote button */}
      <header className="bg-background sticky top-0 z-40 w-full border-b border-border">
        <div className="container py-4 px-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={handleBackClick}
            className="flex items-center gap-2 text-foreground hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Site
          </Button>
          
          <Button 
            onClick={handleQuoteClick}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Solicitar Orçamento
          </Button>
        </div>
      </header>

      <div className="pt-8">
        <Blog />
      </div>

      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        source="blog"
      />
      <WhatsAppButton />
    </div>
  );
};

export default BlogFull;
