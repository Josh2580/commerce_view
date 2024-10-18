import { ProductImagesGallery } from "../components/ProductImagesGallery";
import { ProductInfo } from "../components/ProductInfo";
import { CustomerReviews } from "../components/CustomerReviews";
import { SimilarProducts } from "../components/SimilarProducts";

export const ProductDetailsPage = () => {
  return (
    <div className="container mx-auto flex flex-col gap-3 overflow-hidden w-full">
      <div className="flex flex-col bg-white md:flex-row gap-3">
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
