// import React from "react";
import { HeroSecion } from "../components/HeroSection";
import { Categories } from "../components/Categories";
// import { useGetProductsQuery } from "../features/products/productApi";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { NewProducts } from "../components/NewProducts";
import { PopularProducts } from "../components/PopularProducts";
import { Stores } from "../components/Stores";
import { Sponsored } from "../components/Sponsored";

import { useDispatch } from "react-redux";
import { activateIcon, activateBar } from "../features/header/headerSlice";
import { useEffect } from "react";

export const Homepage = () => {
  // const { data } = useGetProductsQuery(undefined);
  // console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activateBar());

    return () => {
      dispatch(activateIcon());
    };
  }, []);

  return (
    <div>
      <div className="bg-gray-100 container gap-3 mx-auto flex flex-col">
        {/* Hero Section */}
        <HeroSecion />

        {/* Category Highlights */}
        <Categories />

        {/* New Products */}
        <NewProducts />

        {/* Featured Products */}
        <FeaturedProducts />

        {/* Official Store */}
        <Stores />

        {/* Popular Products */}
        <PopularProducts />

        {/* Sponsored */}
        <Sponsored />
      </div>
    </div>
  );
};

// export default Homepage;
