import React from "react";

const brands = [
  { name: "Apple", logo: "https://via.placeholder.com/150?text=Apple" },
  { name: "Samsung", logo: "https://via.placeholder.com/150?text=Samsung" },
  { name: "Sony", logo: "https://via.placeholder.com/150?text=Sony" },
  { name: "LG", logo: "https://via.placeholder.com/150?text=LG" },
  { name: "Microsoft", logo: "https://via.placeholder.com/150?text=Microsoft" },
  { name: "Nike", logo: "https://via.placeholder.com/150?text=Nike" },
];

export const Brands: React.FC = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Brands We Work With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg"
            >
              <img src={brand.logo} alt={brand.name} className="h-12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
