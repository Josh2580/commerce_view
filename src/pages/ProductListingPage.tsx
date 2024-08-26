import React from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { FiltersSidebar } from "../components/FiltersSidebar";
import { ProductGrid } from "../components/ProductGrid";

const ProductListingPage: React.FC = () => {
  return (
    <div className="container mx-auto py-6">
      <Breadcrumb />

      <div className="flex flex-col md:flex-row mt-6">
        <FiltersSidebar />
        <ProductGrid />
      </div>
    </div>
  );
};

export default ProductListingPage;
