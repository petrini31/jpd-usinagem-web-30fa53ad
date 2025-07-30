
import { useEffect } from 'react';

const SitemapXML = () => {
  useEffect(() => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://jpdusinagem.com.br/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://jpdusinagem.com.br/portfolio</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://jpdusinagem.com.br/pneumatica</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://jpdusinagem.com.br/usinagem-cnc</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jpdusinagem.com.br/cilindros-pneumaticos</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jpdusinagem.com.br/usinagem-atibaia</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://jpdusinagem.com.br/usinagem-braganca</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://jpdusinagem.com.br/usinagem-perdoes</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://jpdusinagem.com.br/usinagem-sao-paulo</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://jpdusinagem.com.br/cilindros-pneumaticos-atibaia</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://jpdusinagem.com.br/cilindros-pneumaticos-braganca</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://jpdusinagem.com.br/cilindros-pneumaticos-perdoes</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://jpdusinagem.com.br/pneumatica-industrial</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

    // Set the content type to XML and replace the page content
    document.contentType = 'application/xml';
    
    // Replace the entire document with XML content
    document.open();
    document.write(sitemap);
    document.close();
    
    console.log('Sitemap XML servido com sucesso');
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Sitemap XML - JPD Usinagem</h1>
        <p className="text-gray-600 mb-4">
          Redirecionando para o sitemap XML...
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-sm text-gray-700">
            Este sitemap está sendo servido em formato XML para os mecanismos de busca.
          </p>
          <p className="text-sm text-gray-700 mt-2">
            URL do sitemap: <a href="/sitemap.xml" className="text-blue-600 underline">https://jpdusinagem.com.br/sitemap.xml</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SitemapXML;
