import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import { useLocation, useNavigate } from "react-router-dom";
import OptimizedImage from "./OptimizedImage";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
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

  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b border-border">
      <div className="container py-4 px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <OptimizedImage
            src="/jpd-usinagem-logo.png"
            alt="JPD Usinagem Logo"
            width={120}
            height={40}
            className="mr-4"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => handleNavigation(item.id)}
              className="text-sm font-medium transition-colors hover:text-foreground"
            >
              {item.name}
            </Button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <ModeToggle />
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
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
