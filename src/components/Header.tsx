import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicos', 'empresa', 'pneumatica', 'portfolio', 'orcamento', 'contato'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-background border-b border-border/50 z-50 shadow-soft transition-all duration-300">
      <div className="container mx-auto px-4">
        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              JPD <span className="text-accent">Usinagem CNC</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('inicio')}
              className={`text-sm font-medium transition-colors relative py-1 ${
                activeSection === 'inicio' 
                  ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className={`text-sm font-medium transition-colors relative py-1 ${
                activeSection === 'servicos' 
                  ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('empresa')}
              className={`text-sm font-medium transition-colors relative py-1 ${
                activeSection === 'empresa' 
                  ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              A Empresa
            </button>
            <button 
              onClick={() => scrollToSection('pneumatica')}
              className={`text-sm font-medium transition-colors relative py-1 ${
                activeSection === 'pneumatica' 
                  ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Pneumática
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className={`text-sm font-medium transition-colors relative py-1 ${
                activeSection === 'portfolio' 
                  ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Portfólio
            </button>
            <button 
              onClick={() => scrollToSection('orcamento')}
              className={`text-sm font-medium transition-colors relative py-1 ${
                activeSection === 'orcamento' 
                  ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Orçamento
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className={`text-sm font-medium transition-colors relative py-1 ${
                activeSection === 'contato' 
                  ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Contato
            </button>
            <Button 
              onClick={() => scrollToSection('orcamento')}
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary-dark hover:scale-105 transition-all duration-300 shadow-medium"
            >
              Solicitar Orçamento
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-3 border-t border-border/30 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('inicio')}
                className={`text-left text-sm font-medium transition-colors py-1 ${
                  activeSection === 'inicio' ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className={`text-left text-sm font-medium transition-colors py-1 ${
                  activeSection === 'servicos' ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('empresa')}
                className={`text-left text-sm font-medium transition-colors py-1 ${
                  activeSection === 'empresa' ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                A Empresa
              </button>
              <button 
                onClick={() => scrollToSection('pneumatica')}
                className={`text-left text-sm font-medium transition-colors py-1 ${
                  activeSection === 'pneumatica' ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Pneumática
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className={`text-left text-sm font-medium transition-colors py-1 ${
                  activeSection === 'portfolio' ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Portfólio
              </button>
              <button 
                onClick={() => scrollToSection('orcamento')}
                className={`text-left text-sm font-medium transition-colors py-1 ${
                  activeSection === 'orcamento' ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Orçamento
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className={`text-left text-sm font-medium transition-colors py-1 ${
                  activeSection === 'contato' ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Contato
              </button>
              <Button 
                onClick={() => scrollToSection('orcamento')}
                className="w-full bg-primary text-primary-foreground hover:bg-primary-dark transition-all"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;