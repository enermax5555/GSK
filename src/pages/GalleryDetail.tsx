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
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  
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
          "https://i.ibb.co/6csnYHVP/1556e4b96745.jpg",
          "https://i.ibb.co/SDCPmcTJ/f7ffded5042f.jpg",
          "https://i.ibb.co/1tgQ70t8/988c66d7f99d.jpg",
          "https://i.ibb.co/b5LJtLWv/340861be3915.jpg",
          "https://i.ibb.co/8nM5PBqg/22b39103e2fe.jpg",
          "https://i.ibb.co/G4ky3VR4/57d88072f576.jpg",
          "https://i.ibb.co/v6m5nj4k/6a6148f0b79f.jpg",
          "https://i.ibb.co/Tx8F4Lwv/0a5bbb3c5c21.jpg"
        ],
        'PredStenni': [
          "https://i.ibb.co/fdQhZZ68/3e3e7847edf1.jpg",
          "https://i.ibb.co/LzfZZHMt/d6fa71ed1815.jpg",
          "https://i.ibb.co/4nGvrGNF/88d6b4f30693.jpg",
          "https://i.ibb.co/JWcfcRS5/cf1a7d5b6b08.jpg",
          "https://i.ibb.co/SDpWytWm/2006f810b613.jpg",
          "https://i.ibb.co/kgKdv4Tx/9954fd16b730.jpg",
          "https://i.ibb.co/MDmM60gQ/5616cd33985a.jpg",
          "https://i.ibb.co/6R9s1sKh/288c890d0b93.jpg",
          "https://i.ibb.co/Cp9BdKNj/216f394bb74f.jpg",
          "https://i.ibb.co/nMSHfpCZ/f78ab5000830.jpg",
          "https://i.ibb.co/2rKzHhV/7764e88f3b5d.jpg",
          "https://i.ibb.co/5xnZkwdx/bac6b16bd7c7.jpg",
          "https://i.ibb.co/N6mRW52W/e1703c40efb3.jpg",
          "https://i.ibb.co/HD1B7rKq/0d21cabe1336.jpg",
          "https://i.ibb.co/Txc7Rzvb/d96eb31b0160.jpg",
          "https://i.ibb.co/Q71H11zH/45a08cc56fa5.jpg",
          "https://i.ibb.co/chjw9C63/964ae40ce051.jpg",
          "https://i.ibb.co/hx8YT300/b87ef5b35529.jpg",
          "https://i.ibb.co/WN48wfwz/c3535c90944b.jpg"
        ],
        'Oblicovki': [
          "https://i.ibb.co/FkzD0vGx/bd5e381875c9.jpg"
        ],
        'OkacheniTavani': [
          "https://i.ibb.co/Q71H11zH/45a08cc56fa5.jpg",
          "https://i.ibb.co/jkrTBdmH/6a865398f809.jpg",
          "https://i.ibb.co/svCY9v0j/c39b2bc2002e.jpg",
          "https://i.ibb.co/27BK26Sv/a93af2bfbad1.jpg",
          "https://i.ibb.co/M5NphLMY/b1a81f5c984f.jpg",
          "https://i.ibb.co/xqQYQDph/bb4fec05f577.jpg",
          "https://i.ibb.co/3yZndg5y/565d6ff9257f.jpg",
          "https://i.ibb.co/kVG7qq1c/8aa57a203d6d.jpg",
          "https://i.ibb.co/vn8GGBQ/50c9d4859b45.jpg",
          "https://i.ibb.co/QF9cbrRN/d99776d29384.jpg",
          "https://i.ibb.co/gbJqHfXs/de4ee41233c3.jpg",
          "https://i.ibb.co/TqbkHcDd/9e94a512050b.jpg",
          "https://i.ibb.co/6J80kn8D/46d29b329e83.jpg",
          "https://i.ibb.co/TM2jyd07/5950f8c28ec1.jpg",
          "https://i.ibb.co/JjkmkmXS/ab6496ea0344.jpg"
        ],
        'PVCtavani': [
          "https://i.ibb.co/Rk1BmZZq/79347d2decea.jpg"
        ],
        'RasterniTavani': [
          "https://i.ibb.co/n8V8NKJx/501b889f28bf.jpg",
          "https://i.ibb.co/XHdqKpD/497e4662dc49.jpg"
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
    const index = images.indexOf(imageSrc);
    setSelectedImageIndex(index);
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedImageIndex(0);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  const goToPrevious = () => {
    if (images.length === 0) return;
    const newIndex = selectedImageIndex > 0 ? selectedImageIndex - 1 : images.length - 1;
    setSelectedImageIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const goToNext = () => {
    if (images.length === 0) return;
    const newIndex = selectedImageIndex < images.length - 1 ? selectedImageIndex + 1 : 0;
    setSelectedImageIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!selectedImage) return;
      
      switch (event.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          event.preventDefault();
          goToNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, selectedImageIndex, images]);

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
              {/* Close button */}
              <button 
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2 transition-colors"
                onClick={closeLightbox}
                title="Затвори (Esc)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Previous button */}
              {images.length > 1 && (
                <button 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-3 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  title="Предишна снимка (←)"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Next button */}
              {images.length > 1 && (
                <button 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-3 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  title="Следваща снимка (→)"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              {/* Image */}
              <img 
                src={selectedImage} 
                alt={`Снимка ${selectedImageIndex + 1} от ${images.length}`} 
                className="max-h-[85vh] max-w-full mx-auto object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Image counter */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm">
                  {selectedImageIndex + 1} / {images.length}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryDetail;
