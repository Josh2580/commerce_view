import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Product1 from "../assets/product-1.jpg";
import Product2 from "../assets/product-2.jpg";
import Product3 from "../assets/product-3.jpg";
import Product4 from "../assets/product-4.jpg";
import { SecondProductCard } from "./SecondProductCard";
import ReactPaginate from "react-paginate";

const featuredProducts = [
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
  {
    id: 5,
    name: "Smartphone XYZ",
    price: "$499",
    image: Product1,
  },
  {
    id: 6,
    name: "Designer Handbag",
    price: "$199",
    image: Product2,
  },
  { id: 7, name: 'LED TV 55"', price: "$699", image: Product3 },
  {
    id: 8,
    name: "Wireless Earbuds",
    price: "$99",
    image: Product4,
  },
];

export const ProductLists: React.FC = () => {
  return (
    <div className=" bg-white responsive card-space">
      <div className="flex justify-between">
        <h2 className="batch-head">Category Title</h2>
        <p className="more-btn">
          <span className="text-xs text-gray-400">More</span>
          <FaArrowRightLong className="batch-arrow" size={12} />
        </p>
      </div>
      <div className="grid grid-cols-2 row gap-3">
        {featuredProducts.map((product) => (
          <Link to={`/details/${product.name}/${product.id}`}>
            <SecondProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              oldPrice={1795.99}
              imageUrl={product.image}
              sizes={10}
              colors={8}
              reviews={566}
              verified={true}
              company={true}
              officailStore={true}
            />
          </Link>
        ))}
      </div>
      <div className="">
        {/* Pagination */}
        <ReactPaginate
          className="flex justify-between text-gray-800"
          breakLabel="..."
          nextLabel="next >"
          // onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={3}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};
