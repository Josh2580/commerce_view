import React from "react";
// import { Breadcrumb } from "../components/Breadcrumb";
import { ProductImagesGallery } from "../components/ProductImagesGallery";
import { ProductInfo } from "../components/ProductInfo";
// import { ProductDescription } from "../components/ProductDescription";
import { CustomerReviews } from "../components/CustomerReviews";
import { SimilarProducts } from "../components/SimilarProducts";

export const ProductDetailsPage: React.FC = () => {
  return (
    <div className="container mx-auto overflow-hidden">
      {/* <Breadcrumb /> */}

      <div className="flex flex-col gap-3">
        <ProductImagesGallery />
        <ProductInfo />
      </div>

      {/* <ProductDescription /> */}
      <SimilarProducts />
      <CustomerReviews />
      <SimilarProducts />
    </div>
  );
};
