import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceDetailContent {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  imageSrc?: string;
  imageFolder?: string;
  detailContent?: ServiceDetailContent;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  imageSrc = '/assets/default-service.jpg', 
  imageFolder,
  detailContent 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  // If the main image fails to load, we'll use a fallback
  const handleImageError = () => {
    console.error(`Failed to load image: ${imageSrc}`);
    setImageError(true);
  };

  // Determine the image URL to use
  const imageUrl = imageError 
    ? '/assets/default-service.jpg' // Fallback image
    : imageSrc;

  useEffect(() => {
    // Preload the image to check if it exists
    const img = new Image();
    img.src = imageSrc || '';
    img.onerror = handleImageError;
    
    return () => {
      // Clean up
      img.onerror = null;
    };
  }, [imageSrc]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Animation variants
  const cardVariants = {
    hover: { 
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    },
    tap: { 
      scale: 0.98,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
    }
  };

  const imageVariants = {
    hover: { 
      scale: 1.05,
      filter: "blur(2px)" 
    }
  };

  const overlayVariants = {
    hover: { 
      backgroundColor: "rgba(0, 0, 0, 0.7)" 
    }
  };

  const buttonMotionProps = {
    initial: { 
      opacity: 0, 
      scale: 0.9,
      y: 10
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      y: 10
    },
    whileHover: { 
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)"
    },
    whileTap: { 
      scale: 0.95 
    }
  };

  return (
    <>
      <motion.div
        className="relative h-72 rounded-lg overflow-hidden shadow-md group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={openModal}
        variants={cardVariants}
        whileHover="hover"
        whileTap="tap"
        transition={{ duration: 0.3 }}
      >
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
          variants={imageVariants}
          animate={isHovered ? "hover" : ""}
          transition={{ duration: 0.5 }}
        />
        
        {/* Dark Overlay */}
        <motion.div 
          className="absolute inset-0 bg-black bg-opacity-40"
          variants={overlayVariants}
          animate={isHovered ? "hover" : ""}
          transition={{ duration: 0.3 }}
        />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center p-6 text-center">
          {/* Title and Description - Hidden on hover */}
          <AnimatePresence>
            {!isHovered && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
                <p className="text-gray-200 leading-relaxed font-semibold">{description}</p>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Learn More Button - Only visible on hover and centered */}
          <AnimatePresence>
            {isHovered && (
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal();
                  }}
                  className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-lg"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Научи повече
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {detailContent && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={detailContent.title}
        >
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div 
              className="flex items-center gap-4 border-l-4 border-blue-600 pl-4"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <h4 className="text-2xl font-medium text-gray-800">{detailContent.subtitle}</h4>
            </motion.div>
            
            <motion.div 
              className="text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <p className="mb-6 text-lg">{detailContent.description}</p>
              
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <h5 className="font-semibold text-lg mb-4 text-blue-700">Характеристики:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {detailContent.features.map((feature, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                    >
                      <motion.span 
                        className="text-green-600 flex-shrink-0 mt-1 text-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          delay: 0.5 + index * 0.1, 
                          duration: 0.4,
                          type: "spring",
                          stiffness: 200,
                          damping: 10
                        }}
                      >
                        ✔
                      </motion.span>
                      <p className="text-gray-700">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </Modal>
      )}
    </>
  );
};

export default ServiceCard;