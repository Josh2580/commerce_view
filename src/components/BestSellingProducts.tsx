import React from "react";
import { Link } from "react-router-dom";

const bestSellingProducts = [
  {
    name: "Gaming Console",
    image: "https://via.placeholder.com/150?text=Gaming+Console",
    price: "$499",
    link: "/product/gaming-console",
  },
  {
    name: "Bluetooth Speaker",
    image: "https://via.placeholder.com/150?text=Bluetooth+Speaker",
    price: "$59",
    link: "/product/bluetooth-speaker",
  },
  {
    name: "Smart TV",
    image: "https://via.placeholder.com/150?text=Smart+TV",
    price: "$799",
    link: "/product/smart-tv",
  },
  {
    name: "Wireless Earbuds",
    image: "https://via.placeholder.com/150?text=Wireless+Earbuds",
    price: "$99",
    link: "/product/wireless-earbuds",
  },
];

export const BestSellingProducts: React.FC = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Best Selling Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {bestSellingProducts.map((product, index) => (
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
