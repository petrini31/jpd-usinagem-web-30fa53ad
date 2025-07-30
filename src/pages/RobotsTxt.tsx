
import { useEffect } from 'react';

const RobotsTxt = () => {
  useEffect(() => {
    const robotsContent = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://jpdusinagem.com.br/sitemap.xml

# Crawl-delay for courtesy
Crawl-delay: 1

# Specific rules for search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

# Block AI crawlers if needed (optional)
User-agent: GPTBot
Disallow: /

User-agent: Google-Extended
Disallow: /`;

    // Set content type and serve robots.txt content
    document.open();
    document.write(robotsContent);
    document.close();
    
    console.log('Robots.txt servido com sucesso');
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Robots.txt - JPD Usinagem</h1>
        <p className="text-gray-600 mb-4">
          Redirecionando para o robots.txt...
        </p>
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-sm text-gray-700">
            Este arquivo está sendo servido em formato texto para os mecanismos de busca.
          </p>
          <p className="text-sm text-gray-700 mt-2">
            URL do robots.txt: <a href="/robots.txt" className="text-blue-600 underline">https://jpdusinagem.com.br/robots.txt</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RobotsTxt;
