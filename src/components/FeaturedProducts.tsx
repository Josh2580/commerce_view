import React from "react";
import { Link } from "react-router-dom";

const featuredProducts = [
  {
    name: "Smartphone",
    image: "https://via.placeholder.com/150?text=Smartphone",
    price: "$299",
    link: "/product/smartphone",
  },
  {
    name: "Headphones",
    image: "https://via.placeholder.com/150?text=Headphones",
    price: "$99",
    link: "/product/headphones",
  },
  {
    name: "Laptop",
    image: "https://via.placeholder.com/150?text=Laptop",
    price: "$999",
    link: "/product/laptop",
  },
  {
    name: "Smartwatch",
    image: "https://via.placeholder.com/150?text=Smartwatch",
    price: "$199",
    link: "/product/smartwatch",
  },
];

export const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
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
