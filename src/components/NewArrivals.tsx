import React from "react";
import { Link } from "react-router-dom";

const newArrivals = [
  {
    name: "VR Headset",
    image: "https://via.placeholder.com/150?text=VR+Headset",
    price: "$299",
    link: "/product/vr-headset",
  },
  {
    name: "Smart Home Hub",
    image: "https://via.placeholder.com/150?text=Smart+Home+Hub",
    price: "$149",
    link: "/product/smart-home-hub",
  },
  {
    name: "4K Camera",
    image: "https://via.placeholder.com/150?text=4K+Camera",
    price: "$499",
    link: "/product/4k-camera",
  },
  {
    name: "Electric Scooter",
    image: "https://via.placeholder.com/150?text=Electric+Scooter",
    price: "$399",
    link: "/product/electric-scooter",
  },
];

export const NewArrivals: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          New Arrivals
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {newArrivals.map((product, index) => (
            <Link
              to={product.link}
              key={index}
              className="block bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-gray-700">
                  {product.name}
                </h3>
                <p className="text-gray-500">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
