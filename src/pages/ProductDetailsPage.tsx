import React from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { ProductImagesGallery } from "../components/ProductImagesGallery";
import { ProductInfo } from "../components/ProductInfo";
import { ProductDescription } from "../components/ProductDescription";
import { CustomerReviews } from "../components/CustomerReviews";

export const ProductDetailsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-6">
      <Breadcrumb />

      <div className="flex flex-col md:flex-row mt-6">
        <ProductImagesGallery />
        <ProductInfo />
      </div>

      <ProductDescription />
      <CustomerReviews />
    </div>
  );
};
