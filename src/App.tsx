
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PortfolioFull from "./pages/PortfolioFull";
import PneumaticaFull from "./pages/PneumaticaFull";
import AdminView from "./pages/AdminView";
import SitemapXML from "./pages/SitemapXML";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<PortfolioFull />} />
          <Route path="/pneumatica" element={<PneumaticaFull />} />
          <Route path="/admin-view" element={<AdminView />} />
          <Route path="/sitemap.xml" element={<SitemapXML />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
