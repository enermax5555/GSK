// src/utils/schema.ts - Structured data for Schema.org

// Main organization schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ГСК - Гипсокартон Бургас",
  "url": "https://Enermax5555.github.io/GSK/",
  "logo": "https://Enermax5555.github.io/GSK/assets/Images/Logo/Logo.jpeg",
  "description": "Професионален монтаж на гипсокартон в Бургас и региона",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ул. Примерна 123",
    "addressLocality": "Бургас",
    "postalCode": "8000",
    "addressCountry": "BG"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "089 936 8419",
    "contactType": "customer service",
    "email": "info@гипсокартонбургас.com",
    "availableLanguage": ["Bulgarian"]
  },
  "sameAs": [
    "https://facebook.com/gskburgas",
    "https://instagram.com/gskburgas"
  ]
};

// Local business schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ГСК - Гипсокартон Бургас",
  "image": "https://Enermax5555.github.io/GSK/assets/Images/Logo/Logo.jpeg",
  "url": "https://Enermax5555.github.io/GSK/",
  "telephone": "089 936 8419",
  "email": "info@гипсокартонбургас.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ул. Примерна 123",
    "addressLocality": "Бургас",
    "postalCode": "8000",
    "addressCountry": "BG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.4976,
    "longitude": 27.4705
  },
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "15:00"
    }
  ]
};

// Services schemas
export const services = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Преградни стени от гипсокартон",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ГСК - Гипсокартон Бургас"
    },
    "areaServed": {
      "@type": "City",
      "name": "Бургас"
    },
    "description": "Преградните стени от гипсокартон предлагат бърз, чист и ефективен начин за създаване на нови помещения или обособяване на зони.",
    "image": "https://Enermax5555.github.io/GSK/assets/Images/PregradniSteni/PregradniSteniMain.jpg",
    "url": "https://Enermax5555.github.io/GSK/services"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Окачени тавани от гипсокартон",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ГСК - Гипсокартон Бургас"
    },
    "areaServed": {
      "@type": "City",
      "name": "Бургас"
    },
    "description": "Окачените тавани от гипсокартон предлагат модерно решение за скриване на инсталации и придаване на модерен завършек на интериора.",
    "image": "https://Enermax5555.github.io/GSK/assets/Images/OkacheniTavani/OkacheniTavaniMain.JPEG",
    "url": "https://Enermax5555.github.io/GSK/services"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Предстенни обшивки от гипсокартон",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ГСК - Гипсокартон Бургас"
    },
    "areaServed": {
      "@type": "City",
      "name": "Бургас"
    },
    "description": "Предстенните обшивки са отлично решение при неравни или повредени стени, позволяващи скрито прокарване на инсталации.",
    "image": "https://Enermax5555.github.io/GSK/assets/Images/PredStenni/PredStenniMain.jpg",
    "url": "https://Enermax5555.github.io/GSK/services"
  }
];

// FAQ schema for common questions
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Колко време отнема монтажът на гипсокартон?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Времето за монтаж зависи от обема на работата. Стандартна стена може да отнеме 1-2 дни, докато по-сложни конструкции като окачени тавани с осветление могат да отнемат 3-5 дни."
      }
    },
    {
      "@type": "Question",
      "name": "Какви са предимствата на гипсокартона пред другите материали?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Гипсокартонът предлага бърз и чист монтаж, добра звуко- и топлоизолация, лесна интеграция на електро и ВиК инсталации, перфектно равни повърхности и възможност за разнообразни дизайнерски решения."
      }
    },
    {
      "@type": "Question",
      "name": "Какви са цените за монтаж на гипсокартон в Бургас?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Цените варират според вида конструкция, използваните материали и сложността на проекта. Предлагаме безплатна консултация и оферта за всеки проект. Свържете се с нас за индивидуално ценово предложение."
      }
    }
  ]
};

// Generate schema JSON string for direct embedding
export const generateSchemaScript = (schema: any): string => {
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
};
