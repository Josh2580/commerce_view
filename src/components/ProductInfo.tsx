import React from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

export const ProductInfo: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <h1 className="text-lg font-semibold ">iPhone 12</h1>
      <div className="flex items-center">
        {/* <div className="flex items-center space-x-1">
          {[...Array(4)].map((_, i) => (
            <svg
              key={i}
              className="font text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.39 2.82 1.03-6-4.37-4.26 6.05-.88L10 0l2.68 5.68 6.05.88-4.37 4.26 1.03 6z" />
            </svg>
          ))}
          <svg
            className="w-5 h-5 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.39 2.82 1.03-6-4.37-4.26 6.05-.88L10 0l2.68 5.68 6.05.88-4.37 4.26 1.03 6z" />
          </svg>
        </div> */}

        <p className="flex ">
          <span className="product-review-2 ">
            <IoIosStar />
          </span>
          <span className="product-review-2">
            <IoIosStar />
          </span>
          <span className="product-review-2">
            <IoIosStar />
          </span>
          <span className="product-review-2">
            <IoIosStarHalf />
          </span>
          <span className="product-review-2">
            <IoIosStarOutline />
          </span>
        </p>

        <span className="product-reviews-2">(120 reviews)</span>
      </div>
      <div className="product-price-2">$899</div>

      <div className="w-full flex gap-3 max-w-2xs">
        <select className="w-full pb-1 bg-transparent border-b border-gray-600 text-sm sm:text-sm focus:outline-none focus:border-blue-800">
          <option value="option1">Select Size</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <select className="w-full bg-transparent border-b border-gray-600 text-sm sm:text-sm focus:outline-none focus:border-blue-800">
          <option value="option1">Select Color</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <select className="w-full bg-transparent border-b border-gray-600 text-sm sm:text-sm focus:outline-none focus:border-blue-800">
          <option value="option1">Select Quantity</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      <div className="flex flex-col space-x-4">
        <button className="my-btn w-full md:w-auto">Add to Cart</button>
      </div>

      <div className="mt-4">
        <button className="text-blue-600 hover:underline">
          Add to Wishlist
        </button>
        <button className="ml-4 text-blue-600 hover:underline">Compare</button>
      </div>
    </div>
  );
};
