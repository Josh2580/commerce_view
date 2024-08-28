import React from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { ShippingForm } from "../components/ShippingForm";
import { PaymentForm } from "../components/PaymentForm";
import { OrderSummary } from "../components/OrderSummary";

export const CheckoutPage: React.FC = () => {
  return (
    <div className="container mx-auto py-6">
      <Breadcrumb />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
          <ShippingForm />
        </div>
        <OrderSummary />
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-6">Payment Information</h2>
        <PaymentForm />
        <div className="mt-6 flex justify-end">
          <button className="btn btn-primary">Place Order</button>
        </div>
      </div>
    </div>
  );
};
