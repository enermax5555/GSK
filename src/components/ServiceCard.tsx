import React, { useState } from 'react';
import Modal from './Modal';

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
  detailContent?: ServiceDetailContent;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, detailContent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 cursor-pointer bg-white hover:bg-gray-50"
        onClick={openModal}
      >
        {icon && (
          <div className="text-3xl mb-4">{icon}</div>
        )}
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>

      {detailContent && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={detailContent.title}
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl">{detailContent.icon}</span>
              <h4 className="text-2xl font-medium text-gray-800">{detailContent.subtitle}</h4>
            </div>
            
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-4">{detailContent.description}</p>
              
              <div className="mt-6 space-y-2">
                {detailContent.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-green-600 flex-shrink-0 mt-1">✔</span>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ServiceCard;