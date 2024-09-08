import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaStar } from "react-icons/fa";

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
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{category.name}</h3>
              <button className="mt-2 text-indigo-600 hover:underline flex items-center">
                Shop Now <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
