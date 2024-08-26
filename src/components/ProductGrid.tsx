import React from "react";
import { ProductCard } from "./ProductCard";

export const products = [
  {
    id: 1,
    name: "iPhone 12",
    image: "https://via.placeholder.com/150?text=iPhone+12",
    price: "$999",
    discountPrice: "$899",
    rating: 4,
  },
  {
    id: 2,
    name: "iPhone 12",
    image: "https://via.placeholder.com/150?text=iPhone+12",
    price: "$999",
    discountPrice: "$899",
    rating: 4,
  },
  {
    id: 3,
    name: "iPhone 12",
    image: "https://via.placeholder.com/150?text=iPhone+12",
    price: "$999",
    discountPrice: "$899",
    rating: 4,
  },
  {
    id: 4,
    name: "iPhone 12",
    image: "https://via.placeholder.com/150?text=iPhone+12",
    price: "$999",
    discountPrice: "$899",
    rating: 4,
  },
  {
    id: 5,
    name: "iPhone 12",
    image: "https://via.placeholder.com/150?text=iPhone+12",
    price: "$999",
    discountPrice: "$899",
    rating: 4,
  },
  {
    id: 6,
    name: "iPhone 12",
    image: "https://via.placeholder.com/150?text=iPhone+12",
    price: "$999",
    discountPrice: "$899",
    rating: 4,
  },
  {
    id: 7,
    name: "iPhone 12",
    image: "https://via.placeholder.com/150?text=iPhone+12",
    price: "$999",
    discountPrice: "$899",
    rating: 4,
  },
  {
    id: 8,
    name: "iPhone 12",
    image: "https://via.placeholder.com/150?text=iPhone+12",
    price: "$999",
    discountPrice: "$899",
    rating: 4,
  },
  // Add more products here...
];

export const ProductGrid: React.FC = () => {
  return (
    <section className="w-full md:w-3/4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
