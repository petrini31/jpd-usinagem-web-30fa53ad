
interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

const SitemapGenerator = () => {
  const generateSitemap = (): string => {
    const baseUrl = 'https://jpdusinagem.com';
    const currentDate = new Date().toISOString().split('T')[0];
    
    const urls: SitemapUrl[] = [
      {
        loc: `${baseUrl}/`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 1.0
      },
      {
        loc: `${baseUrl}/portfolio-completo-usinagem`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: `${baseUrl}/cilindros-pneumaticos`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.8
      }
    ];

    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return xmlContent;
  };

  // Function to download sitemap (for development/testing)
  const downloadSitemap = () => {
    const xmlContent = generateSitemap();
    const blob = new Blob([xmlContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return {
    generateSitemap,
    downloadSitemap
  };
};

export default SitemapGenerator;
