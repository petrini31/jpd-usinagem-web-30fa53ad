
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import OptimizedImage from "./OptimizedImage";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Observador de seções ativas
  useEffect(() => {
    const observerOptions = {
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [location.pathname]);

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = sectionId === 'servicos' ? 100 : 80;
          const elementPosition = element.offsetTop - offset;
          window.scrollTo({ 
            top: elementPosition, 
            behavior: 'smooth' 
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = sectionId === 'servicos' ? 100 : 80;
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({ 
          top: elementPosition, 
          behavior: 'smooth' 
        });
      }
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleQuoteClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        handleNavigation('contato');
      }, 100);
    } else {
      handleNavigation('contato');
    }
  };

  const menuItems = [
    { name: 'Início', id: 'hero' },
    { name: 'Serviços', id: 'servicos' },
    { name: 'Atuações', id: 'atuacoes' },
    { name: 'Portfólio', id: 'portfolio' },
    { name: 'Pneumática', id: 'pneumatica' },
    { name: 'Blog', id: 'blog' },
    { name: 'A Empresa', id: 'empresa' },
    { name: 'Contato', id: 'contato' }
  ];

  const isActiveMenuItem = (itemId: string) => {
    return location.pathname === '/' && activeSection === itemId;
  };

  return (
    <>
      <header className="bg-background sticky top-0 z-50 w-full border-b border-border">
        <div className="container py-4 px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
            <OptimizedImage
              src="/jpd-usinagem-logo.png"
              alt="JPD Usinagem Logo"
              className="h-12 w-auto mr-4"
              aspectRatio="aspect-auto"
              priority={true}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => handleNavigation(item.id)}
                className={`text-sm font-medium transition-colors relative ${
                  isActiveMenuItem(item.id) 
                    ? 'text-red-600' 
                    : 'text-foreground hover:text-red-600'
                }`}
              >
                {item.name}
                {isActiveMenuItem(item.id) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600" />
                )}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600 opacity-0 hover:opacity-100 transition-opacity" />
              </Button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Botão Solicitar Orçamento - Desktop */}
            <Button 
              onClick={handleQuoteClick}
              className="hidden lg:flex bg-red-600 hover:bg-red-700 text-white"
            >
              Solicitar Orçamento
            </Button>

            {/* Botão Solicitar Orçamento - Mobile (sempre visível) */}
            <Button 
              onClick={handleQuoteClick}
              className="lg:hidden bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-2"
            >
              Orçamento
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="sm:max-w-sm">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    Navegue pelo site.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  {menuItems.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      className="justify-start text-left"
                      onClick={() => handleNavigation(item.id)}
                    >
                      {item.name}
                    </Button>
                  ))}
                  {/* Botão Solicitar Orçamento no menu hambúrguer */}
                  <Button 
                    onClick={handleQuoteClick}
                    className="justify-start bg-red-600 hover:bg-red-700 text-white mt-4"
                  >
                    Solicitar Orçamento
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
