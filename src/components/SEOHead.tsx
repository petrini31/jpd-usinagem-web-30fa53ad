
import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonicalUrl?: string;
}

const SEOHead = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  canonicalUrl
}: SEOHeadProps) => {
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update keywords if provided
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }
    
    // Update Open Graph tags
    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
      ogTitleTag.setAttribute('content', ogTitle || title);
    }
    
    const ogDescTag = document.querySelector('meta[property="og:description"]');
    if (ogDescTag) {
      ogDescTag.setAttribute('content', ogDescription || description);
    }
    
    // Update Twitter tags
    const twitterTitleTag = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitleTag) {
      twitterTitleTag.setAttribute('content', ogTitle || title);
    }
    
    const twitterDescTag = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescTag) {
      twitterDescTag.setAttribute('content', ogDescription || description);
    }
    
    // Add canonical URL if provided
    if (canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
    }
  }, [title, description, keywords, ogTitle, ogDescription, canonicalUrl]);

  return null;
};

export default SEOHead;
