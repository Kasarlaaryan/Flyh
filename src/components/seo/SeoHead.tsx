import React, { useEffect } from 'react';

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  keywords?: string[];
  ogImage?: string;
  schemaJsonLd?: object[];
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  canonicalPath,
  keywords,
  ogImage = '/src/assets/images/hero_china_manufacturing_1790924028893.jpg',
  schemaJsonLd = [],
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to set or create meta tags
    const setMetaTag = (attribute: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Set Meta Description
    setMetaTag('name', 'description', description);

    // 3. Set Keywords
    if (keywords && keywords.length > 0) {
      setMetaTag('name', 'keywords', keywords.join(', '));
    }

    // 4. OpenGraph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'FlyHigh Imports & Exports');
    
    const fullCanonicalUrl = typeof window !== 'undefined' 
      ? `${window.location.origin}${canonicalPath}` 
      : canonicalPath;
    setMetaTag('property', 'og:url', fullCanonicalUrl);
    setMetaTag('property', 'og:image', ogImage);

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 6. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonicalUrl);

    // 7. Structured Data (JSON-LD)
    const scriptId = 'seo-structured-data-json-ld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(schemaJsonLd.length === 1 ? schemaJsonLd[0] : schemaJsonLd);

    return () => {
      // Clean up script tag on unmount if needed
    };
  }, [title, description, canonicalPath, keywords, ogImage, schemaJsonLd]);

  return null;
};
