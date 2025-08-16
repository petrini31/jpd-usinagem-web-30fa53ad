
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PortfolioFull from "./pages/PortfolioFull";
import PneumaticaFull from "./pages/PneumaticaFull";
import NotFound from "./pages/NotFound";
import AdminView from "./pages/AdminView";
import UsinagemJundiai from "./pages/UsinagemJundiai";
import TorneamentoAtibaia from "./pages/TorneamentoAtibaia";
import RobotsTxtRoute from "./pages/RobotsTxtRoute";
import SitemapXmlRoute from "./pages/SitemapXmlRoute";

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
          <Route path="/admin" element={<AdminView />} />
          <Route path="/usinagem-jundiai" element={<UsinagemJundiai />} />
          <Route path="/torneamento-atibaia" element={<TorneamentoAtibaia />} />
          <Route path="/robots.txt" element={<RobotsTxtRoute />} />
          <Route path="/sitemap.xml" element={<SitemapXmlRoute />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
