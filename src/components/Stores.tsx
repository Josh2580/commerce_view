import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";
import Product1 from "../assets/product-1.jpg";
import Product2 from "../assets/product-2.jpg";
import Product3 from "../assets/product-3.jpg";
import Product4 from "../assets/product-4.jpg";
import { FirstBatchCard } from "./FirstBatchCard";

const storeProducts = [
  {
    id: 1,
    name: "Smartphone XYZ",
    image: Product1,
  },
  {
    id: 2,
    name: "Designer Handbag",
    image: Product2,
  },
  { id: 3, name: 'LED TV 55"', image: Product3 },
  {
    id: 4,
    name: "Wireless Earbuds",
    image: Product4,
  },
  {
    id: 5,
    name: "Smartphone XYZ",
    image: Product1,
  },
  {
    id: 6,
    name: "Designer Handbag",
    image: Product2,
  },
  { id: 7, name: 'LED TV 55"', image: Product3 },
  {
    id: 8,
    name: "Wireless Earbuds",
    image: Product4,
  },
  {
    id: 9,
    name: "Wireless Earbuds",
    image: Product1,
  },
  {
    id: 10,
    name: "Wireless Earbuds",
    image: Product3,
  },
  {
    id: 11,
    name: "Wireless Earbuds",
    image: Product4,
  },
  {
    id: 12,
    name: "Wireless Earbuds",
    image: Product2,
  },
];

export const Stores = () => {
  const [displayItems, setDisplayItems] = useState<
    { id: number; name: string; image: string }[]
  >([]);

  // Handle resizing and update the displayed items based on the window size
  const handleResize = () => {
    const isLargeScreen = window.innerWidth >= 1024; // lg breakpoint in Tailwind
    const isMediumScreen = window.innerWidth >= 768; // md breakpoint in Tailwind
    if (isLargeScreen) {
      setDisplayItems(storeProducts.slice(0, 10)); // Show up to 10 items on large screens
    } else if (isMediumScreen) {
      setDisplayItems(storeProducts.slice(0, 8)); // Show up to 10 items on large screens
    } else {
      setDisplayItems(storeProducts.slice(0, 6)); // Show only 4 items on small screens
    }
  };

  useEffect(() => {
    handleResize(); // Initial load
    window.addEventListener("resize", handleResize); // On window resize

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-white my-responsive card-space">
      <div className="flex justify-between">
        <h2 className="batch-head">Stores</h2>
        <p className="more-btn">
          <span className="text-xs text-gray-400">More</span>
          <FaArrowRightLong className="batch-arrow" size={12} />
        </p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 row gap-3">
        {displayItems.map((product, i) => (
          <Link key={i} to={`/details/${product.name}/${product.id}`}>
            <FirstBatchCard
              key={product.id}
              name={product.name}
              imageUrl={product.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
