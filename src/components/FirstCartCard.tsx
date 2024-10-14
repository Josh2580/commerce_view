// import React from 'react'

import { IoHeartOutline } from "react-icons/io5";

type Props = {
  name: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  key?: string | number;
};

export const FirstCartCard = (product: Props) => {
  return (
    // <div className="container h-full bg-white">
    <div className=" h-full p-3 shadow flex gap-3 rounded overflow-hidden">
      <div className="w-20 flex flex-col gap-2 md:w-40">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full md:w-40 object-cover aspect-square"
        />
        <p className="product-name-2 ">Remove</p>
      </div>
      <div className="h-full w-full flex flex-col gap-2">
        <div className="flex flex-col items-start justify-between h-20 w-full">
          <h3 className="product-name-2 ">{product.name}</h3>
          <span className="product-price">
            {product.price} {product.price}
          </span>{" "}
          <span className="product-name text-gray-400">
            Size {product.price} Color
          </span>{" "}
        </div>
        {/* Quantity */}
        <div className="w-full flex justify-between">
          <select className="text-xs focus:outline-none focus:border-blue-800">
            <option value="option1">Select Quantity</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <p className="flex gap-2">
            {" "}
            <span className=" product-name-2">Save Item </span>{" "}
            <IoHeartOutline />
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
};
