import { useEffect, useState } from "react";
import Product1 from "../assets/product-1.jpg";
import Product2 from "../assets/product-2.jpg";
import Product3 from "../assets/product-3.jpg";
import Product4 from "../assets/product-4.jpg";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
// import { ProductImagesGallery } from "../components/ProductImagesGallery";
// import { ProductInfo } from "../components/ProductInfo";
import { CustomerReviews } from "../components/CustomerReviews";
import { SimilarProducts } from "../components/SimilarProducts";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../features/products/productApi";
import { ListProducts } from "../components/ListProducts";
import { ProductTypeFull } from "../types/ProductTypes";
import { ReviewType } from "../types/ReviewTypes";
import { useAddToCartMutation } from "../features/cart/cartApi";

export const ProductDetailsPage = () => {
  const { product_id } = useParams();
  const navigate = useNavigate();

  const [addToCartApi] = useAddToCartMutation();

  const [CartProductId, SetCartProductId] = useState<any>();
  const [CartProductQuantity, SetCartProductQuantity] = useState<number>(1);
  // console.log("CartProductQuantity: ", CartProductQuantity);

  useEffect(() => {
    SetCartProductId(product_id);
  }, []);

  const formData = new FormData();
  const AddToCartHandler = async () => {
    formData.append("product", CartProductId?.toString());
    formData.append("quantity", CartProductQuantity.toString());
    await addToCartApi(formData);
    // let resultCart = await addToCartApi(formData);
    // console.log(resultCart);
    navigate("/cart");
  };

  const { data, isSuccess, isError, isLoading } =
    useGetProductByIdQuery(product_id);

  // console.log(product_id);
  // isSuccess && console.log("data", data);

  const [selectedImage, setSelectedImage] = useState<string>(Product1);

  // Similar Products by Category State
  const [SimilarCategoryProductResult, SetSimilarCategoryProductResult] =
    useState<ProductTypeFull[]>([]);

  // Similar Products by Store State
  const [SimilarStoreProductResult, SetSimilarStoreProductResult] = useState<
    ProductTypeFull[]
  >([]);

  // Review for this Product State
  const [ReviewProductResult, SetReviewProductResult] = useState<ReviewType[]>(
    []
  );

  // console.log("ReviewProductResult: ", ReviewProductResult);

  const images = [Product1, Product2, Product3, Product4, Product3, Product4];

  useEffect(() => {
    // Setup for Similar Products by Category and Store
    if (isSuccess && data) {
      // By Category Category Category
      const MySimilarCategoryProduct: any = data.similar_by_subcategories;
      SetSimilarCategoryProductResult(MySimilarCategoryProduct);

      // By Store Store Store
      const MySimilarStoreProduct: any = data.similar_by_store;
      //setting the state for Similar product component
      SetSimilarStoreProductResult(MySimilarStoreProduct);

      // By Product Reviews Reviews
      const MyProductReviews: any = data.product_reviews;
      //setting the state for Similar product component
      SetReviewProductResult(MyProductReviews);
    }
  }, [isSuccess, data]); // Only runs when `isSuccess` or `data` changes

  // console.log(data?.product.stock);

  return (
    <>
      {isError && (
        <div>
          <p>There is an Error</p>
        </div>
      )}

      {isLoading && (
        <div>
          <p>Loading....</p>
        </div>
      )}

      {data && (
        <div className="container mx-auto flex flex-col gap-3 overflow-hidden w-full">
          {/* <div className="">
        <ProductInfo />
      </div> */}
          <div className="w-full my-responsive flex flex-col bg-white md:flex-row gap-3">
            {/* Image Gallery Section */}
            <div className="md:w-1/2">
              <img
                src={selectedImage}
                alt="Selected Product"
                className="w-full h-5/6 object-cover aspect-square"
              />
              <div className="flex mt-3 my-custom-scrollbar space-x-3 overflow-scroll">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Product thumbnail ${index + 1}`}
                    className={`w-20 h-20 object-cover cursor-pointer rounded shadow ${
                      selectedImage === img ? "border-2 border-blue-500" : ""
                    }`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            </div>

            {/* Product Info Section */}
            <div className="flex flex-col gap-3 md:w-1/2">
              {/* Name or Title */}
              <div className="w-full flex h-full flex-col relative gap-3 md:gap-5">
                <h1 className=" my-body-1">{data.product?.name}</h1>

                {/* Price */}
                <div className="my-header-1">{data.product?.price}</div>

                {/* Size and Color are all Hidden for now */}
                {/*  Hidden for now */}
                {/*  Hidden for now */}
                <div className="w-full md:flex-col gap-3 md:gap-6 max-w-2xs">
                  <select className="w-full hidden pb-1 bg-transparent border-b my-body-2 focus:outline-none focus:border-blue-800">
                    <option value="option1">Select Size</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                  <select className="w-full hidden bg-transparent border-b my-body-2 focus:outline-none focus:border-blue-800">
                    <option value="option1">Select Color</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                  <div className="w-1/2 flex items-center gap-4">
                    <label
                      className="text-xl text-gray-600 font-medium"
                      htmlFor="quantity"
                    >
                      Quantity
                    </label>
                    <select
                      id="quantity"
                      value={CartProductQuantity}
                      onChange={(e) =>
                        SetCartProductQuantity(Number(e.target.value))
                      } // Update state with the selected value
                      className=" w-full bg-transparent border my-body-2 focus:outline-none focus:border-blue-800"
                    >
                      {/* <option>Select Quantity</option> */}

                      {[...Array(data.product.stock)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {" "}
                          {/* Set the value of each option */}
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div className=" flex flex-col gap-2">
                  <h2 className="product-name-3 font-semibold">
                    Product Description
                  </h2>
                  <p id="scrollTarget" className="product-nam-3 my-body-3">
                    {data.product?.description}
                  </p>
                </div>

                {/* Reviews */}
                <div className="flex items-center">
                  <p className="flex ">
                    <span className="product-review-2 ">
                      <IoIosStar />
                    </span>
                    <span className="product-review-2">
                      <IoIosStar />
                    </span>
                    <span className="product-review-2">
                      <IoIosStar />
                    </span>
                    <span className="product-review-2">
                      <IoIosStarHalf />
                    </span>
                    <span className="product-review-2">
                      <IoIosStarOutline />
                    </span>
                  </p>

                  <span className="product-reviews">(120 reviews)</span>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={AddToCartHandler}
                  id="scrollButton"
                  className="btn fixed md:static  bottom-0 left-2 md:left-0 right-2 md:right-0  bg-gray-100 border text-base border-gray-600"
                  // className="btn fixed mx-auto bottom-0 left-0 bg-gray-100 border text-base border-gray-600 w-11/12 md:w-auto"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* <ProductDescription /> */}
          <ListProducts
            data={SimilarCategoryProductResult}
            title="Similar Products"
          />
          <ListProducts
            data={SimilarStoreProductResult}
            title="Products by Same Vendor"
          />
          <CustomerReviews title="Product Reviews" data={ReviewProductResult} />
          <SimilarProducts />
        </div>
      )}
    </>
  );
};
