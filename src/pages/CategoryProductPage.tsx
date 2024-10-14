// import { HeroSecion } from "../components/HeroSection";
import { TopDeals } from "../components/TopDeals";
import { ProductLists } from "../components/ProductLists";
import { NewCategoryProducts } from "../components/NewCategoryProducts";
import { Sponsored } from "../components/Sponsored";
import { Filter } from "../components/Filter";

import { useDispatch, useSelector } from "react-redux";
import {
  activateIcon,
  // activateBar,
  setSortFilter,
} from "../features/header/headerSlice";
import { useEffect } from "react";

export const CategoryProductPage = () => {
  const dispatch = useDispatch();

  const isCurrentFilter = useSelector((state: any) => state.header.isFilter);

  useEffect(() => {
    dispatch(activateIcon());
    dispatch(setSortFilter(true));

    return () => {
      // dispatch(activateBar());
      dispatch(setSortFilter(false));
    };
  }, []);

  return (
    <div className="relative container w-full gap-5 mx-auto my-responsive lg:flex ">
      {/* <div className="w-1/4 hidden lg:block "> */}
      <div
        className={`absolute bg-black transition-transform  ${
          isCurrentFilter ? "translate-x-1" : "translate-x-80"
        }  bg-opacity-60 backdrop-blur-lg  p-2 flex w-1/2 `}
      >
        <Filter />
      </div>

      <div className="bg-white gap-3 lg:w-3/4 mx-auto shadow-xl lg:shadow flex flex-col">
        {/* Hero Section */}
        {/* <HeroSecion /> */}

        {/* TopDeals */}
        <TopDeals />

        {/* Category Product List */}
        <ProductLists />

        {/* New Products in this category */}
        <NewCategoryProducts />

        {/* TopDeals */}
        <Sponsored />
      </div>
    </div>
  );
};
