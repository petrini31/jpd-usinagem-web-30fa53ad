
import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface SEOBreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const SEOBreadcrumb = ({ items, className }: SEOBreadcrumbProps) => {
  return (
    <div className={`py-4 border-b border-border ${className}`}>
      <div className="container mx-auto px-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="flex items-center gap-1">
                  <Home className="w-4 h-4" />
                  Início
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-1">
                <BreadcrumbSeparator>
                  <ChevronRight className="w-4 h-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  {item.current ? (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link to={item.href || "#"}>{item.label}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default SEOBreadcrumb;
