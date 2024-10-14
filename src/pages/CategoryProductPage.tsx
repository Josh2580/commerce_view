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
import { Sort } from "../components/Sort";

export const CategoryProductPage = () => {
  const dispatch = useDispatch();

  const isCurrentFilter = useSelector((state: any) => state.header.isFilter);
  const isCurrentSort = useSelector((state: any) => state.header.isSort);

  useEffect(() => {
    dispatch(activateIcon());
    dispatch(setSortFilter(true));

    return () => {
      dispatch(setSortFilter(false));
    };
  }, []);

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
