import React from "react";
import { OrderTable } from "../components/OrderTable";

export const OrderHistory: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 md:mb-6">Order History</h2>

      <div>
        <OrderTable />
      </div>
    </div>
  );
};
