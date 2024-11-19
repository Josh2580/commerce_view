import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Product4 from "../assets/product-4.jpg";
import { StoreTitleType, StoreType } from "../types/StoreType";
import { FirstBatchCard } from "./FirstBatchCard";

export const Stores = (result: StoreTitleType) => {
  const [displayItems, setDisplayItems] = useState<StoreType[]>([]);

  // Handle resizing and update the displayed items based on the window size
  const handleResize = () => {
    const isLargeScreen = window.innerWidth >= 1024; // lg breakpoint in Tailwind
    const isMediumScreen = window.innerWidth >= 768; // md breakpoint in Tailwind
    if (isLargeScreen) {
      setDisplayItems(result.data.slice(0, 10)); // Show up to 10 items on large screens
    } else if (isMediumScreen) {
      setDisplayItems(result.data.slice(0, 8)); // Show up to 10 items on large screens
    } else {
      setDisplayItems(result.data.slice(0, 6)); // Show only 4 items on small screens
    }
  };

  useEffect(() => {
    handleResize(); // Initial load
    window.addEventListener("resize", handleResize); // On window resize

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [result]);

  if (!result) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white my-responsive card-space">
      <div className="flex justify-between">
        <h2 className="batch-head">{result.title}</h2>
        <p className="more-btn">
          <span className="text-xs text-gray-400">More</span>
          <FaArrowRightLong className="batch-arrow" size={12} />
        </p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 row gap-3">
        {displayItems.map((store, i) => (
          <Link key={i} to={`/details/${store.name}/${store.id}`}>
            <FirstBatchCard
              key={store.id}
              name={store.name}
              imageUrl={Product4}
              // imageUrl={(store.image_url && store.image_url) || Product2}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
