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
        'name': 'ГСК - Гипсокартон Бургас / GSK - Gipsokarton Burgas',
        'alternateName': [
          'GSK Burgas',
          'Гипсокартон Бургас',
          'Gipsokarton Burgas',
          'Монтаж на гипсокартон Бургас',
          'Montaj na gipsokarton Burgas'
        ],
        'description': description,
        'image': fullImageUrl,
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Бургас център',
          'addressLocality': 'Бургас',
          'addressRegion': 'Бургас',
          'postalCode': '8000',
          'addressCountry': 'BG'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '42.5048',
          'longitude': '27.4626'
        },
        'telephone': '089 936 8419',
        'email': 'info@гипсокартонбургас.com',
        'url': siteUrl,
        'priceRange': '$$',
        'openingHours': 'Mo-Fr 08:00-18:00, Sa 09:00-16:00',
        'paymentAccepted': ['Cash', 'Card'],
        'currenciesAccepted': 'BGN',
        'serviceArea': {
          '@type': 'City',
          'name': 'Бургас'
        },
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Услуги по гипсокартон',
          'itemListElement': [
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Монтаж на гипсокартон / Montaj na gipskarton',
                'alternateName': [
                  'gipskarton montaj burgas',
                  'гипсокартон монтаж бургас',
                  'montaj gipskarton burgas',
                  'монтаж гипсокартон бургас'
                ],
                'description': 'Професионален монтаж на гипсокартон в Бургас - преградни стени, окачени тавани, decoration'
              }
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Окачени тавани / Okacheni tavani',
                'alternateName': [
                  'окачен таван бургас',
                  'okachen tavan burgas',
                  'suspended ceiling burgas',
                  'окачени тавани бургас'
                ],
                'description': 'Монтаж на окачени тавани от гипсокартон в Бургас'
              }
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Преградни стени / Pregradni steni',
                'alternateName': [
                  'преградна стена бургас',
                  'pregradna stena burgas',
                  'partition wall burgas',
                  'преградни стени бургас'
                ],
                'description': 'Изграждане на преградни стени от гипсокартон в Бургас'
              }
            }
          ]
        },
        'keywords': 'гипсокартон бургас, gipskarton burgas, монтаж на гипсокартон, montaj na gipskarton, гипсокартон услуги бургас, gipskarton uslugi burgas, окачени тавани бургас, okacheni tavani burgas, преградни стени бургас, pregradni steni burgas, строителство бургас, stroitelstvo burgas',
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
