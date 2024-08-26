import React, { useEffect, useState } from "react";

const images = [
  "https://via.placeholder.com/1200x400?text=Slide+1",
  "https://via.placeholder.com/1200x400?text=Slide+2",
  "https://via.placeholder.com/1200x400?text=Slide+3",
  "https://via.placeholder.com/1200x400?text=Slide+4",
];

export const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel w-full bg-blue-300">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item relative w-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={image} className="w-full" alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};
