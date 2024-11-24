import React, { useState } from "react";
import Product1 from "../assets/product-1.jpg";
import Product2 from "../assets/product-2.jpg";
import Product3 from "../assets/product-3.jpg";
import Product4 from "../assets/product-4.jpg";
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

  const [selectedImage, setSelectedImage] = useState<string>(Product1);

  const images = [Product1, Product2, Product3, Product4, Product3, Product4];

  return (
    <div className="w-full my-responsive flex flex-col bg-white md:flex-row gap-3">
      <div className="md:w-1/2">
        <img
          src={selectedImage}
          alt="Selected Product"
          className="w-full h-5/6 object-cover aspect-square"
        />
        <div className="flex mt-3 my-custom-scrollbar space-x-3 overflow-scroll">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product thumbnail ${index + 1}`}
              className={`w-20 h-20 object-cover cursor-pointer rounded shadow ${
                selectedImage === img ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 md:w-1/2">
        {/* Name or Title */}
        <div className="w-full flex h-full flex-col relative gap-3 md:gap-5">
          <h1 className=" my-body-1">
            iPhone 12 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Labore, odit?{" "}
          </h1>

          {/* Price */}
          <div className="my-header-1">$899</div>

          {/* Size Color Quantity */}
          <div className="w-full flex md:flex-col gap-3 md:gap-6 max-w-2xs">
            <select className="w-full pb-1 bg-transparent border-b my-body-2 focus:outline-none focus:border-blue-800">
              <option value="option1">Select Size</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <select className="w-full bg-transparent border-b my-body-2 focus:outline-none focus:border-blue-800">
              <option value="option1">Select Color</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <select className="w-full bg-transparent border-b my-body-2 focus:outline-none focus:border-blue-800">
              <option value="option1">Select Quantity</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          {/* Description */}
          <div className=" flex flex-col gap-2">
            <h2 className="product-name-3 font-semibold">
              Product Description
            </h2>
            <p id="scrollTarget" className="product-nam-3 my-body-3">
              The iPhone 12 features a stunning design with a ceramic shield, an
              A14 Bionic chip, 5G speed, and advanced dual-camera system. This
              phone is available in various colors and storage options to suit
              your needs.
            </p>
            <p id="scrollTarget" className="product-name-3 text-base">
              The iPhone 12 features a stunning design with a ceramic shield, an
              A14 Bionic chip, 5G speed, and advanced dual-camera system. This
              phone is available in various colors and storage options to suit
              your needs.
            </p>
          </div>

          {/* Reviews */}
          <div className="flex items-center">
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

          {/* Add to Cart Button */}
          <button
            id="scrollButton"
            className="btn bg-gray-100 border text-base border-gray-600 w-full md:w-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
