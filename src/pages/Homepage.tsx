import { useState, useEffect } from "react";
import { HeroSecion } from "../components/HeroSection";
import { Categories } from "../components/Categories";

// Api Fetching state
import {
  useGetProductsQuery,
  useGetFeatruedProductsQuery,
} from "../features/products/productApi";
import { useGetCategoryQuery } from "../features/category/categoryApi";

import { FeaturedProducts } from "../components/FeaturedProducts";
import { Stores } from "../components/Stores";

import { useDispatch } from "react-redux";
import { activateIcon, activateBar } from "../features/header/headerSlice";
//Types Types
import { ProductTypeFull, FeaturedProductType } from "../types/ProductTypes";
import { ParentCategoryType } from "../types/CategoryType";

import { ListProducts } from "../components/ListProducts";

export const Homepage = () => {
  // Category API call state
  const { data: CategoryData, isSuccess: CategorySuccess } =
    useGetCategoryQuery(undefined);

  // Sub Category State
  const [SubCategory, SetSubCategory] = useState<ParentCategoryType[]>([]);

  console.log(SubCategory);

  // Products API call state
  const { data, isSuccess } = useGetProductsQuery(undefined);

  // Featured API call state
  const { data: featuredData, isSuccess: featuredSuccess } =
    useGetFeatruedProductsQuery(undefined);

  // New Products State
  const [NewProductResult, SetNewProductResult] = useState<ProductTypeFull[]>(
    []
  );

  // Popular Products State
  const [PopularProductResult, SetPopularProductResult] = useState<
    ProductTypeFull[]
  >([]);

  // Featured Products State
  const [FeaturedProductResult, SetFeaturedProductResult] = useState<
    FeaturedProductType[]
  >([]);

  // console.log(FeaturedProductResult);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activateBar());

    return () => {
      dispatch(activateIcon());
    };
  }, []);

  useEffect(() => {
    // Filter for Category (sub)
    if (CategorySuccess && CategoryData) {
      const MyNewSubCategory = [...CategoryData.results].filter(
        (catData) => catData.parent === null
      );
      //setting the state for Category (sub)
      SetSubCategory(MyNewSubCategory);
    }
  }, [CategoryData, CategorySuccess]); // Only runs when `isSuccess` or `data` changes

  useEffect(() => {
    // Sorting for New Product
    if (isSuccess && data) {
      const MyNewProduct = [...data.results].sort((a, b) => b.id - a.id);
      //setting the state for new product component
      SetNewProductResult(MyNewProduct);
    }
  }, [isSuccess, data]); // Only runs when `isSuccess` or `data` changes

  useEffect(() => {
    // Sorting for Popular Products
    if (isSuccess && data) {
      const MyPopularProduct = [...data.results].sort(
        (a, b) => b.total_sales - a.total_sales
      );
      //setting the state for Popular product component
      SetPopularProductResult(MyPopularProduct);
    }
  }, [isSuccess, data]); // Only runs when `isSuccess` or `data` changes

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
    <div>
      <div className="bg-gray-100 container gap-3 mx-auto flex flex-col">
        {/* Hero Section */}
        <HeroSecion />

        {/* Category Highlights */}
        <Categories data={SubCategory} title="Category" />

        {/* New Products */}
        <ListProducts data={NewProductResult} title="New Products " />

        {/* Featured Products */}
        <FeaturedProducts
          data={FeaturedProductResult}
          title="Featured Products "
        />

        {/* Official Store */}
        <Stores />

        {/* Popular Products */}
        <ListProducts data={PopularProductResult} title="Popular Products " />

        {/* Sponsored */}
        {/* Featured Products */}
        <FeaturedProducts
          data={FeaturedProductResult}
          title="Sponsored Products "
        />
      </div>
    </div>
  );
};

// export default Homepage;
