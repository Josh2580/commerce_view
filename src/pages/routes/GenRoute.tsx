import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { FirstHeader } from "../../components/headers/FirstHeader";
import { useSelector, useDispatch } from "react-redux";
import { activateIcon } from "../../features/header/headerSlice";

export const GenRoute: React.FC = () => {
  const dispatch = useDispatch();

  const searchBar = useSelector((state: any) => state.header.searchBar);

  const isLargeScreen = window.innerWidth >= 1024; // lg breakpoint in Tailwind

  useEffect(() => {
    isLargeScreen && dispatch(activateIcon());
  }, [isLargeScreen]);

  return (
    <div className="">
      {/* Header */}
      <div className="fixed top-0 w-full z-40 ">
        <FirstHeader />
      </div>
      {/* <div className={`${searchBar ? "mt-20 pt-4" : "mt-20"}`}> */}
      <div className={`${searchBar ? "mt-24 pt-2" : "mt-12 lg:mt-20"}`}>
        {/* <div className={` mt-${searchBar ? "24" : "12"}  lg:mt-20"}`}> */}
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
