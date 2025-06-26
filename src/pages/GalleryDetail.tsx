import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

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
          '/assets/Images/PregradniSteni/PregradniSteni1.jpg',
          '/assets/Images/PregradniSteni/PregradniSteni3.jpg',
          '/assets/Images/PregradniSteni/PregradniSteni4.jpg',
          '/assets/Images/PregradniSteni/PregradniSteni5.jpg',
          '/assets/Images/PregradniSteni/PregradniSteni6.jpg',
          '/assets/Images/PregradniSteni/PregradniSteni7.jpg',
          '/assets/Images/PregradniSteni/PregradniSteni8.jpg',
          '/assets/Images/PregradniSteni/PregradniSteni10.jpg',
          '/assets/Images/PregradniSteni/PregradniSteniMain.jpg'
        ],
        'PredStenni': [
          '/assets/Images/PredStenni/PredStenni1.jpg',
          '/assets/Images/PredStenni/PredStenni2.jpg',
          '/assets/Images/PredStenni/PredStenni3.jpg',
          '/assets/Images/PredStenni/PredStenni4.JPG',
          '/assets/Images/PredStenni/PredStenni5.JPG',
          '/assets/Images/PredStenni/PredStenni6.JPG',
          '/assets/Images/PredStenni/PredStenni7.JPG',
          '/assets/Images/PredStenni/PredStenni8.jpeg',
          '/assets/Images/PredStenni/PredStenni9.jpg',
          '/assets/Images/PredStenni/PredStenni10.jpg',
          '/assets/Images/PredStenni/PredStenniMain.jpg'
        ],
        'Oblicovki': [
          '/assets/Images/Oblicovki/Oblicovki1.jpeg',
          '/assets/Images/Oblicovki/OblicovkiMain.jpg'
        ],
        'OkacheniTavani': [
          '/assets/Images/OkacheniTavani/OkacheniTavani1.JPG',
          '/assets/Images/OkacheniTavani/OkacheniTavani2.JPEG',
          '/assets/Images/OkacheniTavani/OkacheniTavani3.jpg',
          '/assets/Images/OkacheniTavani/OkacheniTavani4.jpg',
          '/assets/Images/OkacheniTavani/OkacheniTavani5.jpg',
          '/assets/Images/OkacheniTavani/OkacheniTavani6.jpg',
          '/assets/Images/OkacheniTavani/OkacheniTavani7.jpg',
          '/assets/Images/OkacheniTavani/OkacheniTavani8.jpg',
          '/assets/Images/OkacheniTavani/OkacheniTavani9.jpg',
          '/assets/Images/OkacheniTavani/OkacheniTavani10.jpg',
          '/assets/Images/OkacheniTavani/OkacheniTavani11.jpg',
          '/assets/Images/OkacheniTavani/OkacheniTavani12.jpg',
          '/assets/Images/OkacheniTavani/OkacheniTavani14.jpg',
          '/assets/Images/OkacheniTavani/OkacheniTavani15.jpg',
          '/assets/Images/OkacheniTavani/OkacheniTavani16.jpg',
          '/assets/Images/OkacheniTavani/OkacheniTavaniMain.JPEG'
        ],
        'PVCtavani': [
          '/assets/Images/PVCtavani/PVCtavaniMain.jpg'
        ],
        'RasterniTavani': [
          '/assets/Images/RasterniTavani/RasterniTavani1.jpg',
          '/assets/Images/RasterniTavani/RasterniTavani2.jpg',
          '/assets/Images/RasterniTavani/RasterniTavaniMain.jpg'
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
                      target.src = '/assets/default-service.jpg';
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
