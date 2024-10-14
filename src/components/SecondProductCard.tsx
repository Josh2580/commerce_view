// import React from 'react'
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

type Props = {
  id: string | number;
  name: string;
  price: number | string;
  oldPrice?: number;
  imageUrl: string;
  sizes?: string | number;
  colors?: string | number;
  reviews?: string | number;
  verified?: boolean;
  company?: boolean;
  officailStore?: boolean;
  key?: string | number;
};

export const SecondProductCard = (product: Props) => {
  return (
    <div key={product.key} className="container  bg-white">
      <div className="bg-white shadow rounded overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover aspect-square"
        />
        <div className="p-3 flex flex-col gap-1">
          <h3 className="product-name">{product.name}</h3>
          <p className="flex gap-1 items-end">
            <span className="product-price">{product.price}</span>
            {product.oldPrice && (
              <span className="price-down">{product.oldPrice}</span>
            )}
          </p>
          <p className="m-0 p-0">
            {product.sizes && (
              <span className="product-size">{product.sizes} sizes, </span>
            )}
            {product.colors && (
              <span className="product-color">{product.colors} colors</span>
            )}
          </p>
          {product.reviews && (
            <p className="flex ">
              <span className="product-review">
                <IoIosStar />
              </span>
              <span className="product-review">
                <IoIosStar />
              </span>
              <span className="product-review">
                <IoIosStar />
              </span>
              <span className="product-review">
                <IoIosStarHalf />
              </span>
              <span className="product-review">
                <IoIosStarOutline />
              </span>
            </p>
          )}

          <p className="flex gap-1">
            {product.verified && (
              <span className="product-size">Verified || </span>
            )}
            {product.company && <span className="product-color">Company</span>}
          </p>
        </div>
      </div>
    </div>
  );
};
