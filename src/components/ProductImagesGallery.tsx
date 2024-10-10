import React, { useState } from "react";
import Product1 from "../assets/product-1.jpg";
import Product2 from "../assets/product-2.jpg";
import Product3 from "../assets/product-3.jpg";
import Product4 from "../assets/product-4.jpg";

export const ProductImagesGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string>(Product1);

  const images = [Product1, Product2, Product3, Product4, Product3, Product4];

  return (
    <div className="w-full md:w-1/2 p-3">
      <img
        src={selectedImage}
        alt="Selected Product"
        className="w-full h-full object-cover aspect-square"
      />
      <div className="flex mt-3 space-x-3 overflow-scroll">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Product thumbnail ${index + 1}`}
            className={`w-20 h-20 object-cover cursor-pointer rounded shadow ${
              selectedImage === img ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
};
