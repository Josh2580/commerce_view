import React from "react";

export const OrderSummary: React.FC = () => {
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

  const subtotal = 899; // Example value
  const shipping = 10; // Example value
  const discount = 50; // Example value
  const total = subtotal + shipping - discount;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      {products.map((product) => (
        <div key={product.id} className="flex justify-between mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div className="flex-1 ml-4">
            <h3 className="font-medium">{product.name}</h3>
            <p>Quantity: {product.quantity}</p>
          </div>
          <span className="text-lg font-semibold">{product.price}</span>
        </div>
      ))}
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>${shipping.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Discount</span>
        <span>-${discount.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-semibold text-lg mt-4">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
};
