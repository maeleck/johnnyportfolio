
import React from 'react';
import type { PhotoDecoration } from '../types';
import { CONFIG } from '../config';

interface PhotoCardProps {
  photo: PhotoDecoration;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => {
  return (
    <div
      className="absolute p-2 pb-4 bg-white shadow-lg transform transition-transform hover:scale-105 hover:z-20"
      style={{
        top: photo.position.top,
        left: photo.position.left,
        width: photo.size.width,
        height: photo.size.height,
        transform: `rotate(${photo.rotation}deg)`,
      }}
      aria-hidden="true" // These are decorative
    >
      <img
        src={CONFIG.IMAGES[photo.imageKey]}
        alt={photo.alt}
        className="w-full h-full object-cover bg-gray-200"
      />
    </div>
  );
};
