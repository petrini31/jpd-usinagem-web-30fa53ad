
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PortfolioFull from "./pages/PortfolioFull";
import PneumaticaFull from "./pages/PneumaticaFull";
import SitemapXML from "./pages/SitemapXML";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* URLs Amigáveis para SEO - Portfolio */}
          <Route path="/portfolio-full" element={<PortfolioFull />} />
          <Route path="/portfolio-completo-usinagem" element={<PortfolioFull />} />
          <Route path="/portfolio-usinagem-atibaia" element={<PortfolioFull />} />
          <Route path="/portfolio-fresamento-braganca-paulista" element={<PortfolioFull />} />
          <Route path="/portfolio-torneamento-bom-jesus-perdoes" element={<PortfolioFull />} />
          <Route path="/projetos-usinagem-sao-paulo" element={<PortfolioFull />} />
          
          {/* URLs Amigáveis para SEO - Pneumática */}
          <Route path="/pneumatica" element={<PneumaticaFull />} />
          <Route path="/cilindros-pneumaticos" element={<PneumaticaFull />} />
          <Route path="/cilindros-pneumaticos-atibaia" element={<PneumaticaFull />} />
          <Route path="/cilindros-pneumaticos-braganca-paulista" element={<PneumaticaFull />} />
          <Route path="/cilindros-pneumaticos-bom-jesus-perdoes" element={<PneumaticaFull />} />
          <Route path="/cilindros-pneumaticos-sao-paulo" element={<PneumaticaFull />} />
          <Route path="/automacao-industrial-atibaia" element={<PneumaticaFull />} />
          <Route path="/solucoes-pneumaticas-regiao-sp" element={<PneumaticaFull />} />
          
          {/* Sitemap XML */}
          <Route path="/sitemap.xml" element={<SitemapXML />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
