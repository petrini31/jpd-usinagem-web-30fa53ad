
import { useEffect } from 'react';

const SitemapXML = () => {
  useEffect(() => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://jpdusinagem.lovable.app/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://jpdusinagem.lovable.app/portfolio-completo-usinagem</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jpdusinagem.lovable.app/portfolio-usinagem-atibaia</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jpdusinagem.lovable.app/portfolio-fresamento-braganca-paulista</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jpdusinagem.lovable.app/portfolio-torneamento-bom-jesus-perdoes</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jpdusinagem.lovable.app/projetos-usinagem-sao-paulo</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jpdusinagem.lovable.app/cilindros-pneumaticos</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://jpdusinagem.lovable.app/cilindros-pneumaticos-atibaia</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jpdusinagem.lovable.app/cilindros-pneumaticos-braganca-paulista</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jpdusinagem.lovable.app/cilindros-pneumaticos-bom-jesus-perdoes</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jpdusinagem.lovable.app/cilindros-pneumaticos-sao-paulo</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jpdusinagem.lovable.app/automacao-industrial-atibaia</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jpdusinagem.lovable.app/solucoes-pneumaticas-regiao-sp</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

    // Create a blob with the sitemap content and trigger download
    const blob = new Blob([sitemap], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    
    // Display the sitemap content in a pre-formatted way
    document.body.innerHTML = `<pre style="font-family: monospace; white-space: pre-wrap; margin: 20px;">${sitemap}</pre>`;
    
    console.log('Sitemap XML gerado:', sitemap);
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Sitemap XML - JPD Usinagem</h1>
        <p className="text-gray-600 mb-4">
          O sitemap XML será exibido abaixo quando a página carregar.
        </p>
      </div>
    </div>
  );
};

export default SitemapXML;
