
import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PortfolioFull from "./pages/PortfolioFull";
import PneumaticaFull from "./pages/PneumaticaFull";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/portfolio-full" element={<PortfolioFull />} />
        <Route path="/pneumatica" element={<PneumaticaFull />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
