
import { useEffect } from 'react';

const SitemapXmlRoute = () => {
  useEffect(() => {
    // Fetch and serve the sitemap.xml file with correct content-type
    fetch('/sitemap.xml')
      .then(response => response.text())
      .then(xml => {
        // Set the document content-type and body
        document.contentType = 'application/xml';
        document.body.innerHTML = xml;
        
        // Add XML declaration if not present
        if (!xml.includes('<?xml')) {
          document.body.innerHTML = '<?xml version="1.0" encoding="UTF-8"?>\n' + xml;
        }
      });
  }, []);

  return null;
};

export default SitemapXmlRoute;
