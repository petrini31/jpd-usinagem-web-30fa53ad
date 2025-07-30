
import { useEffect } from 'react';

const SitemapXmlRoute = () => {
  useEffect(() => {
    // Buscar o arquivo sitemap.xml da pasta public
    fetch('/sitemap.xml')
      .then(response => response.text())
      .then(content => {
        // Substituir o documento atual com o XML
        document.open();
        document.write(content);
        document.close();
        
        // Definir o Content-Type correto para XML
        const meta = document.createElement('meta');
        meta.httpEquiv = 'Content-Type';
        meta.content = 'application/xml; charset=utf-8';
        document.head.appendChild(meta);
      })
      .catch(error => {
        console.error('Erro ao carregar sitemap.xml:', error);
        document.body.innerHTML = 'Erro ao carregar sitemap.xml';
      });
  }, []);

  return null;
};

export default SitemapXmlRoute;
