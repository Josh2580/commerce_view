import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Product2 from "../assets/product-2.jpg";
import { FirstBatchCard } from "./FirstBatchCard";
import { ParentCategoryType, CategoryTitleType } from "../types/CategoryType";

export const Categories = (result: CategoryTitleType) => {
  const [displayItems, setDisplayItems] = useState<ParentCategoryType[]>([]);

  // console.log(result);

  // Handle resizing and update the displayed items based on the window size
  const handleResize = () => {
    const isLargeScreen = window.innerWidth >= 1024; // lg breakpoint in Tailwind
    const isMediumScreen = window.innerWidth >= 768; // md breakpoint in Tailwind
    if (isLargeScreen) {
      setDisplayItems(result.data.slice(0, 6)); // Show up to 10 items on large screens
    } else if (isMediumScreen) {
      setDisplayItems(result.data.slice(0, 6)); // Show up to 10 items on large screens
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
      <div className="flex lg:grid lg:grid-cols-6 gap-3 overflow-scroll lg:overflow-hidden my-custom-scrollbar">
        {displayItems.map((cat, i) => (
          <Link key={i} to={`/${cat.name}/${cat.parent}/caty/${cat.id}`}>
            <FirstBatchCard
              key={cat.id}
              name={cat.name}
              imageUrl={Product2}
              // imageUrl={(cat.image_url && cat.image_url) || Product2}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
