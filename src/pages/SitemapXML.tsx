
import { useEffect } from 'react';

const SitemapXML = () => {
  useEffect(() => {
    const currentDate = new Date().toISOString();
    
    // Todas as rotas definidas no App.tsx
    const routes = [
      { url: '/', priority: '1.0', changefreq: 'weekly' },
      { url: '/portfolio', priority: '0.9', changefreq: 'monthly' },
      { url: '/pneumatica', priority: '0.9', changefreq: 'monthly' },
      
      // Rotas de usinagem
      { url: '/cilindros-pneumaticos', priority: '0.8', changefreq: 'monthly' },
      { url: '/usinagem', priority: '0.8', changefreq: 'monthly' },
      { url: '/usinagem-cnc', priority: '0.8', changefreq: 'monthly' },
      { url: '/tornearia', priority: '0.7', changefreq: 'monthly' },
      { url: '/fresamento', priority: '0.7', changefreq: 'monthly' },
      { url: '/usinagem-atibaia', priority: '0.7', changefreq: 'monthly' },
      { url: '/usinagem-perdoes', priority: '0.7', changefreq: 'monthly' },
      { url: '/usinagem-braganca', priority: '0.7', changefreq: 'monthly' },
      { url: '/programacao-cnc', priority: '0.7', changefreq: 'monthly' },
      { url: '/cnc', priority: '0.7', changefreq: 'monthly' },
      { url: '/usinagem-sp', priority: '0.7', changefreq: 'monthly' },
      { url: '/usinagem-sao-paulo', priority: '0.7', changefreq: 'monthly' },
      { url: '/usinagem-guarulhos', priority: '0.7', changefreq: 'monthly' },
      { url: '/usinagem-industrial', priority: '0.7', changefreq: 'monthly' },
      
      // Rotas de portfólio
      { url: '/pecas-industriais', priority: '0.8', changefreq: 'monthly' },
      { url: '/usinagem-cnc-portfolio', priority: '0.8', changefreq: 'monthly' },
      { url: '/projetos-usinagem', priority: '0.8', changefreq: 'monthly' },
      { url: '/trabalhos-realizados', priority: '0.8', changefreq: 'monthly' },
      { url: '/galeria-pecas', priority: '0.8', changefreq: 'monthly' },
      { url: '/portfolio-industrial', priority: '0.8', changefreq: 'monthly' },
      { url: '/exemplos-usinagem', priority: '0.8', changefreq: 'monthly' },
      { url: '/casos-sucesso', priority: '0.8', changefreq: 'monthly' },
      
      // Rotas de pneumática
      { url: '/cilindros-pneumaticos-atibaia', priority: '0.7', changefreq: 'monthly' },
      { url: '/cilindros-pneumaticos-braganca', priority: '0.7', changefreq: 'monthly' },
      { url: '/cilindros-pneumaticos-perdoes', priority: '0.7', changefreq: 'monthly' },
      { url: '/cilindros-pneumaticos-sp', priority: '0.7', changefreq: 'monthly' },
      { url: '/pneumatica-industrial', priority: '0.7', changefreq: 'monthly' },
      { url: '/sistemas-pneumaticos', priority: '0.7', changefreq: 'monthly' },
      { url: '/automacao-pneumatica', priority: '0.7', changefreq: 'monthly' },
      { url: '/cilindros-personalizados', priority: '0.7', changefreq: 'monthly' },
      { url: '/fabricacao-cilindros', priority: '0.7', changefreq: 'monthly' },
      { url: '/manutencao-pneumatica', priority: '0.7', changefreq: 'monthly' },
      { url: '/solucoes-pneumaticas', priority: '0.7', changefreq: 'monthly' },
      { url: '/pneumatica-atibaia', priority: '0.7', changefreq: 'monthly' },
      { url: '/pneumatica-braganca', priority: '0.7', changefreq: 'monthly' },
      { url: '/pneumatica-guarulhos', priority: '0.7', changefreq: 'monthly' },
      { url: '/pneumatica-sao-paulo', priority: '0.7', changefreq: 'monthly' }
    ];

    const urlsetItems = routes.map(route => `  <url>
    <loc>https://jpdusinagem.com.br${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsetItems}
</urlset>`;

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
          <p className="text-sm text-gray-700 mt-2">
            Total de URLs incluídas: {35} páginas
          </p>
        </div>
      </div>
    </div>
  );
};

export default SitemapXML;
