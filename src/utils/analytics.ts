// src/utils/analytics.ts - Analytics utility functions
// Replace 'G-XXXXXXXXXX' with your actual Google Analytics ID when ready

export const initGA = () => {
  if (typeof window !== 'undefined' && !window.gtag) {
    loadGAScript();
  }
};

const loadGAScript = () => {
  // Create script element
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`;
  
  // Add script to document
  document.head.appendChild(script);
  
  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  
  window.gtag('js', new Date() as any);
  window.gtag('config', 'G-XXXXXXXXXX', {
    page_path: window.location.pathname,
  });
};

// Track page views
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: url,
    });
  }
};

// Track events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Define global gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      id: string,
      config?: any
    ) => void;
    dataLayer: any[];
  }
}
