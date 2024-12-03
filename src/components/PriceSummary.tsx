import React from "react";
import { Link } from "react-router-dom";

export const PriceSummary: React.FC = () => {
  const subtotal = 899; // Example value
  const shipping = 10; // Example value
  const discount = 50; // Example value
  const total = subtotal + shipping - discount;

  return (
    <div className="w-full md:w-2/3 lg:w-1/3 h-max bg-white rounded-lg shadow-lg my-responsive">
      <div className=" ">
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
        <Link
          to={"/checkout/shipping-address"}
          className="btn py-0 px-2  btn-circle border border-gray-400 w-full mt-6"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};
