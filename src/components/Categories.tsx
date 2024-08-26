import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Electronics",
    image: "https://via.placeholder.com/150?text=Electronics",
    link: "/category/electronics",
  },
  {
    name: "Fashion",
    image: "https://via.placeholder.com/150?text=Fashion",
    link: "/category/fashion",
  },
  {
    name: "Home & Appliances",
    image: "https://via.placeholder.com/150?text=Home+%26+Appliances",
    link: "/category/home-appliances",
  },
  {
    name: "Beauty",
    image: "https://via.placeholder.com/150?text=Beauty",
    link: "/category/beauty",
  },
  {
    name: "Sports",
    image: "https://via.placeholder.com/150?text=Sports",
    link: "/category/sports",
  },
  {
    name: "Groceries",
    image: "https://via.placeholder.com/150?text=Groceries",
    link: "/category/groceries",
  },
];

export const Categories: React.FC = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Link
              to={category.link}
              key={index}
              className="block bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-gray-700">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
