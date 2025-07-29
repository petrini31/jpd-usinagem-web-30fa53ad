
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('servicos');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 'servicos', label: 'Serviços' },
    { id: 'portfolio', label: 'Portfólio' },
    { id: 'pneumatica', label: 'Pneumática' },
    { id: 'empresa', label: 'Sobre' },
    { id: 'contato', label: 'Contato' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['servicos', 'portfolio', 'pneumatica', 'empresa', 'contato'];
      const scrollPosition = window.scrollY + 150; // Offset para detectar mais cedo
      
      // Verifica se chegou ao final da página (seção de orçamento)
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isAtBottom = window.scrollY + windowHeight >= documentHeight - 100;
      
      if (isAtBottom) {
        setActiveSection(''); // Remove destaque quando chegar na seção de orçamento
        return;
      }

      // Detecta qual seção está visível
      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementHeight = rect.height;
          
          // Se a seção está visível na parte superior da tela
          if (scrollPosition >= elementTop && scrollPosition < elementTop + elementHeight) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">JPD</span>
            </div>
            <span className="text-xl font-bold text-foreground">JPD Usinagem</span>
          </div>

          {/* Desktop Navigation - Aligned to right */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <nav className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-foreground hover:text-primary transition-colors font-medium ${
                    activeSection === item.id ? 'text-primary' : ''
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-500 transition-all duration-300" />
                  )}
                </button>
              ))}
            </nav>
            
            <Button 
              onClick={() => scrollToSection('orcamento')}
              className="bg-primary text-primary-foreground hover:bg-primary-dark transition-colors"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Navigation - Botão fixo + Menu hamburger */}
          <div className="md:hidden flex items-center gap-2">
            {/* Botão Solicitar Orçamento fixo no mobile */}
            <Button 
              onClick={() => scrollToSection('orcamento')}
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary-dark transition-colors text-xs px-3 py-2"
            >
              Orçamento
            </Button>
            
            {/* Menu hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted transition-colors rounded-lg"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 py-2">
                <Button 
                  onClick={() => scrollToSection('orcamento')}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary-dark transition-colors"
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
