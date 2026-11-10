import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
}

const DEFAULT_TITLE = 'Cynabyte Tech – Transforming Ideas Into Powerful Online Realities';
const DEFAULT_DESC = 'Building fast, scalable, and SEO-optimized websites and applications that drive measurable business outcomes.';

export const SEOHead: React.FC<SEOHeadProps> = ({ title, description, canonicalPath }) => {
  useEffect(() => {
    const finalTitle = title ? `${title} | Cynabyte Tech` : DEFAULT_TITLE;
    const finalDesc = description || DEFAULT_DESC;

    document.title = finalTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', finalDesc);

    // Update OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', finalTitle);

    // Update OpenGraph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', finalDesc);

    // Update Canonical URL
    if (canonicalPath) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', `${window.location.origin}${canonicalPath}`);
      }
    }
  }, [title, description, canonicalPath]);

  return null;
};
