import React from "react";
import { IoIosStar } from "react-icons/io";
import Product1 from "../assets/product-1.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

export const CustomerReviews: React.FC = () => {
  return (
    <div className=" bg-white my-responsive card-space">
      <div className="flex justify-between">
        <h2 className="batch-head">Customer Reviews</h2>
        <p className="more-btn">
          <span className="text-xs text-gray-400">More</span>
          <FaArrowRightLong className="batch-arrow" size={12} />
        </p>
      </div>

      <div className="space-y-3">
        {/* Reviews */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-white shadow-md p-3 flex flex-col gap-2">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="product-review">
                    <IoIosStar />
                  </span>
                ))}
              </div>
              <span className="product-review-2">(4 stars)</span>
            </div>
            <p className="product-name-2">
              Great phone, fast performance, and beautiful design. I love the
              camera quality!
            </p>
            <div className="flex gap-2  h-fit">
              <img
                src={Product1}
                className="w-10 h-10 rounded-full"
                alt="Reviewer Image"
              />
              <div className="flex flex-col justify-between">
                <p className="product-name-2">Reviewer Name || Anonymous</p>
                <p className="product-name-2">01/12/2024</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
