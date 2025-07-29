
import { useEffect } from 'react';
import SitemapGenerator from '@/components/SitemapGenerator';

const Sitemap = () => {
  const { generateSitemap } = SitemapGenerator();

  useEffect(() => {
    // Set content type to XML
    const xmlContent = generateSitemap();
    
    // Replace the page content with XML
    document.open();
    document.write(xmlContent);
    document.close();
    
    // Set proper content type
    if (document.contentType !== 'application/xml') {
      const head = document.querySelector('head');
      if (head) {
        const meta = document.createElement('meta');
        meta.httpEquiv = 'Content-Type';
        meta.content = 'application/xml';
        head.appendChild(meta);
      }
    }
  }, [generateSitemap]);

  return null;
};

export default Sitemap;
