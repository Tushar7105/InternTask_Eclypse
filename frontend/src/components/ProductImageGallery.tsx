import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import vid from "@/assets/img/ProductVideo.mp4";
interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

const ProductImageGallery = ({ images, productName }: ProductImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-[4/5] overflow-hidden rounded-lg bg-gray-100">
        <video
          src={vid}
          controls
          autoPlay
          muted
          loop
          className="h-full w-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </div>


      <div className="grid grid-cols-3 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "aspect-[4/5] overflow-hidden rounded-md transition-all duration-200",
              selectedImage === index
                ? "ring-2 ring-red-500 ring-offset-2"
                : "ring-1 ring-gray-200 hover:ring-gray-300"
            )}
          >
            <img
              src={image}
              alt={`${productName} - Thumbnail ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;