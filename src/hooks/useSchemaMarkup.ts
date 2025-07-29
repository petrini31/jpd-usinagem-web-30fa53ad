
import { useEffect } from 'react';

interface SchemaMarkupProps {
  type: 'ItemList' | 'Service' | 'Product' | 'Organization';
  data: any;
}

const useSchemaMarkup = ({ type, data }: SchemaMarkupProps) => {
  useEffect(() => {
    const generateSchemaMarkup = () => {
      let schemaData;

      switch (type) {
        case 'ItemList':
          schemaData = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": data.name,
            "description": data.description,
            "numberOfItems": data.items?.length || 0,
            "itemListElement": data.items?.map((item: any, index: number) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": item.title,
              "description": item.description,
              "image": item.image ? `https://jpdusinagem.com${item.image}` : undefined
            })) || []
          };
          break;

        case 'Service':
          schemaData = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": data.name,
            "description": data.description,
            "provider": {
              "@type": "Organization",
              "name": "JPD Usinagem",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bom Jesus dos Perdões",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "telephone": "+55-11-95827-4054"
            },
            "areaServed": data.areaServed || ["Bom Jesus dos Perdões", "Atibaia", "Bragança Paulista", "São Paulo"],
            "serviceType": data.serviceType
          };
          break;

        case 'Product':
          schemaData = {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": data.name,
            "description": data.description,
            "manufacturer": {
              "@type": "Organization",
              "name": "JPD Usinagem"
            },
            "category": data.category,
            "image": data.image ? `https://jpdusinagem.com${data.image}` : undefined
          };
          break;

        case 'Organization':
          schemaData = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": data.name,
            "description": data.description,
            "url": "https://jpdusinagem.com",
            "logo": data.logo ? `https://jpdusinagem.com${data.logo}` : undefined,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Bom Jesus dos Perdões",
              "addressRegion": "SP",
              "addressCountry": "BR"
            },
            "telephone": "+55-11-95827-4054",
            "email": "contato@jpdusinagem.com"
          };
          break;

        default:
          return;
      }

      // Remove existing schema script for this type
      const existingScript = document.querySelector(`script[data-schema-type="${type}"]`);
      if (existingScript) {
        existingScript.remove();
      }

      // Add new schema script
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema-type', type);
      script.textContent = JSON.stringify(schemaData, null, 2);
      document.head.appendChild(script);
    };

    generateSchemaMarkup();

    // Cleanup function
    return () => {
      const existingScript = document.querySelector(`script[data-schema-type="${type}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [type, data]);
};

export default useSchemaMarkup;
