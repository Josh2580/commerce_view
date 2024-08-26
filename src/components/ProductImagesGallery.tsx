import React, { useState } from "react";

export const ProductImagesGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string>(
    "https://via.placeholder.com/450?text=Product+Image"
  );

  const images = [
    "https://via.placeholder.com/450?text=Product+Image",
    "https://via.placeholder.com/450?text=Another+Image",
    "https://via.placeholder.com/450?text=Different+View",
  ];

  return (
    <div className="w-full md:w-1/2">
      <img
        src={selectedImage}
        alt="Selected Product"
        className="w-full h-96 object-cover rounded-lg"
      />
      <div className="flex mt-4 space-x-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Product thumbnail ${index + 1}`}
            className={`w-20 h-20 object-cover cursor-pointer rounded-lg ${
              selectedImage === img ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
};
