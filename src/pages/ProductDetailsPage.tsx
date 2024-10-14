import React from "react";
// import { Breadcrumb } from "../components/Breadcrumb";
import { ProductImagesGallery } from "../components/ProductImagesGallery";
import { ProductInfo } from "../components/ProductInfo";
// import { ProductDescription } from "../components/ProductDescription";
import { CustomerReviews } from "../components/CustomerReviews";
import { SimilarProducts } from "../components/SimilarProducts";

export const ProductDetailsPage: React.FC = () => {
  return (
    <div className="container mx-auto overflow-hidden w-full">
      {/* <Breadcrumb /> */}

      <div className="flex flex-col md:flex-row gap-3">
        <div className="md:w-1/2">
          <ProductImagesGallery />
        </div>

        <div className=" md:w-1/2">
          <ProductInfo />
        </div>
      </div>

      {/* <ProductDescription /> */}
      <SimilarProducts />
      <CustomerReviews />
      <SimilarProducts />
    </div>
  );
};
