import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";

const images = [
  "https://via.placeholder.com/1200x400?text=Slide+1",
  "https://via.placeholder.com/1200x400?text=Slide+2",
  "https://via.placeholder.com/1200x400?text=Slide+3",
  "https://via.placeholder.com/1200x400?text=Slide+4",
];

export const HeroSecion: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotions = [
    {
      id: 1,
      title: "Summer Sale",
      description: "Up to 50% off!",
      image: "/images/summer-sale.jpg",
    },
    {
      id: 2,
      title: "New Arrivals",
      description: "Check out the latest products.",
      image: "/images/new-arrivals.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    // <div className="carousel w-full bg-blue-300">
    //   {images.map((image, index) => (
    //     <div
    //       key={index}
    //       className={`carousel-item relative w-full transition-opacity duration-1000 ${
    //         index === currentSlide ? "opacity-100" : "opacity-0"
    //       }`}
    //     >
    //       <img src={image} className="w-full" alt={`Slide ${index + 1}`} />
    //     </div>
    //   ))}
    // </div>
    <div className="bg-white">
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay
        infiniteLoop
        className="w-full max-h-96"
      >
        {promotions.map((promo) => (
          <div key={promo.id}>
            <img
              src={promo.image}
              alt={promo.title}
              className="object-cover w-full h-96"
            />
            <div className="legend">
              <h3 className="text-xl font-semibold">{promo.title}</h3>
              <p>{promo.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
