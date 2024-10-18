import React from "react";
// import { Breadcrumb } from "../components/Breadcrumb";
import { CartSummary } from "../components/CartSummary";
import { PriceSummary } from "../components/PriceSummary";

export const ShoppingCartPage: React.FC = () => {
  return (
    <div className="container my-responsive mx-auto py-6">
      {/* <Breadcrumb /> */}
      <div className="flex flex-col gap-4 md:flex-row ">
        <CartSummary />
        <PriceSummary />
      </div>
    </div>
  );
};
