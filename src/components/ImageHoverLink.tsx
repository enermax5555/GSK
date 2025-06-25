import React from 'react';

interface ImageHoverLinkProps {
  imageUrl: string;
  alt?: string;
  link: string;
  label?: string;
}

const ImageHoverLink: React.FC<ImageHoverLinkProps> = ({ imageUrl, alt, link, label }) => (
  <a
    href={link}
    className="block overflow-hidden rounded shadow hover:shadow-lg transition group"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={imageUrl}
      alt={alt || ''}
      className="w-full h-48 object-cover transform group-hover:scale-105 transition"
    />
    {label && (
      <div className="p-2 text-center bg-white">
        <span className="font-medium">{label}</span>
      </div>
    )}
  </a>
);

export default ImageHoverLink;