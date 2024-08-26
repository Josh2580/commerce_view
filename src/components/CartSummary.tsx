import React from "react";
import { CartItem } from "./CartItem";

const products = [
  {
    id: 1,
    name: "iPhone 12",
    image: "https://via.placeholder.com/150?text=iPhone+12",
    price: "$899",
    quantity: 1,
  },
  // More products...
];

export const CartSummary: React.FC = () => {
  const handleRemove = (id: number) => {
    console.log(`Remove product with id ${id}`);
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    console.log(`Change quantity of product with id ${id} to ${quantity}`);
  };

  return (
    <div className="w-full md:w-2/3">
      <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>
      {products.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          onRemove={handleRemove}
          onQuantityChange={handleQuantityChange}
        />
      ))}
    </div>
  );
};
