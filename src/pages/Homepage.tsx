import { useState, useEffect } from "react";
import { HeroSecion } from "../components/HeroSection";
import { Categories } from "../components/Categories";
import {
  useGetProductsQuery,
  useGetFeatruedProductsQuery,
} from "../features/products/productApi";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { Stores } from "../components/Stores";
import { Sponsored } from "../components/Sponsored";

import { useDispatch } from "react-redux";
import { activateIcon, activateBar } from "../features/header/headerSlice";
import { ProductTypeFull, FeaturedProductType } from "../types/ProductTypes";
import { ListProducts } from "../components/ListProducts";

export const Homepage = () => {
  // Products RTK State API call
  const { data, isSuccess } = useGetProductsQuery(undefined);

  // Featured Products RTK State API call
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
    // Sorting for New Product
    if (isSuccess && data) {
      const MyNewProduct = [...data.results].sort((a, b) => b.id - a.id);
      //setting the state for new product component
      SetNewProductResult(MyNewProduct);
    }
  }, [isSuccess, data]); // Only runs when `isSuccess` or `data` changes

  useEffect(() => {
    // Sorting for Populat Products
    if (isSuccess && data) {
      const MyPopularProduct = [...data.results].sort(
        (a, b) => b.total_sales - a.total_sales
      );
      //setting the state for Popular product component
      SetPopularProductResult(MyPopularProduct);
    }
  }, [isSuccess, data]); // Only runs when `isSuccess` or `data` changes

  useEffect(() => {
    if (featuredSuccess && featuredData) {
      const MyFeaturedProduct = [...featuredData.results].sort(
        (a, b) => b.id - a.id
      );
      SetFeaturedProductResult(MyFeaturedProduct);
    }
  }, [featuredSuccess, featuredData]);

  return (
    <div>
      <div className="bg-gray-100 container gap-3 mx-auto flex flex-col">
        {/* Hero Section */}
        {/* <HeroSecion /> */}

        {/* Category Highlights */}
        <Categories />

        {/* New Products */}
        <ListProducts data={NewProductResult} title="New Products " />

        {/* Featured Products */}
        <FeaturedProducts
          data={FeaturedProductResult}
          title="Featured Products "
        />

        {/* Official Store */}
        {/* <Stores /> */}

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
