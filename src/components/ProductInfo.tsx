import React from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

export const ProductInfo: React.FC = () => {
  // const button: any = document.getElementById("scrollButton");
  // const target: any = document.getElementById("scrollTarget");

  // addEventListener("scroll", () => {
  //   const targetRect = target.getBoundingClientRect();
  //   const buttonHeight = button.offsetHeight;

  //   // When the target div's reaches the bottom of the screen

  //   if (targetRect.top <= window.innerHeight - buttonHeight) {
  //     button.classList.remove("fixed");
  //     button.classList.add("absolute");
  //     button.style.top = `${
  //       target.offsetTop + target.offsetHeight - buttonHeight
  //     }`;
  //   } else {
  //     button.classList.remove("absolute");
  //     button.classList.add("fixed");
  //     button.style.bottom = "0px";
  //     button.style.top = ""; // Fixed back to top
  //   }
  // });

  return (
    <div className="w-full flex flex-col gap-3 ">
      {/* Name or Title */}
      <div className="w-full flex h-full flex-col relative gap-3">
        <h1 className="product-name-3 ">iPhone 12</h1>
        {/* Reviews */}
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

          <span className="product-reviews">(120 reviews)</span>
        </div>
        {/* Price */}
        <div className="product-price-2">$899</div>

        {/* Size Color Quantity */}
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

        {/* Description */}
        <div className="">
          <h2 className="batch-head">Product Description</h2>
          <p id="scrollTarget" className="product-name-3">
            The iPhone 12 features a stunning design with a ceramic shield, an
            A14 Bionic chip, 5G speed, and advanced dual-camera system. This
            phone is available in various colors and storage options to suit
            your needs.
          </p>
        </div>
        {/* Add to Cart Button */}

        <button
          id="scrollButton"
          className="btn bg-gray-100  border border-gray-600 w-full md:w-auto"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
