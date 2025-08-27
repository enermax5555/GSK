import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Helper function to handle base path for GitHub Pages deployment
const getImagePath = (path: string) => {
  return process.env.NODE_ENV === 'production' ? `/GSK${path}` : path;
};

type GalleryParams = {
  serviceType?: string;
};

const GalleryDetail: React.FC = () => {
  const { serviceType } = useParams<GalleryParams>();
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Service names mapping for display purposes
  const serviceNames: Record<string, string> = {
    'PregradniSteni': 'Преградни стени',
    'PredStenni': 'Предстенни обшивки',
    'Oblicovki': 'Обшивки и облицовки',
    'OkacheniTavani': 'Окачени тавани от гипсокартон',
    'PVCtavani': 'Окачени PVC тавани',
    'RasterniTavani': 'Растерни тавани'
  };

  useEffect(() => {
    // This would normally be an API call, but for this demo, we'll simulate loading images
    // In a real environment, you would need server-side code to read the directory
    // Here we'll just use a timeout to simulate loading
    setLoading(true);
    
    // Simulate loading images
    setTimeout(() => {
      // This would be the actual image paths in a real scenario
      // In a real implementation, you'd fetch this from your backend
      const serviceImages: Record<string, string[]> = {
        'PregradniSteni': [
          "https://picsum.photos/800/600?random=841",
          "https://picsum.photos/800/600?random=799",
          "https://picsum.photos/800/600?random=278",
          "https://picsum.photos/800/600?random=757",
          "https://picsum.photos/800/600?random=236",
          "https://picsum.photos/800/600?random=715",
          "https://picsum.photos/800/600?random=194",
          "https://picsum.photos/800/600?random=97",
          "https://picsum.photos/800/600?random=385"
        ],
        'PredStenni': [
          "https://picsum.photos/800/600?random=145",
          "https://picsum.photos/800/600?random=624",
          "https://picsum.photos/800/600?random=103",
          "https://picsum.photos/800/600?random=358",
          "https://picsum.photos/800/600?random=837",
          "https://picsum.photos/800/600?random=316",
          "https://picsum.photos/800/600?random=795",
          "https://picsum.photos/800/600?random=101",
          "https://picsum.photos/800/600?random=977",
          "https://picsum.photos/800/600?random=1",
          "https://picsum.photos/800/600?random=617"
        ],
        'Oblicovki': [
          "https://picsum.photos/800/600?random=260",
          "https://picsum.photos/800/600?random=539"
        ],
        'OkacheniTavani': [
          "https://picsum.photos/800/600?random=391",
          "https://picsum.photos/800/600?random=975",
          "https://picsum.photos/800/600?random=209",
          "https://picsum.photos/800/600?random=730",
          "https://picsum.photos/800/600?random=251",
          "https://picsum.photos/800/600?random=772",
          "https://picsum.photos/800/600?random=293",
          "https://picsum.photos/800/600?random=814",
          "https://picsum.photos/800/600?random=335",
          "https://picsum.photos/800/600?random=881",
          "https://picsum.photos/800/600?random=360",
          "https://picsum.photos/800/600?random=839",
          "https://picsum.photos/800/600?random=797",
          "https://picsum.photos/800/600?random=276",
          "https://picsum.photos/800/600?random=755",
          "https://picsum.photos/800/600?random=112"
        ],
        'PVCtavani': [
          "https://picsum.photos/800/600?random=293"
        ],
        'RasterniTavani': [
          "https://picsum.photos/800/600?random=623",
          "https://picsum.photos/800/600?random=144",
          "https://picsum.photos/800/600?random=97"
        ]
      };

      if (serviceType && serviceImages[serviceType]) {
        setImages(serviceImages[serviceType]);
      } else {
        setImages([]);
      }
      setLoading(false);
    }, 500);
  }, [serviceType]);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <Link to="/gallery" className="flex items-center text-blue-600 hover:text-blue-800 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Назад към галерията
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {serviceType && serviceNames[serviceType] ? serviceNames[serviceType] : 'Галерия'}
          </h1>
          <p className="text-xl text-gray-600">
            Разгледайте нашите проекти
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600 animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                <div className="relative pb-[75%]">
                  <img 
                    src={image} 
                    alt={`Проект ${index + 1}`} 
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://picsum.photos/800/600?random=935";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full">
              <button 
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                onClick={closeLightbox}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={selectedImage} 
                alt="Увеличена снимка" 
                className="max-h-[85vh] max-w-full mx-auto object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryDetail;
