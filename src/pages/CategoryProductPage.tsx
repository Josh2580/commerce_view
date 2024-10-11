import React from "react";
import { HeroSecion } from "../components/HeroSection";
import { TopDeals } from "../components/TopDeals";
import { ProductLists } from "../components/ProductLists";
import { NewCategoryProducts } from "../components/NewCategoryProducts";
import { Sponsored } from "../components/Sponsored";

export const CategoryProductPage: React.FC = () => {
  return (
    <div className="bg-gray-100 container gap-3 flex flex-col">
      {/* Hero Section */}
      <HeroSecion />

      {/* TopDeals */}
      <TopDeals />

      {/* Category Product List */}
      <ProductLists />

      {/* New Products in this category */}
      <NewCategoryProducts />

      {/* TopDeals */}
      <Sponsored />
    </div>
  );
};
