import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FirstProductCard } from "./FirstProductCard";
import { FaArrowRightLong } from "react-icons/fa6";
import Product4 from "../assets/product-4.jpg";
import { ProductTypeFull } from "../types/ProductTypes";
import { useGetProductsQuery } from "../features/products/productApi";

export const PopularProducts = () => {
  const [displayItems, setDisplayItems] = useState<ProductTypeFull[]>([]);
  const { data, isSuccess } = useGetProductsQuery(undefined);
  const [NewProductResult, SetNewProductResult] = useState<ProductTypeFull[]>(
    []
  );

  // Handle resizing and update the displayed items based on the window size
  const handleResize = () => {
    const isLargeScreen = window.innerWidth >= 1024; // lg breakpoint in Tailwind
    const isMediumScreen = window.innerWidth >= 768; // md breakpoint in Tailwind
    if (isLargeScreen) {
      setDisplayItems(NewProductResult.slice(0, 10)); // Show up to 10 items on large screens
    } else if (isMediumScreen) {
      setDisplayItems(NewProductResult.slice(0, 8)); // Show up to 10 items on large screens
    } else {
      setDisplayItems(NewProductResult.slice(0, 6)); // Show only 4 items on small screens
    }
  };

  useEffect(() => {
    // Sorting to get new products by the id
    if (isSuccess && data) {
      const MyNewProduct = [...data.results].sort((a, b) => b.id - a.id);
      //setting the state for new product that will be passed to the component
      SetNewProductResult(MyNewProduct);
      // console.log(isSuccess && MyNewProduct);
    }
  }, [isSuccess, data]); // Only runs when `isSuccess` or `data` changes

  useEffect(() => {
    handleResize(); // Initial load
    window.addEventListener("resize", handleResize); // On window resize

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [data, NewProductResult]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white my-responsive card-space">
      <div className="flex justify-between">
        <h2 className="batch-head">
          Popular Products Right Now for Testing purpose
        </h2>
        <p className="more-btn">
          <span className="text-xs text-gray-400">More</span>
          <FaArrowRightLong className="batch-arrow" size={12} />
        </p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 row gap-3">
        {displayItems.map((product, i) => (
          <Link key={i} to={`/details/${product.name}/${product.id}`}>
            <FirstProductCard
              key={product.id}
              name={product.name}
              oldPrice={product.old_price || "333.55"}
              price={product.price || "222.33"}
              imageUrl={product.image || Product4}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
