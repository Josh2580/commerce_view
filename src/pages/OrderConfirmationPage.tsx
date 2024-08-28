import React from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { OrderConfirmationMessage } from "../components/OrderConfirmationMessage";
import { OrderSummary } from "../components/OrderSummary";
import { EstimatedDelivery } from "../components/EstimatedDelivery";

export const OrderConfirmationPage: React.FC = () => {
  return (
    <div className="container mx-auto py-6">
      <Breadcrumb />
      <OrderConfirmationMessage />
      <OrderSummary />
      <EstimatedDelivery />
      <div className="mt-10 text-center">
        <button className="btn btn-primary">Continue Shopping</button>
      </div>
    </div>
  );
};
