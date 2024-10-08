// import React from "react";
import { HeroSecion } from "../components/Carousel";
import { Categories } from "../components/Categories";
import React from "react";
// import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
// import { useGetProductsQuery } from "../features/products/productApi";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { NewProducts } from "../components/NewProducts";
import { PopularProducts } from "../components/PopularProducts";
import { OfficialStore } from "../components/OfficialStore";
import { Sponsored } from "../components/Sponsored";

export const Homepage: React.FC = () => {
  // const { data } = useGetProductsQuery(undefined);
  // console.log(data);




  return (
    <div className="bg-gray-100 container gap-3 flex flex-col">
      {/* Hero Section */}
    
      <HeroSecion />
      {/* Category Highlights */}

      <Categories />

      {/* Featured Products */}
      <FeaturedProducts/>
      {/* New Products */}
      <NewProducts/>
      {/* Popular Products */}
      <PopularProducts/>
      {/* Official Store */}
      <OfficialStore/>

      {/* Sponsored */}
      <Sponsored/>


     
    </div>
  );
};

// export default Homepage;
