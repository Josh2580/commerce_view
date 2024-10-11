import React from "react";
import { Link } from "react-router-dom";
import { FirstProductCard } from "./FirstProductCard";
import { FaArrowRightLong } from "react-icons/fa6";
import Product1 from "../assets/product-1.jpg";
import Product2 from "../assets/product-2.jpg";
import Product3 from "../assets/product-3.jpg";
import Product4 from "../assets/product-4.jpg";

const popularProducts = [
  {
    id: 1,
    name: "Smartphone XYZ",
    price: "$499",
    image: Product1,
  },
  {
    id: 2,
    name: "Designer Handbag",
    price: "$199",
    image: Product2,
  },
  { id: 3, name: 'LED TV 55"', price: "$699", image: Product3 },
  {
    id: 4,
    name: "Wireless Earbuds",
    price: "$99",
    image: Product4,
  },
];

export const PopularProducts: React.FC = () => {
  return (
    <div className=" bg-white responsive card-space">
      <div className="flex justify-between ">
        <h2 className="batch-head">Popular Products</h2>
        <p className="more-btn">
          <span className="text-xs text-gray-400">More</span>
          <FaArrowRightLong className="batch-arrow" size={12} />
        </p>
      </div>
      <div className="grid grid-cols-2 row gap-3">
        {popularProducts.map((product, i) => (
          <Link key={i} to={`/details/${product.name}/${product.id}`}>
            <FirstProductCard
              key={product.id}
              name={product.name}
              oldPrice={333.55}
              price={222.33}
              imageUrl={product.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
