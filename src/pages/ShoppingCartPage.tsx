import React from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { CartSummary } from "../components/CartSummary";
import { PriceSummary } from "../components/PriceSummary";

export const ShoppingCartPage: React.FC = () => {
  return (
    <div className="container mx-auto py-6">
      <Breadcrumb />
      <div className="flex flex-col md:flex-row mt-6">
        <CartSummary />
        <PriceSummary />
      </div>
    </div>
  );
};
