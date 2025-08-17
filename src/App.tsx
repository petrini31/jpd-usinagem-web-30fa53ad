
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
          
          {/* Rotas de cidades que redirecionam para página principal */}
          <Route path="/atibaia" element={<Navigate to="/" replace />} />
          <Route path="/braganca-paulista" element={<Navigate to="/" replace />} />
          <Route path="/bom-jesus-dos-perdoes" element={<Navigate to="/" replace />} />
          <Route path="/jundiai" element={<Navigate to="/" replace />} />
          <Route path="/campinas" element={<Navigate to="/" replace />} />
          <Route path="/sao-paulo" element={<Navigate to="/" replace />} />
          <Route path="/guarulhos" element={<Navigate to="/" replace />} />
          <Route path="/osasco" element={<Navigate to="/" replace />} />
          <Route path="/santo-andre" element={<Navigate to="/" replace />} />
          <Route path="/sao-bernardo-do-campo" element={<Navigate to="/" replace />} />
          <Route path="/sao-caetano-do-sul" element={<Navigate to="/" replace />} />
          <Route path="/diadema" element={<Navigate to="/" replace />} />
          <Route path="/maua" element={<Navigate to="/" replace />} />
          <Route path="/ribeirao-pires" element={<Navigate to="/" replace />} />
          <Route path="/rio-grande-da-serra" element={<Navigate to="/" replace />} />
          <Route path="/suzano" element={<Navigate to="/" replace />} />
          <Route path="/mogi-das-cruzes" element={<Navigate to="/" replace />} />
          <Route path="/franco-da-rocha" element={<Navigate to="/" replace />} />
          <Route path="/francisco-morato" element={<Navigate to="/" replace />} />
          <Route path="/caieiras" element={<Navigate to="/" replace />} />
          <Route path="/mairipora" element={<Navigate to="/" replace />} />
          <Route path="/campo-limpo-paulista" element={<Navigate to="/" replace />} />
          <Route path="/varzea-paulista" element={<Navigate to="/" replace />} />
          <Route path="/itatiba" element={<Navigate to="/" replace />} />
          <Route path="/morungaba" element={<Navigate to="/" replace />} />
          <Route path="/piracaia" element={<Navigate to="/" replace />} />
          <Route path="/nazare-paulista" element={<Navigate to="/" replace />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
