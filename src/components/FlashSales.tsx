import React from "react";
import { Link } from "react-router-dom";

const flashSales = [
  {
    name: "Wireless Mouse",
    image: "https://via.placeholder.com/150?text=Wireless+Mouse",
    originalPrice: "$39.99",
    salePrice: "$19.99",
    link: "/product/wireless-mouse",
    timeLeft: "2h 30m",
  },
  {
    name: "Gaming Chair",
    image: "https://via.placeholder.com/150?text=Gaming+Chair",
    originalPrice: "$199.99",
    salePrice: "$129.99",
    link: "/product/gaming-chair",
    timeLeft: "5h 10m",
  },
  {
    name: "Smart Watch",
    image: "https://via.placeholder.com/150?text=Smart+Watch",
    originalPrice: "$149.99",
    salePrice: "$89.99",
    link: "/product/smart-watch",
    timeLeft: "1h 45m",
  },
];

export const FlashSales: React.FC = () => {
  return (
    <section className="py-8 bg-red-50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-red-700 mb-6">
          Limited-Time Offers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {flashSales.map((product, index) => (
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
                <p className="text-red-500 line-through">
                  {product.originalPrice}
                </p>
                <p className="text-green-600 font-semibold">
                  {product.salePrice}
                </p>
                <p className="text-gray-500 mt-2">
                  Time left: {product.timeLeft}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
