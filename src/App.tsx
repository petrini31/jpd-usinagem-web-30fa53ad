import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy loading dos componentes de página
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PortfolioFull = lazy(() => import("./pages/PortfolioFull"));
const PneumaticaFull = lazy(() => import("./pages/PneumaticaFull"));
const BlogFull = lazy(() => import("./pages/BlogFull"));
const AdminView = lazy(() => import("./pages/AdminView"));

const queryClient = new QueryClient();

// Componente de Loading para Suspense
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="space-y-4 w-full max-w-md px-4">
      <Skeleton className="h-8 w-3/4 mx-auto" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-32 w-full" />
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Blog Route */}
            <Route path="/blog" element={<BlogFull />} />
            
            {/* Rotas amigáveis para a home */}
            <Route path="/cilindros-pneumaticos" element={<Index />} />
            <Route path="/usinagem" element={<Index />} />
            <Route path="/usinagem-cnc" element={<Index />} />
            <Route path="/tornearia" element={<Index />} />
            <Route path="/fresamento" element={<Index />} />
            <Route path="/usinagem-atibaia" element={<Index />} />
            <Route path="/usinagem-perdoes" element={<Index />} />
            <Route path="/usinagem-braganca" element={<Index />} />
            <Route path="/programacao-cnc" element={<Index />} />
            <Route path="/cnc" element={<Index />} />
            <Route path="/usinagem-sp" element={<Index />} />
            <Route path="/usinagem-sao-paulo" element={<Index />} />
            <Route path="/usinagem-guarulhos" element={<Index />} />
            <Route path="/usinagem-industrial" element={<Index />} />
            
            {/* Rotas amigáveis para o portfólio */}
            <Route path="/portfolio" element={<PortfolioFull />} />
            <Route path="/pecas-industriais" element={<PortfolioFull />} />
            <Route path="/usinagem-cnc-portfolio" element={<PortfolioFull />} />
            <Route path="/projetos-usinagem" element={<PortfolioFull />} />
            <Route path="/trabalhos-realizados" element={<PortfolioFull />} />
            <Route path="/galeria-pecas" element={<PortfolioFull />} />
            <Route path="/portfolio-industrial" element={<PortfolioFull />} />
            <Route path="/exemplos-usinagem" element={<PortfolioFull />} />
            <Route path="/casos-sucesso" element={<PortfolioFull />} />
            
            {/* Rotas amigáveis para pneumática */}
            <Route path="/pneumatica" element={<PneumaticaFull />} />
            <Route path="/cilindros-pneumaticos-atibaia" element={<PneumaticaFull />} />
            <Route path="/cilindros-pneumaticos-braganca" element={<PneumaticaFull />} />
            <Route path="/cilindros-pneumaticos-perdoes" element={<PneumaticaFull />} />
            <Route path="/cilindros-pneumaticos-sp" element={<PneumaticaFull />} />
            <Route path="/pneumatica-industrial" element={<PneumaticaFull />} />
            <Route path="/sistemas-pneumaticos" element={<PneumaticaFull />} />
            <Route path="/automacao-pneumatica" element={<PneumaticaFull />} />
            <Route path="/cilindros-personalizados" element={<PneumaticaFull />} />
            <Route path="/fabricacao-cilindros" element={<PneumaticaFull />} />
            <Route path="/manutencao-pneumatica" element={<PneumaticaFull />} />
            <Route path="/solucoes-pneumaticas" element={<PneumaticaFull />} />
            <Route path="/pneumatica-atibaia" element={<PneumaticaFull />} />
            <Route path="/pneumatica-braganca" element={<PneumaticaFull />} />
            <Route path="/pneumatica-guarulhos" element={<PneumaticaFull />} />
            <Route path="/pneumatica-sao-paulo" element={<PneumaticaFull />} />
            
            <Route path="/admin-view" element={<AdminView />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
