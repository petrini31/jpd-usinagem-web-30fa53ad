
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useLocation } from "react-router-dom";

interface BreadcrumbProps {
  customItems?: Array<{
    label: string;
    href?: string;
  }>;
}

const SEOBreadcrumb = ({ customItems }: BreadcrumbProps) => {
  const location = useLocation();
  
  const getBreadcrumbItems = () => {
    if (customItems) {
      return customItems;
    }
    
    const path = location.pathname;
    
    const breadcrumbMap: Record<string, Array<{label: string; href?: string}>> = {
      '/portfolio-full': [
        { label: 'Início', href: '/' },
        { label: 'Portfólio Completo' }
      ],
      '/portfolio-completo-usinagem': [
        { label: 'Início', href: '/' },
        { label: 'Portfólio Usinagem' }
      ],
      '/portfolio-usinagem-atibaia': [
        { label: 'Início', href: '/' },
        { label: 'Usinagem Atibaia' }
      ],
      '/portfolio-fresamento-braganca-paulista': [
        { label: 'Início', href: '/' },
        { label: 'Fresamento Bragança Paulista' }
      ],
      '/portfolio-torneamento-bom-jesus-perdoes': [
        { label: 'Início', href: '/' },
        { label: 'Torneamento Bom Jesus dos Perdões' }
      ],
      '/projetos-usinagem-sao-paulo': [
        { label: 'Início', href: '/' },
        { label: 'Projetos Usinagem São Paulo' }
      ],
      '/pneumatica': [
        { label: 'Início', href: '/' },
        { label: 'Pneumática' }
      ],
      '/cilindros-pneumaticos': [
        { label: 'Início', href: '/' },
        { label: 'Cilindros Pneumáticos' }
      ],
      '/cilindros-pneumaticos-atibaia': [
        { label: 'Início', href: '/' },
        { label: 'Cilindros Pneumáticos Atibaia' }
      ],
      '/cilindros-pneumaticos-braganca-paulista': [
        { label: 'Início', href: '/' },
        { label: 'Cilindros Pneumáticos Bragança Paulista' }
      ],
      '/cilindros-pneumaticos-bom-jesus-perdoes': [
        { label: 'Início', href: '/' },
        { label: 'Cilindros Pneumáticos Bom Jesus dos Perdões' }
      ],
      '/cilindros-pneumaticos-sao-paulo': [
        { label: 'Início', href: '/' },
        { label: 'Cilindros Pneumáticos São Paulo' }
      ],
      '/automacao-industrial-atibaia': [
        { label: 'Início', href: '/' },
        { label: 'Automação Industrial Atibaia' }
      ],
      '/solucoes-pneumaticas-regiao-sp': [
        { label: 'Início', href: '/' },
        { label: 'Soluções Pneumáticas Região SP' }
      ]
    };
    
    return breadcrumbMap[path] || [{ label: 'Início', href: '/' }];
  };

  const items = getBreadcrumbItems();

  if (items.length <= 1) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-2 bg-muted/30">
      <Breadcrumb>
        <BreadcrumbList>
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              <BreadcrumbItem>
                {item.href ? (
                  <BreadcrumbLink href={item.href} className="text-muted-foreground hover:text-foreground">
                    {item.label}
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="text-foreground font-medium">
                    {item.label}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {index < items.length - 1 && <BreadcrumbSeparator />}
            </div>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default SEOBreadcrumb;
