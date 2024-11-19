// import { HeroSecion } from "../components/HeroSection";
// import { TopDeals } from "../components/TopDeals";
// import { NewCategoryProducts } from "../components/NewCategoryProducts";
// import { Sponsored } from "../components/Sponsored";
import { Filter } from "../components/Filter";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  activateIcon,
  // activateBar,
  setSortFilter,
} from "../features/header/headerSlice";
import { useEffect, useState } from "react";
import { Sort } from "../components/Sort";
import { ListProducts } from "../components/ListProducts";
import { useGetSubCategoryProductsQuery } from "../features/category/categoryApi";
import { FeaturedProductType, ProductTypeFull } from "../types/ProductTypes";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { useGetFeatruedProductsQuery } from "../features/products/productApi";

export const CategoryProductPage = () => {
  const { category_slug, parent_category_id, category_id } = useParams();
  const CategoryTitle = category_slug?.toLocaleUpperCase();
  // console.log(CategoryTitle);

  // Products Category API
  const { data, isSuccess } = useGetSubCategoryProductsQuery({
    parent_category_id,
    category_id,
  });

  // Featured API call state
  const { data: featuredData, isSuccess: featuredSuccess } =
    useGetFeatruedProductsQuery(undefined);
  // isSuccess && console.log(data.products);

  // Category Products State
  const [CategoryProductResult, SetCategoryProductResult] = useState<
    ProductTypeFull[]
  >([]);

  // Featured Products State
  const [FeaturedProductResult, SetFeaturedProductResult] = useState<
    FeaturedProductType[]
  >([]);

  const dispatch = useDispatch();
  // console.log(CategoryProductResult);

  const isCurrentFilter = useSelector((state: any) => state.header.isFilter);
  const isCurrentSort = useSelector((state: any) => state.header.isSort);

  useEffect(() => {
    dispatch(activateIcon());
    dispatch(setSortFilter(true));

    return () => {
      dispatch(setSortFilter(false));
    };
  }, []);

  useEffect(() => {
    // Filter for Category Products
    if (isSuccess && data) {
      SetCategoryProductResult(data.results);
    }
  }, [data, isSuccess]); // Only runs when `isSuccess` or `data` changes

  useEffect(() => {
    // Sorting for Featured Products

    if (featuredSuccess && featuredData) {
      const MyFeaturedProduct = [...featuredData.results].sort(
        (a, b) => b.id - a.id
      );
      //setting the state for Featured product component
      SetFeaturedProductResult(MyFeaturedProduct);
    }
  }, [featuredSuccess, featuredData]);

  return (
    <div className="container gap-5 mx-auto my-responsive lg:flex ">
      {/* <div className="w-1/4 hidden lg:block "> */}
      <div className="lg:w-1/4 lg:flex lg:flex-col lg:gap-3">
        <div
          className={`lg:block  lg:static fixed z-50 lg:z-0 top-0 left-0 bg-black lg:bg-white overflow-auto lg:overflow-visible transition-transform lg:transition-none ${
            isCurrentSort
              ? "translate-y-0 lg:translate-x-0"
              : "-translate-y-full lg:-translate-y-0"
          }  bg-opacity-60 lg:bg-opacity-100 backdrop-blur-lg lg:backdrop-blur-none  p-2 lg:p-0 flex w-full h-[100vh] lg:h-max `}
        >
          <Sort />
        </div>
        <div
          className={`lg:block  lg:static fixed z-50 lg:z-0 top-0 left-0 bg-black lg:bg-white overflow-auto lg:overflow-visible transition-transform lg:transition-none ${
            isCurrentFilter
              ? "translate-y-0 lg:translate-x-0"
              : "-translate-y-full lg:-translate-y-0"
          }  bg-opacity-60 lg:bg-opacity-100 backdrop-blur-lg lg:backdrop-blur-none  p-2 lg:p-0 flex w-full h-[100vh] lg:h-max `}
        >
          <Filter />
        </div>
      </div>

      <div className="bg-white gap-3 lg:w-3/4 mx-auto shadow-xl lg:shadow flex flex-col">
        {/* Hero Section */}
        {/* <HeroSecion /> */}

        {/* TopDeals */}
        {/* <TopDeals /> */}

        {/* Category Product List */}
        {/* <ProductLists /> */}
        {isSuccess && (
          <ListProducts data={CategoryProductResult} title={CategoryTitle} />
        )}

        {/* New Products in this category
        <NewCategoryProducts /> */}

        {/* Sponsored */}
        <FeaturedProducts
          data={FeaturedProductResult}
          title="Sponsored Products "
        />
      </div>
    </div>
  );
};
