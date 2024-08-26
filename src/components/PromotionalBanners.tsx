import React from "react";

const promotionalBanners = [
  {
    image:
      "https://via.placeholder.com/1200x200?text=Flash+Sale+Up+to+50%25+Off",
    link: "/flash-sale",
  },
  {
    image:
      "https://via.placeholder.com/1200x200?text=Free+Shipping+on+Orders+Over+$50",
    link: "/free-shipping",
  },
];

export const PromotionalBanners: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto space-y-4">
        {promotionalBanners.map((banner, index) => (
          <a href={banner.link} key={index} className="block">
            <img
              src={banner.image}
              alt={`Banner ${index + 1}`}
              className="w-full rounded-lg shadow-md"
            />
          </a>
        ))}
      </div>
    </section>
  );
};
