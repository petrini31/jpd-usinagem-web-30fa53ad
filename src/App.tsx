
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PortfolioFull from "./pages/PortfolioFull";
import PneumaticaFull from "./pages/PneumaticaFull";
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
          <Route path="/portfolio-completo-usinagem" element={<PortfolioFull />} />
          <Route path="/cilindros-pneumaticos" element={<PneumaticaFull />} />
          {/* Redirecionamentos das URLs antigas */}
          <Route path="/portfolio-full" element={<PortfolioFull />} />
          <Route path="/pneumatica" element={<PneumaticaFull />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
