import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  imageUrl?: string;
  canonicalUrl?: string;
  schemaType?: 'Organization' | 'LocalBusiness' | 'Service' | 'WebPage';
}

/**
 * SEO component for consistent metadata across the site
 * Helps with search engine indexing and social media sharing
 */
const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  imageUrl,
  canonicalUrl,
  schemaType = 'WebPage',
}) => {
  const siteUrl = 'https://Enermax5555.github.io/GSK';
  const defaultImage = `${siteUrl}/assets/Images/Logo/Logo.jpeg`;
  const fullImageUrl = imageUrl ? `${siteUrl}/${imageUrl.replace(/^\//, '')}` : defaultImage;
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : undefined;

  // Prepare structured data based on schema type
  let structuredData;
  
  switch(schemaType) {
    case 'LocalBusiness':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': 'ГСК - Гипсокартон Бургас',
        'description': description,
        'image': fullImageUrl,
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Бургас',
          'addressRegion': 'Бургас',
          'addressCountry': 'BG'
        },
        'telephone': '089 936 8419',
        'email': 'info@gsk-burgas.com',
        'url': siteUrl,
        'priceRange': '$$',
        'sameAs': [
          'https://facebook.com/gskburgas' // Add your actual social profiles
        ]
      };
      break;
    case 'Organization':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'ГСК - Гипсокартон Бургас',
        'description': description,
        'logo': fullImageUrl,
        'url': siteUrl,
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '089 936 8419',
          'contactType': 'customer service',
        }
      };
      break;
    case 'Service':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': title,
        'description': description,
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'ГСК - Гипсокартон Бургас',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Бургас',
            'addressRegion': 'Бургас',
            'addressCountry': 'BG'
          }
        },
        'areaServed': {
          '@type': 'City',
          'name': 'Бургас'
        },
        'serviceType': 'Монтаж на гипсокартон'
      };
      break;
    case 'WebPage':
    default:
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': title,
        'description': description,
        'url': fullCanonicalUrl || siteUrl
      };
  }

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{title} | ГСК - Гипсокартон Бургас</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonicalUrl || siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:locale" content="bg_BG" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl || siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
