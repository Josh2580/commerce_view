import React from "react";

export const PriceSummary: React.FC = () => {
  const subtotal = 899; // Example value
  const shipping = 10; // Example value
  const discount = 50; // Example value
  const total = subtotal + shipping - discount;

  return (
    <div className="w-full md:w-1/3 md:pl-6 mt-6 md:mt-0">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Price Summary</h2>
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
        <button className="btn p-0  btn-circle border border-gray-400 w-full mt-6">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};
