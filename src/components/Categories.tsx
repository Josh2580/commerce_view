import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FirstBatchCard } from "./FirstBatchCard";
import Product1 from "../assets/product-1.jpg"
import Product2 from "../assets/product-2.jpg"
import Product3 from "../assets/product-3.jpg"
import Product4 from "../assets/product-4.jpg"


const batchData = [
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
  { id: 3, name: 'LED TV 55"',  image: Product3 },
  {
    id: 4,
    name: "Wireless Earbuds",
    image: Product4,
  },

];


export const Categories: React.FC = () => {
  return (
    <div className=" bg-white responsive card-space">
    <div className="flex justify-between " >
    <h2 className="batch-head"></h2>
    <p className="more-btn">

    <span className="text-xs text-gray-400" >More</span>
    <FaArrowRightLong className="batch-arrow" size={12} />
    </p>
    </div>
    <div className="grid grid-cols-4  gap-3">
      {batchData.map((product) => (
        <Link to={`category/${product.name}/${product.id}`}>
          <FirstBatchCard key={product.id} name={product.name}  imageUrl={product.image}/>
        </Link>
      ))}
    </div>
  </div>
  );
};
