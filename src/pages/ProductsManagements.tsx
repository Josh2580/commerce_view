import React from "react";
import { ProductTable } from "../components/ProductTable";

export const ProductsManagements: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 md:mb-6">
        Products Managements
      </h2>

      <div>
        <ProductTable />
      </div>
    </div>
  );
};
